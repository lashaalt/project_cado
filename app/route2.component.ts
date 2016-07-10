import {Component, OnInit} from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

@Component({
	selector: 'route2',
	template: `
	<h1>Route 2 </h1>
	<div>ID in URL: {{_id}}</div>
	`,

})

export class Route2Component {
	_id: string;

	constructor(
		private _routeParams: RouteParams	) {
		this._id = this._routeParams.get('id');

		}

}
