/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './home';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '../../providers/auth-data';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/menu/menu-toggle.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import17 from '@angular/core/src/linker/query_list';
import * as import18 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import21 from 'ionic-angular/config/config';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from 'ionic-angular/navigation/view-controller';
import * as import24 from 'ionic-angular/components/app/app';
import * as import25 from 'ionic-angular/components/menu/menu-controller';
import * as import26 from 'ionic-angular/components/toolbar/toolbar';
import * as import27 from 'ionic-angular/util/keyboard';
import * as import28 from '@angular/core/src/zone/ng_zone';
import * as import29 from 'ionic-angular/components/tabs/tabs';
import * as import30 from 'ionic-angular/components/icon/icon';
import * as import31 from 'ionic-angular/components/button/button';
import * as import32 from 'ionic-angular/components/menu/menu-toggle';
import * as import33 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import34 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import35 from 'ionic-angular/components/navbar/navbar';
import * as import36 from 'ionic-angular/components/content/content';
export class Wrapper_HomePage {
  context:import0.HomePage;
  changed:boolean;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.context = new import0.HomePage(p0,p1);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_HomePage_Host:import2.RenderComponentType = (null as any);
class _View_HomePage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _HomePage_0_4:Wrapper_HomePage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_HomePage_Host0,renderType_HomePage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-home',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HomePage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HomePage_0_4 = new Wrapper_HomePage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.AuthData));
    this._appEl_0.initComponent(this._HomePage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._HomePage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HomePage) && (0 === requestNodeIndex))) { return this._HomePage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HomePage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_HomePage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_HomePage_Host === (null as any))) { (renderType_HomePage_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_HomePage_Host0(viewUtils,parentInjector,declarationEl);
}
export const HomePageNgFactory:import11.ComponentFactory<import0.HomePage> = new import11.ComponentFactory<import0.HomePage>('page-home',viewFactory_HomePage_Host0,import0.HomePage);
const styles_HomePage:any[] = ([] as any[]);
var renderType_HomePage:import2.RenderComponentType = (null as any);
class _View_HomePage0 extends import1.AppView<import0.HomePage> {
  _el_0:any;
  _Header_0_3:import12.Wrapper_Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Navbar_2_4:import13.Wrapper_Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _Button_4_4:import14.Wrapper_Button;
  _MenuToggle_4_5:import15.Wrapper_MenuToggle;
  _ToolbarItem_4_6:import16.Wrapper_ToolbarItem;
  _query_Button_4_0:import17.QueryList<any>;
  _text_5:any;
  _el_6:any;
  _Icon_6_3:import18.Wrapper_Icon;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import3.AppElement;
  _ToolbarTitle_9_4:import19.Wrapper_ToolbarTitle;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  /*private*/ _appEl_14:import3.AppElement;
  _Content_14_4:import20.Wrapper_Content;
  _text_15:any;
  _el_16:any;
  /*private*/ _appEl_16:import3.AppElement;
  _Button_16_4:import14.Wrapper_Button;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  /*private*/ _appEl_19:import3.AppElement;
  _Button_19_4:import14.Wrapper_Button;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  /*private*/ _appEl_22:import3.AppElement;
  _Button_22_4:import14.Wrapper_Button;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  /*private*/ _appEl_25:import3.AppElement;
  _Button_25_4:import14.Wrapper_Button;
  _text_26:any;
  _text_27:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_HomePage0,renderType_HomePage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import12.Wrapper_Header(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import23.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this.renderer.setElementAttribute(this._el_2,'color','primary');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import13.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import13.Wrapper_Navbar(this.parentInjector.get(import24.App),this.parentInjector.get(import23.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n		',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_4,'ion-button','');
    this.renderer.setElementAttribute(this._el_4,'menuToggle','');
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import14.viewFactory_Button0(this.viewUtils,this.injector(4),this._appEl_4);
    this._Button_4_4 = new import14.Wrapper_Button('','',this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_4),this.renderer);
    this._MenuToggle_4_5 = new import15.Wrapper_MenuToggle(this.parentInjector.get(import25.MenuController),new import22.ElementRef(this._el_4),this.parentInjector.get(import23.ViewController,(null as any)),this._Navbar_2_4.context);
    this._ToolbarItem_4_6 = new import16.Wrapper_ToolbarItem(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import26.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._query_Button_4_0 = new import17.QueryList<any>();
    this._appEl_4.initComponent(this._Button_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_6 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_6,'name','menu');
    this.renderer.setElementAttribute(this._el_6,'role','img');
    this._Icon_6_3 = new import18.Wrapper_Icon(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_6),this.renderer);
    this._text_7 = this.renderer.createText((null as any),'\n    ',(null as any));
      compView_4.create(this._Button_4_4.context,[([] as any[]).concat([
        this._text_5,
        this._el_6,
        this._text_7
      ]
    )],(null as any));
    this._text_8 = this.renderer.createText((null as any),'\n		',(null as any));
    this._el_9 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_9 = new import3.AppElement(9,2,this,this._el_9);
    var compView_9:any = import19.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(9),this._appEl_9);
    this._ToolbarTitle_9_4 = new import19.Wrapper_ToolbarTitle(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import26.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._appEl_9.initComponent(this._ToolbarTitle_9_4.context,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n			Ionic Blank\n		',(null as any));
    compView_9.create(this._ToolbarTitle_9_4.context,[([] as any[]).concat([this._text_10])],(null as any));
    this._text_11 = this.renderer.createText((null as any),'\n	',(null as any));
    compView_2.create(this._Navbar_2_4.context,[
      ([] as any[]).concat([this._el_4]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_3,
        this._text_8,
        this._el_9,
        this._text_11
      ]
      )
    ]
    ,(null as any));
    this._text_12 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_13 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_14 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_14,'padding','');
    this._appEl_14 = new import3.AppElement(14,(null as any),this,this._el_14);
    var compView_14:any = import20.viewFactory_Content0(this.viewUtils,this.injector(14),this._appEl_14);
    this._Content_14_4 = new import20.Wrapper_Content(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_14),this.renderer,this.parentInjector.get(import24.App),this.parentInjector.get(import27.Keyboard),this.parentInjector.get(import28.NgZone),this.parentInjector.get(import23.ViewController,(null as any)),this.parentInjector.get(import29.Tabs,(null as any)));
    this._appEl_14.initComponent(this._Content_14_4.context,([] as any[]),compView_14);
    this._text_15 = this.renderer.createText((null as any),'\n	',(null as any));
    this._el_16 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_16,'block','');
    this.renderer.setElementAttribute(this._el_16,'color','primary');
    this.renderer.setElementAttribute(this._el_16,'ion-button','');
    this._appEl_16 = new import3.AppElement(16,14,this,this._el_16);
    var compView_16:any = import14.viewFactory_Button0(this.viewUtils,this.injector(16),this._appEl_16);
    this._Button_16_4 = new import14.Wrapper_Button((null as any),'',this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_16),this.renderer);
    this._appEl_16.initComponent(this._Button_16_4.context,([] as any[]),compView_16);
    this._text_17 = this.renderer.createText((null as any),'\n    Create a new Event\n  ',(null as any));
    compView_16.create(this._Button_16_4.context,[([] as any[]).concat([this._text_17])],(null as any));
    this._text_18 = this.renderer.createText((null as any),'\n\n	',(null as any));
    this._el_19 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_19,'block','');
    this.renderer.setElementAttribute(this._el_19,'color','primary');
    this.renderer.setElementAttribute(this._el_19,'ion-button','');
    this._appEl_19 = new import3.AppElement(19,14,this,this._el_19);
    var compView_19:any = import14.viewFactory_Button0(this.viewUtils,this.injector(19),this._appEl_19);
    this._Button_19_4 = new import14.Wrapper_Button((null as any),'',this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_19),this.renderer);
    this._appEl_19.initComponent(this._Button_19_4.context,([] as any[]),compView_19);
    this._text_20 = this.renderer.createText((null as any),'\n    See your events\n  ',(null as any));
    compView_19.create(this._Button_19_4.context,[([] as any[]).concat([this._text_20])],(null as any));
    this._text_21 = this.renderer.createText((null as any),'\n\n	',(null as any));
    this._el_22 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_22,'block','');
    this.renderer.setElementAttribute(this._el_22,'color','primary');
    this.renderer.setElementAttribute(this._el_22,'ion-button','');
    this._appEl_22 = new import3.AppElement(22,14,this,this._el_22);
    var compView_22:any = import14.viewFactory_Button0(this.viewUtils,this.injector(22),this._appEl_22);
    this._Button_22_4 = new import14.Wrapper_Button((null as any),'',this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_22),this.renderer);
    this._appEl_22.initComponent(this._Button_22_4.context,([] as any[]),compView_22);
    this._text_23 = this.renderer.createText((null as any),'\n    Create a new Dish\n  ',(null as any));
    compView_22.create(this._Button_22_4.context,[([] as any[]).concat([this._text_23])],(null as any));
    this._text_24 = this.renderer.createText((null as any),'\n\n	',(null as any));
    this._el_25 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_25,'block','');
    this.renderer.setElementAttribute(this._el_25,'color','primary');
    this.renderer.setElementAttribute(this._el_25,'ion-button','');
    this._appEl_25 = new import3.AppElement(25,14,this,this._el_25);
    var compView_25:any = import14.viewFactory_Button0(this.viewUtils,this.injector(25),this._appEl_25);
    this._Button_25_4 = new import14.Wrapper_Button((null as any),'',this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_25),this.renderer);
    this._appEl_25.initComponent(this._Button_25_4.context,([] as any[]),compView_25);
    this._text_26 = this.renderer.createText((null as any),'\n    See all dishes\n  ',(null as any));
    compView_25.create(this._Button_25_4.context,[([] as any[]).concat([this._text_26])],(null as any));
    this._text_27 = this.renderer.createText((null as any),'\n',(null as any));
    compView_14.create(this._Content_14_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_15,
        this._el_16,
        this._text_18,
        this._el_19,
        this._text_21,
        this._el_22,
        this._text_24,
        this._el_25,
        this._text_27
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_4,'click',this.eventHandler(this._handle_click_4_0.bind(this)));
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_16,'click',this.eventHandler(this._handle_click_16_0.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_19,'click',this.eventHandler(this._handle_click_19_0.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_22,'click',this.eventHandler(this._handle_click_22_0.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_25,'click',this.eventHandler(this._handle_click_25_0.bind(this)));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import30.Icon) && (6 === requestNodeIndex))) { return this._Icon_6_3.context; }
    if (((token === import31.Button) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Button_4_4.context; }
    if (((token === import32.MenuToggle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._MenuToggle_4_5.context; }
    if (((token === import33.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._ToolbarItem_4_6.context; }
    if (((token === import34.ToolbarTitle) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._ToolbarTitle_9_4.context; }
    if (((token === import35.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._Navbar_2_4.context; }
    if (((token === import26.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._Header_0_3.context; }
    if (((token === import31.Button) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._Button_16_4.context; }
    if (((token === import31.Button) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) { return this._Button_19_4.context; }
    if (((token === import31.Button) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 23)))) { return this._Button_22_4.context; }
    if (((token === import31.Button) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._Button_25_4.context; }
    if (((token === import36.Content) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._Content_14_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    const currVal_0:any = 'primary';
    this._Navbar_2_4.check_color(currVal_0,throwOnChange,false);
    this._Navbar_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    if (this._Button_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    const currVal_4:any = '';
    this._MenuToggle_4_5.check_menuToggle(currVal_4,throwOnChange,false);
    this._MenuToggle_4_5.detectChangesInternal(this,this._el_4,throwOnChange);
    this._ToolbarItem_4_6.detectChangesInternal(this,this._el_4,throwOnChange);
    const currVal_6:any = 'menu';
    this._Icon_6_3.check_name(currVal_6,throwOnChange,false);
    this._Icon_6_3.detectChangesInternal(this,this._el_6,throwOnChange);
    if (this._ToolbarTitle_9_4.detectChangesInternal(this,this._el_9,throwOnChange)) { this._appEl_9.componentView.markAsCheckOnce(); }
    if (this._Content_14_4.detectChangesInternal(this,this._el_14,throwOnChange)) { this._appEl_14.componentView.markAsCheckOnce(); }
    const currVal_10:any = '';
    this._Button_16_4.check_block(currVal_10,throwOnChange,false);
    const currVal_11:any = 'primary';
    this._Button_16_4.check_color(currVal_11,throwOnChange,false);
    if (this._Button_16_4.detectChangesInternal(this,this._el_16,throwOnChange)) { this._appEl_16.componentView.markAsCheckOnce(); }
    const currVal_13:any = '';
    this._Button_19_4.check_block(currVal_13,throwOnChange,false);
    const currVal_14:any = 'primary';
    this._Button_19_4.check_color(currVal_14,throwOnChange,false);
    if (this._Button_19_4.detectChangesInternal(this,this._el_19,throwOnChange)) { this._appEl_19.componentView.markAsCheckOnce(); }
    const currVal_16:any = '';
    this._Button_22_4.check_block(currVal_16,throwOnChange,false);
    const currVal_17:any = 'primary';
    this._Button_22_4.check_color(currVal_17,throwOnChange,false);
    if (this._Button_22_4.detectChangesInternal(this,this._el_22,throwOnChange)) { this._appEl_22.componentView.markAsCheckOnce(); }
    const currVal_19:any = '';
    this._Button_25_4.check_block(currVal_19,throwOnChange,false);
    const currVal_20:any = 'primary';
    this._Button_25_4.check_color(currVal_20,throwOnChange,false);
    if (this._Button_25_4.detectChangesInternal(this,this._el_25,throwOnChange)) { this._appEl_25.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_4_0.dirty) {
        this._query_Button_4_0.reset([this._Button_4_4.context]);
        this._ToolbarItem_4_6.context._buttons = this._query_Button_4_0;
        this._query_Button_4_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Button_4_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_16_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_19_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_22_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_25_4.context.ngAfterContentInit(); }
    }
    const currVal_1:any = this._Navbar_2_4.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Navbar_2_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_5:any = this._MenuToggle_4_5.context.isHidden;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementProperty(this._el_4,'hidden',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_7:any = this._Icon_6_3.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_6,'hide',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._Content_14_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_14,'statusbar-padding',currVal_8);
      this._expr_8 = currVal_8;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Icon_6_3.context.ngOnDestroy();
    this._Content_14_4.context.ngOnDestroy();
  }
  private _handle_click_4_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MenuToggle_4_5.context.toggle()) !== false);
    return (true && pd_0);
  }
  private _handle_click_16_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.goToCreate()) !== false);
    return (true && pd_0);
  }
  private _handle_click_19_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.goToList()) !== false);
    return (true && pd_0);
  }
  private _handle_click_22_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.goToCreateDish()) !== false);
    return (true && pd_0);
  }
  private _handle_click_25_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.goToListDish()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_HomePage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.HomePage> {
  if ((renderType_HomePage === (null as any))) { (renderType_HomePage = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_HomePage,{})); }
  return new _View_HomePage0(viewUtils,parentInjector,declarationEl);
}