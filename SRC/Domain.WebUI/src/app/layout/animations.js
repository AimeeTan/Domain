"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.routeAnimation = animations_1.trigger('routeAnimation', [
    animations_1.transition('* => *', [
        animations_1.query(':leave', animations_1.style({
            transform: 'rotateX(0deg)', opacity: 1
        }), { optional: true }),
        animations_1.query(':enter', animations_1.style({
            transform: 'rotateX(90deg)', opacity: 0
        }), { optional: true }),
        animations_1.group([
            animations_1.query(':leave', animations_1.animate('.5s ease-in-out', animations_1.style({ transform: 'rotateX(90deg)', opacity: 0 })), { optional: true }),
            animations_1.query(':enter', animations_1.animate('.5s ease-in-out', animations_1.style({ transform: 'rotateX(0deg)', opacity: 1 })), { optional: true })
        ])
    ])
]);
//# sourceMappingURL=animations.js.map