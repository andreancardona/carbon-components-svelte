let a=document.createElement("style");a.innerHTML="",document.head.appendChild(a);import{S as n,i as s,s as t,w as e,g as p,k as o,l as c,o as l,x as r,y as u,q as i,I as $,A as g,Y as k,J as f,B as m,C as d,G as y,D as h,E as b,b as x,F as T,t as v,v as w,z as E,j as _,c as j,p as C,a as I,N as A,r as F,m as L,a0 as S,d as D,K as B,h as M,n as N,M as H}from"./index.6b674a45.js";import"./Button.f0f995b5.js";import"./index.77bc22b8.js";import{C as P,P as U}from"./Preview.da06bf80.js";import"./ChevronDown16.5983f6dc.js";import{C as R}from"./Close16.3e9706ae.js";import"./Loading.1494bed2.js";import"./Column.6ef18044.js";import"./Content.7baad37e.js";import"./store.4e2c42a1.js";function V(a){let n,s,t,m=[a[0]],d={};for(let a=0;a<m.length;a+=1)d=e(d,m[a]);return{c(){n=p("span"),this.h()},l(a){n=o(a,"SPAN",{}),c(n).forEach(l),this.h()},h(){r(n,d),u(n,"bx--tag",!0),u(n,"bx--skeleton",!0)},m(e,p){i(e,n,p),s||(t=[$(n,"click",a[1]),$(n,"mouseover",a[2]),$(n,"mouseenter",a[3]),$(n,"mouseleave",a[4])],s=!0)},p(a,[s]){r(n,d=g(m,[1&s&&a[0]])),u(n,"bx--tag",!0),u(n,"bx--skeleton",!0)},i:k,o:k,d(a){a&&l(n),s=!1,f(t)}}}function q(a,n,s){const t=[];let p=m(n,t);return a.$$set=a=>{n=e(e({},n),d(a)),s(0,p=m(n,t))},[p,function(n){y(a,n)},function(n){y(a,n)},function(n){y(a,n)},function(n){y(a,n)}]}class z extends n{constructor(a){super(),s(this,a,q,V,t,{})}}const G=a=>({}),J=a=>({props:{class:"bx--tag__label"}});function K(a){let n,s,t,k,m;const d=a[8].default,y=w(d,a,a[7],null);let h=[a[6],{class:s=(a[0]&&"bx--tag--"+a[0])+" "+a[6].class}],b={};for(let a=0;a<h.length;a+=1)b=e(b,h[a]);return{c(){n=p("span"),y&&y.c(),this.h()},l(a){n=o(a,"SPAN",{class:!0});var s=c(n);y&&y.l(s),s.forEach(l),this.h()},h(){r(n,b),u(n,"bx--tag",!0),u(n,"bx--tag--disabled",a[2])},m(s,e){i(s,n,e),y&&y.m(n,null),t=!0,k||(m=[$(n,"click",a[13]),$(n,"mouseover",a[14]),$(n,"mouseenter",a[15]),$(n,"mouseleave",a[16])],k=!0)},p(a,e){y&&y.p&&128&e&&E(y,d,a,a[7],e,null,null),r(n,b=g(h,[64&e&&a[6],(!t||65&e&&s!==(s=(a[0]&&"bx--tag--"+a[0])+" "+a[6].class))&&{class:s}])),u(n,"bx--tag",!0),u(n,"bx--tag--disabled",a[2])},i(a){t||(v(y,a),t=!0)},o(a){x(y,a),t=!1},d(a){a&&l(n),y&&y.d(a),k=!1,f(m)}}}function O(a){let n,s,t,k,m,d,y,h;const b=a[8].default,T=w(b,a,a[7],J),B=T||function(a){let n,s;return{c(){n=p("span"),s=M(a[0]),this.h()},l(t){n=o(t,"SPAN",{});var e=c(n);s=N(e,a[0]),e.forEach(l),this.h()},h(){u(n,"bx--tag__label",!0)},m(a,t){i(a,n,t),F(n,s)},p(a,n){1&n&&H(s,a[0])},d(a){a&&l(n)}}}(a);k=new R({});let P=[{"aria-label":a[4]},{id:a[5]},a[6],{class:m=(a[0]&&"bx--tag--"+a[0])+" "+a[6].class}],U={};for(let a=0;a<P.length;a+=1)U=e(U,P[a]);return{c(){n=p("div"),B&&B.c(),s=_(),t=p("button"),j(k.$$.fragment),this.h()},l(a){n=o(a,"DIV",{"aria-label":!0,id:!0,class:!0});var e=c(n);B&&B.l(e),s=C(e),t=o(e,"BUTTON",{"aria-labelledby":!0,disabled:!0,title:!0});var p=c(t);I(k.$$.fragment,p),p.forEach(l),e.forEach(l),this.h()},h(){A(t,"aria-labelledby",a[5]),t.disabled=a[2],A(t,"title",a[4]),u(t,"bx--tag__close-icon",!0),r(n,U),u(n,"bx--tag",!0),u(n,"bx--tag--disabled",a[2]),u(n,"bx--tag--filter",a[1])},m(e,p){i(e,n,p),B&&B.m(n,null),F(n,s),F(n,t),L(k,t,null),d=!0,y||(h=[$(t,"click",S(a[9])),$(t,"mouseover",a[10]),$(t,"mouseenter",a[11]),$(t,"mouseleave",a[12])],y=!0)},p(a,s){T?T.p&&128&s&&E(T,b,a,a[7],s,G,J):B&&B.p&&1&s&&B.p(a,s),(!d||32&s)&&A(t,"aria-labelledby",a[5]),(!d||4&s)&&(t.disabled=a[2]),(!d||16&s)&&A(t,"title",a[4]),r(n,U=g(P,[(!d||16&s)&&{"aria-label":a[4]},(!d||32&s)&&{id:a[5]},64&s&&a[6],(!d||65&s&&m!==(m=(a[0]&&"bx--tag--"+a[0])+" "+a[6].class))&&{class:m}])),u(n,"bx--tag",!0),u(n,"bx--tag--disabled",a[2]),u(n,"bx--tag--filter",a[1])},i(a){d||(v(B,a),v(k.$$.fragment,a),d=!0)},o(a){x(B,a),x(k.$$.fragment,a),d=!1},d(a){a&&l(n),B&&B.d(a),D(k),y=!1,f(h)}}}function Y(a){let n,s;const t=[a[6]];let p={};for(let a=0;a<t.length;a+=1)p=e(p,t[a]);return n=new z({props:p}),n.$on("click",a[17]),n.$on("mouseover",a[18]),n.$on("mouseenter",a[19]),n.$on("mouseleave",a[20]),{c(){j(n.$$.fragment)},l(a){I(n.$$.fragment,a)},m(a,t){L(n,a,t),s=!0},p(a,s){const e=64&s?g(t,[B(a[6])]):{};n.$set(e)},i(a){s||(v(n.$$.fragment,a),s=!0)},o(a){x(n.$$.fragment,a),s=!1},d(a){D(n,a)}}}function Q(a){let n,s,t,e;const p=[Y,O,K],o=[];function c(a,n){return a[3]?0:a[1]?1:2}return n=c(a),s=o[n]=p[n](a),{c(){s.c(),t=h()},l(a){s.l(a),t=h()},m(a,s){o[n].m(a,s),i(a,t,s),e=!0},p(a,[e]){let l=n;n=c(a),n===l?o[n].p(a,e):(b(),x(o[l],1,1,()=>{o[l]=null}),T(),s=o[n],s||(s=o[n]=p[n](a),s.c()),v(s,1),s.m(t.parentNode,t))},i(a){e||(v(s),e=!0)},o(a){x(s),e=!1},d(a){o[n].d(a),a&&l(t)}}}function W(a,n,s){const t=["type","filter","disabled","skeleton","title","id"];let p=m(n,t),{$$slots:o={},$$scope:c}=n,{type:l}=n,{filter:r=!1}=n,{disabled:u=!1}=n,{skeleton:i=!1}=n,{title:$="Clear filter"}=n,{id:g="ccs-"+Math.random().toString(36)}=n;return a.$$set=a=>{n=e(e({},n),d(a)),s(6,p=m(n,t)),"type"in a&&s(0,l=a.type),"filter"in a&&s(1,r=a.filter),"disabled"in a&&s(2,u=a.disabled),"skeleton"in a&&s(3,i=a.skeleton),"title"in a&&s(4,$=a.title),"id"in a&&s(5,g=a.id),"$$scope"in a&&s(7,c=a.$$scope)},[l,r,u,i,$,g,p,c,o,function(n){y(a,n)},function(n){y(a,n)},function(n){y(a,n)},function(n){y(a,n)},function(n){y(a,n)},function(n){y(a,n)},function(n){y(a,n)},function(n){y(a,n)},function(n){y(a,n)},function(n){y(a,n)},function(n){y(a,n)},function(n){y(a,n)}]}class X extends n{constructor(a){super(),s(this,a,W,Q,t,{type:0,filter:1,disabled:2,skeleton:3,title:4,id:5})}}function Z(a){let n;return{c(){n=M("IBM Cloud")},l(a){n=N(a,"IBM Cloud")},m(a,s){i(a,n,s)},d(a){a&&l(n)}}}function aa(a){let n,s;return n=new X({props:{$$slots:{default:[Z]},$$scope:{ctx:a}}}),{c(){j(n.$$.fragment)},l(a){I(n.$$.fragment,a)},m(a,t){L(n,a,t),s=!0},p(a,s){const t={};2&s&&(t.$$scope={dirty:s,ctx:a}),n.$set(t)},i(a){s||(v(n.$$.fragment,a),s=!0)},o(a){x(n.$$.fragment,a),s=!1},d(a){D(n,a)}}}function na(a){let n;return{c(){n=M("red")},l(a){n=N(a,"red")},m(a,s){i(a,n,s)},d(a){a&&l(n)}}}function sa(a){let n;return{c(){n=M("magenta")},l(a){n=N(a,"magenta")},m(a,s){i(a,n,s)},d(a){a&&l(n)}}}function ta(a){let n;return{c(){n=M("purple")},l(a){n=N(a,"purple")},m(a,s){i(a,n,s)},d(a){a&&l(n)}}}function ea(a){let n;return{c(){n=M("blue")},l(a){n=N(a,"blue")},m(a,s){i(a,n,s)},d(a){a&&l(n)}}}function pa(a){let n;return{c(){n=M("cyan")},l(a){n=N(a,"cyan")},m(a,s){i(a,n,s)},d(a){a&&l(n)}}}function oa(a){let n;return{c(){n=M("teal")},l(a){n=N(a,"teal")},m(a,s){i(a,n,s)},d(a){a&&l(n)}}}function ca(a){let n;return{c(){n=M("green")},l(a){n=N(a,"green")},m(a,s){i(a,n,s)},d(a){a&&l(n)}}}function la(a){let n;return{c(){n=M("gray")},l(a){n=N(a,"gray")},m(a,s){i(a,n,s)},d(a){a&&l(n)}}}function ra(a){let n;return{c(){n=M("cool-gray")},l(a){n=N(a,"cool-gray")},m(a,s){i(a,n,s)},d(a){a&&l(n)}}}function ua(a){let n;return{c(){n=M("warm-gray")},l(a){n=N(a,"warm-gray")},m(a,s){i(a,n,s)},d(a){a&&l(n)}}}function ia(a){let n;return{c(){n=M("high-contrast")},l(a){n=N(a,"high-contrast")},m(a,s){i(a,n,s)},d(a){a&&l(n)}}}function $a(a){let n,s,t,e,p,o,c,r,u,$,g,k,f,m,d,y,h,b,T,w,E,A;return n=new X({props:{type:"red",$$slots:{default:[na]},$$scope:{ctx:a}}}),t=new X({props:{type:"magenta",$$slots:{default:[sa]},$$scope:{ctx:a}}}),p=new X({props:{type:"purple",$$slots:{default:[ta]},$$scope:{ctx:a}}}),c=new X({props:{type:"blue",$$slots:{default:[ea]},$$scope:{ctx:a}}}),u=new X({props:{type:"cyan",$$slots:{default:[pa]},$$scope:{ctx:a}}}),g=new X({props:{type:"teal",$$slots:{default:[oa]},$$scope:{ctx:a}}}),f=new X({props:{type:"green",$$slots:{default:[ca]},$$scope:{ctx:a}}}),d=new X({props:{type:"gray",$$slots:{default:[la]},$$scope:{ctx:a}}}),h=new X({props:{type:"cool-gray",$$slots:{default:[ra]},$$scope:{ctx:a}}}),T=new X({props:{type:"warm-gray",$$slots:{default:[ua]},$$scope:{ctx:a}}}),E=new X({props:{type:"high-contrast",$$slots:{default:[ia]},$$scope:{ctx:a}}}),{c(){j(n.$$.fragment),s=_(),j(t.$$.fragment),e=_(),j(p.$$.fragment),o=_(),j(c.$$.fragment),r=_(),j(u.$$.fragment),$=_(),j(g.$$.fragment),k=_(),j(f.$$.fragment),m=_(),j(d.$$.fragment),y=_(),j(h.$$.fragment),b=_(),j(T.$$.fragment),w=_(),j(E.$$.fragment)},l(a){I(n.$$.fragment,a),s=C(a),I(t.$$.fragment,a),e=C(a),I(p.$$.fragment,a),o=C(a),I(c.$$.fragment,a),r=C(a),I(u.$$.fragment,a),$=C(a),I(g.$$.fragment,a),k=C(a),I(f.$$.fragment,a),m=C(a),I(d.$$.fragment,a),y=C(a),I(h.$$.fragment,a),b=C(a),I(T.$$.fragment,a),w=C(a),I(E.$$.fragment,a)},m(a,l){L(n,a,l),i(a,s,l),L(t,a,l),i(a,e,l),L(p,a,l),i(a,o,l),L(c,a,l),i(a,r,l),L(u,a,l),i(a,$,l),L(g,a,l),i(a,k,l),L(f,a,l),i(a,m,l),L(d,a,l),i(a,y,l),L(h,a,l),i(a,b,l),L(T,a,l),i(a,w,l),L(E,a,l),A=!0},p(a,s){const e={};2&s&&(e.$$scope={dirty:s,ctx:a}),n.$set(e);const o={};2&s&&(o.$$scope={dirty:s,ctx:a}),t.$set(o);const l={};2&s&&(l.$$scope={dirty:s,ctx:a}),p.$set(l);const r={};2&s&&(r.$$scope={dirty:s,ctx:a}),c.$set(r);const i={};2&s&&(i.$$scope={dirty:s,ctx:a}),u.$set(i);const $={};2&s&&($.$$scope={dirty:s,ctx:a}),g.$set($);const k={};2&s&&(k.$$scope={dirty:s,ctx:a}),f.$set(k);const m={};2&s&&(m.$$scope={dirty:s,ctx:a}),d.$set(m);const y={};2&s&&(y.$$scope={dirty:s,ctx:a}),h.$set(y);const b={};2&s&&(b.$$scope={dirty:s,ctx:a}),T.$set(b);const x={};2&s&&(x.$$scope={dirty:s,ctx:a}),E.$set(x)},i(a){A||(v(n.$$.fragment,a),v(t.$$.fragment,a),v(p.$$.fragment,a),v(c.$$.fragment,a),v(u.$$.fragment,a),v(g.$$.fragment,a),v(f.$$.fragment,a),v(d.$$.fragment,a),v(h.$$.fragment,a),v(T.$$.fragment,a),v(E.$$.fragment,a),A=!0)},o(a){x(n.$$.fragment,a),x(t.$$.fragment,a),x(p.$$.fragment,a),x(c.$$.fragment,a),x(u.$$.fragment,a),x(g.$$.fragment,a),x(f.$$.fragment,a),x(d.$$.fragment,a),x(h.$$.fragment,a),x(T.$$.fragment,a),x(E.$$.fragment,a),A=!1},d(a){D(n,a),a&&l(s),D(t,a),a&&l(e),D(p,a),a&&l(o),D(c,a),a&&l(r),D(u,a),a&&l($),D(g,a),a&&l(k),D(f,a),a&&l(m),D(d,a),a&&l(y),D(h,a),a&&l(b),D(T,a),a&&l(w),D(E,a)}}}function ga(a){let n;return{c(){n=M("Filterable")},l(a){n=N(a,"Filterable")},m(a,s){i(a,n,s)},d(a){a&&l(n)}}}function ka(a){let n,s;return n=new X({props:{filter:!0,$$slots:{default:[ga]},$$scope:{ctx:a}}}),n.$on("click",a[0]),{c(){j(n.$$.fragment)},l(a){I(n.$$.fragment,a)},m(a,t){L(n,a,t),s=!0},p(a,s){const t={};2&s&&(t.$$scope={dirty:s,ctx:a}),n.$set(t)},i(a){s||(v(n.$$.fragment,a),s=!0)},o(a){x(n.$$.fragment,a),s=!1},d(a){D(n,a)}}}function fa(a){let n,s;return n=new X({props:{skeleton:!0}}),{c(){j(n.$$.fragment)},l(a){I(n.$$.fragment,a)},m(a,t){L(n,a,t),s=!0},p:k,i(a){s||(v(n.$$.fragment,a),s=!0)},o(a){x(n.$$.fragment,a),s=!1},d(a){D(n,a)}}}function ma(a){let n,s,t,e,r,u,$,g,k,f,m,d,y,h,b,x,T,v,w,E,j,I;return{c(){n=p("div"),s=p("ul"),t=p("li"),e=p("a"),r=M("Usage"),u=_(),$=p("ul"),g=p("li"),k=p("a"),f=M("Default"),m=_(),d=p("li"),y=p("a"),h=M("Tag types"),b=_(),x=p("li"),T=p("a"),v=M("Filterable"),w=_(),E=p("li"),j=p("a"),I=M("Skeleton"),this.h()},l(a){n=o(a,"DIV",{slot:!0});var p=c(n);s=o(p,"UL",{class:!0});var i=c(s);t=o(i,"LI",{class:!0});var _=c(t);e=o(_,"A",{class:!0,href:!0});var A=c(e);r=N(A,"Usage"),A.forEach(l),u=C(_),$=o(_,"UL",{class:!0});var F=c($);g=o(F,"LI",{class:!0});var L=c(g);k=o(L,"A",{class:!0,href:!0});var S=c(k);f=N(S,"Default"),S.forEach(l),L.forEach(l),m=C(F),d=o(F,"LI",{class:!0});var D=c(d);y=o(D,"A",{class:!0,href:!0});var B=c(y);h=N(B,"Tag types"),B.forEach(l),D.forEach(l),b=C(F),x=o(F,"LI",{class:!0});var M=c(x);T=o(M,"A",{class:!0,href:!0});var H=c(T);v=N(H,"Filterable"),H.forEach(l),M.forEach(l),w=C(F),E=o(F,"LI",{class:!0});var P=c(E);j=o(P,"A",{class:!0,href:!0});var U=c(j);I=N(U,"Skeleton"),U.forEach(l),P.forEach(l),F.forEach(l),_.forEach(l),i.forEach(l),p.forEach(l),this.h()},h(){A(e,"class","bx--link"),A(e,"href","#usage"),A(k,"class","bx--link"),A(k,"href","#default"),A(g,"class","bx--list__item"),A(y,"class","bx--link"),A(y,"href","#tag-types"),A(d,"class","bx--list__item"),A(T,"class","bx--link"),A(T,"href","#filterable"),A(x,"class","bx--list__item"),A(j,"class","bx--link"),A(j,"href","#skeleton"),A(E,"class","bx--list__item"),A($,"class","bx--list--unordered bx--list--nested"),A(t,"class","bx--list__item"),A(s,"class","bx--list--unordered"),A(n,"slot","aside")},m(a,p){i(a,n,p),F(n,s),F(s,t),F(t,e),F(e,r),F(t,u),F(t,$),F($,g),F(g,k),F(k,f),F($,m),F($,d),F(d,y),F(y,h),F($,b),F($,x),F(x,T),F(T,v),F($,w),F($,E),F(E,j),F(j,I)},d(a){a&&l(n)}}}function da(a){let n,s,t,e,r,u,$,g,k,f,m,d,y,h,b,T,w,E,S,B,H;return e=new U({props:{codeRaw:'<script>\n  import { Tag } from "carbon-components-svelte";\n<\/script>\n\n<Tag>IBM Cloud</Tag>\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span><span class="token punctuation">></span></span>IBM Cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n',$$slots:{default:[aa]},$$scope:{ctx:a}}}),k=new U({props:{codeRaw:'<script>\n  import { Tag } from "carbon-components-svelte";\n<\/script>\n\n<Tag type="red">red</Tag>\n<Tag type="magenta">magenta</Tag>\n<Tag type="purple">purple</Tag>\n<Tag type="blue">blue</Tag>\n<Tag type="cyan">cyan</Tag>\n<Tag type="teal">teal</Tag>\n<Tag type="green">green</Tag>\n<Tag type="gray">gray</Tag>\n<Tag type="cool-gray">cool-gray</Tag>\n<Tag type="warm-gray">warm-gray</Tag>\n<Tag type="high-contrast">high-contrast</Tag>\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>red<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>magenta<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>magenta<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>purple<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>purple<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>blue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cyan<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>cyan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>teal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>teal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>green<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>gray<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>gray<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cool-gray<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>cool-gray<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warm-gray<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>warm-gray<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>high-contrast<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>high-contrast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n',$$slots:{default:[$a]},$$scope:{ctx:a}}}),h=new U({props:{codeRaw:'<script>\n  import { Tag } from "carbon-components-svelte";\n<\/script>\n\n<Tag filter on:click>Filterable</Tag>\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">filter</span> <span class="token attr-name"><span class="token namespace">on:</span>click</span><span class="token punctuation">></span></span>Filterable<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n',$$slots:{default:[ka]},$$scope:{ctx:a}}}),S=new U({props:{codeRaw:'<script>\n  import { Tag } from "carbon-components-svelte";\n<\/script>\n\n<Tag skeleton />\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">skeleton</span> <span class="token punctuation">/></span></span>\n',$$slots:{default:[fa]},$$scope:{ctx:a}}}),{c(){n=p("h3"),s=M("Default"),t=_(),j(e.$$.fragment),r=_(),u=p("h3"),$=M("Tag types"),g=_(),j(k.$$.fragment),f=_(),m=p("h3"),d=M("Filterable"),y=_(),j(h.$$.fragment),b=_(),T=p("h3"),w=M("Skeleton"),E=_(),j(S.$$.fragment),B=_(),this.h()},l(a){n=o(a,"H3",{id:!0});var p=c(n);s=N(p,"Default"),p.forEach(l),t=C(a),I(e.$$.fragment,a),r=C(a),u=o(a,"H3",{id:!0});var i=c(u);$=N(i,"Tag types"),i.forEach(l),g=C(a),I(k.$$.fragment,a),f=C(a),m=o(a,"H3",{id:!0});var x=c(m);d=N(x,"Filterable"),x.forEach(l),y=C(a),I(h.$$.fragment,a),b=C(a),T=o(a,"H3",{id:!0});var v=c(T);w=N(v,"Skeleton"),v.forEach(l),E=C(a),I(S.$$.fragment,a),B=C(a),this.h()},h(){A(n,"id","default"),A(u,"id","tag-types"),A(m,"id","filterable"),A(T,"id","skeleton")},m(a,p){i(a,n,p),F(n,s),i(a,t,p),L(e,a,p),i(a,r,p),i(a,u,p),F(u,$),i(a,g,p),L(k,a,p),i(a,f,p),i(a,m,p),F(m,d),i(a,y,p),L(h,a,p),i(a,b,p),i(a,T,p),F(T,w),i(a,E,p),L(S,a,p),i(a,B,p),H=!0},p(a,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:a}),e.$set(s);const t={};2&n&&(t.$$scope={dirty:n,ctx:a}),k.$set(t);const p={};2&n&&(p.$$scope={dirty:n,ctx:a}),h.$set(p);const o={};2&n&&(o.$$scope={dirty:n,ctx:a}),S.$set(o)},i(a){H||(v(e.$$.fragment,a),v(k.$$.fragment,a),v(h.$$.fragment,a),v(S.$$.fragment,a),H=!0)},o(a){x(e.$$.fragment,a),x(k.$$.fragment,a),x(h.$$.fragment,a),x(S.$$.fragment,a),H=!1},d(a){a&&l(n),a&&l(t),D(e,a),a&&l(r),a&&l(u),a&&l(g),D(k,a),a&&l(f),a&&l(m),a&&l(y),D(h,a),a&&l(b),a&&l(T),a&&l(E),D(S,a),a&&l(B)}}}function ya(a){let n,s;return n=new P({props:{$$slots:{default:[da],aside:[ma]},$$scope:{ctx:a}}}),{c(){j(n.$$.fragment)},l(a){I(n.$$.fragment,a)},m(a,t){L(n,a,t),s=!0},p(a,[s]){const t={};2&s&&(t.$$scope={dirty:s,ctx:a}),n.$set(t)},i(a){s||(v(n.$$.fragment,a),s=!0)},o(a){x(n.$$.fragment,a),s=!1},d(a){D(n,a)}}}function ha(a){return[function(n){y(a,n)}]}export default class extends n{constructor(a){super(),s(this,a,ha,ya,t,{})}}