import { Web3 } from 'web3';
import abiJson from './abiJson.json' assert { type: "json" };

const USDT_URL = 'https://mainnet.infura.io/v3/01ba0a2c044e4d739e4ff802b3affeec';
const web3 = new Web3(USDT_URL);

export const getEthBalance = async (address) => {
    let balance = ''
    await web3.eth.getBalance(address)
        .then( (value) => {
            const eth = web3.utils.fromWei(value, 'ether');
            balance = eth
            console.log(eth);
        }
    );
    return balance;
}

export const getUsdtBalance = async (address) => {
    const USDT_CONTRACT_ADDR = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
    const usdtContract = new web3.eth.Contract(abiJson, USDT_CONTRACT_ADDR);
    const usdtbalance = await usdtContract.methods.balanceOf(address).call( (err, result) => {
        console.log("balance is ", err);
        console.log("balance is ", result);
    });   
    const usdt = Number(usdtbalance) * 0.000001; //convert usdt from smallest unit  
    return usdt;
}