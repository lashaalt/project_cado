import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'route2',
	template: `
	<h1>Route 2 </h1>
	<div>ID in URL: {{id}}</div>
	`,

})

export class Route2Component {
	id: any;
	private sub: any;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router)
		{}

		ngOnInit() {
			this.sub = this._route.params.subscribe(params => this.id = params['id'] );
		}

		ngOnDestroy() {
			this.sub.unsubscribe();
		}
}
