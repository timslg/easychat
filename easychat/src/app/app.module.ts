import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { AppRoutingModule } from './app-routing.module';
import { ImprintComponent } from './components/imprint/imprint.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { WINDOW_PROVIDERS } from './window.providers';
import { HostnameService } from './services/hostname.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LanguageSelectorComponent,
    ImprintComponent,
    QrcodeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoRootModule,
    AppRoutingModule,
    QRCodeModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
