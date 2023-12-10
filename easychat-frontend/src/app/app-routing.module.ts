import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImprintComponent } from './components/imprint/imprint.component';
import { ChatComponent } from './components/chat/chat.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { userGuard } from './guards/user.guard';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';

const routes: Routes = [
  { path: 'imprint', component: ImprintComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'leaderboard', component: LeaderboardComponent, canActivate: [userGuard]},
  { path: '**', component: ChatComponent, canActivate: [userGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }