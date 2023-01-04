# Stream Details

This page describes how to view the details of a stream in different perspectives.

## View Streams page

After logging in to the dashboard, the **Streams** page will be displayed by default.
The **Streams** page lists all the streams in your account with a high-level overview.

For each stream, you can view the following information:

1. The stream's **name**.
2. The number of **shards** in the stream.
3. The number of **replicas** in the stream.
4. The **Data retention period** of the stream.
5. The **Creation time** of the stream.
6. The **More** button, which is used to expand the operations of the stream:

   - View the metrics of the stream.
   - View the subscriptions of the stream.
   - View the shard details of the stream.
   - Delete the stream.

To view a specific stream, click the stream's name. [The details page of the stream](#view-stream-details) will be displayed.

## View stream details

The details page displays the detailed information of a stream:

1. All the information in the [Streams page](#view-streams-page) is displayed.
2. Different tabs are provided to view the related information of the stream:

   - [**Metrics**](#view-stream-metrics): View the metrics of the stream.
   - [**Subscriptions**](#view-stream-subscriptions): View the subscriptions of the stream.
   - [**Shards**](#view-stream-shards): View the shard details of the stream.
   - [**Records**](#search-records-in-a-stream): Search records in the stream.

### View stream metrics

After clicking the **Metrics** tab, you can view the metrics of the stream.
The default duration is **last 5 minutes**. You can select different durations to control the time range of the metrics:

- last 5 minutes
- last 1 hour
- last 3 hours
- last 6 hours
- last 12 hours
- last 1 day
- last 3 days
- last 1 week

The metrics of the stream include (with last 5 minutes as an example), from left to right:

1. The **Append requests** chart shows the number of requests to the stream in the last 5 minutes.
2. The **Failed append requests** chart shows the number of failed requests to the stream in the last 5 minutes.
3. The **Append requests throughout** chart shows the number of requests to the stream per second in the last 5 minutes.
4. The **Append records throughout** chart shows the number of records to the stream per second in the last 5 minutes.
5. The **Append Bytes throughout** chart shows the number of bytes to the stream per second in the last 5 minutes.

### View stream subscriptions

After clicking the **Subscriptions** tab, you can view the subscriptions of the stream.

To create a new subscription, please refer to [Create a Subscription](../manage-subscriptions/create-a-subscription.md).

For more details about the subscription, please refer to [Subscription Details](../manage-subscriptions/subscription-details.md)

### View stream shards

After clicking the **Shards** tab, you can view the shard details of the stream.

For each shard, you can view the following information:

1. The shard's **ID**.
2. The **Range start** of the shard.
3. The **Range end** of the shard.
4. The shard's current **Status**.

You can use the shard's ID to in search records. Please refer to [Search records in a stream](#search-records-in-a-stream) or [Query Records](../data-query/query-records.md).

### Search records in a stream

After clicking the **Records** tab, you can search records in the stream.

::: tip

To search data in all streams, go to the [Data Query](../data-query/query-records.md) page.

:::

You can specify the following parameters to search records:

1. **Shard ID**: The ID of the shard to search.
2. **Starting record ID**: The ID of the starting record to search. The default number of records to search is **100**.
