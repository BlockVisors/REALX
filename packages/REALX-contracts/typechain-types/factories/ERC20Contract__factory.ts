/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Contract, ERC20ContractInterface } from "../ERC20Contract";

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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280601381526020017f455243323020546f6b656e2053616d706c6531000000000000000000000000008152506040518060400160405280600881526020017f53616d706c6520310000000000000000000000000000000000000000000000008152508160039080519060200190620000969291906200025a565b508060049080519060200190620000af9291906200025a565b505050620000d1336c01431e0fae6d7217caa0000000620000d760201b60201c565b620004b6565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200014a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000141906200036b565b60405180910390fd5b6200015e600083836200025060201b60201c565b8060026000828254620001729190620003c6565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001c99190620003c6565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000230919062000434565b60405180910390a36200024c600083836200025560201b60201c565b5050565b505050565b505050565b828054620002689062000480565b90600052602060002090601f0160209004810192826200028c5760008555620002d8565b82601f10620002a757805160ff1916838001178555620002d8565b82800160010185558215620002d8579182015b82811115620002d7578251825591602001919060010190620002ba565b5b509050620002e79190620002eb565b5090565b5b8082111562000306576000816000905550600101620002ec565b5090565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000353601f836200030a565b915062000360826200031b565b602082019050919050565b60006020820190508181036000830152620003868162000344565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620003d3826200038d565b9150620003e0836200038d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000418576200041762000397565b5b828201905092915050565b6200042e816200038d565b82525050565b60006020820190506200044b600083018462000423565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200049957607f821691505b60208210811415620004b057620004af62000451565b5b50919050565b61165680620004c66000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806395d89b411161006657806395d89b4114610226578063a457c2d714610244578063a9059cbb14610274578063dd62ed3e146102a4576100cf565b806342966c68146101be57806370a08231146101da57806379cc67901461020a576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461012257806323b872dd14610140578063313ce56714610170578063395093511461018e575b600080fd5b6100dc6102d4565b6040516100e99190610d8b565b60405180910390f35b61010c60048036038101906101079190610e46565b610366565b6040516101199190610ea1565b60405180910390f35b61012a610389565b6040516101379190610ecb565b60405180910390f35b61015a60048036038101906101559190610ee6565b610393565b6040516101679190610ea1565b60405180910390f35b6101786103c2565b6040516101859190610f55565b60405180910390f35b6101a860048036038101906101a39190610e46565b6103cb565b6040516101b59190610ea1565b60405180910390f35b6101d860048036038101906101d39190610f70565b610402565b005b6101f460048036038101906101ef9190610f9d565b610416565b6040516102019190610ecb565b60405180910390f35b610224600480360381019061021f9190610e46565b61045e565b005b61022e61047e565b60405161023b9190610d8b565b60405180910390f35b61025e60048036038101906102599190610e46565b610510565b60405161026b9190610ea1565b60405180910390f35b61028e60048036038101906102899190610e46565b610587565b60405161029b9190610ea1565b60405180910390f35b6102be60048036038101906102b99190610fca565b6105aa565b6040516102cb9190610ecb565b60405180910390f35b6060600380546102e390611039565b80601f016020809104026020016040519081016040528092919081815260200182805461030f90611039565b801561035c5780601f106103315761010080835404028352916020019161035c565b820191906000526020600020905b81548152906001019060200180831161033f57829003601f168201915b5050505050905090565b600080610371610631565b905061037e818585610639565b600191505092915050565b6000600254905090565b60008061039e610631565b90506103ab858285610804565b6103b6858585610890565b60019150509392505050565b60006012905090565b6000806103d6610631565b90506103f78185856103e885896105aa565b6103f2919061109a565b610639565b600191505092915050565b61041361040d610631565b82610b11565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6104708261046a610631565b83610804565b61047a8282610b11565b5050565b60606004805461048d90611039565b80601f01602080910402602001604051908101604052809291908181526020018280546104b990611039565b80156105065780601f106104db57610100808354040283529160200191610506565b820191906000526020600020905b8154815290600101906020018083116104e957829003601f168201915b5050505050905090565b60008061051b610631565b9050600061052982866105aa565b90508381101561056e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056590611162565b60405180910390fd5b61057b8286868403610639565b60019250505092915050565b600080610592610631565b905061059f818585610890565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a0906111f4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610719576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071090611286565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107f79190610ecb565b60405180910390a3505050565b600061081084846105aa565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461088a578181101561087c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610873906112f2565b60405180910390fd5b6108898484848403610639565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610900576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f790611384565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610970576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096790611416565b60405180910390fd5b61097b838383610ce8565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a01576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f8906114a8565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a94919061109a565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610af89190610ecb565b60405180910390a3610b0b848484610ced565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b789061153a565b60405180910390fd5b610b8d82600083610ce8565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c13576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0a906115cc565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254610c6a91906115ec565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ccf9190610ecb565b60405180910390a3610ce383600084610ced565b505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d2c578082015181840152602081019050610d11565b83811115610d3b576000848401525b50505050565b6000601f19601f8301169050919050565b6000610d5d82610cf2565b610d678185610cfd565b9350610d77818560208601610d0e565b610d8081610d41565b840191505092915050565b60006020820190508181036000830152610da58184610d52565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ddd82610db2565b9050919050565b610ded81610dd2565b8114610df857600080fd5b50565b600081359050610e0a81610de4565b92915050565b6000819050919050565b610e2381610e10565b8114610e2e57600080fd5b50565b600081359050610e4081610e1a565b92915050565b60008060408385031215610e5d57610e5c610dad565b5b6000610e6b85828601610dfb565b9250506020610e7c85828601610e31565b9150509250929050565b60008115159050919050565b610e9b81610e86565b82525050565b6000602082019050610eb66000830184610e92565b92915050565b610ec581610e10565b82525050565b6000602082019050610ee06000830184610ebc565b92915050565b600080600060608486031215610eff57610efe610dad565b5b6000610f0d86828701610dfb565b9350506020610f1e86828701610dfb565b9250506040610f2f86828701610e31565b9150509250925092565b600060ff82169050919050565b610f4f81610f39565b82525050565b6000602082019050610f6a6000830184610f46565b92915050565b600060208284031215610f8657610f85610dad565b5b6000610f9484828501610e31565b91505092915050565b600060208284031215610fb357610fb2610dad565b5b6000610fc184828501610dfb565b91505092915050565b60008060408385031215610fe157610fe0610dad565b5b6000610fef85828601610dfb565b925050602061100085828601610dfb565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061105157607f821691505b602082108114156110655761106461100a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006110a582610e10565b91506110b083610e10565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156110e5576110e461106b565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061114c602583610cfd565b9150611157826110f0565b604082019050919050565b6000602082019050818103600083015261117b8161113f565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006111de602483610cfd565b91506111e982611182565b604082019050919050565b6000602082019050818103600083015261120d816111d1565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611270602283610cfd565b915061127b82611214565b604082019050919050565b6000602082019050818103600083015261129f81611263565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006112dc601d83610cfd565b91506112e7826112a6565b602082019050919050565b6000602082019050818103600083015261130b816112cf565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061136e602583610cfd565b915061137982611312565b604082019050919050565b6000602082019050818103600083015261139d81611361565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611400602383610cfd565b915061140b826113a4565b604082019050919050565b6000602082019050818103600083015261142f816113f3565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611492602683610cfd565b915061149d82611436565b604082019050919050565b600060208201905081810360008301526114c181611485565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611524602183610cfd565b915061152f826114c8565b604082019050919050565b6000602082019050818103600083015261155381611517565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b60006115b6602283610cfd565b91506115c18261155a565b604082019050919050565b600060208201905081810360008301526115e5816115a9565b9050919050565b60006115f782610e10565b915061160283610e10565b9250828210156116155761161461106b565b5b82820390509291505056fea2646970667358221220b26e7c4deb14b700f2ae5940e6c237299033f810eb9bfb9025ffe550759e06bb64736f6c63430008090033";

type ERC20ContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Contract__factory extends ContractFactory {
  constructor(...args: ERC20ContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20Contract";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Contract> {
    return super.deploy(overrides || {}) as Promise<ERC20Contract>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20Contract {
    return super.attach(address) as ERC20Contract;
  }
  connect(signer: Signer): ERC20Contract__factory {
    return super.connect(signer) as ERC20Contract__factory;
  }
  static readonly contractName: "ERC20Contract";
  public readonly contractName: "ERC20Contract";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20ContractInterface {
    return new utils.Interface(_abi) as ERC20ContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Contract {
    return new Contract(address, _abi, signerOrProvider) as ERC20Contract;
  }
}