/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './dish-order-pay';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '../../providers/order-data';
import * as import11 from 'ionic-angular/components/loading/loading';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import18 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import19 from 'ionic-angular/config/config';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from 'ionic-angular/navigation/view-controller';
import * as import22 from 'ionic-angular/components/app/app';
import * as import23 from 'ionic-angular/components/toolbar/toolbar';
import * as import24 from 'ionic-angular/util/keyboard';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from 'ionic-angular/components/tabs/tabs';
import * as import27 from '@angular/core/src/linker/template_ref';
import * as import28 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import29 from 'ionic-angular/components/navbar/navbar';
import * as import30 from '@angular/common/src/directives/ng_if';
import * as import31 from 'ionic-angular/components/content/content';
import * as import32 from '../../node_modules/ionic-angular/components/card/card.ngfactory';
import * as import33 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import34 from '@angular/core/src/linker/query_list';
import * as import35 from '../../node_modules/ionic-angular/components/avatar/avatar.ngfactory';
import * as import36 from '../../node_modules/ionic-angular/components/thumbnail/thumbnail.ngfactory';
import * as import37 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import38 from 'ionic-angular/util/form';
import * as import39 from 'ionic-angular/components/item/item-reorder';
import * as import40 from 'ionic-angular/components/avatar/avatar';
import * as import41 from 'ionic-angular/components/item/item';
import * as import42 from 'ionic-angular/components/thumbnail/thumbnail';
import * as import43 from 'ionic-angular/components/card/card';
import * as import44 from 'ionic-angular/components/button/button';
import * as import45 from '@angular/core/src/security';
export class Wrapper_DishOrderPayPage {
  context:import0.DishOrderPayPage;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this.changed = false;
    this.context = new import0.DishOrderPayPage(p0,p1,p2,p3);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_DishOrderPayPage_Host:import2.RenderComponentType = (null as any);
class _View_DishOrderPayPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _DishOrderPayPage_0_4:Wrapper_DishOrderPayPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_DishOrderPayPage_Host0,renderType_DishOrderPayPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-dish-order-pay',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_DishOrderPayPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DishOrderPayPage_0_4 = new Wrapper_DishOrderPayPage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.NavParams),this.parentInjector.get(import10.OrderData),this.parentInjector.get(import11.LoadingController));
    this._appEl_0.initComponent(this._DishOrderPayPage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._DishOrderPayPage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.DishOrderPayPage) && (0 === requestNodeIndex))) { return this._DishOrderPayPage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._DishOrderPayPage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_DishOrderPayPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_DishOrderPayPage_Host === (null as any))) { (renderType_DishOrderPayPage_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_DishOrderPayPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const DishOrderPayPageNgFactory:import13.ComponentFactory<import0.DishOrderPayPage> = new import13.ComponentFactory<import0.DishOrderPayPage>('page-dish-order-pay',viewFactory_DishOrderPayPage_Host0,import0.DishOrderPayPage);
const styles_DishOrderPayPage:any[] = ([] as any[]);
var renderType_DishOrderPayPage:import2.RenderComponentType = (null as any);
class _View_DishOrderPayPage0 extends import1.AppView<import0.DishOrderPayPage> {
  _text_0:any;
  _el_1:any;
  _Header_1_3:import14.Wrapper_Header;
  _text_2:any;
  _el_3:any;
  /*private*/ _appEl_3:import3.AppElement;
  _Navbar_3_4:import15.Wrapper_Navbar;
  _text_4:any;
  _el_5:any;
  /*private*/ _appEl_5:import3.AppElement;
  _ToolbarTitle_5_4:import16.Wrapper_ToolbarTitle;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  /*private*/ _appEl_10:import3.AppElement;
  _Content_10_4:import17.Wrapper_Content;
  _text_11:any;
  _anchor_12:any;
  /*private*/ _appEl_12:import3.AppElement;
  _TemplateRef_12_5:any;
  _NgIf_12_6:import18.Wrapper_NgIf;
  _text_13:any;
  _text_14:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_DishOrderPayPage0,renderType_DishOrderPayPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_1_3 = new import14.Wrapper_Header(this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_1),this.renderer,this.parentInjector.get(import21.ViewController,(null as any)));
    this._text_2 = this.renderer.createText(this._el_1,'\n\n  ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','toolbar');
    this._appEl_3 = new import3.AppElement(3,1,this,this._el_3);
    var compView_3:any = import15.viewFactory_Navbar0(this.viewUtils,this.injector(3),this._appEl_3);
    this._Navbar_3_4 = new import15.Wrapper_Navbar(this.parentInjector.get(import22.App),this.parentInjector.get(import21.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_3),this.renderer);
    this._appEl_3.initComponent(this._Navbar_3_4.context,([] as any[]),compView_3);
    this._text_4 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_5 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_5 = new import3.AppElement(5,3,this,this._el_5);
    var compView_5:any = import16.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(5),this._appEl_5);
    this._ToolbarTitle_5_4 = new import16.Wrapper_ToolbarTitle(this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_5),this.renderer,this.parentInjector.get(import23.Toolbar,(null as any)),this._Navbar_3_4.context);
    this._appEl_5.initComponent(this._ToolbarTitle_5_4.context,([] as any[]),compView_5);
    this._text_6 = this.renderer.createText((null as any),'Paiement',(null as any));
    compView_5.create(this._ToolbarTitle_5_4.context,[([] as any[]).concat([this._text_6])],(null as any));
    this._text_7 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_3.create(this._Navbar_3_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_4,
        this._el_5,
        this._text_7
      ]
      )
    ]
    ,(null as any));
    this._text_8 = this.renderer.createText(this._el_1,'\n\n',(null as any));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n\n\n',(null as any));
    this._el_10 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_10,'padding','');
    this._appEl_10 = new import3.AppElement(10,(null as any),this,this._el_10);
    var compView_10:any = import17.viewFactory_Content0(this.viewUtils,this.injector(10),this._appEl_10);
    this._Content_10_4 = new import17.Wrapper_Content(this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_10),this.renderer,this.parentInjector.get(import22.App),this.parentInjector.get(import24.Keyboard),this.parentInjector.get(import25.NgZone),this.parentInjector.get(import21.ViewController,(null as any)),this.parentInjector.get(import26.Tabs,(null as any)));
    this._appEl_10.initComponent(this._Content_10_4.context,([] as any[]),compView_10);
    this._text_11 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._anchor_12 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_12 = new import3.AppElement(12,10,this,this._anchor_12);
    this._TemplateRef_12_5 = new import27.TemplateRef_(this._appEl_12,viewFactory_DishOrderPayPage1);
    this._NgIf_12_6 = new import18.Wrapper_NgIf(this._appEl_12.vcRef,this._TemplateRef_12_5);
    this._text_13 = this.renderer.createText((null as any),'\n',(null as any));
    compView_10.create(this._Content_10_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_11,
        this._appEl_12,
        this._text_13
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_14 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._anchor_12,
      this._text_13,
      this._text_14
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import28.ToolbarTitle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._ToolbarTitle_5_4.context; }
    if (((token === import29.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Navbar_3_4.context; }
    if (((token === import23.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._Header_1_3.context; }
    if (((token === import27.TemplateRef) && (12 === requestNodeIndex))) { return this._TemplateRef_12_5; }
    if (((token === import30.NgIf) && (12 === requestNodeIndex))) { return this._NgIf_12_6.context; }
    if (((token === import31.Content) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._Content_10_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_1_3.detectChangesInternal(this,this._el_1,throwOnChange);
    this._Navbar_3_4.detectChangesInternal(this,this._el_3,throwOnChange);
    if (this._ToolbarTitle_5_4.detectChangesInternal(this,this._el_5,throwOnChange)) { this._appEl_5.componentView.markAsCheckOnce(); }
    if (this._Content_10_4.detectChangesInternal(this,this._el_10,throwOnChange)) { this._appEl_10.componentView.markAsCheckOnce(); }
    const currVal_3:any = this.context.order;
    this._NgIf_12_6.check_ngIf(currVal_3,throwOnChange,false);
    this._NgIf_12_6.detectChangesInternal(this,this._anchor_12,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._Navbar_3_4.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_3,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_3_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_3,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Content_10_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_10,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_3_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_10_4.context.ngOnDestroy();
  }
}
export function viewFactory_DishOrderPayPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.DishOrderPayPage> {
  if ((renderType_DishOrderPayPage === (null as any))) { (renderType_DishOrderPayPage = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,styles_DishOrderPayPage,{})); }
  return new _View_DishOrderPayPage0(viewUtils,parentInjector,declarationEl);
}
class _View_DishOrderPayPage1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _Card_2_3:import32.Wrapper_Card;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _Item_4_4:import33.Wrapper_Item;
  _ItemContent_4_5:import33.Wrapper_ItemContent;
  _query_Label_4_0:import34.QueryList<any>;
  _query_Button_4_1:import34.QueryList<any>;
  _query_Icon_4_2:import34.QueryList<any>;
  _text_5:any;
  _el_6:any;
  _Avatar_6_3:import35.Wrapper_Avatar;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  /*private*/ _appEl_15:import3.AppElement;
  _Item_15_4:import33.Wrapper_Item;
  _ItemContent_15_5:import33.Wrapper_ItemContent;
  _query_Label_15_0:import34.QueryList<any>;
  _query_Button_15_1:import34.QueryList<any>;
  _query_Icon_15_2:import34.QueryList<any>;
  _text_16:any;
  _el_17:any;
  _Thumbnail_17_3:import36.Wrapper_Thumbnail;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  _Card_29_3:import32.Wrapper_Card;
  _text_30:any;
  _el_31:any;
  /*private*/ _appEl_31:import3.AppElement;
  _Item_31_4:import33.Wrapper_Item;
  _ItemContent_31_5:import33.Wrapper_ItemContent;
  _query_Label_31_0:import34.QueryList<any>;
  _query_Button_31_1:import34.QueryList<any>;
  _query_Icon_31_2:import34.QueryList<any>;
  _text_32:any;
  _el_33:any;
  _text_34:any;
  _text_35:any;
  _text_36:any;
  _el_37:any;
  /*private*/ _appEl_37:import3.AppElement;
  _Button_37_4:import37.Wrapper_Button;
  _text_38:any;
  _text_39:any;
  _text_40:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_DishOrderPayPage1,renderType_DishOrderPayPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','selection');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-card',(null as any));
    this._Card_2_3 = new import32.Wrapper_Card(this.parent.parentInjector.get(import19.Config),new import20.ElementRef(this._el_2),this.renderer);
    this._text_3 = this.renderer.createText(this._el_2,'\n      ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','item item-block');
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import33.viewFactory_Item0(this.viewUtils,this.injector(4),this._appEl_4);
    this._Item_4_4 = new import33.Wrapper_Item(this.parent.parentInjector.get(import38.Form),this.parent.parentInjector.get(import19.Config),new import20.ElementRef(this._el_4),this.renderer,this.parent.parentInjector.get(import39.ItemReorder,(null as any)));
    this._ItemContent_4_5 = new import33.Wrapper_ItemContent();
    this._query_Label_4_0 = new import34.QueryList<any>();
    this._query_Button_4_1 = new import34.QueryList<any>();
    this._query_Icon_4_2 = new import34.QueryList<any>();
    this._appEl_4.initComponent(this._Item_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_6 = this.renderer.createElement((null as any),'ion-avatar',(null as any));
    this.renderer.setElementAttribute(this._el_6,'item-left','');
    this._Avatar_6_3 = new import35.Wrapper_Avatar();
    this._text_7 = this.renderer.createText(this._el_6,'\n          ',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'img',(null as any));
    this._text_9 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._text_10 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'h2',(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._query_Label_4_0.reset(([] as any[]));
    this._Item_4_4.context.contentLabel = this._query_Label_4_0.first;
    compView_4.create(this._Item_4_4.context,[
      ([] as any[]).concat([this._el_6]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_5,
        this._text_10,
        this._el_11,
        this._text_13
      ]
      ),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_14 = this.renderer.createText(this._el_2,'\n      ',(null as any));
    this._el_15 = this.renderer.createElement(this._el_2,'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_15,'class','item item-block');
    this._appEl_15 = new import3.AppElement(15,2,this,this._el_15);
    var compView_15:any = import33.viewFactory_Item0(this.viewUtils,this.injector(15),this._appEl_15);
    this._Item_15_4 = new import33.Wrapper_Item(this.parent.parentInjector.get(import38.Form),this.parent.parentInjector.get(import19.Config),new import20.ElementRef(this._el_15),this.renderer,this.parent.parentInjector.get(import39.ItemReorder,(null as any)));
    this._ItemContent_15_5 = new import33.Wrapper_ItemContent();
    this._query_Label_15_0 = new import34.QueryList<any>();
    this._query_Button_15_1 = new import34.QueryList<any>();
    this._query_Icon_15_2 = new import34.QueryList<any>();
    this._appEl_15.initComponent(this._Item_15_4.context,([] as any[]),compView_15);
    this._text_16 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_17 = this.renderer.createElement((null as any),'ion-thumbnail',(null as any));
    this.renderer.setElementAttribute(this._el_17,'item-left','');
    this._Thumbnail_17_3 = new import36.Wrapper_Thumbnail();
    this._el_18 = this.renderer.createElement(this._el_17,'img',(null as any));
    this._text_19 = this.renderer.createText(this._el_17,'\n        ',(null as any));
    this._text_20 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_21 = this.renderer.createElement((null as any),'h2',(null as any));
    this._text_22 = this.renderer.createText(this._el_21,'',(null as any));
    this._text_23 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_24 = this.renderer.createElement((null as any),'p',(null as any));
    this.renderer.setElementAttribute(this._el_24,'class','card-subtitle');
    this._text_25 = this.renderer.createText(this._el_24,'',(null as any));
    this._text_26 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._query_Label_15_0.reset(([] as any[]));
    this._Item_15_4.context.contentLabel = this._query_Label_15_0.first;
    compView_15.create(this._Item_15_4.context,[
      ([] as any[]).concat([this._el_17]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_16,
        this._text_20,
        this._el_21,
        this._text_23,
        this._el_24,
        this._text_26
      ]
      ),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_27 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_28 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_29 = this.renderer.createElement(this._el_0,'ion-card',(null as any));
    this._Card_29_3 = new import32.Wrapper_Card(this.parent.parentInjector.get(import19.Config),new import20.ElementRef(this._el_29),this.renderer);
    this._text_30 = this.renderer.createText(this._el_29,'\n      ',(null as any));
    this._el_31 = this.renderer.createElement(this._el_29,'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_31,'class','item item-block');
    this._appEl_31 = new import3.AppElement(31,29,this,this._el_31);
    var compView_31:any = import33.viewFactory_Item0(this.viewUtils,this.injector(31),this._appEl_31);
    this._Item_31_4 = new import33.Wrapper_Item(this.parent.parentInjector.get(import38.Form),this.parent.parentInjector.get(import19.Config),new import20.ElementRef(this._el_31),this.renderer,this.parent.parentInjector.get(import39.ItemReorder,(null as any)));
    this._ItemContent_31_5 = new import33.Wrapper_ItemContent();
    this._query_Label_31_0 = new import34.QueryList<any>();
    this._query_Button_31_1 = new import34.QueryList<any>();
    this._query_Icon_31_2 = new import34.QueryList<any>();
    this._appEl_31.initComponent(this._Item_31_4.context,([] as any[]),compView_31);
    this._text_32 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_33 = this.renderer.createElement((null as any),'h1',(null as any));
    this._text_34 = this.renderer.createText(this._el_33,'',(null as any));
    this._text_35 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._query_Label_31_0.reset(([] as any[]));
    this._Item_31_4.context.contentLabel = this._query_Label_31_0.first;
    compView_31.create(this._Item_31_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_32,
        this._el_33,
        this._text_35
      ]
      ),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_36 = this.renderer.createText(this._el_29,'\n      ',(null as any));
    this._el_37 = this.renderer.createElement(this._el_29,'button',(null as any));
    this.renderer.setElementAttribute(this._el_37,'ion-button','');
    this._appEl_37 = new import3.AppElement(37,29,this,this._el_37);
    var compView_37:any = import37.viewFactory_Button0(this.viewUtils,this.injector(37),this._appEl_37);
    this._Button_37_4 = new import37.Wrapper_Button((null as any),'',this.parent.parentInjector.get(import19.Config),new import20.ElementRef(this._el_37),this.renderer);
    this._appEl_37.initComponent(this._Button_37_4.context,([] as any[]),compView_37);
    this._text_38 = this.renderer.createText((null as any),'Confirmer',(null as any));
    compView_37.create(this._Button_37_4.context,[([] as any[]).concat([this._text_38])],(null as any));
    this._text_39 = this.renderer.createText(this._el_29,'\n    ',(null as any));
    this._text_40 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_37,'click',this.eventHandler(this._handle_click_37_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._text_26,
      this._text_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._text_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._text_39,
      this._text_40
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import40.Avatar) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._Avatar_6_3.context; }
    if (((token === import41.Item) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._Item_4_4.context; }
    if (((token === import41.ItemContent) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._ItemContent_4_5.context; }
    if (((token === import42.Thumbnail) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._Thumbnail_17_3.context; }
    if (((token === import41.Item) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._Item_15_4.context; }
    if (((token === import41.ItemContent) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._ItemContent_15_5.context; }
    if (((token === import43.Card) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._Card_2_3.context; }
    if (((token === import41.Item) && ((31 <= requestNodeIndex) && (requestNodeIndex <= 35)))) { return this._Item_31_4.context; }
    if (((token === import41.ItemContent) && ((31 <= requestNodeIndex) && (requestNodeIndex <= 35)))) { return this._ItemContent_31_5.context; }
    if (((token === import44.Button) && ((37 <= requestNodeIndex) && (requestNodeIndex <= 38)))) { return this._Button_37_4.context; }
    if (((token === import43.Card) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 39)))) { return this._Card_29_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Card_2_3.detectChangesInternal(this,this._el_2,throwOnChange);
    if (this._Item_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    this._ItemContent_4_5.detectChangesInternal(this,this._el_4,throwOnChange);
    this._Avatar_6_3.detectChangesInternal(this,this._el_6,throwOnChange);
    if (this._Item_15_4.detectChangesInternal(this,this._el_15,throwOnChange)) { this._appEl_15.componentView.markAsCheckOnce(); }
    this._ItemContent_15_5.detectChangesInternal(this,this._el_15,throwOnChange);
    this._Thumbnail_17_3.detectChangesInternal(this,this._el_17,throwOnChange);
    this._Card_29_3.detectChangesInternal(this,this._el_29,throwOnChange);
    if (this._Item_31_4.detectChangesInternal(this,this._el_31,throwOnChange)) { this._appEl_31.componentView.markAsCheckOnce(); }
    this._ItemContent_31_5.detectChangesInternal(this,this._el_31,throwOnChange);
    if (this._Button_37_4.detectChangesInternal(this,this._el_37,throwOnChange)) { this._appEl_37.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_4_1.dirty) {
        this._query_Button_4_1.reset(([] as any[]));
        this._Item_4_4.context._buttons = this._query_Button_4_1;
        this._query_Button_4_1.notifyOnChanges();
      }
      if (this._query_Icon_4_2.dirty) {
        this._query_Icon_4_2.reset(([] as any[]));
        this._Item_4_4.context._icons = this._query_Icon_4_2;
        this._query_Icon_4_2.notifyOnChanges();
      }
      if (this._query_Button_15_1.dirty) {
        this._query_Button_15_1.reset(([] as any[]));
        this._Item_15_4.context._buttons = this._query_Button_15_1;
        this._query_Button_15_1.notifyOnChanges();
      }
      if (this._query_Icon_15_2.dirty) {
        this._query_Icon_15_2.reset(([] as any[]));
        this._Item_15_4.context._icons = this._query_Icon_15_2;
        this._query_Icon_15_2.notifyOnChanges();
      }
      if (this._query_Button_31_1.dirty) {
        this._query_Button_31_1.reset(([] as any[]));
        this._Item_31_4.context._buttons = this._query_Button_31_1;
        this._query_Button_31_1.notifyOnChanges();
      }
      if (this._query_Icon_31_2.dirty) {
        this._query_Icon_31_2.reset(([] as any[]));
        this._Item_31_4.context._icons = this._query_Icon_31_2;
        this._query_Icon_31_2.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Item_4_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Item_15_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Item_31_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_37_4.context.ngAfterContentInit(); }
    }
    const currVal_0:any = import4.interpolate(1,'',this.parent.context.seller.avatar,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_8,'src',this.viewUtils.sanitizer.sanitize(import45.SecurityContext.URL,currVal_0));
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import4.interpolate(2,'',this.parent.context.seller.firstName,' ',this.parent.context.seller.lastName,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_12,currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import4.interpolate(1,'',this.parent.context.dish.photo,'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_18,'src',this.viewUtils.sanitizer.sanitize(import45.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import4.interpolate(1,'',this.parent.context.dish.name,'');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_22,currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = import4.interpolate(2,'',this.parent.context.dish.price,'€ * ',this.parent.context.order.quantity,'');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_25,currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = import4.interpolate(1,'',this.parent.context.order.totalPrice,'€');
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_34,currVal_5);
      this._expr_5 = currVal_5;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_37_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.confirmOrder()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_DishOrderPayPage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_DishOrderPayPage1(viewUtils,parentInjector,declarationEl);
}