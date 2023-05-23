"use strict";(self.webpackChunk_mapcomponents_react_maplibre=self.webpackChunk_mapcomponents_react_maplibre||[]).push([[350],{59732:(t,e,r)=>{r.r(e),r.d(e,{Overlay:()=>d,Toolbar:()=>f,__namedExportsOrder:()=>y,default:()=>m});var n=r(67294),o=r(58725),a=r(18434),i=r(54553),l=r(98396);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const m={title:"MapComponents/MlScaleReference",component:o.Z,argTypes:{url:{},layer:{}},decorators:i.Z};var f=function(t){return n.createElement(a.Z,{unmovableButtons:n.createElement(o.Z,t)})}.bind({});f.args={show:"toolbar"};var d=function(t){var e=(0,l.Z)("(max-width:900px)");return n.createElement("div",{style:{position:"absolute",zIndex:1e5,bottom:e?"40px":"20px",right:"20px"}},n.createElement(o.Z,t))}.bind({});d.args={show:"overlay"},f.parameters=s({storySource:{source:"(props) => {\n\treturn <TopToolbar unmovableButtons={<MlScaleReference {...props} />} />;\n}"}},f.parameters),d.parameters=s({storySource:{source:'(props) => {\n\tconst mediaIsMobile = useMediaQuery("(max-width:900px)");\n\treturn (\n\t\t<div\n\t\t\tstyle={{\n\t\t\t\tposition: "absolute",\n\t\t\t\tzIndex: 100000,\n\t\t\t\tbottom: mediaIsMobile ? "40px" : "20px",\n\t\t\t\tright: "20px",\n\t\t\t}}\n\t\t>\n\t\t\t<MlScaleReference {...props} />\n\t\t</div>\n\t);\n}'}},d.parameters);var y=["Toolbar","Overlay"]},460:(t,e,r)=>{r.r(e),r.d(e,{ExampleConfig:()=>Z,__namedExportsOrder:()=>_,default:()=>P});var n=r(67294),o=r(46871),a=r(54553),i=r(90686),l=r(31072),c=r(17781),u=r(70576),s=r(6867),p=r(22961),m=r(72450),f=r(59334),d=r(87455),y=r(52124),v=r(42440),b=r(76956),S=r(72642),g=r(33382),h=r(18037),O=r(32141),w=r(18434);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===E(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function I(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return M(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const P={title:"MapComponents/MlShareMapState",component:o.Z,argTypes:{},decorators:a.Z};var Z=function(){var t,e=[d,y],r=I((0,n.useState)(!0),2),a=r[0],E=r[1],j=(0,l.Z)({mapId:"map_1"}),x=(0,i.Z)({mapId:"map_1",watch:{viewport:!1,layers:!0,sources:!1},filter:{includeBaseLayers:!1}}),M=I((0,n.useState)(!0),2),P=M[0],Z=M[1];return n.createElement(n.Fragment,null,n.createElement(w.Z,{buttons:n.createElement(S.Z,{variant:P?"contained":"outlined",onClick:function(){return Z(!P)},sx:{marginRight:{xs:"0px",sm:"10px"}}},"Share Map State")}),n.createElement(o.Z,{active:a}),e.map((function(t,e){return n.createElement(b.Z,{layerId:"GeoJson_"+e,type:"line",geojson:t,key:"GeoJson_"+e})})),n.createElement(c.Z,{open:P,setOpen:Z,name:"Share Map State"},n.createElement(g.Z,{size:"small",selected:a,value:a,onChange:function(){E(!a)}},a?n.createElement(h.Z,null):n.createElement(O.Z,null),a?"active":"inactive"),n.createElement(v.Z,{dense:!0,key:"layers"},null===(t=x.layers)||void 0===t?void 0:t.map((function(t){return n.createElement(u.ZP,{key:null==t?void 0:t.id,secondaryAction:n.createElement(s.Z,{edge:"end","aria-label":"toggle visibility",onClick:function(){if(null!=t&&t.id){var e,r,n,o,a,i,l,c=null===(e=j.map)||void 0===e||null===(r=e.getLayer)||void 0===r||null===(n=r.call(e,null==t?void 0:t.id))||void 0===n?void 0:n.getLayoutProperty("visibility");null===(o=j.map)||void 0===o||null===(a=o.getLayer)||void 0===a||null===(i=a.call(o,null==t?void 0:t.id))||void 0===i||i.setLayoutProperty("visibility","none"===c?"visible":"none"),null===(l=j.map)||void 0===l||l.map.fire("zoom")}}},null!=t&&t.visible?n.createElement(p.Z,null):n.createElement(m.Z,null))},n.createElement(f.Z,{primary:null==t?void 0:t.id,secondary:""}))})))))}.bind({});Z.parameters={},Z.args={},Z.parameters=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){x(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({storySource:{source:"() => {\n\tconst geoJsonArray = [sample_geojson_1, sample_geojson_2];\n\tconst [watchState, setWatchState] = useState(true);\n\tconst mapHook = useMap({ mapId: 'map_1' });\n\tconst mapState = useMapState({\n\t\tmapId: 'map_1',\n\t\twatch: {\n\t\t\tviewport: false,\n\t\t\tlayers: true,\n\t\t\tsources: false,\n\t\t},\n\t\tfilter: {\n\t\t\tincludeBaseLayers: false,\n\t\t},\n\t});\n\tconst [openSidebar, setOpenSidebar] = useState(true);\n\n\treturn (\n\t\t<>\n\t\t\t<TopToolbar\n\t\t\t\tbuttons={\n\t\t\t\t\t<Button\n\t\t\t\t\t\tvariant={openSidebar ? 'contained' : 'outlined'}\n\t\t\t\t\t\tonClick={() => setOpenSidebar(!openSidebar)}\n\t\t\t\t\t\tsx={{ marginRight: { xs: '0px', sm: '10px' } }}\n\t\t\t\t\t>\n\t\t\t\t\t\tShare Map State\n\t\t\t\t\t</Button>\n\t\t\t\t}\n\t\t\t/>\n\t\t\t<MlShareMapState active={watchState} />\n\t\t\t{geoJsonArray.map((el, i) => (\n\t\t\t\t<MlGeoJsonLayer\n\t\t\t\t\tlayerId={'GeoJson_' + i}\n\t\t\t\t\ttype=\"line\"\n\t\t\t\t\tgeojson={el as unknown as Feature}\n\t\t\t\t\tkey={'GeoJson_' + i}\n\t\t\t\t/>\n\t\t\t))}\n\t\t\t<Sidebar open={openSidebar} setOpen={setOpenSidebar} name={'Share Map State'}>\n\t\t\t\t<ToggleButton\n\t\t\t\t\tsize=\"small\"\n\t\t\t\t\tselected={watchState}\n\t\t\t\t\tvalue={watchState}\n\t\t\t\t\tonChange={() => {\n\t\t\t\t\t\tsetWatchState(!watchState);\n\t\t\t\t\t}}\n\t\t\t\t>\n\t\t\t\t\t{watchState ? <CheckCircleOutlineIcon /> : <ErrorOutlineIcon />}\n\n\t\t\t\t\t{watchState ? 'active' : 'inactive'}\n\t\t\t\t</ToggleButton>\n\t\t\t\t<List dense key=\"layers\">\n\t\t\t\t\t{mapState.layers?.map((el) => (\n\t\t\t\t\t\t<ListItem\n\t\t\t\t\t\t\tkey={el?.id}\n\t\t\t\t\t\t\tsecondaryAction={\n\t\t\t\t\t\t\t\t<IconButton\n\t\t\t\t\t\t\t\t\tedge=\"end\"\n\t\t\t\t\t\t\t\t\taria-label=\"toggle visibility\"\n\t\t\t\t\t\t\t\t\tonClick={() => {\n\t\t\t\t\t\t\t\t\t\tif (el?.id) {\n\t\t\t\t\t\t\t\t\t\t\tconst currentVisibility = mapHook.map\n\t\t\t\t\t\t\t\t\t\t\t\t?.getLayer?.(el?.id)\n\t\t\t\t\t\t\t\t\t\t\t\t?.getLayoutProperty('visibility');\n\t\t\t\t\t\t\t\t\t\t\tmapHook.map\n\t\t\t\t\t\t\t\t\t\t\t\t?.getLayer?.(el?.id)\n\t\t\t\t\t\t\t\t\t\t\t\t?.setLayoutProperty(\n\t\t\t\t\t\t\t\t\t\t\t\t\t'visibility',\n\t\t\t\t\t\t\t\t\t\t\t\t\tcurrentVisibility === 'none' ? 'visible' : 'none'\n\t\t\t\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t\t\tmapHook.map?.map.fire('zoom');\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t{el?.visible ? <VisibilityIcon /> : <VisibilityOffIcon />}\n\t\t\t\t\t\t\t\t</IconButton>\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ListItemText primary={el?.id} secondary={''} />\n\t\t\t\t\t\t</ListItem>\n\t\t\t\t\t))}\n\t\t\t\t</List>\n\t\t\t</Sidebar>\n\t\t</>\n\t);\n}"}},Z.parameters);var _=["ExampleConfig"]},73653:(t,e,r)=>{r.r(e),r.d(e,{ExampleConfig:()=>G,__namedExportsOrder:()=>z,default:()=>D});var n=r(67294),o=r(7726),a=r(18377),i=r(93482),l=r(42440),c=r(77957),u=r(76956),s=r(31072),p=r(41733),m=r(30062),f=r(8044),d=r(6912),y=r(44598),v=r(47320),b=r(72642),S=r(2658),g=r(87205),h=r(48141);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function w(t){return function(t){if(Array.isArray(t))return P(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||M(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){x(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function x(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===O(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function I(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||M(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(t,e){if(t){if("string"==typeof t)return P(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(t,e):void 0}}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Z=function(t){var e,r,O=(0,s.Z)({mapId:t.mapId,waitForLayer:t.insertBeforeLayer}),E=I((0,n.useState)(),2),x=E[0],M=E[1],P=I((0,n.useState)({activeGeometryIndex:void 0,selectedGeoJson:void 0,geometries:[],drawMode:void 0}),2),Z=P[0],_=P[1],C=j({},t.buttonStyleOverride),T=function(t){_((function(e){return{drawMode:e.drawMode!==t?t:void 0,geometries:e.geometries,activeGeometryIndex:void 0,selectedGeoJson:void 0}}))};return n.createElement(n.Fragment,null,n.createElement(a.Z,{sx:{zIndex:104}},n.createElement(f.Z,null,n.createElement(d.Z,{title:"Point"},n.createElement(b.Z,{sx:C,onClick:function(){return T("draw_point")}},n.createElement(g.Z,null))),n.createElement(d.Z,{title:"LineString"},n.createElement(b.Z,{sx:C,onClick:function(){return T("draw_line_string")}},n.createElement(h.Z,null))),n.createElement(d.Z,{title:"Polygon"},n.createElement(b.Z,{sx:C,onClick:function(){return T("draw_polygon")}},n.createElement(o.Z,null))))),Z.drawMode&&n.createElement(i.Z,{mode:Z.drawMode,geojson:Z.selectedGeoJson,onChange:function(t){null!=t&&t[0]&&_((function(e){var r=w(Z.geometries);if(void 0===e.activeGeometryIndex){var n=t[0];n.properties.id=n.id,e.activeGeometryIndex=r.length,r.push(n)}else r[e.activeGeometryIndex]=t[0];return j(j({},e),{},{geometries:r})}))},onFinish:function(){_((function(t){return j(j({},t),{},{drawMode:void 0,activeGeometryIndex:void 0,selectedGeoJson:void 0})}))}}),n.createElement(l.Z,{sx:{zIndex:105}},Z.geometries.map((function(e){return n.createElement(n.Fragment,null,n.createElement(a.Z,{key:e.id,sx:{display:"flex",flexDirection:"column"}},n.createElement("br",null),n.createElement(a.Z,{flexDirection:"row",sx:{"&:hover":{backgroundColor:"rgb(177, 177, 177, 0.2)"}},onMouseOver:function(){M(e)},onMouseLeave:function(){M(void 0)}},n.createElement(y.Z,{sx:C,configurable:!0,layerComponent:n.createElement(u.Z,{mapId:t.mapId,geojson:e,layerId:String(e.id)}),type:"layer",name:String(e.id),description:e.geometry.type}),n.createElement(a.Z,{sx:{padding:"3px 30px"}},n.createElement(f.Z,{size:"small"},n.createElement(b.Z,{onClick:function(){var t;null==O||null===(t=O.map)||void 0===t||t.map.setCenter("Point"===e.geometry.type?e.geometry.coordinates:m.MqI(e).geometry.coordinates)}},n.createElement(v.Z,null)),n.createElement(b.Z,{sx:C,onClick:function(){_((function(t){return j(j({},t),{},{selectedGeoJson:e,activeGeometryIndex:t.geometries.indexOf(e),drawMode:"simple_select"})}))}},n.createElement(c.Z,null)),n.createElement(b.Z,{sx:C,onClick:function(){var t;t=e,_((function(e){var r=w(e.geometries);return r.splice(r.indexOf(t),1),j(j({},e),{},{geometries:r,activeGeometryIndex:e.activeGeometryIndex?e.activeGeometryIndex-1:void 0})}))}},n.createElement(p.Z,null)))))))})),x&&n.createElement(u.Z,{mapId:t.mapId,geojson:{type:"FeatureCollection",features:[x]},type:"line",layerId:"highlightBorder",paint:{"line-color":"#dd9900","line-opacity":.4,"line-width":10}})),"simple_select"===Z.drawMode&&n.createElement(S.Z,{sx:{fontSize:"0.6em"}},"Edit ",null===(e=Z.selectedGeoJson)||void 0===e||null===(r=e.geometry)||void 0===r?void 0:r.type))};Z.defaultProps={mapId:void 0,buttonStyleOverride:{}};const _=Z;try{Z.displayName="MlSketchTool",Z.__docgenInfo={description:"Component template",displayName:"MlSketchTool",props:{mapId:{defaultValue:{value:"undefined"},description:"Id of the target MapLibre instance in mapContext",name:"mapId",required:!1,type:{name:"string | undefined"}},insertBeforeLayer:{defaultValue:null,description:'Id of an existing layer in the mapLibre instance to help specify the layer order\nThis layer will be visually beneath the layer with the "insertBeforeLayer" id.',name:"insertBeforeLayer",required:!1,type:{name:"string | undefined"}},buttonStyleOverride:{defaultValue:{value:"{}"},description:"Style attribute for the button-style\nhttps://mui.com/system/getting-started/the-sx-prop/",name:"buttonStyleOverride",required:!1,type:{name:"SxProps<{}> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlSketchTool/MlSketchTool.tsx#MlSketchTool"]={docgenInfo:Z.__docgenInfo,name:"MlSketchTool",path:"src/components/MlSketchTool/MlSketchTool.tsx#MlSketchTool"})}catch(t){}var C=r(54553),T=r(17781),k=r(18434);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function R(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==A(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===A(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function B(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const D={title:"MapComponents/MlSketchTool",component:_,argTypes:{},decorators:C.Z};var G=function(){var t,e,r=(t=(0,n.useState)(!0),e=2,function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return B(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],a=r[1];return n.createElement(n.Fragment,null,n.createElement(k.Z,{buttons:n.createElement(n.Fragment,null,n.createElement(b.Z,{variant:o?"contained":"outlined",onClick:function(){return a(!o)},sx:{marginRight:{xs:"0px",sm:"10px"}}},"Sketch Tool"))}),n.createElement(T.Z,{open:o,setOpen:a,name:"Sketch Tool"},n.createElement(_,null)))}.bind({});G.parameters={},G.args={},G.parameters=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){R(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({storySource:{source:"() => {\n\tconst [openSidebar, setOpenSidebar] = useState(true);\n\treturn (\n\t\t<>\n\t\t\t<TopToolbar\n\t\t\t\tbuttons={\n\t\t\t\t\t<>\n\t\t\t\t\t\t<Button\n\t\t\t\t\t\t\tvariant={openSidebar ? 'contained' : 'outlined'}\n\t\t\t\t\t\t\tonClick={() => setOpenSidebar(!openSidebar)}\n\t\t\t\t\t\t\tsx={{ marginRight: { xs: '0px', sm: '10px' } }}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tSketch Tool\n\t\t\t\t\t\t</Button>\n\t\t\t\t\t</>\n\t\t\t\t}\n\t\t\t/>\n\t\t\t<Sidebar\n\t\t\t\topen={openSidebar}\n\t\t\t\tsetOpen={setOpenSidebar}\n\t\t\t\tname={'Sketch Tool'}\n\t\t\t>\n\t\t\t\t<MlSketchTool />\n\t\t\t</Sidebar>\n\t\t</>\n\t);\n}"}},G.parameters);var z=["ExampleConfig"]},58725:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(67294),o=r(31072);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l=function(t){var e=(0,n.useRef)(0),r=(0,o.Z)({mapId:t.mapId,waitForLayer:t.insertBeforeLayer}),i=a((0,n.useState)(0),2),l=i[0],c=i[1],u=a((0,n.useState)(""),2),s=u[0],p=u[1],m=(0,n.useCallback)((function(){var n,o;if(r.map&&(null===(n=r.map)||void 0===n?void 0:n.map.getZoom())!==e.current){e.current=null===(o=r.map)||void 0===o?void 0:o.map.getZoom();var a=t.maxWidth||100,i=r.map.map._container.clientHeight/2,l=r.map.map.unproject([0,i]),c=r.map.map.unproject([a,i]),u=l.distanceTo(c);if("imperial"===t.unit){var s=3.2808*u;s>5280?f(a,s/5280,r.map.map._getUIString("ScaleControl.Miles")):f(a,s,r.map.map._getUIString("ScaleControl.Feet"))}else"nautical"===t.unit?f(a,u/1852,r.map.map._getUIString("ScaleControl.NauticalMiles")):u>=1e3?f(a,u/1e3,r.map.map._getUIString("ScaleControl.Kilometers")):f(a,u,r.map.map._getUIString("ScaleControl.Meters"))}}),[r.map,t.unit,t.maxWidth]);(0,n.useEffect)((function(){if(r.map){var t=m;return r.map.on("move",t,r.componentId),m(),function(){var e;null===(e=r.map)||void 0===e||e.map.off("move",t)}}}),[r.map,m]);var f=function(t,e,r){var n=d(e);c(t*(n/e)),p(n+"&nbsp;"+r)},d=function(t){var e=Math.pow(10,"".concat(Math.floor(t)).length-1),r=t/e;return e*(r>=10?10:r>=5?5:r>=3?3:r>=2?2:r>=1?1:function(t){var e=Math.pow(10,Math.ceil(-Math.log(t)/Math.LN10));return Math.round(t*e)/e}(r))};return n.createElement(n.Fragment,null,n.createElement("div",{style:{backgroundColor:"hsla(0,0%,100%,.75)",fontSize:"10px",border:"2px solid #333",borderTop:"#333",padding:"0 5px",color:"#333",boxSizing:"border-box",width:l+"px",fontFamily:"sans-serif"},dangerouslySetInnerHTML:{__html:s}}))};const c=l;try{l.displayName="MlScaleReference",l.__docgenInfo={description:"",displayName:"MlScaleReference",props:{mapId:{defaultValue:null,description:"",name:"mapId",required:!1,type:{name:"string | undefined"}},insertBeforeLayer:{defaultValue:null,description:"",name:"insertBeforeLayer",required:!1,type:{name:"string | undefined"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number | undefined"}},unit:{defaultValue:null,description:"",name:"unit",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlScaleReference/MlScaleReference.tsx#MlScaleReference"]={docgenInfo:l.__docgenInfo,name:"MlScaleReference",path:"src/components/MlScaleReference/MlScaleReference.tsx#MlScaleReference"})}catch(t){}},46871:(t,e,r)=>{r.d(e,{Z:()=>b});var n=r(67294),o=r(45697),a=r.n(o),i=r(74736),l=r(28721),c=r(90686);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d=function(){var t=Object.fromEntries(new URLSearchParams(window.location.search));return t.layers=JSON.parse(null!=t&&t.layers?t.layers:"[]"),t},y=d(),v=function(t){var e,r,o=(0,n.useContext)(i.Z),a=(0,n.useRef)(!1),u=(0,n.useRef)(),s=(e=(0,n.useState)(void 0),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,r)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=s[0],v=s[1],b=(0,n.useRef)({}),S=(0,n.useRef)((t.idPrefix?t.idPrefix:"MlShareMapState-")+(0,l.Z)()),g=(0,c.Z)({watch:{viewport:!1,layers:!0,sources:!1},filter:{includeBaseLayers:!1}}),h=(0,n.useRef)(!1),O=(0,n.useRef)(),w=(0,n.useRef)({viewport:{center:!1,bearing:!1,pitch:!1,zoom:!1},layers:p({},b)}),E=(0,n.useRef)({}),j=(0,n.useCallback)((function(){if(t.active){var e=[];for(var r in g.layers){var n,o,a;e.push({id:null===(n=g.layers[r])||void 0===n?void 0:n.id,type:null===(o=g.layers[r])||void 0===o?void 0:o.type,visible:null===(a=g.layers[r])||void 0===a?void 0:a.visible})}x();var i=new URLSearchParams(p(p(p({},d()),E.current),{},{layers:JSON.stringify(e)}));JSON.parse(Object.fromEntries(i).layers).forEach((function(t){b.current[t.id]=!1}));var l=new URLSearchParams(window.location.search);i.toString()!==l.toString()&&window.history.pushState(p({},E.current),document.title,"?"+i.toString())}}),[g.layers,t.active]);(0,n.useEffect)((function(){var t=S.current;return E.current=d(),function(){u.current&&(u.current.cleanup(t),u.current=void 0),a.current=!1}}),[]),(0,n.useEffect)((function(){u.current&&j()}),[j]),(0,n.useEffect)((function(){if(u.current){var t=j;return u.current.on("moveend",t,S.current),function(){var e;null===(e=u.current)||void 0===e||e.map.off("moveend",t)}}}),[j,m]),(0,n.useEffect)((function(){var e;null!=o&&null!==(e=o.mapExists)&&void 0!==e&&e.call(o,t.mapId)&&!a.current&&(a.current=!0,u.current=o.getMap(t.mapId),v(u.current),E.current.lat&&E.current.lng&&I())}),[o.mapIds,o,t.mapId,t.active]),(0,n.useEffect)((function(){var t;if(null!=g&&null!==(t=g.layers)&&void 0!==t&&t.length){var e;for(var r in void 0===O.current&&(O.current=void 0,null==y||null===(e=y.layers)||void 0===e||e.forEach((function(t){var e;null!==(e=O.current)&&void 0!==e&&e[t.id]&&(O.current[t.id]=!1)}))),O.current){var n=!0;if(!1===O.current[r]&&(n=!1),n)return}y.layers&&y.layers.forEach((function(t){var e,r,n,o;null!==(e=u.current)&&void 0!==e&&e.map.getLayer(t.id)&&!1===(null===(r=O.current)||void 0===r?void 0:r[t.id])&&(O.current[t.id]=!0,null===(n=u.current.map)||void 0===n||null===(o=n.getLayer(t.id))||void 0===o||o.setLayoutProperty("visibility",t.visible?"visible":"none"))}))}}),[g.layers,t.mapId,t.active]),(0,n.useEffect)((function(){m&&g.layers&&(t.active||m.cleanup(S.current))}),[t.active,m,g.layers]);var x=function(){var t,e,r,n,o;E.current.lat=null===(t=u.current)||void 0===t?void 0:t.map.getCenter().lat,E.current.lng=null===(e=u.current)||void 0===e?void 0:e.map.getCenter().lng,E.current.zoom=null===(r=u.current)||void 0===r?void 0:r.map.getZoom(),E.current.bearing=null===(n=u.current)||void 0===n?void 0:n.map.getBearing(),E.current.pitch=null===(o=u.current)||void 0===o?void 0:o.map.getPitch()},I=function(){var t,e,r,n;w.current.viewport.center||(w.current.viewport.center=!0,E.current.lng&&E.current.lat&&(null===(t=u.current)||void 0===t||t.map.setCenter([E.current.lng,E.current.lat])),E.current.zoom&&(null===(e=u.current)||void 0===e||e.map.setZoom(E.current.zoom)),E.current.bearing&&(null===(r=u.current)||void 0===r||r.map.setBearing(E.current.bearing)),E.current.pitch&&(null===(n=u.current)||void 0===n||n.map.setPitch(E.current.pitch)));h.current=!0};return window.onpopstate=function(t){var e;t.state&&t.state.lng&&t.state.lat&&t.state.zoom&&(null===(e=u.current)||void 0===e||e.map.easeTo({zoom:t.state.zoom,center:[t.state.lng,t.state.lat]}))},n.createElement(n.Fragment,null)};v.defaultProps={mapId:void 0},v.propTypes={mapId:a().string};const b=v;try{v.displayName="MlShareMapState",v.__docgenInfo={description:"",displayName:"MlShareMapState",props:{mapId:{defaultValue:{value:"undefined"},description:"",name:"mapId",required:!1,type:{name:"string | undefined"}},idPrefix:{defaultValue:null,description:"",name:"idPrefix",required:!1,type:{name:"string | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlShareMapState/MlShareMapState.tsx#MlShareMapState"]={docgenInfo:v.__docgenInfo,name:"MlShareMapState",path:"src/components/MlShareMapState/MlShareMapState.tsx#MlShareMapState"})}catch(t){}}}]);