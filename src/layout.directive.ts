import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {BaseFxDirective} from './base-fx.directive';

@Directive({selector: `
  [fxLayout],
  [fxLayout.xs], [fxLayout.sm], [fxLayout.md], [fxLayout.lg], [fxLayout.xl],
  [fxLayout.lt-sm], [fxLayout.lt-md], [fxLayout.lt-lg], [fxLayout.lt-xl],
  [fxLayout.gt-xs], [fxLayout.gt-sm], [fxLayout.gt-md], [fxLayout.gt-lg]
`})
export class LayoutDirective extends BaseFxDirective {

  @Input('fxLayout')       set layout(val)     { this.setClass('layout', val || 'row'); };
  @Input('fxLayout.xs')    set layoutXs(val)   { this.setClass('layoutXs', val || 'row'); };
  @Input('fxLayout.sm')    set layoutSm(val)   { this.setClass('layoutSm', val || 'row'); };
  @Input('fxLayout.md')    set layoutMd(val)   { this.setClass('layoutMd', val || 'row'); };
  @Input('fxLayout.lg')    set layoutLg(val)   { this.setClass('layoutLg', val || 'row'); };
  @Input('fxLayout.xl')    set layoutXl(val)   { this.setClass('layoutXl', val || 'row'); };

  @Input('fxLayout.gt-xs') set layoutGtXs(val) { this.setClass('layoutGtXs', val || 'row'); };
  @Input('fxLayout.gt-sm') set layoutGtSm(val) { this.setClass('layoutGtSm', val || 'row'); };
  @Input('fxLayout.gt-md') set layoutGtMd(val) { this.setClass('layoutGtMd', val || 'row'); };
  @Input('fxLayout.gt-lg') set layoutGtLg(val) { this.setClass('layoutGtLg', val || 'row'); };

  @Input('fxLayout.lt-sm') set layoutLtSm(val) { this.setClass('layoutLtSm', val || 'row'); };
  @Input('fxLayout.lt-md') set layoutLtMd(val) { this.setClass('layoutLtMd', val || 'row'); };
  @Input('fxLayout.lt-lg') set layoutLtLg(val) { this.setClass('layoutLtLg', val || 'row'); };
  @Input('fxLayout.lt-xl') set layoutLtXl(val) { this.setClass('layoutLtXl', val || 'row'); };

  constructor(elRef: ElementRef, renderer: Renderer2) {
    super(elRef, renderer);
  }
}
