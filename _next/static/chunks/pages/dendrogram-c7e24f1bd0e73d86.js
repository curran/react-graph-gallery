(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6456],{4854:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dendrogram",function(){return n(3335)}])},3335:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var a=n(5893),r=n(7294),i=n(153),s=n(9965),d=n(7262),o=n(3572),h=n(1122);let l={type:"node",name:"boss",value:0,children:[{type:"node",name:"Team Dataviz",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53}]},{type:"node",name:"Team DevOps",value:0,children:[{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12}]},{type:"node",name:"Team Sales",value:0,children:[{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]}]};var c=n(3890);let x={top:60,right:60,bottom:60,left:60},u=e=>{let{width:t,height:n,data:i}=e,s=t-x.right-x.left,d=n-x.top-x.bottom;console.log(t);let o=(0,r.useMemo)(()=>c.bT9(i),[i]),h=(0,r.useMemo)(()=>{let e=c.ki8().size([s,d]);return e(o)},[o,t,n]),l=h.descendants().map(e=>(0,a.jsxs)("g",{children:[(0,a.jsx)("circle",{cx:e.x,cy:e.y,r:5,stroke:"transparent",fill:"#69b3a2"}),(0,a.jsx)("text",{x:e.x,y:e.y+25,fontSize:12,textAnchor:"middle",children:e.data.name})]},"node"+e.id)),u=h.descendants().map(e=>e.parent?(0,a.jsx)("line",{fill:"none",stroke:"grey",x1:e.x,x2:e.parent.x,y1:e.y,y2:e.parent.y},"line"+e.id):null);return(0,a.jsx)("div",{children:(0,a.jsx)("svg",{width:t,height:n,children:(0,a.jsxs)("g",{width:s,height:d,transform:"translate(".concat([x.left,x.top].join(","),")"),children:[l,u]})})})},m=e=>{let{width:t=700,height:n=400}=e;return t?(0,a.jsx)(u,{data:l,width:t,height:n}):null},p={type:"node",name:"boss",value:0,children:[{type:"node",name:"Team Dataviz",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53}]},{type:"node",name:"Team DevOps",value:0,children:[{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12}]},{type:"node",name:"Team Sales",value:0,children:[{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]}]},j={top:60,right:60,bottom:60,left:60},f=e=>{let{width:t,height:n,data:i}=e,s=t-j.right-j.left,d=n-j.top-j.bottom,o=(0,r.useMemo)(()=>c.bT9(i).sum(e=>e.value),[i]),h=(0,r.useMemo)(()=>{let e=c.ki8().size([d,s]);return e(o)},[o,t,n]),l=h.descendants().map(e=>(0,a.jsxs)("g",{children:[(0,a.jsx)("circle",{cx:e.y,cy:e.x,r:5,stroke:"transparent",fill:"#69b3a2"}),!e.children&&(0,a.jsx)("text",{x:e.y+15,y:e.x,fontSize:12,textAnchor:"left",alignmentBaseline:"middle",children:e.data.name})]},e.id)),x=c.h5h(),u=h.descendants().map(e=>{if(e.parent)return(0,a.jsx)("path",{fill:"none",stroke:"grey",d:x({source:[e.parent.y,e.parent.x],target:[e.y,e.x]})},e.id)});return(0,a.jsx)("div",{children:(0,a.jsx)("svg",{width:t,height:n,children:(0,a.jsxs)("g",{width:s,height:d,transform:"translate(".concat([j.left,j.top].join(","),")"),children:[l,u]})})})},y=e=>{let{width:t=700,height:n=400}=e;return(0,a.jsx)(f,{data:p,width:t,height:n})},g={type:"node",name:"boss",value:0,children:[{type:"node",name:"Team Dataviz",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53}]},{type:"node",name:"Team DevOps",value:0,children:[{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12}]},{type:"node",name:"Team Sales",value:0,children:[{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]}]},b=e=>2*e*Math.PI/360,v=e=>{let{width:t,height:n,data:i}=e,s=(0,r.useMemo)(()=>c.bT9(i).sum(e=>e.value),[i]),d=Math.min(t,n)/2-70,o=(0,r.useMemo)(()=>{let e=c.ki8().size([360,d]);return e(s)},[s,t,n]),h=o.descendants().map(e=>{let t=e.x>180;return(0,a.jsxs)("g",{transform:"rotate("+(e.x-90)+")translate("+e.y+")",children:[(0,a.jsx)("circle",{cx:0,cy:0,r:5,stroke:"transparent",fill:"#69b3a2"}),!e.children&&(0,a.jsx)("text",{x:t?-15:15,y:0,fontSize:12,textAnchor:t?"end":"start",transform:t?"rotate(180)":"rotate(0)",alignmentBaseline:"middle",children:e.data.name})]},e.id)}),l=c.M4Z().angle(e=>b(e.x)).radius(e=>e.y),x=o.links().map(e=>0===e.source.depth?(0,a.jsxs)("g",{transform:"rotate("+(e.target.x-90)+")",children:[(0,a.jsx)("line",{x1:0,y1:0,x2:e.target.y,y2:0,stroke:"grey"}),";"]},e.source+"_"+e.target):(0,a.jsx)("path",{fill:"none",stroke:"grey",d:l(e)||void 0},e.source+"_"+e.target));return(0,a.jsx)("div",{children:(0,a.jsx)("svg",{width:t,height:n,children:(0,a.jsxs)("g",{transform:"translate("+(d+35)+","+(d+35)+")",children:[x,h]})})})},w=e=>{let{width:t=700,height:n=400}=e;return(0,a.jsx)(v,{data:g,width:t,height:n})};var k=n(88),T=n(1664),z=n.n(T),M=n(6438);let D=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["A"," ",(0,a.jsx)("a",{href:"https://www.data-to-viz.com/graph/dendrogram.html",children:"dendrogram"})," ","is a ",(0,a.jsx)("b",{children:"network"})," structure. It is constituted of a ",(0,a.jsx)("b",{children:"root"})," node that gives birth to several nodes connected by ",(0,a.jsx)("b",{children:"edges"})," or branches. The last nodes of the hierarchy are called ",(0,a.jsx)("b",{children:"leaves"}),"."]}),(0,a.jsxs)("p",{children:["This page explains how to build a dendrogram using ",(0,a.jsx)("b",{children:"d3.js"})," to compute the node position, and ",(0,a.jsx)("b",{children:"React"})," to render the nodes and edges. It starts by describing the required ",(0,a.jsx)("b",{children:"data"})," format, explains how to build a very ",(0,a.jsx)("b",{children:"basic"}),"dendrogram and then shows how to ",(0,a.jsx)("b",{children:"customize"})," it."]})]});function I(){return(0,a.jsxs)(i.A,{title:"Dendrogram | The React Graph Gallery",seoDescription:"How to build a dendrogram with React and D3.js. A set of re-usable components with explanation and code.",children:[(0,a.jsx)(s.Z,{title:"Dendrogram",description:D,chartType:"dendrogram"}),(0,a.jsx)("h2",{id:"data",children:"The Data"})," ",(0,a.jsxs)("p",{children:["The dataset describes a ",(0,a.jsx)("b",{children:"hierarchy"})," using a ",(0,a.jsx)("b",{children:"recursive"})," ","structure."]}),(0,a.jsxs)("p",{children:["Each item in this structure is called a ",(0,a.jsx)("b",{children:"node"}),". The lowest nodes of the hierarchy being called ",(0,a.jsx)("b",{children:"leaves"}),". The dataset is an object that has at least 3 properties: ",(0,a.jsx)("code",{children:"name"}),", ",(0,a.jsx)("code",{children:"value"})," and"," ",(0,a.jsx)("code",{children:"children"}),". Children is an array of nodes that have this structure too."]}),(0,a.jsx)("p",{children:"Here is a minimal example of the data structure:"}),(0,a.jsx)(o.d,{code:E}),(0,a.jsxs)("p",{children:[(0,a.jsx)("u",{children:"Note"}),": if your data is not formatted this way at all, don't fret! In the next section I explain how to deal with ",(0,a.jsx)("b",{children:"other formats"}),". ⬇️"]}),(0,a.jsx)("h2",{id:"hierarchy",children:'The hierarchy format or "root node"'}),(0,a.jsxs)("p",{children:["A dendrogram is a ",(0,a.jsx)("b",{children:"hierarchical layout"}),". D3.js has a lot of"," ",(0,a.jsx)("a",{href:"https://github.com/d3/d3-hierarchy",children:"utility functions"})," ","allowing to deal with this kind of hierarchical data. To use those functions we first need to create a ",(0,a.jsx)("b",{children:'"Root node"'})," or"," ",(0,a.jsx)("b",{children:'"Hierarchy"'}),"."]}),(0,a.jsxs)("p",{children:["But ",(0,a.jsx)("i",{children:"what the heck is this"}),"? \uD83E\uDD14"]}),(0,a.jsxs)("p",{children:['A "root node" or "hierarchy" is a ',(0,a.jsx)("b",{children:"javascript object"}),". It has almost the same shape as the input data described above. But with some additional properties and methods that will make our life easier. This data structure is typed as a"," ",(0,a.jsx)("a",{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/d3-hierarchy/index.d.ts#L29",children:"HierarchyNode"}),"."]}),(0,a.jsx)("h3",{children:"→ properties of a root node"}),(0,a.jsx)("p",{children:'This "root node" is a recursive structure of nodes as described in the data section above. But it has those new properties:'}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"data"}),": associated data"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"depth"}),": 0 for the root node, and increasing by one for each descendant."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"height"}),": 0 for leaf nodes, and the greatest distance from any descendant leaf otherwise."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"children"}),": an array of child nodes, if any; undefined for leaf nodes."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("code",{children:"value"}),": the summed value of the node and its descendants."]})]}),(0,a.jsxs)("p",{children:["On top of that, each node also has associated methods like"," ",(0,a.jsx)("code",{children:"node.descendants()"})," or ",(0,a.jsx)("code",{children:"node.links()"})," that we will describe later. See the complete list in the"," ",(0,a.jsx)("a",{href:"https://github.com/d3/d3-hierarchy",children:"d3-hierarchy doc"}),"."," "]}),(0,a.jsx)("h3",{children:"→ how to build a root node"}),(0,a.jsxs)("p",{children:["If your dealing with the format describe in the previous section, you just have to pass it to the d3 ",(0,a.jsx)("code",{children:"hierarchy"})," function:"]}),(0,a.jsx)(o.d,{code:N}),(0,a.jsx)("p",{children:"Very convenient. If you have a different input, here is how to do:"}),(0,a.jsxs)(k.U,{startOpen:!1,title:"My input is a list of connection in .json format",children:[(0,a.jsx)("br",{}),(0,a.jsxs)("p",{children:["Let's say you have a ",(0,a.jsx)("b",{children:"tabular"})," format in json format. It's an array where each item represents a ",(0,a.jsx)("b",{children:"node"}),". For each node, you have a ",(0,a.jsx)("code",{children:"name"})," property and a ",(0,a.jsx)("code",{children:"parent"})," property that provides the parent name:"]}),(0,a.jsx)(o.d,{code:R}),(0,a.jsx)("p",{children:"In this case, you have to use the stratify function to create the hierarchy. This is how the syntax looks like:"}),(0,a.jsx)(o.d,{code:_}),(0,a.jsx)("p",{children:"And that's it. You have a hierarchy object and can follow the rest of this tutorial."})]}),(0,a.jsxs)(k.U,{startOpen:!1,title:"My input is a list of connection in .csv format",children:[(0,a.jsx)("br",{}),(0,a.jsxs)("p",{children:["In this case, you can use the"," ",(0,a.jsx)("a",{href:"https://github.com/d3/d3-dsv#csvParse",children:"csvParse()"})," ","function of d3 to get a javascript array and use the"," ",(0,a.jsx)("code",{children:"stratify"})," function as shown in the accordion above."," "]}),(0,a.jsx)(o.d,{code:A})]}),(0,a.jsxs)("h2",{id:"cluster",children:["The ",(0,a.jsx)("code",{children:"cluster()"})," function"]}),(0,a.jsxs)("p",{children:["We now have a ",(0,a.jsx)("code",{children:"hierarchy"})," object that is a convenient data structure. From this, we need to compute the position of each node in our ",(0,a.jsx)("b",{children:"2d space"}),"."]}),(0,a.jsxs)("p",{children:["This is made possible thanks to the ",(0,a.jsx)("code",{children:"cluster()"})," function of d3.js. You can check its"," ",(0,a.jsx)("a",{href:"https://github.com/d3/d3-hierarchy#cluster",children:"offical documentation"}),"."]}),(0,a.jsxs)("h3",{children:["→ calling ",(0,a.jsx)("code",{children:"d3.cluster()"})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("code",{children:"d3.cluster()"})," is a function that returns a layout generator. It is thus a function that returns a function. There is not much to provide to it, except the ",(0,a.jsx)("code",{children:"width"})," and ",(0,a.jsx)("code",{children:"height"})," of the figure."]}),(0,a.jsx)(o.d,{code:S}),(0,a.jsxs)("p",{children:["The generator we have now (",(0,a.jsx)("code",{children:"dendrogramGenerator"}),") expect 1 input: a ",(0,a.jsx)("code",{children:"hierarchy"})," object that we described in the previous chapter."]}),(0,a.jsx)(o.d,{code:B}),(0,a.jsxs)("h3",{children:["→ ",(0,a.jsx)("code",{children:"d3.cluster()"})," output"]}),(0,a.jsxs)("p",{children:["The output is almost the same as the initial ",(0,a.jsx)("b",{children:"hierarchy"})," object. But for each node we have 2 additional properties: ",(0,a.jsx)("code",{children:"x"})," and"," ",(0,a.jsx)("code",{children:"y"})," that are the coordinates we need to build the dendrogram!"]}),(0,a.jsx)("h2",{id:"basic dendrogram",children:"Most Basic dendrogram"}),(0,a.jsxs)("p",{children:["We have a list of ",(0,a.jsx)("code",{children:"node"})," in the ",(0,a.jsx)("code",{children:"dendrogram"})," ","object. For each, we now its position."]}),(0,a.jsx)("p",{children:"We just need to loop through all those nodes to build circles and lines to make the dendrogram"}),(0,a.jsxs)("p",{children:["Fortunately, the dendrogram object has a ",(0,a.jsx)("code",{children:"descendants()"})," ","method that list all nodes in a flat array. It is then possible to use a"," ",(0,a.jsx)("code",{children:"map()"})," to loop through nodes. So for instance drawing edges looks like:"]}),(0,a.jsx)(o.d,{code:G}),(0,a.jsx)("p",{children:"And the same idea goes for nodes and circles. That makes our first dendrogram!"}),(0,a.jsx)(h.$,{vizName:"DendrogramBasic",VizComponent:m,maxWidth:800,height:400,caption:"The most basic treemap made with react and d3.js."}),(0,a.jsx)("h2",{id:"horizontal dendrogram",children:"Horizontal dendrogram"}),(0,a.jsxs)("p",{children:["You can ",(0,a.jsx)("b",{children:"swap"})," the ",(0,a.jsx)("code",{children:"x"})," and ",(0,a.jsx)("code",{children:"y"})," coordinates to make the dendrogram ",(0,a.jsx)("b",{children:"horizontal"})," instead of vertical."]}),(0,a.jsxs)("p",{children:["You can also create smooth edges thanks to the"," ",(0,a.jsx)("code",{children:"d3.linkHorizontal()"})," function. The function is described in its"," ",(0,a.jsx)("a",{href:"https://github.com/d3/d3-shape#linkHorizontal",children:"official documentation"}),". Basically, you need to provide an object with a ",(0,a.jsx)("code",{children:"source"})," ","and a ",(0,a.jsx)("code",{children:"target"})," property. The coordinates of those properties will be used to create the ",(0,a.jsx)("code",{children:"d"})," attribute of an svg"," ",(0,a.jsx)("code",{children:"path"})," element."]}),(0,a.jsx)(o.d,{code:H}),(0,a.jsx)(h.$,{vizName:"DendrogramHorizontal",VizComponent:y,maxWidth:600,height:400,caption:"Horizontal dendrogram with smooth edges made with react and d3.js."}),(0,a.jsx)("h2",{id:"Radial dendrogram",children:"Radial dendrogram"}),(0,a.jsx)("p",{children:"The radial dendrogram is a bit trickier to achieve."}),(0,a.jsx)("h3",{children:"→ polar coordinates"}),(0,a.jsxs)("p",{children:["We are dealing with polar coordinates here. As a result, the"," ",(0,a.jsx)("code",{children:"size"})," attribute of the",(0,a.jsx)("code",{children:"layout()"}),"function must be updated."]}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["The ",(0,a.jsx)("b",{children:"first"})," item is ",(0,a.jsx)("code",{children:"360"}),". It will define the angle (in degree) to follow to reach a node. 0 is on top."]}),(0,a.jsxs)("li",{children:["The second item is the ",(0,a.jsx)("code",{children:"radius"})," of the figure. It will provide the distance to the center of a node in pixel."]})]}),(0,a.jsx)(o.d,{code:O}),(0,a.jsxs)("p",{children:["Since ",(0,a.jsx)("code",{children:"x"})," and ",(0,a.jsx)("code",{children:"y"})," are now describing an angle and a distance to the center, we can position a node using the following"," ",(0,a.jsx)("code",{children:"transform"})," property:"]}),(0,a.jsx)(o.d,{code:C}),(0,a.jsxs)("h3",{children:["→ Smooth edges with ",(0,a.jsx)("code",{children:"linkRadial"})]}),(0,a.jsxs)("p",{children:["Edges are not horizontal anymore, so the ",(0,a.jsx)("code",{children:"linkHorizontal"})," ","won't be helpful this time. But instead, the"," ",(0,a.jsx)("a",{href:"https://github.com/d3/d3-shape#linkRadial",children:"d3.linkRadial"})," ","function does the job based on an angle and a distance."]}),(0,a.jsx)("h3",{children:"→ Smart labels"}),(0,a.jsxs)("p",{children:["Please make sure your labels are properly oriented. It always give a bit of a headhache to pivot them correctly, and to control the anchoring appropriately. I talked about it extensively in the"," ",(0,a.jsx)(z(),{href:"circular-barplot",children:"circular barplot"})," section so please take a look for this matter."]}),(0,a.jsx)(h.$,{vizName:"DendrogramRadial",VizComponent:w,maxWidth:600,height:600,caption:"A minimalist radial dendrogram built using d3 and react."}),(0,a.jsxs)("p",{children:[(0,a.jsx)("i",{children:"Note"}),": please check of the first level edges are"," ",(0,a.jsx)("b",{children:"straight lines"}),". IMO it does not make sense to use"," ",(0,a.jsx)("code",{children:"linkRadial"})," for the first level."]}),(0,a.jsx)("h2",{id:"next",children:"Coming next"}),(0,a.jsx)("p",{children:"There is much more that needs to be added to this tutorial."}),(0,a.jsxs)("p",{children:["Using ",(0,a.jsx)("code",{children:"canvas"})," for rendering is often a requirement when the number of nodes gets big. ",(0,a.jsx)("b",{children:"Interactivity"})," is often necessary, for"," ",(0,a.jsx)("b",{children:"hover effect"})," or to ",(0,a.jsx)("b",{children:"collapse"})," a part of the tree. It also possible to ",(0,a.jsx)("b",{children:"map"})," the node circle size to a numeric variable."]}),(0,a.jsxs)("p",{children:["This will come soon! I have a newsletter called the"," ",(0,a.jsx)("a",{href:"https://datavizuniverse.substack.com/",children:"dataviz universe"})," ","where I share my latest updates."]}),(0,a.jsx)(M.J,{href:"https://datavizuniverse.substack.com/",children:"Subscribe"}),(0,a.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3 mt-20"}),(0,a.jsx)(d.Z,{chartFamily:"partOfAWhole"}),(0,a.jsx)("div",{className:"mt-20"})]})}let E="\nconst data = {\n  type: 'node',\n  name: \"boss\",\n  value: 2300,\n  children: [\n    {type: 'leaf', name:\"Mark\", value: 90},\n    {type: 'leaf', name:\"Robert\", value: 12},\n    {type: 'leaf', name:\"Emily\", value: 34},\n    ...\n}\n".trim(),N="\nconst hierarchy = useMemo(() => {\n  return d3.hierarchy(data);\n}, [data]);\n".trim(),R='\nexport const dataTabular =\n  [\n    { "name": "Eve", "parent": "" },\n    { "name": "Cain", "parent": "Eve" },\n    { "name": "Seth", "parent": "Eve" },\n    ...\n  ]\n'.trim(),_="\nconst hierarchyGenerator = stratify()\n  .id((node) => node.name)\n  .parentId((node) => node.parent);\n\nconst hierarchy = hierarchyGenerator(dataTabular);\n".trim(),A="\nconst dataTabular = d3.csvParse(text);\n".trim(),S="\n// Create a dendogram generator = a function that compute the position of the nodes in a hierarchy\nconst dendrogramGenerator = d3\n  .cluster()\n  .size([width, height]);\n".trim(),B="\n// use the generator on our hierarchy\nconst dendrogramLayout = dendrogramGenerator(hierarchy);\n".trim(),G='\nconst allEdges = dendrogram.descendants().map((node) => {\n  if (!node.parent) {\n    return null;\n  }\n  return (\n    <line\n      key={"line" + node.id}\n      fill="none"\n      stroke="grey"\n      x1={node.x}\n      x2={node.parent.x}\n      y1={node.y}\n      y2={node.parent.y}\n    />\n  );\n});\n'.trim(),H='\n<path\n  key={node.id}\n  fill="none"\n  stroke="grey"\n  d={horizontalLinkGenerator({\n    source: [node.parent.y, node.parent.x],\n    target: [node.y, node.x],\n  })}\n/>\n'.trim(),O="\nconst dendrogramGenerator = d3\n  .cluster()\n  .size([360, radius]);\nconst dendrogram = dendrogramGenerator(hierarchy);\n".trim(),C='\ntransform={"rotate(" + (node.x - 90) + ")translate(" + node.y + ")"}\n'.trim()}},function(e){e.O(0,[3996,3890,5660,645,1188,9774,2888,179],function(){return e(e.s=4854)}),_N_E=e.O()}]);