import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilesUploadComponent } from './files-upload/files-upload.component';

const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'first', component: FilesUploadComponent},
  // { path: 'second', component: Tab2Component},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
