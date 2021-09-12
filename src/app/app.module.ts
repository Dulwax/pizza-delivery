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
import { HeaderComponent } from './layout/header/header.component';
import { TermsComponent } from './components/terms/terms.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { OptForgotComponent } from './opt-forgot/opt-forgot.component';
import { OtpLinkComponent } from './components/otp-link/otp-link.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainHeadingComponent } from './components/main-heading/main-heading.component';

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
    OptForgotComponent,
    OtpLinkComponent,
    FooterComponent,
    MainHeadingComponent
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
