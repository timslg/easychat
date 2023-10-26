import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImprintComponent } from './components/imprint/imprint.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { ChatComponent } from './components/chat/chat.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'imprint', component: ImprintComponent },
  { path: 'qrcode', component: QrcodeComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: '', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }