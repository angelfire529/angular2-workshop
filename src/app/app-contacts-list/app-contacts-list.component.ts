import { Component, OnInit } from '@angular/core';

import { ContactDetailComponent } from '../contact-detail/contact-detail.component';

import { ContactService } from '../contact.service';

import { Contact } from '../contact-detail/contact';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './app-contacts-list.component.html',
  styleUrls: ['./app-contacts-list.component.css']
})
export class AppContactsListComponent implements OnInit {
  contacts: FirebaseListObservable<Contact[]>;
  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

}
