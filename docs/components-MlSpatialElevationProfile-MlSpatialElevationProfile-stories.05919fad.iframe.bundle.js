"use strict";(self.webpackChunk_mapcomponents_react_maplibre=self.webpackChunk_mapcomponents_react_maplibre||[]).push([[9440],{73544:(e,t,n)=>{var r=n(30492);t.c=void 0;var o=r(n(93540)),a=n(17624);t.c=(0,o.default)((0,a.jsx)("path",{d:"M7 8V5l-7 7 7 7v-3l-4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11"}),"ReplyAll")},55869:(e,t,n)=>{n.r(t),n.d(t,{ExampleConfig:()=>j,__namedExportsOrder:()=>S,default:()=>v});var r=n(11504),o=n(64804),a=n(42808),i=n(65152),s=n(90212),l=n(58444),c=n(30224),u=n(95316),p=n(93240),d=n(72576),m=n(2804),f=n(59476),b=n(68716),x=n(42084),g=n(17624);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,s=[],l=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const v={title:"MapComponents/MlSpatialElevationProfile",component:o.c,argTypes:{options:{control:{type:"object"}}},decorators:u.c};var j=function(){var e=y((0,r.useState)(),2),t=e[0],n=e[1],u=(0,i.c)({data:t}),h=y((0,r.useState)(!1),2),v=h[0],j=h[1],S=y((0,r.useState)(!1),2),O=S[0],w=S[1],I=y((0,r.useState)([]),2),T=I[0],M=I[1],_=(0,d.c)({mapId:"map_1"}),D=y((0,r.useState)(!0),2),G=D[0],E=D[1];return(0,r.useEffect)((function(){_.map&&60!=_.map.map.getPitch()&&_.map.map.setPitch(60)}),[_.map]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m.c,{open:O}),(0,g.jsx)(p.c,{buttons:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f.c,{variant:G?"contained":"outlined",onClick:function(){return E(!G)},sx:{marginRight:{xs:"0px",sm:"10px"}},children:"Informations"}),(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)(l.c,{setData:n,buttonComponent:(0,g.jsx)(f.c,{variant:"contained",sx:{marginRight:{xs:"0px",sm:"10px"}},children:"Upload"})}),(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)(f.c,{variant:"contained",onClick:function(){j(!v)},sx:{marginRight:{xs:"0px",sm:"10px"}},children:"Demo Mode"}),(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)(f.c,{variant:"contained",onClick:function(){w(!0),setTimeout((function(){w(!1)}),9e3)},sx:{display:"none"},children:"Guide me through"})]})}),(0,g.jsx)(b.c,{open:v,close:function(){return j(!1)},setGpx:n}),(0,g.jsx)(x.c,{open:G,setOpen:E,name:"GPX Informations",children:(0,g.jsx)(c.c,{metadata:T})}),(0,g.jsx)(s.c,{setData:function(e){return n(e)}}),(0,g.jsx)(a.c,{gpxData:t,onParseGpxData:function(e){return M(e.metadata?e.metadata:[])}}),(0,g.jsx)(o.c,{geojson:u.geojson})]})}.bind({});j.parameters={},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"() => {\n  const [gpxData, setGpxData] = useState<string | undefined>();\n  const parsedGpx = useGpx({\n    data: gpxData\n  });\n  const [demoLoaderOpen, setDemoLoaderOpen] = useState(false);\n  const [guide, setGuide] = useState(false);\n  const [metadata, setMetadata] = useState<MetadataType[]>([]);\n  const mapHook = useMap({\n    mapId: 'map_1'\n  });\n  const [openSidebar, setOpenSidebar] = useState(true);\n  const handleClick1 = () => {\n    setDemoLoaderOpen(!demoLoaderOpen);\n  };\n  const handleClick2 = () => {\n    setGuide(true);\n    setTimeout(() => {\n      setGuide(false);\n    }, 9000);\n  };\n  useEffect(() => {\n    if (!mapHook.map) return;\n    if (mapHook.map.map.getPitch() != 60) {\n      mapHook.map.map.setPitch(60);\n    }\n  }, [mapHook.map]);\n  return <>\n            <MlGpxViewerInstructions open={guide} />\n            <TopToolbar buttons={<>\n                        <Button variant={openSidebar ? 'contained' : 'outlined'} onClick={() => setOpenSidebar(!openSidebar)} sx={{\n        marginRight: {\n          xs: '0px',\n          sm: '10px'\n        }\n      }}>\n                            Informations\n                        </Button>\n                        <br />\n                        <br />\n                        <UploadButton setData={setGpxData} buttonComponent={<Button variant=\"contained\" sx={{\n        marginRight: {\n          xs: '0px',\n          sm: '10px'\n        }\n      }}>\n                                    Upload\n                                </Button>} />\n                        <br />\n                        <br />\n                        <Button variant=\"contained\" onClick={handleClick1} sx={{\n        marginRight: {\n          xs: '0px',\n          sm: '10px'\n        }\n      }}>\n                            Demo Mode\n                        </Button>\n                        <br />\n                        <br />\n                        <Button variant=\"contained\" onClick={handleClick2} sx={{\n        display: 'none'\n      }}>\n                            Guide me through\n                        </Button>\n                    </>} />\n            <MlGpxDemoLoader open={demoLoaderOpen} close={() => setDemoLoaderOpen(false)} setGpx={setGpxData} />\n\n            <Sidebar open={openSidebar} setOpen={setOpenSidebar} name={'GPX Informations'}>\n                <Metadata metadata={metadata} />\n            </Sidebar>\n            <Dropzone setData={data => setGpxData(data)} />\n            <MlGpxViewer gpxData={gpxData} onParseGpxData={parsedGpx => setMetadata(parsedGpx.metadata ? parsedGpx.metadata : [])} />\n            <MlSpatialElevationProfile geojson={parsedGpx.geojson} />\n        </>;\n}",...j.parameters?.docs?.source}}};const S=["ExampleConfig"]},30224:(e,t,n)=>{n.d(t,{c:()=>s}),n(11504);var r=n(35800),o=n(84568),a=n(39760),i=n(17624);function s(e){var t;return(0,i.jsx)(r.c,{children:(null===(t=e.metadata)||void 0===t?void 0:t.length)>0&&e.metadata.map((function(e,t){return(0,i.jsx)(o.cp,{children:(0,i.jsx)(a.c,{primary:e.value})},"item--".concat(t))}))})}s.displayName="Metadata";try{s.displayName="Metadata",s.__docgenInfo={description:"",displayName:"Metadata",props:{metadata:{defaultValue:null,description:"",name:"metadata",required:!0,type:{name:"MetadataType[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlGpxViewer/util/Metadata.tsx#Metadata"]={docgenInfo:s.__docgenInfo,name:"Metadata",path:"src/components/MlGpxViewer/util/Metadata.tsx#Metadata"})}catch(e){}},68716:(e,t,n)=>{n.d(t,{c:()=>S});var r=n(11504),o=n(5420),a=n(68857),i=n(47440),s=n(72584),l=n(59476),c=n(35800),u=n(84568),p=n(39760),d=n(94088),m=n(23964),f=n(37616),b=n(76968),x=n(34464),g=n(17624),y={position:"absolute",zIndex:500,top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"400px",boxShadow:20,alignItems:"center",padding:0,opacity:1,transition:"opacity 1s"},h={position:"absolute",top:"10%",left:"20%",width:"60%",bgcolor:"background.paper",boxShadow:24,zIndex:200,overflow:"scroll"},v=[{name:"mountain_trail.gpx",path:"assets/sample1.gpx"},{name:"bycycle_tour.gpx",path:"assets/sample2.gpx"},{name:"treckking.gpx",path:"assets/sample3.gpx"}],j=function(e){var t=(0,r.useRef)(new FileReader);t.current.onload=function(){var n;null!=t&&null!==(n=t.current)&&void 0!==n&&n.result&&"string"==typeof t.current.result&&e.setGpx(t.current.result)};var n=(0,d.c)((function(e){return e.breakpoints.down("md")})),j=function(e){fetch(e).then((function(e){return e.blob()})).then((function(e){t.current.readAsText(e)})).catch((function(e){return console.log(e)}))};return(0,r.useEffect)((function(){j("assets/sample2.gpx")}),[]),(0,g.jsx)(g.Fragment,{children:e.open&&(0,g.jsx)(f.c,{in:e.open,appear:!1,children:(0,g.jsx)(s.c,{sx:n?h:y,children:(0,g.jsxs)(b.c,{sx:{padding:"20px"},children:[(0,g.jsxs)(m.cp,{container:!0,children:[(0,g.jsx)(m.cp,{item:!0,xs:10,children:(0,g.jsx)(a.c,{id:"modal-modal-title",variant:"h6",children:"GPX demo files"})}),(0,g.jsx)(m.cp,{item:!0,xs:2,children:(0,g.jsx)(l.c,{onClick:e.close,children:(0,g.jsx)(i.c,{sx:{color:"text.primary"}})})})]}),(0,g.jsx)(o.c,{}),(0,g.jsx)(m.cp,{container:!0,children:(0,g.jsx)(c.c,{children:v.map((function(t,n){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u.cp,{children:(0,g.jsx)(x.c,{onClick:function(){j(t.path),e.close()},children:(0,g.jsx)(p.c,{children:t.name})})},n),(0,g.jsx)(o.c,{variant:"inset",component:"li"},"div"+n)]})}))})})]})})})})};const S=j;try{j.displayName="MlGpxDemoLoader",j.__docgenInfo={description:"MlGpxDemoLoader returns a button to load a Demo GPX Track into the map.",displayName:"MlGpxDemoLoader",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},close:{defaultValue:null,description:"",name:"close",required:!0,type:{name:"() => void"}},setGpx:{defaultValue:null,description:"",name:"setGpx",required:!0,type:{name:"(gpx: string | undefined) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlGpxViewer/util/MlGpxDemoLoader.tsx#MlGpxDemoLoader"]={docgenInfo:j.__docgenInfo,name:"MlGpxDemoLoader",path:"src/components/MlGpxViewer/util/MlGpxDemoLoader.tsx#MlGpxDemoLoader"})}catch(e){}},2804:(e,t,n)=>{n.d(t,{c:()=>p}),n(11504);var r=n(24948),o=n(94088),a=n(17624);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){var r,o,a,s;r=e,o=t,a=n[t],s=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==i(s)?s:String(s))in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={bubbleTop:"-150px",textMarginTop:"230px",textMarginLeft:"75px",iconTransform:"rotate(90deg)",iconMarginLeft:"280px",zIndex:"400"},u=function(e){return[{duration:3e3,props:l(l({},c),{},{bubbleLeft:"595px",iconMarginTop:"-130px",bubbleBottom:e?"90px":"0"}),content:(0,a.jsxs)(a.Fragment,{children:["You can see more ",(0,a.jsx)("br",{})," information about ",(0,a.jsx)("br",{}),"the track ",(0,a.jsx)("br",{}),"here"]})},{duration:3e3,props:l(l({},c),{},{bubbleLeft:"705px",iconMarginTop:"-100px",bubbleBottom:e?"90px":"0"}),content:(0,a.jsxs)(a.Fragment,{children:["You can load your ",(0,a.jsx)("br",{}),"own GPX file ",(0,a.jsx)("br",{})," here"]})},{duration:3e3,props:l(l({},c),{},{bubbleLeft:"820px",iconMarginTop:"-130px",bubbleBottom:e?"90px":"0"}),content:(0,a.jsxs)(a.Fragment,{children:["In demo mode we ",(0,a.jsx)("br",{})," provide you some ",(0,a.jsx)("br",{})," GPX tracks ",(0,a.jsx)("br",{})," to load."]})}]};function p(e){var t=(0,o.c)((function(e){return e.breakpoints.down("md")}));return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.c,{steps:u(t),open:e.open})})}try{p.displayName="MlGpxViewerInstructions",p.__docgenInfo={description:"",displayName:"MlGpxViewerInstructions",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlGpxViewer/util/MlGpxViewerInstructions.tsx#MlGpxViewerInstructions"]={docgenInfo:p.__docgenInfo,name:"MlGpxViewerInstructions",path:"src/components/MlGpxViewer/util/MlGpxViewerInstructions.tsx#MlGpxViewerInstructions"})}catch(e){}},95316:(e,t,n)=>{n.d(t,{c:()=>u});var r=n(11504),o=n(77288),a=n(24732),i=(n(47634),n(21200)),s=n(54656),l=n(76508),c=n(17624);const u=[function(e,t){var n,u=(0,r.useMemo)((function(){var e;return(0,l.c)(null==t||null===(e=t.globals)||void 0===e?void 0:e.theme)}),[null==t||null===(n=t.globals)||void 0===n?void 0:n.theme]);return(0,c.jsx)("div",{className:"fullscreen_map",children:(0,c.jsx)(o.y4,{children:(0,c.jsxs)(s.c,{theme:u,children:[(0,c.jsx)(e,{}),(0,c.jsx)(a.c,{options:{zoom:14.5,style:"https://wms.wheregroup.com/tileserver/style/osm-bright.json",center:[7.0851268,50.73884]},mapId:"map_1"}),(0,c.jsx)(i.c,{showZoomButtons:!1,mapId:"map_1"})]})})})}]},90212:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(11504),o=n(68857),a=n(17624);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=function(e){e.preventDefault(),e.stopPropagation()};function l(e){var t,n,l=(t=(0,r.useState)(0),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,s=[],l=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return s}}(t,n)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=l[0],u=l[1],p=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=p.current,t=function(e){u(1e3),s(e)},n=function(){u(0)},r=function(e){u(0),s(e)};return window.addEventListener("dragenter",t),window.addEventListener("dragover",s),null==e||e.addEventListener("dragleave",n),window.addEventListener("drop",r),function(){window.removeEventListener("dragenter",t),window.removeEventListener("dragover",s),null==e||e.removeEventListener("dragleave",n),window.removeEventListener("drop",r)}}),[]),(0,a.jsx)("div",{onDrop:function(t){var n;if(t.preventDefault(),null!=t&&null!==(n=t.dataTransfer)&&void 0!==n&&n.items){if(t.dataTransfer.items.length>1)return!1;if("file"===t.dataTransfer.items[0].kind){var r=new FileReader;r.onload=function(t){var n;null!=t&&null!==(n=t.currentTarget)&&void 0!==n&&n.result&&"function"==typeof e.setData&&e.setData(t.currentTarget.result)};var o=t.dataTransfer.items[0].getAsFile();o&&r.readAsText(o)}}},ref:p,style:{position:"absolute",left:"0",top:"0",backgroundColor:"rgba(255,255,255,0.5)",width:"100%",height:"100%",zIndex:c},children:(0,a.jsx)(o.c,{variant:"h6",style:{top:"50%",position:"absolute",left:"50%",msTransform:"translate(-50%, -50%)",transform:" translate(-50%, -50%)"},noWrap:!0,children:"Datei ablegen"})})}l.displayName="Dropzone";try{l.displayName="Dropzone",l.__docgenInfo={description:"",displayName:"Dropzone",props:{setData:{defaultValue:null,description:"",name:"setData",required:!0,type:{name:"(data: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui_components/Dropzone.tsx#Dropzone"]={docgenInfo:l.__docgenInfo,name:"Dropzone",path:"src/ui_components/Dropzone.tsx#Dropzone"})}catch(e){}},24948:(e,t,n)=>{n.d(t,{c:()=>x});var r=n(11504),o=n(37616),a=n(73544),i=n(72584),s=n(68857),l=n(17624);function c(e){return(0,l.jsxs)(i.c,{sx:{width:"475px",height:"475px",position:"fixed",display:"block",borderRadius:"360px",bgcolor:"primary.main",right:e.bubbleRight,bottom:e.bubbleBottom,left:e.bubbleLeft,top:e.bubbleTop,zIndex:e.zIndex},children:[(0,l.jsx)(s.c,{variant:"h5",sx:{marginTop:e.textMarginTop,marginLeft:e.textMarginLeft,color:"#fff",textAlign:"left"},children:(0,l.jsx)("b",{children:e.children})}),(0,l.jsx)(a.c,{sx:{color:"#fff",fontSize:"80px",position:"absolute",transform:e.iconTransform,marginTop:e.iconMarginTop,marginLeft:e.iconMarginLeft}})]})}c.displayName="BubbleForInstruction";const u=c;try{c.displayName="BubbleForInstruction",c.__docgenInfo={description:"",displayName:"BubbleForInstruction",props:{bubbleRight:{defaultValue:null,description:"",name:"bubbleRight",required:!1,type:{name:"string | undefined"}},bubbleLeft:{defaultValue:null,description:"",name:"bubbleLeft",required:!1,type:{name:"string | undefined"}},bubbleTop:{defaultValue:null,description:"",name:"bubbleTop",required:!1,type:{name:"string | undefined"}},bubbleBottom:{defaultValue:null,description:"",name:"bubbleBottom",required:!1,type:{name:"string | undefined"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!0,type:{name:"string"}},textMarginTop:{defaultValue:null,description:"",name:"textMarginTop",required:!0,type:{name:"string"}},textMarginLeft:{defaultValue:null,description:"",name:"textMarginLeft",required:!0,type:{name:"string"}},iconTransform:{defaultValue:null,description:"",name:"iconTransform",required:!0,type:{name:"string"}},iconMarginTop:{defaultValue:null,description:"",name:"iconMarginTop",required:!0,type:{name:"string"}},iconMarginLeft:{defaultValue:null,description:"",name:"iconMarginLeft",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/util/BubbleForInstructions.tsx#BubbleForInstruction"]={docgenInfo:c.__docgenInfo,name:"BubbleForInstruction",path:"src/util/BubbleForInstructions.tsx#BubbleForInstruction"})}catch(e){}function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){var r,o,a,i;r=e,o=t,a=n[t],i=function(e,t){if("object"!=p(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==p(i)?i:String(i))in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=function(e){var t,n,a=(t=(0,r.useState)(),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,s=[],l=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return s}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],s=a[1],c=(0,r.useRef)(!1),p=function t(n){var r=void 0===n?0:n+1;void 0!==r&&(r>e.steps.length+1?r=void 0:setTimeout((function(){t(r)}),e.steps[r].duration)),s(r)};return(0,r.useEffect)((function(){e.open&&!c.current&&(c.current=!0,p()),e.open||(c.current=!1,s(void 0))}),[e.open]),(0,l.jsx)(l.Fragment,{children:void 0!==i&&(0,l.jsx)(o.c,{in:!0,timeout:150,children:(0,l.jsx)("div",{children:(0,l.jsx)(u,m(m({},e.steps[i].props),{},{children:e.steps[i].content}))})})})};const x=b;try{b.displayName="Instructions",b.__docgenInfo={description:"",displayName:"Instructions",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"StepObject[]"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},callback:{defaultValue:null,description:"",name:"callback",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/util/Instructions.tsx#Instructions"]={docgenInfo:b.__docgenInfo,name:"Instructions",path:"src/util/Instructions.tsx#Instructions"})}catch(e){}}}]);