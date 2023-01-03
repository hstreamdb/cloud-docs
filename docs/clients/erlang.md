# Erlang Client Quick Start

## Installation

### Rebar3

Add the following line to the `deps` field of the file `rebar.config`

```erl
{hstreamdb_erlang, {git, "git@github.com:hstreamdb/hstreamdb_erl.git", {branch, "main"}}}
```

### Mix

Add the following line to the `deps` function of the file `mix.exs`

```exs
{:hstreamdb_erlang, git: "git@github.com:hstreamdb/hstreamdb_erl.git", branch: "main"}
```

## Connect to HServer

To connect to the HStreamDB instance, you need to find the endpoint on the
control panel, where you can also download the security certificates.

```erl
-module(example).

conn_example() ->
  _ = application:ensure_all_started(hstreamdb_erl),
  CA = YourCaPath,
  RPCOptions =
    #{pool_size => 3, gun_opts => #{transport => ssl, transport_opts => [{cacertfile, CA}]}},
  ClientOptions = [{url, "your_server_url"}, {rpc_options, RPCOptions}],
  {ok, Client} = hstreamdb:start_client(test_c, ClientOptions),
  io:format("start client  ~p~n", [Client]).
```

<!-- ## Example Usage

Here we will provide some simple examples of how to use hstreamdb-client. For
more details on introduction and usage, please check the
[guides](https://hstream.io/docs/en/latest/guides/write.html). -->
