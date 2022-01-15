# Create a subgraph for ref finance

All data is coming from this account :

```
ref-finance.near, ref-farming.near, v2.ref-farming.near,v2.ref-finance.near
```

`startBlock` coming via public readonly postgresql database of near analytics :

```
postgres://public_readonly:nearprotocol@104.199.89.51/mainnet_explorer
```

For `ref-finance.near` the query is :

```
SELECT last_update_block_height
	FROM public.accounts where account_id='ref-finance.near';
```

Then you'll get something like this :

| last_update_block_height      | 
| ----------- | 
| 32010736      | 

Let's check on near main explorer is it the right block? go to [https://explorer.mainnet.near.org/blocks/BCEypMTV8icxkPQ9vsaNWp6nNazLhrHUs2cwqsAZER6X](https://explorer.mainnet.near.org/blocks/BCEypMTV8icxkPQ9vsaNWp6nNazLhrHUs2cwqsAZER6X) as you can see that is the block 32010736 and only 1 receipt which is for creating account so that is the right block. For the other `account_id` we need to do the same. So in order we get the starting block for each `account_id` like this :

- ref-finance.near #32010736
- ref-farming.near #43821219
- v2.ref-finance.near #45752814
- v2.ref-farming.near #46746777 
