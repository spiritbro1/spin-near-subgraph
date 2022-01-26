# Create a subgraph for spin.fi

Today, i'm gonna show you how you can create subgraph from spin.fi a decentralized exchange on near, for this subgraph we gonna use spin finance testnet account `app.spin_trade.testnet`

Before we do anything with subgraph we need to know what is the start block of this account `app.spin_trade.testnet` we can do that by querying sql data in here : 

testnet: postgres://public_readonly:nearprotocol@35.184.214.98/testnet_explorer
mainnet: postgres://public_readonly:nearprotocol@104.199.89.51/mainnet_explorer

We gonna use `testnet` one, maybe you wondering why not use sql instead of subgraph? , it's because sql has timeout of 10 sec if im not mistaken and it's not useful for our use case, so that's why we still need subgraph, we also need to create API with sql, with subgraph we can use their graphql API only and that is very neat, instead creating a whole API interface.

First, we need to check the first start block of this account `app.spin_trade.testnet` by querying near testnet public indexer, to do that you can run `node scripts/check_first_block.js` or you can use your favorite postgresql client like `pgadmin` for example, the query for that is :

```sql
SELECT last_update_block_height
	FROM public.accounts where account_id='app.spin_trade.testnet';
```

And if you're using my script you will get something like this :

```JSON
[ { last_update_block_height: '78317495' } ]
```
Where `78317495` is the first block this account is created if you go to testnet explorer you can see it for yourself that this block is where this account is created https://explorer.testnet.near.org/blocks/92wFfEM8rcXi5Lc2ym5Ls3Nh7yob8rASYdCuH51eFT2H

![image](https://user-images.githubusercontent.com/62529025/151093256-3ee80b52-d0fb-478e-ab76-a61be86ec9fa.png)

And after we know the start block now we can scaffold our subgraph application first, if you haven't clone it yet, clone this repo https://github.com/spiritbro1/spin-near-subgraph, after that go inside that folder and run `yarn`
