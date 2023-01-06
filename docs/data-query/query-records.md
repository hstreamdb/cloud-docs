# Query Records

This page describes how to query records from a stream.

## Query records from Records page

After navigating to the **Records** page, you can query records from a stream.

Below are several filters you can use to query records:

- **Stream**: Select the stream you want to query records from.
- **Shard**: Select one of the shards in the stream you want to query records from.
- **Starting record ID**: Search from a specified record ID.

:::tip
The **Stream** and **Shard** will be filled automatically after the page loaded.
Default the filling value is the last stream and the last shard in the stream.
You can change them to query records from another stream or shard.
:::

::: tip
Currently, we default to show at most **100 records** after querying. If you want to query more records,
please specify a recent record ID in the **Starting record ID** field.
:::

After filling in the filters, click **Search** button to query records.

For each record, you can view the following information:

1. The record's **ID**.
2. The record's **Key**.
3. The record's **Value**.
4. The **Shard ID** of the record.
5. The **Creation time** of the record.

In the next section, you will learn how to query records from Stream Details page.

## Query records from Stream Details page

Similar to [Query records from Records page](#query-records-from-records-page),
you can also query records from the **Stream Details** page.

The difference is that you can query records without needing to specify the stream.
The records will automatically be queried from the stream you are currently viewing.

For more details, please refer to [Search records in a stream](../manage-streams/stream-details.md#search-records-in-a-stream).
