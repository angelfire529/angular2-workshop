import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { ContactService } from '../contact.service';
import { Contact } from './contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
})
export class ContactDetailComponent implements OnInit {
  id: Number;
  contact: Contact;

  constructor(private route: ActivatedRoute, private contactService: ContactService, private location: Location) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => {
      this.id = +params['id'];
      return this.contactService.getContact(this.id);
    }).subscribe(contact => this.contact = contact);
  }

  onSubmit() {
    this.contactService.updateContact(this.id, this.contact);
    this.goBack();
  }

  goBack() {
    this.location.back();
  }

}
