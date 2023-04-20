import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers, upgrades } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ARBITRUM_TOKENS, MAINNET_TOKENS } from "../../utils/constants";
import { write } from "../../utils/io";
import {
  EzVaultV1,
  EzVaultV1__factory,
  E2LPV1,
  E2LPV1__factory,
  USDEV1,
  USDEV1__factory
} from "../../types";
import {firstRebaseTime} from "../../utils/date";
import {BigNumber} from "ethers";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const filePath = hre.config.paths.deployments+"\\"+hre.network.name;
  await write(filePath,".chainId",await hre.getChainId());
  let signer: SignerWithAddress;
  [signer] = await ethers.getSigners();
  const USDC_ADDRESS = ARBITRUM_TOKENS.USDC;
  const USDT_ADDRESS = ARBITRUM_TOKENS.USDT;
  const WSTETH_ADDRESS = ARBITRUM_TOKENS.wstETH;
  let aToken: USDEV1;
  let bToken: E2LPV1;
  let vault: EzVaultV1;
  //deploy USDEV1 contract
  const USDEV1Factory = new USDEV1__factory(signer);
  aToken = await upgrades.deployProxy(USDEV1Factory, ["Ezio Yield Bearing Stablecoin","USDE"],{timeout:600000,pollingInterval:10000}) as USDEV1;
  await aToken.deployed();
  console.log("-------------USDEV1 deployed to:", aToken.address);
  await write(filePath,"USDEV1.json",JSON.stringify({"address":aToken.address,"abi":USDEV1__factory.abi}));
  //deploy E2LPV1 contract
  const E2LPV1Factory = new E2LPV1__factory(signer);
  bToken = await upgrades.deployProxy(E2LPV1Factory, ["Ezio 2x Leverage wstETH Index","E2LP"],{timeout:600000,pollingInterval:10000}) as E2LPV1;
  await bToken.deployed();
  console.log("-------------E2LPV1 deployed to:", bToken.address);
  await write(filePath,"E2LPV1.json",JSON.stringify({"address":bToken.address,"abi":E2LPV1__factory.abi}));
  //deploy EzVaultV1 contract
  const EzVaultV1Factory = new EzVaultV1__factory(signer);
  vault = await upgrades.deployProxy(EzVaultV1Factory, [USDC_ADDRESS,WSTETH_ADDRESS,aToken.address,bToken.address,137,50,10,firstRebaseTime()],{timeout:600000,pollingInterval:10000}) as EzVaultV1;
  await vault.deployed();
  console.log("-------------EzVaultV1 deployed to:", vault.address);
  await write(filePath,"EzVaultV1.json",JSON.stringify({"address":vault.address,"abi":EzVaultV1__factory.abi}));
  //set chainlink price aggregator
  await vault.setAggregators(USDC_ADDRESS,"0x50834F3163758fcC1Df9973b6e91f0F0F0434aD3");
  await vault.setAggregators(USDT_ADDRESS,"0x3f3f5dF88dC9F13eac63DF89EC16ef6e7E25DdE7");
  await vault.setAggregators(MAINNET_TOKENS.stETH,"0x07C5b924399cc23c24a95c8743DE4006a32b7f2a");
  await vault.setAggregators(ethers.constants.AddressZero,"0xB1552C5e96B312d0Bf8b554186F846C40614a540");
  //set StakeRewardRate
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
};

func.tags = ["EzVault"];

export default func;
