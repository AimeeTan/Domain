import { Routes, RouterModule } from '@angular/router';
import { Layout } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
	{
		path: '', component: Layout, children: [
			{ path: '', redirectTo: 'system/config', pathMatch: 'full' },
			{ path: 'pages', loadChildren: '../pages/pages.module#PagesModule' }
		]
	}
];

export const ROUTES = RouterModule.forChild(routes);
