(async function(){
    const { Client } = require('pg')
    // postgres://public_readonly:nearprotocol@35.184.214.98/testnet_explorer
    const client = new Client({user:"public_readonly",password:"nearprotocol",host:"35.184.214.98",database:"testnet_explorer"})
    await client.connect()
    const res = await client.query(`SELECT last_update_block_height FROM public.accounts where account_id='app.spin_trade.testnet';`)
    console.log(res.rows) // Hello world!
    await client.end()
})()
