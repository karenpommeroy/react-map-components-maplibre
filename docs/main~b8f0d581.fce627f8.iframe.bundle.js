(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{130:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(0),o=n.n(r),a=n(7),i=n(704),l=n(654),u=n.n(l),c=n(653),s=n.n(c),d=n(237),f=n(236),p=n(192);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y=["drawerPaperProps","drawerHeaderProps"];function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===m(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var E=Object(a.a)("div")((function(){return{display:"flex",alignItems:"center"}}));function j(e){var t=e.drawerPaperProps,n=e.drawerHeaderProps,a=w(e,y),l=Object(f.a)("(max-width:900px)"),c=h(Object(r.useState)(!0),2),m=c[0],v=c[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{onClick:function(){v(!0)},style:{zIndex:101,position:"relative",padding:"20px"}},o.a.createElement(s.a,null)),o.a.createElement(i.a,b({transitionDuration:0,variant:"persistent",anchor:"left",open:m,PaperProps:g({sx:{maxWidth:"20%",padding:"40px"}},t),sx:g({flexGrow:1,zIndex:105,position:"absolute",top:0,backgroundColor:"#fafafa",display:"flex",flexDirection:"column",maxWidth:l?"90vw":"20vw"},m?{}:{left:l?"-90vw":"-20vw"})},a),o.a.createElement(E,n,o.a.createElement(d.a,{onClick:function(){v(!1)}},o.a.createElement(u.a,null))),o.a.createElement(p.a,null,a.children)))}try{j.displayName="Sidebar",j.__docgenInfo={description:"",displayName:"Sidebar",props:{drawerPaperProps:{defaultValue:null,description:"",name:"drawerPaperProps",required:!0,type:{name:'{ children?: ReactNode; classes?: Partial<PaperClasses> | undefined; elevation?: number | undefined; square?: boolean | undefined; sx?: SxProps<Theme> | undefined; variant?: "elevation" | ... 1 more ... | undefined; } & CommonProps & Omit<...>'}},drawerHeaderProps:{defaultValue:null,description:"",name:"drawerHeaderProps",required:!0,type:{name:"Headers"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui_components/Sidebar.tsx#Sidebar"]={docgenInfo:j.__docgenInfo,name:"Sidebar",path:"src/ui_components/Sidebar.tsx#Sidebar"})}catch(e){}},362:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n.n(r),a=n(134);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(e){e.preventDefault(),e.stopPropagation()};function c(e){var t=i(Object(r.useState)(0),2),n=t[0],l=t[1],c=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=c.current,t=function(e){l(1e3),u(e)},n=function(){l(0)},r=function(e){l(0),u(e)};return window.addEventListener("dragenter",t),window.addEventListener("dragover",u),null==e||e.addEventListener("dragleave",n),window.addEventListener("drop",r),function(){window.removeEventListener("dragenter",t),window.removeEventListener("dragover",u),null==e||e.removeEventListener("dragleave",n),window.removeEventListener("drop",r)}}),[]),o.a.createElement("div",{onDrop:function(t){var n;if(t.preventDefault(),null!=t&&null!==(n=t.dataTransfer)&&void 0!==n&&n.items){if(t.dataTransfer.items.length>1)return!1;if("file"===t.dataTransfer.items[0].kind){var r=new FileReader;r.onload=function(t){var n;null!=t&&null!==(n=t.currentTarget)&&void 0!==n&&n.result&&"function"==typeof e.setData&&e.setData(t.currentTarget.result)};var o=t.dataTransfer.items[0].getAsFile();o&&r.readAsText(o)}}},ref:c,style:{position:"absolute",left:"0",top:"0",backgroundColor:"rgba(255,255,255,0.5)",width:"100%",height:"100%",zIndex:n}},o.a.createElement(a.a,{variant:"h6",style:{top:"50%",position:"absolute",left:"50%",msTransform:"translate(-50%, -50%)",transform:" translate(-50%, -50%)"},noWrap:!0},"Datei ablegen"))}try{c.displayName="Dropzone",c.__docgenInfo={description:"",displayName:"Dropzone",props:{setData:{defaultValue:null,description:"",name:"setData",required:!0,type:{name:"(data: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui_components/Dropzone.tsx#Dropzone"]={docgenInfo:c.__docgenInfo,name:"Dropzone",path:"src/ui_components/Dropzone.tsx#Dropzone"})}catch(e){}},363:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),o=n.n(r),a=n(227),i=n.n(a),l=n(66);function u(e){var t=Object(r.useRef)(null),n=function(){t.current&&t.current.click()};return o.a.createElement(o.a.Fragment,null,e.buttonComponent?o.a.cloneElement(e.buttonComponent,{onClick:n}):o.a.createElement(l.a,{onClick:n},o.a.createElement(i.a,null)),o.a.createElement("input",{ref:t,onChange:function(){var n,r;if(!t.current)return!1;var o=null===(n=t.current)||void 0===n||null===(r=n.files)||void 0===r?void 0:r[0];if(!o)return!1;var a=new FileReader;a.onload=function(t){var n;t&&("function"==typeof e.setData&&e.setData(null===(n=t.currentTarget)||void 0===n?void 0:n.result))},a.readAsText(o)},type:"file",id:"input",multiple:!0,style:{display:"none"}}))}try{u.displayName="UploadButton",u.__docgenInfo={description:"",displayName:"UploadButton",props:{setData:{defaultValue:null,description:"",name:"setData",required:!0,type:{name:"(data: string) => void"}},buttonComponent:{defaultValue:null,description:"",name:"buttonComponent",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui_components/UploadButton.tsx#UploadButton"]={docgenInfo:u.__docgenInfo,name:"UploadButton",path:"src/ui_components/UploadButton.tsx#UploadButton"})}catch(e){}},471:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(664),i=n.n(a);function l(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{width:"475px",height:"475px",position:"fixed",display:"block",borderRadius:"360px",backgroundColor:"steelblue",right:e.bubbleRight,bottom:e.bubbleBottom,left:e.bubbleLeft,top:e.bubbleTop}},o.a.createElement("h2",{style:{marginTop:e.textMarginTop,marginLeft:e.textMarginLeft,color:"white",textAlign:"left"}},e.children),o.a.createElement(i.a,{style:{color:"white",fontSize:"80px",position:"absolute",transform:e.iconTransform,marginTop:e.iconMarginTop,marginLeft:e.iconMarginLeft}})))}l.__docgenInfo={description:"",methods:[],displayName:"BubbleForInstruction"},t.a=l,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/util/BubbleForInstructions.js"]={name:"BubbleForInstruction",docgenInfo:l.__docgenInfo,path:"src/util/BubbleForInstructions.js"})},666:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1233),i=n(667),l=n.n(i),u=n(476);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(e){var t=p(Object(r.useState)("loading"),2),n=t[0],i=t[1];Object(r.useEffect)((function(){e.src?fetch(e.src).then((function(e){var t=e.ok;i(t?"ready":"error")})).catch((function(e){console.error(e),i("error")})):i("error")}),[e.src]);var c={border:2,borderRadius:"8px",display:"flex"},s=function(){return o.a.createElement(u.a,{className:e.className,sx:d(d({},c),e.sx)},o.a.createElement(a.a,null))},f=function(){return o.a.createElement(u.a,{component:"img",className:e.className,sx:d(d({},c),e.sx),src:e.src,alt:e.alt||""})},m=function(){return o.a.createElement(u.a,{className:e.className,sx:d(d({},c),e.sx)},o.a.createElement(l.a,{sx:{display:"block",margin:"auto"}}))};return o.a.createElement(o.a.Fragment,null,function(e){switch(e){case"ready":return o.a.createElement(f,null);case"error":return o.a.createElement(m,null);default:return o.a.createElement(s,null)}}(n))};t.a=y;try{y.displayName="ImageLoader",y.__docgenInfo={description:"",displayName:"ImageLoader",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string | undefined"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<{}> | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui_components/ImageLoader.tsx#ImageLoader"]={docgenInfo:y.__docgenInfo,name:"ImageLoader",path:"src/ui_components/ImageLoader.tsx#ImageLoader"})}catch(e){}},685:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n.n(r),a=n(4),i=n.n(a),l=n(131);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=o.a.createContext({}),d=s.Provider,f=function(e){var t=Object(r.useContext)(l.b),n=u(Object(r.useState)(!1),2),a=n[0],i=n[1],c=u(Object(r.useState)(!1),2),s=c[0],f=c[1],p=u(Object(r.useState)(!0),2),m=p[0],y=p[1],b=u(Object(r.useState)(!1),2),v=b[0],g=b[1],O=Object(r.useRef)({}),h=u(Object(r.useState)(0),2),S=h[0],w=h[1],E=function(e){return function(){O.current[e]=!0,w(Math.random())}},j=function(){setTimeout((function(){g(!0),setTimeout((function(){y(!1)}),1700)}),900)};Object(r.useEffect)((function(){if(t.map&&!a){for(var e in O.current)if(!O.current[e])return;j()}}),[S,a,t]),Object(r.useEffect)((function(){for(var e=0,n=t.mapIds.length;e<n;e++)if(-1===Object.keys(O.current).indexOf(t.mapIds[e])){var r=t.mapIds[e]+"";t.getMap(r)&&(O.current[r]=!1,t.getMap(r).on("idle",E(r)))}}),[t,t.mapIds]),Object(r.useEffect)((function(){s&&j()}),[s]);var T={setControlled:i,controlled:a,visible:m,fadeoutAnimation:v,setLoadingDone:f};return o.a.createElement(d,{value:T},e)};f.propTypes={children:i.a.node.isRequired};try{f.displayName="LoadingOverlayProvider",f.__docgenInfo={description:"",displayName:"LoadingOverlayProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui_components/LoadingOverlayContext.tsx#LoadingOverlayProvider"]={docgenInfo:f.__docgenInfo,name:"LoadingOverlayProvider",path:"src/ui_components/LoadingOverlayContext.tsx#LoadingOverlayProvider"})}catch(e){}},69:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n.n(r),a=n(1224),i=n(1225),l=["toolbarProps"];function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e){var t=e.toolbarProps,n=c(e,l);return o.a.createElement(a.a,u({sx:{minHeight:"62px",backgroundColor:"#f1f1f1",position:"absolute",zIndex:120},color:"primary",position:"static"},n),o.a.createElement(i.a,t,n.children))}try{s.displayName="TopToolbar",s.__docgenInfo={description:"",displayName:"TopToolbar",props:{toolbarProps:{defaultValue:null,description:"",name:"toolbarProps",required:!1,type:{name:'ToolbarProps<"div", {}> | undefined'}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},elevation:{defaultValue:{value:"1"},description:"Shadow depth, corresponds to `dp` in the spec.\nIt accepts values between 0 and 24 inclusive.",name:"elevation",required:!1,type:{name:"number | undefined"}},square:{defaultValue:{value:"false"},description:"If `true`, rounded corners are disabled.",name:"square",required:!1,type:{name:"boolean | undefined"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme> | undefined"}},variant:{defaultValue:{value:"'elevation'"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"elevation"'},{value:'"outlined"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<AppBarClasses> & Partial<ClassNameMap<never>>) | undefined"}},color:{defaultValue:{value:"'primary'"},description:"The color of the component.\nIt supports both default and custom theme colors, which can be added as shown in the\n[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'},{value:'"default"'},{value:'"transparent"'}]}},enableColorOnDark:{defaultValue:{value:"false"},description:"If true, the `color` prop is applied in dark mode.",name:"enableColorOnDark",required:!1,type:{name:"boolean | undefined"}},position:{defaultValue:{value:"'fixed'"},description:"The positioning type. The behavior of the different options is described\n[in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).\nNote: `sticky` is not universally supported and will fall back to `static` when unavailable.",name:"position",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"fixed"'},{value:'"absolute"'},{value:'"sticky"'},{value:'"static"'},{value:'"relative"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui_components/TopToolbar.tsx#TopToolbar"]={docgenInfo:s.__docgenInfo,name:"TopToolbar",path:"src/ui_components/TopToolbar.tsx#TopToolbar"})}catch(e){}},925:function(e,t,n){"use strict";n.r(t);n(556)}}]);
//# sourceMappingURL=main~b8f0d581.fce627f8.iframe.bundle.js.map