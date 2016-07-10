import { provideRouter, RouterConfig } from '@angular/router';
import { Route1Component } from './route1.component';
import { Route2Component } from './route2.component';

export const routes: RouterConfig = [
  { path: 'route1', component: Route1Component },
  { path: 'route2/:id', component: Route2Component }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
