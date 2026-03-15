import{t as e}from"./ordinal-Bs01uwBv.js";import"./init-B8xRTswO.js";import{t}from"./arc-mXNUvaR9.js";import{$t as n,Fn as r,Ft as i,In as a,N as o,Qt as s,R as c,Rn as l,Rt as u,Sn as d,Tn as f,Xn as p,Zn as m,bn as h,hn as g,vn as _,wn as v,xn as y}from"./index-Cqec35NC.js";import"./chunk-XZSTWKYB-BTGnKXqQ.js";import"./_baseUniq-CcSk89TM.js";import"./_basePickBy-BDyWyj3q.js";import"./clone-BnkCP-kf.js";import"./chunk-R5LLSJPH-8PncR32b.js";import"./chunk-7E7YKBS2-CY9WXucy.js";import"./chunk-EGIJ26TM-6GKeKXsy.js";import"./chunk-C72U2L5F-AVKVqist.js";import"./chunk-XIRO2GV7-DV3lfel0.js";import"./chunk-L3YUKLVL-CbWeRjq8.js";import"./chunk-OZEHJAEY-BpjdBkkN.js";import{t as b}from"./chunk-4BX2VUAB-8WiTAxiY.js";import{t as x}from"./mermaid-parser.core-D8vu5GH2.js";function S(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}function C(e){return e}function w(){var e=C,t=S,r=null,i=n(0),a=n(s),o=n(0);function c(n){var c,l=(n=u(n)).length,d,f,p=0,m=Array(l),h=Array(l),g=+i.apply(this,arguments),_=Math.min(s,Math.max(-s,a.apply(this,arguments)-g)),v,y=Math.min(Math.abs(_)/l,o.apply(this,arguments)),b=y*(_<0?-1:1),x;for(c=0;c<l;++c)(x=h[m[c]=c]=+e(n[c],c,n))>0&&(p+=x);for(t==null?r!=null&&m.sort(function(e,t){return r(n[e],n[t])}):m.sort(function(e,n){return t(h[e],h[n])}),c=0,f=p?(_-l*b)/p:0;c<l;++c,g=v)d=m[c],x=h[d],v=g+(x>0?x*f:0)+b,h[d]={data:n[d],index:c,value:x,startAngle:g,endAngle:v,padAngle:y};return h}return c.value=function(t){return arguments.length?(e=typeof t==`function`?t:n(+t),c):e},c.sortValues=function(e){return arguments.length?(t=e,r=null,c):t},c.sort=function(e){return arguments.length?(r=e,t=null,c):r},c.startAngle=function(e){return arguments.length?(i=typeof e==`function`?e:n(+e),c):i},c.endAngle=function(e){return arguments.length?(a=typeof e==`function`?e:n(+e),c):a},c.padAngle=function(e){return arguments.length?(o=typeof e==`function`?e:n(+e),c):o},c}var T=h.pie,E={sections:new Map,showData:!1,config:T},D=E.sections,O=E.showData,k=structuredClone(T),A={getConfig:p(()=>structuredClone(k),`getConfig`),clear:p(()=>{D=new Map,O=E.showData,g()},`clear`),setDiagramTitle:l,getDiagramTitle:f,setAccTitle:a,getAccTitle:d,setAccDescription:r,getAccDescription:y,addSection:p(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);D.has(e)||(D.set(e,t),m.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:p(()=>D,`getSections`),setShowData:p(e=>{O=e},`setShowData`),getShowData:p(()=>O,`getShowData`)},j=p((e,t)=>{b(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),M={parse:p(async e=>{let t=await x(`pie`,e);m.debug(t),j(t,A)},`parse`)},N=p(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),P=p(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1).sort((e,t)=>t.value-e.value);return w().value(e=>e.value)(n)},`createPieArcs`),F={parser:M,db:A,renderer:{draw:p((n,r,a,s)=>{m.debug(`rendering pie chart
`+n);let l=s.db,u=v(),d=o(l.getConfig(),u.pie),f=i(r),p=f.append(`g`);p.attr(`transform`,`translate(225,225)`);let{themeVariables:h}=u,[g]=c(h.pieOuterStrokeWidth);g??=2;let y=d.textPosition,b=t().innerRadius(0).outerRadius(185),x=t().innerRadius(185*y).outerRadius(185*y);p.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+g/2).attr(`class`,`pieOuterCircle`);let S=l.getSections(),C=P(S),w=[h.pie1,h.pie2,h.pie3,h.pie4,h.pie5,h.pie6,h.pie7,h.pie8,h.pie9,h.pie10,h.pie11,h.pie12],T=0;S.forEach(e=>{T+=e});let E=C.filter(e=>(e.data.value/T*100).toFixed(0)!==`0`),D=e(w);p.selectAll(`mySlices`).data(E).enter().append(`path`).attr(`d`,b).attr(`fill`,e=>D(e.data.label)).attr(`class`,`pieCircle`),p.selectAll(`mySlices`).data(E).enter().append(`text`).text(e=>(e.data.value/T*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+x.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`),p.append(`text`).text(l.getDiagramTitle()).attr(`x`,0).attr(`y`,-400/2).attr(`class`,`pieTitleText`);let O=[...S.entries()].map(([e,t])=>({label:e,value:t})),k=p.selectAll(`.legend`).data(O).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*O.length/2;return`translate(216,`+(t*22-n)+`)`});k.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>D(e.label)).style(`stroke`,e=>D(e.label)),k.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>l.getShowData()?`${e.label} [${e.value}]`:e.label);let A=512+Math.max(...k.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0));f.attr(`viewBox`,`0 0 ${A} 450`),_(f,450,A,d.useMaxWidth)},`draw`)},styles:N};export{F as diagram};