import { AnimationEntryMetadata } from '@angular/core';
import { trigger, transition, animate, style, query, group } from '\@angular/animations';

export const routeAnimation: AnimationEntryMetadata =
	trigger('routeAnimation', [
		transition('* => *', [
			query(':leave', style({
				transform: 'rotateX(0deg)', opacity: 1
			}), { optional: true }),
			query(':enter', style({
				transform: 'rotateX(90deg)', opacity: 0
			}), { optional: true }),

			group([
				query(':leave', animate('.5s ease-in-out', style({ transform: 'rotateX(90deg)', opacity: 0 })), { optional: true }),
				query(':enter', animate('.5s ease-in-out', style({ transform: 'rotateX(0deg)', opacity: 1 })), { optional: true })
			])
		])
	]);