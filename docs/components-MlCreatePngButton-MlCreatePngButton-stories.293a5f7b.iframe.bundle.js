"use strict";(self.webpackChunk_mapcomponents_react_maplibre=self.webpackChunk_mapcomponents_react_maplibre||[]).push([[9075],{97132:(t,e,r)=>{var n=r(30492);e.c=void 0;var o=n(r(93540)),a=r(17624);e.c=(0,o.default)((0,a.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"Image")},10144:(t,e,r)=>{r.r(e),r.d(e,{ExampleConfig:()=>j,__namedExportsOrder:()=>O,default:()=>v});var n=r(11504),o=r(72576),a=r(97132),i=r(59476),c=r(58130),l=r(84268),u=r(17624);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t,e,r){var n;return n=function(t,e){if("object"!=s(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==s(n)?n:String(n))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d=function(t){var e,r,s=(0,o.c)({mapId:t.mapId}),d=(0,l.c)({mapId:t.mapId}),b=(e=n.useState(!1),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=b[0],g=b[1];return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(i.c,{color:"primary",variant:"contained",onClick:function(){if(s.map&&null!=d&&d.createExport){g(!0);var e=s.map.getBounds(),r=[e.getWest(),e.getSouth(),e.getEast(),e.getNorth()];d.createExport(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({width:833,height:1178.8,bbox:r,bboxUnrotated:r,bearing:s.map.getBearing(),format:"a4",orientation:"portrait"},t.exportOptions)).then((function(t){return t.createPng()})).then((function(t){return g(!1),t.downloadPng()})).catch((function(t){console.log(t),g(!1)}))}},children:y?(0,u.jsx)(c.c,{size:24,sx:{color:"#fff"}}):(0,u.jsx)(a.c,{})})})};d.defaultProps={mapId:void 0};const b=d;try{d.displayName="MlCreatePngButton",d.__docgenInfo={description:"Renders a button that will create a Png file of the current map view (dimensions adjusted to fit DIN A4 paper).",displayName:"MlCreatePngButton",props:{mapId:{defaultValue:{value:"undefined"},description:"Id of the target MapLibre instance in mapContext",name:"mapId",required:!1,type:{name:"string | undefined"}},exportOptions:{defaultValue:null,description:"Option overrides for the createExport function",name:"exportOptions",required:!1,type:{name:"createExportOptions | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlCreatePngButton/MlCreatePngButton.tsx#MlCreatePngButton"]={docgenInfo:d.__docgenInfo,name:"MlCreatePngButton",path:"src/components/MlCreatePngButton/MlCreatePngButton.tsx#MlCreatePngButton"})}catch(t){}var y=r(93240),g=r(95316);const v={title:"MapComponents/MlCreatePngButton",component:b,argTypes:{},decorators:g.c};var h=function(){return(0,u.jsx)(y.c,{unmovableButtons:(0,u.jsx)(b,{})})};h.displayName="Template";var j=h.bind({});j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"() => <TopToolbar unmovableButtons={<MlCreatePngButton />} />",...j.parameters?.docs?.source}}};const O=["ExampleConfig"]},95316:(t,e,r)=>{r.d(e,{c:()=>s});var n=r(11504),o=r(77288),a=r(24732),i=(r(47634),r(21200)),c=r(54656),l=r(76508),u=r(17624);const s=[function(t,e){var r,s=(0,n.useMemo)((function(){var t;return(0,l.c)(null==e||null===(t=e.globals)||void 0===t?void 0:t.theme)}),[null==e||null===(r=e.globals)||void 0===r?void 0:r.theme]);return(0,u.jsx)("div",{className:"fullscreen_map",children:(0,u.jsx)(o.y4,{children:(0,u.jsxs)(c.c,{theme:s,children:[(0,u.jsx)(t,{}),(0,u.jsx)(a.c,{options:{zoom:14.5,style:"https://wms.wheregroup.com/tileserver/style/osm-bright.json",center:[7.0851268,50.73884]},mapId:"map_1"}),(0,u.jsx)(i.c,{showZoomButtons:!1,mapId:"map_1"})]})})})}]}}]);