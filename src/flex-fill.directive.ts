import {Directive, ElementRef, Renderer2} from '@angular/core';

import {BaseFxDirective} from './base-fx.directive';

@Directive({selector: `
  [fxFill],
  [fxFlexFill]
`})
export class FlexFillDirective extends BaseFxDirective {
  constructor(
    elRef: ElementRef,
    renderer: Renderer2) {
    super(elRef, renderer);
    this.setClass('layoutFill');
  }
}
