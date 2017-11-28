import {ElementRef, Renderer2} from '@angular/core';

export class BaseFxDirective {

  private prevValueCache = {};

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  protected removeClass(className) {
    this.renderer.removeClass(this.elRef.nativeElement, this.normalize(className));
  }

  protected setClass(attr: string, value = '') {
    const className = this.normalize(value ? `${attr}-${value}` : attr);
    if (value) {
      if (this.prevValueCache[attr]) {
        this.renderer.removeClass(this.elRef.nativeElement, this.prevValueCache[attr]);
      }
      this.prevValueCache[attr] = className;
    }
    this.renderer.addClass(this.elRef.nativeElement, className);
  }

  private normalize(value: string): string {
    if (!value) {
      return value;
    }
    return value.replace(/([A-Z]|\s+|\.)/g, function (match) {
      return '-' + match.trim().toLowerCase();
    });
  }
}
