export const uDonate_address = "0xCb3D1d24c278830e8D40FaF003f6a4B1713bba19";
export const uDonate_abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_transferTo",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_transferFrom",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TransferFund",
    type: "event",
  },
  {
    inputs: [],
    name: "getBalanceOfCurrentAccount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "transferFund",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];
