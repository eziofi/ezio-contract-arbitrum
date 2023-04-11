//hardhat.config.ts
import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-deploy";
import '@openzeppelin/hardhat-upgrades';
import '@nomiclabs/hardhat-etherscan';

dotenv.config();
const RPC_URL = process.env.ARBITRUM_RPC_URL;
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL;
const SCAN_API_KEY = process.env.ARBITRUM_SCAN_API_KEY||'';
if (!RPC_URL) {
  throw new Error("Missing env variable `RPC_URL`");
}
const PRIVATE_KEY = process.env.PRIVATE_KEY||"";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: RPC_URL,
      },
      chainId: 42161,
    },
    arbitrum: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 42161
    },
    main:{
      url: MAINNET_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 1
    }
  },
  etherscan: {
    apiKey: SCAN_API_KEY
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
    deploy: "./scripts/deploy",
    deployments: "./deployments",
  },
  mocha: {
    timeout: 500000
  },
  solidity: {
    compilers: [
      {
        version: "0.8.8",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      },
      {
        version: "0.8.7"
      },
      {
        version: "0.8.3"
      },
      {
        version: "0.7.6"
      },
      {
        version: "0.7.3"
      }
    ],
  },
  namedAccounts: {
    singer: 0,
    alice: 1,
    bob: 2,
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
  },
};

export default config;
