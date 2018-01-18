import { Routes, RouterModule } from '@angular/router';
import { Layout } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
	{
		path: '', component: Layout, children: [
			//{ path: '', redirectTo: 'parcel/list', pathMatch: 'full' },
			////{ path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
			//{ path: 'routing', loadChildren: '../routing/routing.module#RoutingModule' },
			//{ path: 'sku', loadChildren: '../sku/sku.module#SkuModule' },
			//{ path: 'icmft', loadChildren: '../icmft/icmft.module#ICMftModule' },
			//{ path: 'lcmft', loadChildren: '../lcmft/lcmft.module#LCMftModule' },
			//{ path: 'customs', loadChildren: '../customs/customs.module#CustomsModule' },
			//{ path: 'courier', loadChildren: '../courier/courier.module#CourierModule' },
			//{ path: 'sackMft', loadChildren: '../sackMft/sackMft.module#SackMftModule' },
			//{ path: 'goods', loadChildren: '../goods/goods.module#GoodsModule' },
			//{ path: 'brokerage', loadChildren: '../brokerage/brokerage.module#BrokerageModule' },
			//{ path: 'shipping', loadChildren: '../shipping/shipping.module#ShippingModule' },
			//{ path: 'outgate', loadChildren: '../outgate/outgate.module#OutgateModule' },
			//{ path: 'parcel', loadChildren: '../parcel/parcel.module#ParcelModule' },
			//{ path: 'label', loadChildren: '../label/label.module#LabelModule' },
			//{ path: 'flight', loadChildren: '../flight/flight.module#FlightModule' },
			//{ path: 'exception', loadChildren: '../exception/exception.module#ExceptionModule' },
			//{ path: "endofday", loadChildren: '../endofday/endofday.module#EndofDayModule' }
		]
	}
];

export const ROUTES = RouterModule.forChild(routes);
