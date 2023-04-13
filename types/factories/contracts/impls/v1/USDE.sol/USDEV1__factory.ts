/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  USDEV1,
  USDEV1Interface,
} from "../../../../../contracts/impls/v1/USDE.sol/USDEV1";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "BURNER_ROLE",
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
    name: "MINTER_ROLE",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IEzVault",
        name: "vault_",
        type: "address",
      },
    ],
    name: "contact",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "netWorth",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    inputs: [],
    name: "shareNetWorth",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalNetWorth",
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
    inputs: [],
    name: "totalShare",
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
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "contract IEzVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001961001e565b6100de565b600054610100900460ff161561008a5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff90811610156100dc576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6120a780620000ee6000396000f3fe608060405234801561001057600080fd5b50600436106102115760003560e01c806366869c0f11610125578063a457c2d7116100ad578063ccc574901161007c578063ccc5749014610445578063d53913931461045a578063d547741f14610481578063dd62ed3e14610494578063fbfa77cf146104a757600080fd5b8063a457c2d714610403578063a9059cbb14610416578063b4ab0bbd14610429578063ca15c8731461043257600080fd5b806391d14854116100f457806391d14854146103ba57806395d89b41146103cd5780639dc29fac146103d55780639ec200d1146103e8578063a217fddf146103fb57600080fd5b806366869c0f1461036c57806370a08231146103745780638456cb59146103875780639010d07c1461038f57600080fd5b80632f2ff15d116101a85780633f4ba83a116101775780633f4ba83a1461032b57806340c10f19146103335780634233799c146103465780634cd88b761461034e5780635c975abb1461036157600080fd5b80632f2ff15d146102e1578063313ce567146102f657806336568abe14610305578063395093511461031857600080fd5b806318160ddd116101e457806318160ddd1461027c57806323b872dd14610284578063248a9ca314610297578063282c51f3146102ba57600080fd5b806301ffc9a714610216578063026c42071461023e57806306fdde0314610254578063095ea7b314610269575b600080fd5b610229610224366004611b8a565b6104c0565b60405190151581526020015b60405180910390f35b6102466104eb565b604051908152602001610235565b61025c6104fb565b6040516102359190611be0565b610229610277366004611c28565b61058d565b6102466105be565b610229610292366004611c54565b6105e3565b6102466102a5366004611c95565b600090815260fb602052604090206001015490565b6102467f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a84881565b6102f46102ef366004611cae565b610616565b005b60405160128152602001610235565b6102f4610313366004611cae565b610640565b610229610326366004611c28565b6106c3565b6102f46106ed565b6102f4610341366004611c28565b610710565b610246610738565b6102f461035c366004611d81565b610852565b60655460ff16610229565b610246610966565b610246610382366004611de5565b6109a5565b6102f46109df565b6103a261039d366004611e02565b6109ff565b6040516001600160a01b039091168152602001610235565b6102296103c8366004611cae565b610a18565b61025c610a43565b6102f46103e3366004611c28565b610a52565b6102f46103f6366004611de5565b610a7a565b610246600081565b610229610411366004611c28565b610b5b565b610229610424366004611c28565b610b85565b620f4240610246565b610246610440366004611c95565b610baf565b61024660008051602061203083398151915281565b6102467f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6102f461048f366004611cae565b610bc7565b6102466104a2366004611e24565b610bec565b61015f546103a29061010090046001600160a01b031681565b60006001600160e01b03198216635a05180f60e01b14806104e557506104e582610c35565b92915050565b60006104f660355490565b905090565b60606036805461050a90611e52565b80601f016020809104026020016040519081016040528092919081815260200182805461053690611e52565b80156105835780601f1061055857610100808354040283529160200191610583565b820191906000526020600020905b81548152906001019060200180831161056657829003601f168201915b5050505050905090565b60006105b78361059b610966565b6105a885620f4240611ea3565b6105b29190611ec2565b610c6a565b9392505050565b6000620f42406105cc610966565b6035546105d99190611ea3565b6104f69190611ec2565b600061060e84846105f2610966565b6105ff86620f4240611ea3565b6106099190611ec2565b610c82565b949350505050565b600082815260fb602052604090206001015461063181610ca6565b61063b8383610cb0565b505050565b6001600160a01b03811633146106b55760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6106bf8282610cd3565b5050565b60006105b7836106d1610966565b6106de85620f4240611ea3565b6106e89190611ec2565b610cf6565b60008051602061203083398151915261070581610ca6565b61070d610d18565b50565b6106bf8261071c610966565b61072984620f4240611ea3565b6107339190611ec2565b610d6a565b600061015f60019054906101000a90046001600160a01b03166001600160a01b031663351fe3006040518163ffffffff1660e01b815260040160206040518083038186803b15801561078957600080fd5b505afa15801561079d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c19190611ee4565b61015f60019054906101000a90046001600160a01b03166001600160a01b0316635591ce5a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561081057600080fd5b505afa158015610824573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108489190611ee4565b6104f69190611efd565b600054610100900460ff16158080156108725750600054600160ff909116105b8061088c5750303b15801561088c575060005460ff166001145b6108ef5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016106ac565b6000805460ff191660011790558015610912576000805461ff0019166101001790555b61091c8383610d9e565b801561063b576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b600064e8d4a510006109766104eb565b1061099d576109836104eb565b61098b610738565b6105d990670de0b6b3a7640000611ea3565b50620f424090565b6001600160a01b038116600090815260336020526040812054620f4240906109cb610966565b6109d59190611ea3565b6104e59190611ec2565b6000805160206120308339815191526109f781610ca6565b61070d610ddf565b600082815261012d602052604081206105b79083610e1c565b600091825260fb602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606037805461050a90611e52565b6106bf82610a5e610966565b610a6b84620f4240611ea3565b610a759190611ec2565b610e28565b600080516020612030833981519152610a9281610ca6565b61015f546040805160608101909152602280825260ff9092161591612050602083013990610ad35760405162461bcd60e51b81526004016106ac9190611be0565b5061015f8054610100600160a81b0319166101006001600160a01b03851602179055610b1f7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a683610cb0565b610b497f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a84883610cb0565b505061015f805460ff19166001179055565b60006105b783610b69610966565b610b7685620f4240611ea3565b610b809190611ec2565b610e5c565b60006105b783610b93610966565b610ba085620f4240611ea3565b610baa9190611ec2565b610ed7565b600081815261012d602052604081206104e590610ee5565b600082815260fb6020526040902060010154610be281610ca6565b61063b8383610cd3565b6001600160a01b038083166000908152603460209081526040808320938516835292905290812054620f424090610c21610966565b610c2b9190611ea3565b6105b79190611ec2565b60006001600160e01b03198216637965db0b60e01b14806104e557506301ffc9a760e01b6001600160e01b03198316146104e5565b600033610c78818585610eef565b5060019392505050565b600033610c90858285611013565b610c9b85858561108d565b506001949350505050565b61070d8133611243565b610cba828261129c565b600082815261012d6020526040902061063b9082611322565b610cdd8282611337565b600082815261012d6020526040902061063b908261139e565b600033610c78818585610d098383610bec565b610d139190611efd565b610eef565b610d206113b3565b6065805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610d9481610ca6565b61063b83836113fe565b600054610100900460ff16610dc55760405162461bcd60e51b81526004016106ac90611f15565b610dcf82826114cb565b610dd76114fc565b6106bf61152b565b610de761156a565b6065805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610d4d3390565b60006105b783836115b0565b7f3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a848610e5281610ca6565b61063b83836115da565b60003381610e6a8286610bec565b905083811015610eca5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016106ac565b610c9b8286868403610eef565b600033610c7881858561108d565b60006104e5825490565b6001600160a01b038316610f515760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016106ac565b6001600160a01b038216610fb25760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016106ac565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061101f8484610bec565b90506000198114611087578181101561107a5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016106ac565b6110878484848403610eef565b50505050565b6001600160a01b0383166110f15760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016106ac565b6001600160a01b0382166111535760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016106ac565b61115e83838361171a565b6001600160a01b038316600090815260336020526040902054818110156111d65760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016106ac565b6001600160a01b0380851660008181526033602052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906112369086815260200190565b60405180910390a3611087565b61124d8282610a18565b6106bf5761125a81611780565b611265836020611792565b604051602001611276929190611f60565b60408051601f198184030181529082905262461bcd60e51b82526106ac91600401611be0565b6112a68282610a18565b6106bf57600082815260fb602090815260408083206001600160a01b03851684529091529020805460ff191660011790556112de3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006105b7836001600160a01b03841661192e565b6113418282610a18565b156106bf57600082815260fb602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006105b7836001600160a01b03841661197d565b60655460ff166113fc5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016106ac565b565b6001600160a01b0382166114545760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016106ac565b6114606000838361171a565b80603560008282546114729190611efd565b90915550506001600160a01b0382166000818152603360209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600054610100900460ff166114f25760405162461bcd60e51b81526004016106ac90611f15565b6106bf8282611a70565b600054610100900460ff166115235760405162461bcd60e51b81526004016106ac90611f15565b6113fc611abe565b600054610100900460ff166115525760405162461bcd60e51b81526004016106ac90611f15565b6113fc60008051602061203083398151915233610cb0565b60655460ff16156113fc5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016106ac565b60008260000182815481106115c7576115c7611fd5565b9060005260206000200154905092915050565b6001600160a01b03821661163a5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016106ac565b6116468260008361171a565b6001600160a01b038216600090815260336020526040902054818110156116ba5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016106ac565b6001600160a01b03831660008181526033602090815260408083208686039055603580548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b60655460ff161561063b5760405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686044820152691a5b19481c185d5cd95960b21b60648201526084016106ac565b60606104e56001600160a01b03831660145b606060006117a1836002611ea3565b6117ac906002611efd565b67ffffffffffffffff8111156117c4576117c4611cde565b6040519080825280601f01601f1916602001820160405280156117ee576020820181803683370190505b509050600360fc1b8160008151811061180957611809611fd5565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061183857611838611fd5565b60200101906001600160f81b031916908160001a905350600061185c846002611ea3565b611867906001611efd565b90505b60018111156118df576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061189b5761189b611fd5565b1a60f81b8282815181106118b1576118b1611fd5565b60200101906001600160f81b031916908160001a90535060049490941c936118d881611feb565b905061186a565b5083156105b75760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016106ac565b6000818152600183016020526040812054611975575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556104e5565b5060006104e5565b60008181526001830160205260408120548015611a665760006119a1600183612002565b85549091506000906119b590600190612002565b9050818114611a1a5760008660000182815481106119d5576119d5611fd5565b90600052602060002001549050808760000184815481106119f8576119f8611fd5565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611a2b57611a2b612019565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506104e5565b60009150506104e5565b600054610100900460ff16611a975760405162461bcd60e51b81526004016106ac90611f15565b8151611aaa906036906020850190611af1565b50805161063b906037906020840190611af1565b600054610100900460ff16611ae55760405162461bcd60e51b81526004016106ac90611f15565b6065805460ff19169055565b828054611afd90611e52565b90600052602060002090601f016020900481019282611b1f5760008555611b65565b82601f10611b3857805160ff1916838001178555611b65565b82800160010185558215611b65579182015b82811115611b65578251825591602001919060010190611b4a565b50611b71929150611b75565b5090565b5b80821115611b715760008155600101611b76565b600060208284031215611b9c57600080fd5b81356001600160e01b0319811681146105b757600080fd5b60005b83811015611bcf578181015183820152602001611bb7565b838111156110875750506000910152565b6020815260008251806020840152611bff816040850160208701611bb4565b601f01601f19169190910160400192915050565b6001600160a01b038116811461070d57600080fd5b60008060408385031215611c3b57600080fd5b8235611c4681611c13565b946020939093013593505050565b600080600060608486031215611c6957600080fd5b8335611c7481611c13565b92506020840135611c8481611c13565b929592945050506040919091013590565b600060208284031215611ca757600080fd5b5035919050565b60008060408385031215611cc157600080fd5b823591506020830135611cd381611c13565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112611d0557600080fd5b813567ffffffffffffffff80821115611d2057611d20611cde565b604051601f8301601f19908116603f01168101908282118183101715611d4857611d48611cde565b81604052838152866020858801011115611d6157600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215611d9457600080fd5b823567ffffffffffffffff80821115611dac57600080fd5b611db886838701611cf4565b93506020850135915080821115611dce57600080fd5b50611ddb85828601611cf4565b9150509250929050565b600060208284031215611df757600080fd5b81356105b781611c13565b60008060408385031215611e1557600080fd5b50508035926020909101359150565b60008060408385031215611e3757600080fd5b8235611e4281611c13565b91506020830135611cd381611c13565b600181811c90821680611e6657607f821691505b60208210811415611e8757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611ebd57611ebd611e8d565b500290565b600082611edf57634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215611ef657600080fd5b5051919050565b60008219821115611f1057611f10611e8d565b500190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611f98816017850160208801611bb4565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611fc9816028840160208801611bb4565b01602801949350505050565b634e487b7160e01b600052603260045260246000fd5b600081611ffa57611ffa611e8d565b506000190190565b60008282101561201457612014611e8d565b500390565b634e487b7160e01b600052603160045260246000fdfe7935bd0ae54bc31f548c14dba4d37c5c64b3f8ca900cb468fb8abd54d5894f55457a546f6b656e3a436f6e747261637420416c726561647920436f6e746163746564a26469706673582212201df5d37f653b2b6a51b4a595dc6c85f0bf3aa2536e458c3f553efa6c0d76372364736f6c63430008080033";

type USDEV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: USDEV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class USDEV1__factory extends ContractFactory {
  constructor(...args: USDEV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<USDEV1> {
    return super.deploy(overrides || {}) as Promise<USDEV1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): USDEV1 {
    return super.attach(address) as USDEV1;
  }
  override connect(signer: Signer): USDEV1__factory {
    return super.connect(signer) as USDEV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): USDEV1Interface {
    return new utils.Interface(_abi) as USDEV1Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): USDEV1 {
    return new Contract(address, _abi, signerOrProvider) as USDEV1;
  }
}
