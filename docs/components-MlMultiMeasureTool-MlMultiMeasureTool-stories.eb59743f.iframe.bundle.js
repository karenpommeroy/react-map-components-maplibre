"use strict";(self.webpackChunk_mapcomponents_react_maplibre=self.webpackChunk_mapcomponents_react_maplibre||[]).push([[6743],{2896:(e,t,n)=>{n.r(t),n.d(t,{ExampleConfig:()=>B,__namedExportsOrder:()=>F,default:()=>E});var r=n(11504),o=n(88876),i=n(59476),l=n(13672),a=n(46948),u=n(26848),s=n(27432),c=n(72584),d=n(23964),m=n(70668),p=n(72779),f=n(80280),y=n(44),h=n(82700),v=n(96560),g=n(42084),b=n(49376),j=n(72576),x=n(29700),S=n(53984),M=n(17624);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){var r,o,i,l;r=e,o=t,i=n[t],l=function(e,t){if("object"!=C(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==C(l)?l:String(l))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,l,a=[],u=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw o}}return a}}(e,t)||k(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A=function(e){var t=P((0,r.useState)(!0),2),n=t[0],C=t[1],O=P((0,r.useState)(e.measureType),2),k=O[0],I=O[1],A=P((0,r.useState)(),2),G=A[0],_=A[1],E=(0,j.c)({mapId:e.mapId,waitForLayer:e.insertBeforeLayer}),B=P((0,r.useState)(),2),F=B[0],L=B[1],q=P((0,r.useState)("kilometers"),2),D=q[0],V=q[1],N=P((0,r.useState)([]),2),R=N[0],K=N[1];console.log(R);var U=P((0,r.useState)(!1),2),J=U[0],Y=U[1];return(0,r.useEffect)((function(){J&&Y(!1),J&&F&&K((function(e){var t=T(e);return t.push(F),t}))}),[J]),(0,r.useEffect)((function(){L(void 0)}),[D]),(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(g.c,{open:n,setOpen:C,name:"Multi Measure Tool",children:[(0,M.jsxs)(c.c,{sx:{flexGrow:1},children:[(0,M.jsx)("br",{}),(0,M.jsxs)(d.cp,{container:!0,spacing:4,justifyContent:"flex-start",children:[(0,M.jsx)(d.cp,{item:!0,xs:3,children:(0,M.jsx)(o.c,{title:"Measure Area",children:(0,M.jsx)(i.c,{variant:"outlined",sx:{backgroundColor:"polygon"===k?function(e){return e.palette.GPS.GPSActiveColor}:function(e){return e.palette.GPS.GPSActiveBackgroundColor},color:"polygon"===k?function(e){return e.palette.GPS.GPSActiveBackgroundColor}:function(e){return e.palette.GPS.GPSActiveColor}},onClick:function(){I("polygon"),L(void 0),Y(!0)},children:(0,M.jsx)(f.c,{})})})}),(0,M.jsx)(d.cp,{item:!0,xs:3,children:(0,M.jsx)(o.c,{title:"Measure Distance",children:(0,M.jsx)(i.c,{variant:"outlined",sx:{backgroundColor:"line"===k?function(e){return e.palette.GPS.GPSActiveColor}:function(e){return e.palette.GPS.GPSActiveBackgroundColor},color:"line"===k?function(e){return e.palette.GPS.GPSActiveBackgroundColor}:function(e){return e.palette.GPS.GPSActiveColor}},onClick:function(){I("line"),L(void 0),Y(!0)},children:(0,M.jsx)(p.c,{})})})})]})]}),(0,M.jsx)("br",{}),(0,M.jsx)(d.cp,{item:!0,xs:4,children:(0,M.jsxs)(l.c,{children:[(0,M.jsx)(a.c,{id:"unit-select-label",children:"Unit"}),(0,M.jsxs)(u.c,{labelId:"unit-select-label",id:"unit-select",value:D,label:"Unit",onChange:function(e){V(e.target.value),L(void 0),Y(!0)},children:[(0,M.jsx)(s.c,{value:"kilometers",children:"Kilometers"}),(0,M.jsx)(s.c,{value:"miles",children:"Miles"})]})]})}),(0,M.jsx)("br",{}),!J&&(0,M.jsx)(y.c,w(w({measureType:k,unit:D,onChange:function(e){L({measure:e.value,unit:e.unit,geojson:e.geojson})}},(function(){"kilometers"===D&&V("miles"),"miles"===D&&V("kilometers")})),{},{onFinish:function(){Y(!0)}})),(0,M.jsxs)(h.c,{children:[null==R?void 0:R.map((function(t,n){var l;return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(c.c,{sx:{display:"flex",flexDirection:"column"},children:[(0,M.jsx)("br",{}),(0,M.jsx)(c.c,{flexDirection:"row",sx:{"&:hover":{backgroundColor:"rgb(177, 177, 177, 0.2)"},marginTop:"25px"},onMouseOver:function(){_(t.geojson)},onMouseLeave:function(){_(void 0)},children:(0,M.jsxs)(r.Fragment,{children:[(0,M.jsx)(v.c,{layerComponent:(0,M.jsx)(b.c,{mapId:e.mapId,geojson:t.geojson}),visible:!0,configurable:!0,type:"layer",name:"LineString"===(null===(l=t.geojson.geometry)||void 0===l?void 0:l.type)?t.measure.toFixed(3).toString()+" "+t.unit:t.measure.toFixed(3).toString()+" "+t.unit+"²"},t.measure),(0,M.jsx)(o.c,{title:"Delete",children:(0,M.jsxs)(i.c,{onClick:function(){return function(e){K((function(t){var n=T(t);return n.splice(e,1),_(void 0),n}))}(n)},children:[" ",(0,M.jsx)(x.c,{})," "]})}),(0,M.jsx)(o.c,{title:"Center Location",children:(0,M.jsx)(i.c,{onClick:function(){var e;null==E||null===(e=E.map)||void 0===e||e.map.setCenter("Point"===t.geojson.geometry.type?t.geojson.geometry.coordinates:m.SGw(t.geojson).geometry.coordinates)},children:(0,M.jsx)(S.c,{})})})]},t.measure+"-"+n)})]},t.measure)})})),G&&(0,M.jsx)(b.c,{mapId:e.mapId,geojson:{type:"FeatureCollection",features:[G]},layerId:"highlightBorder",defaultPaintOverrides:{circle:{"circle-color":"#dd9900","circle-opacity":.4,"circle-radius":10},line:{"line-color":"#dd9900","line-opacity":.4,"line-width":10},fill:{"fill-color":"#dd9900","fill-opacity":.4}}})]})]})})};A.defaultProps={mapId:void 0,measureType:"polygon",buttonStyleOverride:{}};const G=A;try{A.displayName="MlMultiMeasureTool",A.__docgenInfo={description:"",displayName:"MlMultiMeasureTool",props:{mapId:{defaultValue:{value:"undefined"},description:"Id of the target MapLibre instance in mapContext",name:"mapId",required:!1,type:{name:"string | undefined"}},insertBeforeLayer:{defaultValue:null,description:'Id of an existing layer in the mapLibre instance to help specify the layer order\nThis layer will be visually beneath the layer with the "insertBeforeLayer" id.',name:"insertBeforeLayer",required:!1,type:{name:"string | undefined"}},buttonStyleOverride:{defaultValue:{value:"{}"},description:"Style attribute for the button-style\nhttps://mui.com/system/getting-started/the-sx-prop/",name:"buttonStyleOverride",required:!1,type:{name:"SxProps | undefined"}},measureType:{defaultValue:{value:"polygon"},description:'String that specify if the Tool measures an area ("polygon") or length ("line")',name:"measureType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"line"'},{value:'"polygon"'}]}},multiType:{defaultValue:null,description:"Boolean which decides if the user can switch between measure modes",name:"multiType",required:!1,type:{name:"boolean | undefined"}},unit:{defaultValue:null,description:"String that dictates which unit of measurement is used",name:"unit",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"meters"'},{value:'"millimeters"'},{value:'"centimeters"'},{value:'"kilometers"'},{value:'"acres"'},{value:'"miles"'},{value:'"nauticalmiles"'},{value:'"inches"'},{value:'"yards"'},{value:'"feet"'},{value:'"radians"'},{value:'"degrees"'},{value:'"hectares"'}]}},onChange:{defaultValue:null,description:"Callback function that is called each time measurment geometry within has changed within MlMeasureTool.\nFirst parameter is the new GeoJson feature.",name:"onChange",required:!1,type:{name:"((options: { value: number; unit: string | undefined; geojson: GeoJSONObject; geometries?: [] | undefined; }) => void) | undefined"}},onFinish:{defaultValue:null,description:"Callback function that is called by the end of drawing geometries.",name:"onFinish",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlMultiMeasureTool/MlMultiMeasureTool.tsx#MlMultiMeasureTool"]={docgenInfo:A.__docgenInfo,name:"MlMultiMeasureTool",path:"src/components/MlMultiMeasureTool/MlMultiMeasureTool.tsx#MlMultiMeasureTool"})}catch(e){}var _=n(95316);const E={title:"MapComponents/MlMultiMeasureTool",component:G,argTypes:{},decorators:_.c};var B=function(){return(0,M.jsx)(M.Fragment,{children:(0,M.jsx)(G,{multiType:!0})})}.bind({});B.parameters={},B.args={},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:"() => {\n  return <>\n            <MlMultiMeasureTool multiType={true} />\n        </>;\n}",...B.parameters?.docs?.source}}};const F=["ExampleConfig"]},95316:(e,t,n)=>{n.d(t,{c:()=>c});var r=n(11504),o=n(77288),i=n(24732),l=(n(47634),n(21200)),a=n(54656),u=n(76508),s=n(17624);const c=[function(e,t){var n,c=(0,r.useMemo)((function(){var e;return(0,u.c)(null==t||null===(e=t.globals)||void 0===e?void 0:e.theme)}),[null==t||null===(n=t.globals)||void 0===n?void 0:n.theme]);return(0,s.jsx)("div",{className:"fullscreen_map",children:(0,s.jsx)(o.y4,{children:(0,s.jsxs)(a.c,{theme:c,children:[(0,s.jsx)(e,{}),(0,s.jsx)(i.c,{options:{zoom:14.5,style:"https://wms.wheregroup.com/tileserver/style/osm-bright.json",center:[7.0851268,50.73884]},mapId:"map_1"}),(0,s.jsx)(l.c,{showZoomButtons:!1,mapId:"map_1"})]})})})}]}}]);