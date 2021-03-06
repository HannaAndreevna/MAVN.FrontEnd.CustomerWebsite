import {Injectable} from '@angular/core';
import {ApiHttpService} from 'ngx-api-utils';
import {EmailConfirmationRequest} from './email-confirmation/interface/email-confirmation-request.interface';
import {ValidateResetPasswordIdentifierRequest} from './reset-password/interface/validate-reset-password-identifier-request.interface';
import {ResetPasswordRequest} from './reset-password/interface/reset-password-request.interface';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  constructor(private apiHttp: ApiHttpService) {}

  getFooterLinks() {
    return this.apiHttp.get('/api/commonInformation', {headers: this.apiHttp.headersWithNoAuthorization()});
  }

  verifyEmail(model: EmailConfirmationRequest) {
    return this.apiHttp.post('/api/emails/verify-email', model, {headers: this.apiHttp.headersWithNoAuthorization()});
  }

  validateResetPasswordIdentifier(model: ValidateResetPasswordIdentifierRequest) {
    return this.apiHttp.post('/api/customers/validate-reset-password-identifier', model, {
      headers: this.apiHttp.headersWithNoAuthorization()
    });
  }

  getPasswordValidationRules() {
    return this.apiHttp.get('/api/customers/password-validation-rules', {headers: this.apiHttp.headersWithNoAuthorization()});
  }

  resetPassword(model: ResetPasswordRequest) {
    return this.apiHttp.post('/api/customers/reset-password', model, {headers: this.apiHttp.headersWithNoAuthorization()});
  }
}
