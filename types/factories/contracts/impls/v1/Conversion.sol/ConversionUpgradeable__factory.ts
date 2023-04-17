/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ConversionUpgradeable,
  ConversionUpgradeableInterface,
} from "../../../../../contracts/impls/v1/Conversion.sol/ConversionUpgradeable";

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
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GOVERNOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OPERATOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "aggregatorAction",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sourceAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "sourceAmount",
        type: "uint256",
      },
    ],
    name: "convertAmt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "aggregatorAddress",
        type: "address",
      },
    ],
    name: "setAggregators",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenAggregators",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061111e806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806391d1485411610097578063ccc5749011610066578063ccc5749014610241578063d1b37b6d14610268578063d547741f1461027b578063f5b541a61461028e57600080fd5b806391d148541461020057806392be8bfd14610213578063a217fddf14610226578063ca15c8731461022e57600080fd5b806336568abe116100d357806336568abe1461018657806341976e09146101995780638e6334db146101ac5780639010d07c146101ed57600080fd5b806301ffc9a714610105578063247aa8d91461012d578063248a9ca31461014e5780632f2ff15d14610171575b600080fd5b610118610113366004610c83565b6102b5565b60405190151581526020015b60405180910390f35b61014061013b366004610cc9565b6102e0565b604051908152602001610124565b61014061015c366004610ce4565b60009081526065602052604090206001015490565b61018461017f366004610cfd565b6103df565b005b610184610194366004610cfd565b610409565b6101406101a7366004610cc9565b610487565b6101d56101ba366004610cc9565b60c9602052600090815260409020546001600160a01b031681565b6040516001600160a01b039091168152602001610124565b6101d56101fb366004610d29565b61053e565b61011861020e366004610cfd565b610556565b610184610221366004610d4b565b610581565b610140600081565b61014061023c366004610ce4565b6105da565b6101407f7935bd0ae54bc31f548c14dba4d37c5c64b3f8ca900cb468fb8abd54d5894f5581565b610140610276366004610d75565b6105f1565b610184610289366004610cfd565b610738565b6101407f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b92981565b60006001600160e01b03198216635a05180f60e01b14806102da57506102da8261075d565b92915050565b6001600160a01b03808216600090815260c96020526040808220548151633fabe5a360e21b81529151929316918391839163feaf968c9160048082019260a092909190829003018186803b15801561033757600080fd5b505afa15801561034b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036f9190610dcb565b50505091505060008112156040518060400160405280601b81526020017f436f6e76657273696f6e3a20476574205072696365204572726f720000000000815250906103d75760405162461bcd60e51b81526004016103ce9190610e4b565b60405180910390fd5b509392505050565b6000828152606560205260409020600101546103fa81610792565b610404838361079f565b505050565b6001600160a01b03811633146104795760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016103ce565b61048382826107c1565b5050565b6000806001600160a01b038316735979d7b546e38e414f7e9822514be443a480052914156104ff5760006104ce73ae7ab96520de3a18e5e111b5eaab095312d7fe846102e0565b9050670de0b6b3a76400006104e360006102e0565b6104ed9083610e94565b6104f79190610eb3565b91505061050b565b610508836102e0565b90505b60ca54610520906001600160a01b03166102e0565b61052d82620f4240610e94565b6105379190610eb3565b9392505050565b600082815260976020526040812061053790836107e3565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b7f7935bd0ae54bc31f548c14dba4d37c5c64b3f8ca900cb468fb8abd54d5894f556105ab81610792565b506001600160a01b03918216600090815260c96020526040902080546001600160a01b03191691909216179055565b60008181526097602052604081206102da906107ef565b6000808490506000849050816001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561063557600080fd5b505afa158015610649573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066d9190610ed5565b61067890600a610fdc565b61068186610487565b61068b9190610e94565b816001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156106c457600080fd5b505afa1580156106d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fc9190610ed5565b61070790600a610fdc565b61071088610487565b61071a9087610e94565b6107249190610e94565b61072e9190610eb3565b9695505050505050565b60008281526065602052604090206001015461075381610792565b61040483836107c1565b60006001600160e01b03198216637965db0b60e01b14806102da57506301ffc9a760e01b6001600160e01b03198316146102da565b61079c81336107f9565b50565b6107a98282610852565b600082815260976020526040902061040490826108d8565b6107cb82826108ed565b60008281526097602052604090206104049082610954565b60006105378383610969565b60006102da825490565b6108038282610556565b6104835761081081610993565b61081b8360206109a5565b60405160200161082c929190610feb565b60408051601f198184030181529082905262461bcd60e51b82526103ce91600401610e4b565b61085c8282610556565b6104835760008281526065602090815260408083206001600160a01b03851684529091529020805460ff191660011790556108943390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610537836001600160a01b038416610b41565b6108f78282610556565b156104835760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610537836001600160a01b038416610b90565b600082600001828154811061098057610980611060565b9060005260206000200154905092915050565b60606102da6001600160a01b03831660145b606060006109b4836002610e94565b6109bf906002611076565b67ffffffffffffffff8111156109d7576109d761108e565b6040519080825280601f01601f191660200182016040528015610a01576020820181803683370190505b509050600360fc1b81600081518110610a1c57610a1c611060565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610a4b57610a4b611060565b60200101906001600160f81b031916908160001a9053506000610a6f846002610e94565b610a7a906001611076565b90505b6001811115610af2576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610aae57610aae611060565b1a60f81b828281518110610ac457610ac4611060565b60200101906001600160f81b031916908160001a90535060049490941c93610aeb816110a4565b9050610a7d565b5083156105375760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016103ce565b6000818152600183016020526040812054610b88575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556102da565b5060006102da565b60008181526001830160205260408120548015610c79576000610bb46001836110bb565b8554909150600090610bc8906001906110bb565b9050818114610c2d576000866000018281548110610be857610be8611060565b9060005260206000200154905080876000018481548110610c0b57610c0b611060565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610c3e57610c3e6110d2565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506102da565b60009150506102da565b600060208284031215610c9557600080fd5b81356001600160e01b03198116811461053757600080fd5b80356001600160a01b0381168114610cc457600080fd5b919050565b600060208284031215610cdb57600080fd5b61053782610cad565b600060208284031215610cf657600080fd5b5035919050565b60008060408385031215610d1057600080fd5b82359150610d2060208401610cad565b90509250929050565b60008060408385031215610d3c57600080fd5b50508035926020909101359150565b60008060408385031215610d5e57600080fd5b610d6783610cad565b9150610d2060208401610cad565b600080600060608486031215610d8a57600080fd5b610d9384610cad565b9250610da160208501610cad565b9150604084013590509250925092565b805169ffffffffffffffffffff81168114610cc457600080fd5b600080600080600060a08688031215610de357600080fd5b610dec86610db1565b9450602086015193506040860151925060608601519150610e0f60808701610db1565b90509295509295909350565b60005b83811015610e36578181015183820152602001610e1e565b83811115610e45576000848401525b50505050565b6020815260008251806020840152610e6a816040850160208701610e1b565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610eae57610eae610e7e565b500290565b600082610ed057634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215610ee757600080fd5b815160ff8116811461053757600080fd5b600181815b80851115610f33578160001904821115610f1957610f19610e7e565b80851615610f2657918102915b93841c9390800290610efd565b509250929050565b600082610f4a575060016102da565b81610f57575060006102da565b8160018114610f6d5760028114610f7757610f93565b60019150506102da565b60ff841115610f8857610f88610e7e565b50506001821b6102da565b5060208310610133831016604e8410600b8410161715610fb6575081810a6102da565b610fc08383610ef8565b8060001904821115610fd457610fd4610e7e565b029392505050565b600061053760ff841683610f3b565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611023816017850160208801610e1b565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611054816028840160208801610e1b565b01602801949350505050565b634e487b7160e01b600052603260045260246000fd5b6000821982111561108957611089610e7e565b500190565b634e487b7160e01b600052604160045260246000fd5b6000816110b3576110b3610e7e565b506000190190565b6000828210156110cd576110cd610e7e565b500390565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220bd73ad529f19e88bba97135c9e7405b428aa543fa74403cdbcbffb5e4bff104164736f6c63430008080033";

type ConversionUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConversionUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConversionUpgradeable__factory extends ContractFactory {
  constructor(...args: ConversionUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ConversionUpgradeable> {
    return super.deploy(overrides || {}) as Promise<ConversionUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ConversionUpgradeable {
    return super.attach(address) as ConversionUpgradeable;
  }
  override connect(signer: Signer): ConversionUpgradeable__factory {
    return super.connect(signer) as ConversionUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConversionUpgradeableInterface {
    return new utils.Interface(_abi) as ConversionUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConversionUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ConversionUpgradeable;
  }
}
