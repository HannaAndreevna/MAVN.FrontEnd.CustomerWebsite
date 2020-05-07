import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PartnerApiService} from '../partner-api.service';
import {ValidatePaymentRequest} from './models/validate-payment-request.interface';

@Component({
  selector: 'app-transaction-status-page',
  templateUrl: './transaction-status-page.component.html',
  styleUrls: ['./transaction-status-page.component.scss']
})
export class TransactionStatusPageComponent implements OnInit {
  state = false;
  isProcessing = false;
  isSuccess: boolean;
  isError: boolean;

  constructor(
    // services
    private route: ActivatedRoute,
    private partnerApiService: PartnerApiService
  ) {}

  ngOnInit() {
    this.state = this.route.snapshot.queryParams.state === 'success';

    if (this.state) {
      const paymentRequestId = this.route.snapshot.queryParams.paymentRequestId;

      if (!paymentRequestId) {
        this.state = false;
      } else {
        const model: ValidatePaymentRequest = {
          PaymentRequestId: paymentRequestId
        };

        this.isProcessing = true;

        this.partnerApiService.validatePayment(model).subscribe(
          () => {
            this.isSuccess = true;
            this.isProcessing = false;
          },
          ({error}) => {
            console.error(error);
            this.isError = true;
            this.isProcessing = false;
          }
        );
      }
    }

    this.addClassToIcons();
  }

  addClassToIcons() {
    return this.state ? 'material-icons success-icon' : 'material-icons fail-icon';
  }
}
