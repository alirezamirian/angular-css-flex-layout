import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

import {BaseFxDirective} from './base-fx.directive';

@Directive({selector: `
  [fxFlexOrder],
  [fxFlexOrder.xs], [fxFlexOrder.sm], [fxFlexOrder.md], [fxFlexOrder.lg], [fxFlexOrder.xl],
  [fxFlexOrder.lt-sm], [fxFlexOrder.lt-md], [fxFlexOrder.lt-lg], [fxFlexOrder.lt-xl],
  [fxFlexOrder.gt-xs], [fxFlexOrder.gt-sm], [fxFlexOrder.gt-md], [fxFlexOrder.gt-lg]
`})
export class FlexOrderDirective extends BaseFxDirective {

  @Input('fxFlexOrder')       set order(val)     { this.setClass('flexOrder', val); }
  @Input('fxFlexOrder.xs')    set orderXs(val)   { this.setClass('flexOrderXs', val); }
  @Input('fxFlexOrder.sm')    set orderSm(val)   { this.setClass('flexOrderSm', val); };
  @Input('fxFlexOrder.md')    set orderMd(val)   { this.setClass('flexOrderMd', val); };
  @Input('fxFlexOrder.lg')    set orderLg(val)   { this.setClass('flexOrderLg', val); };
  @Input('fxFlexOrder.xl')    set orderXl(val)   { this.setClass('flexOrderXl', val); };

  @Input('fxFlexOrder.gt-xs') set orderGtXs(val) { this.setClass('flexOrderGtXs', val); };
  @Input('fxFlexOrder.gt-sm') set orderGtSm(val) { this.setClass('flexOrderGtSm', val); };
  @Input('fxFlexOrder.gt-md') set orderGtMd(val) { this.setClass('flexOrderGtMd', val); };
  @Input('fxFlexOrder.gt-lg') set orderGtLg(val) { this.setClass('flexOrderGtLg', val); };

  @Input('fxFlexOrder.lt-sm') set orderLtSm(val) { this.setClass('flexOrderLtSm', val); };
  @Input('fxFlexOrder.lt-md') set orderLtMd(val) { this.setClass('flexOrderLtMd', val); };
  @Input('fxFlexOrder.lt-lg') set orderLtLg(val) { this.setClass('flexOrderLtLg', val); };
  @Input('fxFlexOrder.lt-xl') set orderLtXl(val) { this.setClass('flexOrderLtXl', val); };

  constructor(
    elRef: ElementRef,
    renderer: Renderer2) {
    super(elRef, renderer);
  }
}
