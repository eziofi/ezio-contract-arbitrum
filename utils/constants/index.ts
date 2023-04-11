import { BigNumber } from "@0x/utils";
import { promisify } from 'util';

export const sleep = promisify(setTimeout);

export const ONE_ETHER_BASE_UNITS = "1000000000000000000";
export const ONE_ETHER = new BigNumber(1e18);
export const POSITIVE_INF = new BigNumber('Infinity');
export const ZERO_AMOUNT = new BigNumber(0);
export const MAX_UINT256 = new BigNumber(2).pow(256).minus(1);
export const ONE_HOUR_IN_SECONDS = 60 * 60;
export const ONE_SECOND_MS = 1000;
export const SAMPLER_ADDRESS = '0x5555555555555555555555555555555555555555';
export const COMPARISON_PRICE_DECIMALS = 10;
export const ETH_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
export const STETH_ADDRESS = "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84";
export const ZEROEX_ADDRESS = "0xDef1C0ded9bec7F1a1670819833240f027b25EfF";
export const ONEINCH_ADDRESS = "0x1111111254EEB25477B68fb85Ed929f73A960582";

// Mainnet tokens
// Not an exhaustive list, just enough so we don't repeat ourselves
export const MAINNET_TOKENS = {
  WETH: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  // Stable Coins
  DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
  USDC: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  USDT: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  sUSD: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
  BUSD: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
  TUSD: '0x0000000000085d4780b73119b644ae5ecd22b376',
  PAX: '0x8e870d67f660d95d5be530380d0ec0bd388289e1',
  GUSD: '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd',
  HUSD: '0xdf574c24545e5ffecb9a659c229253d4111d87e1',
  mUSD: '0xe2f2a5c287993345a840db3b0845fbc70f5935a5',
  USDN: '0x674c6ad92fd080e4004b2312b45f796a192d27a0',
  dUSD: '0x5bc25f649fc4e26069ddf4cf4010f9f706c23831',
  USDP: '0x1456688345527be1f37e9e627da0837d6f08c925',
  USX: '0x0a5e677a6a24b2f1a2bf4f3bffc443231d2fdec8',
  WCUSD: '0xad3e3fc59dff318beceaab7d00eb4f68b1ecf195',
  // Bitcoins
  WBTC: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  RenBTC: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
  sBTC: '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6',
  tBTC: '0x8daebade922df735c38c80c7ebd708af50815faa',
  tBTCv2: '0x18084fba666a33d37592fa2633fd49a74dd93a88',
  hBTC: '0x0316eb71485b0ab14103307bf65a021042c6d380',
  pBTC: '0x5228a22e72ccc52d415ecfd199f99d0665e7733b',
  bBTC: '0x9be89d2a4cd102d8fecc6bf9da793be995c22541',
  oBTC: '0x8064d9ae6cdf087b1bcd5bdf3531bd5d8c537a68',
  // aTokens (Aave)
  aDAI: '0x028171bca77440897b824ca71d1c56cac55b68a3',
  aUSDC: '0xbcca60bb61934080951369a648fb03df4f96263c',
  aUSDT: '0x3ed3b47dd13ec9a98b44e6204a523e766b225811',
  aSUSD: '0x6c5024cd4f8a59110119c56f8933403a539555eb',
  // Other
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  EURS: '0xdb25f211ab05b1c97d595516f45794528a807ad8',
  sEUR: '0xd71ecff9342a5ced620049e616c5035f1db98620',
  sETH: '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb',
  sJPY: '0xf6b1c627e95bfc3c1b4c9b825a032ff0fbf3e07d',
  sGBP: '0x97fe22e7341a0cd8db6f6c021a24dc8f4dad855f',
  sAUD: '0xf48e200eaf9906362bb1442fca31e0835773b8b4',
  sKRW: '0x269895a3df4d73b077fc823dd6da1b95f72aaf9b',
  sCHF: '0x0f83287ff768d1c1e17a42f44d644d7f22e8ee1d',
  stETH: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
  wstETH: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
  LINK: '0x514910771af9ca656af840dff83e8264ecf986ca',
  MANA: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
  KNC: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
  AAVE: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
  sLINK: '0xbbc455cb4f1b9e4bfc4b73970d360c8f032efee6',
  yUSD: '0x5dbcf33d8c2e976c6b560249878e6f1491bca25c',
  ybCRV: '0x2994529c0652d127b7842094103715ec5299bbed',
  yCRV: '0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8',
  ynCRV: '0xfcc5c47be19d06bf83eb04298b026f81069ff65b',
  bCRV: '0x3b3ac5386837dc563660fb6a0937dfaa5924333b',
  yDAI: '0xacd43e627e64355f1861cec6d3a6688b31a6f952',
  yUSDC: '0x597ad1e0c13bfe8025993d9e79c69e1c0233522e',
  yUSDT: '0x2f08119c6f07c006695e079aafc638b8789faf18',
  yTUSD: '0x37d19d1c4e1fa9dc47bd1ea12f742a0887eda74a',
  crETH: '0xcbc1065255cbc3ab41a6868c22d1f1c573ab89fd',
  ankrETH: '0xe95a203b1a91a908f9b9ce46459d101078c2c3cb',
  vETH: '0x898bad2774eb97cf6b94605677f43b41871410b1',
  alETH: '0x0100546f2cd4c9d97f798ffc9755e47865ff7ee6',
  HT: '0x6f259637dcd74c767781e37bc6133cd6a68aa161',
  UST: '0xa47c8bf37f92abed4a126bda807a7b7498661acd',
  // StableSwap "open pools" (crv.finance)
  STABLEx: '0xcd91538b91b4ba7797d39a2f66e63810b50a33d0',
  alUSD: '0xbc6da0fe9ad5f3b0d58160288917aa56653660e9',
  // Frax ecosystem
  FRAX: '0x853d955acef822db058eb8505911ed77f175b99e',
  cvxFXS: '0xfeef77d3f69374f66429c91d732a244f074bdf74',
  FXS: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
  OHM: '0x383518188c0c6d7730d91b2c03a03c837814a899',
  OHMV2: '0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5',
  BTRFLY: '0xc0d4ceb216b3ba9c3701b291766fdcba977cec3a',
  // Stargate
  STG: '0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6',
  //
  LUSD: '0x5f98805a4e8be255a32880fdec7f6728c6568ba0',
  // Fei Ecosystem
  FEI: '0x956f47f50a910163d8bf957cf5846d573e7f87ca',
  TRIBE: '0xc7283b66eb1eb5fb86327f08e1b5816b0720212b',
  //
  DSU: '0x605d26fbd5be761089281d5cec2ce86eea667109',
  ESS: '0x24ae124c4cc33d6791f8e8b63520ed7107ac8b3e',
  cvxCRV: '0x62b9c7356a2dc64a1969e19c23e4f579f9810aa7',
  CRV: '0xd533a949740bb3306d119cc777fa900ba034cd52',
  MIM: '0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3',
  EURT: '0xc581b735a1688071a1746c968e0798d642ede491',
  // Synapse ecosystem
  nUSD: '0x1b84765de8b7566e4ceaf4d0fd3c5af52d3dde4f',
  CVX: '0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b',
  UST_WORMHOLE: '0xa693b19d2931d498c5b318df961919bb4aee87a5',
  RAI: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919',
  DOLA: '0x865377367054516e17014ccded1e7d814edc9ce4',
  OUSD: '0x2a8e1e676ec238d8a992307b495b45b3feaa5e86',
  agEUR: '0x1a7e4e63778b4f12a199c062f3efdd288afcbce8',
  ibEUR: '0x96e61422b6a9ba0e068b6c5add4ffabc6a4aae27',
  YFI: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
  LUSDCRV: '0xed279fdd11ca84beef15af5d39bb4d4bee23f0ca',
  bLUSD: '0xb9d7dddca9a4ac480991865efef82e01273f79c3',
  rsr: '0x320623b8e4ff03373931769a31fc52a4e78b5d70',
  crvFRAX: '0x3175df0976dfa876431c2e9ee6bc45b65d3473cc',
  cUSDC: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
  cDAI: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
  cWBTC: '0xccf4429db6322d5c611ee964527d42e5d685dd6a',
};

export const BSC_TOKENS = {
  WBNB: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  BUSD: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  USDT: '0x55d398326f99059ff775485246999027b3197955',
  USDC: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  DAI: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  PAX: '0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094',
  UST: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
  VAI: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
  WEX: '0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90',
  WETH: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  BTCB: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  renBTC: '0xfce146bf3146100cfe5db4129cf6c82b0ef4ad8c',
  pBTC: '0xed28a457a5a76596ac48d87c0f577020f6ea1c4c',
  nUSD: '0x23b891e5c62e0955ae2bd185990103928ab817b3',
  BSW: '0x965f527d9159dce6288a2219db51fc6eef120dd1',
  WOO: '0x4691937a7508860f876c9c0a2a617e7d9e945d4b',
};

export const POLYGON_TOKENS = {
  DAI: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
  USDC: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  USDT: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
  amDAI: '0x27f8d03b3a2196956ed754badc28d73be8830a6e',
  amUSDC: '0x1a13f4ca1d028320a707d99520abfefca3998b7f',
  amUSDT: '0x60d55f02a771d515e077c9c2403a1ef324885cec',
  WBTC: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
  WMATIC: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
  WETH: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  renBTC: '0xdbf31df14b66535af65aac99c32e9ea844e14501',
  QUICK: '0x831753dd7087cac61ab5644b308642cc1c33dc13',
  DFYN: '0xc168e40227e4ebd8c1cae80f7a55a4f0e6d66c97',
  BANANA: '0x5d47baba0d66083c52009271faf3f50dcc01023c',
  WEXPOLY: '0x4c4bf319237d98a30a929a96112effa8da3510eb',
  nUSD: '0xb6c473756050de474286bed418b77aeac39b02af',
  ANY: '0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8',
  WOO: '0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603',
  stMATIC: '0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4',
};

export const ARBITRUM_TOKENS = {
  USDT: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
  USDC: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
  DAI: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  FRAX: '0x17fc002b466eec40dae837fc4be5c67993ddbd6f',
  nETH: '0x3ea9b0ab55f34fb188824ee288ceaefc63cf908e',
  WETH: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
  nUSD: '0x2913e812cf0dcca30fb28e6cac3d2dcff4497688',
  MIM: '0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a',
  WBTC: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
  VST: '0x64343594ab9b56e99087bfa6f2335db24c2d1f17',
  wstETH: '0x5979D7b546E38E414F7E9822514be443A4800529',
};

export const ERC20_ABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export const IWETH_ABI =  [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
];

