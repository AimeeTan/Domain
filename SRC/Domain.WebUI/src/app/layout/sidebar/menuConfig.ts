import { IMenu } from '../../model/menu'
export const menus: IMenu[] = [
	{
	name: '系统配置',
	className: 'fa fa-cube',
	twoLevel: false,
	url: 'system/config',
	},
	{
		typeName: '自动采集扫描',
		className: 'fa fa-exclamation-circle',
		twoLevel: true,
		node: [{
			name: '域名扫描',
			twoLevel: false,
			url: 'domain/scan'
		}, {
			name: '历史记录',
			twoLevel: false,
			url: 'domain/list'
		}]
	}, 
	{
		typeName: '自定义采集扫描',
		className: 'fa fa-exclamation-circle',
		twoLevel: true,
		node: [{
			name: '上传扫描',
			twoLevel: false,
			url: 'ribbon/scan'
		}, {
			name: '历史记录',
			twoLevel: false,
			url: 'ribbon/list'
		}]
	},

]


