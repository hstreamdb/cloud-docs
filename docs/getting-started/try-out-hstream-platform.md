# Try out the HStream Platform

This page guides you on how to try out the HStream Platform quickly.
You can create a stream and then write records to or query records from the stream.

## Step1. Create a stream

1. If you do not have an HStream Platform account, [sign up for one](./apply-for-a-trial.md).

2. Log in to the HStream Platform.

3. On the **Streams** page, click the **New Stream** button.

4. In the **New Stream** dialog, provide a stream name and leave the other fields as default.

5. Click the **Confirm** button.

The stream will be created immediately, and you will see the stream listed on the **Streams** page.

::: info
For more information about how to create a stream, see [Create a Stream](../manage-streams/create-a-stream.md).
:::

## Step2. Write records to the stream

After creating a stream, you can write records to the stream. Go to the stream details page by clicking the stream name and
then click the **Write Records** button.
A drawer will appear, and you can write records to the stream in the drawer.

In this example, we will write the following record to the stream:

```json
{ "name": "Alice", "age": 18 }
```

Please fill it in the **Value** Field and click the **Produce** button.

If the record is written successfully, you will see a success message and the response
of the request.

Next, we can query this record from the stream.

::: info
For more information about how to write records to a stream, see [Write Records to a Stream](../manage-streams/write-records-to-a-stream.md).
:::

## Step3. Query records from the stream

After writing records to the stream, you can query records from the stream. Go back
to the stream page, click the **Records** tab, you will see a empty table.

Click the **Search** button, and then the record written in the previous step will be displayed.

## Next steps

- Explore the [stream in details](../manage-streams/stream-details.md).
- [Create a subscription](../manage-subscriptions/create-a-subscription.md) to consume records from the stream.
- [Query all records](../data-query/query-records.md) from streams.
