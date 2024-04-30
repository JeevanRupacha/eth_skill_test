import express from "express";
import { getEthBalance, getUsdtBalance } from "./Controller.js";

const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Server running!');
})

app.get('/ethBalance/:address', async (req, res) => {
    console.log("eth", req.params);
    const address = req.params.address;
    const balance = await getEthBalance(address);
    res.send("Eth balance in ether is: " + balance);
})

app.get('/usdtBalance/:address', async (req, res) => {
    console.log("usdt", req.params);
    const address = req.params.address;
    const balance = await getUsdtBalance(address);
    res.send("USDT balance in USDT is: " + balance);
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})