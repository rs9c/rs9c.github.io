import{$ as e,$n as t,An as n,C as r,Cn as i,Dn as a,En as o,Gn as s,Hn as c,In as l,J as u,Kn as d,Ln as f,Mn as p,On as m,P as h,Pn as g,Q as _,Qn as v,St as y,Tn as b,Un as x,Wn as S,X as C,Z as w,_r as T,_t as E,an as D,b as O,br as k,dt as A,et as j,fn as M,ft as N,h as ee,ht as P,in as F,kn as I,m as L,mr as R,mt as z,nn as B,on as V,qn as te,rt as H,tn as U,tt as ne,ur as W,wn as G,yn as K,yr as q,yt as J}from"./useApi-CROJJdhE-B7xsYEVh.js";import{B as re,F as Y,L as ie,U as ae,X as oe,Z as se,a as ce,ct as le,ft as ue,ht as de,lt as fe,m as pe,s as me,t as he}from"./auth-DhlZmPDC.js";import{d as ge,f as _e,n as ve,o as ye,s as be,t as X,u as xe}from"./Icon-DBPp5zBD.js";import{n as Se,r as Ce,t as we}from"./Dropdown-psOBkFmV.js";import{a as Te,i as Ee,n as De,o as Oe,r as ke,t as Ae}from"./gestalt-D2zvz1Ii.js";import{t as je}from"./_plugin-vue_export-helper-BDNMzG2s.js";var Z=`v-hidden`,Me=ye(`[v-hidden]`,{display:`none!important`}),Ne=n({name:`Overflow`,props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){let n=W(null),r=W(null);function i(i){let{value:a}=n,{getCounter:o,getTail:s}=e,c;if(c=o===void 0?r.value:o(),!a||!c)return;c.hasAttribute(Z)&&c.removeAttribute(Z);let{children:l}=a;if(i.showAllItemsBeforeCalculate)for(let e of l)e.hasAttribute(Z)&&e.removeAttribute(Z);let u=a.offsetWidth,d=[],f=t.tail?s?.():null,p=f?f.offsetWidth:0,m=!1,h=a.children.length-+!!t.tail;for(let t=0;t<h-1;++t){if(t<0)continue;let n=l[t];if(m){n.hasAttribute(Z)||n.setAttribute(Z,``);continue}else n.hasAttribute(Z)&&n.removeAttribute(Z);let r=n.offsetWidth;if(p+=r,d[t]=r,p>u){let{updateCounter:n}=e;for(let r=t;r>=0;--r){let i=h-1-r;n===void 0?c.textContent=`${i}`:n(i);let a=c.offsetWidth;if(p-=d[r],p+a<=u||r===0){m=!0,t=r-1,f&&(t===-1?(f.style.maxWidth=`${u-a}px`,f.style.boxSizing=`border-box`):f.style.maxWidth=``);let{onUpdateCount:n}=e;n&&n(i);break}}}}let{onUpdateOverflow:g}=e;m?g!==void 0&&g(!0):(g!==void 0&&g(!1),c.setAttribute(Z,``))}let a=E();return Me.mount({id:`vueuc/overflow`,head:!0,anchorMetaName:be,ssr:a}),c(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:r,sync:i}},render(){let{$slots:e}=this;return f(()=>this.sync({showAllItemsBeforeCalculate:!1})),p(`div`,{class:`v-overflow`,ref:`selfRef`},[d(e,`default`),e.counter?e.counter():p(`span`,{style:{display:`inline-block`},ref:`counterRef`}),e.tail?e.tail():null])}});function Pe(e){let{baseColor:t,textColor2:n,bodyColor:r,cardColor:i,dividerColor:a,actionColor:o,scrollbarColor:s,scrollbarColorHover:c,invertedColor:l}=e;return{textColor:n,textColorInverted:`#FFF`,color:r,colorEmbedded:o,headerColor:i,headerColorInverted:l,footerColor:o,footerColorInverted:l,headerBorderColor:a,headerBorderColorInverted:l,footerBorderColor:a,footerBorderColorInverted:l,siderBorderColor:a,siderBorderColorInverted:l,siderColor:i,siderColorInverted:l,siderToggleButtonBorder:`1px solid ${a}`,siderToggleButtonColor:t,siderToggleButtonIconColor:n,siderToggleButtonIconColorInverted:n,siderToggleBarColor:H(r,s),siderToggleBarColorHover:H(r,c),__invertScrollbar:`true`}}var Fe=_({name:`Layout`,common:ne,peers:{Scrollbar:le},self:Pe}),Ie=y(`n-layout-sider`),Le={type:String,default:`static`},Re=B(`layout`,`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[B(`layout-scroll-container`,`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),D(`absolute-positioned`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),ze={embedded:Boolean,position:Le,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:``},hasSider:Boolean,siderPlacement:{type:String,default:`left`}},Be=y(`n-layout`);function Ve(t){return n({name:t?`LayoutContent`:`Layout`,props:{...e.props,...ze},setup(t){let n=W(null),r=W(null),{mergedClsPrefixRef:a,inlineThemeDisabled:o}=J(t),c=e(`Layout`,`-layout`,Re,Fe,t,a);function l(e,i){if(t.nativeScrollbar){let{value:t}=n;t&&(i===void 0?t.scrollTo(e):t.scrollTo(e,i))}else{let{value:t}=r;t&&t.scrollTo(e,i)}}s(Be,t);let u=0,d=0,f=e=>{let n=e.target;u=n.scrollLeft,d=n.scrollTop,t.onScroll?.(e)};oe(()=>{if(t.nativeScrollbar){let e=n.value;e&&(e.scrollTop=d,e.scrollLeft=u)}});let p={display:`flex`,flexWrap:`nowrap`,width:`100%`,flexDirection:`row`},m={scrollTo:l},h=i(()=>{let{common:{cubicBezierEaseInOut:e},self:n}=c.value;return{"--n-bezier":e,"--n-color":t.embedded?n.colorEmbedded:n.color,"--n-text-color":n.textColor}}),g=o?j(`layout`,i(()=>t.embedded?`e`:``),h,t):void 0;return{mergedClsPrefix:a,scrollableElRef:n,scrollbarInstRef:r,hasSiderStyle:p,mergedTheme:c,handleNativeElScroll:f,cssVars:o?void 0:h,themeClass:g?.themeClass,onRender:g?.onRender,...m}},render(){let{mergedClsPrefix:e,hasSider:n}=this;this.onRender?.();let r=n?this.hasSiderStyle:void 0,i=[this.themeClass,t&&`${e}-layout-content`,`${e}-layout`,`${e}-layout--${this.position}-positioned`];return S(),a(`div`,{class:N(i),style:q(this.cssVars)},[this.nativeScrollbar?(S(),a(`div`,{key:0,ref:`scrollableElRef`,class:N([`${e}-layout-scroll-container`,this.contentClass]),style:q([this.contentStyle,r]),onScroll:this.handleNativeElScroll},[P(()=>this.$slots.default?.())],46,[`onScroll`])):(S(),b(re,l({key:1},this.scrollbarProps,{onScroll:this.onScroll,ref:`scrollbarInstRef`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,r]}),z(this.$slots),1040,[`onScroll`,`theme`,`themeOverrides`,`contentClass`,`contentStyle`]))],6)}})}var He=Ve(!1),Ue=Ve(!0),We=B(`layout-header`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[D(`absolute-positioned`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),D(`bordered`,`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Ge={position:Le,inverted:Boolean,bordered:Boolean},Ke=n({name:`LayoutHeader`,props:{...e.props,...Ge},setup(t){let{mergedClsPrefixRef:n,inlineThemeDisabled:r}=J(t),a=e(`Layout`,`-layout-header`,We,Fe,t,n),o=i(()=>{let{common:{cubicBezierEaseInOut:e},self:n}=a.value,r={"--n-bezier":e};return t.inverted?(r[`--n-color`]=n.headerColorInverted,r[`--n-text-color`]=n.textColorInverted,r[`--n-border-color`]=n.headerBorderColorInverted):(r[`--n-color`]=n.headerColor,r[`--n-text-color`]=n.textColor,r[`--n-border-color`]=n.headerBorderColor),r}),s=r?j(`layout-header`,i(()=>t.inverted?`a`:`b`),o,t):void 0;return{mergedClsPrefix:n,cssVars:r?void 0:o,themeClass:s?.themeClass,onRender:s?.onRender}},render(){let{mergedClsPrefix:e}=this;return this.onRender?.(),S(),a(`div`,{class:N([`${e}-layout-header`,this.themeClass,this.position&&`${e}-layout-header--${this.position}-positioned`,this.bordered&&`${e}-layout-header--bordered`]),style:q(this.cssVars)},[P(()=>this.$slots.default?.())],6)}}),qe=B(`layout-sider`,`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[D(`bordered`,[F(`border`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),F(`left-placement`,[D(`bordered`,[F(`border`,`
 right: 0;
 `)])]),D(`right-placement`,`
 justify-content: flex-start;
 `,[D(`bordered`,[F(`border`,`
 left: 0;
 `)]),D(`collapsed`,[B(`layout-toggle-button`,[B(`base-icon`,`
 transform: rotate(180deg);
 `)]),B(`layout-toggle-bar`,[U(`&:hover`,[F(`top`,{transform:`rotate(-12deg) scale(1.15) translateY(-2px)`}),F(`bottom`,{transform:`rotate(12deg) scale(1.15) translateY(2px)`})])])]),B(`layout-toggle-button`,`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[B(`base-icon`,`
 transform: rotate(0);
 `)]),B(`layout-toggle-bar`,`
 left: -28px;
 transform: rotate(180deg);
 `,[U(`&:hover`,[F(`top`,{transform:`rotate(12deg) scale(1.15) translateY(-2px)`}),F(`bottom`,{transform:`rotate(-12deg) scale(1.15) translateY(2px)`})])])]),D(`collapsed`,[B(`layout-toggle-bar`,[U(`&:hover`,[F(`top`,{transform:`rotate(-12deg) scale(1.15) translateY(-2px)`}),F(`bottom`,{transform:`rotate(12deg) scale(1.15) translateY(2px)`})])]),B(`layout-toggle-button`,[B(`base-icon`,`
 transform: rotate(0);
 `)])]),B(`layout-toggle-button`,`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[B(`base-icon`,`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),B(`layout-toggle-bar`,`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[F(`top, bottom`,`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),F(`bottom`,`
 position: absolute;
 top: 34px;
 `),U(`&:hover`,[F(`top`,{transform:`rotate(12deg) scale(1.15) translateY(-2px)`}),F(`bottom`,{transform:`rotate(-12deg) scale(1.15) translateY(2px)`})]),F(`top, bottom`,{backgroundColor:`var(--n-toggle-bar-color)`}),U(`&:hover`,[F(`top, bottom`,{backgroundColor:`var(--n-toggle-bar-color-hover)`})])]),F(`border`,`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),B(`layout-sider-scroll-container`,`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),D(`show-content`,[B(`layout-sider-scroll-container`,{opacity:1})]),D(`absolute-positioned`,`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Je=[`onClick`],Ye=n({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){let{clsPrefix:e}=this;return S(),a(`div`,{onClick:this.onClick,class:N(`${e}-layout-toggle-bar`)},[G(`div`,{class:N(`${e}-layout-toggle-bar__top`)},null,2),G(`div`,{class:N(`${e}-layout-toggle-bar__bottom`)},null,2)],10,Je)}}),Xe=[`onClick`],Ze=n({name:`LayoutToggleButton`,props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){let{clsPrefix:e}=this;return S(),a(`div`,{class:N(`${e}-layout-toggle-button`),onClick:this.onClick},[(S(),b(w,{clsPrefix:e},{default:()=>(S(),b(Se))},1032,[`clsPrefix`]))],10,Xe)}}),Qe=[`onTransitionend`],$e={position:Le,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:``},collapseMode:{type:String,default:`transform`},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},et=n({name:`LayoutSider`,props:{...e.props,...$e},setup(t){let n=g(Be),r=W(null),a=W(null),o=W(t.defaultCollapsed),c=_e(R(t,`collapsed`),o),l=i(()=>xe(c.value?t.collapsedWidth:t.width)),d=i(()=>t.collapseMode===`transform`?{minWidth:xe(t.width)}:{}),f=i(()=>n?n.siderPlacement:`left`);function p(e,n){if(t.nativeScrollbar){let{value:t}=r;t&&(n===void 0?t.scrollTo(e):t.scrollTo(e,n))}else{let{value:t}=a;t&&t.scrollTo(e,n)}}function m(){let{"onUpdate:collapsed":e,onUpdateCollapsed:n,onExpand:r,onCollapse:i}=t,{value:a}=c;n&&u(n,!a),e&&u(e,!a),o.value=!a,a?r&&u(r):i&&u(i)}let h=0,_=0,v=e=>{let n=e.target;h=n.scrollLeft,_=n.scrollTop,t.onScroll?.(e)};oe(()=>{if(t.nativeScrollbar){let e=r.value;e&&(e.scrollTop=_,e.scrollLeft=h)}}),s(Ie,{collapsedRef:c,collapseModeRef:R(t,`collapseMode`)});let{mergedClsPrefixRef:y,inlineThemeDisabled:b}=J(t),x=e(`Layout`,`-layout-sider`,qe,Fe,t,y);function S(e){e.propertyName===`max-width`&&(c.value?t.onAfterLeave?.():t.onAfterEnter?.())}let C={scrollTo:p},w=i(()=>{let{common:{cubicBezierEaseInOut:e},self:n}=x.value,{siderToggleButtonColor:r,siderToggleButtonBorder:i,siderToggleBarColor:a,siderToggleBarColorHover:o}=n,s={"--n-bezier":e,"--n-toggle-button-color":r,"--n-toggle-button-border":i,"--n-toggle-bar-color":a,"--n-toggle-bar-color-hover":o};return t.inverted?(s[`--n-color`]=n.siderColorInverted,s[`--n-text-color`]=n.textColorInverted,s[`--n-border-color`]=n.siderBorderColorInverted,s[`--n-toggle-button-icon-color`]=n.siderToggleButtonIconColorInverted,s.__invertScrollbar=n.__invertScrollbar):(s[`--n-color`]=n.siderColor,s[`--n-text-color`]=n.textColor,s[`--n-border-color`]=n.siderBorderColor,s[`--n-toggle-button-icon-color`]=n.siderToggleButtonIconColor),s}),T=b?j(`layout-sider`,i(()=>t.inverted?`a`:`b`),w,t):void 0;return{scrollableElRef:r,scrollbarInstRef:a,mergedClsPrefix:y,mergedTheme:x,styleMaxWidth:l,mergedCollapsed:c,scrollContainerStyle:d,siderPlacement:f,handleNativeElScroll:v,handleTransitionend:S,handleTriggerClick:m,inlineThemeDisabled:b,cssVars:w,themeClass:T?.themeClass,onRender:T?.onRender,...C}},render(){let{mergedClsPrefix:e,mergedCollapsed:t,showTrigger:n}=this;return this.onRender?.(),S(),a(`aside`,{class:N([`${e}-layout-sider`,this.themeClass,`${e}-layout-sider--${this.position}-positioned`,`${e}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${e}-layout-sider--bordered`,t&&`${e}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${e}-layout-sider--show-content`]),onTransitionend:this.handleTransitionend,style:q([this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:xe(this.width)}])},[this.nativeScrollbar?(S(),a(`div`,{key:1,class:N([`${e}-layout-sider-scroll-container`,this.contentClass]),onScroll:this.handleNativeElScroll,style:q([this.scrollContainerStyle,{overflow:`auto`},this.contentStyle]),ref:`scrollableElRef`},[P(()=>this.$slots.default?.())],46,[`onScroll`])):(S(),b(re,l({key:0},this.scrollbarProps,{onScroll:this.onScroll,ref:`scrollbarInstRef`,style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar===`true`?{colorHover:`rgba(255, 255, 255, .4)`,color:`rgba(255, 255, 255, .3)`}:void 0}),z(this.$slots),1040,[`onScroll`,`style`,`contentStyle`,`contentClass`,`theme`,`themeOverrides`,`builtinThemeOverrides`])),n?(S(),a(K,{key:2},[n===`bar`?(S(),b(Ye,{key:0,clsPrefix:e,class:N(t?this.collapsedTriggerClass:this.triggerClass),style:q(t?this.collapsedTriggerStyle:this.triggerStyle),onClick:this.handleTriggerClick},null,8,[`clsPrefix`,`class`,`style`,`onClick`])):(S(),b(Ze,{key:1,clsPrefix:e,class:N(t?this.collapsedTriggerClass:this.triggerClass),style:q(t?this.collapsedTriggerStyle:this.triggerStyle),onClick:this.handleTriggerClick},null,8,[`clsPrefix`,`class`,`style`,`onClick`]))],64)):P(()=>null),this.bordered?(S(),a(`div`,{key:4,class:N(`${e}-layout-sider__border`)},null,2)):P(()=>null)],46,Qe)}}),Q=y(`n-menu`),tt=y(`n-submenu`),nt=y(`n-menu-item-group`),rt=[U(`&::before`,`background-color: var(--n-item-color-hover);`),F(`arrow`,`
 color: var(--n-arrow-color-hover);
 `),F(`icon`,`
 color: var(--n-item-icon-color-hover);
 `),B(`menu-item-content-header`,`
 color: var(--n-item-text-color-hover);
 `,[U(`a`,`
 color: var(--n-item-text-color-hover);
 `),F(`extra`,`
 color: var(--n-item-text-color-hover);
 `)])],it=[F(`icon`,`
 color: var(--n-item-icon-color-hover-horizontal);
 `),B(`menu-item-content-header`,`
 color: var(--n-item-text-color-hover-horizontal);
 `,[U(`a`,`
 color: var(--n-item-text-color-hover-horizontal);
 `),F(`extra`,`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],at=U([B(`menu`,`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[D(`horizontal`,`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[B(`submenu`,`margin: 0;`),B(`menu-item`,`margin: 0;`),B(`menu-item-content`,`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[U(`&::before`,`display: none;`),D(`selected`,`border-bottom: 2px solid var(--n-border-color-horizontal)`)]),B(`menu-item-content`,[D(`selected`,[F(`icon`,`color: var(--n-item-icon-color-active-horizontal);`),B(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-horizontal);
 `,[U(`a`,`color: var(--n-item-text-color-active-horizontal);`),F(`extra`,`color: var(--n-item-text-color-active-horizontal);`)])]),D(`child-active`,`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[B(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[U(`a`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `),F(`extra`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),F(`icon`,`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),V(`disabled`,[V(`selected, child-active`,[U(`&:focus-within`,it)]),D(`selected`,[$(null,[F(`icon`,`color: var(--n-item-icon-color-active-hover-horizontal);`),B(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[U(`a`,`color: var(--n-item-text-color-active-hover-horizontal);`),F(`extra`,`color: var(--n-item-text-color-active-hover-horizontal);`)])])]),D(`child-active`,[$(null,[F(`icon`,`color: var(--n-item-icon-color-child-active-hover-horizontal);`),B(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[U(`a`,`color: var(--n-item-text-color-child-active-hover-horizontal);`),F(`extra`,`color: var(--n-item-text-color-child-active-hover-horizontal);`)])])]),$(`border-bottom: 2px solid var(--n-border-color-horizontal);`,it)]),B(`menu-item-content-header`,[U(`a`,`color: var(--n-item-text-color-horizontal);`)])])]),V(`responsive`,[B(`menu-item-content-header`,`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),D(`collapsed`,[B(`menu-item-content`,[D(`selected`,[U(`&::before`,`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),B(`menu-item-content-header`,`opacity: 0;`),F(`arrow`,`opacity: 0;`),F(`icon`,`color: var(--n-item-icon-color-collapsed);`)])]),B(`menu-item`,`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),B(`menu-item-content`,`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[U(`> *`,`z-index: 1;`),U(`&::before`,`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),D(`disabled`,`
 opacity: .45;
 cursor: not-allowed;
 `),D(`collapsed`,[F(`arrow`,`transform: rotate(0);`)]),D(`selected`,[U(`&::before`,`background-color: var(--n-item-color-active);`),F(`arrow`,`color: var(--n-arrow-color-active);`),F(`icon`,`color: var(--n-item-icon-color-active);`),B(`menu-item-content-header`,`
 color: var(--n-item-text-color-active);
 `,[U(`a`,`color: var(--n-item-text-color-active);`),F(`extra`,`color: var(--n-item-text-color-active);`)])]),D(`child-active`,[B(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active);
 `,[U(`a`,`
 color: var(--n-item-text-color-child-active);
 `),F(`extra`,`
 color: var(--n-item-text-color-child-active);
 `)]),F(`arrow`,`
 color: var(--n-arrow-color-child-active);
 `),F(`icon`,`
 color: var(--n-item-icon-color-child-active);
 `)]),V(`disabled`,[V(`selected, child-active`,[U(`&:focus-within`,rt)]),D(`selected`,[$(null,[F(`arrow`,`color: var(--n-arrow-color-active-hover);`),F(`icon`,`color: var(--n-item-icon-color-active-hover);`),B(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-hover);
 `,[U(`a`,`color: var(--n-item-text-color-active-hover);`),F(`extra`,`color: var(--n-item-text-color-active-hover);`)])])]),D(`child-active`,[$(null,[F(`arrow`,`color: var(--n-arrow-color-child-active-hover);`),F(`icon`,`color: var(--n-item-icon-color-child-active-hover);`),B(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-hover);
 `,[U(`a`,`color: var(--n-item-text-color-child-active-hover);`),F(`extra`,`color: var(--n-item-text-color-child-active-hover);`)])])]),D(`selected`,[$(null,[U(`&::before`,`background-color: var(--n-item-color-active-hover);`)])]),$(null,rt)]),F(`icon`,`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),F(`arrow`,`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),B(`menu-item-content-header`,`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[U(`a`,`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[U(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),F(`extra`,`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),B(`submenu`,`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[B(`menu-item-content`,`
 height: var(--n-item-height);
 `),B(`submenu-children`,`
 overflow: hidden;
 padding: 0;
 `,[ie({duration:`.2s`})])]),B(`menu-item-group`,[B(`menu-item-group-title`,`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),B(`menu-tooltip`,[U(`a`,`
 color: inherit;
 text-decoration: none;
 `)]),B(`menu-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function $(e,t){return[D(`hover`,e,t),U(`&:hover`,e,t)]}var ot=n({name:`MenuDivider`,setup(){let{mergedClsPrefixRef:e,isHorizontalRef:t}=g(Q);return()=>t.value?null:(S(),a(`div`,{key:1,class:N(`${e.value}-menu-divider`)},null,2))}}),st=n({name:`ChevronDownFilled`,render(){return(()=>{let e=A(`f3af82a2aab086a5`);return e[0]||=G(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[G(`path`,{d:`M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z`,fill:`currentColor`})],-1)})()}}),ct=[`onClick`],lt=n({name:`MenuOptionContent`,props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){let{props:t}=g(Q);return{menuProps:t,style:i(()=>{let{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:i(()=>{let{maxIconSize:t,activeIconSize:n,iconMarginRight:r}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){let{clsPrefix:e,tmNode:t,menuProps:{renderIcon:n,renderLabel:r,renderExtra:i,expandIcon:o}}=this,s=n?n(t.rawNode):Y(this.icon);return(()=>{let n=A(`7bb10afc6caf8fa4`);return S(),a(`div`,{onClick:e=>{this.onClick?.(e)},role:`none`,class:N([`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}]),style:q(this.style)},[P(()=>s&&(S(),a(`div`,{class:N(`${e}-menu-item-content__icon`),style:q(this.iconStyle),role:`none`},[P(()=>[s])],6))),G(`div`,{class:N(`${e}-menu-item-content-header`),role:`none`},[this.isEllipsisPlaceholder?(S(),a(K,{key:0},[P(()=>this.title)],64)):(S(),a(K,{key:1},[r?(S(),a(K,{key:0},[P(()=>r(t.rawNode))],64)):(S(),a(K,{key:1},[P(()=>Y(this.title))],64))],64)),this.extra||i?(S(),a(`span`,{key:2,class:N(`${e}-menu-item-content-header__extra`)},[n[0]||=P(` `,-1),i?(S(),a(K,{key:0},[P(()=>i(t.rawNode))],64)):(S(),a(K,{key:1},[P(()=>Y(this.extra))],64))],2)):P(()=>null)],2),this.showArrow?(S(),b(w,{key:0,ariaHidden:!0,class:N(`${e}-menu-item-content__arrow`),clsPrefix:e},{default:()=>o?o(t.rawNode):(S(),b(st,{key:1}))},1032,[`class`,`clsPrefix`])):P(()=>null)],14,ct)})()}}),ut=8;function dt(e){let t=g(Q),{props:n,mergedCollapsedRef:r}=t,a=g(tt,null),o=g(nt,null),s=i(()=>n.mode===`horizontal`),c=i(()=>s.value?n.dropdownPlacement:`tmNodes`in e?`right-start`:`right`),l=i(()=>Math.max(n.collapsedIconSize??n.iconSize,n.iconSize));return{dropdownPlacement:c,activeIconSize:i(()=>!s.value&&e.root&&r.value?n.collapsedIconSize??n.iconSize:n.iconSize),maxIconSize:l,paddingLeft:i(()=>{if(s.value)return;let{collapsedWidth:t,indent:i,rootIndent:c}=n,{root:u,isGroup:d}=e,f=c===void 0?i:c;return u?r.value?t/2-l.value/2:f:o&&typeof o.paddingLeftRef.value==`number`?r.value?t/2-l.value/2:i/2+o.paddingLeftRef.value:a&&typeof a.paddingLeftRef.value==`number`?(d?i/2:i)+a.paddingLeftRef.value:0}),iconMarginRight:i(()=>{let{collapsedWidth:t,indent:i,rootIndent:a}=n,{value:o}=l,{root:c}=e;return s.value||!c||!r.value?ut:(a===void 0?i:a)+o+ut-(t+o)/2}),NMenu:t,NSubmenu:a,NMenuOptionGroup:o}}var ft={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},pt={...ft,tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function},mt=ue(pt),ht=n({name:`MenuOption`,props:pt,setup(e){let t=dt(e),{NSubmenu:n,NMenu:r,NMenuOptionGroup:a}=t,{props:o,mergedClsPrefixRef:s,mergedCollapsedRef:c}=r,l=n?n.mergedDisabledRef:a?a.mergedDisabledRef:{value:!1},u=i(()=>l.value||e.disabled);function d(t){let{onClick:n}=e;n&&n(t)}function f(t){u.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),d(t))}return{mergedClsPrefix:s,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:o,dropdownEnabled:C(()=>e.root&&c.value&&o.mode!==`horizontal`&&!u.value),selected:C(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:u,handleClick:f}},render(){let{mergedClsPrefix:e,mergedTheme:t,tmNode:n,menuProps:{renderLabel:r,nodeProps:i}}=this,o=i?.(n.rawNode);return S(),a(`div`,l(o,{role:`menuitem`,class:[`${e}-menu-item`,o?.class]}),[(S(),b(Te,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:`hover`,placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:[`menu-tooltip`]},{default:()=>r?r(n.rawNode):Y(this.title),trigger:()=>(S(),b(lt,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick},null,8,[`tmNode`,`clsPrefix`,`paddingLeft`,`iconMarginRight`,`maxIconSize`,`activeIconSize`,`selected`,`title`,`extra`,`disabled`,`icon`,`onClick`]))},1032,[`theme`,`themeOverrides`,`placement`,`disabled`]))],16)}}),gt={...ft,tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}},_t=ue(gt),vt=n({name:`MenuOptionGroup`,props:gt,setup(e){let t=dt(e),{NSubmenu:n}=t,r=i(()=>n?.mergedDisabledRef.value?!0:e.tmNode.disabled);s(nt,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:r});let{mergedClsPrefixRef:o,props:c}=g(Q);return function(){let{value:n}=o,r=t.paddingLeft.value,{nodeProps:i}=c,s=i?.(e.tmNode.rawNode);return(()=>{let t=A(`45eca6a63be5028b`);return S(),a(`div`,{class:N(`${n}-menu-item-group`),role:`group`},[G(`div`,l(s,{class:[`${n}-menu-item-group-title`,s?.class],style:[s?.style||``,r===void 0?``:`padding-left: ${r}px;`]}),[P(()=>Y(e.title)),e.extra?(S(),a(K,{key:0},[t[0]||=P(` `,-1),P(()=>Y(e.extra))],64)):P(()=>null)],16),G(`div`,null,[P(()=>e.tmNodes.map(e=>Et(e,c)))])],2)})()}}}),yt=[`aria-expanded`,`id`],bt=[`aria-expanded`,`id`],xt={...ft,rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean},St=ue(xt),Ct=n({name:`Submenu`,props:xt,setup(e){let t=dt(e),{NMenu:n,NSubmenu:r}=t,{props:a,mergedCollapsedRef:o,mergedThemeRef:c}=n,l=i(()=>{let{disabled:t}=e;return r?.mergedDisabledRef.value||a.disabled?!0:t}),u=W(!1);s(tt,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:l}),s(nt,null);function d(){let{onClick:t}=e;t&&t()}function f(){l.value||(o.value||n.toggleExpand(e.internalKey),d())}function p(e){u.value=e}return{menuProps:a,mergedTheme:c,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:u,paddingLeft:t.paddingLeft,mergedDisabled:l,mergedValue:n.mergedValueRef,childActive:C(()=>e.virtualChildActive??n.activePathRef.value.includes(e.internalKey)),collapsed:i(()=>a.mode===`horizontal`?!1:o.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:i(()=>!l.value&&(a.mode===`horizontal`||o.value)),handlePopoverShowChange:p,handleClick:f}},render(){let{mergedClsPrefix:e,menuProps:{renderIcon:t,renderLabel:n}}=this,r=()=>{let{isHorizontal:e,paddingLeft:t,collapsed:n,mergedDisabled:r,maxIconSize:i,activeIconSize:o,title:s,childActive:c,icon:u,handleClick:d,menuProps:{nodeProps:f},dropdownShow:p,iconMarginRight:m,tmNode:h,mergedClsPrefix:g,isEllipsisPlaceholder:_,extra:v}=this,y=f?.(h.rawNode);return S(),a(`div`,l(y,{class:[`${g}-menu-item`,y?.class],role:`menuitem`}),[(S(),b(lt,{tmNode:h,paddingLeft:t,collapsed:n,disabled:r,iconMarginRight:m,maxIconSize:i,activeIconSize:o,title:s,extra:v,showArrow:!e,childActive:c,clsPrefix:g,icon:u,hover:p,onClick:d,isEllipsisPlaceholder:_},null,8,[`tmNode`,`paddingLeft`,`collapsed`,`disabled`,`iconMarginRight`,`maxIconSize`,`activeIconSize`,`title`,`extra`,`showArrow`,`childActive`,`clsPrefix`,`icon`,`hover`,`onClick`,`isEllipsisPlaceholder`]))],16)},i=()=>(S(),b(h,null,{default:()=>{let{tmNodes:t,collapsed:n}=this;return n?null:(S(),a(`div`,{key:1,class:N(`${e}-submenu-children`),role:`menu`},[P(()=>t.map(e=>Et(e,this.menuProps)))],2))}},1024));return this.root?(S(),b(we,l({key:2,size:`large`,trigger:`hover`},this.menuProps?.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:`14px`,optionIconSizeLarge:`18px`},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>(S(),a(`div`,{class:N(`${e}-submenu`),role:`menu`,"aria-expanded":!this.collapsed,id:this.domId},[P(()=>r()),this.isHorizontal?P(()=>null):(S(),a(K,{key:1},[P(()=>i())],64))],10,yt))},1040,[`themeOverrides`,`theme`,`value`,`disabled`,`placement`,`keyField`,`labelField`,`childrenField`,`onUpdateShow`,`options`,`onSelect`,`inverted`,`renderIcon`,`renderLabel`])):(S(),a(`div`,{key:3,class:N(`${e}-submenu`),role:`menu`,"aria-expanded":!this.collapsed,id:this.domId},[P(()=>r()),P(()=>i())],10,bt))}});function wt(e){return e.type===`divider`||e.type===`render`}function Tt(e){return e.type===`divider`}function Et(e,t){let{rawNode:n}=e,{show:r}=n;if(r===!1)return null;if(wt(n))return Tt(n)?(S(),b(ot,l({key:e.key},n.props),null,16)):null;let{labelField:i}=t,{key:a,level:o,isGroup:s}=e,c={...n,title:n.title||n[i],extra:n.titleExtra||n.extra,key:a,internalKey:a,level:o,root:o===0,isGroup:s};return e.children?e.isGroup?p(vt,se(c,_t,{tmNode:e,tmNodes:e.children,key:a})):p(Ct,se(c,St,{key:a,rawNodes:n[t.childrenField],tmNodes:e.children,tmNode:e})):p(ht,se(c,mt,{key:a,tmNode:e}))}var Dt=n({name:`Menu`,inheritAttrs:!1,props:{...e.props,options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},disabledField:{type:String,default:`disabled`},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:`vertical`},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:`bottom`},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array},setup(t){let{mergedClsPrefixRef:n,inlineThemeDisabled:r}=J(t),a=e(`Menu`,`-menu`,at,pe,t,n),o=g(Ie,null),c=i(()=>{let{collapsed:e}=t;if(e!==void 0)return e;if(o){let{collapseModeRef:e,collapsedRef:t}=o;if(e.value===`width`)return t.value??!1}return!1}),l=i(()=>{let{keyField:e,childrenField:n,disabledField:r}=t;return Ce(t.items||t.options,{getIgnored(e){return wt(e)},getChildren(e){return e[n]},getDisabled(e){return e[r]},getKey(t){return t[e]??t.name}})}),d=i(()=>new Set(l.value.treeNodes.map(e=>e.key))),{watchProps:f}=t,p=W(null);f?.includes(`defaultValue`)?v(()=>{p.value=t.defaultValue}):p.value=t.defaultValue;let m=_e(R(t,`value`),p),h=W([]),_=()=>{h.value=t.defaultExpandAll?l.value.getNonLeafKeys():t.defaultExpandedNames||t.defaultExpandedKeys||l.value.getPath(m.value,{includeSelf:!1}).keyPath};f?.includes(`defaultExpandedKeys`)?v(_):_();let y=ge(t,[`expandedNames`,`expandedKeys`]),x=_e(y,h),C=i(()=>l.value.treeNodes),w=i(()=>l.value.getPath(m.value).keyPath);s(Q,{props:t,mergedCollapsedRef:c,mergedThemeRef:a,mergedValueRef:m,mergedExpandedKeysRef:x,activePathRef:w,mergedClsPrefixRef:n,isHorizontalRef:i(()=>t.mode===`horizontal`),invertedRef:R(t,`inverted`),doSelect:T,toggleExpand:D});function T(e,n){let{"onUpdate:value":r,onUpdateValue:i,onSelect:a}=t;i&&u(i,e,n),r&&u(r,e,n),a&&u(a,e,n),p.value=e}function E(e){let{"onUpdate:expandedKeys":n,onUpdateExpandedKeys:r,onExpandedNamesChange:i,onOpenNamesChange:a}=t;n&&u(n,e),r&&u(r,e),i&&u(i,e),a&&u(a,e),h.value=e}function D(e){let n=Array.from(x.value),r=n.findIndex(t=>t===e);if(~r)n.splice(r,1);else{if(t.accordion&&d.value.has(e)){let e=n.findIndex(e=>d.value.has(e));e>-1&&n.splice(e,1)}n.push(e)}E(n)}let O=e=>{let n=l.value.getPath(e??m.value,{includeSelf:!1}).keyPath;if(!n.length)return;let r=Array.from(x.value),i=new Set([...r,...n]);t.accordion&&d.value.forEach(e=>{i.has(e)&&!n.includes(e)&&i.delete(e)}),E(Array.from(i))},k=i(()=>{let{inverted:e}=t,{common:{cubicBezierEaseInOut:n},self:r}=a.value,{borderRadius:i,borderColorHorizontal:o,fontSize:s,itemHeight:c,dividerColor:l}=r,u={"--n-divider-color":l,"--n-bezier":n,"--n-font-size":s,"--n-border-color-horizontal":o,"--n-border-radius":i,"--n-item-height":c};return e?(u[`--n-group-text-color`]=r.groupTextColorInverted,u[`--n-color`]=r.colorInverted,u[`--n-item-text-color`]=r.itemTextColorInverted,u[`--n-item-text-color-hover`]=r.itemTextColorHoverInverted,u[`--n-item-text-color-active`]=r.itemTextColorActiveInverted,u[`--n-item-text-color-child-active`]=r.itemTextColorChildActiveInverted,u[`--n-item-text-color-child-active-hover`]=r.itemTextColorChildActiveInverted,u[`--n-item-text-color-active-hover`]=r.itemTextColorActiveHoverInverted,u[`--n-item-icon-color`]=r.itemIconColorInverted,u[`--n-item-icon-color-hover`]=r.itemIconColorHoverInverted,u[`--n-item-icon-color-active`]=r.itemIconColorActiveInverted,u[`--n-item-icon-color-active-hover`]=r.itemIconColorActiveHoverInverted,u[`--n-item-icon-color-child-active`]=r.itemIconColorChildActiveInverted,u[`--n-item-icon-color-child-active-hover`]=r.itemIconColorChildActiveHoverInverted,u[`--n-item-icon-color-collapsed`]=r.itemIconColorCollapsedInverted,u[`--n-item-text-color-horizontal`]=r.itemTextColorHorizontalInverted,u[`--n-item-text-color-hover-horizontal`]=r.itemTextColorHoverHorizontalInverted,u[`--n-item-text-color-active-horizontal`]=r.itemTextColorActiveHorizontalInverted,u[`--n-item-text-color-child-active-horizontal`]=r.itemTextColorChildActiveHorizontalInverted,u[`--n-item-text-color-child-active-hover-horizontal`]=r.itemTextColorChildActiveHoverHorizontalInverted,u[`--n-item-text-color-active-hover-horizontal`]=r.itemTextColorActiveHoverHorizontalInverted,u[`--n-item-icon-color-horizontal`]=r.itemIconColorHorizontalInverted,u[`--n-item-icon-color-hover-horizontal`]=r.itemIconColorHoverHorizontalInverted,u[`--n-item-icon-color-active-horizontal`]=r.itemIconColorActiveHorizontalInverted,u[`--n-item-icon-color-active-hover-horizontal`]=r.itemIconColorActiveHoverHorizontalInverted,u[`--n-item-icon-color-child-active-horizontal`]=r.itemIconColorChildActiveHorizontalInverted,u[`--n-item-icon-color-child-active-hover-horizontal`]=r.itemIconColorChildActiveHoverHorizontalInverted,u[`--n-arrow-color`]=r.arrowColorInverted,u[`--n-arrow-color-hover`]=r.arrowColorHoverInverted,u[`--n-arrow-color-active`]=r.arrowColorActiveInverted,u[`--n-arrow-color-active-hover`]=r.arrowColorActiveHoverInverted,u[`--n-arrow-color-child-active`]=r.arrowColorChildActiveInverted,u[`--n-arrow-color-child-active-hover`]=r.arrowColorChildActiveHoverInverted,u[`--n-item-color-hover`]=r.itemColorHoverInverted,u[`--n-item-color-active`]=r.itemColorActiveInverted,u[`--n-item-color-active-hover`]=r.itemColorActiveHoverInverted,u[`--n-item-color-active-collapsed`]=r.itemColorActiveCollapsedInverted):(u[`--n-group-text-color`]=r.groupTextColor,u[`--n-color`]=r.color,u[`--n-item-text-color`]=r.itemTextColor,u[`--n-item-text-color-hover`]=r.itemTextColorHover,u[`--n-item-text-color-active`]=r.itemTextColorActive,u[`--n-item-text-color-child-active`]=r.itemTextColorChildActive,u[`--n-item-text-color-child-active-hover`]=r.itemTextColorChildActiveHover,u[`--n-item-text-color-active-hover`]=r.itemTextColorActiveHover,u[`--n-item-icon-color`]=r.itemIconColor,u[`--n-item-icon-color-hover`]=r.itemIconColorHover,u[`--n-item-icon-color-active`]=r.itemIconColorActive,u[`--n-item-icon-color-active-hover`]=r.itemIconColorActiveHover,u[`--n-item-icon-color-child-active`]=r.itemIconColorChildActive,u[`--n-item-icon-color-child-active-hover`]=r.itemIconColorChildActiveHover,u[`--n-item-icon-color-collapsed`]=r.itemIconColorCollapsed,u[`--n-item-text-color-horizontal`]=r.itemTextColorHorizontal,u[`--n-item-text-color-hover-horizontal`]=r.itemTextColorHoverHorizontal,u[`--n-item-text-color-active-horizontal`]=r.itemTextColorActiveHorizontal,u[`--n-item-text-color-child-active-horizontal`]=r.itemTextColorChildActiveHorizontal,u[`--n-item-text-color-child-active-hover-horizontal`]=r.itemTextColorChildActiveHoverHorizontal,u[`--n-item-text-color-active-hover-horizontal`]=r.itemTextColorActiveHoverHorizontal,u[`--n-item-icon-color-horizontal`]=r.itemIconColorHorizontal,u[`--n-item-icon-color-hover-horizontal`]=r.itemIconColorHoverHorizontal,u[`--n-item-icon-color-active-horizontal`]=r.itemIconColorActiveHorizontal,u[`--n-item-icon-color-active-hover-horizontal`]=r.itemIconColorActiveHoverHorizontal,u[`--n-item-icon-color-child-active-horizontal`]=r.itemIconColorChildActiveHorizontal,u[`--n-item-icon-color-child-active-hover-horizontal`]=r.itemIconColorChildActiveHoverHorizontal,u[`--n-arrow-color`]=r.arrowColor,u[`--n-arrow-color-hover`]=r.arrowColorHover,u[`--n-arrow-color-active`]=r.arrowColorActive,u[`--n-arrow-color-active-hover`]=r.arrowColorActiveHover,u[`--n-arrow-color-child-active`]=r.arrowColorChildActive,u[`--n-arrow-color-child-active-hover`]=r.arrowColorChildActiveHover,u[`--n-item-color-hover`]=r.itemColorHover,u[`--n-item-color-active`]=r.itemColorActive,u[`--n-item-color-active-hover`]=r.itemColorActiveHover,u[`--n-item-color-active-collapsed`]=r.itemColorActiveCollapsed),u}),A=r?j(`menu`,i(()=>t.inverted?`a`:`b`),k,t):void 0,M=fe(),N=W(null),ee=W(null),P=!0,F=()=>{P?P=!1:N.value?.sync({showAllItemsBeforeCalculate:!0})};function I(){return document.getElementById(M)}let L=W(-1);function z(e){L.value=t.options.length-e}function B(e){e||(L.value=-1)}let V=i(()=>{let e=L.value;return{children:e===-1?[]:t.options.slice(e)}}),te=i(()=>{let{childrenField:e,disabledField:n,keyField:r}=t;return Ce([V.value],{getIgnored(e){return wt(e)},getChildren(t){return t[e]},getDisabled(e){return e[n]},getKey(e){return e[r]??e.name}})}),H=i(()=>Ce([{}]).treeNodes[0]);function U(){if(L.value===-1)return S(),b(Ct,{root:!0,level:0,key:`__ellpisisGroupPlaceholder__`,internalKey:`__ellpisisGroupPlaceholder__`,title:`···`,tmNode:H.value,domId:M,isEllipsisPlaceholder:!0},null,8,[`tmNode`,`domId`]);let e=te.value.treeNodes[0],t=w.value,n=!!e.children?.some(e=>t.includes(e.key));return S(),b(Ct,{level:0,root:!0,key:`__ellpisisGroup__`,internalKey:`__ellpisisGroup__`,title:`···`,virtualChildActive:n,tmNode:e,domId:M,rawNodes:e.rawNode.children||[],tmNodes:e.children||[],isEllipsisPlaceholder:!0},null,8,[`virtualChildActive`,`tmNode`,`domId`,`rawNodes`,`tmNodes`])}return{mergedClsPrefix:n,controlledExpandedKeys:y,uncontrolledExpanededKeys:h,mergedExpandedKeys:x,uncontrolledValue:p,mergedValue:m,activePath:w,tmNodes:C,mergedTheme:a,mergedCollapsed:c,cssVars:r?void 0:k,themeClass:A?.themeClass,overflowRef:N,counterRef:ee,updateCounter:()=>{},onResize:F,onUpdateOverflow:B,onUpdateCount:z,renderCounter:U,getCounter:I,onRender:A?.onRender,showOption:O,deriveResponsiveState:F}},render(){let{mergedClsPrefix:e,mode:t,themeClass:n,onRender:r}=this;r?.();let i=()=>this.tmNodes.map(e=>Et(e,this.$props)),a=t===`horizontal`&&this.responsive,o=()=>p(`div`,l(this.$attrs,{role:t===`horizontal`?`menubar`:`menu`,class:[`${e}-menu`,n,`${e}-menu--${t}`,a&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),a?(S(),b(Ne,{key:2,ref:`overflowRef`,onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:i,counter:this.renderCounter},1032,[`onUpdateOverflow`,`getCounter`,`onUpdateCount`,`updateCounter`])):i());return a?(S(),b(ae,{key:3,onResize:this.onResize},{default:o},1032,[`onResize`])):o()}}),Ot={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 24 24`},kt=n({name:`AppFolder24Filled`,render:function(e,t){return S(),a(`svg`,Ot,t[0]||=[G(`g`,{fill:`none`},[G(`path`,{d:`M18.25 3A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75A2.75 2.75 0 0 1 5.75 3h12.5zm0 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25zm-8.498 8c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 9.752 18h-2a1.75 1.75 0 0 1-1.75-1.75v-2c0-.966.783-1.75 1.75-1.75h2zm6.497 0c.967 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 16.25 18h-2a1.75 1.75 0 0 1-1.75-1.75v-2c0-.966.784-1.75 1.75-1.75h2zM9.751 6c.966 0 1.75.784 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-2A1.75 1.75 0 0 1 6 9.75v-2C6 6.784 6.784 6 7.75 6h2zm6.497 0c.967 0 1.75.784 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-2a1.75 1.75 0 0 1-1.75-1.75v-2c0-.966.784-1.75 1.75-1.75h2z`,fill:`currentColor`})],-1)])}}),At={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 16 16`},jt=n({name:`CalendarInfo16Regular`,render:function(e,t){return S(),a(`svg`,At,t[0]||=[G(`g`,{fill:`none`},[G(`path`,{d:`M14 4.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h1.757a5.507 5.507 0 0 1-.657-1H4.5A1.5 1.5 0 0 1 3 11.5V6h4.337c.895-.63 1.986-1 3.163-1c1.33 0 2.55.472 3.5 1.257V4.5zm-3.5.5H3v-.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5V5h-2.5zm-.625 3.5a.625.625 0 1 1 1.25 0a.625.625 0 0 1-1.25 0zm1.125 4a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0v2zm-5-2a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0zm1 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0z`,fill:`currentColor`})],-1)])}}),Mt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 16 16`},Nt=n({name:`DrinkCoffee16Regular`,render:function(e,t){return S(),a(`svg`,Mt,t[0]||=[G(`g`,{fill:`none`},[G(`path`,{d:`M2.5 3A1.5 1.5 0 0 0 1 4.5v3A5.5 5.5 0 0 0 11.793 9h.707a2.5 2.5 0 0 0 0-5h-.585A1.5 1.5 0 0 0 10.5 3h-8zM12 5h.5a1.5 1.5 0 0 1 0 3h-.522c.014-.165.022-.331.022-.5V5zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v3a4.5 4.5 0 0 1-9 0v-3z`,fill:`currentColor`})],-1)])}}),Pt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 24 24`},Ft=n({name:`Home24Regular`,render:function(e,t){return S(),a(`svg`,Pt,t[0]||=[G(`g`,{fill:`none`},[G(`path`,{d:`M10.55 2.532a2.25 2.25 0 0 1 2.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.803a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-5.5a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5.5a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 3 19.747V9.944c0-.663.293-1.292.8-1.72l6.75-5.692zm1.933 1.147a.75.75 0 0 0-.966 0L4.767 9.37a.75.75 0 0 0-.267.573v9.803c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-5.5c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V9.944a.75.75 0 0 0-.267-.573l-6.75-5.692z`,fill:`currentColor`})],-1)])}}),It={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 24 24`},Lt=n({name:`PaintBrush24Regular`,render:function(e,t){return S(),a(`svg`,It,t[0]||=[G(`g`,{fill:`none`},[G(`path`,{d:`M5.75 2a.75.75 0 0 0-.75.75v11.5a2.25 2.25 0 0 0 2.25 2.25H9.5v3a2.5 2.5 0 1 0 5 0v-3h2.25A2.25 2.25 0 0 0 19 14.25V2.75a.75.75 0 0 0-.75-.75H5.75zm.75 9V3.5h6v1.752a.75.75 0 1 0 1.5 0V3.5h1v2.751a.75.75 0 1 0 1.5 0V3.5h1V11h-11zm0 3.25V12.5h11v1.75a.75.75 0 0 1-.75.75h-3a.75.75 0 0 0-.75.75v3.75a1 1 0 0 1-2 0v-3.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 1-.75-.75z`,fill:`currentColor`})],-1)])}}),Rt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 24 24`},zt=n({name:`Payment24Regular`,render:function(e,t){return S(),a(`svg`,Rt,t[0]||=[G(`g`,{fill:`none`},[G(`path`,{d:`M15.75 14.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5zM4.75 5A2.75 2.75 0 0 0 2 7.75v8.5A2.75 2.75 0 0 0 4.75 19h14.5A2.75 2.75 0 0 0 22 16.25v-8.5A2.75 2.75 0 0 0 19.25 5H4.75zM3.5 16.25V11h17v5.25c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25zm0-6.75V7.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25V9.5h-17z`,fill:`currentColor`})],-1)])}}),Bt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 24 24`},Vt=n({name:`Person24Regular`,render:function(e,t){return S(),a(`svg`,Bt,t[0]||=[G(`g`,{fill:`none`},[G(`path`,{d:`M17.754 14a2.249 2.249 0 0 1 2.249 2.25v.575c0 .894-.32 1.759-.901 2.438c-1.57 1.833-3.957 2.738-7.102 2.738c-3.146 0-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.899-2.434v-.578A2.249 2.249 0 0 1 6.253 14h11.501zm0 1.5H6.252a.749.749 0 0 0-.749.75v.577c0 .535.192 1.053.54 1.46c1.253 1.469 3.219 2.214 5.957 2.214s4.706-.745 5.962-2.213a2.25 2.25 0 0 0 .54-1.463v-.576a.749.749 0 0 0-.748-.749zM12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7z`,fill:`currentColor`})],-1)])}}),Ht={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 24 24`},Ut=n({name:`PersonCircle24Regular`,render:function(e,t){return S(),a(`svg`,Ht,t[0]||=[G(`g`,{fill:`none`},[G(`path`,{d:`M17 13.5a1.5 1.5 0 0 0-1.5-1.5h-7A1.5 1.5 0 0 0 7 13.5v.5c0 1.971 1.86 4 5 4c3.14 0 5-2.029 5-4v-.5zm-2.25-5.25a2.75 2.75 0 1 0-5.5 0a2.75 2.75 0 0 0 5.5 0zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10zm-1.5 0a8.5 8.5 0 1 0-17 0a8.5 8.5 0 0 0 17 0z`,fill:`currentColor`})],-1)])}}),Wt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 24 24`},Gt=n({name:`MenuOpenRound`,render:function(e,t){return S(),a(`svg`,Wt,t[0]||=[G(`path`,{d:`M4 18h11c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h8c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h11c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm17.3 7.88L17.42 12l2.88-2.88a.996.996 0 1 0-1.41-1.41L15.3 11.3a.996.996 0 0 0 0 1.41l3.59 3.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42z`,fill:`currentColor`},null,-1)])}}),Kt={class:`card-container`},qt={class:`left`},Jt={class:`right`},Yt={class:`line1`},Xt={class:`line2`},Zt={key:1},Qt={class:`line3`},$t=je({__name:`UserHovercard`,props:{rsid:{type:String,default:null},trigger:{type:String,default:`hover`}},setup(e){let n=De(),i=W(!0),o=e,s=W(``),c=W(``),l=W(``);async function u(e){if(!e||s.value||!o.rsid)return;let t=await n.userGet(o.rsid,`nickname,bio,avatar`);t&&(s.value=t.nickname,c.value=t.bio||`这个入很懒，什么都没写:(`,l.value=t.avatar),i.value=!1}return(n,f)=>{let p=r,h=ke,g=Oe,_=Ee,v=ve;return S(),b(v,{trigger:e.trigger,delay:500,duration:200,"show-arrow":!1,style:{"border-radius":`12px`},"onUpdate:show":u},{trigger:t(()=>[d(n.$slots,`default`,{},()=>[I(p,null,{default:t(()=>[...f[0]||=[m(`触发器Slot`,-1)]]),_:1})],!0)]),default:t(()=>[G(`div`,Kt,[G(`div`,qt,[T(i)?(S(),b(h,{key:0,circle:``,height:64})):!T(i)&&T(l)?(S(),b(g,{key:1,round:``,size:64,src:`${T(ce)}/${T(l)}`},null,8,[`src`])):(S(),b(T(Ae),{key:2,seed:o.rsid,size:64},null,8,[`seed`]))]),G(`div`,Jt,[G(`div`,Yt,[T(i)?(S(),b(h,{key:0,width:149,height:20,text:``})):(S(),b(_,{key:1,style:{"max-width":`149px`}},{default:t(()=>[m(k(T(s)),1)]),_:1}))]),G(`div`,Xt,[T(i)?(S(),b(h,{key:0,width:94,height:12,text:``})):(S(),a(`span`,Zt,`id:\xA0`+k(o.rsid),1))]),G(`div`,Qt,[T(i)?(S(),b(h,{key:0,width:149,height:12,text:``})):(S(),b(_,{key:1,style:{"max-width":`149px`},"line-clamp":1},{default:t(()=>[m(k(T(c)),1)]),_:1}))])])])]),_:3},8,[`trigger`])}}},[[`__scopeId`,`data-v-ac481ce3`]]),en=je({__name:`DashboardView`,setup(e){let{themeColor:n,headerLogoContent:s}=de(me()),l=ee(),u=L(),d=O(),f=he(),h=De(),g=W(window.innerWidth<768),_=W(!0),v=W(!g.value),y=[{label:`仪表盘主页`,key:`home`,icon:E(Ft)},{label:`用户中心`,key:`user`,icon:E(Vt)},{label:`九昌支付`,key:`pay`,icon:E(zt)},{label:`主题编辑`,key:`theme`,icon:E(Lt)},{label:`关于...`,key:`about`,icon:E(jt)},{label:`捐款`,key:`donate`,icon:E(Nt)}],C=i(()=>u.path.match(/\/dashboard\/([^/]+)/)[1]),w=W(``);function E(e){return()=>p(X,null,{default:()=>p(e)})}function D(e){g.value&&v.value&&(v.value=!1),e!==u.path.match(/\/dashboard\/([^/]+)/)[1]&&(d.start(),l.push(`/dashboard/${e}`))}function A(){g.value=window.innerWidth<768}return c(async()=>{window.addEventListener(`resize`,A),await document.fonts.load(`28px "RISINGSUNLOGO"`),w.value=(await h.userGet(f.state.rsid,`avatar`)).avatar,_.value=!1}),x(()=>{window.removeEventListener(`resize`,A)}),(e,i)=>{let c=r,u=ke,p=Oe,h=Ke,x=Dt,E=et,O=te(`RouterView`),A=Ue,j=He;return S(),b(j,{position:`absolute`},{default:t(()=>[I(h,{bordered:``,style:{height:`44px`,display:`flex`}},{default:t(()=>[I(c,{text:``,style:{"font-size":`24px`,padding:`10px 15px`},onClick:i[0]||=e=>v.value=!T(v)},{default:t(()=>[I(T(X),{style:q(T(v)?``:`transform: scaleX(-1)`)},{default:t(()=>[I(T(Gt))]),_:1},8,[`style`])]),_:1}),T(_)?(S(),b(u,{key:0,width:109,height:24,style:{margin:`10px 0`}})):(S(),b(c,{key:1,text:``,class:`header-logo`,color:T(n),onClick:i[1]||=e=>{T(d).start(),T(l).push(`/`)}},{default:t(()=>[m(k(T(s)),1)]),_:1},8,[`color`])),I(c,{text:``,style:{"font-size":`28px`,padding:`8px 0`,"margin-left":`auto`}},{default:t(()=>[I(T(X),null,{default:t(()=>[I(T(kt))]),_:1})]),_:1}),I($t,{rsid:T(f).state.rsid},{default:t(()=>[I(c,{text:``,style:{"font-size":`28px`,padding:`8px 15px`}},{default:t(()=>[T(w)?(S(),b(p,{key:1,round:``,size:23.3,src:`${T(ce)}/${T(w)}`},null,8,[`src`])):(S(),b(T(X),{key:0},{default:t(()=>[I(T(Ut))]),_:1}))]),_:1})]),_:1},8,[`rsid`])]),_:1}),I(j,{"has-sider":``,position:`absolute`,style:{top:`44px`}},{default:t(()=>[I(E,{bordered:``,position:T(g)?`absolute`:`static`,collapsed:!T(v),"collapse-mode":`width`,"collapsed-width":58,width:240,style:{"z-index":`1001`}},{default:t(()=>[I(x,{accordion:``,"icon-size":24,options:y,value:T(C),"collapsed-width":58,"onUpdate:value":D},null,8,[`value`])]),_:1},8,[`position`,`collapsed`]),I(A,{style:q(T(g)?`margin-left: 58px`:``),"native-scrollbar":!1,"content-style":`padding: `+(T(g)?`10px;`:`24px;`)},{default:t(()=>[I(M,{name:`menu-mask`},{default:t(()=>[T(g)&&T(v)?(S(),a(`div`,{key:0,class:`menu-mask`,onClick:i[2]||=e=>v.value=!1})):o(``,!0)]),_:1}),I(O)]),_:1},8,[`style`,`content-style`])]),_:1})]),_:1})}}},[[`__scopeId`,`data-v-9eaec0b3`]]);export{en as default};