import qs from "qs";
import axios from "axios";
import {HttpsProxyAgent} from "https-proxy-agent";
import {BigNumber} from "ethers";
import {ethers} from "hardhat";

const ZEROEX_API_QUOTE_URL = process.env.ARBITRUM_ZEROEX_API_QUOTE_URL;
const ONEINCH_API_QUOTE_URL = process.env.ARBITRUM_ONEINCH_API_QUOTE_URL;

export type ZeroExQuoteParams = {
  skipValidation?: boolean;
  sellToken: string;
  buyToken: string;
  sellAmount: string;
  slippagePercentage: string;
};

export type OneInchQuoteParams = {
  fromTokenAddress: string,
  toTokenAddress: string,
  amount: string,
  fromAddress: string,
  disableEstimate: boolean,
  slippage: number
};

export async function getZeroExQuoteResponse(quoteParams: ZeroExQuoteParams) {
  let quoteUrl = `${ZEROEX_API_QUOTE_URL}?${qs.stringify(quoteParams)}`;
  //console.log("=======quoteUrl=",quoteUrl);
  let response = await fetch(quoteUrl);
  if (response.status !== 200) {
    const body = await response.text();
    throw new Error(body);
  }
  let quote = await response.json();
  //console.log("=======quote=",quote);
  return quote.data;
}

export async function getOneInchQuoteResponse(quoteParams: OneInchQuoteParams) {
  let quoteUrl = `${ONEINCH_API_QUOTE_URL}?${qs.stringify(quoteParams)}`;
  //console.log("=======quoteUrl=",quoteUrl);
  let response = await getJson(quoteUrl);
  //console.log("=======response=",response);
  return response.tx.data;
}

export function getJson(url: string) {
  return http.get(url).then(response => {
    return response.data
  }).catch(error => {
    console.error(error)
  })
}

export const http = axios.create({
  httpsAgent: new HttpsProxyAgent(`http://${process.env.PROXY_HOST}:${process.env.PROXY_PORT}`)
})

export function genNotSwapData(sellToken: string,sellAmount: BigNumber) {
  const selector = "0x36e57cb7";
  const buyToken = ethers.constants.AddressZero;
  return selector + ethers.utils.solidityPack(['address', 'address','uint256'], [ethers.utils.hexZeroPad(sellToken,32), ethers.utils.hexZeroPad(buyToken,32), ethers.utils.hexZeroPad(ethers.utils.arrayify(sellAmount), 32)]).substring(2);
}
