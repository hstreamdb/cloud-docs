import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'HStream Platform',
  titleTemplate: ':title | HStream Platform',
  description: 'HStream Platform Documentation.',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is HStream Platform', link: '/introduction/what-is-hstream-platform' },
          { text: 'Architecture', link: '/introduction/architecture' },
        ],
      },
      {
        text: 'Getting Started',
        items: [
          { text: 'Apply for a Trial', link: '/getting-started/apply-for-a-trial' },
          { text: 'Try out HStream Platform', link: '/getting-started/try-out-hstream-platform' },
        ],
        collapsible: true,
        collapsed: false,
      },
      {
        text: 'Manage Streams',
        items: [
          { text: 'Create a Stream', link: '/manage-streams/create-a-stream' },
          { text: 'Write Records to a Stream', link: '/manage-streams/write-records-to-a-stream' },
          { text: 'Stream Details', link: '/manage-streams/stream-details' },
          { text: 'Delete a Stream', link: '/manage-streams/delete-a-stream' },
        ],
        collapsible: true,
        collapsed: false,
      },
      {
        text: 'Manage Subscriptions',
        items: [
          { text: 'Create a Subscription', link: '/manage-subscriptions/create-a-subscription' },
          // {
          //   text: 'Consume Records from a Subscription',
          //   link: '/manage-subscriptions/consume-records-from-a-subscription',
          // },
          { text: 'Subscription Details', link: '/manage-subscriptions/subscription-details' },
          { text: 'Delete a Subscription', link: '/manage-subscriptions/delete-a-subscription' },
        ],
        collapsible: true,
        collapsed: false,
      },
      {
        text: 'Data Query',
        items: [{ text: 'Query Records', link: '/data-query/query-records' }],
      },
      {
        text: 'Connect with Clients',
        items: [
          { text: 'Java', link: '/clients/java' },
          { text: 'Python', link: '/clients/python' },
          { text: 'Go', link: '/clients/go' },
          { text: 'Rust', link: '/clients/rust' },
          { text: 'Erlang', link: '/clients/erlang' },
        ],
        collapsible: true,
        collapsed: false,
      },
      // {
      //   text: 'API',
      //   items: [
      //     { text: 'API Overview', link: '/api/overview' },
      //     { text: 'API Reference', link: '/api/reference' },
      //   ],
      //   collapsible: true,
      //   collapsed: false,
      // },
    ],
  },
})
