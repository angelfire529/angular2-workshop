import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppAboutComponent } from '../app-about/app-about.component';
import { AppHistoryComponent } from '../app-history/app-history.component';
import { AppContactsListComponent } from '../app-contacts-list/app-contacts-list.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AppAboutComponent },
  { path: 'history', component: AppHistoryComponent },
  { path: 'contacts', component: AppContactsListComponent },
  { path: 'contact-details/:id', component: ContactDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
