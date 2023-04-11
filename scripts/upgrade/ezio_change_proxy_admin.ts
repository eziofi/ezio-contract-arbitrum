import { upgrades } from "hardhat";

async function main() {
  const EZVAULT_JSON = require("../../deployments/arbitrum/EzVaultV1.json");
  const NEW_ADMIN_ADDRESS = process.env.NEW_ADMIN_ADDRESS||"";
  await upgrades.admin.changeProxyAdmin(EZVAULT_JSON.address,NEW_ADMIN_ADDRESS);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
