# Query Records

This page describes how to query records from a stream.

## Query records from the Records page

After navigating to the **Records** page, you can query records from a stream.

Below are several filters you can use to query records:

- **Stream**: Select the stream you want to query records.
- **Shard**: Select one of the shards in the stream you want to query records.
- **Starting record ID**: Search from a specified record ID.

::: info
The **Stream** and **Shard** will be filled automatically after loading the page.
By default, the filled value is the last stream and the last shard in the stream.
You can change them to query records from another stream or shard.
:::

::: info
We default to showing at most **100 records** after querying. If you want to query more records,
please specify a recent record ID in the **Starting record ID** field.
:::

After filling in the filters, click the **Search** button to query records.

For each record, you can view the following information:

1. The **ID** of the record.
2. The **Key** of the record.
3. The **Value** of the record.
4. The **Shard ID** of the record.
5. The **Creation time** of the record.

In the next section, you will learn how to query records from the Stream Details page.

## Query records from the Stream Details page

Similar to [Query records from Records page](#query-records-from-the-records-page),
you can also query records from the **Stream Details** page.

The difference is that you can query records without specifying the stream.
The records will automatically be queried from the stream you are currently viewing.

For more details, please refer to [Search records in a stream](../manage-streams/stream-details.md#search-records-in-a-stream).
