import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { AppAboutComponent } from './app-about/app-about.component';
import { AppHistoryComponent } from './app-history/app-history.component';
import { AppContactsListComponent } from './app-contacts-list/app-contacts-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { APP_BASE_HREF } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppAboutComponent,
        AppHistoryComponent,
        AppContactsListComponent,
        ContactDetailComponent
      ],
      imports: [
        AppRoutingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Contacts'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Contacts');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Contacts');
  }));
});
