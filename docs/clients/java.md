# Quick Start with Java Client

## Installation

The library artefact is published in Maven central,
available at [hstreamdb-java](https://search.maven.org/artifact/io.hstream/hstreamdb-java).

### Maven

For Maven Users, the library can be included easily like this:

```xml
<dependencies>
  <dependency>
    <groupId>io.hstream</groupId>
    <artifactId>hstreamdb-java</artifactId>
    <version>0.10.0</version>
  </dependency>
</dependencies>
```

### Gradle

For Gradle Users, the library can be included easily like this:

```groovy
implementation 'io.hstream:hstreamdb-java:0.10.0'
```

## Connect to HServer

To connect to the HStreamDB instance, you need to find the endpoint on the control panel, where you can also download the security certificates.

```java
import io.hstream.*;

public class ConnectExample {
    public static void main(String[] args) throws Exception {
        final String serviceUrl = "your_service_endpoint";
        // Create a client
        HStreamClient client = HStreamClient
          .builder()
          .serviceUrl(serviceUrl)
          .enableTls()
          .tlsCaPath("path/to/ca.cert.pem")
          // for authentication
          .enableTlsAuthentication()
          .tlsKeyPath("path/to/role01.key-pk8.pem")
          .tlsCertPath("path/to/signed.role01.cert.pem")
          .build();

        // Do something with the client
        System.out.println("Connected");

        client.close();
    }
}
```

## Example Usage

Here we will provide some simple examples of how to use hstreamdb-client. For more details on introduction and usage, please check the [guides](https://hstream.io/docs/en/latest/guides/write.html).

### Work with Streams

```java
// Create a new stream
client.createStream(streamName
                   , (short) 1 // replication factor
                   , 10 // Number of shards
                   , 7 * 24 * 3600 // backlog retention time in seconds
                   );

// Get the list of streams
for(Stream stream: client.listStreams()) {
  System.out.println(stream.getStreamName());
}

// Delete a stream
client.deleteStream("test_stream");
```

### Write Data to a Stream

**Please do not write both binary data and hrecord in one stream.**

```java
// Set up bufferedProducer
BatchSetting batchSetting =
    BatchSetting.newBuilder()
        .recordCountLimit(100)
        .bytesLimit(4096)
        .ageLimit(100)
        .build();

FlowControlSetting flowControlSetting =
    FlowControlSetting.newBuilder()
        .bytesLimit(40960)
        .build();

BufferedProducer batchedProducer =
    client.newBufferedProducer().stream("test_stream")
            .batchSetting(batchSetting)
            .flowControlSetting(flowControlSetting)
            .build();

// Start writing raw data to the stream
Random random = new Random();
for(int i = 0; i < 1000; ++i) {
    random.nextBytes(rawRecord);
    Record recordB = Record.newBuilder().rawRecord(rawRecord).build();
    batchedProducer.write(recordB);
}
// flush and close batchedProducer
batchedProducer.close();
```

### Consume data with a Subscription

```java
// Create a subscription to the stream
Subscription subscription =
    Subscription
        .newBuilder()
        .subscription("test_subscription")
        .stream("test_stream")
        .ackTimeoutSeconds(600) // The default setting is 600 seconds
        .maxUnackedRecords(10000) // The default setting is 10000 records
        .build();
client.createSubscription(subscription);

// Create a consumer attach to the subscription
Consumer consumer =
    client
        .newConsumer()
        .subscription("test_subscription")
        .rawRecordReceiver(
            ((receivedRawRecord, responder) -> {
                System.out.println(receivedRawRecord.getRecordId());
                responder.ack();
            }))
        .build();

// Start the consumer
consumer.startAsync().awaitRunning();
System.out.println("the consumer is started");
```

### Read Data from a Stream Shard

```java
// Please change the value of shardId to the ones you can get with listShards, or from the control panel.
long shardId = 0;
StreamShardOffset offset = new StreamShardOffset(EARLIEST);
Reader reader =
    client
        .newReader()
        .readerId("my_readerId")
        .streamName("my_stream")
        .shardId(shardId)
        .shardOffset(offset) // default: EARLIEST
        .timeoutMs(1000) // default: 0
        .build();

List<Record> records = reader.read(10).join();

System.out.println("Read records: " + records);

reader.close();
```
