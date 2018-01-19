import { Routes, RouterModule } from '@angular/router';
import { Layout } from './layout.component';
import { PagesModule } from '../pages/pages.module'
// noinspection TypeScriptValidateTypes
const routes: Routes = [
	{
		path: '', component: Layout, children: [
			{ path: '', redirectTo: 'pages', pathMatch: 'full' },
			{ path: 'pages', loadChildren: '../pages/pages.module#PagesModule' },
		]
	}
];

export const ROUTES = RouterModule.forChild(routes);
