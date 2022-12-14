# Create a Stream

This tutorial guides you through creating a stream in the dashboard.

## Step1. Preparation

In order to write records or create a Subscription, you need to create a stream first.

1. If you do not have a account, please register an account first and log in. After logging in, you will into the **Streams** page directly.

2. If you alraedy logged in, click **Streams** on the left sidebar to enter the streams page.

3. Then click **New Stream** button to create a stream.

## Step2. Create a Stream

After clicking **New Stream** button, you will see a modal dialog. In this dialog, You will set some necessary properties for your stream.

1. Specify the **Stream Name**. You can refer to [Guidelines to name a resource](https://hstream.io/docs/en/latest/guides/stream.html#guidelines-to-name-a-resource) to name a stream.

2. Fill in the number of **shards** you want this stream to have. Default value is **1**.
   The shard is the primary storage unit for the stream. For more details, please refer to [Sharding in HStreamDB](https://hstream.io/docs/en/latest/guides/shards.html#sharding-in-hstreamdb).

3. Fill in the number of **replicas** for each stream. Default value is **1**. Please adjust the number of replicas according to your actual needs.

4. Fill in the number of **retention** for each stream. Default value is **24**. Unit is **hour**.

5. Click **Create** button to create a stream.

::: tip
For more details about **replicas** and **retention**, please refer to [Attributes of a Stream](https://hstream.io/docs/en/latest/guides/stream.html#attributes-of-a-stream).
:::
