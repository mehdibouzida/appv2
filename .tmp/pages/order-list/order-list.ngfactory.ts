/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './order-list';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/ionic-angular/components/tabs/tabs.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/tabs/tab.ngfactory';
import * as import13 from 'ionic-angular/navigation/view-controller';
import * as import14 from 'ionic-angular/components/app/app';
import * as import15 from 'ionic-angular/config/config';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from 'ionic-angular/platform/platform';
import * as import18 from 'ionic-angular/navigation/deep-linker';
import * as import19 from 'ionic-angular/util/keyboard';
import * as import20 from '@angular/core/src/zone/ng_zone';
import * as import21 from '@angular/core/src/linker/component_factory_resolver';
import * as import22 from 'ionic-angular/gestures/gesture-controller';
import * as import23 from 'ionic-angular/transitions/transition-controller';
import * as import24 from 'ionic-angular/components/tabs/tab';
import * as import25 from 'ionic-angular/components/tabs/tabs';
export class Wrapper_OrderListPage {
  context:import0.OrderListPage;
  changed:boolean;
  constructor(p0:any) {
    this.changed = false;
    this.context = new import0.OrderListPage(p0);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_OrderListPage_Host:import2.RenderComponentType = (null as any);
class _View_OrderListPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _OrderListPage_0_4:Wrapper_OrderListPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_OrderListPage_Host0,renderType_OrderListPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-order-list',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_OrderListPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._OrderListPage_0_4 = new Wrapper_OrderListPage(this.parentInjector.get(import8.NavController));
    this._appEl_0.initComponent(this._OrderListPage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._OrderListPage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.OrderListPage) && (0 === requestNodeIndex))) { return this._OrderListPage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._OrderListPage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_OrderListPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_OrderListPage_Host === (null as any))) { (renderType_OrderListPage_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_OrderListPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const OrderListPageNgFactory:import10.ComponentFactory<import0.OrderListPage> = new import10.ComponentFactory<import0.OrderListPage>('page-order-list',viewFactory_OrderListPage_Host0,import0.OrderListPage);
const styles_OrderListPage:any[] = ([] as any[]);
var renderType_OrderListPage:import2.RenderComponentType = (null as any);
class _View_OrderListPage0 extends import1.AppView<import0.OrderListPage> {
  _text_0:any;
  _el_1:any;
  /*private*/ _appEl_1:import3.AppElement;
  _Tabs_1_4:import11.Wrapper_Tabs;
  _text_2:any;
  _el_3:any;
  /*private*/ _appEl_3:import3.AppElement;
  _Tab_3_4:import12.Wrapper_Tab;
  _text_4:any;
  _el_5:any;
  /*private*/ _appEl_5:import3.AppElement;
  _Tab_5_4:import12.Wrapper_Tab;
  _text_6:any;
  _text_7:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_OrderListPage0,renderType_OrderListPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'ion-tabs',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','tabs-basic');
    this.renderer.setElementAttribute(this._el_1,'selectedIndex','0');
    this._appEl_1 = new import3.AppElement(1,(null as any),this,this._el_1);
    var compView_1:any = import11.viewFactory_Tabs0(this.viewUtils,this.injector(1),this._appEl_1);
    this._Tabs_1_4 = new import11.Wrapper_Tabs(this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import13.ViewController,(null as any)),this.parentInjector.get(import14.App),this.parentInjector.get(import15.Config),new import16.ElementRef(this._el_1),this.parentInjector.get(import17.Platform),this.renderer,this.parentInjector.get(import18.DeepLinker));
    this._appEl_1.initComponent(this._Tabs_1_4.context,([] as any[]),compView_1);
    this._text_2 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_3 = this.renderer.createElement((null as any),'ion-tab',(null as any));
    this.renderer.setElementAttribute(this._el_3,'role','tabpanel');
    this.renderer.setElementAttribute(this._el_3,'tabTitle','A venir');
    this._appEl_3 = new import3.AppElement(3,1,this,this._el_3);
    var compView_3:any = import12.viewFactory_Tab0(this.viewUtils,this.injector(3),this._appEl_3);
    this._Tab_3_4 = new import12.Wrapper_Tab(this._Tabs_1_4.context,this.parentInjector.get(import14.App),this.parentInjector.get(import15.Config),this.parentInjector.get(import19.Keyboard),new import16.ElementRef(this._el_3),this.parentInjector.get(import20.NgZone),this.renderer,this.parentInjector.get(import21.ComponentFactoryResolver),compView_3.ref,this.parentInjector.get(import22.GestureController),this.parentInjector.get(import23.TransitionController),this.parentInjector.get(import18.DeepLinker,(null as any)));
    this._appEl_3.initComponent(this._Tab_3_4.context,([] as any[]),compView_3);
    compView_3.create(this._Tab_3_4.context,([] as any[]),(null as any));
    this._text_4 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_5 = this.renderer.createElement((null as any),'ion-tab',(null as any));
    this.renderer.setElementAttribute(this._el_5,'role','tabpanel');
    this.renderer.setElementAttribute(this._el_5,'tabTitle','Historique');
    this._appEl_5 = new import3.AppElement(5,1,this,this._el_5);
    var compView_5:any = import12.viewFactory_Tab0(this.viewUtils,this.injector(5),this._appEl_5);
    this._Tab_5_4 = new import12.Wrapper_Tab(this._Tabs_1_4.context,this.parentInjector.get(import14.App),this.parentInjector.get(import15.Config),this.parentInjector.get(import19.Keyboard),new import16.ElementRef(this._el_5),this.parentInjector.get(import20.NgZone),this.renderer,this.parentInjector.get(import21.ComponentFactoryResolver),compView_5.ref,this.parentInjector.get(import22.GestureController),this.parentInjector.get(import23.TransitionController),this.parentInjector.get(import18.DeepLinker,(null as any)));
    this._appEl_5.initComponent(this._Tab_5_4.context,([] as any[]),compView_5);
    compView_5.create(this._Tab_5_4.context,([] as any[]),(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n  ',(null as any));
      compView_1.create(this._Tabs_1_4.context,[([] as any[]).concat([
        this._text_2,
        this._el_3,
        this._text_4,
        this._el_5,
        this._text_6
      ]
    )],(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import24.Tab) && (3 === requestNodeIndex))) { return this._Tab_3_4.context; }
    if (((token === import24.Tab) && (5 === requestNodeIndex))) { return this._Tab_5_4.context; }
    if (((token === import25.Tabs) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Tabs_1_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = '0';
    this._Tabs_1_4.check_selectedIndex(currVal_0,throwOnChange,false);
    this._Tabs_1_4.detectChangesInternal(this,this._el_1,throwOnChange);
    const currVal_1:any = this.context.tabActive;
    this._Tab_3_4.check_root(currVal_1,throwOnChange,false);
    const currVal_2:any = 'A venir';
    this._Tab_3_4.check_tabTitle(currVal_2,throwOnChange,false);
    this._Tab_3_4.detectChangesInternal(this,this._el_3,throwOnChange);
    const currVal_5:any = this.context.tabHistory;
    this._Tab_5_4.check_root(currVal_5,throwOnChange,false);
    const currVal_6:any = 'Historique';
    this._Tab_5_4.check_tabTitle(currVal_6,throwOnChange,false);
    this._Tab_5_4.detectChangesInternal(this,this._el_5,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_3:any = this._Tab_3_4.context._tabId;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementAttribute(this._el_3,'id',((currVal_3 == (null as any))? (null as any): currVal_3.toString()));
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this._Tab_3_4.context._btnId;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementAttribute(this._el_3,'aria-labelledby',((currVal_4 == (null as any))? (null as any): currVal_4.toString()));
      this._expr_4 = currVal_4;
    }
    const currVal_7:any = this._Tab_5_4.context._tabId;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementAttribute(this._el_5,'id',((currVal_7 == (null as any))? (null as any): currVal_7.toString()));
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._Tab_5_4.context._btnId;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementAttribute(this._el_5,'aria-labelledby',((currVal_8 == (null as any))? (null as any): currVal_8.toString()));
      this._expr_8 = currVal_8;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Tabs_1_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Tabs_1_4.context.ngOnDestroy();
  }
}
export function viewFactory_OrderListPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.OrderListPage> {
  if ((renderType_OrderListPage === (null as any))) { (renderType_OrderListPage = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,styles_OrderListPage,{})); }
  return new _View_OrderListPage0(viewUtils,parentInjector,declarationEl);
}