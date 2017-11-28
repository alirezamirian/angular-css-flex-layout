import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

import {BaseFxDirective} from './base-fx.directive';

@Directive({selector: `
  [fxFlex],
  [fxFlex.xs], [fxFlex.sm], [fxFlex.md], [fxFlex.lg], [fxFlex.xl],
  [fxFlex.lt-sm], [fxFlex.lt-md], [fxFlex.lt-lg], [fxFlex.lt-xl],
  [fxFlex.gt-xs], [fxFlex.gt-sm], [fxFlex.gt-md], [fxFlex.gt-lg],
`
})
export class FlexDirective extends BaseFxDirective {

  @Input('fxFlex')       set flex(val)      { this.setClass('flex', val); };
  @Input('fxFlex.xs')    set flexXs(val)    { this.setClass('flexXs', val); };
  @Input('fxFlex.sm')    set flexSm(val)    { this.setClass('flexSm', val); };
  @Input('fxFlex.md')    set flexMd(val)    { this.setClass('flexMd', val); };
  @Input('fxFlex.lg')    set flexLg(val)    { this.setClass('flexLg', val); };
  @Input('fxFlex.xl')    set flexXl(val)    { this.setClass('flexXl', val); };

  @Input('fxFlex.gt-xs') set flexGtXs(val)  { this.setClass('flexGtXs', val); };
  @Input('fxFlex.gt-sm') set flexGtSm(val)  { this.setClass('flexGtSm', val); };
  @Input('fxFlex.gt-md') set flexGtMd(val)  { this.setClass('flexGtMd', val); };
  @Input('fxFlex.gt-lg') set flexGtLg(val)  { this.setClass('flexGtLg', val); };

  @Input('fxFlex.lt-sm') set flexLtSm(val) { this.setClass('flexLtSm', val); };
  @Input('fxFlex.lt-md') set flexLtMd(val) { this.setClass('flexLtMd', val); };
  @Input('fxFlex.lt-lg') set flexLtLg(val) { this.setClass('flexLtLg', val); };
  @Input('fxFlex.lt-xl') set flexLtXl(val) { this.setClass('flexLtXl', val); };

  constructor(
    elRef: ElementRef,
    renderer: Renderer2) {
    super(elRef, renderer);
  }
}
