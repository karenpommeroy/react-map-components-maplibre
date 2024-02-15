"use strict";(self.webpackChunk_mapcomponents_react_maplibre=self.webpackChunk_mapcomponents_react_maplibre||[]).push([[2360],{77536:(t,e,o)=>{var n=o(30492);e.c=void 0;var r=n(o(93540)),a=o(17624);e.c=(0,r.default)((0,a.jsx)("path",{d:"m22.7 19-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4"}),"Build")},92072:(t,e,o)=>{o.r(e),o.d(e,{AlternativePosition:()=>Z,CatalogueDemo:()=>W,CustomButton:()=>H,DefaultConfig:()=>G,No3dButton:()=>R,NoFollowGpsButton:()=>_,NoZoomButtons:()=>E,ShowCenterLocationButton:()=>I,__namedExportsOrder:()=>X,default:()=>z});var n=o(11504),r=o(21200),a=o(44336),s=o(77536),c=o(59476),i=o(29172),l=o(29408),u=o(74640),p=o(53864),d=o(67728),h=o(73068),m=o(73927),g=o(50440),v=o(6940),b=o(60888),w=o(51444);function f(t){return(0,w.cp)("MuiSwitch",t)}const S=(0,b.c)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);var C=o(17624);const x=["className","color","edge","size","sx"],B=(0,v.cp)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.edge&&e[`edge${(0,h.c)(o.edge)}`],e[`size${(0,h.c)(o.size)}`]]}})((({ownerState:t})=>(0,l.c)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===t.edge&&{marginLeft:-8},"end"===t.edge&&{marginRight:-8},"small"===t.size&&{width:40,height:24,padding:7,[`& .${S.thumb}`]:{width:16,height:16},[`& .${S.switchBase}`]:{padding:4,[`&.${S.checked}`]:{transform:"translateX(16px)"}}}))),y=(0,v.cp)(m.c,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.switchBase,{[`& .${S.input}`]:e.input},"default"!==o.color&&e[`color${(0,h.c)(o.color)}`]]}})((({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${"light"===t.palette.mode?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${S.checked}`]:{transform:"translateX(20px)"},[`&.${S.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${"light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${S.checked} + .${S.track}`]:{opacity:.5},[`&.${S.disabled} + .${S.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:""+("light"===t.palette.mode?.12:.2)},[`& .${S.input}`]:{left:"-100%",width:"300%"}})),(({theme:t,ownerState:e})=>(0,l.c)({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,d.W4)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==e.color&&{[`&.${S.checked}`]:{color:(t.vars||t).palette[e.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,d.W4)(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${S.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${e.color}DisabledColor`]:`${"light"===t.palette.mode?(0,d.IV)(t.palette[e.color].main,.62):(0,d.sP)(t.palette[e.color].main,.55)}`}},[`&.${S.checked} + .${S.track}`]:{backgroundColor:(t.vars||t).palette[e.color].main}}))),k=(0,v.cp)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,e)=>e.track})((({theme:t})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${"light"===t.palette.mode?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:""+("light"===t.palette.mode?.38:.3)}))),j=(0,v.cp)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,e)=>e.thumb})((({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),T=n.forwardRef((function(t,e){const o=(0,g.c)({props:t,name:"MuiSwitch"}),{className:n,color:r="primary",edge:a=!1,size:s="medium",sx:c}=o,d=(0,i.c)(o,x),m=(0,l.c)({},o,{color:r,edge:a,size:s}),v=(t=>{const{classes:e,edge:o,size:n,color:r,checked:a,disabled:s}=t,c={root:["root",o&&`edge${(0,h.c)(o)}`,`size${(0,h.c)(n)}`],switchBase:["switchBase",`color${(0,h.c)(r)}`,a&&"checked",s&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},i=(0,p.c)(c,f,e);return(0,l.c)({},e,i)})(m),b=(0,C.jsx)(j,{className:v.thumb,ownerState:m});return(0,C.jsxs)(B,{className:(0,u.c)(v.root,n),sx:c,ownerState:m,children:[(0,C.jsx)(y,(0,l.c)({type:"checkbox",icon:b,checkedIcon:b,ref:e,ownerState:m},d,{classes:(0,l.c)({},v,{root:v.switchBase})})),(0,C.jsx)(k,{className:v.track,ownerState:m})]})}));var O=o(45524),P=o(50600),N=o(42084),$=o(93240);function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function F(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var n,r,a,s,c=[],i=!0,l=!1;try{if(a=(o=o.call(t)).next,0===e){if(Object(o)!==o)return;i=!1}else for(;!(i=(n=a.call(o)).done)&&(c.push(n.value),c.length!==e);i=!0);}catch(t){l=!0,r=t}finally{try{if(!i&&null!=o.return&&(s=o.return(),Object(s)!==s))return}finally{if(l)throw r}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return D(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?D(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function L(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}const z={title:"MapComponents/MlNavigationTools",component:r.c,argTypes:{url:{},layer:{}},decorators:a.c};var A=function(t){return(0,C.jsx)(r.c,function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?L(Object(o),!0).forEach((function(e){var n,r,a,s;n=t,r=e,a=o[e],s=function(t,e){if("object"!=M(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,"string");if("object"!=M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r),(r="symbol"==M(s)?s:String(s))in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):L(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},t))};A.displayName="Template";var G=A.bind({});G.parameters={},G.args={};var R=A.bind({});R.parameters={},R.args={show3DButton:!1};var I=A.bind({});I.parameters={},I.args={showFollowGpsButton:!1,showCenterLocationButton:!0};var Z=A.bind({});Z.parameters={},Z.args={sx:{top:"10px"}};var E=A.bind({});E.parameters={},E.args={showZoomButtons:!1};var _=A.bind({});_.parameters={},_.args={showFollowGpsButton:!1};var H=A.bind({});H.parameters={},H.args={children:(0,C.jsx)(c.c,{variant:"navtools",onClick:function(){},children:(0,C.jsx)(s.c,{sx:{fontSize:{xs:"1.4em",md:"1em"}}})})};var W=function(){var t=F((0,n.useState)(!0),2),e=t[0],o=t[1],a=F((0,n.useState)(!1),2),i=a[0],l=a[1],u=F((0,n.useState)(!1),2),p=u[0],d=u[1],h=F((0,n.useState)(!0),2),m=h[0],g=h[1],v=F((0,n.useState)(!1),2),b=v[0],w=v[1],f=F((0,n.useState)(!1),2),S=f[0],x=f[1],B=F((0,n.useState)(!1),2),y=B[0],k=B[1];return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)($.c,{buttons:(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(c.c,{variant:e?"contained":"outlined",onClick:function(){return o(!e)},sx:{marginRight:{xs:"0px",sm:"10px"}},children:"Options"})})}),(0,C.jsx)(N.c,{open:e,setOpen:o,name:"Navigation Tools",children:(0,C.jsxs)(O.c,{children:[(0,C.jsx)(P.c,{control:(0,C.jsx)(T,{checked:y,onChange:function(t){k(t.target.checked)}}),label:"Alternative Position"}),(0,C.jsx)(P.c,{control:(0,C.jsx)(T,{checked:i,onChange:function(){l(!i)}}),label:"Show 3D button"}),(0,C.jsx)(P.c,{control:(0,C.jsx)(T,{checked:p,onChange:function(){d(!p)}}),label:"Show center location button"}),(0,C.jsx)(P.c,{control:(0,C.jsx)(T,{checked:m,onChange:function(){g(!m)}}),label:"Show zoom buttons"}),(0,C.jsx)(P.c,{control:(0,C.jsx)(T,{checked:b,onChange:function(){w(!b)}}),label:"Show 'FollowGPS' Button"}),(0,C.jsx)(P.c,{control:(0,C.jsx)(T,{checked:S,onChange:function(t){x(t.target.checked)}}),label:"Add a custom Button"})]})}),(0,C.jsx)(r.c,{sx:y?{top:"80px"}:void 0,show3DButton:i,showCenterLocationButton:p,showZoomButtons:m,showFollowGpsButton:b,children:S?(0,C.jsx)(c.c,{variant:"navtools",onClick:function(){},children:(0,C.jsx)(s.c,{sx:{fontSize:{xs:"1.4em",md:"1em"}}})}):(0,C.jsx)(C.Fragment,{})})]})}.bind({});W.parameters={},W.args={},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:"(props: MlNavigationToolsProps) => <MlNavigationTools {...props} />",...G.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"(props: MlNavigationToolsProps) => <MlNavigationTools {...props} />",...R.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:"(props: MlNavigationToolsProps) => <MlNavigationTools {...props} />",...I.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:"(props: MlNavigationToolsProps) => <MlNavigationTools {...props} />",...Z.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"(props: MlNavigationToolsProps) => <MlNavigationTools {...props} />",...E.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"(props: MlNavigationToolsProps) => <MlNavigationTools {...props} />",..._.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:"(props: MlNavigationToolsProps) => <MlNavigationTools {...props} />",...H.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:"() => {\n  const [openSidebar, setOpenSidebar] = useState(true);\n  const [ThreeDButton, setThreeDButton] = useState(false);\n  const [CenterLocationButton, setCenterLocationButton] = useState(false);\n  const [ZoomButtons, setZoomButtons] = useState(true);\n  const [FollowGpsButton, setFollowGpsButton] = useState(false);\n  const [showCustomButton, setShowCustomButton] = useState<boolean>(false);\n  const [alternativePosition, setAlternativePosition] = useState(false);\n  const handleChange1 = () => {\n    setThreeDButton(!ThreeDButton);\n  };\n  const handleChange2 = () => {\n    setCenterLocationButton(!CenterLocationButton);\n  };\n  const handleChange3 = () => {\n    setZoomButtons(!ZoomButtons);\n  };\n  const handleChange4 = () => {\n    setFollowGpsButton(!FollowGpsButton);\n  };\n  const handleCustomButtonChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setShowCustomButton(event.target.checked);\n  };\n  const handleAlternativePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setAlternativePosition(event.target.checked);\n  };\n  return <>\n            <TopToolbar buttons={<>\n                        <Button variant={openSidebar ? 'contained' : 'outlined'} onClick={() => setOpenSidebar(!openSidebar)} sx={{\n        marginRight: {\n          xs: '0px',\n          sm: '10px'\n        }\n      }}>\n                            Options\n                        </Button>\n                    </>} />\n            <Sidebar open={openSidebar} setOpen={setOpenSidebar} name={'Navigation Tools'}>\n                <FormGroup>\n                    <FormControlLabel control={<Switch checked={alternativePosition} onChange={handleAlternativePositionChange} />} label=\"Alternative Position\" />\n                    <FormControlLabel control={<Switch checked={ThreeDButton} onChange={handleChange1} />} label=\"Show 3D button\" />\n                    <FormControlLabel control={<Switch checked={CenterLocationButton} onChange={handleChange2} />} label=\"Show center location button\" />\n                    <FormControlLabel control={<Switch checked={ZoomButtons} onChange={handleChange3} />} label=\"Show zoom buttons\" />\n                    <FormControlLabel control={<Switch checked={FollowGpsButton} onChange={handleChange4} />} label=\"Show 'FollowGPS' Button\" />\n                    <FormControlLabel control={<Switch checked={showCustomButton} onChange={handleCustomButtonChange} />} label=\"Add a custom Button\" />\n                </FormGroup>\n            </Sidebar>\n            <MlNavigationTools sx={alternativePosition ? {\n      top: '80px'\n    } : undefined} show3DButton={ThreeDButton} showCenterLocationButton={CenterLocationButton} showZoomButtons={ZoomButtons} showFollowGpsButton={FollowGpsButton}>\n                {showCustomButton ? <Button variant=\"navtools\" onClick={() => {}}>\n                        <BuildIcon sx={{\n          fontSize: {\n            xs: '1.4em',\n            md: '1em'\n          }\n        }} />\n                    </Button> : <></>}\n            </MlNavigationTools>\n        </>;\n}",...W.parameters?.docs?.source}}};const X=["DefaultConfig","No3dButton","ShowCenterLocationButton","AlternativePosition","NoZoomButtons","NoFollowGpsButton","CustomButton","CatalogueDemo"]},44336:(t,e,o)=>{o.d(e,{c:()=>l});var n=o(11504),r=o(77288),a=o(24732),s=(o(47634),o(54656)),c=o(76508),i=o(17624);const l=[function(t,e){var o,l=(0,n.useMemo)((function(){var t;return(0,c.c)(null==e||null===(t=e.globals)||void 0===t?void 0:t.theme)}),[null==e||null===(o=e.globals)||void 0===o?void 0:o.theme]);return(0,i.jsx)("div",{className:"fullscreen_map",children:(0,i.jsx)(r.y4,{children:(0,i.jsxs)(s.c,{theme:l,children:[(0,i.jsx)(t,{}),(0,i.jsx)(a.c,{options:{zoom:14.5,style:"https://wms.wheregroup.com/tileserver/style/osm-bright.json",center:[7.0851268,50.73884]},mapId:"map_1"})]})})})}]}}]);