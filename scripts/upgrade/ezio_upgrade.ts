import { ethers,upgrades } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { E2LPV1,E2LPV1__factory, EzVaultV1, EzVaultV1__factory, USDEV1, USDEV1__factory} from "../../types";
import { write } from "../../utils/io";
const hre = require("hardhat");

async function main() {
  const filePath = hre.config.paths.deployments+"\\"+hre.network.name;
  let signer : SignerWithAddress;
  [signer] = await ethers.getSigners();

  const EZVAULT_JSON = require("../../deployments/arbitrum/EzVaultV1.json");
  let vault = await upgrades.upgradeProxy(EZVAULT_JSON.address, new EzVaultV1__factory(signer),{timeout:300000,pollingInterval:100000}) as EzVaultV1;
  console.log("vault upgrade to:", vault.address);
  await write(filePath,"EzVaultV1.json",JSON.stringify({"address":vault.address,"abi":EzVaultV1__factory.abi}));

/*  const USDE_JSON = require("../../deployments/arbitrum/USDEV1.json");
  let aToken = await upgrades.upgradeProxy(USDE_JSON.address, new USDEV1__factory(signer),{timeout:300000,pollingInterval:100000}) as USDEV1;
  console.log("aToken upgrade to:", aToken.address);
  await write(filePath,"USDEV1.json",JSON.stringify({"address":aToken.address,"abi":USDEV1__factory.abi}));

  const E2LP_JSON = require("../../deployments/arbitrum/E2LPV1.json");
  let bToken = await upgrades.upgradeProxy(E2LP_JSON.address, new E2LPV1__factory(signer),{timeout:300000,pollingInterval:100000}) as E2LPV1;
  console.log("bToken upgrade to:", bToken.address);
  await write(filePath,"E2LPV1.json",JSON.stringify({"address":bToken.address,"abi":E2LPV1__factory.abi}));*/

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
