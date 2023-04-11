# Ezio Finance Project Contract Repository

This repository contains:

- `USDE.sol` As Stablecoin of Ezio Finance Project, Based on
  [OpenZeppelin]'s [`ERC20PausableUpgradeable`] contract,

- `E2LP.sol` As 2x Leverage wstETH Index of Ezio Finance Project, Based on
  [OpenZeppelin]'s [`ERC20PausableUpgradeable`] contract,

- `EzVault.sol` As the Vault of Ezio Finance Project,Published by [OpenZeppelin]'s
  [`TransparentUpgradeableProxy`] contract

[OpenZeppelin]: https://openzeppelin.org/
[`ERC20PausableUpgradeable`]: https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/token/ERC20/extensions/ERC20PausableUpgradeable.sol
[`TransparentUpgradeableProxy`]: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/transparent/TransparentUpgradeableProxy.sol

Environment Variable
-----

Rename .env.example to .env,Fill in PRIVATE_KEY,ARBITRUM_RPC_URL and ARBITRUM_SCAN_API_KEY 

Build
-----

This project is built on [Hardhat] and [OpenZeppelin] frameworks.  In order to
install them:

    npm install

The following command compiles every contract in the repository:

    npx hardhat compile

[Hardhat]: https://hardhat.org/docs

Deploy
-----

The following command deploy contracts into arbitrum network:

    npx hardhat --network arbitrum deploy

The following command verify the TransparentUpgradeableProxy contract:

    npx hardhat verify --network arbitrum {ProxyAddress}

The following command upgrade deployed EzVault contract:

    npx hardhat --network arbitrum run ./scripts/upgrade/ezio_upgrade.ts

The following command change the admin of TransparentUpgradeableProxy after fill in NEW_ADMIN_ADDRESS in .env:

    npx hardhat --network arbitrum run ./scripts/upgrade/ezio_change_proxy_admin.ts
