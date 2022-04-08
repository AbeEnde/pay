import { Route } from '@angular/router';

import { HomeComponent } from './home.component';

export const HOME_ROUTE: Route = {
  path: '',
  component: HomeComponent,
  data: {
    pageTitle: 'Welcome, Java Hipster!',
    authorities: ['ROLE_ADMIN', 'ROLE_USER'],
  },
};