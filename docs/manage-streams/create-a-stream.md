# Create a Stream

This tutorial guides you through creating a stream in the dashboard.

## Step1. Preparation

1. If you do not have an account, please [register an account first](../getting-started/apply-for-a-trial.md) and log in. After logging in, you will be on the **Streams** page.

2. If you have already logged in, click **Streams** on the left sidebar to enter the streams page.

3. Click the **New Stream** button to create a stream.

## Step2. Create a stream

After clicking the **New Stream** button, a dialog will pop out. In the dialog, you need to set some necessary properties for your stream and create it:

1. Specify the **Stream Name**. You can refer to the [Guidelines to name a resource](https://hstream.io/docs/en/latest/guides/stream.html#guidelines-to-name-a-resource) to name a stream.

2. Fill in with the number of **shards** you want this stream to have. The default value is **1**.

   The shard is the primary storage unit for the stream. For more details, please refer to [Sharding in HStreamDB](https://hstream.io/docs/en/latest/guides/shards.html#sharding-in-hstreamdb).

3. Fill in with the number of **replicas** for each stream. The default value is **1**.

4. Fill in with the number of **retention** for each stream. Default value is **24**. Unit is **hour**.

5. Click the **Confirm** button to create a stream.

::: tip
For more details about **replicas** and **retention**, please refer to [Attributes of a Stream](https://hstream.io/docs/en/latest/guides/stream.html#attributes-of-a-stream).
:::
