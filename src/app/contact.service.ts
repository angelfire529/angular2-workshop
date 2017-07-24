import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { Contact } from './contact-detail/contact';

@Injectable()
export class ContactService {
  /* contacts: Array<Contact> = [
    { firstName: 'cheatarah', lastName: 'kitty', phone: '310-555-1212', email: 'rockncoder@gmail.com', id: 1 },
    { firstName: 'lionel', lastName: 'cat', phone: '310-555-1212', email: 'rockncoder@gmail.com', id: 2 },
    { firstName: 'snivel', lastName: 'snarf', phone: '310-555-1212', email: 'rockncoder@gmail.com', id: 3 }
  ]; */

  contacts: FirebaseListObservable<Contact[]>;

  constructor(private db: AngularFireDatabase) {
    this.contacts = db.list('/contacts');
   }

  getContacts(): FirebaseListObservable<Contact[]> {
    return this.contacts;
  }


  getContact(id): FirebaseObjectObservable<any> {
    const contact = this.db.object('/contacts/' + id);
    return contact;
  }

  setContact(contact: Contact): void {
    // this.contacts = [...this.contacts, contact];
    this.contacts.push(contact);
  }

  updateContact(id: Number, contact: Contact): void {
    this.contacts.update(id.toString(), contact);
  }
}
