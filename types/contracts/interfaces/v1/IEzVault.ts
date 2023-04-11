/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export type SwapQuoteStruct = {
  sellToken: PromiseOrValue<string>;
  buyToken: PromiseOrValue<string>;
  sellAmount: PromiseOrValue<BigNumberish>;
  swapCallData: PromiseOrValue<BytesLike>;
};

export type SwapQuoteStructOutput = [string, string, BigNumber, string] & {
  sellToken: string;
  buyToken: string;
  sellAmount: BigNumber;
  swapCallData: string;
};

export interface IEzVaultInterface extends utils.Interface {
  functions: {
    "convertDownPrice()": FunctionFragment;
    "interestRate()": FunctionFragment;
    "leverage()": FunctionFragment;
    "matchedA()": FunctionFragment;
    "pooledA()": FunctionFragment;
    "purchase(uint8,uint8,(address,address,uint256,bytes)[])": FunctionFragment;
    "redeem(uint8,uint8,uint256,address,(address,address,uint256,bytes))": FunctionFragment;
    "totalNetWorth()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "convertDownPrice"
      | "interestRate"
      | "leverage"
      | "matchedA"
      | "pooledA"
      | "purchase"
      | "redeem"
      | "totalNetWorth"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "convertDownPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "interestRate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "leverage", values?: undefined): string;
  encodeFunctionData(functionFragment: "matchedA", values?: undefined): string;
  encodeFunctionData(functionFragment: "pooledA", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "purchase",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      SwapQuoteStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      SwapQuoteStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "totalNetWorth",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "convertDownPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "interestRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "leverage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "matchedA", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pooledA", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "purchase", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalNetWorth",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IEzVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IEzVaultInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    convertDownPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    interestRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    leverage(overrides?: CallOverrides): Promise<[BigNumber]>;

    matchedA(overrides?: CallOverrides): Promise<[BigNumber]>;

    pooledA(overrides?: CallOverrides): Promise<[BigNumber]>;

    purchase(
      type_: PromiseOrValue<BigNumberish>,
      channel_: PromiseOrValue<BigNumberish>,
      quotes_: SwapQuoteStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    redeem(
      type_: PromiseOrValue<BigNumberish>,
      channel_: PromiseOrValue<BigNumberish>,
      qty_: PromiseOrValue<BigNumberish>,
      token_: PromiseOrValue<string>,
      quote_: SwapQuoteStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalNetWorth(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  convertDownPrice(overrides?: CallOverrides): Promise<BigNumber>;

  interestRate(overrides?: CallOverrides): Promise<BigNumber>;

  leverage(overrides?: CallOverrides): Promise<BigNumber>;

  matchedA(overrides?: CallOverrides): Promise<BigNumber>;

  pooledA(overrides?: CallOverrides): Promise<BigNumber>;

  purchase(
    type_: PromiseOrValue<BigNumberish>,
    channel_: PromiseOrValue<BigNumberish>,
    quotes_: SwapQuoteStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  redeem(
    type_: PromiseOrValue<BigNumberish>,
    channel_: PromiseOrValue<BigNumberish>,
    qty_: PromiseOrValue<BigNumberish>,
    token_: PromiseOrValue<string>,
    quote_: SwapQuoteStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalNetWorth(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    convertDownPrice(overrides?: CallOverrides): Promise<BigNumber>;

    interestRate(overrides?: CallOverrides): Promise<BigNumber>;

    leverage(overrides?: CallOverrides): Promise<BigNumber>;

    matchedA(overrides?: CallOverrides): Promise<BigNumber>;

    pooledA(overrides?: CallOverrides): Promise<BigNumber>;

    purchase(
      type_: PromiseOrValue<BigNumberish>,
      channel_: PromiseOrValue<BigNumberish>,
      quotes_: SwapQuoteStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    redeem(
      type_: PromiseOrValue<BigNumberish>,
      channel_: PromiseOrValue<BigNumberish>,
      qty_: PromiseOrValue<BigNumberish>,
      token_: PromiseOrValue<string>,
      quote_: SwapQuoteStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    totalNetWorth(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    convertDownPrice(overrides?: CallOverrides): Promise<BigNumber>;

    interestRate(overrides?: CallOverrides): Promise<BigNumber>;

    leverage(overrides?: CallOverrides): Promise<BigNumber>;

    matchedA(overrides?: CallOverrides): Promise<BigNumber>;

    pooledA(overrides?: CallOverrides): Promise<BigNumber>;

    purchase(
      type_: PromiseOrValue<BigNumberish>,
      channel_: PromiseOrValue<BigNumberish>,
      quotes_: SwapQuoteStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    redeem(
      type_: PromiseOrValue<BigNumberish>,
      channel_: PromiseOrValue<BigNumberish>,
      qty_: PromiseOrValue<BigNumberish>,
      token_: PromiseOrValue<string>,
      quote_: SwapQuoteStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalNetWorth(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    convertDownPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    interestRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    leverage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    matchedA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pooledA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    purchase(
      type_: PromiseOrValue<BigNumberish>,
      channel_: PromiseOrValue<BigNumberish>,
      quotes_: SwapQuoteStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    redeem(
      type_: PromiseOrValue<BigNumberish>,
      channel_: PromiseOrValue<BigNumberish>,
      qty_: PromiseOrValue<BigNumberish>,
      token_: PromiseOrValue<string>,
      quote_: SwapQuoteStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalNetWorth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
