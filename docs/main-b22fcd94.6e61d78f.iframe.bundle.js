"use strict";(self.webpackChunk_mapcomponents_react_maplibre=self.webpackChunk_mapcomponents_react_maplibre||[]).push([[350],{25018:(t,e,n)=>{n.r(e),n.d(e,{Overlay:()=>v,Toolbar:()=>y,__namedExportsOrder:()=>g,catalogueDemo:()=>b,default:()=>d});var r=n(67294),o=n(58725),a=n(99226),i=n(18434),l=n(54553),c=n(98396);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const d={title:"MapComponents/MlScaleReference",component:o.Z,argTypes:{url:{},layer:{}},decorators:l.Z};var y=function(t){return r.createElement(i.Z,{unmovableButtons:r.createElement(o.Z,t)})}.bind({});y.args={};var v=function(t){var e=(0,c.Z)((function(t){return t.breakpoints.down("md")}));return r.createElement("div",{style:{position:"absolute",zIndex:1e3,bottom:e?"38px":"8px",left:"10px"}},r.createElement(o.Z,t))}.bind({});v.args={};var b=function(t){var e,n,l=(e=(0,r.useState)(!0),n=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,n)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=l[0],s=l[1],p=(0,c.Z)((function(t){return t.breakpoints.down("md")}));return(0,r.useEffect)((function(){var t=setTimeout((function(){s(!1)}),7e3);return function(){return clearTimeout(t)}}),[]),r.createElement(r.Fragment,null,u&&r.createElement(a.Z,{sx:{position:"fixed",right:{xs:"105px",md:"175px"},color:"#009ee0",backgroundColor:"#fff",top:{xs:"20px",md:"22px"},fontSize:"16px",fontFamily:"sans-serif",display:"flex",flexDirection:"column",gap:"5px",zIndex:5e3}},p?"Use Zoom to view functionality ➤":"Use Zoom to explore functionality ➤"),r.createElement(i.Z,{unmovableButtons:r.createElement(o.Z,t)}),";")}.bind({});b.args={},y.parameters=p({storySource:{source:"(props: MlScaleReferenceProps) => {\n\treturn <TopToolbar unmovableButtons={<MlScaleReference {...props} />} />;\n}"}},y.parameters),v.parameters=p({storySource:{source:"(props: MlScaleReferenceProps) => {\n\tconst mediaIsMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));\n\n\treturn (\n\t\t<div\n\t\t\tstyle={{\n\t\t\t\tposition: 'absolute',\n\t\t\t\tzIndex: 1000,\n\t\t\t\tbottom: mediaIsMobile ? '38px' : '8px',\n\t\t\t\tleft: '10px',\n\t\t\t}}\n\t\t>\n\t\t\t<MlScaleReference {...props} />\n\t\t</div>\n\t);\n}"}},v.parameters),b.parameters=p({storySource:{source:"(props: MlScaleReferenceProps) => {\n\tconst [showTooltip, setShowTooltip] = useState(true);\n\tconst mediaIsMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));\n\n\tuseEffect(() => {\n\t\tconst timeout = setTimeout(() => {\n\t\t\tsetShowTooltip(false);\n\t\t}, 7000);\n\t\treturn () => clearTimeout(timeout);\n\t}, []);\n\n\treturn (\n\t\t<>\n\t\t\t{showTooltip && (\n\t\t\t\t<Box\n\t\t\t\t\tsx={{\n\t\t\t\t\t\tposition: 'fixed',\n\t\t\t\t\t\tright: { xs: '105px', md: '175px' },\n\t\t\t\t\t\tcolor: '#009ee0',\n\t\t\t\t\t\tbackgroundColor: '#fff',\n\t\t\t\t\t\ttop: { xs: '20px', md: '22px' },\n\t\t\t\t\t\tfontSize: '16px',\n\t\t\t\t\t\tfontFamily: 'sans-serif',\n\t\t\t\t\t\tdisplay: 'flex',\n\t\t\t\t\t\tflexDirection: 'column',\n\t\t\t\t\t\tgap: '5px',\n\t\t\t\t\t\tzIndex: 5000,\n\t\t\t\t\t}}\n\t\t\t\t>\n\t\t\t\t\t{mediaIsMobile\n\t\t\t\t\t\t? 'Use Zoom to view functionality ➤'\n\t\t\t\t\t\t: 'Use Zoom to explore functionality ➤'}\n\t\t\t\t</Box>\n\t\t\t)}\n\t\t\t<TopToolbar unmovableButtons={<MlScaleReference {...props} />} />;\n\t\t</>\n\t);\n}"}},b.parameters);var g=["Toolbar","Overlay","catalogueDemo"]},460:(t,e,n)=>{n.r(e),n.d(e,{ExampleConfig:()=>C,__namedExportsOrder:()=>T,default:()=>P});var r=n(67294),o=n(46871),a=n(54553),i=n(90686),l=n(31072),c=n(17781),u=n(70576),s=n(6867),p=n(22961),m=n(72450),f=n(59334),d=n(87455),y=n(52124),v=n(42440),b=n(76956),g=n(72642),S=n(33382),h=n(18037),O=n(32141),w=n(18434);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===x(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const P={title:"MapComponents/MlShareMapState",component:o.Z,argTypes:{},decorators:a.Z};var C=function(){var t,e=[d,y],n=M((0,r.useState)(!0),2),a=n[0],x=n[1],E=(0,l.Z)({mapId:"map_1"}),j=(0,i.Z)({mapId:"map_1",watch:{viewport:!1,layers:!0,sources:!1},filter:{includeBaseLayers:!1}}),I=M((0,r.useState)(!0),2),P=I[0],C=I[1];return r.createElement(r.Fragment,null,r.createElement(w.Z,{buttons:r.createElement(g.Z,{variant:P?"contained":"outlined",onClick:function(){return C(!P)},sx:{marginRight:{xs:"0px",sm:"10px"}}},"Share Map State")}),r.createElement(o.Z,{active:a}),e.map((function(t,e){return r.createElement(b.Z,{layerId:"GeoJson_"+e,type:"line",geojson:t,key:"GeoJson_"+e})})),r.createElement(c.Z,{open:P,setOpen:C,name:"Share Map State"},r.createElement(S.Z,{size:"small",selected:a,value:a,onChange:function(){x(!a)}},a?r.createElement(h.Z,null):r.createElement(O.Z,null),a?"active":"inactive"),r.createElement(v.Z,{dense:!0,key:"layers"},null===(t=j.layers)||void 0===t?void 0:t.map((function(t){return r.createElement(u.ZP,{key:null==t?void 0:t.id,secondaryAction:r.createElement(s.Z,{edge:"end","aria-label":"toggle visibility",onClick:function(){if(null!=t&&t.id){var e,n,r,o,a,i,l,c=null===(e=E.map)||void 0===e||null===(n=e.getLayer)||void 0===n||null===(r=n.call(e,null==t?void 0:t.id))||void 0===r?void 0:r.getLayoutProperty("visibility");null===(o=E.map)||void 0===o||null===(a=o.getLayer)||void 0===a||null===(i=a.call(o,null==t?void 0:t.id))||void 0===i||i.setLayoutProperty("visibility","none"===c?"visible":"none"),null===(l=E.map)||void 0===l||l.map.fire("zoom")}}},null!=t&&t.visible?r.createElement(p.Z,null):r.createElement(m.Z,null))},r.createElement(f.Z,{primary:null==t?void 0:t.id,secondary:""}))})))))}.bind({});C.parameters={},C.args={},C.parameters=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({storySource:{source:"() => {\n\tconst geoJsonArray = [sample_geojson_1, sample_geojson_2];\n\tconst [watchState, setWatchState] = useState(true);\n\tconst mapHook = useMap({ mapId: 'map_1' });\n\tconst mapState = useMapState({\n\t\tmapId: 'map_1',\n\t\twatch: {\n\t\t\tviewport: false,\n\t\t\tlayers: true,\n\t\t\tsources: false,\n\t\t},\n\t\tfilter: {\n\t\t\tincludeBaseLayers: false,\n\t\t},\n\t});\n\tconst [openSidebar, setOpenSidebar] = useState(true);\n\n\treturn (\n\t\t<>\n\t\t\t<TopToolbar\n\t\t\t\tbuttons={\n\t\t\t\t\t<Button\n\t\t\t\t\t\tvariant={openSidebar ? 'contained' : 'outlined'}\n\t\t\t\t\t\tonClick={() => setOpenSidebar(!openSidebar)}\n\t\t\t\t\t\tsx={{ marginRight: { xs: '0px', sm: '10px' } }}\n\t\t\t\t\t>\n\t\t\t\t\t\tShare Map State\n\t\t\t\t\t</Button>\n\t\t\t\t}\n\t\t\t/>\n\t\t\t<MlShareMapState active={watchState} />\n\t\t\t{geoJsonArray.map((el, i) => (\n\t\t\t\t<MlGeoJsonLayer\n\t\t\t\t\tlayerId={'GeoJson_' + i}\n\t\t\t\t\ttype=\"line\"\n\t\t\t\t\tgeojson={el as unknown as Feature}\n\t\t\t\t\tkey={'GeoJson_' + i}\n\t\t\t\t/>\n\t\t\t))}\n\t\t\t<Sidebar open={openSidebar} setOpen={setOpenSidebar} name={'Share Map State'}>\n\t\t\t\t<ToggleButton\n\t\t\t\t\tsize=\"small\"\n\t\t\t\t\tselected={watchState}\n\t\t\t\t\tvalue={watchState}\n\t\t\t\t\tonChange={() => {\n\t\t\t\t\t\tsetWatchState(!watchState);\n\t\t\t\t\t}}\n\t\t\t\t>\n\t\t\t\t\t{watchState ? <CheckCircleOutlineIcon /> : <ErrorOutlineIcon />}\n\n\t\t\t\t\t{watchState ? 'active' : 'inactive'}\n\t\t\t\t</ToggleButton>\n\t\t\t\t<List dense key=\"layers\">\n\t\t\t\t\t{mapState.layers?.map((el) => (\n\t\t\t\t\t\t<ListItem\n\t\t\t\t\t\t\tkey={el?.id}\n\t\t\t\t\t\t\tsecondaryAction={\n\t\t\t\t\t\t\t\t<IconButton\n\t\t\t\t\t\t\t\t\tedge=\"end\"\n\t\t\t\t\t\t\t\t\taria-label=\"toggle visibility\"\n\t\t\t\t\t\t\t\t\tonClick={() => {\n\t\t\t\t\t\t\t\t\t\tif (el?.id) {\n\t\t\t\t\t\t\t\t\t\t\tconst currentVisibility = mapHook.map\n\t\t\t\t\t\t\t\t\t\t\t\t?.getLayer?.(el?.id)\n\t\t\t\t\t\t\t\t\t\t\t\t?.getLayoutProperty('visibility');\n\t\t\t\t\t\t\t\t\t\t\tmapHook.map\n\t\t\t\t\t\t\t\t\t\t\t\t?.getLayer?.(el?.id)\n\t\t\t\t\t\t\t\t\t\t\t\t?.setLayoutProperty(\n\t\t\t\t\t\t\t\t\t\t\t\t\t'visibility',\n\t\t\t\t\t\t\t\t\t\t\t\t\tcurrentVisibility === 'none' ? 'visible' : 'none'\n\t\t\t\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t\t\tmapHook.map?.map.fire('zoom');\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t{el?.visible ? <VisibilityIcon /> : <VisibilityOffIcon />}\n\t\t\t\t\t\t\t\t</IconButton>\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ListItemText primary={el?.id} secondary={''} />\n\t\t\t\t\t\t</ListItem>\n\t\t\t\t\t))}\n\t\t\t\t</List>\n\t\t\t</Sidebar>\n\t\t</>\n\t);\n}"}},C.parameters);var T=["ExampleConfig"]},30808:(t,e,n)=>{n.r(e),n.d(e,{ExampleConfig:()=>d,__namedExportsOrder:()=>y,default:()=>f});var r=n(67294),o=n(51834),a=n(54553),i=n(17781),l=n(18434),c=n(72642);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const f={title:"MapComponents/MlSketchTool",component:o.Z,argTypes:{},decorators:a.Z};var d=function(){var t,e,n=(t=(0,r.useState)(!0),e=2,function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],u=n[1];return r.createElement(r.Fragment,null,r.createElement(l.Z,{buttons:r.createElement(r.Fragment,null,r.createElement(c.Z,{variant:a?"contained":"outlined",onClick:function(){return u(!a)},sx:{marginRight:{xs:"0px",sm:"10px"}}},"Sketch Tool"))}),r.createElement(i.Z,{open:a,setOpen:u,name:"Sketch Tool"},r.createElement(o.Z,{onChange:function(t){return console.log(t)}})))}.bind({});d.parameters={},d.args={},d.parameters=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({storySource:{source:"() => {\n\tconst [openSidebar, setOpenSidebar] = useState(true);\n\treturn (\n\t\t<>\n\t\t\t<TopToolbar\n\t\t\t\tbuttons={\n\t\t\t\t\t<>\n\t\t\t\t\t\t<Button\n\t\t\t\t\t\t\tvariant={openSidebar ? 'contained' : 'outlined'}\n\t\t\t\t\t\t\tonClick={() => setOpenSidebar(!openSidebar)}\n\t\t\t\t\t\t\tsx={{ marginRight: { xs: '0px', sm: '10px' } }}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tSketch Tool\n\t\t\t\t\t\t</Button>\n\t\t\t\t\t</>\n\t\t\t\t}\n\t\t\t/>\n\t\t\t<Sidebar\n\t\t\t\topen={openSidebar}\n\t\t\t\tsetOpen={setOpenSidebar}\n\t\t\t\tname={'Sketch Tool'}\n\t\t\t>\n\t\t\t\t<MlSketchTool onChange={(state) => console.log(state)} />\n\t\t\t</Sidebar>\n\t\t</>\n\t);\n}"}},d.parameters);var y=["ExampleConfig"]},58725:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(67294),o=n(31072);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var l=function(t){var e=(0,r.useRef)(0),n=(0,o.Z)({mapId:t.mapId,waitForLayer:t.insertBeforeLayer}),i=a((0,r.useState)(0),2),l=i[0],c=i[1],u=a((0,r.useState)(""),2),s=u[0],p=u[1],m=(0,r.useCallback)((function(){var r,o;if(n.map&&(null===(r=n.map)||void 0===r?void 0:r.map.getZoom())!==e.current){e.current=null===(o=n.map)||void 0===o?void 0:o.map.getZoom();var a=t.maxWidth||100,i=n.map.map._container.clientHeight/2,l=n.map.map.unproject([0,i]),c=n.map.map.unproject([a,i]),u=l.distanceTo(c);if("imperial"===t.unit){var s=3.2808*u;s>5280?f(a,s/5280,n.map.map._getUIString("ScaleControl.Miles")):f(a,s,n.map.map._getUIString("ScaleControl.Feet"))}else"nautical"===t.unit?f(a,u/1852,n.map.map._getUIString("ScaleControl.NauticalMiles")):u>=1e3?f(a,u/1e3,n.map.map._getUIString("ScaleControl.Kilometers")):f(a,u,n.map.map._getUIString("ScaleControl.Meters"))}}),[n.map,t.unit,t.maxWidth]);(0,r.useEffect)((function(){if(n.map){var t=m;return n.map.on("move",t,n.componentId),m(),function(){var e;null===(e=n.map)||void 0===e||e.map.off("move",t)}}}),[n.map,m]);var f=function(t,e,n){var r=d(e);c(t*(r/e)),p(r+"&nbsp;"+n)},d=function(t){var e=Math.pow(10,"".concat(Math.floor(t)).length-1),n=t/e;return e*(n>=10?10:n>=5?5:n>=3?3:n>=2?2:n>=1?1:function(t){var e=Math.pow(10,Math.ceil(-Math.log(t)/Math.LN10));return Math.round(t*e)/e}(n))};return r.createElement(r.Fragment,null,r.createElement("div",{style:{backgroundColor:"hsla(0,0%,100%,.75)",fontSize:"10px",border:"2px solid #333",borderTop:"#333",padding:"0 5px",color:"#333",boxSizing:"border-box",width:l+"px",fontFamily:"sans-serif"},dangerouslySetInnerHTML:{__html:s}}))};const c=l;try{l.displayName="MlScaleReference",l.__docgenInfo={description:"",displayName:"MlScaleReference",props:{mapId:{defaultValue:null,description:"",name:"mapId",required:!1,type:{name:"string | undefined"}},insertBeforeLayer:{defaultValue:null,description:"",name:"insertBeforeLayer",required:!1,type:{name:"string | undefined"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number | undefined"}},unit:{defaultValue:null,description:"",name:"unit",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlScaleReference/MlScaleReference.tsx#MlScaleReference"]={docgenInfo:l.__docgenInfo,name:"MlScaleReference",path:"src/components/MlScaleReference/MlScaleReference.tsx#MlScaleReference"})}catch(t){}},46871:(t,e,n)=>{n.d(e,{Z:()=>b});var r=n(67294),o=n(45697),a=n.n(o),i=n(74736),l=n(28721),c=n(90686);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d=function(){var t=Object.fromEntries(new URLSearchParams(window.location.search));return t.layers=JSON.parse(null!=t&&t.layers?t.layers:"[]"),t},y=d(),v=function(t){var e,n,o=(0,r.useContext)(i.Z),a=(0,r.useRef)(!1),u=(0,r.useRef)(),s=(e=(0,r.useState)(void 0),n=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,n)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=s[0],v=s[1],b=(0,r.useRef)({}),g=(0,r.useRef)((t.idPrefix?t.idPrefix:"MlShareMapState-")+(0,l.Z)()),S=(0,c.Z)({watch:{viewport:!1,layers:!0,sources:!1},filter:{includeBaseLayers:!1}}),h=(0,r.useRef)(!1),O=(0,r.useRef)(),w=(0,r.useRef)({viewport:{center:!1,bearing:!1,pitch:!1,zoom:!1},layers:p({},b)}),x=(0,r.useRef)({}),E=(0,r.useCallback)((function(){if(t.active){var e=[];for(var n in S.layers){var r,o,a;e.push({id:null===(r=S.layers[n])||void 0===r?void 0:r.id,type:null===(o=S.layers[n])||void 0===o?void 0:o.type,visible:null===(a=S.layers[n])||void 0===a?void 0:a.visible})}j();var i=new URLSearchParams(p(p(p({},d()),x.current),{},{layers:JSON.stringify(e)}));JSON.parse(Object.fromEntries(i).layers).forEach((function(t){b.current[t.id]=!1}));var l=new URLSearchParams(window.location.search);i.toString()!==l.toString()&&window.history.pushState(p({},x.current),document.title,"?"+i.toString())}}),[S.layers,t.active]);(0,r.useEffect)((function(){var t=g.current;return x.current=d(),function(){u.current&&(u.current.cleanup(t),u.current=void 0),a.current=!1}}),[]),(0,r.useEffect)((function(){u.current&&E()}),[E]),(0,r.useEffect)((function(){if(u.current){var t=E;return u.current.on("moveend",t,g.current),function(){var e;null===(e=u.current)||void 0===e||e.map.off("moveend",t)}}}),[E,m]),(0,r.useEffect)((function(){var e;null!=o&&null!==(e=o.mapExists)&&void 0!==e&&e.call(o,t.mapId)&&!a.current&&(a.current=!0,u.current=o.getMap(t.mapId),v(u.current),x.current.lat&&x.current.lng&&M())}),[o.mapIds,o,t.mapId,t.active]),(0,r.useEffect)((function(){var t;if(null!=S&&null!==(t=S.layers)&&void 0!==t&&t.length){var e;for(var n in void 0===O.current&&(O.current=void 0,null==y||null===(e=y.layers)||void 0===e||e.forEach((function(t){var e;null!==(e=O.current)&&void 0!==e&&e[t.id]&&(O.current[t.id]=!1)}))),O.current){var r=!0;if(!1===O.current[n]&&(r=!1),r)return}y.layers&&y.layers.forEach((function(t){var e,n,r,o;null!==(e=u.current)&&void 0!==e&&e.map.getLayer(t.id)&&!1===(null===(n=O.current)||void 0===n?void 0:n[t.id])&&(O.current[t.id]=!0,null===(r=u.current.map)||void 0===r||null===(o=r.getLayer(t.id))||void 0===o||o.setLayoutProperty("visibility",t.visible?"visible":"none"))}))}}),[S.layers,t.mapId,t.active]),(0,r.useEffect)((function(){m&&S.layers&&(t.active||m.cleanup(g.current))}),[t.active,m,S.layers]);var j=function(){var t,e,n,r,o;x.current.lat=null===(t=u.current)||void 0===t?void 0:t.map.getCenter().lat,x.current.lng=null===(e=u.current)||void 0===e?void 0:e.map.getCenter().lng,x.current.zoom=null===(n=u.current)||void 0===n?void 0:n.map.getZoom(),x.current.bearing=null===(r=u.current)||void 0===r?void 0:r.map.getBearing(),x.current.pitch=null===(o=u.current)||void 0===o?void 0:o.map.getPitch()},M=function(){var t,e,n,r;w.current.viewport.center||(w.current.viewport.center=!0,x.current.lng&&x.current.lat&&(null===(t=u.current)||void 0===t||t.map.setCenter([x.current.lng,x.current.lat])),x.current.zoom&&(null===(e=u.current)||void 0===e||e.map.setZoom(x.current.zoom)),x.current.bearing&&(null===(n=u.current)||void 0===n||n.map.setBearing(x.current.bearing)),x.current.pitch&&(null===(r=u.current)||void 0===r||r.map.setPitch(x.current.pitch)));h.current=!0};return window.onpopstate=function(t){var e;t.state&&t.state.lng&&t.state.lat&&t.state.zoom&&(null===(e=u.current)||void 0===e||e.map.easeTo({zoom:t.state.zoom,center:[t.state.lng,t.state.lat]}))},r.createElement(r.Fragment,null)};v.defaultProps={mapId:void 0},v.propTypes={mapId:a().string};const b=v;try{v.displayName="MlShareMapState",v.__docgenInfo={description:"",displayName:"MlShareMapState",props:{mapId:{defaultValue:{value:"undefined"},description:"",name:"mapId",required:!1,type:{name:"string | undefined"}},idPrefix:{defaultValue:null,description:"",name:"idPrefix",required:!1,type:{name:"string | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlShareMapState/MlShareMapState.tsx#MlShareMapState"]={docgenInfo:v.__docgenInfo,name:"MlShareMapState",path:"src/components/MlShareMapState/MlShareMapState.tsx#MlShareMapState"})}catch(t){}},51834:(t,e,n)=>{n.d(e,{Z:()=>Z});var r=n(67294),o=n(7726),a=n(18377),i=n(93482),l=n(42440),c=n(77957),u=n(76956),s=n(31072),p=n(41733),m=n(30062),f=n(8044),d=n(6912),y=n(44598),v=n(47320),b=n(72642),g=n(2658),S=n(87205),h=n(48141);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function w(t){return function(t){if(Array.isArray(t))return P(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||I(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===O(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||I(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,e){if(t){if("string"==typeof t)return P(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(t,e):void 0}}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var C=[{name:"Point",mode:"draw_point",icon:r.createElement(S.Z,null)},{name:"LineString",mode:"draw_line_string",icon:r.createElement(h.Z,null)},{name:"Polygon",mode:"draw_polygon",icon:r.createElement(o.Z,null)}],T=function(t){var e,n,o=(0,s.Z)({mapId:t.mapId,waitForLayer:t.insertBeforeLayer}),S=M((0,r.useState)(),2),h=S[0],O=S[1],x=M((0,r.useState)({activeGeometryIndex:void 0,selectedGeoJson:void 0,geometries:[],drawMode:void 0}),2),j=x[0],I=x[1];(0,r.useEffect)((function(){"function"==typeof t.onChange&&t.onChange(j)}),[j,t.onChange]);var P=E({},t.buttonStyleOverride),T=function(){return r.createElement(r.Fragment,null,C.map((function(t){var e=function(e){return j.drawMode===t.mode?e.palette.primary.main:e.palette.navigation.navColor};return r.createElement(r.Fragment,null,r.createElement(d.Z,{title:t.name},r.createElement(b.Z,{sx:E({color:function(e){return j.drawMode!==t.mode?e.palette.primary.main:e.palette.navigation.navColor},backgroundColor:e,"&:hover":{backgroundColor:e}},P),onClick:function(){return e=t.mode,void I((function(t){return{drawMode:t.drawMode!==e?e:void 0,geometries:t.geometries,activeGeometryIndex:void 0,selectedGeoJson:void 0}}));var e}},t.icon)))})))};return r.createElement(r.Fragment,null,r.createElement(a.Z,{sx:{zIndex:104}},r.createElement(f.Z,null,r.createElement(T,null))),j.drawMode&&r.createElement(i.Z,{mode:j.drawMode,geojson:j.selectedGeoJson,onChange:function(t){null!=t&&t[0]&&I((function(e){var n=w(j.geometries);if(void 0===e.activeGeometryIndex){var r=t[0];r.properties.id=r.id,e.activeGeometryIndex=n.length,n.push(r)}else n[e.activeGeometryIndex]=t[0];return E(E({},e),{},{geometries:n})}))},onFinish:function(){I((function(t){return E(E({},t),{},{drawMode:void 0,activeGeometryIndex:void 0,selectedGeoJson:void 0})}))}}),r.createElement(l.Z,{sx:{zIndex:105,marginBottom:"-10px"}},j.geometries.map((function(e){return r.createElement(r.Fragment,null,r.createElement(a.Z,{key:e.id,sx:{display:"flex",flexDirection:"column"}},r.createElement("br",null),r.createElement(a.Z,{flexDirection:"row",sx:{"&:hover":{backgroundColor:"rgb(177, 177, 177, 0.2)"},marginTop:"25px"},onMouseOver:function(){O(e)},onMouseLeave:function(){O(void 0)}},r.createElement(y.Z,{listItemSx:P,configurable:!0,layerComponent:r.createElement(u.Z,{mapId:t.mapId,geojson:e,layerId:String(e.id)}),type:"layer",name:String(e.id),description:e.geometry.type}),r.createElement(a.Z,{sx:{padding:"3px 30px"}},r.createElement(f.Z,{size:"small"},r.createElement(b.Z,{onClick:function(){var t;null==o||null===(t=o.map)||void 0===t||t.map.setCenter("Point"===e.geometry.type?e.geometry.coordinates:m.MqI(e).geometry.coordinates)}},r.createElement(v.Z,null)),r.createElement(b.Z,{sx:P,onClick:function(){I((function(t){return E(E({},t),{},{selectedGeoJson:e,activeGeometryIndex:t.geometries.indexOf(e),drawMode:"simple_select"})}))}},r.createElement(c.Z,null)),r.createElement(b.Z,{sx:P,onClick:function(){var t;t=e,I((function(e){var n=w(e.geometries);return n.splice(n.indexOf(t),1),E(E({},e),{},{geometries:n,activeGeometryIndex:e.activeGeometryIndex?e.activeGeometryIndex-1:void 0})})),O(void 0)}},r.createElement(p.Z,null)))))))})),h&&r.createElement(u.Z,{mapId:t.mapId,geojson:{type:"FeatureCollection",features:[h]},layerId:"highlightBorder",defaultPaintOverrides:{circle:{"circle-color":"#dd9900","circle-opacity":.4,"circle-radius":10},line:{"line-color":"#dd9900","line-opacity":.4,"line-width":10},fill:{"fill-color":"#dd9900","fill-opacity":.4}}})),"simple_select"===j.drawMode&&r.createElement(g.Z,{sx:{fontSize:"0.6em"}},"Edit ",null===(e=j.selectedGeoJson)||void 0===e||null===(n=e.geometry)||void 0===n?void 0:n.type))};T.defaultProps={mapId:void 0,buttonStyleOverride:{}};const Z=T;try{T.displayName="MlSketchTool",T.__docgenInfo={description:"Component template",displayName:"MlSketchTool",props:{mapId:{defaultValue:{value:"undefined"},description:"Id of the target MapLibre instance in mapContext",name:"mapId",required:!1,type:{name:"string | undefined"}},insertBeforeLayer:{defaultValue:null,description:'Id of an existing layer in the mapLibre instance to help specify the layer order\nThis layer will be visually beneath the layer with the "insertBeforeLayer" id.',name:"insertBeforeLayer",required:!1,type:{name:"string | undefined"}},buttonStyleOverride:{defaultValue:{value:"{}"},description:"Style attribute for the button-style\nhttps://mui.com/system/getting-started/the-sx-prop/",name:"buttonStyleOverride",required:!1,type:{name:"SxProps<{}> | undefined"}},onChange:{defaultValue:null,description:"Callback function that is called each time GeoJson data has changed within MlSketchTool.\nFirst parameter contains all geometries in the `geometries` prop.",name:"onChange",required:!1,type:{name:"((para: SketchStateType) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlSketchTool/MlSketchTool.tsx#MlSketchTool"]={docgenInfo:T.__docgenInfo,name:"MlSketchTool",path:"src/components/MlSketchTool/MlSketchTool.tsx#MlSketchTool"})}catch(t){}}}]);