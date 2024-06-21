"use strict";(self.webpackChunk_mapcomponents_react_maplibre=self.webpackChunk_mapcomponents_react_maplibre||[]).push([[5901],{78295:(e,n,o)=>{o.r(n),o.d(n,{CatalogueDemo:()=>ie,Circle:()=>Z,DefaultPaintOverrides:()=>le,HeatMap:()=>te,Label:()=>ne,Linestring:()=>oe,OsmProtocol:()=>ee,Polygon:()=>re,Symbol:()=>ae,__namedExportsOrder:()=>se,default:()=>K});var r=o(96540),t=o(14073),a=o(61224),l=o(19741),i=o(73896),s=o(36852),p=o(40948),c=o(73377),u=o(16951),m=o(77343);const d=o.p+"static/media/wgMarker.2fd9ca5b.png";var y=o(77070),f=o(30995),g=o(50779),b=o(2071),h=o(27558),j=o(82241),S=o(66),v=o(88809),x=o(40554),A=o(74848);function M(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r,t,a,l,i=[],s=!0,p=!1;try{if(a=(o=o.call(e)).next,0===n){if(Object(o)!==o)return;s=!1}else for(;!(s=(r=a.call(o)).done)&&(i.push(r.value),i.length!==n);s=!0);}catch(e){p=!0,t=e}finally{try{if(!s&&null!=o.return&&(l=o.return(),Object(l)!==l))return}finally{if(p)throw t}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return L(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?L(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,n){(null==n||n>e.length)&&(n=e.length);for(var o=0,r=new Array(n);o<n;o++)r[o]=e[o];return r}var C=["Show all","In der Sürst","Münsterplatz","Poststraße","Mauspfad","Remiglustraße","Windeckstraße"],O=[{value:0,label:"0%"},{value:.25,label:"25%"},{value:.5,label:"50%"},{value:.75,label:"75%"},{value:1,label:"100%"}],k=[{value:0,label:"0"},{value:5,label:"5"},{value:10,label:"10"}],z={PaperProps:{style:{maxHeight:224,width:250}}};const I=function(e){var n=e.geojson,o=e.openSidebar,a=e.setOpenSidebar,l=M((0,r.useState)("#2485C1"),2),p=l[0],c=l[1],u=M((0,r.useState)(.8),2),m=u[0],d=u[1],L=M((0,r.useState)(["Show all"]),2),I=L[0],P=L[1],E=M((0,r.useState)(5),2),T=E[0],G=E[1],w=(0,x.A)({mapId:void 0}),H=(0,r.useRef)(!1);(0,r.useEffect)((function(){w.map&&!H.current&&(H.current=!0,w.map.map.flyTo({center:[7.100175528281227,50.73487992742369],zoom:15.5}))}),[w.map]);var R=(0,r.useMemo)((function(){return I.includes("Show all")?n:{type:"FeatureCollection",features:n.features.filter((function(e){var n;return I.includes(null==e||null===(n=e.properties)||void 0===n?void 0:n.name)}))}}),[I,n]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(y.A,{open:o,setOpen:a,name:"GeoJson Layer",children:(0,A.jsxs)(f.A,{paddingTop:5,spacing:3,direction:"column",sx:{mb:15},alignItems:"left",children:[(0,A.jsx)(t.A,{children:"Feature to show:"}),(0,A.jsx)(g.A,{children:(0,A.jsx)(b.A,{id:"demo-multiple-checkbox",multiple:!0,native:!1,value:I,onChange:function(e){P("string"==typeof e.target.value?e.target.value.split(","):e.target.value)},renderValue:function(e){return e.join(", ")},MenuProps:z,children:null==C?void 0:C.map((function(e){return(0,A.jsxs)(i.A,{value:e,children:[(0,A.jsx)(h.A,{checked:I.indexOf(e||"Show All")>-1}),(0,A.jsx)(j.A,{primary:e})]},e)}))})}),(0,A.jsx)(t.A,{children:"Display color:"}),(0,A.jsx)(v.A,{value:p,onChange:function(e){c(e)}}),(0,A.jsx)(t.A,{children:"Opacity:"}),(0,A.jsx)(S.Ay,{value:m,"aria-label":"Default",max:1,min:0,step:.1,marks:O,onChange:function(e,n){d(n)}}),(0,A.jsx)(t.A,{paddingTop:4,children:"Stroke:"}),(0,A.jsx)(S.Ay,{value:T,"aria-label":"Default",max:10,min:0,step:1,marks:k,onChange:function(e,n){G(n)}})]})}),(0,A.jsx)(s.A,{geojson:R,layerId:"Linestring",type:"line",defaultPaintOverrides:{line:{"line-color":p,"line-opacity":m,"line-width":T}}})]})};try{MlGeoJsonLayerlineStyler.displayName="MlGeoJsonLayerlineStyler",MlGeoJsonLayerlineStyler.__docgenInfo={description:"",displayName:"MlGeoJsonLayerlineStyler",props:{geojson:{defaultValue:null,description:"",name:"geojson",required:!0,type:{name:"GeoJSON"}},openSidebar:{defaultValue:null,description:"",name:"openSidebar",required:!0,type:{name:"boolean"}},setOpenSidebar:{defaultValue:null,description:"",name:"setOpenSidebar",required:!0,type:{name:"(open: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlGeoJsonLayer/story_utils/MlGeoJsonLayer.lineStyler.tsx#MlGeoJsonLayerlineStyler"]={docgenInfo:MlGeoJsonLayerlineStyler.__docgenInfo,name:"MlGeoJsonLayerlineStyler",path:"src/components/MlGeoJsonLayer/story_utils/MlGeoJsonLayer.lineStyler.tsx#MlGeoJsonLayerlineStyler"})}catch(e){}function P(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r,t,a,l,i=[],s=!0,p=!1;try{if(a=(o=o.call(e)).next,0===n){if(Object(o)!==o)return;s=!1}else for(;!(s=(r=a.call(o)).done)&&(i.push(r.value),i.length!==n);s=!0);}catch(e){p=!0,t=e}finally{try{if(!s&&null!=o.return&&(l=o.return(),Object(l)!==l))return}finally{if(p)throw t}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return E(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?E(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var o=0,r=new Array(n);o<n;o++)r[o]=e[o];return r}var T=[{value:0,label:"0%"},{value:.25,label:"25%"},{value:.5,label:"50%"},{value:.75,label:"75%"},{value:1,label:"100%"}],G=[{value:0,label:"0"},{value:5,label:"5"},{value:10,label:"10"}];const w=function(e){var n=e.geojson,o=e.openSidebar,a=e.setOpenSidebar,l=P((0,r.useState)("#2485C1"),2),p=l[0],c=l[1],u=P((0,r.useState)(.8),2),m=u[0],d=u[1],h=P((0,r.useState)("Show all"),2),j=h[0],M=h[1],L=P((0,r.useState)("fill"),2),C=L[0],O=L[1],k=P((0,r.useState)(6),2),z=k[0],I=k[1],E=(0,x.A)({mapId:void 0}),w=(0,r.useRef)(!1);(0,r.useEffect)((function(){E.map&&!w.current&&(w.current=!0,E.map.map.flyTo({center:[7.100175528281227,50.73487992742369],zoom:16}))}),[E.map]);var H=(0,r.useMemo)((function(){return"Show all"===j?n:{type:"FeatureCollection",features:n.features.filter((function(e){var n;return(null===(n=e.properties)||void 0===n?void 0:n.name)===j}))}}),[j,n]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(y.A,{open:o,setOpen:a,name:"GeoJson Layer Polygon",children:(0,A.jsxs)(f.A,{paddingTop:5,spacing:3,direction:"column",sx:{mb:15},alignItems:"left",children:[(0,A.jsxs)(g.A,{children:[(0,A.jsx)(t.A,{children:"Geometry type:"}),(0,A.jsxs)(b.A,{value:C,onChange:function(e){O(e.target.value)},children:[(0,A.jsx)(i.A,{value:"fill",children:"fill"},1),(0,A.jsx)(i.A,{value:"circle",children:"circle"},2),(0,A.jsx)(i.A,{value:"line",children:"line"},3)]})]}),(0,A.jsx)(t.A,{children:"Feature to show:"}),(0,A.jsx)(g.A,{children:(0,A.jsxs)(b.A,{value:j,onChange:function(e){M(e.target.value)},children:[(0,A.jsx)(i.A,{value:"Show all",children:"Show all"},1),(0,A.jsx)(i.A,{value:"Hofgarten",children:"Hofgarten"},2),(0,A.jsx)(i.A,{value:"Stadtgarten",children:"Stadtgarten"},3),(0,A.jsx)(i.A,{value:"Opernplatz",children:"Opernplatz"},4),(0,A.jsx)(i.A,{value:"Keiserplatz",children:"Keiserplatz"},5)]})}),(0,A.jsx)(t.A,{children:"Display color:"}),(0,A.jsx)(v.A,{value:p,onChange:function(e){c(e)}}),(0,A.jsx)(t.A,{children:"Opacity:"}),(0,A.jsx)(S.Ay,{defaultValue:1,"aria-label":"Default",value:m,max:1,min:0,step:.01,marks:T,onChange:function(e,n){d(n),console.log(e)}}),(0,A.jsx)(t.A,{paddingTop:4,children:"Stroke:"}),(0,A.jsx)(S.Ay,{value:z,"aria-label":"Default",max:10,min:0,step:1,marks:G,onChange:function(e,n){I(n)},disabled:"line"!==C})]})}),(0,A.jsx)(s.A,{geojson:H,defaultPaintOverrides:{fill:{"fill-color":p,"fill-opacity":m},circle:{"circle-color":p,"circle-opacity":m},line:{"line-color":p,"line-opacity":m,"line-width":z}},type:C})]})};try{MlGeoJsonLayerpolygonStyler.displayName="MlGeoJsonLayerpolygonStyler",MlGeoJsonLayerpolygonStyler.__docgenInfo={description:"",displayName:"MlGeoJsonLayerpolygonStyler",props:{geojson:{defaultValue:null,description:"",name:"geojson",required:!0,type:{name:"FeatureCollection<Geometry, GeoJsonProperties>"}},openSidebar:{defaultValue:null,description:"",name:"openSidebar",required:!0,type:{name:"boolean"}},setOpenSidebar:{defaultValue:null,description:"",name:"setOpenSidebar",required:!0,type:{name:"(open: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlGeoJsonLayer/story_utils/MlGeoJsonLayer.polygonStyler.tsx#MlGeoJsonLayerpolygonStyler"]={docgenInfo:MlGeoJsonLayerpolygonStyler.__docgenInfo,name:"MlGeoJsonLayerpolygonStyler",path:"src/components/MlGeoJsonLayer/story_utils/MlGeoJsonLayer.polygonStyler.tsx#MlGeoJsonLayerpolygonStyler"})}catch(e){}var H=o(61102),R=o(21568),F=o(95532),J=o(32348),_=(o(18582),o(65793)),B=o(30901),D=o(68704);const q=[function(e,n){var o,t=(0,r.useMemo)((function(){var e;return(0,B.A)(null==n||null===(e=n.globals)||void 0===e?void 0:e.theme)}),[null==n||null===(o=n.globals)||void 0===o?void 0:o.theme]),a=!n||"Heat Map"!==n.name&&"Circle"!==n.name&&"Symbol"!==n.name?15:3,l=!n||"Heat Map"!==n.name&&"Circle"!==n.name&&"Symbol"!==n.name?[7.104418060409521,50.73394661255866]:[4.5424,39.44518];return(0,A.jsx)("div",{className:"fullscreen_map",children:(0,A.jsx)(F.mO,{children:(0,A.jsxs)(_.A,{theme:t,children:[(0,A.jsx)(e,{}),(0,A.jsx)(J.A,{options:{zoom:a,style:"https://wms.wheregroup.com/tileserver/style/osm-bright.json",center:l},mapId:"map_1"}),(0,A.jsx)(D.A,{showFollowGpsButton:!1})]})})})}];var W=o(46256);function V(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r,t,a,l,i=[],s=!0,p=!1;try{if(a=(o=o.call(e)).next,0===n){if(Object(o)!==o)return;s=!1}else for(;!(s=(r=a.call(o)).done)&&(i.push(r.value),i.length!==n);s=!0);}catch(e){p=!0,t=e}finally{try{if(!s&&null!=o.return&&(l=o.return(),Object(l)!==l))return}finally{if(p)throw t}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return N(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?N(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,n){(null==n||n>e.length)&&(n=e.length);for(var o=0,r=new Array(n);o<n;o++)r[o]=e[o];return r}const K={title:"MapComponents/MlGeoJsonLayer",component:s.A,argTypes:{},decorators:q};var U={circle:"WhereGroup locations by number of employees",symbol:"WhereGroup locations by number of employees",heatmap:"Earthquakes by magnitude in Alaska",polygon:"Parks&Squares in Bonn"},Y=function(e){var n=(0,x.A)({mapId:void 0}),o=(0,r.useRef)(!1);return(0,r.useEffect)((function(){n.map&&!o.current&&(o.current=!0,n.map.map.flyTo({center:[10.251805123900311,51.11826171422632],zoom:5}))}),[n.map]),(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(s.A,{geojson:e.geojson,layerId:"Circle",type:"circle",options:{paint:{"circle-radius":{property:"Mitarbeitende",stops:[[3,6],[26,35]]},"circle-color":"#009EE0"}},labelOptions:{minzoom:5,maxzoom:18}})})},$=function(e){var n=(0,x.A)({mapId:void 0}),o=(0,r.useRef)(!1);return(0,r.useEffect)((function(){n.map&&!o.current&&(o.current=!0,n.map.map.flyTo({center:[-150.4048,63.1224],zoom:3}))}),[n.map]),(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(s.A,{geojson:e.geojson,type:"heatmap",options:{paint:{"heatmap-weight":["interpolate",["linear"],["get","mag"],0,0,6,1],"heatmap-intensity":["interpolate",["linear"],["zoom"],0,1,9,3],"heatmap-color":["interpolate",["linear"],["heatmap-density"],0,"rgba(33,102,172,0)",.2,"rgb(255,255,0)",.4,"rgb(255,200,10)",.6,"rgb(255,140,20)",.8,"rgb(220,80,30)",1,"rgb(255,10,40)"],"heatmap-radius":["interpolate",["linear"],["zoom"],0,2,9,20],"heatmap-opacity":["interpolate",["linear"],["zoom"],7,1,9,0]}}})})},Q=function(e){var n,o=(0,x.A)({mapId:void 0}),t=(0,r.useRef)(!1);return(0,r.useEffect)((function(){o.map&&!t.current&&(t.current=!0,o.map.map.flyTo({center:[10.251805123900311,51.11826171422632],zoom:5}))}),[o.map]),null===(n=o.map)||void 0===n||n.loadImage(d).then((function(e){var n;null!=e&&e.data?null===(n=o.map)||void 0===n||n.addImage("wgLogo",e.data):console.log("image WG Marker could not be loaded")})),(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(s.A,{geojson:e.geojson,layerId:"Symbol",type:"symbol",options:{layout:{"icon-image":"wgLogo","icon-size":{property:"Mitarbeitende",stops:[[3,.06],[26,.2]]}}}})})},X=function(e){var n=(0,x.A)({mapId:void 0}),o=(0,r.useRef)(!1);return(0,r.useEffect)((function(){n.map&&!o.current&&(o.current=!0,n.map.map.flyTo({center:[7.105175528281227,50.73348799274236],zoom:15.5}))}),[n.map]),(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(s.A,{geojson:e.geojson,type:e.type,defaultPaintOverrides:{fill:{"fill-color":"blue"},circle:{"circle-color":"red"},line:{"line-color":"black"}}})})},Z=Y.bind({});Z.parameters={},Z.args={geojson:u,title:"WhereGroup locations by number of employees"};var ee=function(){var e=(0,x.A)({mapId:void 0});return(0,R.A)({protocol:"osm",handler:W.U}),(0,r.useEffect)((function(){var n;e.map&&(null===(n=e.map)||void 0===n||n.jumpTo({center:[2.651811,39.571309],zoom:16.5}))}),[e.map]),(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(s.A,{type:"line",defaultPaintOverrides:{line:{"line-color":"#009EE0","line-width":6}},options:{source:{type:"geojson",data:"osm://osm/palma.osm?completeFeature=true&allFeatures=false&renderTagged=false&excludeWay=false&suppressWay=false"}},labelProp:"name",labelOptions:{paint:{"text-color":"#ff0000"},minzoom:5,maxzoom:18}})})}.bind({});ee.parameters={},ee.args={};var ne=function(){var e=(0,x.A)({mapId:void 0});return(0,r.useEffect)((function(){e.map&&e.map.map.flyTo({center:[10.251805123900311,51.11826171422632],zoom:5})}),[e.map]),(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(s.A,{type:"circle",geojson:u,options:{paint:{"circle-radius":{property:"Mitarbeitende",stops:[[3,6],[26,35]]},"circle-color":"#009EE0"}},labelProp:"Mitarbeitende",labelOptions:{minzoom:5,maxzoom:18}})})}.bind({});ne.parameters={},ne.args={};var oe=function(e){var n=(0,x.A)({mapId:void 0}),o=(0,r.useRef)(!1);return(0,r.useEffect)((function(){n.map&&!o.current&&(o.current=!0,n.map.map.flyTo({center:[7.100175528281227,50.73487992742369],zoom:16}))}),[n.map]),(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(s.A,{geojson:e.geojson,layerId:"Linestring",type:"line",defaultPaintOverrides:{line:{"line-color":"#2485C1","line-opacity":.8,"line-width":6}}})})}.bind({});oe.parameters={},oe.args={geojson:c};var re=function(e){var n=(0,x.A)({mapId:void 0}),o=(0,r.useRef)(!1);return(0,r.useEffect)((function(){n.map&&!o.current&&(o.current=!0,n.map.map.flyTo({center:[7.105175528281227,50.73348799274236],zoom:15.5}))}),[n.map]),(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(s.A,{geojson:e.geojson,layerId:"Polygon",type:"fill",defaultPaintOverrides:{fill:{"fill-color":"#2485C1","fill-opacity":.8}}})})}.bind({});re.parameters={},re.args={geojson:p,title:"Parks & Squares in Bonn"};var te=$.bind({});te.parameters={},te.args={geojson:m,title:"Earthquakes by magnitude in Alaska"};var ae=Q.bind({});ae.parameters={},ae.args={geojson:u,title:"WhereGroup locations by number of employees"};var le=X.bind({});le.parameters={},le.args={geojson:p,type:"fill"};var ie=function(){var e=V((0,r.useState)(!0),2),n=e[0],o=e[1],s=V((0,r.useState)("circle"),2),p=s[0],c=s[1],u=V(r.useState(null),2),m=u[0],d=u[1],y=Boolean(m),f=function(e){c(e)};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(H.A,{unmovableButtons:(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(t.A,{variant:"h6",color:"ButtonText",marginRight:"20px",children:U[p]}),("polygon"===p||"line"===p)&&(0,A.jsx)(a.A,{variant:n?"contained":"outlined",sx:{marginRight:"10px"},onClick:function(){return o(!n)},children:"Layer options"}),(0,A.jsx)(a.A,{id:"basic-button",variant:"contained","aria-controls":y?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":y?"true":void 0,onClick:function(e){d(e.currentTarget)},children:"Example Configs"}),(0,A.jsxs)(l.A,{id:"basic-menu",anchorEl:m,open:y,onClose:function(){d(null)},MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,A.jsx)(i.A,{onClick:function(){return f("circle")},children:"Circle Configuration"}),(0,A.jsx)(i.A,{onClick:function(){return f("line")},children:"Line Configuration"}),(0,A.jsx)(i.A,{onClick:function(){return f("polygon")},children:"Polygon Configuration"}),(0,A.jsx)(i.A,{onClick:function(){return f("heatmap")},children:"Heatmap Configuration"}),(0,A.jsx)(i.A,{onClick:function(){return f("symbol")},children:"Symbol Configuration"}),(0,A.jsx)(i.A,{onClick:function(){return f("default")},children:"Default Paint Overrides"})]})]})}),"circle"===p&&(0,A.jsx)(Y,{geojson:Z.args.geojson}),"line"===p&&(0,A.jsx)(I,{openSidebar:n,setOpenSidebar:o,geojson:oe.args.geojson}),"polygon"===p&&(0,A.jsx)(w,{openSidebar:n,setOpenSidebar:o,geojson:re.args.geojson}),"heatmap"===p&&(0,A.jsx)($,{geojson:te.args.geojson}),"symbol"===p&&(0,A.jsx)(Q,{geojson:ae.args.geojson}),"default"===p&&(0,A.jsx)(X,{geojson:le.args.geojson})]})}.bind({});ie.parameters={},ie.args={},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:"(props: MlGeoJsonLayerProps) => {\n  const mapHook = useMap({\n    mapId: undefined\n  });\n  const initializedRef = useRef(false);\n  useEffect(() => {\n    if (!mapHook.map || initializedRef.current) return;\n    initializedRef.current = true;\n    mapHook.map.map.flyTo({\n      center: [10.251805123900311, 51.11826171422632],\n      zoom: 5\n    });\n  }, [mapHook.map]);\n  return <>\n            <MlGeoJsonLayer geojson={props.geojson} layerId=\"Circle\" type=\"circle\" options={{\n      paint: {\n        'circle-radius': ({\n          property: 'Mitarbeitende',\n          stops: [[3, 6], [26, 35]]\n        } as DataDrivenPropertyValueSpecification<number>),\n        'circle-color': '#009EE0'\n      }\n    }} labelOptions={{\n      minzoom: 5,\n      maxzoom: 18\n    }} />\n        </>;\n}",...Z.parameters?.docs?.source}}},ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:"() => {\n  const mapHook = useMap({\n    mapId: undefined\n  });\n  useAddProtocol({\n    protocol: 'osm',\n    handler: OSMProtocolHandler\n  });\n  useEffect(() => {\n    if (!mapHook.map) return;\n    mapHook.map?.jumpTo({\n      center: [2.651811, 39.571309],\n      zoom: 16.5\n    });\n  }, [mapHook.map]);\n  return <>\n            <MlGeoJsonLayer type=\"line\" defaultPaintOverrides={{\n      line: {\n        'line-color': '#009EE0',\n        'line-width': 6\n      }\n    }} options={{\n      source: {\n        type: 'geojson',\n        data: `osm://osm/palma.osm?completeFeature=true&allFeatures=false&renderTagged=false&excludeWay=false&suppressWay=false`\n      }\n    }} labelProp=\"name\" labelOptions={{\n      paint: {\n        'text-color': '#ff0000'\n      },\n      minzoom: 5,\n      maxzoom: 18\n    }} />\n        </>;\n}",...ee.parameters?.docs?.source}}},ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:"() => {\n  const mapHook = useMap({\n    mapId: undefined\n  });\n  useEffect(() => {\n    if (!mapHook.map) return;\n    mapHook.map.map.flyTo({\n      center: [10.251805123900311, 51.11826171422632],\n      zoom: 5\n    });\n  }, [mapHook.map]);\n  return <>\n            <MlGeoJsonLayer type=\"circle\" geojson={(wgLocations as FeatureCollection)} options={{\n      paint: {\n        'circle-radius': ({\n          property: 'Mitarbeitende',\n          stops: [[3, 6], [26, 35]]\n        } as DataDrivenPropertyValueSpecification<number>),\n        'circle-color': '#009EE0'\n      }\n    }} labelProp=\"Mitarbeitende\" labelOptions={{\n      minzoom: 5,\n      maxzoom: 18\n    }} />\n        </>;\n}",...ne.parameters?.docs?.source}}},oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:"(props: TemplateProps) => {\n  const mapHook = useMap({\n    mapId: undefined\n  });\n  const initializedRef = useRef(false);\n  useEffect(() => {\n    if (!mapHook.map || initializedRef.current) return;\n    initializedRef.current = true;\n    mapHook.map.map.flyTo({\n      center: [7.100175528281227, 50.73487992742369],\n      zoom: 16\n    });\n  }, [mapHook.map]);\n  return <>\n            <MlGeoJsonLayer geojson={props.geojson} layerId=\"Linestring\" type=\"line\" defaultPaintOverrides={{\n      line: {\n        'line-color': '#2485C1',\n        'line-opacity': 0.8,\n        'line-width': 6\n      }\n    }} />\n        </>;\n}",...oe.parameters?.docs?.source}}},re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:"(props: TemplateProps) => {\n  const mapHook = useMap({\n    mapId: undefined\n  });\n  const initializedRef = useRef(false);\n  useEffect(() => {\n    if (!mapHook.map || initializedRef.current) return;\n    initializedRef.current = true;\n    mapHook.map.map.flyTo({\n      center: [7.105175528281227, 50.73348799274236],\n      zoom: 15.5\n    });\n  }, [mapHook.map]);\n  return <>\n            <MlGeoJsonLayer geojson={props.geojson} layerId=\"Polygon\" type=\"fill\" defaultPaintOverrides={{\n      fill: {\n        'fill-color': '#2485C1',\n        'fill-opacity': 0.8\n      }\n    }} />\n        </>;\n}",...re.parameters?.docs?.source}}},te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:"(props: MlGeoJsonLayerProps) => {\n  const mapHook = useMap({\n    mapId: undefined\n  });\n  const initializedRef = useRef(false);\n  useEffect(() => {\n    if (!mapHook.map || initializedRef.current) return;\n    initializedRef.current = true;\n    mapHook.map.map.flyTo({\n      center: [-150.4048, 63.1224],\n      zoom: 3\n    });\n  }, [mapHook.map]);\n  return <>\n            <MlGeoJsonLayer geojson={props.geojson} type=\"heatmap\" options={{\n      // paint examples copied from https://maplibre.org/maplibre-gl-js-docs/example/heatmap-layer/\n      paint: {\n        // Increase the heatmap weight based on frequency and property magnitude\n        'heatmap-weight': ['interpolate', ['linear'], ['get', 'mag'], 0, 0, 6, 1],\n        // Increase the heatmap color weight by zoom level\n        // heatmap-intensity is a multiplier on top of heatmap-weight\n        'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],\n        // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).\n        // Begin color ramp at 0-stop with a 0-transparancy color\n        // to create a blur-like effect.\n        'heatmap-color': ['interpolate', ['linear'], ['heatmap-density'], 0, 'rgba(33,102,172,0)', 0.2, 'rgb(255,255,0)', 0.4, 'rgb(255,200,10)', 0.6, 'rgb(255,140,20)', 0.8, 'rgb(220,80,30)', 1, 'rgb(255,10,40)'],\n        // Adjust the heatmap radius by zoom level\n        'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 9, 20],\n        // Transition from heatmap to circle layer by zoom level\n        'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0]\n      }\n    }} />\n        </>;\n}",...te.parameters?.docs?.source}}},le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:"(props: MlGeoJsonLayerProps) => {\n  const mapHook = useMap({\n    mapId: undefined\n  });\n  const initializedRef = useRef(false);\n  useEffect(() => {\n    if (!mapHook.map || initializedRef.current) return;\n    initializedRef.current = true;\n    mapHook.map.map.flyTo({\n      center: [7.105175528281227, 50.73348799274236],\n      zoom: 15.5\n    });\n  }, [mapHook.map]);\n  return <>\n            <MlGeoJsonLayer geojson={props.geojson} type={props.type} defaultPaintOverrides={{\n      fill: {\n        'fill-color': 'blue'\n      },\n      circle: {\n        'circle-color': 'red'\n      },\n      line: {\n        'line-color': 'black'\n      }\n    }} />\n        </>;\n}",...le.parameters?.docs?.source}}},ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:"() => {\n  const [openSidebar, setOpenSidebar] = useState(true);\n  const [selectedLayer, setSelectedLayer] = useState<string>('circle');\n  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);\n  const open = Boolean(anchorEl);\n  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {\n    setAnchorEl(event.currentTarget);\n  };\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n  const handleLayerSelect = (layer: string) => {\n    setSelectedLayer(layer);\n  };\n  return <>\n            <TopToolbar unmovableButtons={<>\n                        <Typography variant=\"h6\" color={'ButtonText'} marginRight={'20px'}>\n                            {configTitles[selectedLayer]}\n                        </Typography>\n                        {(selectedLayer === 'polygon' || selectedLayer === 'line') && <Button variant={openSidebar ? 'contained' : 'outlined'} sx={{\n        marginRight: '10px'\n      }} onClick={() => setOpenSidebar(!openSidebar)}>\n                                Layer options\n                            </Button>}\n                        <Button id=\"basic-button\" variant=\"contained\" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup=\"true\" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>\n                            Example Configs\n                        </Button>\n                        <Menu id=\"basic-menu\" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{\n        'aria-labelledby': 'basic-button'\n      }}>\n                            <MenuItem onClick={() => handleLayerSelect('circle')}>Circle Configuration</MenuItem>\n                            <MenuItem onClick={() => handleLayerSelect('line')}>Line Configuration</MenuItem>\n                            <MenuItem onClick={() => handleLayerSelect('polygon')}>\n                                Polygon Configuration\n                            </MenuItem>\n                            <MenuItem onClick={() => handleLayerSelect('heatmap')}>\n                                Heatmap Configuration\n                            </MenuItem>\n                            <MenuItem onClick={() => handleLayerSelect('symbol')}>Symbol Configuration</MenuItem>\n                            <MenuItem onClick={() => handleLayerSelect('default')}>\n                                Default Paint Overrides\n                            </MenuItem>\n                        </Menu>\n                    </>} />\n\n            {selectedLayer === 'circle' && <CircleTemplate geojson={Circle.args.geojson} />}\n            {selectedLayer === 'line' && <LineStyler openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} geojson={Linestring.args.geojson} />}\n            {selectedLayer === 'polygon' && <PolygonStyler openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} geojson={Polygon.args.geojson} />}\n            {selectedLayer === 'heatmap' && <HeatmapTemplate geojson={HeatMap.args.geojson} />}\n            {selectedLayer === 'symbol' && <SymbolTemplate geojson={Symbol.args.geojson} />}\n            {selectedLayer === 'default' && <Template geojson={DefaultPaintOverrides.args.geojson} />}\n        </>;\n}",...ie.parameters?.docs?.source}}};const se=["Circle","OsmProtocol","Label","Linestring","Polygon","HeatMap","Symbol","DefaultPaintOverrides","CatalogueDemo"]},40948:e=>{e.exports=JSON.parse('{"type":"FeatureCollection","features":[{"id":"1","type":"Feature","properties":{"name":"Hofgarten"},"geometry":{"coordinates":[[[7.104246282215286,50.734109601136055],[7.10209443365315,50.732370465826534],[7.104720792410859,50.73113417375197],[7.1049635650692835,50.73112718895845],[7.105724988405626,50.73137864087451],[7.107071273146147,50.73179073970729],[7.107060238024758,50.73190249469832],[7.106629868312979,50.732552065303736],[7.104246282215286,50.734109601136055]]],"type":"Polygon"}},{"id":"2","type":"Feature","properties":{"name":"Stadtgarten"},"geometry":{"coordinates":[[[7.105893155288783,50.73444907786518],[7.106402034397206,50.733582900352985],[7.106897536862704,50.73369549309848],[7.107111352729277,50.7336105803617],[7.107157469878132,50.733549549237495],[7.108406816456494,50.733927190803854],[7.1084747528756225,50.73402627417772],[7.10853382802236,50.734039360645426],[7.1083093424639685,50.73448242889327],[7.108247313560071,50.73447868993853],[7.108226637258156,50.734508601570155],[7.107907631465423,50.734559077405464],[7.107694960936584,50.73457777214577],[7.107597486944087,50.734575902671935],[7.107576810643138,50.73462077001935],[7.108185284655264,50.734633856320954],[7.108087810663733,50.73492362349066],[7.107910600755304,50.734888120981594],[7.107875467179866,50.734952050517165],[7.107778849851883,50.73496038914578],[7.107682232521427,50.734963168688125],[7.10769979930771,50.7350132004259],[7.107339680163761,50.73499652318577],[7.107221104348952,50.73497706639833],[7.107278196408828,50.73488534143442],[7.107019086291899,50.73484364820982],[7.106988344414447,50.734927034622416],[7.106514041150831,50.73484364820982],[7.106606266786173,50.734604606338195],[7.105893155288783,50.73444907786518]]],"type":"Polygon"}},{"id":"3","type":"Feature","properties":{"name":"Opernplatz"},"geometry":{"coordinates":[[[7.104632320011916,50.736606042555366],[7.104779316251751,50.736422797521044],[7.104817178920001,50.7363283555695],[7.104868404882268,50.736319898072],[7.105434117684382,50.73653415420432],[7.105596704435243,50.736569393605805],[7.105797153853388,50.73659758510803],[7.105725882948974,50.73684848872955],[7.105338347406786,50.736800563422435],[7.1051824423039704,50.73677237204271],[7.104863950451204,50.73668356908482],[7.104632320011916,50.736606042555366]]],"type":"Polygon"}},{"id":"2c3972ac51f4350582ecc9de57d47c75","type":"Feature","properties":{"name":"Keiserplatz"},"geometry":{"coordinates":[[[7.100878520474112,50.73167947463554],[7.100876728417518,50.731653654340704],[7.100857282327439,50.731633541894354],[7.10079841102764,50.73157086579248],[7.100757419228046,50.731538946883745],[7.100606042670478,50.73140800018959],[7.100525308506718,50.73136967425927],[7.10037393194915,50.731331348297005],[7.100313381326117,50.731308991470826],[7.100267968358821,50.73127226237719],[7.100184711252609,50.73119561026192],[7.099690214497514,50.73138724031432],[7.099691475969678,50.73140400766788],[7.099861143861631,50.73141398829278],[7.0998571229209375,50.73145675554436],[7.099832918440285,50.73150591044205],[7.099780384599569,50.73155556557083],[7.099892082101547,50.73155547486934],[7.099882074627317,50.73158758317477],[7.0999202108099695,50.73158998765363],[7.099912858928455,50.73159899760262],[7.0999207681442975,50.73160353227202],[7.099921690047621,50.7316057996082],[7.099930036031913,50.73160923675198],[7.100091909667459,50.731627463555895],[7.100165737828326,50.731649680201066],[7.1003014331650665,50.731709520224214],[7.100316426855426,50.73173557596814],[7.100384577793838,50.73178469147469],[7.100415620558475,50.731796580130755],[7.100494222199336,50.7318078992016],[7.100585685541193,50.731804728779615],[7.100677188738862,50.73177247244158],[7.100842140282873,50.73170978389162],[7.100873170896176,50.73169013008063],[7.100878520474112,50.73167947463554]]],"type":"Polygon"}}]}')},73377:e=>{e.exports=JSON.parse('{"type":"FeatureCollection","features":[{"id":"af85dc8aa961efd66cfcf74213b7ef57","type":"Feature","properties":{"name":"Mauspfad"},"geometry":{"coordinates":[[7.100862609363844,50.7344404792787],[7.100561470141059,50.73464673993831],[7.100435651698547,50.73473812095355],[7.1003510852035845,50.73478772771537],[7.100264456112427,50.73485561056759],[7.100087072734084,50.734958740096886],[7.099971567278942,50.73501487379605],[7.09977149532881,50.735103643229735],[7.099688991431805,50.7351166975437]],"type":"LineString"}},{"id":"7498f72ced719c8385232abc8e5c5df8","type":"Feature","properties":{"name":"Windeckstraße"},"geometry":{"coordinates":[[7.0985272716624195,50.73420515798543],[7.097871372036735,50.73446815229278],[7.097802428041831,50.73450471192254],[7.097748390856651,50.73456485834811]],"type":"LineString"}},{"id":"70dd65167a084220c36e4d7a345610f0","type":"Feature","properties":{"name":"Münsterplatz"},"geometry":{"coordinates":[[7.09894081766015,50.73432444924248],[7.098486102002624,50.734163776827444],[7.098957555660746,50.73453808973156]],"type":"LineString"}},{"id":"1f6aead42b46810c75898899823be3b2","type":"Feature","properties":{"name":"Poststraße"},"geometry":{"coordinates":[[7.098527916107116,50.73420653271353],[7.098053194441377,50.733712281883356],[7.0978593731692,50.73351315777262],[7.0975330642553445,50.7331307848207],[7.097445985132765,50.73302944371906]],"type":"LineString"}},{"id":"5cf9f0c4a8faf5abe1ddb87e1a6ffb39","type":"Feature","properties":{"name":"Münsterplatz"},"geometry":{"coordinates":[[7.099941299919607,50.73368573357055],[7.099819174531035,50.73374711589318],[7.099592883371059,50.73406084651026],[7.098939153351864,50.734320013695765],[7.09900021604534,50.73444050321487],[7.098964296814302,50.73454735215134],[7.099327081054895,50.734774689503496],[7.0994384306740415,50.73483834376472],[7.099686332909442,50.735125016962115],[7.099847969462104,50.73530006466575]],"type":"LineString"}},{"id":"d3317ba30229f1abd8bfb1b91264a366","type":"Feature","properties":{"name":"In der Sürst"},"geometry":{"coordinates":[[7.099398298122509,50.7338345667178],[7.099134563357126,50.73366617816262],[7.09898418827251,50.73359735831775],[7.098873142055368,50.733547573686366],[7.098732020821615,50.73351828858421],[7.09853537647993,50.7334963247454],[7.0981860435900614,50.733547573686366],[7.0979315626756545,50.7335944298116]],"type":"LineString"}},{"id":"b493531ab87539db3b5b70b397a9391f","type":"Feature","properties":{"name":"Remiglustraße"},"geometry":{"coordinates":[[7.101445198112543,50.735019714263245],[7.101169850280485,50.734715034478285],[7.100892127092777,50.7344711021496],[7.100591732624622,50.73421281947634],[7.100295116692507,50.73395333960934],[7.099399601108104,50.73383376315303]],"type":"LineString"}},{"id":"52212dad7a1cc396e34cb6d89c40bdd8","type":"Feature","properties":{"name":"Münsterplatz"},"geometry":{"coordinates":[[7.100582376610475,50.73329792502423],[7.10032965928491,50.733507640237804],[7.100032014435698,50.73363915607925],[7.09986353621963,50.73369958215281],[7.099672594239564,50.733728017925586],[7.099588355131516,50.73373512686561],[7.099397436366161,50.733829782653686],[7.099276521129809,50.73390228483311],[7.099158787873421,50.73396471717578],[7.098942413240309,50.73405131673837],[7.098811952064125,50.73409562342968],[7.098519209913093,50.734202362104526]],"type":"LineString"}}]}')},16951:e=>{e.exports=JSON.parse('{"type":"FeatureCollection","features":[{"id":"1","type":"Feature","properties":{"Standort":"Bonn","Mitarbeitende":26},"geometry":{"coordinates":[7.085121767634178,50.738628929850876],"type":"Point"}},{"id":"2","type":"Feature","properties":{"Standort":"Freiburg","Mitarbeitende":10},"geometry":{"coordinates":[7.842759788570362,47.98905444717667],"type":"Point"}},{"id":"3","type":"Feature","properties":{"Standort":"Berlin","Mitarbeitende":13},"geometry":{"coordinates":[13.330420447460796,52.492768290796676],"type":"Point"}},{"id":"4","type":"Feature","properties":{"Standort":"Hamburg","Mitarbeitende":3},"geometry":{"coordinates":[10.041789021808029,53.5511363175323],"type":"Point"}}]}')}}]);