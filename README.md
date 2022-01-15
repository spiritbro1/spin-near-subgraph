# Create a subgraph for ref finance

All data is coming from this account :

```
ref-finance.near, ref-farming.near, v2.ref-farming.near,v2.ref-finance.near
```

startBlock coming via public readonly postgresql database of near analytics :

```
postgres://public_readonly:nearprotocol@104.199.89.51/mainnet_explorer
```

for `ref-finance.near` the query is :

```
SELECT last_update_block_height
	FROM public.accounts where account_id='ref-finance.near';
```

then you'll get something like this :

| last_update_block_height      | 
| ----------- | 
| 32010736      | 


