import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-transaction-status-page',
  templateUrl: './transaction-status-page.component.html',
  styleUrls: ['./transaction-status-page.component.scss']
})
export class TransactionStatusPageComponent implements OnInit {
  public state = false;
  public transactionSuccess = 'Successfull';
  public transactionFail = 'Fail';
  constructor() {}

  ngOnInit() {
    this.addClassToIcons();
  }
  addClassToIcons() {
    return this.state ? 'material-icons success-icon' : 'material-icons fail-icon';
  }
}
