import { Component } from "@angular/core";
import { ContractService } from "./service/contract.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "udonate-dapp";

  constructor(private contractService: ContractService) {
    // this.contractService.connectAccount();
    // this.contractService.donate();
  }

  nowConnect() {
    this.contractService.connectAccount();
  }
  nowSubscribe() {
    this.contractService.donate();
  }
}
