import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ImprintComponent } from './components/imprint/imprint.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatMessageListComponent } from './components/chat-message-list/chat-message-list.component';
import { TextareaAutoresizeDirective } from './directives/textarea-autoresize.directive';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { environment } from 'src/environments/environment';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AlertComponent } from './components/alert/alert.component';

const config: SocketIoConfig = { url: environment.socketUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ImprintComponent,
    ChatInputComponent,
    ChatComponent,
    ChatMessageListComponent,
    TextareaAutoresizeDirective,
    UserProfileComponent,
    LeaderboardComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
