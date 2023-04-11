import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { MAINNET_TOKENS } from "../utils/constants";
import { BigNumber, Contract } from "ethers";

const LIDO_ORACLE_ABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "getLastCompletedReportDelta",
    "outputs": [
      {
        "name": "postTotalPooledEther",
        "type": "uint256"
      },
      {
        "name": "preTotalPooledEther",
        "type": "uint256"
      },
      {
        "name": "timeElapsed",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];
const STETH_ABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "getFee",
    "outputs": [
      {
        "name": "feeBasisPoints",
        "type": "uint16"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];
const LIDO_ORACLE_ADDRESS = "0x442af784A788A5bd6F42A01Ebe9F287a871243fb"
type ReportDelta = {
  postTotalPooledEther: BigNumber;
  preTotalPooledEther: BigNumber;
  timeElapsed: BigNumber;
};


describe("calculated lido user APR", function () {
  let signer: SignerWithAddress;
  let lidoOracle: Contract;
  let stETH: Contract;
  beforeEach("initialize contract",async ()=>{
    [signer] = await ethers.getSigners();
    lidoOracle = new ethers.Contract(LIDO_ORACLE_ADDRESS, LIDO_ORACLE_ABI, signer);
    stETH = new ethers.Contract(MAINNET_TOKENS.stETH, STETH_ABI, signer);
  });
  it("calculated lido user APR", async function () {
    let reportData = await lidoOracle.getLastCompletedReportDelta() as ReportDelta;
    let protocolAPR = reportData.postTotalPooledEther.sub(reportData.preTotalPooledEther).mul(1000000).div(reportData.preTotalPooledEther);
    let lidoFee = BigNumber.from(await stETH.getFee());
    console.log("---------protocolAPR=",protocolAPR);
    console.log("---------lidoFee=",lidoFee);
    console.log("---------userAPR=",protocolAPR.sub(protocolAPR.mul(lidoFee).div(10000)));
  });
});
