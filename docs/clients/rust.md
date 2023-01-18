# Rust Client Quick Start

## Installation

Add the following line to your `Cargo.toml` file:

Use crate from [crates.io](https://crates.io/):

```toml
hstreamdb = "0.1.1"
```

Or, use the latest Git version:

```toml
hstreamdb = { git = "https://github.com/hstreamdb/hstreamdb-rust" }
```

## Connect to HServer

To connect to the HStreamDB instance, you need to find the endpoint on the
control panel, where you can also download the security certificates.

```rust
async fn connect_example() {
    let pem_bytes: Vec<u8> = todo!();
    let client = Client::new(
        "your_server_url".to_string()
        ChannelProviderSettings::builder()
            .set_tls_config(ClientTlsConfig::new().ca_certificate(Certificate::from_pem(pem_bytes)))
            .build(),
    );
}
```

## Example Usage

Here we will provide some simple examples of how to use hstreamdb-client. For
more details on introduction and usage, please check the
[guides](https://hstream.io/docs/en/latest/guides/write.html).

### Write Data to Streams

```rust
use hstreamdb::client::Client;
use hstreamdb::producer::FlushSettings;
use hstreamdb::{CompressionType, Payload, Record, Stream};
use rand::distributions::Alphanumeric;
use rand::{thread_rng, Rng};

async fn produce_example() -> anyhow::Result<()> {
    let mut client = Client::new("your_server_url".to_string()).await?;

    let stream_name = "test_stream";

    client
        .create_stream(Stream {
            stream_name: "test_stream".to_string(),
            replication_factor: 3,
            backlog_duration: 7 * 24 * 3600,
            shard_count: 12,
        })
        .await?;
    println!("{:?}", client.list_streams().await?);

    // `Appender` is cheap to clone
    let (appender, mut producer) = client
        .new_producer(
            stream_name.to_string(),
            hstreamdb_pb::CompressionType::Zstd,
            FlushSettings {
                len: 10,
                size: 4000 * 20,
            },
        )
        .await?;

    _ = tokio::spawn(async move {
        let mut appender = appender;

        for _ in 0..10 {
            for _ in 0..100 {
                let i: u32 = rand::random();
                let payload: Vec<u8> = thread_rng()
                    .sample_iter(&Alphanumeric)
                    .take(20)
                    .map(char::from)
                    .collect::<String>()
                    .into_bytes();
                appender
                    .append(Record {
                        partition_key: format!("test_partition_key_{i}"),
                        payload: Payload::RawRecord(payload),
                    })
                    .unwrap();
            }
        }
        drop(appender)
    });

    // when all `Appender`s for the corresponding `Producer` have been dropped,
    // the `Producer` will wait for all requests to be done and then stop
    producer.start().await;

    Ok(())
}
```

### Read Data from Subscriptions

```rust
use hstreamdb::client::Client;
use hstreamdb::{SpecialOffset, Subscription};
use tokio_stream::StreamExt;

async fn consume_example() -> anyhow::Result<()> {
    let addr = "your_server_url".to_string()
    let mut client = Client::new(addr).await.unwrap();

    let stream_name = "test_stream";
    let subscription_id = "test_subscription";

    client
        .create_subscription(Subscription {
            subscription_id: subscription_id.to_string(),
            stream_name: stream_name.to_string(),
            ack_timeout_seconds: 60 * 60,
            max_unacked_records: 1000,
            offset: SpecialOffset::Earliest,
        })
        .await?;
    println!("{:?}", client.list_subscriptions().await?);

    let mut stream = client
        .streaming_fetch("test_consumer".to_string(), subscription_id.to_string())
        .await
        .unwrap();
    let mut records = Vec::new();
    while let Some((record, ack)) = stream.next().await {
        println!("{record:?}");
        records.push(record);
        ack().unwrap();
        if records.len() == 10 * 100 {
            println!("done");
            break;
        }
    }

    client
        .delete_subscription(subscription_id.to_string(), true)
        .await?;

    Ok(())
}
```

### Read Data from a Stream Shard Reader

```rust
use hstreamdb::{ChannelProviderSettings, Client};

async fn reader_example() {
    let client = Client::new(
        "your_server_url".to_string(),
        ChannelProviderSettings::default(),
    )
    .await
    .unwrap();
    let reader_id = todo!();
    let stream_name = todo!();
    let shard_id = todo!();
    let shard_offset = todo!();
    let timeout_ms = todo!();
    let shard_reader_id = client
        .create_shard_reader(reader_id, stream_name, shard_id, shard_offset, timeout_ms)
        .await
        .unwrap();
    let records = client.read_shard(&shard_reader_id, 1000).await.unwrap();
    println!("{:?}", records);
    client.delete_shard_reader(&shard_reader_id).await.unwrap();
}
```
