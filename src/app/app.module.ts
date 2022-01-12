import { NotFoundComponent } from './not-found/not-found.component ';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventComponent } from './events/event.component';
import { EventDetailsComponent } from "./event-details/event-details.component"
import { routes } from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventComponent,
    EventDetailsComponent,
    HeaderComponent,
    ContactUsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: "canDeactivateCreateMethod", useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function checkDirtyState(contactUsComponent: ContactUsComponent) {
  const isDirty = contactUsComponent.isDirty;
  if(isDirty){
    return window.confirm('Data will be lost, are you sure you want proceed?')
  }
  return true;
}