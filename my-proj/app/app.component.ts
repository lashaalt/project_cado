import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
            <nav>
                <a [routerLink]="['/route1']">Route1</a>
                <a [routerLink]="['/route2/1']">Route2</a>
            </nav>
            <router-outlet></router-outlet>

    `,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
