(this.webpackJsonpheed=this.webpackJsonpheed||[]).push([[20],{279:function(e,t,c){},861:function(e,t,c){"use strict";c.r(t);var s=c(3),a=c(1),i=(c(279),c(7)),n=c.n(i),d=c(8),l=c(24),o=c.n(l),r=c(25),p=c.n(r),j=c(0);t.default=function(){var e=Object(a.useState)({cards:[{title:"",description:"",media:""}],title:"",media:""}),t=Object(s.a)(e,2),c=t[0],i=t[1];return Object(a.useEffect)((function(){window.scrollTo(0,0),o.a.init({duration:400,easing:"ease-in-out-sine"}),n.a.post("".concat(d.a,"/page/get"),{id:"60b271d93444a0ac2489cd89"}).then((function(e){console.log(e.data.resp),i(e.data.resp)})).catch((function(e){console.log(e)}))}),[]),Object(j.jsxs)("div",{className:"people-behind",children:[Object(j.jsx)("div",{style:{backgroundImage:'url("'.concat(c.media,'")')},className:"people-img",children:Object(j.jsx)("div",{className:"people-cont",children:Object(j.jsxs)("h1",{children:[Object(j.jsx)("span",{className:"green-home",children:c.title.substring(0,c.title.indexOf(" "))})," ".concat(c.title.substring(c.title.indexOf(" ")+1))]})})}),Object(j.jsx)("div",{className:"people-data",children:c.cards.map((function(e){return Object(j.jsxs)("div",{className:"people-card",children:[Object(j.jsx)("img",{alt:"user",src:e.media}),Object(j.jsxs)("div",{className:"people-card-text",children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)("div",{className:"pct-span"}),p()(e.description)]})]})}))})]})}}}]);