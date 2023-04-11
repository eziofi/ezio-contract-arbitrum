import { ethers,upgrades } from "hardhat";
import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import {EzVaultV1, EzVaultV1__factory} from "../../types";
import {write} from "../../utils/io";
const hre = require("hardhat");

async function main() {
  const filePath = hre.config.paths.deployments+"\\"+hre.network.name;
  let signer : SignerWithAddress;
  const EZVAULT_JSON = require("../../deployments/arbitrum/EzVaultV1.json");
  [signer] = await ethers.getSigners();
  let EzVaultV1 = new EzVaultV1__factory(signer);
  let vault = await upgrades.upgradeProxy(EZVAULT_JSON.address, EzVaultV1,{timeout:300000,pollingInterval:100000}) as EzVaultV1;
  console.log("vault upgrade to:", vault.address);
  await write(filePath,"EzVaultV1.json",JSON.stringify({"address":vault.address,"abi":EzVaultV1__factory.abi}))
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
