(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1306:function(e,t,n){"use strict";n.r(t),n.d(t,"renderDocs",(function(){return p})),n.d(t,"unmountDocs",(function(){return h}));n(158),n(120),n(24);var r=n(0),a=n.n(r),o=n(115),c=n.n(o),i={fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},l={margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"},u={textAlign:"center"},s=function(){return a.a.createElement("div",{style:i,className:"sb-nodocs sb-wrapper"},a.a.createElement("div",{style:l},a.a.createElement("h1",{style:u},"No Docs"),a.a.createElement("p",null,"Sorry, but there are no docs for the selected story. To add them, set the story's ",a.a.createElement("code",null,"docs")," parameter. If you think this is an error:"),a.a.createElement("ul",null,a.a.createElement("li",null,"Please check the story definition."),a.a.createElement("li",null,"Please check the Storybook config."),a.a.createElement("li",null,"Try reloading the page.")),a.a.createElement("p",null,"If the problem persists, check the browser console, or the terminal you've run Storybook from.")))};function d(e,t,n,r,a,o,c){try{var i=e[o](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,a)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){d(o,r,a,c,i,"next",e)}function i(e){d(o,r,a,c,i,"throw",e)}c(void 0)}))}}function p(e,t,n,r){return function(e,t,n){return f.apply(this,arguments)}(e,t,n).then(r)}function f(){return(f=m(regeneratorRuntime.mark((function e(t,n,r){var o,i,l,u,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null!=(l=t.parameters.docs)&&l.getPage||null!=l&&l.page)||(null!=l&&l.getContainer||null!=l&&l.container)){e.next=3;break}throw new Error("No `docs.container` set, did you run `addon-docs/preset`?");case 3:if(e.t1=l.container,e.t1){e.next=8;break}return e.next=7,null===(o=l.getContainer)||void 0===o?void 0:o.call(l);case 7:e.t1=e.sent;case 8:if(e.t0=e.t1,e.t0){e.next=11;break}e.t0=function(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,t)};case 11:if(u=e.t0,e.t3=l.page,e.t3){e.next=17;break}return e.next=16,null===(i=l.getPage)||void 0===i?void 0:i.call(l);case 16:e.t3=e.sent;case 17:if(e.t2=e.t3,e.t2){e.next=20;break}e.t2=s;case 20:return d=e.t2,m=a.a.createElement(u,{key:t.componentId,context:n},a.a.createElement(d,null)),e.next=24,new Promise((function(e){c.a.render(m,r,e)}));case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){c.a.unmountComponentAtNode(e)}s.displayName="NoDocs"}}]);
//# sourceMappingURL=3.a8172b89.iframe.bundle.js.map