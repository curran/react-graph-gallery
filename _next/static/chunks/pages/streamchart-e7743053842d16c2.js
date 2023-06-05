(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5503],{7591:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/streamchart",function(){return i(4077)}])},6820:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});var r=i(5893);i(7294);var n=i(8843),s=i(6438);let o=e=>{let{imgLink:t,height:i,opacity:n,children:s}=e;return(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{style:{backgroundImage:"url("+t+")",height:i,backgroundAttachment:"fixed",opacity:n,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,r.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:s})]})};function a(e){var t;let{chartId:i}=e,a=(null===(t=n.c.find(e=>e.id===i))||void 0===t?void 0:t.label)||"chart";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{id:"inspiration",children:a+" inspiration"}),(0,r.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,r.jsx)("span",{children:a}),", note that"," ",(0,r.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,r.jsx)("div",{className:"border mb-10",children:(0,r.jsx)(o,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,r.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,r.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,r.jsxs)("p",{className:"text-center text-sm",children:[(0,r.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,r.jsx)("span",{children:a})," ","looks good!"]}),(0,r.jsx)(s.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},505:function(e,t,i){"use strict";i.d(t,{r:function(){return h}});var r=i(5893),n=i(1664),s=i.n(n),o=i(8843),a=i(88),l=i(3572);let h=e=>{let{chartId:t}=e,i=o.c.filter(e=>e.id===t)[0].label;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{id:"responsiveness",children:"Responsive "+i+" with react"}),(0,r.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,r.jsx)("code",{children:"width"})," and ",(0,r.jsx)("code",{children:"height"})," and will render a ",i," of those dimensions."]}),(0,r.jsxs)("p",{children:["Making the ",i," responsive requires adding a ",(0,r.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,r.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,r.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,r.jsx)(a.U,{startOpen:!1,title:(0,r.jsxs)("span",{children:[(0,r.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,r.jsx)(l.d,{code:c})}),(0,r.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,r.jsx)(s(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})},c='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},4077:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return ei}});var r=i(5893),n=i(7294),s=i(153),o=i(9965),a=i(7262),l=i(3572),h=i(1122),c=i(1664),d=i.n(c),p=i(6820);let u=[{x:1,groupA:38,groupB:19,groupC:9,groupD:4},{x:2,groupA:16,groupB:14,groupC:96,groupD:40},{x:3,groupA:64,groupB:96,groupC:64,groupD:40},{x:4,groupA:32,groupB:48,groupC:64,groupD:40},{x:5,groupA:12,groupB:18,groupC:14,groupD:10}];var g=i(665);let x={top:30,right:30,bottom:50,left:50},m=e=>{let{width:t,height:i,data:s}=e,o=t-x.right-x.left,a=i-x.top-x.bottom,l=["groupA","groupB","groupC","groupD"],h=g.knu().keys(l).order(g.Qxt).offset(g.KuJ),c=h(s),d=(0,n.useMemo)(()=>g.BYU().domain([-200,200]).range([a,0]),[s,i]),[p,u]=g.Wem(s,e=>e.x),m=(0,n.useMemo)(()=>g.BYU().domain([p||0,u||0]).range([0,o]),[s,t]),j=g.PKp().domain(l).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]),f=g.SOn().x(e=>m(e.data.x)).y1(e=>d(e[1])).y0(e=>d(e[0])).curve(g.zgE),v=c.map((e,t)=>{let i=f(e);return(0,r.jsx)("path",{d:i,opacity:1,stroke:"grey",fill:j(e.key),fillOpacity:.8},t)}),b=m.ticks(5).map((e,t)=>(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:m(e),x2:m(e),y1:0,y2:a,stroke:"#808080",opacity:.2}),(0,r.jsx)("text",{x:m(e),y:a+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t));return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:i,children:(0,r.jsxs)("g",{width:o,height:a,transform:"translate(".concat([x.left,x.top].join(","),")"),children:[b,v]})})})},j=e=>{let{width:t=700,height:i=400}=e;return(0,r.jsx)(m,{data:u,width:t,height:i})};var f=i(505);let v=e=>{let t=[];return e.forEach(e=>{let i=t.find(t=>t.date===e.date);if(i)i[e.group]=e.value;else{let i={date:e.date};i[e.group]=e.value,t.push(i)}}),t},b=g.i$Z("%B %Y"),y=e=>{let{xScale:t,height:i}=e,n=t.ticks(5).map((e,n)=>(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:t(e),x2:t(e),y1:0,y2:i,stroke:"#808080",opacity:.2}),(0,r.jsx)("text",{x:t(e),y:i+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",fill:"none",opacity:.8,children:b(e)})]},n));return(0,r.jsx)(r.Fragment,{children:n})};var w=i(2236);let k=e=>{let{labelInfos:t,xStart:i,xEnd:n,biggestValue:s}=e,o=g.BYU().domain([0,s]).range([i+30,n-20]),a=t.map((e,t)=>{let n=Math.floor(e.value/1e6);return(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:i+2,x2:i+30-2,y1:e.position,y2:e.position,stroke:"#808080",opacity:.9,"stroke-dasharray":2}),(0,r.jsx)(S,{color:e.color,x:o(0),y:e.position-10,width:o(e.value)-o(0)}),(0,r.jsx)("text",{x:i+30+2,y:e.position,textAnchor:"start",alignmentBaseline:"central",fontSize:12,stroke:"#808080",fill:"none",children:e.name+" | "+n+"M"})]},t)});return(0,r.jsx)(r.Fragment,{children:a})},S=e=>{let{color:t,x:i,y:n,width:s}=e,o=(0,w.q_)({to:{width:s},config:{friction:10,bounce:0}});return(0,r.jsx)(w.q.rect,{x:i,y:n,width:o.width,height:20,opacity:.7,stroke:t,fill:t,fillOpacity:.3,strokeWidth:1,rx:1})},B=e=>{let{x:t,height:i}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("line",{x1:t,x2:t,y1:0,y2:i,stroke:"black",strokeWidth:1})})};var D=i(1833),z=i.n(D);let C={top:10,right:250,bottom:90,left:0},A=g.Z1g("%Y-%m-%d"),T=e=>{let{width:t,height:i,data:s,startDate:o}=e,[a,l]=(0,n.useState)(null),h=t-C.right-C.left,c=i-C.top-C.bottom,d=s.filter(e=>A(e.date)>o),p=g.Fp7(d.map(e=>e.value)),u=[...new Set(s.map(e=>e.group))],x=v(d),m=g.knu().keys(u).order(g.Qxt).offset(g.KuJ),j=m(x),f=j.flatMap(e=>e.map(e=>e[1])),b=j.flatMap(e=>e.map(e=>e[0])),w=g.BYU().domain([Math.min(...b),Math.max(...f)]).range([c,0]),S=g.Wem(d.map(e=>A(e.date))),D=g.Xf().domain(S).range([0,h]),T=g.PKp().domain(u).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]),I=g.SOn().x(e=>D(A(e.data.date))).y1(e=>w(e[1])).y0(e=>w(e[0])).curve(g.zgE),_=j.map((e,t)=>{let i=I(e);return(0,r.jsx)("path",{className:z().shape,d:i,opacity:1,stroke:"grey",fill:T(e.key),fillOpacity:.8},t)}),M=j.map(e=>{let t=e[e.length-1],i=a?a[e.key]:t[1]-t[0];return{name:e.key,color:T(e.key),value:i,position:w((t[0]+t[1])/2)}}),N=e=>{let t=D.invert(e),i=1/0,r=null;for(let e of x){var n;let s=null===(n=A(e.date))||void 0===n?void 0:n.getTime();if(!s)return null;let o=Math.abs(s-t.getTime());o<i&&(i=o,r=e)}return r},E=e=>{let t=e.currentTarget.getBoundingClientRect(),i=e.clientX-t.left,r=N(i);l(r)};return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:i,children:(0,r.jsxs)("g",{width:h,height:c,transform:"translate(".concat([C.left,C.top].join(","),")"),onMouseMove:E,onMouseLeave:()=>l(null),children:[(0,r.jsx)("rect",{x:0,y:0,width:h,height:c,onMouseMove:E,onMouseLeave:()=>l(null),visibility:"hidden",pointerEvents:"all",cursor:"pointer"}),(0,r.jsx)(y,{xScale:D,height:c}),(0,r.jsx)(k,{labelInfos:M,xStart:D.range()[1],xEnd:t,biggestValue:p}),(0,r.jsx)("g",{className:z().container,children:_}),a&&(0,r.jsx)(B,{height:c,x:D(A(a.date)),biggestValue:p})]})})})},I=g.i$Z("%B %Y"),_=e=>{var t,i;let{width:s,height:o}=e,[a,l]=(0,n.useState)(),[h,c]=(0,n.useState)(A("2015-01-01"));return((0,n.useEffect)(()=>{let e=async()=>{let e=await fetch("https://raw.githubusercontent.com/holtzy/react-graph-gallery/main/data/data_page_views.csv"),t=await e.text(),i=(0,g.ueB)(t);l(i)};e()},[]),a&&h)?(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{height:150},children:[(0,r.jsx)("p",{style:{fontSize:17,paddingTop:40,marginBottom:0},children:(0,r.jsx)("b",{children:"Chat-GPT hasn't impacted tech websites traffic significantly (yet)"})}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)("p",{style:{fontSize:12,width:155,paddingTop:11},children:["Data since ",(0,r.jsx)("b",{children:I(h)})]}),(0,r.jsx)("input",{type:"range",min:null===(t=A("2015-01-01"))||void 0===t?void 0:t.getTime(),max:null===(i=A("2022-09-01"))||void 0===i?void 0:i.getTime(),value:h.getTime(),step:1e4,onChange:e=>c(new Date(Number(e.target.value))),style:{height:1,opacity:.5,width:80}})]})]}),(0,r.jsx)(T,{width:s,height:o-150,data:a,startDate:h})]}):null},M=e=>{let{width:t=700,height:i=400}=e;return(0,r.jsx)(_,{width:t,height:i})};var N=i(88),E=i(6438);let R=[{x:1,groupA:38,groupB:19,groupC:9,groupD:4},{x:2,groupA:16,groupB:14,groupC:96,groupD:40},{x:3,groupA:164,groupB:96,groupC:64,groupD:40},{x:4,groupA:32,groupB:65,groupC:64,groupD:40},{x:5,groupA:12,groupB:80,groupC:14,groupD:10},{x:6,groupA:12,groupB:180,groupC:14,groupD:10},{x:7,groupA:12,groupB:70,groupC:14,groupD:10},{x:8,groupA:12,groupB:30,groupC:24,groupD:10},{x:9,groupA:190,groupB:18,groupC:34,groupD:10},{x:10,groupA:10,groupB:18,groupC:4,groupD:10}];var W=i(7518),O=i.n(W);let Y={top:30,right:30,bottom:50,left:50},G=e=>{let{width:t,height:i,data:s}=e,o=t-Y.right-Y.left,a=i-Y.top-Y.bottom,l=["groupA","groupB","groupC","groupD"],h=g.knu().keys(l).order(g.Qxt).offset(g.KuJ),c=h(s),d=c.flatMap(e=>e.map(e=>e[1])),p=Math.max(...d),u=c.flatMap(e=>e.map(e=>e[0])),x=Math.min(...u),m=(0,n.useMemo)(()=>g.BYU().domain([x,p]).range([a,0]),[s,i]),[j,f]=g.Wem(s,e=>e.x),v=(0,n.useMemo)(()=>g.BYU().domain([j||0,f||0]).range([0,o]),[s,t]),b=g.PKp().domain(l).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]),y=g.SOn().x(e=>v(e.data.x)).y1(e=>m(e[1])).y0(e=>m(e[0])).curve(g.zgE),w=c.map((e,t)=>{let i=y(e);return(0,r.jsx)("path",{className:O().shape,d:i,opacity:1,stroke:"grey",fill:b(e.key),fillOpacity:.8,cursor:"pointer"},t)}),k=v.ticks(5).map((e,t)=>(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:v(e),x2:v(e),y1:0,y2:a,stroke:"#808080",opacity:.2}),(0,r.jsx)("text",{x:v(e),y:a+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t));return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:i,children:(0,r.jsxs)("g",{width:o,height:a,transform:"translate(".concat([Y.left,Y.top].join(","),")"),children:[k,(0,r.jsx)("g",{className:O().container,children:w})]})})})},P=e=>{let{width:t=700,height:i=400}=e;return(0,r.jsx)(G,{data:R,width:t,height:i})};var F=i(295),L=i.n(F),U=i(5334),H=i(6824);let q=e=>{let{path:t,color:i}=e,s=(0,n.useRef)(t),o=(0,n.useMemo)(()=>(0,U.interpolate)(s.current,t),[t]),a=(0,H.q_)({from:{t:0},to:{t:1},reset:s.current!==t,onChange:e=>{let{t}=e;s.current=o(t||1)},config:{friction:100,bounce:0}});return(0,r.jsx)(H.q.path,{d:(0,H.to)(a.t,o),className:L().shape,opacity:1,stroke:"grey",fill:i,fillOpacity:.8,cursor:"pointer"})},X={top:30,right:30,bottom:50,left:50},K={silouhette:g.KuJ,wiggle:g.YGu,none:g.HLf,diverging:g.W$j,expand:g.pBl},V={curveBasis:g.$0Z,bumpX:g.qpX,bumpY:g.u93,curveCardinal:g.YY7,catMullRom:g.zgE,curveLinear:g.c_6,curveNatural:g.SxZ,curveStep:g.eA_},Z=e=>{let{width:t,height:i,data:n,offsetType:s,curveType:o}=e,a=t-X.right-X.left,l=i-X.top-X.bottom,h=["groupA","groupB","groupC","groupD"],c=g.knu().keys(h).order(g.Qxt).offset(K[s]),d=c(n),p=d.flatMap(e=>e.map(e=>e[1])),u=d.flatMap(e=>e.map(e=>e[0])),x=g.BYU().domain([Math.min(...u),Math.max(...p)]).range([l,0]),[m,j]=g.Wem(n,e=>e.x),f=g.BYU().domain([m||0,j||0]).range([0,a]),v=g.PKp().domain(h).range(["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253"]),b=g.SOn().x(e=>f(e.data.x)).y1(e=>x(e[1])).y0(e=>x(e[0])).curve(V[o]),y=d.map((e,t)=>{let i=b(e);return i?(0,r.jsx)(q,{path:i,color:v(e.key)},t):null}),w=f.ticks(5).map((e,t)=>(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:f(e),x2:f(e),y1:0,y2:l,stroke:"#808080",opacity:.2}),(0,r.jsx)("text",{x:f(e),y:l+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t));return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:i,children:(0,r.jsxs)("g",{width:a,height:l,transform:"translate(".concat([X.left,X.top].join(","),")"),children:[w,(0,r.jsx)("g",{className:L().container,children:y})]})})})},J=[{x:1,groupA:38,groupB:19,groupC:9,groupD:4},{x:2,groupA:16,groupB:14,groupC:96,groupD:40},{x:3,groupA:164,groupB:96,groupC:64,groupD:40},{x:4,groupA:32,groupB:65,groupC:64,groupD:40},{x:5,groupA:12,groupB:80,groupC:14,groupD:10},{x:6,groupA:12,groupB:180,groupC:14,groupD:10},{x:7,groupA:12,groupB:70,groupC:14,groupD:10},{x:8,groupA:12,groupB:30,groupC:24,groupD:10},{x:9,groupA:190,groupB:18,groupC:34,groupD:10},{x:10,groupA:10,groupB:18,groupC:4,groupD:10}],$=e=>{let{width:t=700,height:i=400}=e,[s,o]=(0,n.useState)("silouhette"),[a,l]=(0,n.useState)("catMullRom");return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{height:50,display:"flex",marginTop:20,alignItems:"center"},children:[(0,r.jsx)("span",{style:{fontSize:14,marginRight:5},children:"Offset type"}),(0,r.jsxs)("select",{onChange:e=>{o(e.target.value)},value:s,style:{fontSize:14},children:[(0,r.jsx)("option",{value:"silouhette",children:"Silouhette"}),(0,r.jsx)("option",{value:"none",children:"None"}),(0,r.jsx)("option",{value:"wiggle",children:"Wiggle"}),(0,r.jsx)("option",{value:"diverging",children:"Diverging"}),(0,r.jsx)("option",{value:"expand",children:"Expand"})]}),(0,r.jsx)("span",{style:{fontSize:14,marginRight:5,marginLeft:35},children:"Curve type"}),(0,r.jsxs)("select",{onChange:e=>{l(e.target.value)},value:a,style:{fontSize:14},children:[(0,r.jsx)("option",{value:"curveBasis",children:"Cubic basis spline"}),(0,r.jsx)("option",{value:"bumpX",children:"Bezier Curve Horizontal"}),(0,r.jsx)("option",{value:"bumpY",children:"Bezier Curve Vertical"}),(0,r.jsx)("option",{value:"curveCardinal",children:"Cubic cardinal spline "}),(0,r.jsx)("option",{value:"catMullRom",children:"Catmull–Rom spline"}),(0,r.jsx)("option",{value:"curveLinear",children:"Polyline"}),(0,r.jsx)("option",{value:"curveNatural",children:"Natural cubic spline"}),(0,r.jsx)("option",{value:"curveStep",children:"Step function"})]})]}),(0,r.jsx)(Z,{data:J,width:t,height:i-50,offsetType:s,curveType:a})]})},Q=e=>{let{width:t=700,height:i=400}=e;return(0,r.jsx)($,{width:t,height:i})},ee=e=>{let{text:t}=e;return(0,r.jsxs)("blockquote",{className:"mt-10 opacity-20",children:[(0,r.jsx)("b",{className:"text-reactGallery mr-4",children:"ToDo"}),t]})},et=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["A"," ",(0,r.jsx)("a",{href:"https://www.data-to-viz.com/graph/streamgraph.html",children:"streamgraph"})," ","is a variation of the more common"," ",(0,r.jsx)(d(),{href:"stacked-area-plot",children:"stacked area chart"}),". It rounds edges and displays areas around the central axis which gives a nice impression of flow."]}),(0,r.jsxs)("p",{children:["This section explains how to ",(0,r.jsx)("b",{children:"stack"})," and ",(0,r.jsx)("b",{children:"smooth"})," the data with"," ",(0,r.jsx)("code",{children:"d3.js"}),", and render the shapes with ",(0,r.jsx)("code",{children:"react"}),". It starts from the basic and goes until necessary customization like"," ",(0,r.jsx)("b",{children:"tooltips"}),", ",(0,r.jsx)("b",{children:"hover effect"}),", legend and ",(0,r.jsx)("b",{children:"annotation"}),". Examples always come with editable sandboxes."]})]});function ei(){return(0,r.jsxs)(s.A,{title:"Streamchart with React",seoDescription:"How to build a stream chart with React and D3.js. A set of re-usable components",children:[(0,r.jsx)(o.Z,{title:"Streamchart",description:et,chartType:"stream"}),(0,r.jsx)("h2",{id:"data",children:"The Data"})," ",(0,r.jsxs)("p",{children:["Most of the time the input dataset is an ",(0,r.jsx)("b",{children:"array"})," where each item is an ",(0,r.jsx)("b",{children:"object"}),"."]}),(0,r.jsxs)("p",{children:["Each object provides information for a step on the X axis. It has a value like ",(0,r.jsx)("code",{children:"x"})," or ",(0,r.jsx)("code",{children:"date"})," that provides the exact position on the X axis. Then it has several numeric values, one for"," ",(0,r.jsx)("b",{children:"each group"})," of the dataset."]}),(0,r.jsx)("p",{children:"Here is a minimal example:"}),(0,r.jsx)(l.d,{code:er}),(0,r.jsx)("h3",{children:"→ Wide and Long formats"}),(0,r.jsxs)("p",{children:["The format described above is often called the ",(0,r.jsx)("b",{children:"wide"})," format. Another common format is the ",(0,r.jsx)("b",{children:"long"})," format, where each object in the array provides information for 1 group only. (The array becomes way"," ",(0,r.jsx)("i",{children:"longer"})," \uD83D\uDE43)"]}),(0,r.jsxs)("p",{children:["If your dataset is formatted using the long format, you can transform it using the ",(0,r.jsx)("code",{children:"pivotWider"})," function below:"]}),(0,r.jsx)(N.U,{startOpen:!1,title:(0,r.jsx)("span",{children:"Pivot function"}),children:(0,r.jsx)(l.d,{code:es})}),(0,r.jsxs)("h3",{children:["→ ",(0,r.jsx)("code",{children:".csv"})," data"]}),(0,r.jsxs)("p",{children:["If your data is in ",(0,r.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,r.jsx)("code",{children:"csvParse()"})," function of d3. I'll write a blogpost soon on how to deal with the csv format."," ",(0,r.jsx)(d(),{href:"/subscribe",children:"Subscribe"})," to the project to know when it is ready!"]}),(0,r.jsx)(ee,{text:"Add some more hints on how to type those data objects"}),(0,r.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,r.jsxs)("p",{children:["The goal here is to create a ",(0,r.jsx)("code",{children:"StreamGraph"})," component that will be stored in a ",(0,r.jsx)("code",{children:"StreamGraph.tsx"})," file. This component requires 3 props to render: a ",(0,r.jsx)("code",{children:"width"}),", a ",(0,r.jsx)("code",{children:"height"}),", and some ",(0,r.jsx)("code",{children:"data"}),"."]}),(0,r.jsxs)("p",{children:["The shape of the ",(0,r.jsx)("code",{children:"data"})," is described above. The"," ",(0,r.jsx)("code",{children:"width"})," and ",(0,r.jsx)("code",{children:"height"})," will be used to render an"," ",(0,r.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the histogram."]}),(0,r.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our"," ",(0,r.jsx)("code",{children:"StreamGraph"})," component:"]}),(0,r.jsx)(l.d,{code:eo}),(0,r.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the SVG ",(0,r.jsx)("code",{children:"circle"}),", but it's React that will render them in the ",(0,r.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,r.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,r.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,r.jsx)("h2",{id:"Stacking",children:"Stacking series"}),(0,r.jsxs)("p",{children:["Building a stream chart requires to ",(0,r.jsx)("b",{children:"stack"})," the data. Series are displayed one on top of each other and you have to compute their positions on the Y axis."]}),(0,r.jsxs)("p",{children:["Fortunately, ",(0,r.jsx)("code",{children:"D3.js"})," has a handy ",(0,r.jsx)("code",{children:"stack()"})," ","function that does exactly that. The process is deeply explained in the"," ",(0,r.jsx)(d(),{href:"stacked-area-plot",children:"stacked area chart"})," section of the gallery."]}),(0,r.jsx)(E.J,{href:"stacked-area-plot",isFilled:!0,size:"sm",children:"Stacking explanation"}),(0,r.jsxs)("p",{className:"mt-10",children:["The only variation required here is to use the"," ",(0,r.jsx)("code",{children:"d3.stackOffsetSilhouette"})," offset option. Instead of stacking everything ",(0,r.jsx)("b",{children:"above"})," the 0 baseline, it will put groups on both parts of it."]}),(0,r.jsx)("p",{children:"Computing the position of the chart series should look something like:"}),(0,r.jsx)(l.d,{code:en}),(0,r.jsx)("h2",{id:"basic example",children:"Basic streamgraph example"})," ",(0,r.jsxs)("p",{children:["Once more, the process to render the shape is very close to the"," ",(0,r.jsx)(d(),{href:"stacked-area-plot",children:"stacked area chart"}),". A few variations are required though."]}),(0,r.jsx)("h3",{children:"→ Smoothing"}),(0,r.jsxs)("p",{children:["We need to smooth the area shape to get the good-looking organic flow. Once more d3 is here to the rescue with a"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-shape#curves",children:"curve"})," function that does all the work for us."]}),(0,r.jsxs)("p",{children:["This is how to call the ",(0,r.jsx)("code",{children:"curve"})," function and the end of the"," ",(0,r.jsx)("code",{children:"area"})," function call:"]}),(0,r.jsx)(l.d,{code:ea}),(0,r.jsx)("h3",{children:"→ Axis"}),(0,r.jsxs)("p",{children:[(0,r.jsx)(d(),{href:"build-axis-with-react",children:"Usual axes"})," do not work for streamgraphs. The Y axis would make no sense since shapes are on both side of the 0 baseline. It is commonly"," ",(0,r.jsx)("a",{href:"https://www.dataviz-inspiration.com/stream",children:"removed"}),". The X axis would feel lost alone at the very bottom of the chart."]}),(0,r.jsxs)("p",{children:["Here I suggest to replace the X axis with ",(0,r.jsx)("b",{children:"vertical ablines"})," and remove the Y axis completely."]}),(0,r.jsx)(h.$,{vizName:"StreamGraphBasic",VizComponent:j,height:400,maxWidth:600,caption:"Most basic streamgraph with react and d3.js"}),(0,r.jsx)(f.r,{chartId:"stream"}),(0,r.jsx)("h2",{id:"hover effect",children:"Hover effect"}),(0,r.jsxs)("p",{children:["It is pretty hard to follow the evolution of a ",(0,r.jsx)("b",{children:"specific group"})," on a streamgraph."]}),(0,r.jsxs)("p",{children:["It is common to add an hover effect to the figure: hovering over a group will ",(0,r.jsx)("b",{children:"highlight"})," it, making it easier to follow its evolution. Try it on the graph below:"]}),(0,r.jsx)(h.$,{vizName:"StreamGraphHoverEffect",VizComponent:P,height:400,maxWidth:600,caption:"StreamGraph with hover effect that highlights a specific series"}),(0,r.jsx)("p",{children:"There are various strategies to implement such an hover effect."}),(0,r.jsxs)("p",{children:["Here, I suggest to do everything in ",(0,r.jsx)("b",{children:"css"})," using"," ",(0,r.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes",children:"pseudo classes"}),", and targetting svg elements only. Basically, everything in the svg container will be ",(0,r.jsx)("b",{children:"dimmed"})," (lower ",(0,r.jsx)("b",{children:"opacity"})," and"," ",(0,r.jsx)("b",{children:"saturation"}),") when the mouse goes over the chart. But the specific shape that is hovered over will keep its full opacity thanks to a more"," ",(0,r.jsx)("b",{children:"specific"})," css selector."]}),(0,r.jsx)("p",{children:"Hover effect is a big topic and I will post more about it soon!"}),(0,r.jsx)(E.J,{href:"/subscribe",isFilled:!0,size:"sm",children:"Know when"}),(0,r.jsx)(p.Z,{chartId:"stream"}),(0,r.jsx)("h2",{id:"transition",children:"Streamgraph algorithm with transition"}),(0,r.jsxs)("p",{children:["Our streamgraph is renderer using a set of ",(0,r.jsx)("code",{children:"path"}),". The"," ",(0,r.jsx)("code",{children:"d"})," attribute of those paths provides the boundary"," ",(0,r.jsx)("b",{children:"coordinates"})," of those paths."]}),(0,r.jsxs)("p",{children:["When a prop of the ",(0,r.jsx)("code",{children:"StreamGraph"})," component updates, we might want to update the paths to represent the latest state of our application. It can be an update of the ",(0,r.jsx)("b",{children:"dataset"}),", or an update of the function used to ",(0,r.jsx)("b",{children:"stack"})," the data or ",(0,r.jsx)("b",{children:"smooth"})," the area as below."]}),(0,r.jsxs)("p",{children:["It is possible to smoothly animate this transition thanks to"," ",(0,r.jsx)("code",{children:"react-spring"}),"."]}),(0,r.jsx)(h.$,{vizName:"StreamGraphShapeTransition",VizComponent:Q,height:400,maxWidth:600,caption:"Try d3.js various options to offset the data and smooth shapes. See a smooth transition between options."}),(0,r.jsxs)("p",{children:["The animation suggested above is a bit tricky to implement. Indeed, we need to transition from paths that ",(0,r.jsx)("b",{children:"do not have the same number"})," of edges. It is possible thanks to a library called ",(0,r.jsx)("code",{children:"flubber"})," ","but definitely deserves its own blogpost."]}),(0,r.jsx)("p",{children:"I'll publish a full blogpost on the topic soon!"}),(0,r.jsx)(E.J,{href:"/subscribe",isFilled:!0,size:"sm",children:"Get notified"}),(0,r.jsx)(ee,{text:"find why flubber does some weird interpolation in some cases"}),(0,r.jsx)("h2",{id:"application",children:"Application"})," ",(0,r.jsxs)("p",{children:["The following chart is a real-life application of a ",(0,r.jsx)("b",{children:"streamgraph"}),". It shows the evolution if the ",(0,r.jsx)("b",{children:"number of page-views"})," for 5 tech websites in the last 7 years. My goal was to assess if the rise of"," ",(0,r.jsx)("a",{href:"https://openai.com/blog/chatgpt",children:"chat-GPT"})," had an impact on it."]}),(0,r.jsxs)("p",{children:["This ",(0,r.jsx)("b",{children:"interactive"})," chart has several interesting features:"]}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"slider"}),": you can control the displayed time-frame thanks to a slider."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"inline legend"}),": label of each series are written inline. A background proportional to their value provides additional insight."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"hover effect"}),": legend will be updated with precise values at the hovered timestamp."]})]}),(0,r.jsx)(h.$,{vizName:"StreamGraphPageViews",VizComponent:M,height:600,maxWidth:900,caption:"A customized streamgraph built with React and D3.js. It has inline legends, slider to control timeframe, hover effect and more."}),(0,r.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,r.jsx)(a.Z,{chartFamily:"evolution"}),(0,r.jsx)("div",{className:"mt-20"})]})}let er="\nconst data = [\n  {\n    x: 1,\n    groupA: 38,\n    groupB: 19,\n  },\n  {\n    x: 2,\n    groupA: 16,\n    groupB: 14,\n  },\n  ...\n];\n".trim(),en="\nconst stackSeries = d3\n  .stack()\n  .keys(groups)\n  .order(d3.stackOrderNone)\n  .offset(d3.stackOffsetSilhouette);\nconst series = stackSeries(data);\n".trim(),es="\ntype LongDataItem = {\n  date: string;\n  group: string;\n  value: number;\n};\n\ntype WideDataItem = {\n  date: string;\n} & { [key: string]: number }\n\nconst pivotWider = (data: LongDataItem[]) => {\n  const result: WideDataItem[] = [];\n\n  data.forEach((item) => {\n      const existingEntry = result.find((entry) => entry.date === item.date);\n\n      if (existingEntry) {\n          existingEntry[item.group] = item.value;\n      } else {\n          const newEntry = { date: item.date };\n          newEntry[item.group] = item.value;\n          result.push(newEntry);\n      }\n  });\n\n  return result;\n}\n".trim(),eo='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype WideDataItem = {\n  date: string;\n} & { [key: string]: number }\n\ntype StreamGraphProps = {\n  width: number;\n  height: number;\n  data: WideDataItem[];\n};\n\nexport const StreamGraph = ({ width, height, data }: StreamGraphProps) => {\n\n  // read the data\n  // find the list of groups to display\n  // stack the data\n  // build the shapes\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render all the shapes\n      </svg>\n    </div>\n  );\n};\n'.trim(),ea="\nconst areaBuilder = d3\n  .area()\n  .x(d => xScale(x))\n  .y1(d => yScale(d[1]))\n  .y0(d => yScale(d[0]))\n  .curve(curveCatmullRom);\n".trim()},7518:function(e){e.exports={container:"streamgraph_container__P5I08",shape:"streamgraph_shape__6RSMs"}},1833:function(e){e.exports={container:"streamgraph_container__5eu_b",shape:"streamgraph_shape__0T4iU"}},295:function(e){e.exports={container:"streamgraph_container__nSjFu",shape:"streamgraph_shape__jbIv3"}}},function(e){e.O(0,[3996,665,5660,2236,7303,645,1188,9774,2888,179],function(){return e(e.s=7591)}),_N_E=e.O()}]);