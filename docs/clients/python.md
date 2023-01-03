# Quick Start with Python Client

## Installation

Create a new virtual environment if you prefer to use isolated environments:

```sh
virtualenv -p python3 ./venv
source ./venv/bin/activate
```

Install hstreamdb:

```sh
pip install hstreamdb
```

## Connect to HServer

To connect to the HStreamDB instance, you need to find the endpoint on the control panel, where you can also download the security certificates.

```python
import asyncio
import hstreamdb
import os

# NOTE: Replace with your own host and port
host = os.getenv("GUIDE_HOST", "127.0.0.1")
port = os.getenv("GUIDE_PORT", 6570)

# Run: asyncio.run(main(your_async_function))
async def main(*funcs):
    async with await hstreamdb.insecure_client(host=host, port=port) as client:
        for f in funcs:
            await f(client)
```

## Example Usage

Here we will provide some simple examples of how to use hstreamdb-client. For more details on introduction and usage, please check the [guides](https://hstream.io/docs/en/latest/guides/write.html).

### Work with Streams

```python
async def create_stream(client):
    await client.create_stream(
        stream_name, replication_factor=1, backlog=24 * 60 * 60, shard_count=1
    )

async def delete_stream(client):
    await client.delete_stream(stream_name, ignore_non_exist=True, force=True)

async def list_streams(client):
    ss = await client.list_streams()
    for s in ss:
        print(s)
```

### Buffered Appends

```python
class AppendCallback(hstreamdb.BufferedProducer.AppendCallback):
    count = 0

    def on_success(self, stream_name, payloads, stream_keyid):
        self.count += 1
        print(f"Batch {self.count}: Append success with {len(payloads)} payloads.")

    def on_fail(self, stream_name, payloads, stream_keyid, e):
        print("Append failed!")
        print(e)

async def buffered_append_records(client):
    p = client.new_producer(
        append_callback=AppendCallback(),
        size_trigger=10240,
        time_trigger=0.5,
        retry_count=2,
    )

    for i in range(50):
        await p.append(stream_name, b"some_raw_binary_bytes")
        await p.append(stream_name, {"msg": "hello"})

    await p.wait_and_close()
```

### Consume data with a Subscription

```python
async def create_subscription(client):
    await client.create_subscription(
        subscription,
        stream_name,
        ack_timeout=600,
        max_unacks=10000,
        offset=hstreamdb.SpecialOffset.EARLIEST,
    )

class Processing:
    count = 0
    max_count: int

    def __init__(self, max_count):
        self.max_count = max_count

    async def __call__(self, ack_fun, stop_fun, rs_iter):
        print("max_count", self.max_count)
        rs = list(rs_iter)
        for r in rs:
            self.count += 1
            print(f"[{self.count}] Receive: {r}")
            if self.max_count > 0 and self.count >= self.max_count:
                await stop_fun()
                break

        await ack_fun(r.id for r in rs)

async def subscribe_records(client):
    consumer = client.new_consumer("new_consumer", subscription, Processing(10))
    await consumer.start()
```

### Read records with a Reader

```python
async def read_reader(client):
    offset = hstreamdb.ShardOffset()
    offset.specialOffset = hstreamdb.SpecialOffset.EARLIEST
    max_records = 10
    async with client.with_reader(
        stream_name, "your_reader_id", offset, 1000
    ) as reader:
        records = await reader.read(max_records)
        for i, r in enumerate(records):
            print(f"[{i}] payload: {r.payload}")
```
