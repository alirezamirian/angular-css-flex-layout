import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

import {BaseFxDirective} from './base-fx.directive';

@Directive({selector: `
  [fxLayoutAlign],
  [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md], [fxLayoutAlign.lg],[fxLayoutAlign.xl],
  [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md], [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl],
  [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm], [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]
`})
export class LayoutAlignDirective extends BaseFxDirective {

  @Input('fxLayoutAlign')       set align(val)     { this.setClass('layoutAlign', val); }
  @Input('fxLayoutAlign.xs')    set alignXs(val)   { this.setClass('layoutAlignXs', val); }
  @Input('fxLayoutAlign.sm')    set alignSm(val)   { this.setClass('layoutAlignSm', val); };
  @Input('fxLayoutAlign.md')    set alignMd(val)   { this.setClass('layoutAlignMd', val); };
  @Input('fxLayoutAlign.lg')    set alignLg(val)   { this.setClass('layoutAlignLg', val); };
  @Input('fxLayoutAlign.xl')    set alignXl(val)   { this.setClass('layoutAlignXl', val); };

  @Input('fxLayoutAlign.gt-xs') set alignGtXs(val) { this.setClass('layoutAlignGtXs', val); };
  @Input('fxLayoutAlign.gt-sm') set alignGtSm(val) { this.setClass('layoutAlignGtSm', val); };
  @Input('fxLayoutAlign.gt-md') set alignGtMd(val) { this.setClass('layoutAlignGtMd', val); };
  @Input('fxLayoutAlign.gt-lg') set alignGtLg(val) { this.setClass('layoutAlignGtLg', val); };

  @Input('fxLayoutAlign.lt-sm') set alignLtSm(val) { this.setClass('layoutAlignLtSm', val); };
  @Input('fxLayoutAlign.lt-md') set alignLtMd(val) { this.setClass('layoutAlignLtMd', val); };
  @Input('fxLayoutAlign.lt-lg') set alignLtLg(val) { this.setClass('layoutAlignLtLg', val); };
  @Input('fxLayoutAlign.lt-xl') set alignLtXl(val) { this.setClass('layoutAlignLtXl', val); };

  constructor(
    elRef: ElementRef,
    renderer: Renderer2) {
    super(elRef, renderer);
  }
}
