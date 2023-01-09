# Try out HStream Platform

This page guides you how to try out the HStream Platform quickly. You will create a stream,
and then write records to the stream and query records from the stream.

## Step1. Create a stream

1. If you do not have a HStream Platform account, [sign up for a trial account](./apply-for-a-trial.md).

2. Log in to the HStream Platform.

3. On the **Streams** page, click the **New Stream** button.

4. In the **New Stream** dialog, fill in a stream name, and then leave the other fields as default.

5. Click the **Confirm** button.

A stream will be created at once and you will see the stream in the **Streams** page.

::: tip
For more information about how to create a stream, see [Create a Stream](../manage-streams/create-a-stream.md).
:::

## Step2. Write records to the stream

After creating a stream, you can write records to the stream. Go into the stream and click **Write Records**
button. Then a drawer will be opened. In the drawer, you can write records to the stream.

In this example, we write the following record to the stream:

```json
{ "name": "Alice", "age": 18 }
```

Please fill it in the **Value** Field, and then click the **Produce** button.

If the record are written successfully, you will see a success message and the response
of the record.

Next, we will query this record from the stream.

::: tip
For more information about how to write records to a stream, see [Write Records to a Stream](../manage-streams/write-records-to-a-stream.md).
:::

## Step3. Query records from the stream

After writing records to the stream, you can query records from the stream. Back
to the stream page, click the **Records** tab, you will see a empty table.

Click the **Search** button, and then the record written in the previous step will be displayed.

## Next steps

- Explore the [detailed data of stream](../manage-streams/stream-details.md).
- [Create a subscription](../manage-subscriptions/create-a-subscription.md) to consume records from the stream.
- [Query all records](../data-query/query-records.md) from streams.
