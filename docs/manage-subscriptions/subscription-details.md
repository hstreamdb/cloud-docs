# Subscription Details

This page describes how to view the details of a subscription from different perspectives.

## View the Subscriptions page

The **Subscriptions** page lists all the subscriptions in your account with a high-level overview.

For each subscription, you can view the following information:

1. The subscription's **ID**.
2. The name of the **stream** source. You can click on the stream name to navigate the [stream details](../manage-streams/stream-details.md) page.
3. The **ACK timeout** of the subscription.
4. The **Max unacked records** of the subscription.
5. The **Creation time** of the subscription.
6. The **More** button, which is used to expand the operations of the subscription:

   - View the metrics of the subscription.
   - View the consumers of the subscription.
   - Delete the subscription.

To view a specific subscription, click the subscription's name. [The details page of the subscription](#view-subscription-details) will be displayed.

## View subscription details

The details page displays detailed information about a subscription:

1. All the information in the [Subscriptions page](#view-subscriptions-page) is displayed.
2. Different tabs are provided to view the related information of the subscription:

   - [**Metrics**](#view-subscription-metrics): View the metrics of the subscription.
   - [**Consumers**](#view-subscription-consumers): View the consumers of the subscription.
   - [**Consumption progress**](#view-the-consumption-progress-of-the-subscription): View the consumption progress of the subscription.

### View subscription metrics

After clicking the **Metrics** tab, you can view the metrics of the subscription.
The default duration is **last 5 minutes**. You can select different durations to control the time range of the metrics:

- last 5 minutes
- last 1 hour
- last 3 hours
- last 6 hours
- last 12 hours
- last 1 day
- last 3 days
- last 1 week

The metrics of the subscription include (with last 5 minutes as an example), from left to right:

1. The **Outputting bytes throughput** chart shows the number of bytes sent by the subscription in the last 5 minutes.
2. The **Outputting messages** chart shows the number of messages sent by the subscription in the last 5 minutes.
3. The **Acknowledgements** chart shows the number of acknowledgements received in the subscription per second in the last 5 minutes.
4. The **Acknowledgements messages** chart shows the number of messages received in the subscription per second in the last 5 minutes.
5. The **Resent records** chart shows the number of records resent in the subscription per second in the last 5 minutes.

### View subscription consumers

After clicking the **Consumers** tab, you can view the consumers of the subscription.

For each consumer, you can view the following information:

1. The **Name** of the consumer.
2. The **Type** of the consumer.
3. The **URI** of the consumer.

### View the consumption progress of the subscription

After clicking the **Consumption progress** tab, you can view the consumption progress of the subscription.

For each progress, you can view the following information:

1. The **Shard ID** of the progress.
2. The **Last checkpoint** of the progress.
