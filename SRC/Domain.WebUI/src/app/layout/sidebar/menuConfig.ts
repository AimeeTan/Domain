import { IMenu } from '../../model/menu'
export const menus: IMenu[] = [
	{
	name: '系统配置',
	className: 'fa fa-cube',
	twoLevel: false,
	url: 'pages/system/config',
	}
	,
	{
		typeName: '自动采集扫描',
		className: 'fa fa-exclamation-circle',
		twoLevel: true,
		node: [{
			name: '域名扫描',
			twoLevel: false,
			url: 'pages/domain/scan'
		}, {
			name: '历史记录',
			twoLevel: false,
			url: 'pages/domain/list'
		}]
	}, 
	{
		typeName: '自定义采集扫描',
		className: 'fa fa-exclamation-circle',
		twoLevel: true,
		node: [{
			name: '上传扫描',
			twoLevel: false,
			url: 'pages/ribbon/scan'
		}, {
			name: '历史记录',
			twoLevel: false,
			url: 'pages/ribbon/list'
		}]
	},

]


