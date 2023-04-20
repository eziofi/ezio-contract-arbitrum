import { ethers, network, upgrades } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import {
  USDEV1, USDEV1__factory,
  E2LPV1, E2LPV1__factory,
  EzVaultV1, EzVaultV1__factory
} from "../../types";
import {BigNumber, BytesLike, Contract} from "ethers";
import {
  ERC20_ABI,
  ARBITRUM_TOKENS,
  MAINNET_TOKENS,
} from "../../utils/constants";
import {genNotSwapData, getZeroExQuoteResponse, ZeroExQuoteParams} from "../../utils/swap";
import { firstRebaseTime } from "../../utils/date";
const hre = require("hardhat");

const USDC_ADDRESS = ARBITRUM_TOKENS.USDC;
const USDT_ADDRESS = ARBITRUM_TOKENS.USDT;
const WSTETH_ADDRESS = ARBITRUM_TOKENS.wstETH;
const USDC_TAKER_ADDRESS = process.env.ARBITRUM_USDC_TAKER_ADDRESS || '';
const USDT_TAKER_ADDRESS = process.env.ARBITRUM_USDT_TAKER_ADDRESS || '';

describe("fork integration test",()=>{
  let signer: SignerWithAddress, usdtTaker: SignerWithAddress, usdcTaker: SignerWithAddress;
  let usdc: Contract,usdt: Contract,wstETH: Contract;
  let aToken: USDEV1;
  let bToken: E2LPV1;
  let vault: EzVaultV1;
  beforeEach("Initialize contract",async ()=>{
    await hre.network.provider.request({
      method: "hardhat_reset",
      params: [
        {
          forking: {
            jsonRpcUrl: hre.config.networks.hardhat.forking.url,
          },
        },
      ],
    });
    [signer] = await ethers.getSigners();
    usdcTaker = await ethers.getSigner(USDC_TAKER_ADDRESS);
    usdtTaker = await ethers.getSigner(USDT_TAKER_ADDRESS);
    usdc = new ethers.Contract(USDC_ADDRESS, ERC20_ABI, usdcTaker);
    usdt = new ethers.Contract(USDT_ADDRESS, ERC20_ABI, usdtTaker);
    wstETH = new ethers.Contract(WSTETH_ADDRESS, ERC20_ABI,signer);
    //Simulated account
    await network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [USDC_TAKER_ADDRESS],
    });
    await network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [USDT_TAKER_ADDRESS],
    });

    //deploy USDEV1 contract
    const USDEV1Factory = new USDEV1__factory(signer);
    aToken = await upgrades.deployProxy(USDEV1Factory, ["Ezio Yield Bearing Stablecoin","USDE"],{timeout:600000,pollingInterval:10000}) as USDEV1;
    await aToken.deployed();
    console.log("-------------USDEV1 deployed to:", aToken.address);
    //deploy E2LPV1 contract
    const E2LPV1Factory = new E2LPV1__factory(signer);
    bToken = await upgrades.deployProxy(E2LPV1Factory, ["Ezio 2x Leverage wstETH Index","E2LP"],{timeout:600000,pollingInterval:10000}) as E2LPV1;
    await bToken.deployed();
    console.log("-------------E2LP deployed to:", bToken.address);
    //deploy EzVaultV1 contract
    const EzVaultV1Factory = new EzVaultV1__factory(signer);
    vault = await upgrades.deployProxy(EzVaultV1Factory, [USDC_ADDRESS,WSTETH_ADDRESS,aToken.address,bToken.address,137,50,10,firstRebaseTime()],{timeout:600000,pollingInterval:10000}) as EzVaultV1;
    await vault.deployed();
    console.log("-------------EzVaultV1 deployed to:", vault.address);
    //set chainlink price aggregator
    await vault.setAggregators(USDC_ADDRESS,"0x50834F3163758fcC1Df9973b6e91f0F0F0434aD3");
    await vault.setAggregators(USDT_ADDRESS,"0x3f3f5dF88dC9F13eac63DF89EC16ef6e7E25DdE7");
    await vault.setAggregators(MAINNET_TOKENS.stETH,"0x07C5b924399cc23c24a95c8743DE4006a32b7f2a");
    await vault.setAggregators(ethers.constants.AddressZero,"0xB1552C5e96B312d0Bf8b554186F846C40614a540");
    await vault.setStakeRewardRate(115);
    //approve 0x and 1inch
    await vault.setApprove(USDC_ADDRESS,0,BigNumber.from("10000000000"));
    await vault.setApprove(USDT_ADDRESS,0,BigNumber.from("10000000000"));
    await vault.setApprove(WSTETH_ADDRESS, 0, ethers.utils.parseEther("10"));
    await vault.setApprove(USDC_ADDRESS,1,BigNumber.from("10000000000"));
    await vault.setApprove(USDT_ADDRESS,1,BigNumber.from("10000000000"));
    await vault.setApprove(WSTETH_ADDRESS, 1, ethers.utils.parseEther("10"));
    //aToken contact vault
    await aToken.contact(vault.address);
    //bToken contact vault
    await bToken.contact(vault.address);
    await usdt.connect(usdtTaker).approve(vault.address,BigNumber.from("100000000000"));
    await usdc.connect(usdcTaker).approve(vault.address,BigNumber.from("100000000000"));
  });

  it("Process testing",async ()=>{
    console.log("---------USDT price",await vault.getPrice(USDT_ADDRESS));
    console.log("---------WSTETH price",await vault.getPrice(WSTETH_ADDRESS));
    //USDCTaker use 4000USDC to purchases aToken
    let quoteResponse2 = genNotSwapData(ARBITRUM_TOKENS.USDC,BigNumber.from("4000000000"))
    let quotes2 = [quoteResponse2];
    await vault.connect(usdcTaker).purchase(0,0,quotes2);

    //USDtTaker uses 2500USDT to purchase aToken
    let quoteParams1: ZeroExQuoteParams = {
      sellToken: USDT_ADDRESS,
      buyToken: USDC_ADDRESS,
      sellAmount: "2500000000",
      slippagePercentage: "0.01"
    }
    let quoteResponse1 = await getZeroExQuoteResponse(quoteParams1);
    let quotes1 = [quoteResponse1];
    await vault.connect(usdtTaker).purchase(0,0,quotes1);


    //USDtTaker uses 6000USDT to purchase bToken
    let quotes3: BytesLike[];
    let quoteParams3: ZeroExQuoteParams = {
      sellToken: USDT_ADDRESS,
      buyToken: WSTETH_ADDRESS,
      sellAmount: "6000000000",
      slippagePercentage: "0.01"
    }
    let quoteResponse3 = await getZeroExQuoteResponse(quoteParams3);

    let quoteNetWorth = BigNumber.from(quoteParams3.sellAmount).mul(await vault.getPrice(quoteParams3.sellToken)).div(BigNumber.from("10").pow(6));
    if(quoteNetWorth.lte(await vault.pooledA())){
      let convertSellAmount = await vault.convertAmt(quoteParams3.sellToken,USDC_ADDRESS,BigNumber.from(quoteParams3.sellAmount))
      let quoteParams4: ZeroExQuoteParams = {
        sellToken: USDC_ADDRESS,
        buyToken: WSTETH_ADDRESS,
        sellAmount: convertSellAmount.toString(),
        slippagePercentage: "0.01"
      }
      let quoteResponse4 = await getZeroExQuoteResponse(quoteParams4);
      quotes3 = [quoteResponse3,quoteResponse4];
    }else{
      quotes3 = [quoteResponse3];
    }
    await vault.connect(usdtTaker).purchase(1,0,quotes3);

    let getRedeemQuoteQty = async (type:number, qty: BigNumber, token: string)=>{
      let amt: BigNumber;
      let quoteQty: BigNumber = BigNumber.from("0");
      if( type == 0){
        if(token == USDC_ADDRESS){
          amt = qty.mul(await aToken.netWorth()).div(BigNumber.from("10").pow(await aToken.decimals()));
          if(amt.gt(await vault.pooledA())){
            quoteQty = amt.sub(await vault.pooledA()).mul(BigNumber.from("10").pow(await wstETH.decimals())).div(await vault.getPrice(WSTETH_ADDRESS));
          }
        }
      }else{
        //amt = qty.mul(await bToken.netWorth()).div(BigNumber.from("10").pow(await bToken.decimals()));
        if(token == USDC_ADDRESS){
          quoteQty = qty.mul(await vault.totalReserve()).div(await bToken.totalSupply());
        }else if(token == WSTETH_ADDRESS){
          let redeemReserveQty = qty.mul(await vault.totalReserve()).div(await bToken.totalSupply());
          let leverage: BigNumber = await vault.leverage();
          quoteQty = redeemReserveQty.mul(leverage.sub(await vault.LEVERAGE_DENOMINATOR())).div(leverage);
        }
      }
      return quoteQty;
    }

    //usdcTaker redeem 1000 aToken to exchange for USDC
    let redeemAmount1 = ethers.utils.parseEther("1000");
    let convertSellAmount1 = await getRedeemQuoteQty(0,redeemAmount1,USDC_ADDRESS);
    let quoteParams5: ZeroExQuoteParams = {
      sellToken: WSTETH_ADDRESS,
      buyToken: USDC_ADDRESS,
      sellAmount: convertSellAmount1.toString(),
      slippagePercentage: "0.01"
    }
    let quoteResponse5 = await getZeroExQuoteResponse(quoteParams5);
    await vault.connect(usdcTaker).redeem(0,0,redeemAmount1,USDC_ADDRESS,quoteResponse5);

    console.log("-----------signer usdc balance=",await usdc.balanceOf(signer.address));
    console.log("-----------vault wstETH balance",await wstETH.balanceOf(vault.address));
    console.log("-----------vault usdc balance=",await usdc.balanceOf(vault.address));
    console.log("-----------usdtTaker aToken=",await aToken.balanceOf(usdtTaker.address));
    console.log("-----------usdcTaker aToken=",await aToken.balanceOf(usdcTaker.address));
    console.log("-----------usdtTaker bToken=",await bToken.balanceOf(usdtTaker.address));
    console.log("-----------usdtTaker wstETH=",await wstETH.balanceOf(usdtTaker.address));
    console.log("-----------aToken totalNetWorth=",await aToken.totalNetWorth());
    console.log("-----------aToken totalSupply=",await aToken.totalSupply());
    console.log("-----------bToken totalNetWorth=",await bToken.totalNetWorth());
    console.log("-----------bToken netWorth=",await bToken.netWorth());
    console.log("-----------bToken totalSupply=",await bToken.totalSupply());
    console.log("-----------vault pooledA=",await vault.pooledA());
    console.log("-----------vault matchedA=",await vault.matchedA());
    console.log("-----------vault totalReserve=",await vault.totalReserve());
    console.log("-----------vault totalNetWorth=",await vault.totalNetWorth());
    console.log("-----------convertDownPrice=",await vault.convertDownPrice());
    console.log("-----------leverage=",await vault.leverage());
    console.log("-----------interestRate=",await vault.interestRate());
    console.log("-----------totalCommission=",await vault.totalCommission());
    console.log("================================================");

    //usdcTaker redeem 2000 bToken to exchange for WSTETH
    let redeemAmount2 = ethers.utils.parseEther("2000");
    let convertSellAmount2 = await getRedeemQuoteQty(1,redeemAmount2,WSTETH_ADDRESS);
    let quoteParams6: ZeroExQuoteParams = {
      sellToken: WSTETH_ADDRESS,
      buyToken: USDC_ADDRESS,
      sellAmount: convertSellAmount2.toString(),
      slippagePercentage: "0.01"
    }
    let quoteResponse6 = await getZeroExQuoteResponse(quoteParams6);
    await vault.connect(usdtTaker).redeem(1,0,redeemAmount2,WSTETH_ADDRESS,quoteResponse6);

    console.log("-----------signer usdc balance=",await usdc.balanceOf(signer.address));
    console.log("-----------vault wstETH balance",await wstETH.balanceOf(vault.address));
    console.log("-----------vault usdc balance=",await usdc.balanceOf(vault.address));
    console.log("-----------usdtTaker aToken=",await aToken.balanceOf(usdtTaker.address));
    console.log("-----------usdcTaker aToken=",await aToken.balanceOf(usdcTaker.address));
    console.log("-----------usdtTaker bToken=",await bToken.balanceOf(usdtTaker.address));
    console.log("-----------usdtTaker wstETH=",await wstETH.balanceOf(usdtTaker.address));
    console.log("-----------aToken totalNetWorth=",await aToken.totalNetWorth());
    console.log("-----------aToken totalSupply=",await aToken.totalSupply());
    console.log("-----------bToken totalNetWorth=",await bToken.totalNetWorth());
    console.log("-----------bToken netWorth=",await bToken.netWorth());
    console.log("-----------bToken totalSupply=",await bToken.totalSupply());
    console.log("-----------vault pooledA=",await vault.pooledA());
    console.log("-----------vault matchedA=",await vault.matchedA());
    console.log("-----------vault totalReserve=",await vault.totalReserve());
    console.log("-----------vault totalNetWorth=",await vault.totalNetWorth());
    console.log("-----------convertDownPrice=",await vault.convertDownPrice());
    console.log("-----------leverage=",await vault.leverage());
    console.log("-----------interestRate=",await vault.interestRate());
    console.log("-----------totalCommission=",await vault.totalCommission());
    console.log("================================================");

  });
});


