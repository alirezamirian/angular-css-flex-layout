import {NgModule} from '@angular/core';
import {LayoutDirective} from './layout.directive';
import {LayoutAlignDirective} from './layout-align.directive';
import {LayoutWrapDirective} from './layout-wrap.directive';
import {FlexDirective} from './flex.directive';
import {FlexOrderDirective} from './flex-order.directive';
import {FlexOffsetDirective} from './flex-offset.directive';
import {FlexFillDirective} from './flex-fill.directive';
import {ShowHideDirective} from './show-hide.directive';

@NgModule({
  declarations: [LayoutDirective, LayoutWrapDirective, LayoutAlignDirective, FlexDirective, FlexOrderDirective,
    FlexOffsetDirective, FlexFillDirective, ShowHideDirective],
  exports: [LayoutDirective, LayoutWrapDirective, LayoutAlignDirective, FlexDirective, FlexOrderDirective,
    FlexOffsetDirective, FlexFillDirective, ShowHideDirective],
})
export class CssFlexLayoutModule {
}
