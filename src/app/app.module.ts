import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { HeaderComponent } from './header/header.component';
import { TermsComponent } from './terms/terms.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { OptForgotComponent } from './opt-forgot/opt-forgot.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignInComponent,
    RegisterComponent,
    OtpComponent,
    ForgotPasswordComponent,
    SetPasswordComponent,
    HeaderComponent,
    TermsComponent,
    OptForgotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOtpInputModule,
    PasswordStrengthMeterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
