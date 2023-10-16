import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImprintComponent } from './components/imprint/imprint.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';

const routes: Routes = [
  { path: 'imprint', component: ImprintComponent },
  { path: 'qrcode', component: QrcodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }