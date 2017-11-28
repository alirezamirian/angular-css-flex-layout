import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

import {BaseFxDirective} from './base-fx.directive';

@Directive({
  selector: `
  [fxLayoutWrap], [fxLayoutWrap.xs], [fxLayoutWrap.sm], [fxLayoutWrap.lg], [fxLayoutWrap.xl],
  [fxLayoutWrap.gt-xs], [fxLayoutWrap.gt-sm], [fxLayoutWrap.gt-md], [fxLayoutWrap.gt-lg],
  [fxLayoutWrap.lt-xs], [fxLayoutWrap.lt-sm], [fxLayoutWrap.lt-md], [fxLayoutWrap.lt-lg]
`
})
export class LayoutWrapDirective extends BaseFxDirective {

  @Input('fxLayoutWrap')
  set wrap(val) {
    this.removeClass('layoutNowrap');
    this.removeClass('layoutWrap');
    if (!val || val === 'wrap') {
      this.setClass('layoutWrap');
    } else if (val === 'nowrap') {
      this.setClass('layoutNowrap');
    }
  }

  // @Input('fxLayoutWrap.xs')    set wrapXs(val)   { this.setClass('layoutWrap'); }
  // @Input('fxLayoutWrap.sm')    set wrapSm(val)   { this.setClass('layoutWrap'); };
  // @Input('fxLayoutWrap.md')    set wrapMd(val)   { this.setClass('layoutWrap'); };
  // @Input('fxLayoutWrap.lg')    set wrapLg(val)   { this.setClass('layoutWrap'); };
  // @Input('fxLayoutWrap.xl')    set wrapXl(val)   { this.setClass('layoutWrap'); };
  //
  // @Input('fxLayoutWrap.gt-xs') set wrapGtXs(val) { this.setClass('layoutWrap'); };
  // @Input('fxLayoutWrap.gt-sm') set wrapGtSm(val) { this.setClass('layoutWrap'); };
  // @Input('fxLayoutWrap.gt-md') set wrapGtMd(val) { this.setClass('layoutWrap'); };
  // @Input('fxLayoutWrap.gt-lg') set wrapGtLg(val) { this.setClass('layoutWrap'); };
  //
  // @Input('fxLayoutWrap.lt-sm') set wrapLtSm(val) { this.setClass('layoutWrap'); };
  // @Input('fxLayoutWrap.lt-md') set wrapLtMd(val) { this.setClass('layoutWrap'); };
  // @Input('fxLayoutWrap.lt-lg') set wrapLtLg(val) { this.setClass('layoutWrap'); };
  // @Input('fxLayoutWrap.lt-xl') set wrapLtXl(val) { this.setClass('layoutWrap'); };

  constructor(elRef: ElementRef,
              renderer: Renderer2) {
    super(elRef, renderer);
  }
}
