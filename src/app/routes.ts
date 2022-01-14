import {EventRouteActivatorService} from './services/event-route-activator.service';
import {NotFoundComponent} from './not-found/not-found.component ';
import {EventDetailsComponent} from './event-details/event-details.component';
import {EventsListComponent} from './events/events-list.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {PostsListComponent} from './posts/posts-list.component';

export const routes = [
  {path: 'posts', component: PostsListComponent},
  {path: 'contactUs', component: ContactUsComponent, canDeactivate: ['canDeactivateCreateMethod']},
  {path: '404', component: NotFoundComponent},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
  {path: 'events', component: EventsListComponent, matchPath: 'full'},
  {path: '', redirectTo: 'events', pathMatch: 'full'},
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
