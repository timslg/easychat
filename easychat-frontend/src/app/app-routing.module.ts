import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImprintComponent } from './components/imprint/imprint.component';
import { ChatComponent } from './components/chat/chat.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { userGuard } from './guards/user.guard';

const routes: Routes = [
  { path: 'imprint', component: ImprintComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: '', component: ChatComponent, canActivate: [userGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }