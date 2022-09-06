(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[266],{6237:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stacked-area-plot",function(){return r(2904)}])},3485:function(e,t,r){"use strict";r.d(t,{U:function(){return a}});var n=r(5893),i=r(7294),a=function(e){var t=e.startOpen,r=e.title,a=e.children,s=e.toc,o=(0,i.useState)(t),c=o[0],l=o[1],d=c?"max-h-full":"max-h-0",h=c?"overflow-visible":"overflow-hidden";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return l(!c)},id:s,children:[c?(0,n.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,n.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),r]}),(0,n.jsx)("div",{className:"transition-max-height ease-in duration-300  "+d+" "+h,children:a})]})}},33:function(e,t,r){"use strict";r.d(t,{$:function(){return l}});var n=r(5893),i=r(7294),a=r(217),s=r(4893),o=r(5380),c=r(7975),l=function(e){var t=e.VizComponent,r=e.vizName,l=e.height,d=void 0===l?400:l,h=e.maxWidth,u=void 0===h?800:h,p=e.caption,f=(0,i.useState)(!1),x=f[0],m=f[1],g=(0,i.useRef)(null),v=(0,a.B)(g);return(0,n.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:x?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,n.jsx)("div",{style:{maxWidth:2e3},className:"w-full",children:(0,n.jsx)(c.X,{vizName:r})}),(0,n.jsx)("div",{className:"flex justify-center mt-2",children:(0,n.jsx)(s.z,{size:"sm",onClick:function(){return m(!x)},children:"Hide Sandbox"})})]}):(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,n.jsx)("div",{className:"bg-gray-50 w-screen flex justify-center",children:(0,n.jsx)("div",{style:{height:d,width:"100%",maxWidth:u},ref:g,children:(0,n.jsx)(t,{height:d,width:v.width})})}),(0,n.jsx)(o.Y,{children:p}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(s.z,{size:"sm",onClick:function(){return m(!x)},children:"Show code"})})]})})}},7975:function(e,t,r){"use strict";r.d(t,{X:function(){return i}});var n=r(5893),i=(r(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,n.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},3440:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(5893),i=(r(7294),r(3485)),a=r(1687),s=function(e){var t=e.imgLink,r=e.height,i=e.opacity,a=e.children;return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{style:{backgroundImage:"url("+t+")",height:r,backgroundAttachment:"fixed",opacity:i,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,n.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:a})]})};function o(e){e.chartId;return(0,n.jsxs)(i.U,{title:"More inspiration",startOpen:!0,children:[(0,n.jsxs)("p",{children:["If you're looking for inspiration to create your next histogram, note that"," ",(0,n.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,n.jsx)("div",{className:"border mb-10",children:(0,n.jsx)(s,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,n.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,n.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,n.jsxs)("p",{className:"text-center text-sm",children:[(0,n.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your histogram looks good!"]}),(0,n.jsx)(a.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},4893:function(e,t,r){"use strict";r.d(t,{z:function(){return i}});var n=r(5893),i=function(e){var t=e.children,r=e.onClick,i=e.isFilled,a=e.size,s=void 0===a?"md":a,o="rounded m-1 cursor-pointer border-purple-700 border ";return"sm"===s&&(o+="text-sm py-1 px-2"),"md"===s&&(o+="text-md py-2 px-4"),o+=i?" bg-purple-500 hover:bg-purple-700 text-white":" bg-white hover:bg-purple-700 hover:text-white text-purple-700",(0,n.jsx)("button",{className:o,onClick:r,children:t})}},5380:function(e,t,r){"use strict";r.d(t,{Y:function(){return i}});var n=r(5893),i=function(e){var t=e.children;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},8193:function(e,t,r){"use strict";r.d(t,{d:function(){return o}});var n=r(5893),i=r(4725),a=r.n(i),s=r(7294),o=function(e){var t=e.code,r=(0,s.useRef)(null);return(0,s.useEffect)((function(){r.current&&a().highlightElement(r.current)}),[r,t]),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)("pre",{className:"rounded-md line-numbers",children:(0,n.jsx)("code",{ref:r,className:"p-0 language-js",children:t})})})}},217:function(e,t,r){"use strict";r.d(t,{B:function(){return i}});var n=r(7294),i=function(e){var t=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},r=(0,n.useState)(t),i=r[0],a=r[1],s=function(){a(t())};return(0,n.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),(0,n.useLayoutEffect)((function(){s()}),[]),i}},2904:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n=r(5893),i=r(7294),a=r(2044),s=r(6193),o=r(7197),c=r(6978),l=r(3485),d=r(8193),h=r(33),u=r(1664),p=[{x:1,groupA:38,groupB:19,groupC:9,groupD:4},{x:2,groupA:16,groupB:14,groupC:96,groupD:40},{x:3,groupA:64,groupB:96,groupC:64,groupD:40},{x:4,groupA:32,groupB:48,groupC:64,groupD:40},{x:5,groupA:12,groupB:18,groupC:14,groupD:10}],f=r(2535);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(c){i=!0,a=c}finally{try{n||null==o.return||o.return()}finally{if(i)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m={top:30,right:30,bottom:50,left:50},g=function(e){var t=e.width,r=e.height,a=e.data,s=(0,i.useRef)(null),o=t-m.right-m.left,c=r-m.top-m.bottom,l=f.knu().keys(["groupA","groupB","groupC","groupD"]).order(f.Qxt).offset(f.HLf)(a),d=(0,i.useMemo)((function(){return f.BYU().domain([0,300]).range([c,0])}),[a,r]),h=x(f.Wem(a,(function(e){return e.x})),2),u=h[0],p=h[1],g=(0,i.useMemo)((function(){return f.BYU().domain([u||0,p||0]).range([0,o])}),[a,t]);(0,i.useLayoutEffect)((function(){var e=f.Ys(s.current);e.selectAll("*").remove();var t=f.LLu(g);e.append("g").attr("transform","translate(0,"+c+")").call(t);var r=f.y4O(d);e.append("g").call(r)}),[g,d,c]);var v=f.SOn().x((function(e){return g(e.data.x)})).y1((function(e){return d(e[1])})).y0((function(e){return d(e[0])})),j=l.map((function(e,t){var r=v(e);return(0,n.jsx)("path",{d:r,opacity:1,stroke:"none",fill:"#9a6fb0",fillOpacity:t/10+.1},t)}));return(0,n.jsx)("div",{children:(0,n.jsxs)("svg",{width:t,height:r,children:[(0,n.jsx)("g",{width:o,height:c,transform:"translate(".concat([m.left,m.top].join(","),")"),children:j}),(0,n.jsx)("g",{width:o,height:c,ref:s,transform:"translate(".concat([m.left,m.top].join(","),")")})]})})},v=function(e){var t=e.width,r=void 0===t?700:t,i=e.height,a=void 0===i?400:i;return(0,n.jsx)(g,{data:p,width:r,height:a})},j=r(3440),w=(0,n.jsxs)("p",{children:["A"," ",(0,n.jsx)("a",{href:"https://www.data-to-viz.com/graph/area.html",children:"stacked area chart"})," ","is an evolution of an ",(0,n.jsx)(u.default,{href:"area-plot",children:"area chart"})," used to display the evolution of several groups in a dataset. This section explains how to build it with ",(0,n.jsx)("code",{children:"d3.js"})," and ",(0,n.jsx)("code",{children:"react"}),". It focus on stacking, so make sure to read the ",(0,n.jsx)(u.default,{href:"area-plot",children:"area chart"})," ","section first."]}),y="\nconst data = [\n  {\n    x: 1,\n    groupA: 38,\n    groupB: 19,\n  },\n  {\n    x: 2,\n    groupA: 16,\n    groupB: 14,\n  },\n  ...\n];\n".trim(),b='\nconst stackSeries = d3\n  .stack()\n  .keys(["groupA", "groupB"])\n// stackSeries is a function that takes the kind of dataset above and stack the series\n'.trim(),k="\nconst series = stackSeries(data);\n".trim();function N(){return(0,n.jsxs)(a.A,{title:"Stacked Area charts with React",seoDescription:"How to build a stacked area chart with React and D3.js. A set of re-usable components",children:[(0,n.jsx)(s.Z,{title:"Stacked Area charts",description:w,chartType:"stackedArea"}),(0,n.jsxs)(l.U,{title:"Dataset",startOpen:!0,children:[(0,n.jsxs)("p",{children:["Most of the time the input dataset is an array where each item is an object.",(0,n.jsx)("br",{}),"Each object provides information for a step on the X axis. It has a value like ",(0,n.jsx)("code",{children:"x"})," that provides the exact position on the X axis. It then has several numeric values, one for each group of the dataset."]}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:"Here is a minimal example:"}),(0,n.jsx)(d.d,{code:y}),(0,n.jsxs)("p",{children:["Note: if your data is in ",(0,n.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,n.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,n.jsx)("a",{href:"https://d3-graph-gallery.com/graph/line_basic.html",children:"here"}),"."]})]}),(0,n.jsxs)(l.U,{title:"Data wrangling",startOpen:!0,children:[(0,n.jsxs)("p",{children:["The trickiest part of a stacked area chart is probably the"," ",(0,n.jsx)("b",{children:"stacking"})," step.",(0,n.jsx)("br",{}),"Series are displayed one on top of each other and you have to compute their positions on the Y axis. Fortunately ",(0,n.jsx)("code",{children:"d3.js"})," is here to the rescue with a ",(0,n.jsx)("code",{children:"d3.stack()"})," function."]}),(0,n.jsx)("h3",{children:"\u2192 Build a stack generator"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("code",{children:"d3.stack()"})," constructs a stack generator. Basically, it is a function that outputs a function."]}),(0,n.jsx)(d.d,{code:b}),(0,n.jsx)("h3",{children:"\u2192 Use the generator"}),(0,n.jsx)("p",{children:"Now that this stack generator is available, we just have to run it on our dataset to get the stacked values"}),(0,n.jsx)(d.d,{code:k}),(0,n.jsx)("h3",{children:"\u2192 Output"}),(0,n.jsx)("p",{children:"The output has kind of an usual shape and it's important to understand how it's formatted. It's an array with the same length than the initial dataset. Once more, each item is linked to a positon on the x axis."}),(0,n.jsx)("p",{children:"Each item is an array of length 2, associated with a specific series. This is a mess to explain."})]}),(0,n.jsxs)(l.U,{title:"Most basic stacked area chart",startOpen:!0,children:[(0,n.jsx)("p",{children:"Once the data is properly stacked it becomes easy to map on it and add an area for each series, following the same idea than for a usual area chart. Here is a minimal code example wrapping the whole process."}),(0,n.jsx)(h.$,{vizName:"StackedAreaChartBasic",VizComponent:v,height:400,maxWidth:600,caption:"basic stacked area chart with react and d3.js"})]}),(0,n.jsx)(j.Z,{chartId:"stackedArea"}),(0,n.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,n.jsx)(o.Z,{chartFamily:"evolution"}),(0,n.jsx)("div",{className:"mt-20"}),(0,n.jsx)(c.Z,{})]})}}},function(e){e.O(0,[952,660,760,774,888,179],(function(){return t=6237,e(e.s=t);var t}));var t=e.O();_N_E=t}]);