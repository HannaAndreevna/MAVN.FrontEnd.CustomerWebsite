import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {SettingsService} from '../core/settings/settings.service';
import {ValidatePaymentRequest} from './transaction-status-page/models/validate-payment-request.interface';

@Injectable({
  providedIn: 'root'
})
export class PartnerApiService {
  private baseApiUrl = '';

  private readonly httpOptions = {
    headers: new HttpHeaders(),
    withCredentials: false,
    params: new HttpParams()
  };

  constructor(
    // services
    private apiHttp: HttpClient,
    private settingsService: SettingsService
  ) {
    this.baseApiUrl = this.settingsService.PartnerApiUrl;
  }

  validatePayment(model: ValidatePaymentRequest) {
    return this.apiHttp.post(this.baseApiUrl + '/api/payments/paymentchecks', model, this.httpOptions);
  }
}
