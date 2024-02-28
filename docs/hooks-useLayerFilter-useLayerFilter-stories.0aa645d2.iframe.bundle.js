"use strict";(self.webpackChunk_mapcomponents_react_maplibre=self.webpackChunk_mapcomponents_react_maplibre||[]).push([[6571],{86389:(e,t,r)=>{r.r(t),r.d(t,{ExampleConfig:()=>l,__namedExportsOrder:()=>m,default:()=>p}),r(96540);var a=r(51280),s=r(77477),n=r(36852),o=r(73377),i=r(74848);const p={title:"hooks/useLayerFilter",component:a.A,argTypes:{},decorators:s.A};var d=function(e){return(0,a.A)({layerId:"filter_test",filter:["==","name",e.filter_name]}),(0,i.jsx)(n.A,{layerId:"filter_test",geojson:o})};d.displayName="Template";var l=d.bind({});l.parameters={},l.args={filter_name:"Mauspfad"},l.argTypes={filter_name:{options:["Mauspfad","Windeckstraße","Münsterplatz","Postrstraße","In der Sürst","Remiglustraße"],control:{type:"radio"}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"(args: {\n  filter_name: string;\n}) => {\n  useLayerFilter({\n    layerId: 'filter_test',\n    filter: ['==', 'name', args.filter_name]\n  });\n  return <MlGeoJsonLayer layerId=\"filter_test\" geojson={(sample as FeatureCollection)} />;\n}",...l.parameters?.docs?.source}}};const m=["ExampleConfig"]},77477:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(96540),s=r(95532),n=r(32348),o=(r(18582),r(68704)),i=r(65793),p=r(30901),d=r(74848);const l=[function(e,t){var r,l=(0,a.useMemo)((function(){var e;return(0,p.A)(null==t||null===(e=t.globals)||void 0===e?void 0:e.theme)}),[null==t||null===(r=t.globals)||void 0===r?void 0:r.theme]);return(0,d.jsx)("div",{className:"fullscreen_map",children:(0,d.jsx)(s.mO,{children:(0,d.jsxs)(i.A,{theme:l,children:[(0,d.jsx)(e,{}),(0,d.jsx)(n.A,{options:{zoom:14.5,style:"https://wms.wheregroup.com/tileserver/style/osm-bright.json",center:[7.0851268,50.73884]},mapId:"map_1"}),(0,d.jsx)(o.A,{showZoomButtons:!1,mapId:"map_1"})]})})})}]},73377:e=>{e.exports=JSON.parse('{"type":"FeatureCollection","features":[{"id":"af85dc8aa961efd66cfcf74213b7ef57","type":"Feature","properties":{"name":"Mauspfad"},"geometry":{"coordinates":[[7.100862609363844,50.7344404792787],[7.100561470141059,50.73464673993831],[7.100435651698547,50.73473812095355],[7.1003510852035845,50.73478772771537],[7.100264456112427,50.73485561056759],[7.100087072734084,50.734958740096886],[7.099971567278942,50.73501487379605],[7.09977149532881,50.735103643229735],[7.099688991431805,50.7351166975437]],"type":"LineString"}},{"id":"7498f72ced719c8385232abc8e5c5df8","type":"Feature","properties":{"name":"Windeckstraße"},"geometry":{"coordinates":[[7.0985272716624195,50.73420515798543],[7.097871372036735,50.73446815229278],[7.097802428041831,50.73450471192254],[7.097748390856651,50.73456485834811]],"type":"LineString"}},{"id":"70dd65167a084220c36e4d7a345610f0","type":"Feature","properties":{"name":"Münsterplatz"},"geometry":{"coordinates":[[7.09894081766015,50.73432444924248],[7.098486102002624,50.734163776827444],[7.098957555660746,50.73453808973156]],"type":"LineString"}},{"id":"1f6aead42b46810c75898899823be3b2","type":"Feature","properties":{"name":"Poststraße"},"geometry":{"coordinates":[[7.098527916107116,50.73420653271353],[7.098053194441377,50.733712281883356],[7.0978593731692,50.73351315777262],[7.0975330642553445,50.7331307848207],[7.097445985132765,50.73302944371906]],"type":"LineString"}},{"id":"5cf9f0c4a8faf5abe1ddb87e1a6ffb39","type":"Feature","properties":{"name":"Münsterplatz"},"geometry":{"coordinates":[[7.099941299919607,50.73368573357055],[7.099819174531035,50.73374711589318],[7.099592883371059,50.73406084651026],[7.098939153351864,50.734320013695765],[7.09900021604534,50.73444050321487],[7.098964296814302,50.73454735215134],[7.099327081054895,50.734774689503496],[7.0994384306740415,50.73483834376472],[7.099686332909442,50.735125016962115],[7.099847969462104,50.73530006466575]],"type":"LineString"}},{"id":"d3317ba30229f1abd8bfb1b91264a366","type":"Feature","properties":{"name":"In der Sürst"},"geometry":{"coordinates":[[7.099398298122509,50.7338345667178],[7.099134563357126,50.73366617816262],[7.09898418827251,50.73359735831775],[7.098873142055368,50.733547573686366],[7.098732020821615,50.73351828858421],[7.09853537647993,50.7334963247454],[7.0981860435900614,50.733547573686366],[7.0979315626756545,50.7335944298116]],"type":"LineString"}},{"id":"b493531ab87539db3b5b70b397a9391f","type":"Feature","properties":{"name":"Remiglustraße"},"geometry":{"coordinates":[[7.101445198112543,50.735019714263245],[7.101169850280485,50.734715034478285],[7.100892127092777,50.7344711021496],[7.100591732624622,50.73421281947634],[7.100295116692507,50.73395333960934],[7.099399601108104,50.73383376315303]],"type":"LineString"}},{"id":"52212dad7a1cc396e34cb6d89c40bdd8","type":"Feature","properties":{"name":"Münsterplatz"},"geometry":{"coordinates":[[7.100582376610475,50.73329792502423],[7.10032965928491,50.733507640237804],[7.100032014435698,50.73363915607925],[7.09986353621963,50.73369958215281],[7.099672594239564,50.733728017925586],[7.099588355131516,50.73373512686561],[7.099397436366161,50.733829782653686],[7.099276521129809,50.73390228483311],[7.099158787873421,50.73396471717578],[7.098942413240309,50.73405131673837],[7.098811952064125,50.73409562342968],[7.098519209913093,50.734202362104526]],"type":"LineString"}}]}')}}]);