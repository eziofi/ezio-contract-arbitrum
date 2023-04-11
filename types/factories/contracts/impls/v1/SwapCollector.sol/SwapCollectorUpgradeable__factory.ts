/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  SwapCollectorUpgradeable,
  SwapCollectorUpgradeableInterface,
} from "../../../../../contracts/impls/v1/SwapCollector.sol/SwapCollectorUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212203d5dd1f5e7db9d8b80f8167b69d7f71fb8f200694172443fdc864028ef04af0c64736f6c63430008080033";

type SwapCollectorUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapCollectorUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwapCollectorUpgradeable__factory extends ContractFactory {
  constructor(...args: SwapCollectorUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SwapCollectorUpgradeable> {
    return super.deploy(overrides || {}) as Promise<SwapCollectorUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SwapCollectorUpgradeable {
    return super.attach(address) as SwapCollectorUpgradeable;
  }
  override connect(signer: Signer): SwapCollectorUpgradeable__factory {
    return super.connect(signer) as SwapCollectorUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapCollectorUpgradeableInterface {
    return new utils.Interface(_abi) as SwapCollectorUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapCollectorUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SwapCollectorUpgradeable;
  }
}