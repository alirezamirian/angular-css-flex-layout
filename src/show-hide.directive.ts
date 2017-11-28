import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

import {BaseFxDirective} from './base-fx.directive';

@Directive({
  selector: `
  [fxShow],
  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],
  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],
  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],
  [fxHide],
  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],
  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],
  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]
`
})
export class ShowHideDirective extends BaseFxDirective {

  @Input('fxShow')       set show(val) {  this.setClass('show');  }
  @Input('fxShow.xs')    set showXs(val) {this.setClass('showXs'); }
  @Input('fxShow.sm')    set showSm(val) {this.setClass('showSm'); };
  @Input('fxShow.md')    set showMd(val) {this.setClass('showMd'); };
  @Input('fxShow.lg')    set showLg(val) {this.setClass('showLg'); };
  @Input('fxShow.xl')    set showXl(val) {this.setClass('showXl'); };

  @Input('fxShow.lt-sm') set showLtSm(val) { this.setClass('showLtSm'); };
  @Input('fxShow.lt-md') set showLtMd(val) { this.setClass('showLtMd'); };
  @Input('fxShow.lt-lg') set showLtLg(val) { this.setClass('showLtLg'); };
  @Input('fxShow.lt-xl') set showLtXl(val) { this.setClass('showLtXl'); };

  @Input('fxShow.gt-xs') set showGtXs(val) {this.setClass('showGtXs'); };
  @Input('fxShow.gt-sm') set showGtSm(val) {this.setClass('showGtSm'); };
  @Input('fxShow.gt-md') set showGtMd(val) {this.setClass('showGtMd'); };
  @Input('fxShow.gt-lg') set showGtLg(val) {this.setClass('showGtLg'); };

  @Input('fxHide')       set hide(val) {this.setClass('hide'); }
  @Input('fxHide.xs')    set hideXs(val) {this.setClass('hideXs'); }
  @Input('fxHide.sm')    set hideSm(val) {this.setClass('hideSm'); };
  @Input('fxHide.md')    set hideMd(val) {this.setClass('hideMd'); };
  @Input('fxHide.lg')    set hideLg(val) {this.setClass('hideLg'); };
  @Input('fxHide.xl')    set hideXl(val) {this.setClass('hideXl'); };

  @Input('fxHide.lt-sm') set hideLtSm(val) { this.setClass('hideLtSm'); };
  @Input('fxHide.lt-md') set hideLtMd(val) { this.setClass('hideLtMd'); };
  @Input('fxHide.lt-lg') set hideLtLg(val) { this.setClass('hideLtLg'); };
  @Input('fxHide.lt-xl') set hideLtXl(val) { this.setClass('hideLtXl'); };

  @Input('fxHide.gt-xs') set hideGtXs(val) {this.setClass('hideGtXs'); };
  @Input('fxHide.gt-sm') set hideGtSm(val) {this.setClass('hideGtSm'); };
  @Input('fxHide.gt-md') set hideGtMd(val) {this.setClass('hideGtMd'); };
  @Input('fxHide.gt-lg') set hideGtLg(val) {this.setClass('hideGtLg'); };

  constructor(
    elRef: ElementRef,
    renderer: Renderer2) {
    super(elRef, renderer);
  }
}
