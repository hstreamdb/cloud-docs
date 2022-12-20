# Write Records to a Stream

After creating a stream, you can write records to it according to the needs of your application.
This page describes how to write records to a stream.

## Step1. Preparation

In order to write records, you need to create a stream first.

1. If you do not have a stream, please refer to [Create a Stream](./create-a-stream.md) to create a stream.

2. Go into any stream you want to write records to in the **Streams** page.

3. Click **Write Records** button to write records to the stream.

## Step2. Write records

A record is like a piece of JSON data. You can add arbitrary fields to a record, only ensure that the record is a valid JSON object.

A record also ship with a partition key, which is used to determine which shard the record will be allocated to and improve the read/write performance.

::: tip
For more details about partition key, please refer to [Partition Key](https://hstream.io/docs/en/latest/guides/write.html#write-records-with-partition-keys).
:::

Take the following steps to write records to a stream:

1. Specify the optional **Key**. This is the partition key of the record. If not provided, the server will automatically assign a default key to the record.

2. Fill in the **Value**. This is the content of the record. It must be a valid JSON object.

3. Click **Produce** button to write the record to the stream.

4. If the record is written successfully, you will see a success message below the **Produce** button. A success response will also be displayed in the **Response** box.

5. If the record is written failed, you will see a failure message below the **Produce** button.
