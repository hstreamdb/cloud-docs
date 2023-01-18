# Create a Subscription

This tutorial guides you through creating a subscription in the dashboard.

## Step1. Preparation

1. If you do not have an account, [register an account first](../getting-started/apply-for-a-trial.md) and log in.
2. If you do not have a stream, please [create a stream](../manage-streams/create-a-stream.md) first.
3. Click **Subscriptions** on the left sidebar to enter the subscriptions page.
4. Click **New Subscription** button to create a subscription.

## Step2. Create a subscription

After clicking the **New Subscription** button, a dialog will pop out. In the dialog, you need to set some necessary properties for your subscription and create it:

1. Specify the **Subscription ID**. You can refer to [Guidelines to name a resource](https://hstream.io/docs/en/latest/guides/streams.html#guidelines-to-name-a-resource) to name a subscription.
2. Select a stream as the source from the dropdown list.
3. Fill in with the **ACK timeout**. The default value is **600**. Unit is **second**.
4. Fill in the number of **max unacked records**. The default value is **1000**.
5. Click the **Confirm** button to create a subscription.

::: tip
For more details about **ACK timeout** and **max unacked records**, please refer to [Attributes of a Subscription](https://hstream.io/docs/en/latest/guides/subscription.html#attributes-of-a-subscription).
:::
