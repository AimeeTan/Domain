export const menus: IMenu[] = [
	//{
	//name: 'DASHBOARD',
	//className: 'fa fa-desktop',
	//twoLevel: false,
	//url: 'dashboard'
	//},
	{
	name: 'PARCEL',
	className: 'fa fa-cube',
	twoLevel: false,
	url: 'parcel/list',
}]

export interface IMenu {
	twoLevel: boolean;
	name?: string;
	url?: string;
	titel?: string;
	typeName?: string;
	className?: string;
	node?: IMenu[]
}


