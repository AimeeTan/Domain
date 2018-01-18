export interface IMenu {
	twoLevel: boolean;
	name?: string;
	url?: string;
	titel?: string;
	typeName?: string;
	className?: string;
	node?: IMenu[]
}
