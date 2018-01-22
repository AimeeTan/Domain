//公用Criteria
var Criteria: { pageIndex: number, pageSize: number, total: number, startDate: Date, endDate: Date };
this.Criteria = { pageIndex: 1, pageSize: 50, total: 0 };
export { Criteria };

export abstract class PaginationComponent {
	criteria: any = Criteria;
	checked = false;
	rows: any[] = [];
	lastChecked = 0;

	loadData() { }

	isChecked(): boolean {
		return this.rows.filter(x => x.checked).length > 0 ? true : false;
	}

	//onChangePage(page: any) {
	//	this.checked = false;
	//	this.criteria.pageIndex = page.page;
	//	this.criteria.pageSize = page.itemsPerPage;
	//	this.loadData();
	//}

	//onChangePageSize() {
	//	this.checked = false;
	//	this.criteria.pageIndex = 1;
	//	this.loadData();
	//}

	//onSelectRange(date: string[]) {
	//	if (date.length !== 2) return;
	//	[this.criteria.startDate, this.criteria.endDate] = date;
	//	this.loadData();
	//}

	toggleCheck() {
		this.checked = !this.checked;
		this.rows.forEach(x => x.checked = this.checked);
	}

	singleCheck(idx: number, event: any) {
		this.rows[idx].checked = !this.rows[idx].checked;
		event.stopPropagation();
	}

	radioCheck(idx: number, event: any, callback: any) {
		this.rows.forEach(x => x.checked = false);
		this.rows[idx].checked = !this.rows[idx].checked;
		if (callback) callback();
		event.stopPropagation();
	}

	lineCheck(idx: number, event: any, callback?: any) {
		if (event.ctrlKey || event.shiftKey) { this.cleanSelection(); }
		if (event.ctrlKey === true) {

			this.rows[idx].checked = !this.rows[idx].checked;
		}
		else if (event.shiftKey === true) {
			for (let i = Math.min(idx, this.lastChecked); i <= Math.max(idx, this.lastChecked); i++) {
				this.rows[i].checked = true;
			}
		}
		else {
			this.rows.forEach(x => x.checked = false);
			this.rows[idx].checked = true;
		}
		this.lastChecked = idx;

		if (callback) callback();
	}

	cleanSelection() {
		if (window.getSelection) {
			if (window.getSelection().empty) {  // Chrome
				window.getSelection().empty();
			} else if (window.getSelection().removeAllRanges) {  // Firefox
				window.getSelection().removeAllRanges();
			}
		}
	}
	
	//changeTenant(id: any) {
	//	this.criteria.tenantID = id;
	//	this.loadData(); 
	//}

	checkedIds() {
		const ids: number[] = [];
		this.rows.filter(x => x.checked).forEach(x => ids.push(x.id));
		if (ids.length < 1) {
			return [];
		} else {
			return ids;
		}
	}

	allIds() {
		const ids: number[] = [];
		this.rows.forEach(x => ids.push(x.id));
		if (ids.length < 1) {
			return [];
		} else {
			return ids;
		}
	}

	getRowIds() {
		var listIds = new Array<any>();
		this.rows.filter(x => x.checked).forEach(item =>
			listIds.push(item.id)
		);
		return listIds;
	}
}