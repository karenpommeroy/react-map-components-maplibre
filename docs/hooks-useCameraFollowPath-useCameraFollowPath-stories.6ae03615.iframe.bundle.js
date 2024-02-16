"use strict";(self.webpackChunk_mapcomponents_react_maplibre=self.webpackChunk_mapcomponents_react_maplibre||[]).push([[8052],{73924:(e,n,t)=>{t.r(n),t.d(n,{ExampleConfig:()=>j,__namedExportsOrder:()=>w,default:()=>x});var r=t(11504),o=t(14167),a=t(93240),i=t(95316),s=t(59476),u=t(27432),l=t(68857),c=t(82366),p=t(49376),m=t(42084),d=t(17624);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){var r,o,a,i;r=e,o=n,a=t[n],i=function(e,n){if("object"!=h(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==h(i)?i:String(i))in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a,i,s=[],u=!0,l=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=a.call(t)).done)&&(s.push(r.value),s.length!==n);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(l)throw o}}return s}}(e,n)||function(e,n){if(e){if("string"==typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const x={title:"Hooks/useCameraFollowPath",component:o.c,argTypes:{},decorators:i.c};var S={type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[7.10942788610961,50.708209240168],[7.10966149846967,50.7088867160122],[7.10910082880551,50.7108256986007],[7.10856352037736,50.7126945974813],[7.1083532692533,50.7142598002937],[7.10814301812924,50.7160118929942],[7.10793276700518,50.7169463424345],[7.10776923835314,50.7176004570426],[7.10713848498096,50.718838602551],[7.10699831756492,50.7199599418793],[7.106900786313568,50.72118132611057]]}},v=[{value:15,label:"15"},{value:16,label:"16"},{value:17,label:"17"},{value:18,label:"18"},{value:19,label:"19"},{value:20,label:"20"}],j=function(){var e=b((0,r.useState)({pause:!0,zoom:18,speed:1,pitch:60}),2),n=e[0],t=e[1],i=(0,o.c)({route:S,pause:n.pause,pitch:n.pitch,zoom:n.zoom,speed:n.speed}),h=b((0,r.useState)(!0),2),y=h[0],f=h[1],x=b((0,r.useState)(!0),2),j=x[0],w=x[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.c,{buttons:(0,d.jsx)(s.c,{variant:j?"contained":"outlined",onClick:function(){return w(!j)},sx:{marginRight:{xs:"0px",sm:"10px"}},children:"Camera Settings"})}),(0,d.jsxs)(m.c,{open:j,setOpen:w,name:"Camera Settings",children:[(0,d.jsx)(u.c,{onClick:function(){return f(!y)},children:(0,d.jsx)(l.c,{children:y?"Hide route":"Show route"})}),y?(0,d.jsx)(p.c,{geojson:S,type:"line",paint:{"line-width":2,"line-color":"blue"}}):null,(0,d.jsx)(u.c,{disabled:!n.pause,onClick:function(){return t((function(e){return g(g({},e),{},{pause:!1})}))},children:(0,d.jsx)(l.c,{children:"Start"})}),(0,d.jsx)(u.c,{disabled:n.pause,onClick:function(){return t((function(e){return g(g({},e),{},{pause:!0})}))},children:(0,d.jsx)(l.c,{children:"Pause"})}),(0,d.jsx)(u.c,{onClick:function(){t((function(e){return g(g({},e),{},{pause:!0,pitch:60,zoom:18,speed:1})})),setTimeout((function(){i.reset()}),50)},children:(0,d.jsx)(l.c,{children:"Reset"})}),(0,d.jsxs)(u.c,{children:[(0,d.jsx)(l.c,{id:"discrete-slider",style:{marginLeft:"10px",marginRight:"10px"},children:(0,d.jsx)(l.c,{children:"Zoom:"})}),(0,d.jsx)(c.cp,{value:n.zoom,onChange:function(e,n){t((function(e){return g(g({},e),{},{zoom:Number(n)})}))},getAriaValueText:function(e){return e.toString()},"aria-labelledby":"discrete-slider",step:1,marks:v,min:15,max:20,sx:{marginTop:"20px",paddingBottom:"20px",marginRight:"10px",maxWidth:"200px",minWidth:"150px"}})]}),(0,d.jsxs)(u.c,{children:[(0,d.jsx)(l.c,{id:"discrete-slider2",style:{marginLeft:"10px",marginRight:"10px"},children:"Speed:"}),(0,d.jsx)(c.cp,{value:n.speed,onChange:function(e,n){t((function(e){return g(g({},e),{},{speed:Number(n)})}))},getAriaValueText:function(e){return e.toString()},"aria-labelledby":"discrete-slider2",step:.1,marks:!0,min:.1,max:2,sx:{marginRight:"10px",maxWidth:"200px",minWidth:"150px"}})]}),(0,d.jsx)(u.c,{onClick:function(){0===n.pitch?t((function(e){return g(g({},e),{},{pitch:60})})):t((function(e){return g(g({},e),{},{pitch:0})}))},children:(0,d.jsx)(l.c,{children:0===n.pitch?"3D":"2D"})})]})]})}.bind({});j.parameters={},j.args={},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"() => {\n  const [state, setState] = useState({\n    pause: true,\n    zoom: 18,\n    speed: 1,\n    pitch: 60\n  });\n  const CameraFollowPath = useCameraFollowPath({\n    route: routeJson,\n    pause: state.pause,\n    pitch: state.pitch,\n    zoom: state.zoom,\n    speed: state.speed\n  });\n  const [showRoute, setShowRoute] = useState(true);\n  const [openSidebar, setOpenSidebar] = useState(true);\n  return <>\n            <TopToolbar buttons={<Button variant={openSidebar ? 'contained' : 'outlined'} onClick={() => setOpenSidebar(!openSidebar)} sx={{\n      marginRight: {\n        xs: '0px',\n        sm: '10px'\n      }\n    }}>\n                        Camera Settings\n                    </Button>} />\n            <Sidebar open={openSidebar} setOpen={setOpenSidebar} name={'Camera Settings'}>\n                <MenuItem onClick={() => setShowRoute(!showRoute)}>\n                    <Typography>{showRoute ? 'Hide route' : 'Show route'}</Typography>\n                </MenuItem>\n                {showRoute ? <MlGeoJsonLayer geojson={routeJson} type=\"line\" paint={{\n        'line-width': 2,\n        'line-color': 'blue'\n      }} /> : null}\n                <MenuItem disabled={!state.pause} onClick={() => setState(current => {\n        return {\n          ...current,\n          pause: false\n        };\n      })}>\n                    <Typography>Start</Typography>\n                </MenuItem>\n                <MenuItem disabled={state.pause} onClick={() => setState(current => {\n        return {\n          ...current,\n          pause: true\n        };\n      })}>\n                    <Typography>Pause</Typography>\n                </MenuItem>\n                <MenuItem onClick={() => {\n        setState(current => {\n          return {\n            ...current,\n            pause: true,\n            pitch: 60,\n            zoom: 18,\n            speed: 1\n          };\n        });\n        setTimeout(() => {\n          CameraFollowPath.reset();\n        }, 50);\n      }}>\n                    <Typography>Reset</Typography>\n                </MenuItem>\n                <MenuItem>\n                    <Typography id=\"discrete-slider\" style={{\n          marginLeft: '10px',\n          marginRight: '10px'\n        }}>\n                        <Typography>Zoom:</Typography>\n                    </Typography>\n                    <Slider value={state.zoom} onChange={(ev, value) => {\n          setState(current => {\n            return {\n              ...current,\n              zoom: Number(value)\n            };\n          });\n        }} getAriaValueText={value => value.toString()} aria-labelledby=\"discrete-slider\"\n        //valueLabelDisplay=\"auto\"\n        step={1} marks={marks} min={15} max={20} sx={{\n          marginTop: '20px',\n          paddingBottom: '20px',\n          marginRight: '10px',\n          maxWidth: '200px',\n          minWidth: '150px'\n        }} />\n                </MenuItem>\n                <MenuItem>\n                    <Typography id=\"discrete-slider2\" style={{\n          marginLeft: '10px',\n          marginRight: '10px'\n        }}>\n                        Speed:\n                    </Typography>\n                    <Slider value={state.speed} onChange={(ev, value) => {\n          setState(current => {\n            return {\n              ...current,\n              speed: Number(value)\n            };\n          });\n        }} getAriaValueText={value => value.toString()} aria-labelledby=\"discrete-slider2\"\n        //valueLabelDisplay=\"auto\"\n        step={0.1} marks min={0.1} max={2} sx={{\n          marginRight: '10px',\n          maxWidth: '200px',\n          minWidth: '150px'\n        }} />\n                </MenuItem>\n                <MenuItem onClick={() => {\n        if (state.pitch === 0) {\n          setState(current => {\n            return {\n              ...current,\n              pitch: 60\n            };\n          });\n        } else {\n          setState(current => {\n            return {\n              ...current,\n              pitch: 0\n            };\n          });\n        }\n      }}>\n                    <Typography>{state.pitch === 0 ? '3D' : '2D'}</Typography>\n                </MenuItem>\n            </Sidebar>\n        </>;\n}",...j.parameters?.docs?.source}}};const w=["ExampleConfig"]},95316:(e,n,t)=>{t.d(n,{c:()=>c});var r=t(11504),o=t(77288),a=t(24732),i=(t(47634),t(21200)),s=t(54656),u=t(76508),l=t(17624);const c=[function(e,n){var t,c=(0,r.useMemo)((function(){var e;return(0,u.c)(null==n||null===(e=n.globals)||void 0===e?void 0:e.theme)}),[null==n||null===(t=n.globals)||void 0===t?void 0:t.theme]);return(0,l.jsx)("div",{className:"fullscreen_map",children:(0,l.jsx)(o.y4,{children:(0,l.jsxs)(s.c,{theme:c,children:[(0,l.jsx)(e,{}),(0,l.jsx)(a.c,{options:{zoom:14.5,style:"https://wms.wheregroup.com/tileserver/style/osm-bright.json",center:[7.0851268,50.73884]},mapId:"map_1"}),(0,l.jsx)(i.c,{showZoomButtons:!1,mapId:"map_1"})]})})})}]}}]);