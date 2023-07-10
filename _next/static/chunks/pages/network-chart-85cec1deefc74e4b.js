(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7254],{5878:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/network-chart",function(){return i(8031)}])},6820:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var a=i(5893);i(7294);var n=i(8843),o=i(6438);let r=e=>{let{imgLink:t,height:i,opacity:n,children:o}=e;return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{style:{backgroundImage:"url("+t+")",height:i,backgroundAttachment:"fixed",opacity:n,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,a.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:o})]})};function s(e){var t;let{chartId:i}=e,s=(null===(t=n.c.find(e=>e.id===i))||void 0===t?void 0:t.label)||"chart";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{id:"inspiration",children:s+" inspiration"}),(0,a.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,a.jsx)("span",{children:s}),", note that"," ",(0,a.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,a.jsx)("div",{className:"border mb-10",children:(0,a.jsx)(r,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,a.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,a.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,a.jsxs)("p",{className:"text-center text-sm",children:[(0,a.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,a.jsx)("span",{children:s})," ","looks good!"]}),(0,a.jsx)(o.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},2450:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var a=i(5893);i(7294);var n=i(2050),o=i(9975),r=i(9942);function s(e){let{images:t}=e,i=n.F.filter(e=>t.includes(e.img)).map((e,t)=>(0,a.jsx)(o.X,{link:e.link,title:e.title,description:(0,a.jsx)("p",{children:e.description}),img:e.img,alt:e.alt},t));return(0,a.jsx)(r.E,{children:i})}},505:function(e,t,i){"use strict";i.d(t,{r:function(){return c}});var a=i(5893),n=i(1664),o=i.n(n),r=i(8843),s=i(88),l=i(3572);let c=e=>{let{chartId:t}=e,i=r.c.filter(e=>e.id===t)[0].label;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{id:"responsiveness",children:"Responsive "+i+" with react"}),(0,a.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,a.jsx)("code",{children:"width"})," and ",(0,a.jsx)("code",{children:"height"})," and will render a ",i," of those dimensions."]}),(0,a.jsxs)("p",{children:["Making the ",i," responsive requires adding a ",(0,a.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,a.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,a.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,a.jsx)(s.U,{startOpen:!1,title:(0,a.jsxs)("span",{children:[(0,a.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,a.jsx)(l.d,{code:d})}),(0,a.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,a.jsx)(o(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})},d='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},9975:function(e,t,i){"use strict";i.d(t,{X:function(){return r}});var a=i(5893),n=i(6395),o=i.n(n);let r=e=>{let{img:t,title:i,description:n,link:r,alt:s}=e;return(0,a.jsxs)("figure",{className:o().container,children:[(0,a.jsx)("img",{src:"/chart/"+t,className:o().image,alt:s}),(0,a.jsxs)("figcaption",{children:[(0,a.jsx)("p",{className:o().title,children:(0,a.jsx)("b",{children:i})}),(0,a.jsx)("div",{className:"font-light",children:n}),(0,a.jsx)("a",{href:r})]})]})}},9942:function(e,t,i){"use strict";i.d(t,{E:function(){return n}});var a=i(5893);i(7294);let n=e=>{let{children:t}=e;return(0,a.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:t})}},8893:function(e,t,i){"use strict";i.d(t,{H:function(){return n}});var a=i(5893);let n=e=>{let{text:t}=e;return(0,a.jsxs)("blockquote",{className:"mt-10 opacity-20",children:[(0,a.jsx)("b",{className:"text-reactGallery mr-4",children:"ToDo"}),t]})}},8031:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return z}});var a=i(5893),n=i(7294),o=i(153),r=i(9965),s=i(7262),l=i(3572),c=i(1122),d=i(6820),h=i(505),p=i(8893),u=i(2450);let g={nodes:[{id:"Myriel",group:"team1"},{id:"Anne",group:"team1"},{id:"Gabriel",group:"team1"},{id:"Mel",group:"team1"},{id:"Yan",group:"team2"},{id:"Tom",group:"team2"},{id:"Cyril",group:"team2"},{id:"Tuck",group:"team2"},{id:"Antoine",group:"team3"},{id:"Rob",group:"team3"},{id:"Napoleon",group:"team3"},{id:"Toto",group:"team4"},{id:"Tutu",group:"team4"},{id:"Titi",group:"team4"},{id:"Tata",group:"team4"},{id:"Turlututu",group:"team4"},{id:"Tita",group:"team4"}],links:[{source:"Anne",target:"Myriel",value:1},{source:"Napoleon",target:"Myriel",value:1},{source:"Gabriel",target:"Myriel",value:1},{source:"Mel",target:"Myriel",value:1},{source:"Yan",target:"Tom",value:1},{source:"Tom",target:"Cyril",value:1},{source:"Tuck",target:"Myriel",value:1},{source:"Tuck",target:"Mel",value:1},{source:"Tuck",target:"Myriel",value:1},{source:"Mel",target:"Myriel",value:1},{source:"Rob",target:"Antoine",value:1},{source:"Tata",target:"Tutu",value:1},{source:"Tata",target:"Titi",value:1},{source:"Tata",target:"Toto",value:1},{source:"Tata",target:"Tita",value:1},{source:"Tita",target:"Toto",value:1},{source:"Tita",target:"Titi",value:1},{source:"Tita",target:"Turlututu",value:1},{source:"Rob",target:"Turlututu",value:1}]};var m=i(9040);let f=(e,t,i,a,n)=>{e.clearRect(0,0,t,i),n.forEach(t=>{e.beginPath(),e.moveTo(t.source.x,t.source.y),e.lineTo(t.target.x,t.target.y),e.stroke()}),a.forEach(t=>{t.x&&t.y&&(e.beginPath(),e.moveTo(t.x+10,t.y),e.arc(t.x,t.y,10,0,2*Math.PI),e.fillStyle="#cb1dd1",e.fill())})},x=e=>{let{width:t,height:i,data:o}=e,r=o.links.map(e=>({...e})),s=o.nodes.map(e=>({...e})),l=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=l.current,a=null==e?void 0:e.getContext("2d");a&&m.A4v(s).force("link",m.Fsl(r).id(e=>e.id)).force("collide",m.Hh().radius(10)).force("charge",m.q5i()).force("center",m.wqt(t/2,i/2)).on("tick",()=>{f(a,t,i,s,r)})},[t,i,s,r]),(0,a.jsx)("div",{children:(0,a.jsx)("canvas",{ref:l,style:{width:t,height:i},width:t,height:i})})},b=e=>{let{width:t=700,height:i=400}=e;return 0===t?null:(0,a.jsx)(x,{data:g,width:t,height:i})};var w=i(6438),j=i(1664),v=i.n(j);let k={nodes:[{id:"Myriel",group:"team1"},{id:"Anne",group:"team1"},{id:"Gabriel",group:"team1"},{id:"Mel",group:"team1"},{id:"Yan",group:"team2"},{id:"Tom",group:"team2"},{id:"Cyril",group:"team2"},{id:"Tuck",group:"team2"},{id:"Antoine",group:"team3"},{id:"Rob",group:"team3"},{id:"Napoleon",group:"team3"},{id:"Toto",group:"team4"},{id:"Tutu",group:"team4"},{id:"Titi",group:"team4"},{id:"Tata",group:"team4"},{id:"Turlututu",group:"team4"},{id:"Tita",group:"team4"}],links:[{source:"Anne",target:"Myriel",value:1},{source:"Napoleon",target:"Myriel",value:1},{source:"Gabriel",target:"Myriel",value:1},{source:"Mel",target:"Myriel",value:1},{source:"Yan",target:"Tom",value:1},{source:"Tom",target:"Cyril",value:1},{source:"Tuck",target:"Myriel",value:1},{source:"Tuck",target:"Mel",value:1},{source:"Tuck",target:"Myriel",value:1},{source:"Mel",target:"Myriel",value:1},{source:"Rob",target:"Antoine",value:1},{source:"Tata",target:"Tutu",value:1},{source:"Tata",target:"Titi",value:1},{source:"Tata",target:"Toto",value:1},{source:"Tata",target:"Tita",value:1},{source:"Tita",target:"Toto",value:1},{source:"Tita",target:"Titi",value:1},{source:"Tita",target:"Turlututu",value:1},{source:"Rob",target:"Turlututu",value:1}]},y=(e,t,i,a,n)=>{e.clearRect(0,0,t,i),n.forEach(t=>{e.beginPath(),e.moveTo(t.source.x,t.source.y),e.lineTo(t.target.x,t.target.y),e.stroke()}),a.forEach(t=>{t.x&&t.y&&(e.beginPath(),e.moveTo(t.x+10,t.y),e.arc(t.x,t.y,10,0,2*Math.PI),e.fillStyle="#cb1dd1",e.fill())})},T=e=>{let{width:t,height:i,data:o,collideRadius:r,manyBodyStrength:s,forceYStrength:l}=e,c=o.links.map(e=>({...e})),d=o.nodes.map(e=>({...e})),h=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=h.current,a=null==e?void 0:e.getContext("2d");a&&m.A4v(d).force("link",m.Fsl(c).id(e=>e.id)).force("collide",m.Hh().radius(r).strength(1)).force("charge",m.q5i().strength(s)).force("center",m.wqt(t/2,i/2)).force("charge",m.Mrm(0).strength(l)).on("tick",()=>{y(a,t,i,d,c)})},[t,i,d,c,r,s,l]),(0,a.jsx)("div",{children:(0,a.jsx)("canvas",{ref:h,style:{width:t,height:i},width:t,height:i})})},M={color:"grey",fontSize:14},N=e=>{let{width:t=700,height:i=400}=e,[o,r]=(0,n.useState)(25),[s,l]=(0,n.useState)(0),[c,d]=(0,n.useState)(.1);return(0,a.jsxs)("div",{style:{height:i,width:t},children:[(0,a.jsxs)("div",{style:{height:120,marginLeft:0,display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,a.jsx)("i",{children:(0,a.jsx)("span",{style:M,children:"Radius used to avoid collision: "+o})}),(0,a.jsx)("input",{type:"range",min:2,max:80,value:o,step:1,onChange:e=>r(Number(e.target.value)),style:{height:2,opacity:.5,marginLeft:10}})]}),(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,a.jsx)("i",{children:(0,a.jsx)("span",{style:M,children:"ManyBody strength: "+s})}),(0,a.jsx)("input",{type:"range",min:-60,max:60,value:s,step:1,onChange:e=>l(Number(e.target.value)),style:{height:2,opacity:.5,marginLeft:10}})]}),(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,a.jsx)("i",{children:(0,a.jsx)("span",{style:M,children:"ForceY strength: "+c})}),(0,a.jsx)("input",{type:"range",min:0,max:1,value:c,step:.1,onChange:e=>d(Number(e.target.value)),style:{height:2,opacity:.5,marginLeft:10}})]})]}),(0,a.jsx)(T,{data:k,width:t,height:i-120-50,collideRadius:o,manyBodyStrength:s,forceYStrength:c})]})},R=e=>{let{width:t=700,height:i=400}=e;return(0,a.jsx)(N,{width:t,height:i})},S=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["A ",(0,a.jsx)("a",{href:"https://www.data-to-viz.com/graph/arc.html",children:"network diagram"})," ","shows the interconnections between entities. It is consituted by"," ",(0,a.jsx)("b",{children:"nodes"})," that represent entities and by ",(0,a.jsx)("b",{children:"links"})," that show relationships between entities."]}),(0,a.jsxs)("p",{children:["This page is a step by step tutorial explaining how to build a network diagram component with ",(0,a.jsx)("code",{children:"React"})," and ",(0,a.jsx)("code",{children:"D3.js"}),". It relies on the ",(0,a.jsx)("code",{children:"d3-force"})," plugin to compute the node positions. It comes with explanations and code sandboxes. It starts by simple concepts like how to format the data and how to draw nodes and links in SVG, and then goes further with hover effect, tooltip and more."]})]});function z(){return(0,a.jsxs)(o.A,{title:"How to build a Network Diagram with React and D3.",seoDescription:"A step-by-step guide to build your very own Network diagram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,a.jsx)(r.Z,{title:"Network diagram",description:S,chartType:"network"}),(0,a.jsx)("h2",{id:"data",children:"The Data"}),(0,a.jsxs)("p",{children:["Two layers of information are required to build a network diagram: a list of ",(0,a.jsx)("b",{children:"nodes"})," to build the circles and a list of ",(0,a.jsx)("b",{children:"links"})," to build the lines."]}),(0,a.jsx)("p",{children:"Many different data structures can be used to store such information. In this tutorial I suggest to start with the following:"}),(0,a.jsx)(l.d,{code:D}),(0,a.jsxs)("p",{children:[(0,a.jsx)("code",{children:"data"})," is an object with 2 properties: ",(0,a.jsx)("code",{children:"nodes"})," and"," ",(0,a.jsx)("code",{children:"links"}),"."]}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"nodes"})," is an array where each node is an object defined by its ",(0,a.jsx)("code",{children:"id"})," and its ",(0,a.jsx)("code",{children:"group"}),". Note that any other feature can be added to nodes here."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"links"})," is another array listing the connections. They are defined by a ",(0,a.jsx)("code",{children:"source"})," and a ",(0,a.jsx)("code",{children:"target"})," and optionnaly with a ",(0,a.jsx)("code",{children:"value"}),". Note that all"," ",(0,a.jsx)("code",{children:"source"})," and ",(0,a.jsx)("code",{children:"target"})," values must have a value in the ",(0,a.jsx)("code",{children:"nodes"})," array."]})]}),(0,a.jsx)(p.H,{text:"Explain how to build this data structure from various initial formats"}),(0,a.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,a.jsxs)("p",{children:["The goal here is to create a ",(0,a.jsx)("code",{children:"NetworkDiagram"})," component that will be stored in a ",(0,a.jsx)("code",{children:"NetworkDiagram.tsx"})," file. This component requires 3 props to render: a ",(0,a.jsx)("code",{children:"width"}),", a ",(0,a.jsx)("code",{children:"height"})," ","and some ",(0,a.jsx)("code",{children:"data"}),"."]}),(0,a.jsxs)("p",{children:["The shape of the ",(0,a.jsx)("code",{children:"data"})," is described above. The"," ",(0,a.jsx)("code",{children:"width"})," and ",(0,a.jsx)("code",{children:"height"})," will be used to render an"," ",(0,a.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the arc diagram."]}),(0,a.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our"," ",(0,a.jsx)("code",{children:"NetworkDiagram"})," component:"]}),(0,a.jsx)(l.d,{code:I}),(0,a.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the SVG ",(0,a.jsx)("code",{children:"circle"})," and"," ",(0,a.jsx)("code",{children:"lines"}),", but it's React that will render them in the"," ",(0,a.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like"," ",(0,a.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,a.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,a.jsxs)("h2",{id:"d3-force",children:["Compute node positions with ",(0,a.jsx)("code",{children:"d3-force"})]}),(0,a.jsxs)("p",{children:["The hardest part of a network diagram construction is to"," ",(0,a.jsx)("b",{children:"compute the node positions"}),". Fortunately, the"," ",(0,a.jsx)("a",{href:"https://github.com/d3/d3-force",children:"d3-force"})," plugin allows to simulate ",(0,a.jsx)("b",{children:"physical forces"})," on our nodes to find insightful layouts."]}),(0,a.jsx)(w.J,{href:"https://github.com/d3/d3-force",size:"sm",isFilled:!0,children:"d3-force doc"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsxs)("p",{children:["Everything is done thanks to the ",(0,a.jsx)("code",{children:"forceSimulation()"})," ","function. This function expects an array of nodes as described in the"," ",(0,a.jsx)(v(),{href:"#data",children:"data section"})," above."]}),(0,a.jsxs)("p",{children:["it also expects a list of ",(0,a.jsx)("b",{children:"forces"})," to apply to the nodes. Many kind of physical forces are offered and will be described more in depth later in this post."]}),(0,a.jsxs)("p",{children:["To put it in a nutshell, here is an example of a call to the",(0,a.jsx)("code",{children:"forceSimulation"})," function"]}),(0,a.jsx)(l.d,{code:P}),(0,a.jsxs)("p",{children:["This function is going to run a ",(0,a.jsx)("b",{children:"simulation"}),". It is a basically a"," ",(0,a.jsx)("b",{children:"loop"}),". At each iteration the function tries to improve the node positions until it is satisfied by the result."]}),(0,a.jsxs)("p",{children:["The input we provide to the function (the array of nodes) is progressively ",(0,a.jsx)("b",{children:"mutated"}),". Some very useful properties are added to it! ",(0,a.jsx)("code",{children:"x"})," and ",(0,a.jsx)("code",{children:"y"})," for instance are now providing the node position on the 2d coordinate system \uD83C\uDF89."]}),(0,a.jsxs)("p",{children:["This is how ",(0,a.jsx)("code",{children:"nodes"})," is now looking like:"]}),(0,a.jsx)(l.d,{code:A}),(0,a.jsxs)("p",{children:["Note that pretty much the same thing happens to the"," ",(0,a.jsx)("b",{children:"array of links"}),". The array is mutated, now providing the source and target coordinates too."," "]}),(0,a.jsx)("p",{children:"This is it! Now it is just a matter of drawing those nodes and links with the available coordinates. \uD83D\uDD25"}),(0,a.jsx)("h2",{id:"rendering",children:"Render nodes and links using canvas"}),(0,a.jsxs)("p",{children:["Rendering a network diagram is ",(0,a.jsx)("b",{children:"a bit more tricky"})," than many other chart types described in this gallery:"]}),(0,a.jsx)("h3",{children:"→ Simulation takes time"}),(0,a.jsxs)("p",{children:["Running the simulations with ",(0,a.jsx)("code",{children:"forceSimulation()"})," to get the node positions ",(0,a.jsx)("b",{children:"takes time"}),". Even with a small dataset like below it takes a few seconds. Since we do not want to leave the graph area empty for such a long period of time, a common workaround is to"," ",(0,a.jsx)("b",{children:"update"})," the node positions ",(0,a.jsx)("b",{children:"at each iteration"})," of the simulation."]}),(0,a.jsxs)("p",{children:["Fortunately this is possible using the ",(0,a.jsx)("code",{children:"on('tick', ...)"})," ","method of ",(0,a.jsx)("code",{children:"forceSimulation()"}),". Using the code below I can call a hand-made function called ",(0,a.jsx)("code",{children:"drawNetwork"})," that will render the graph at each iteration."]}),(0,a.jsx)(l.d,{code:B}),(0,a.jsxs)("p",{children:["Note that the simulation is run in a ",(0,a.jsx)("code",{children:"useEffect"})," hook. It allows to first initialize the graph area in the DOM, and then render the content into it."]}),(0,a.jsx)("h3",{children:"→ Performance is key"}),(0,a.jsxs)("p",{children:["The number of items to draw in the network diagram is often ",(0,a.jsx)("b",{children:"big"}),". And we need to render it ",(0,a.jsx)("b",{children:"many times"}),", at each iteration of the simulation. Adding that many SVG elements to the DOM could be very bad in term of performance."]}),(0,a.jsxs)("p",{children:["This is why I strongly advise to use a ",(0,a.jsx)("code",{children:"canvas"})," element to render the shapes. The ",(0,a.jsx)("code",{children:"drawNetwork()"})," function could look as something like this:"]}),(0,a.jsx)(l.d,{code:C}),(0,a.jsxs)("p",{children:["Using canvas instead of SVG is a very important concept when preformance needs to be improved in a data visualization. I am preparing a full post on the topic so feel free to ",(0,a.jsx)(v(),{href:"/subscribe",children:"subscribe"})," to the project to know when it is ready!"]}),(0,a.jsx)(w.J,{isFilled:!0,size:"sm",href:"/subscribe",children:"More about Canvas"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:"Here is a code sandbox putting all of this into action. It results in a first simple network diagram. Refresh the page to see the simulation running and the node slowly reaching their final positons."}),(0,a.jsx)(c.$,{VizComponent:b,vizName:"NetworkDiagramBasicCanvas",maxWidth:700,height:500,caption:"A first network diagram built using react and d3-force."}),(0,a.jsx)(h.r,{chartId:"network"}),(0,a.jsx)(d.Z,{chartId:"network"}),(0,a.jsx)("h2",{id:"forces",children:"Available forces"}),(0,a.jsxs)("p",{children:["The exausthive list of forces that can be applied to nodes is available in the"," ",(0,a.jsx)("a",{href:"https://github.com/d3/d3-force#forces",children:"official documentation"}),". Here is an overview of the main ones:"]}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"d3.forceManyBody()"})," → simulates ",(0,a.jsx)("b",{children:"attraction"})," ","between nodes if its strength is positive, ",(0,a.jsx)("b",{children:"repulsion"})," otherwise."]}),(0,a.jsx)("br",{}),(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"d3.forceCenter()"})," → translates nodes uniformly so that the mean position of all nodes is at a given position."]})," ",(0,a.jsx)("br",{}),(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"d3.forceCollide()"})," → tries to avoid node collision and overlap. You can provide a ",(0,a.jsx)("code",{children:"radius"})," and a"," ",(0,a.jsx)("code",{children:"strength"}),"."]})," ",(0,a.jsx)("br",{}),(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"d3.forceLink()"})," → pushes linked nodes together or apart according to the desired link distance."]})," ",(0,a.jsx)("br",{}),(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"d3.forceX()"})," → applies a force toward a X position to all nodes. ",(0,a.jsx)("code",{children:"d3.forceY()"})," is also available."]})]}),(0,a.jsx)(c.$,{VizComponent:R,vizName:"NetworkDiagramAvailableForces",maxWidth:1e3,height:700,caption:"A first network diagram built using react and d3-force."}),(0,a.jsx)("h2",{id:"variations",children:"Variations"}),(0,a.jsxs)("p",{children:["Once you've understood how to build a basic network diagram with d3 and react, it opens an infinite world of ",(0,a.jsx)("b",{children:"customization"}),". Here are a few examples using the same concepts."]}),(0,a.jsx)("p",{children:"Click on the overview below to get details and code."}),(0,a.jsx)("br",{}),(0,a.jsx)(u.Z,{images:["vertical-arc-diagram.png"]}),(0,a.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,a.jsx)(s.Z,{chartFamily:"flow"}),(0,a.jsx)("div",{className:"mt-20"})]})}let D='\nexport const data = {\n  nodes: [\n      { id: "Myriel", group: \'team1\' },\n      { id: "Anne", group: \'team1\' },\n      ...\n  ],\n  links: [\n      { source: "Anne", target: "Myriel", value: 1 },\n      { source: "Napoleon", target: "Myriel", value: 1 },\n      ...\n  ]\n}\n'.trim(),I='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype NetworkDiagramProps = {\n  width: number;\n  height: number;\n  data: number[];\n};\n\nexport const NetworkDiagram = ({ width, height, data }: NetworkDiagramProps) => {\n\n  // read the data\n  // compute the nodes position using a d3-force\n  // build the links\n  // build the nodes\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render all the lines and circles\n      </svg>\n    </div>\n  );\n};\n'.trim(),P="\nd3.forceSimulation(nodes) // apply the simulation to our array of nodes\n\n  // Force #1: links between nodes\n  .force( 'link', d3.forceLink(links).id((d) => d.id))\n\n  // Force #2: avoid node overlaps\n  .force('collide', d3.forceCollide().radius(RADIUS))\n\n  // Force #3: attraction or repulsion between nodes\n  .force('charge', d3.forceManyBody())\n\n  // Force #4: nodes are attracted by the center of the chart area\n  .force('center', d3.forceCenter(width / 2, height / 2));\n".trim(),A="\n// Mutated nodes once the simulation has been run\n[\n  { id: \"Myriel\", group: 'team1', x: 200, y: 34.5, index: 0, ... },\n  { id: \"Anne\", group: 'team1', x: 100, y: 53.2, index: 1, ... },\n  ...\n],\n".trim(),B="\n.on('tick', () => {\n  drawNetwork(context, width, height, nodes, links);\n});\n".trim(),C="\nexport const RADIUS = 10;\n\nexport const drawNetwork = (context, width, height, nodes, links,) => {\n  context.clearRect(0, 0, width, height);\n\n  // Draw the links first\n  links.forEach((link) => {\n    context.beginPath();\n    context.moveTo(link.source.x, link.source.y);\n    context.lineTo(link.target.x, link.target.y);\n    context.stroke();\n  });\n\n  // Draw the nodes\n  nodes.forEach((node) => {\n    context.beginPath();\n    context.moveTo(node.x + RADIUS, node.y);\n    context.arc(node.x, node.y, RADIUS, 0, 2 * Math.PI);\n    context.fillStyle = '#cb1dd1';\n    context.fill();\n  });\n};\n".trim()},2050:function(e,t,i){"use strict";i.d(t,{F:function(){return a}});let a=[{link:"/scatter-plot#scales%20and%20axes",title:"Scales and axes",description:"How to map your data in a 2d space, and how to draw the axes",img:"axis-basic-demo.png",alt:"Picture of an empty chart area with X and Y axes"},{link:"/scatter-plot#circles",title:"Basic scatter plot",description:"Add circles to get a basic scatter plot",img:"scatterplot-most-basic.png",alt:"Most basic scatterplot made with react and d3"},{link:"/scatter-plot#tooltip",title:"Add tooltip",description:"Get more details about each datapoint by adding a tooltip on hover",img:"scatterplot-tooltip.png",alt:"Scatterplot with tooltip made with react and d3"},{link:"/scatter-plot#hover%20effect",title:"Add a hover effect",description:"Highlight a specific group on hover",img:"scatterplot-hover-effect.png",alt:"Scatterplot with hover effect made with react and d3"},{link:"/scatter-plot#real%20life",title:"Real life use-case",description:"Reproduction of a data wrapper chart representing countries CO2 data",img:"scatterplot-co2.png",alt:"Real life example of a scatterplot made with react and d3"},{link:"/example/boxplot-jitter",title:"Boxplot with jitter",description:"Add individual data points using jitter on top of the boxplot",img:"boxplot-jitter.png",alt:"Picture of a boxplot with jitter built using react and d3.js"},{link:"/bubble-plot",title:"Bubble plot",description:"Learn how to build a bubble plot with react and d3.js",img:"bubble-plot-with-legend.png",alt:"Picture of a simple bubble plot with a legend made with react and d3.js"},{link:"/histogram",title:"Histogram",description:"Learn how to build a histogram with react and d3.js",img:"histogram-basic.png",alt:"Picture of a simple histogram made with react and d3.js"},{link:"/histogram#transition",title:"Histogram dataset transition",description:"How to animate the transition between datasets",img:"histogram-dataset-transition.gif",alt:"GIF of a histogram with animated data transition"},{link:"/violin-plot",title:"Violin to Boxplot transition",description:"Using shape morphism to smoothly transition from a boxplot to a violin and reverse",img:"violinBoxplotTransition.png",alt:"gif of a violin plot smoothly transitioning to a boxplot using shape morphism"},{link:"/heatmap",title:"Basic heatmap",description:"Most basic heatmap",img:"heatmapBasic.png",alt:"Picture of a simple heatmap made with react and d3.js"},{link:"/heatmap#tooltip",title:"Heatmap with tooltip",description:"Learn how to add a tooltip to a heatmap with react",img:"heatmapTooltip.png",alt:"Picture of a heatmap with a tooltip that appears on hover"},{link:"/heatmap#legend",title:"Continuous color scale",description:"How to add a color legend to your chart that uses a continuous color scale",img:"continuousColorLegend.png",alt:"Picture of a continuous color scale built with d3.js"},{link:"/heatmap#application",title:"Vaccination heatmap",description:"Reproduction of a famous vaccination heatmap using d3 and react",img:"heatmapVaccination.png",alt:"Picture of a heatmap showing the effect of vaccination, built with react and d3"},{link:"/violin-plot#bucket%20size",title:"Bucket size effect",description:"Interactive example showing the bucket size effect on a violin chart",img:"violin-bucket-size-effect.gif",alt:"GIF showing a violin plot with varying bucket size"},{link:"/correlogram",title:"Basic correlogram",description:"Learn how to build a correlogram with react and d3",img:"correlogramBasic.png",alt:"Picture of a correlogram built with react and d3"},{link:"/violin-plot#violin%20component",title:"Violin shape",description:"How to build the shape of a violin with SVG",img:"violinShape.png",alt:"Picture of a violin shape built with react and d3"},{link:"/violin-plot",title:"Boxplot to Violin plot",description:"Interactive example showing the difference between a boxplot and a violin",img:"boxplot-violin-transition.gif",alt:"GIF showing a mirror transition between a boxplot and a violin plot"},{link:"/barplot",title:"Basic barplot",description:"Most basic barplot built with React and d3",img:"barplot-basic.png",alt:"Picture of a horizontal barplot made with React and d3"},{link:"/violin-plot",title:"Basic violin plot",description:"Learn how to build a basic violin chart with d3 and react",img:"violinBasic.png",alt:"Picture of a basic violin chart built in react"},{link:"/violin-plot#bucket%20size",title:"Violin with variable bucket size",description:"A violin plot with a slider to change the bucket size in use",img:"violinBucketSize.png",alt:"Picture of a violin plot with variable bucket size"},{link:"/boxplot#box%20component",title:"Boxplot shape",description:"How to build a boxplot shape in SVG",img:"boxplotShape.png",alt:"Picture of a box component, allowing to build a boxplot later on"},{link:"/boxplot",title:"Basic boxplot",description:"How to build a basic boxplot with react",img:"boxplotBasic.png",alt:"Picture of a basic boxplot built with react and d3"},{link:"/example/histogram-small-multiple",title:"Small multiple",description:"Create one panel per group to show its distribution separately",img:"histogram-small-multiple.png",alt:"Picture of a histogram with small multiple built with react and d3.js"},{link:"/example/histogram-with-several-groups",title:"Multiple groups",description:"A histogram with <b>multiple</b> groups displayed on the same axis.",img:"histogram-with-several-groups.png",alt:"Picture of a histogram with multiple groups built with react and d3.js"},{link:"/density-plot",title:"Basic density plot",description:"Most basic density plot built with React and d3",img:"densityBasic.png",alt:"Picture of a basic density plot built with React and d3"},{link:"/density-plot#variations",title:"Density plot with multiple groups",description:"How to add several groups on the same density plot",img:"densityMultipleGroups.png",alt:"Picture of a density plot with multiple groups"},{link:"/ridgeline",title:"Basic ridgeline chart",description:"Most basic version of a ridgeline plot",img:"ridgelineBasic.png",alt:"Picture of a basic ridgeline chart built with react and d3"},{link:"/example/barplot-data-transition-animation",title:"Barplot dataset transition",description:"How to smoothly animate the transition between dataset",img:"barplotDatasetAnimation.gif",alt:"GIF of a data update on a React barplot"},{link:"/scatterplot",title:"Scatterplot Hover effect",description:"How to add a hover effect to highlight a group on a scatterplot",img:"scatterplotHoverEffect.gif",alt:"GIF of a scatterplot with hover effect"},{link:"/bubble-plot#transition",title:"Bubble plot data set transition",description:"How to smoothly animate the transition between dataset",img:"bubble-plot-dataset-transition.gif",alt:"GIF of a bubble plot smoothly transitioning data"},{link:"/example/barplot-stacked-horizontal",title:"Horizontal Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-horizontal.png",alt:"Picture of a stacked barchart made with react and d3"},{link:"/example/barplot-stacked-vertical",title:"Vertical Stacked Barplot",description:"Represent group and subgroup values by stacking the data",img:"barplot-stacked-vertical.png",alt:"Picture of a vertical stacked barchart made with react and d3"},{link:"/line-chart#basic",title:"Most basic line chart",description:"The most basic line chart one can make using d3 and react",img:"line-chart-basic.png",alt:"Picture of a very simple line chart made with react and d3"},{link:"/streamchart",title:"Basic Streamgraph",description:"Most basic streamgraph one can build using d3 and react",img:"streamgraph-basic.png",alt:"Picture of a basic streamgraph made using Reacrt and d3.js"},{link:"/line-chart#transition",title:"Line chart with dataset transition",description:"How to smoothly animate the transition between 2 dataset on a line chart",img:"line-chart-data-transition.gif",alt:"GIF of a line chart that animates between 2 dataset"},{link:"/area-plot",title:"Basic Area Chart",description:"Most basic version of an area chart made with react and d3.js",img:"area-chart-basic.png",alt:"Picture of a basic area chart made with React and D3"},{link:"/stacked-area-plot",title:"Basis stacked area chart",description:"Most basic version of a stacked area chart. Explains how to use the stack() function of d3.js",img:"stacked-area-plot-basic.png",alt:"picture of a basic stacked area plot made with react"},{link:"/streamchart#hover&effect",title:"Streamgraph with hover effect",description:"How to add a hover effect on a streamgraph to highlight a group",img:"streamgraph-hover-effect.gif",alt:"GIF of a streamgraph react component that supports hover effect"},{link:"/streamchart#transition",title:"Offset and Smoothing transition",description:"An interactive streamgraph example showing how to animate transition between the chart stacking features.",img:"streamgraph-offset-type-transition.gif",alt:"GIF of a streamgraph"},{link:"/streamchart#application",title:"Streamgraph application",description:"Streamgraph with a slider to zoom on a time stamp and with interactive inline legends",img:"streamgraph-application.gif",alt:"GIF of a streamgraph with multiple interactive features"},{link:"/example/arc-diagram-vertical",title:"Vertical arc diagram",description:"The vertical version of the arc diagram is more convenient to display labels",img:"vertical-arc-diagram.png",alt:"Picture of a vertical arc diagram"}]},6395:function(e){e.exports={container:"graphLinkImage_container__6vbL1",title:"graphLinkImage_title__86b4Y"}}},function(e){e.O(0,[3996,9040,5660,645,1188,9774,2888,179],function(){return e(e.s=5878)}),_N_E=e.O()}]);