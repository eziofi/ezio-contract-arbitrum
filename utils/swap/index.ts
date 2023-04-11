import qs from "qs";
import { SwapQuoteStruct } from "../../types/contracts/impls/v1/EzVault.sol/EzVaultV1";
import axios from "axios";
import {HttpsProxyAgent} from "https-proxy-agent";

const ZEROEX_API_QUOTE_URL = process.env.ARBITRUM_ZEROEX_API_QUOTE_URL;
const ONEINCH_API_QUOTE_URL = process.env.ARBITRUM_ONEINCH_API_QUOTE_URL;

export type ZeroExQuoteParams = {
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
  let quoteResponse: SwapQuoteStruct;
  let quoteUrl = `${ZEROEX_API_QUOTE_URL}?${qs.stringify(quoteParams)}`;
  //console.log("=======quoteUrl=",quoteUrl);
  let response = await fetch(quoteUrl);
  if (response.status !== 200) {
    const body = await response.text();
    throw new Error(body);
  }
  let quote = await response.json();
  //console.log("=======quote=",quote);
  quoteResponse = {
    buyToken: quote.buyTokenAddress,
    sellAmount: quote.sellAmount,
    sellToken: quote.sellTokenAddress,
    swapCallData: quote.data,
  }
/*  let response = await getJson(quoteUrl);
  //console.log("=======response=",response);
  quoteResponse = {
    buyToken: quoteParams.buyToken,
    sellAmount: quoteParams.sellAmount,
    sellToken: quoteParams.sellToken,
    swapCallData: response.data,
  }*/
  return quoteResponse;
}

export async function getOneInchQuoteResponse(quoteParams: OneInchQuoteParams) {
  let quote: SwapQuoteStruct;
  let quoteUrl = `${ONEINCH_API_QUOTE_URL}?${qs.stringify(quoteParams)}`;
  //console.log("=======quoteUrl=",quoteUrl);
  let response = await getJson(quoteUrl);
  //console.log("=======response=",response);
  quote = {
    buyToken: quoteParams.toTokenAddress,
    sellAmount: quoteParams.amount,
    sellToken: quoteParams.fromTokenAddress,
    swapCallData: response.tx.data,
  }
  return quote;
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
