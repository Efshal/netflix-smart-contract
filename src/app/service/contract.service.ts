import { Injectable } from "@angular/core";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { netflix_abi } from "../../abis.js";

@Injectable({
  providedIn: "root",
})
export class ContractService {
  web3js: any;
  provider: any;
  accounts: any;
  netflix: any;
  web3Modal: Web3Modal;
  constructor() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "INFURA_ID", // required
        },
      },
    };

    this.web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)",
      },
    });
  }

  async connectAccount() {
    this.provider = await this.web3Modal.connect(); // set provider
    this.web3js = new Web3(this.provider); // create web3 instance
    this.accounts = await this.web3js.eth.getAccounts();
    return this.accounts;
  }

  async donate() {
    this.provider = await this.web3Modal.connect(); // set provider
    this.web3js = new Web3(this.provider); // create web3 instance
    this.accounts = await this.web3js.eth.getAccounts();
    this.netflix = new this.web3js.eth.Contract(
      netflix_abi,
      "0xcb3d1d24c278830e8d40faf003f6a4b1713bba19"
    );

    console.log(await this.netflix.methods.getBalanceOfCurrentAccount());
    const donate = await this.netflix.methods
      .transferFund()
      .send({ from: this.accounts[0], value: 2 * 1e18 });
    console.log(donate);
    // return donate;
  }
}
