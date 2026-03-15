import{Cn as e,Fn as t,Ft as n,In as r,N as i,Rn as a,Sn as o,Tn as s,Xn as c,Zn as l,bn as u,hn as d,vn as f,xn as p}from"./index-ws0Lvbc6.js";import"./chunk-XZSTWKYB-CN9Iep5V.js";import"./_baseUniq-Ds2MN-fB.js";import"./_basePickBy-B9i9Cowz.js";import"./clone-B24Wf2oU.js";import"./chunk-R5LLSJPH-BkY3qjjw.js";import"./chunk-7E7YKBS2-DdZ2latE.js";import"./chunk-EGIJ26TM-s1XYLCfc.js";import"./chunk-C72U2L5F-Ljf5dgU5.js";import"./chunk-XIRO2GV7-Hft0zzzg.js";import"./chunk-L3YUKLVL-gXTo94a1.js";import"./chunk-OZEHJAEY-C6T_85GG.js";import{t as m}from"./chunk-4BX2VUAB-D8a8hRoU.js";import{t as h}from"./mermaid-parser.core-BVX3-i43.js";var g=u.packet,_=class{constructor(){this.packet=[],this.setAccTitle=r,this.getAccTitle=o,this.setDiagramTitle=a,this.getDiagramTitle=s,this.getAccDescription=p,this.setAccDescription=t}static#e=c(this,`PacketDB`);getConfig(){let t=i({...g,...e().packet});return t.showBits&&(t.paddingY+=10),t}getPacket(){return this.packet}pushWord(e){e.length>0&&this.packet.push(e)}clear(){d(),this.packet=[]}},v=1e4,y=c((e,t)=>{m(e,t);let n=-1,r=[],i=1,{bitsPerRow:a}=t.getConfig();for(let{start:o,end:s,bits:c,label:u}of e.blocks){if(o!==void 0&&s!==void 0&&s<o)throw Error(`Packet block ${o} - ${s} is invalid. End must be greater than start.`);if(o??=n+1,o!==n+1)throw Error(`Packet block ${o} - ${s??o} is not contiguous. It should start from ${n+1}.`);if(c===0)throw Error(`Packet block ${o} is invalid. Cannot have a zero bit field.`);for(s??=o+(c??1)-1,c??=s-o+1,n=s,l.debug(`Packet block ${o} - ${n} with label ${u}`);r.length<=a+1&&t.getPacket().length<v;){let[e,n]=b({start:o,end:s,bits:c,label:u},i,a);if(r.push(e),e.end+1===i*a&&(t.pushWord(r),r=[],i++),!n)break;({start:o,end:s,bits:c,label:u}=n)}}t.pushWord(r)},`populate`),b=c((e,t,n)=>{if(e.start===void 0)throw Error(`start should have been set during first phase`);if(e.end===void 0)throw Error(`end should have been set during first phase`);if(e.start>e.end)throw Error(`Block start ${e.start} is greater than block end ${e.end}.`);if(e.end+1<=t*n)return[e,void 0];let r=t*n-1,i=t*n;return[{start:e.start,end:r,label:e.label,bits:r-e.start},{start:i,end:e.end,label:e.label,bits:e.end-i}]},`getNextFittingBlock`),x={parser:{yy:void 0},parse:c(async e=>{let t=await h(`packet`,e),n=x.parser?.yy;if(!(n instanceof _))throw Error(`parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);l.debug(t),y(t,n)},`parse`)},S=c((e,t,r,i)=>{let a=i.db,o=a.getConfig(),{rowHeight:s,paddingY:c,bitWidth:l,bitsPerRow:u}=o,d=a.getPacket(),p=a.getDiagramTitle(),m=s+c,h=m*(d.length+1)-(p?0:s),g=l*u+2,_=n(t);_.attr(`viewBox`,`0 0 ${g} ${h}`),f(_,h,g,o.useMaxWidth);for(let[e,t]of d.entries())C(_,t,e,o);_.append(`text`).text(p).attr(`x`,g/2).attr(`y`,h-m/2).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).attr(`class`,`packetTitle`)},`draw`),C=c((e,t,n,{rowHeight:r,paddingX:i,paddingY:a,bitWidth:o,bitsPerRow:s,showBits:c})=>{let l=e.append(`g`),u=n*(r+a)+a;for(let e of t){let t=e.start%s*o+1,n=(e.end-e.start+1)*o-i;if(l.append(`rect`).attr(`x`,t).attr(`y`,u).attr(`width`,n).attr(`height`,r).attr(`class`,`packetBlock`),l.append(`text`).attr(`x`,t+n/2).attr(`y`,u+r/2).attr(`class`,`packetLabel`).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).text(e.label),!c)continue;let a=e.end===e.start,d=u-2;l.append(`text`).attr(`x`,t+(a?n/2:0)).attr(`y`,d).attr(`class`,`packetByte start`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,a?`middle`:`start`).text(e.start),a||l.append(`text`).attr(`x`,t+n).attr(`y`,d).attr(`class`,`packetByte end`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,`end`).text(e.end)}},`drawWord`),w={draw:S},T={byteFontSize:`10px`,startByteColor:`black`,endByteColor:`black`,labelColor:`black`,labelFontSize:`12px`,titleColor:`black`,titleFontSize:`14px`,blockStrokeColor:`black`,blockStrokeWidth:`1`,blockFillColor:`#efefef`},E={parser:x,get db(){return new _},renderer:w,styles:c(({packet:e}={})=>{let t=i(T,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},`styles`)};export{E as diagram};