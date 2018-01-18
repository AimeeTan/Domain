import { Pipe } from '@angular/core';

@Pipe({
	name: 'truncate'
})
export class TruncatePipe {
	transform(value: string, args: string): string {
		let limit = parseInt(args);
		let trail = ` <label class="btn btn-xs btn-danger">...</label>`;
		return value.length > limit ? value.substring(0, limit) + trail : value;
	}
}