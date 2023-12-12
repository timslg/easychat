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

/**
 * This module is used for the routing.
 * The content space is populated based on the router output.
 * The default route is the chat.
 * To access the leaderboard or the chat the user needs to set its username.
 * This is enforced with the userGuard.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }