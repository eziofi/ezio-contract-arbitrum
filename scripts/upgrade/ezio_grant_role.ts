import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { EzVaultV1__factory} from "../../types";

async function main() {
  let signer : SignerWithAddress;
  let OPERATOR_ROLE = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("OPERATOR_ROLE"));
  const OPERATOR_ADDRESS = process.env.OPERATOR_ADDRESS||"";
  const EZVAULT_JSON = require("../../deployments/arbitrum/EzVaultV1.json");
  [signer] = await ethers.getSigners();
  let vault = EzVaultV1__factory.connect(EZVAULT_JSON.address,signer);
  await vault.grantRole(OPERATOR_ROLE,OPERATOR_ADDRESS);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
