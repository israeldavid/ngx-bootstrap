webpackJsonp(["demo-tabs.module"],{"+RkR":function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-pills',\n  templateUrl: './pills.html'\n})\nexport class DemoTabsPillsComponent {}\n"},"4kJ6":function(n,l){n.exports="import { Component, ViewChild } from '@angular/core';\nimport { TabsetComponent } from 'ngx-bootstrap';\n\n@Component({\n  selector: 'demo-tabs-manual',\n  templateUrl: './manual.html'\n})\nexport class DemoTabsManualComponent {\n  @ViewChild('staticTabs') staticTabs: TabsetComponent;\n\n  selectTab(tab_id: number) {\n    this.staticTabs.tabs[tab_id].active = true;\n  }\n\n  disableEnable() {\n    this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;\n  }\n}\n"},BE2R:function(n,l,t){"use strict";function a(){return Object.assign(new I.a,{type:"pills"})}function e(n){return f._45(2,[(n()(),f._22(0,null,null,10,"demo-section",[],null,null,null,D.b,D.a)),f._20(49152,null,0,z.a,[],{name:[0,"name"],src:[1,"src"],componentContent:[2,"componentContent"]},null),(n()(),f._43(0,["\n  "])),(n()(),f._22(0,null,0,3,"p",[],null,null,null,null,null)),(n()(),f._43(null,["Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus. "])),(n()(),f._22(0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),f._43(null,["Nested tabs are not supported."])),(n()(),f._43(0,["\n\n  "])),(n()(),f._22(0,null,0,1,"docs-section",[],null,null,null,k.b,k.a)),f._20(49152,null,0,Q.a,[f.y],{content:[0,"content"]},null),(n()(),f._43(0,["\n"])),(n()(),f._43(null,["\n"]))],function(n,l){var t=l.component;n(l,1,0,t.name,t.src,t.componentContent),n(l,9,0,t.componentContent)},null)}function u(n){return f._45(0,[(n()(),f._43(null,["\n        "])),(n()(),f._22(0,null,null,1,"span",[["class","badge badge-secondary"]],null,null,null,null,null)),(n()(),f._43(null,["Click here!"])),(n()(),f._43(null,["\n      "]))],null,null)}function i(n){return f._45(0,[(n()(),f._22(0,null,null,24,"div",[],null,null,null,null,null)),(n()(),f._43(null,["\n  "])),(n()(),f._22(0,null,null,21,"tabset",[],[[2,"tab-container",null]],null,null,Y.b,Y.a)),f._20(180224,null,0,F.a,[I.a,f.Q],null,null),(n()(),f._43(0,["\n    "])),(n()(),f._22(0,null,0,2,"tab",[["heading","Static title"],["id","tab1"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"],id:[1,"id"]},null),(n()(),f._43(null,["Static content"])),(n()(),f._43(0,["\n    "])),(n()(),f._22(0,null,0,2,"tab",[["heading","Static Title 1"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"]},null),(n()(),f._43(null,["Static content 1"])),(n()(),f._43(0,["\n    "])),(n()(),f._22(0,null,0,2,"tab",[["heading","Static Title 2"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"]},null),(n()(),f._43(null,["Static content 2"])),(n()(),f._43(0,["\n    "])),(n()(),f._22(0,null,0,5,"tab",[],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],[[null,"select"]],function(n,l,t){var a=!0,e=n.component;return"select"===l&&(a=!1!==e.alertMe()&&a),a},null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],null,{select:"select"}),(n()(),f._43(null,["\n      "])),(n()(),f._16(0,null,null,1,null,u)),f._20(16384,null,0,E.a,[f.Z,$.a],null,null),(n()(),f._43(null,["\n      I've got an HTML heading, and a select callback. Pretty cool!\n    "])),(n()(),f._43(0,["\n  "])),(n()(),f._43(null,["\n"])),(n()(),f._43(null,["\n\n"]))],function(n,l){n(l,6,0,"Static title","tab1");n(l,10,0,"Static Title 1");n(l,14,0,"Static Title 2"),n(l,18,0)},function(n,l){n(l,2,0,f._35(l,3).clazz),n(l,5,0,f._35(l,6).id,f._35(l,6).active,f._35(l,6).addClass),n(l,9,0,f._35(l,10).id,f._35(l,10).active,f._35(l,10).addClass),n(l,13,0,f._35(l,14).id,f._35(l,14).active,f._35(l,14).addClass),n(l,17,0,f._35(l,18).id,f._35(l,18).active,f._35(l,18).addClass)})}function o(n){return f._45(0,[f._41(402653184,1,{staticTabs:0}),(n()(),f._22(0,null,null,41,"div",[],null,null,null,null,null)),(n()(),f._43(null,["\n  "])),(n()(),f._22(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),f._43(null,["Access to static tab from component"])),(n()(),f._43(null,["\n  "])),(n()(),f._22(0,null,null,7,"p",[],null,null,null,null,null)),(n()(),f._43(null,["\n    "])),(n()(),f._22(0,null,null,1,"button",[["class","btn btn-primary btn-sm"],["type","button"]],null,[[null,"click"]],function(n,l,t){var a=!0,e=n.component;return"click"===l&&(a=!1!==e.selectTab(1)&&a),a},null,null)),(n()(),f._43(null,["Select second tab"])),(n()(),f._43(null,["\n    "])),(n()(),f._22(0,null,null,1,"button",[["class","btn btn-primary btn-sm"],["type","button"]],null,[[null,"click"]],function(n,l,t){var a=!0,e=n.component;return"click"===l&&(a=!1!==e.selectTab(2)&&a),a},null,null)),(n()(),f._43(null,["Select third tab"])),(n()(),f._43(null,["\n  "])),(n()(),f._43(null,["\n  "])),(n()(),f._22(0,null,null,4,"p",[],null,null,null,null,null)),(n()(),f._43(null,["\n    "])),(n()(),f._22(0,null,null,1,"button",[["class","btn btn-primary btn-sm"],["type","button"]],null,[[null,"click"]],function(n,l,t){var a=!0,e=n.component;return"click"===l&&(a=!1!==e.disableEnable()&&a),a},null,null)),(n()(),f._43(null,["\n      Enable / Disable third tab\n    "])),(n()(),f._43(null,["\n  "])),(n()(),f._43(null,["\n  "])),(n()(),f._22(0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),f._43(null,["\n  "])),(n()(),f._22(0,null,null,18,"tabset",[],[[2,"tab-container",null]],null,null,Y.b,Y.a)),f._20(180224,[[1,4],["staticTabs",4]],0,F.a,[I.a,f.Q],null,null),(n()(),f._43(0,["\n    "])),(n()(),f._22(0,null,0,2,"tab",[["heading","Static title"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"]},null),(n()(),f._43(null,["Static content"])),(n()(),f._43(0,["\n    "])),(n()(),f._22(0,null,0,2,"tab",[["heading","Static Title 1"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"]},null),(n()(),f._43(null,["Static content 1"])),(n()(),f._43(0,["\n    "])),(n()(),f._22(0,null,0,2,"tab",[["heading","Static Title 2"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"]},null),(n()(),f._43(null,["Static content 2"])),(n()(),f._43(0,["\n    "])),(n()(),f._22(0,null,0,2,"tab",[["heading","Static Title 3"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"],removable:[1,"removable"]},null),(n()(),f._43(null,["Static content 3"])),(n()(),f._43(0,["\n  "])),(n()(),f._43(null,["\n"])),(n()(),f._43(null,["\n\n"]))],function(n,l){n(l,27,0,"Static title");n(l,31,0,"Static Title 1");n(l,35,0,"Static Title 2");n(l,39,0,"Static Title 3",!0)},function(n,l){n(l,23,0,f._35(l,24).clazz),n(l,26,0,f._35(l,27).id,f._35(l,27).active,f._35(l,27).addClass),n(l,30,0,f._35(l,31).id,f._35(l,31).active,f._35(l,31).addClass),n(l,34,0,f._35(l,35).id,f._35(l,35).active,f._35(l,35).addClass),n(l,38,0,f._35(l,39).id,f._35(l,39).active,f._35(l,39).addClass)})}function c(n){return f._45(0,[(n()(),f._22(0,null,null,1,"button",[["class","btn btn-primary btn-sm"],["type","button"]],null,[[null,"click"]],function(n,l,t){var a=!0,e=n.component;return"click"===l&&(a=!1!==(e.tabs=[])&&a),a},null,null)),(n()(),f._43(null,["\n      Remove all tabs\n    "]))],null,null)}function s(n){return f._45(0,[(n()(),f._22(0,null,null,2,"tab",[],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],[[null,"select"],[null,"deselect"],[null,"removed"]],function(n,l,t){var a=!0,e=n.component;return"select"===l&&(a=!1!=(n.context.$implicit.active=!0)&&a),"deselect"===l&&(a=!1!=(n.context.$implicit.active=!1)&&a),"removed"===l&&(a=!1!==e.removeTabHandler(n.context.$implicit)&&a),a},null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"],disabled:[1,"disabled"],removable:[2,"removable"],customClass:[3,"customClass"],active:[4,"active"]},{select:"select",deselect:"deselect",removed:"removed"}),(n()(),f._43(null,["\n      ","\n    "]))],function(n,l){n(l,1,0,l.context.$implicit.title,l.context.$implicit.disabled,l.context.$implicit.removable,l.context.$implicit.customClass,l.context.$implicit.active)},function(n,l){n(l,0,0,f._35(l,1).id,f._35(l,1).active,f._35(l,1).addClass),n(l,2,0,null==l.context.$implicit?null:l.context.$implicit.content)})}function b(n){return f._45(2,[(n()(),f._22(0,null,null,23,"div",[],null,[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==t.preventDefault()&&a),a},null,null)),(n()(),f._43(null,["\n    "])),(n()(),f._22(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),f._43(null,["Add / remove new tabs by manipulating tabs array:"])),(n()(),f._43(null,["\n    "])),(n()(),f._22(0,null,null,1,"button",[["class","btn btn-primary btn-sm"],["type","button"]],null,[[null,"click"]],function(n,l,t){var a=!0,e=n.component;return"click"===l&&(a=!1!==e.addNewTab()&&a),a},null,null)),(n()(),f._43(null,["\n      Add new tab\n    "])),(n()(),f._43(null,["\n    "])),(n()(),f._16(16777216,null,null,1,null,c)),f._20(16384,null,0,ln.n,[f._4,f.Z],{ngIf:[0,"ngIf"]},null),(n()(),f._43(null,["\n  "])),(n()(),f._22(0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),f._43(null,["\n  "])),(n()(),f._22(0,null,null,9,"tabset",[],[[2,"tab-container",null]],null,null,Y.b,Y.a)),f._20(180224,null,0,F.a,[I.a,f.Q],null,null),(n()(),f._43(0,["\n    "])),(n()(),f._22(0,null,0,2,"tab",[["heading","Static title"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"]},null),(n()(),f._43(null,["Static content"])),(n()(),f._43(0,["\n    "])),(n()(),f._16(16777216,null,0,1,null,s)),f._20(802816,null,0,ln.m,[f._4,f.Z,f.A],{ngForOf:[0,"ngForOf"]},null),(n()(),f._43(0,["\n  "])),(n()(),f._43(null,["\n"])),(n()(),f._43(null,["\n"]))],function(n,l){var t=l.component;n(l,9,0,t.tabs.length);n(l,17,0,"Static title"),n(l,21,0,t.tabs)},function(n,l){n(l,13,0,f._35(l,14).clazz),n(l,16,0,f._35(l,17).id,f._35(l,17).active,f._35(l,17).addClass)})}function r(n){return f._45(0,[(n()(),f._22(0,null,null,2,"tab",[],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"],customClass:[1,"customClass"]},null),(n()(),f._43(null,["\n    ","\n  "]))],function(n,l){n(l,1,0,l.context.$implicit.title,l.context.$implicit.customClass)},function(n,l){n(l,0,0,f._35(l,1).id,f._35(l,1).active,f._35(l,1).addClass),n(l,2,0,null==l.context.$implicit?null:l.context.$implicit.content)})}function d(n){return f._45(0,[(n()(),f._22(0,null,null,9,"tabset",[],[[2,"tab-container",null]],null,null,Y.b,Y.a)),f._20(180224,null,0,F.a,[I.a,f.Q],null,null),(n()(),f._43(0,["\n  "])),(n()(),f._22(0,null,0,2,"tab",[["customClass","customClass"],["heading","Static title"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"],customClass:[1,"customClass"]},null),(n()(),f._43(null,["Static content"])),(n()(),f._43(0,["\n  "])),(n()(),f._16(16777216,null,0,1,null,r)),f._20(802816,null,0,ln.m,[f._4,f.Z,f.A],{ngForOf:[0,"ngForOf"]},null),(n()(),f._43(0,["\n"])),(n()(),f._43(null,["\n"]))],function(n,l){var t=l.component;n(l,4,0,"Static title","customClass"),n(l,8,0,t.tabs)},function(n,l){n(l,0,0,f._35(l,1).clazz),n(l,3,0,f._35(l,4).id,f._35(l,4).active,f._35(l,4).addClass)})}function _(n){return f._45(0,[(n()(),f._22(0,null,null,10,"tabset",[["type","pills"]],[[2,"tab-container",null]],null,null,Y.b,Y.a)),f._20(180224,null,0,F.a,[I.a,f.Q],{type:[0,"type"]},null),(n()(),f._43(0,["\n  "])),(n()(),f._22(0,null,0,2,"tab",[["heading","Pills 1"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"]},null),(n()(),f._43(null,["Pills content 1"])),(n()(),f._43(0,["\n  "])),(n()(),f._22(0,null,0,2,"tab",[["heading","Pills 2"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"]},null),(n()(),f._43(null,["Pills content 2"])),(n()(),f._43(0,["\n"])),(n()(),f._43(null,["\n"]))],function(n,l){n(l,1,0,"pills");n(l,4,0,"Pills 1");n(l,8,0,"Pills 2")},function(n,l){n(l,0,0,f._35(l,1).clazz),n(l,3,0,f._35(l,4).id,f._35(l,4).active,f._35(l,4).addClass),n(l,7,0,f._35(l,8).id,f._35(l,8).active,f._35(l,8).addClass)})}function m(n){return f._45(0,[(n()(),f._22(0,null,null,10,"tabset",[["type","pills"]],[[2,"tab-container",null]],null,null,Y.b,Y.a)),f._20(180224,null,0,F.a,[I.a,f.Q],{vertical:[0,"vertical"],type:[1,"type"]},null),(n()(),f._43(0,["\n  "])),(n()(),f._22(0,null,0,2,"tab",[["heading","Vertical 1"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"]},null),(n()(),f._43(null,["Vertical content 1"])),(n()(),f._43(0,["\n  "])),(n()(),f._22(0,null,0,2,"tab",[["heading","Vertical 2"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"]},null),(n()(),f._43(null,["Vertical content 2"])),(n()(),f._43(0,["\n"])),(n()(),f._43(null,["\n"]))],function(n,l){n(l,1,0,!0,"pills");n(l,4,0,"Vertical 1");n(l,8,0,"Vertical 2")},function(n,l){n(l,0,0,f._35(l,1).clazz),n(l,3,0,f._35(l,4).id,f._35(l,4).active,f._35(l,4).addClass),n(l,7,0,f._35(l,8).id,f._35(l,8).active,f._35(l,8).addClass)})}function p(n){return f._45(0,[(n()(),f._22(0,null,null,14,"tabset",[],[[2,"tab-container",null]],null,null,Y.b,Y.a)),f._20(180224,null,0,F.a,[I.a,f.Q],{justified:[0,"justified"]},null),(n()(),f._43(0,["\n  "])),(n()(),f._22(0,null,0,2,"tab",[["heading","Justified"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"]},null),(n()(),f._43(null,["Justified content"])),(n()(),f._43(0,["\n  "])),(n()(),f._22(0,null,0,2,"tab",[["heading","SJ"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"]},null),(n()(),f._43(null,["Short Labeled Justified content"])),(n()(),f._43(0,["\n  "])),(n()(),f._22(0,null,0,2,"tab",[["heading","Long Justified"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"]},null),(n()(),f._43(null,["Long Labeled Justified content"])),(n()(),f._43(0,["\n"])),(n()(),f._43(null,["\n"]))],function(n,l){n(l,1,0,!0);n(l,4,0,"Justified");n(l,8,0,"SJ");n(l,12,0,"Long Justified")},function(n,l){n(l,0,0,f._35(l,1).clazz),n(l,3,0,f._35(l,4).id,f._35(l,4).active,f._35(l,4).addClass),n(l,7,0,f._35(l,8).id,f._35(l,8).active,f._35(l,8).addClass),n(l,11,0,f._35(l,12).id,f._35(l,12).active,f._35(l,12).addClass)})}function g(n){return f._45(0,[(n()(),f._22(0,null,null,10,"tabset",[],[[2,"tab-container",null]],null,null,Y.b,Y.a)),f._20(180224,null,0,F.a,[I.a,f.Q],null,null),(n()(),f._43(0,["\n  "])),(n()(),f._22(0,null,0,2,"tab",[["heading","Config 1"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"]},null),(n()(),f._43(null,["Config content 1"])),(n()(),f._43(0,["\n  "])),(n()(),f._22(0,null,0,2,"tab",[["heading","Config 2"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),f._20(212992,null,0,$.a,[F.a,f.p,f.Q],{heading:[0,"heading"]},null),(n()(),f._43(null,["Config content 2"])),(n()(),f._43(0,["\n"])),(n()(),f._43(null,["\n"]))],function(n,l){n(l,4,0,"Config 1");n(l,8,0,"Config 2")},function(n,l){n(l,0,0,f._35(l,1).clazz),n(l,3,0,f._35(l,4).id,f._35(l,4).active,f._35(l,4).addClass),n(l,7,0,f._35(l,8).id,f._35(l,8).active,f._35(l,8).addClass)})}Object.defineProperty(l,"__esModule",{value:!0});var f=t("/oeL"),h=function(){return function(){}}(),v=t("urbl"),y=t("QUTT"),C=t("PJTy"),T=t("v1cn"),S=t("qEIf"),x=t("rNzy"),D=t("Jggs"),z=t("c+jj"),k=t("LfeD"),Q=t("lgdf"),w=function(){function n(){}return n.prototype.alertMe=function(){setTimeout(function(){alert("You've selected the alert tab!")})},n}(),J=function(){function n(){}return n.prototype.selectTab=function(n){this.staticTabs.tabs[n].active=!0},n.prototype.disableEnable=function(){this.staticTabs.tabs[2].disabled=!this.staticTabs.tabs[2].disabled},n}(),P=function(){function n(){this.tabs=[{title:"Dynamic Title 1",content:"Dynamic content 1"},{title:"Dynamic Title 2",content:"Dynamic content 2",disabled:!0},{title:"Dynamic Title 3",content:"Dynamic content 3",removable:!0}]}return n.prototype.addNewTab=function(){var n=this.tabs.length+1;this.tabs.push({title:"Dynamic Title "+n,content:"Dynamic content "+n,disabled:!1,removable:!0})},n.prototype.removeTabHandler=function(n){this.tabs.splice(this.tabs.indexOf(n),1),console.log("Remove Tab handler")},n}(),j=function(){return function(){}}(),H=function(){return function(){}}(),L=function(){return function(){}}(),M=function(){return function(){this.tabs=[{title:"Dynamic Title 1",content:"Dynamic content 1",customClass:"customClass"},{title:"Dynamic Title 2",content:"Dynamic content 2",customClass:"customClass"}]}}(),$=(t("9FuY"),t("Fw80")),E=t("Djd0"),F=t("1sP3"),I=t("5bcs"),U=t("yroR"),V=function(){return function(){}}(),N=t("SY0Y"),O=t("EWuz"),R=t("bZLq"),A=t("vN/N"),q=[{name:"Usage",anchor:"usage",outlet:N.a,content:{doc:t("FESI")}},{name:"Examples",anchor:"examples",outlet:O.a,content:[{title:"Static tabs",anchor:"tabs-static",component:t("GUJ8"),html:t("HeIz"),outlet:w},{title:"Manual selection",anchor:"tabs-manual",component:t("4kJ6"),html:t("By5O"),outlet:J},{title:"Dynamic tabs",anchor:"tabs-dynamic",component:t("Zibq"),html:t("hPsb"),outlet:P},{title:"Pills",anchor:"tabs-Pills",component:t("+RkR"),html:t("vK0g"),outlet:j},{title:"Vertical Pills",anchor:"tabs-vertical-pills",component:t("eaFG"),html:t("k9Lx"),outlet:H},{title:"Justified",anchor:"tabs-justified",component:t("Ti2h"),html:t("msUC"),description:"<p><i>Bootstrap 4 doesn't have justified classes</i></p>",outlet:L},{title:"Styling",anchor:"tabs-styling",component:t("XHHs"),html:t("I1zm"),outlet:M},{title:"Configuring defaults",anchor:"tabs-config-defaults",component:t("mxQ/"),html:t("jFzH"),outlet:V}]},{name:"API Reference",anchor:"api-reference",outlet:R.a,content:[{title:"TabsetComponent",anchor:"tabset-component",outlet:A.b},{title:"TabDirective",anchor:"tab-directive",outlet:A.b},{title:"TabHeadingDirective",anchor:"tab-heading-directive",outlet:A.b},{title:"TabsetConfig",anchor:"tabset-config",outlet:A.c}]}],B=function(){return function(){this.name="Tabs",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/tabs",this.componentContent=q}}(),Z=f._19({encapsulation:2,styles:[],data:{}}),G=f._17("tabs-section",B,function(n){return f._45(0,[(n()(),f._22(0,null,null,1,"tabs-section",[],null,null,null,e,Z)),f._20(49152,null,0,B,[],null,null)],null,null)},{},{},[]),Y=t("El5r"),K=f._19({encapsulation:2,styles:[],data:{}}),X=f._17("demo-tabs-basic",w,function(n){return f._45(0,[(n()(),f._22(0,null,null,1,"demo-tabs-basic",[],null,null,null,i,K)),f._20(49152,null,0,w,[],null,null)],null,null)},{},{},[]),W=f._19({encapsulation:2,styles:[],data:{}}),nn=f._17("demo-tabs-manual",J,function(n){return f._45(0,[(n()(),f._22(0,null,null,1,"demo-tabs-manual",[],null,null,null,o,W)),f._20(49152,null,0,J,[],null,null)],null,null)},{},{},[]),ln=t("qbdv"),tn=f._19({encapsulation:2,styles:[],data:{}}),an=f._17("demo-tabs-dynamic",P,function(n){return f._45(0,[(n()(),f._22(0,null,null,1,"demo-tabs-dynamic",[],null,null,null,b,tn)),f._20(49152,null,0,P,[],null,null)],null,null)},{},{},[]),en=f._19({encapsulation:2,styles:[],data:{}}),un=f._17("demo-tabs-styling",M,function(n){return f._45(0,[(n()(),f._22(0,null,null,1,"demo-tabs-styling",[],null,null,null,d,en)),f._20(49152,null,0,M,[],null,null)],null,null)},{},{},[]),on=f._19({encapsulation:2,styles:[],data:{}}),cn=f._17("demo-tabs-pills",j,function(n){return f._45(0,[(n()(),f._22(0,null,null,1,"demo-tabs-pills",[],null,null,null,_,on)),f._20(49152,null,0,j,[],null,null)],null,null)},{},{},[]),sn=f._19({encapsulation:2,styles:[],data:{}}),bn=f._17("demo-tabs-vertical-pills",H,function(n){return f._45(0,[(n()(),f._22(0,null,null,1,"demo-tabs-vertical-pills",[],null,null,null,m,sn)),f._20(49152,null,0,H,[],null,null)],null,null)},{},{},[]),rn=f._19({encapsulation:2,styles:[],data:{}}),dn=f._17("demo-tabs-justified",L,function(n){return f._45(0,[(n()(),f._22(0,null,null,1,"demo-tabs-justified",[],null,null,null,p,rn)),f._20(49152,null,0,L,[],null,null)],null,null)},{},{},[]),_n=f._19({encapsulation:2,styles:[],data:{}}),mn=f._17("demo-tabs-config",V,function(n){return f._45(0,[(n()(),f._22(0,null,null,2,"demo-tabs-config",[],null,null,null,g,_n)),f._40(5120,null,I.a,a,[]),f._20(49152,null,0,V,[],null,null)],null,null)},{},{},[]),pn=t("bm2B"),gn=t("zNK2"),fn=t("BkNc"),hn=t("W6cK"),vn=t("XH7w"),yn=t("bqLD");t.d(l,"DemoTabsModuleNgFactory",function(){return Cn});var Cn=f._18(h,[],function(n){return f._32([f._33(512,f.m,f._14,[[8,[v.a,y.a,C.a,T.a,S.a,x.a,G,X,nn,an,un,cn,bn,dn,mn]],[3,f.m],f.G]),f._33(4608,ln.p,ln.o,[f.C]),f._33(4608,pn.z,pn.z,[]),f._33(4608,gn.a,gn.a,[ln.i,fn.n]),f._33(4608,I.a,I.a,[]),f._33(4608,hn.a,hn.a,[]),f._33(512,ln.c,ln.c,[]),f._33(512,pn.w,pn.w,[]),f._33(512,pn.k,pn.k,[]),f._33(512,U.a,U.a,[]),f._33(512,A.d,A.d,[]),f._33(512,fn.q,fn.q,[[2,fn.v],[2,fn.n]]),f._33(512,O.b,O.b,[]),f._33(512,R.b,R.b,[]),f._33(512,N.b,N.b,[]),f._33(512,vn.a,vn.a,[]),f._33(512,yn.a,yn.a,[]),f._33(512,h,h,[]),f._33(1024,fn.l,function(){return[[{path:"",component:B}]]},[])])})},By5O:function(n,l){n.exports='<div>\n  <p>Access to static tab from component</p>\n  <p>\n    <button type="button" class="btn btn-primary btn-sm" (click)="selectTab(1)">Select second tab</button>\n    <button type="button" class="btn btn-primary btn-sm" (click)="selectTab(2)">Select third tab</button>\n  </p>\n  <p>\n    <button type="button" class="btn btn-primary btn-sm" (click)="disableEnable()">\n      Enable / Disable third tab\n    </button>\n  </p>\n  <hr/>\n  <tabset #staticTabs>\n    <tab heading="Static title">Static content</tab>\n    <tab heading="Static Title 1">Static content 1</tab>\n    <tab heading="Static Title 2">Static content 2</tab>\n    <tab heading="Static Title 3" [removable]="true">Static content 3</tab>\n  </tabset>\n</div>\n\n'},FESI:function(n,l){n.exports="<pre class=\"prettyprint lang-typescript\">// RECOMMENDED (doesn't work with system.js)\nimport { TabsModule } from 'ngx-bootstrap/tabs';\n// or\nimport { TabsModule } from 'ngx-bootstrap';\n\n@NgModule({\n  imports: [TabsModule.forRoot(),...]\n})\nexport class AppModule(){}</pre><pre class=\"prettyprint lang-html\">&lt;tabset&gt;\n  &lt;tab heading='Tab 1'&gt;Tab 1 content&lt;/tab&gt;\n  &lt;tab&gt;\n    &lt;ng-template tabHeading&gt;Tab 2&lt;/ng-template&gt;\n    Tab 2 content\n  &lt;/tab&gt;\n&lt;/tabset&gt;</pre>"},GUJ8:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-basic',\n  templateUrl: './basic.html'\n})\nexport class DemoTabsBasicComponent {\n  alertMe(): void {\n    setTimeout(function(): void {\n      alert(\"You've selected the alert tab!\");\n    });\n  }\n}\n"},HeIz:function(n,l){n.exports='<div>\n  <tabset>\n    <tab heading="Static title" id="tab1">Static content</tab>\n    <tab heading="Static Title 1">Static content 1</tab>\n    <tab heading="Static Title 2">Static content 2</tab>\n    <tab (select)="alertMe()">\n      <ng-template tabHeading>\n        <span class="badge badge-secondary">Click here!</span>\n      </ng-template>\n      I\'ve got an HTML heading, and a select callback. Pretty cool!\n    </tab>\n  </tabset>\n</div>\n\n'},I1zm:function(n,l){n.exports='<tabset>\n  <tab heading="Static title" customClass="customClass">Static content</tab>\n  <tab *ngFor="let tabz of tabs"\n       [heading]="tabz.title"\n       [customClass]="tabz.customClass">\n    {{tabz?.content}}\n  </tab>\n</tabset>\n'},Ti2h:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-justified',\n  templateUrl: './justified.html'\n})\nexport class DemoTabsJustifiedComponent {}\n"},XHHs:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-styling',\n  templateUrl: './styling.html'\n})\nexport class DemoTabsStylingComponent {\n  tabs: any[] = [\n    {\n      title: 'Dynamic Title 1',\n      content: 'Dynamic content 1',\n      customClass: 'customClass'\n    },\n    {\n      title: 'Dynamic Title 2',\n      content: 'Dynamic content 2',\n      customClass: 'customClass'\n    }\n  ];\n}\n"},Zibq:function(n,l){n.exports="import { Component, ChangeDetectionStrategy } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-dynamic',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: './dynamic.html'\n})\nexport class DemoTabsDynamicComponent {\n  tabs: any[] = [\n    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },\n    { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true },\n    { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true }\n  ];\n\n  addNewTab(): void {\n    const newTabIndex = this.tabs.length + 1;\n    this.tabs.push({\n      title: `Dynamic Title ${newTabIndex}`,\n      content: `Dynamic content ${newTabIndex}`,\n      disabled: false,\n      removable: true\n    });\n  }\n\n  removeTabHandler(tab: any): void {\n    this.tabs.splice(this.tabs.indexOf(tab), 1);\n    console.log('Remove Tab handler');\n  }\n}\n"},eaFG:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-vertical-pills',\n  templateUrl: './vertical-pills.html'\n})\nexport class DemoTabsVerticalPillsComponent {}\n"},hPsb:function(n,l){n.exports='<div (click)="$event.preventDefault()">\n    <p>Add / remove new tabs by manipulating tabs array:</p>\n    <button type="button" class="btn btn-primary btn-sm" (click)="addNewTab()">\n      Add new tab\n    </button>\n    <button type="button" class="btn btn-primary btn-sm" (click)="tabs = []"  *ngIf="tabs.length">\n      Remove all tabs\n    </button>\n  <hr/>\n  <tabset>\n    <tab heading="Static title">Static content</tab>\n    <tab *ngFor="let tabz of tabs"\n         [heading]="tabz.title"\n         [active]="tabz.active"\n         (select)="tabz.active = true"\n         (deselect)="tabz.active = false"\n         [disabled]="tabz.disabled"\n         [removable]="tabz.removable"\n         (removed)="removeTabHandler(tabz)"\n         [customClass]="tabz.customClass">\n      {{tabz?.content}}\n    </tab>\n  </tabset>\n</div>\n'},jFzH:function(n,l){n.exports='<tabset>\n  <tab heading="Config 1">Config content 1</tab>\n  <tab heading="Config 2">Config content 2</tab>\n</tabset>\n'},k9Lx:function(n,l){n.exports='<tabset [vertical]="true" type="pills">\n  <tab heading="Vertical 1">Vertical content 1</tab>\n  <tab heading="Vertical 2">Vertical content 2</tab>\n</tabset>\n'},msUC:function(n,l){n.exports='<tabset [justified]="true">\n  <tab heading="Justified">Justified content</tab>\n  <tab heading="SJ">Short Labeled Justified content</tab>\n  <tab heading="Long Justified">Long Labeled Justified content</tab>\n</tabset>\n'},"mxQ/":function(n,l){n.exports="import { Component } from '@angular/core';\nimport { TabsetConfig } from 'ngx-bootstrap/tabs';\n\n// such override allows to keep some initial values\n\nexport function getTabsetConfig(): TabsetConfig {\n  return Object.assign(new TabsetConfig(), { type: 'pills' });\n}\n\n@Component({\n  selector: 'demo-tabs-config',\n  templateUrl: './config.html',\n  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]\n})\nexport class DemoTabsConfigComponent {}\n"},vK0g:function(n,l){n.exports='<tabset type="pills">\n  <tab heading="Pills 1">Pills content 1</tab>\n  <tab heading="Pills 2">Pills content 2</tab>\n</tabset>\n'}});