export interface PageItem{
	alias:string;
	title:string;
	_is:string;
	category:string
}
export interface MenuItem {
	_id:{
		secondCategory:string;
	};
	pages:PageItem[]
}