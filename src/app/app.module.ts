import { SessionComponent } from './session/session.component';
import { SessionListComponent } from './session-list/session-list.component';
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
import { checkDirtyState } from './route-activator';
import { ReactiveFormsModule } from "@angular/forms";
import { SessionDetailsComponent } from './session-details/session-details.component';
import { SessionEditorComponent } from './session-editor/session-editor.component';
import { CollapseComponent } from './collapse/collapse.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventComponent,
    EventDetailsComponent,
    HeaderComponent,
    ContactUsComponent,
    NotFoundComponent,
    SessionDetailsComponent,
    SessionListComponent,
    SessionEditorComponent,
    SessionComponent,
    CollapseComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
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
