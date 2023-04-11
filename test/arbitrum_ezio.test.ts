import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { Contract } from "ethers";
import {
  EzVaultV1,
  EzVaultV1__factory,
  E2LPV1,
  E2LPV1__factory,
  USDEV1,
  USDEV1__factory
} from "../types";
import { ARBITRUM_TOKENS, ERC20_ABI } from "../utils/constants";

const USDC_ADDRESS = ARBITRUM_TOKENS.USDC;
const USDT_ADDRESS = ARBITRUM_TOKENS.USDT;
const WSTETH_ADDRESS = ARBITRUM_TOKENS.wstETH;
const ATOKEN_JSON = require("../deployments/arbitrum/USDEV1.json");
const BTOKEN_JSON = require("../deployments/arbitrum/E2LPV1.json");
const EZVAULT_JSON = require("../deployments/arbitrum/EzVaultV1.json");

describe("contract connect test in arbitrum network", function () {
  let signer: SignerWithAddress;
  let usdc: Contract, usdt: Contract, wstETH: Contract;
  let aToken: USDEV1;
  let bToken: E2LPV1;
  let vault: EzVaultV1;
  beforeEach("initialize contract",async ()=>{
    [signer] = await ethers.getSigners();
    usdc = new ethers.Contract(USDC_ADDRESS, ERC20_ABI, signer);
    usdt = new ethers.Contract(USDT_ADDRESS, ERC20_ABI, signer);
    wstETH = new ethers.Contract(WSTETH_ADDRESS, ERC20_ABI,signer);
    aToken = USDEV1__factory.connect(ATOKEN_JSON.address,signer);
    bToken = E2LPV1__factory.connect(BTOKEN_JSON.address,signer);
    vault = EzVaultV1__factory.connect(EZVAULT_JSON.address,signer);
  });
  it("query contract state variable", async function () {
    console.log("---------lastRebaseTime=",await vault.lastRebaseTime());
    console.log("---------WSTETH price=",await vault.getPrice(WSTETH_ADDRESS));
    console.log("---------USDT price=",await vault.getPrice(USDT_ADDRESS));
    console.log("-----------signer eth=",await signer.getBalance());
    console.log("-----------signer usdc=",await usdc.balanceOf(signer.address));
    console.log("-----------signer usdt=",await usdt.balanceOf(signer.address));
    console.log("-----------signer wstETH=",await wstETH.balanceOf(signer.address));
    console.log("-----------signer aToken balance=",await aToken.balanceOf(signer.address));
    console.log("-----------signer bToken balance=",await bToken.balanceOf(signer.address));
    console.log("-----------vault usdc=",await usdc.balanceOf(vault.address));
    console.log("-----------vault wstETH=",await wstETH.balanceOf(vault.address));
    console.log("-----------aToken shareNetWorth=",await aToken.shareNetWorth());
    console.log("-----------aToken totalNetWorth=",await aToken.totalNetWorth());
    console.log("-----------aToken totalShare=",await aToken.totalShare());
    console.log("-----------aToken totalSupply=",await aToken.totalSupply());
    console.log("-----------bToken totalSupply=",await bToken.totalSupply());
    console.log("-----------bToken totalNetWorth=",await bToken.totalNetWorth());
    console.log("-----------bToken netWorth=",await bToken.netWorth());
    console.log("-----------vault pooledA=",await vault.pooledA());
    console.log("-----------vault matchedA=",await vault.matchedA());
    console.log("-----------vault totalReserve=",await vault.totalReserve());
    console.log("-----------vault totalNetWorth=",await vault.totalNetWorth());
    console.log("-----------leverage=",await vault.leverage());
    console.log("-----------interestRate=",await vault.interestRate());
    console.log("-----------convertDownPrice=",await vault.convertDownPrice());
    console.log("-----------redeemFeeRateA=",await vault.redeemFeeRateA());
    console.log("-----------redeemFeeRateB=",await vault.redeemFeeRateB());
    console.log("-----------rewardRate=",await vault.rewardRate());
    console.log("-----------stakeRewardRate=",await vault.stakeRewardRate());
  });
});
