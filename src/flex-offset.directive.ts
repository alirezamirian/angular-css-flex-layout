import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

import {BaseFxDirective} from './base-fx.directive';

@Directive({selector: `
  [fxFlexOffset],
  [fxFlexOffset.xs], [fxFlexOffset.sm], [fxFlexOffset.md], [fxFlexOffset.lg], [fxFlexOffset.xl],
  [fxFlexOffset.lt-sm], [fxFlexOffset.lt-md], [fxFlexOffset.lt-lg], [fxFlexOffset.lt-xl],
  [fxFlexOffset.gt-xs], [fxFlexOffset.gt-sm], [fxFlexOffset.gt-md], [fxFlexOffset.gt-lg]
`})
export class FlexOffsetDirective extends BaseFxDirective {

  @Input('fxFlexOffset')       set offset(val)     { this.setClass('flexOffset', val); }
  @Input('fxFlexOffset.xs')    set offsetXs(val)   { this.setClass('flexOffsetXs', val); }
  @Input('fxFlexOffset.sm')    set offsetSm(val)   { this.setClass('flexOffsetSm', val); };
  @Input('fxFlexOffset.md')    set offsetMd(val)   { this.setClass('flexOffsetMd', val); };
  @Input('fxFlexOffset.lg')    set offsetLg(val)   { this.setClass('flexOffsetLg', val); };
  @Input('fxFlexOffset.xl')    set offsetXl(val)   { this.setClass('flexOffsetXl', val); };

  @Input('fxFlexOffset.lt-sm') set offsetLtSm(val) { this.setClass('flexOffsetLtSm', val); };
  @Input('fxFlexOffset.lt-md') set offsetLtMd(val) { this.setClass('flexOffsetLtMd', val); };
  @Input('fxFlexOffset.lt-lg') set offsetLtLg(val) { this.setClass('flexOffsetLtLg', val); };
  @Input('fxFlexOffset.lt-xl') set offsetLtXl(val) { this.setClass('flexOffsetLtXl', val); };

  @Input('fxFlexOffset.gt-xs') set offsetGtXs(val) { this.setClass('flexOffsetGtXs', val); };
  @Input('fxFlexOffset.gt-sm') set offsetGtSm(val) { this.setClass('flexOffsetGtSm', val); };
  @Input('fxFlexOffset.gt-md') set offsetGtMd(val) { this.setClass('flexOffsetGtMd', val); };
  @Input('fxFlexOffset.gt-lg') set offsetGtLg(val) { this.setClass('flexOffsetGtLg', val); };


  constructor(
    elRef: ElementRef,
    renderer: Renderer2) {
    super(elRef, renderer);
  }
}
