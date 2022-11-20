(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1406],{5924:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/viz-from-the-future",function(){return r(2931)}])},3485:function(e,t,r){"use strict";r.d(t,{U:function(){return o}});var n=r(5893),i=r(7294),o=function(e){var t=e.startOpen,r=e.title,o=e.children,s=e.toc,l=(0,i.useState)(t),a=l[0],c=l[1],u=a?"max-h-full":"max-h-0",d=a?"overflow-visible":"overflow-hidden";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return c(!a)},id:s,children:[a?(0,n.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,n.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),r]}),(0,n.jsx)("div",{className:"transition-max-height ease-in duration-300  "+u+" "+d,children:o})]})}},7197:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(5893),i=(r(7294),r(6761)),o=r(1878),s=r(1664),l=o.c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function a(e){var t=e.chartLogo,r=e.caption,o=e.link,a=e.isAvailable,u=e.size,d=l.includes(t),h=a?"opacity-100":"opacity-20",f=a?"cursor-pointer":"cursor-not-allowed";return(0,n.jsx)(s.default,{href:a?o:"subscribe",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsxs)("div",{style:{width:u,height:u},className:"relative mr-2 rounded-full "+h+" "+f,children:[(0,n.jsx)("div",{className:"absolute",children:(0,n.jsx)(i.Z,{chartLogo:t})}),d?(0,n.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,n.jsx)(c,{size:u})}):(0,n.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full z-30",children:(0,n.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,n.jsx)("p",{className:"font-light text-sm text-gray-600 "+h,children:r})]})})}var c=function(e){var t=e.size;return(0,n.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,n.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},u=r(3414),d={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function h(e){var t=e.chartFamily,r=o.c.filter((function(e){return e.family===t})).map((function(e,t){var r=(0,u.y)(e.reactURL);return(0,n.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,n.jsx)(a,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)}));return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===d||void 0===d?void 0:d[t]}),(0,n.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},33:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var n=r(5893),i=r(7294),o=r(217),s=r(4893),l=r(5380),a=r(7975),c=function(e){var t=e.VizComponent,r=e.vizName,c=e.height,u=void 0===c?400:c,d=e.maxWidth,h=void 0===d?800:d,f=e.caption,x=(0,i.useState)(!1),p=x[0],v=x[1],m=(0,i.useRef)(null),w=(0,o.B)(m);return(0,n.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:p?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,n.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,n.jsx)(a.X,{vizName:r})}),(0,n.jsx)("div",{className:"flex justify-center mt-2",children:(0,n.jsx)(s.z,{size:"sm",onClick:function(){return v(!p)},children:"Hide Sandbox"})})]}):(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,n.jsx)("div",{className:"bg-gray-50 w-screen flex justify-center",children:(0,n.jsx)("div",{style:{height:u,width:"100%",maxWidth:h},ref:m,children:(0,n.jsx)(t,{height:u,width:w.width})})}),(0,n.jsx)(l.Y,{children:f}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(s.z,{size:"sm",onClick:function(){return v(!p)},children:"Show code"})})]})})}},7975:function(e,t,r){"use strict";r.d(t,{X:function(){return i}});var n=r(5893),i=(r(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,n.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},1884:function(e,t,r){"use strict";r.d(t,{A:function(){return h}});var n=r(5893),i=r(3185),o=r(1261),s=r(7294),l=r(3924),a=r.n(l);function c(){var e=(0,s.useState)([]),t=e[0],r=e[1],i=(0,s.useState)(0),o=i[0],l=i[1];return(0,s.useEffect)((function(){var e=Array.from(document.querySelectorAll("h2"));r(e)}),[]),(0,s.useEffect)((function(){var e=function(){var e=t.map((function(e){return e.offsetTop-e.scrollTop+e.clientTop})),r=window.scrollY+150,n=e.reduce((function(e,t){return Math.abs(t-r)<Math.abs(e-r)?t:e}),0),i=e.findIndex((function(e){return e===n}));l(-1===i?0:i)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[t]),(0,n.jsx)("div",{className:a().tableOfContent,children:t.map((function(e,r){return(0,n.jsx)("p",{className:o===r?"".concat(a().tocItem," ").concat(a().tocItemActive):a().tocItem,onClick:function(e){e.preventDefault(),t[r].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:e.id.charAt(0).toUpperCase()+e.id.slice(1)},e.id)}))})}var u=r(8171),d=r(6978),h=function(e){var t=e.children,r=e.title,s=e.seoDescription;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.A,{title:r,seoDescription:s}),(0,n.jsxs)("div",{className:"wrapper",children:[(0,n.jsx)(i.Z,{}),t]}),(0,n.jsx)(d.Z,{}),(0,n.jsx)("div",{className:"wrapper",children:(0,n.jsx)(o.Z,{})}),(0,n.jsx)(c,{})]})}},1687:function(e,t,r){"use strict";r.d(t,{J:function(){return o}});var n=r(5893),i=r(1664),o=function(e){var t=e.children,r=e.href,o=e.isFilled,s=e.size,l=void 0===s?"md":s,a=e.isFaded,c=r.startsWith("www")||r.startsWith("http"),u="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";u+=o?" bg-reactGallery hover:bg-reactGallery text-white ":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===l&&(u+="text-sm py-1 px-2 "),"md"===l&&(u+="text-md py-2 px-4 "),a&&(u+="opacity-60");var d=(0,n.jsx)("span",{className:u,children:t});return c?(0,n.jsx)("a",{href:r,children:d}):(0,n.jsx)(i.default,{href:r,passHref:!0,children:(0,n.jsx)("a",{children:d})})}},8807:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(5893),i=(r(7294),r(1878)),o=r(3414),s=r(3919),l=r(1687),a=r(3187),c=r.n(a),u=function(e){var t=e.direction,r=e.text,i=e.children;return(0,n.jsx)("span",{className:c().tooltip+" "+c()[t],id:r,children:i})};function d(e){var t=e.title,r=e.description,a=e.chartType,c=e.showSectionLink,d=void 0!==c&&c,h=e.showInspirationLink,f=void 0===h||h,x=e.showD3GalleryLink,p=void 0===x||x,v=i.c.filter((function(e){return e.id===a}))[0];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,n.jsx)("h1",{children:t}),(0,n.jsx)(s.r,{}),(0,n.jsx)("div",{className:"max-w-xxl py-2",children:(0,n.jsx)("p",{children:r})}),a&&(0,n.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),a&&(0,n.jsxs)("div",{className:"flex flex-row flex-wrap",children:[d&&(0,n.jsx)(u,{text:"kkkk",direction:"bottom",children:(0,n.jsx)(l.J,{href:(0,o.y)(v.reactURL),size:"sm",children:v.label+" section"})}),f&&(0,n.jsx)(u,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,n.jsx)(l.J,{href:"https://www.dataviz-inspiration.com/"+v.id,size:"sm",children:"inspiration"})}),p&&(0,n.jsx)(u,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,n.jsx)(l.J,{href:v.d3URL,size:"sm",children:"d3 gallery"})}),(0,n.jsx)(u,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,n.jsx)(l.J,{href:v.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})})}},4893:function(e,t,r){"use strict";r.d(t,{z:function(){return i}});var n=r(5893),i=function(e){var t=e.children,r=e.onClick,i=e.isFilled,o=e.size,s=void 0===o?"md":o,l="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===s&&(l+="text-sm py-1 px-2"),"md"===s&&(l+="text-md py-2 px-4"),l+=i?" bg-reactGallery hover:bg-reactGallery text-white":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,n.jsx)("button",{className:l,onClick:r,children:t})}},5380:function(e,t,r){"use strict";r.d(t,{Y:function(){return i}});var n=r(5893),i=function(e){var t=e.children;return(0,n.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},217:function(e,t,r){"use strict";r.d(t,{B:function(){return i}});var n=r(7294),i=function(e){var t=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},r=(0,n.useState)(t),i=r[0],o=r[1],s=function(){o(t())};return(0,n.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),(0,n.useLayoutEffect)((function(){s()}),[]),i}},8418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(a){i=!0,o=a}finally{try{n||null==l.return||l.return()}finally{if(i)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var i,o=(i=r(7294))&&i.__esModule?i:{default:i},s=r(6273),l=r(387),a=r(7190);var c={};function u(e,t,r,n){if(e&&s.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(i?"%"+i:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,i=l.useRouter(),d=o.default.useMemo((function(){var t=n(s.resolveHref(i,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?s.resolveHref(i,e.as):o||r}}),[i,e.href,e.as]),h=d.href,f=d.as,x=e.children,p=e.replace,v=e.shallow,m=e.scroll,w=e.locale;"string"===typeof x&&(x=o.default.createElement("a",null,x));var j=(t=o.default.Children.only(x))&&"object"===typeof t&&t.ref,g=n(a.useIntersection({rootMargin:"200px"}),2),y=g[0],b=g[1],_=o.default.useCallback((function(e){y(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,y]);o.default.useEffect((function(){var e=b&&r&&s.isLocalURL(h),t="undefined"!==typeof w?w:i&&i.locale,n=c[h+"%"+f+(t?"%"+t:"")];e&&!n&&u(i,h,f,{locale:t})}),[f,h,b,w,r,i]);var N={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,o,l,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[i?"replace":"push"](r,n,{shallow:o,locale:a,scroll:l}))}(e,i,h,f,p,v,m,w)},onMouseEnter:function(e){s.isLocalURL(h)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(i,h,f,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof w?w:i&&i.locale,k=i&&i.isLocaleDomain&&s.getDomainLocale(f,C,i&&i.locales,i&&i.domainLocales);N.href=k||s.addBasePath(s.addLocale(f,C,i&&i.defaultLocale))}return o.default.cloneElement(t,N)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(a){i=!0,o=a}finally{try{n||null==l.return||l.return()}finally{if(i)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!s,a=i.useRef(),c=n(i.useState(!1),2),u=c[0],d=c[1],h=i.useCallback((function(e){a.current&&(a.current(),a.current=void 0),r||u||e&&e.tagName&&(a.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:i,elements:n}),r}(r),i=n.id,o=n.observer,s=n.elements;return s.set(e,t),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),l.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,u]);return i.useEffect((function(){if(!s&&!u){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[h,u]};var i=r(7294),o=r(9311),s="undefined"!==typeof IntersectionObserver;var l=new Map},2931:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(5893),i=(r(7294),r(1884)),o=r(8807),s=r(6978),l=r(33),a=r(7197),c=r(3485),u=r(7639),d=r.n(u),h=function(e){var t=e.width,r=e.height;return(0,n.jsxs)("div",{style:{width:t,height:r},className:d().container,children:[(0,n.jsx)("div",{className:d().glowCircleInner}),(0,n.jsx)("div",{className:d().glowCircleOuter}),(0,n.jsx)("div",{className:d().glowCircleBoth})]})},f=function(e){var t=e.width,r=void 0===t?900:t,i=e.height,o=void 0===i?400:i;return(0,n.jsx)(h,{width:r,height:o})},x=r(8179),p=r.n(x),v=function(e){var t=e.width,r=e.height;return(0,n.jsxs)("svg",{style:{width:t,height:r},className:p().container,children:[(0,n.jsx)("circle",{className:p().glowCircleInner,cx:t/4,cy:r/2,r:80}),(0,n.jsx)("circle",{className:p().glowCircleOuter,cx:t/2,cy:r/2,r:80}),(0,n.jsx)("circle",{className:p().glowCircleBoth,cx:3*t/4,cy:r/2,r:80})]})},m=function(e){var t=e.width,r=void 0===t?900:t,i=e.height,o=void 0===i?400:i;return(0,n.jsx)(v,{width:r,height:o})},w=(0,n.jsx)("p",{children:"Building a viz from the future?"});"\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n\n}\n".trim();function j(){return(0,n.jsxs)(i.A,{title:"How to build a responsive chart with React and d3.js",seoDescription:"How to build a responsive chart with React and d3.js",children:[(0,n.jsx)(o.Z,{title:"A viz from the future",description:w}),(0,n.jsxs)(c.U,{title:"What is a viz from the future?",startOpen:!0,children:[(0,n.jsx)("p",{children:"You know minority report?"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("a",{href:"https://www.behance.net/gallery/92170213/FUI-HUD-Screens",children:"This video"})," ","is what I mean"]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Dark mode"}),(0,n.jsx)("li",{children:"Flashy, Neon color"}),(0,n.jsx)("li",{children:"Glowing shapes"}),(0,n.jsx)("li",{children:"Gradient"}),(0,n.jsx)("li",{children:"Animation"})]})]}),(0,n.jsxs)(c.U,{title:"Glowing div with box-shadow",startOpen:!0,children:[(0,n.jsxs)("p",{children:["Can be done with overlapping ",(0,n.jsx)("code",{children:"box-shadow"}),"."]}),(0,n.jsxs)("p",{children:["Official doc is"," ",(0,n.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow",children:"here"})]}),(0,n.jsx)("p",{children:"A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color."}),(0,n.jsxs)("p",{children:["With ",(0,n.jsx)("code",{children:"inset"}),", I can put the shadow inside of the shape"]}),(0,n.jsx)("p",{children:"shadows are drawn one of top of each other."}),(0,n.jsx)(l.$,{vizName:"FuturisticColor",VizComponent:f,maxWidth:900,height:400}),(0,n.jsxs)("p",{children:["But there is an issue: ",(0,n.jsx)("code",{children:"box-shadow"})," does not exist for svg."]})]}),(0,n.jsxs)(c.U,{title:"Glowing svg with ...",startOpen:!0,children:[(0,n.jsx)("p",{children:"How can I do."}),(0,n.jsx)("p",{children:"Two main ways: svg filter and css filter"}),(0,n.jsx)("p",{children:"css filter is easy, it works like box-shadows that is described above"}),(0,n.jsx)("p",{children:"BUT, it does not work with inset, so we need another solution for inside shadow."}),(0,n.jsx)(l.$,{vizName:"FuturisticColorSvg",VizComponent:m,maxWidth:900,height:400}),(0,n.jsx)("p",{children:"But there is an issue: how to do for canvas"})]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("hr",{className:"full-bleed bord er bg-gray-200 mb-3 mt-10"}),(0,n.jsx)(a.Z,{chartFamily:"general"}),(0,n.jsx)("div",{className:"mt-20"}),(0,n.jsx)(s.Z,{})]})}},3187:function(e){e.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3924:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}},7639:function(e){e.exports={container:"shapes_container__kWKGI",glowCircleInner:"shapes_glowCircleInner__oYtSR",glowCircleOuter:"shapes_glowCircleOuter__ce_1b",glowCircleBoth:"shapes_glowCircleBoth__R81Ko"}},8179:function(e){e.exports={container:"shapes_container__lX5LB",glowCircleOuter:"shapes_glowCircleOuter__qXuxv",glowCircleBoth:"shapes_glowCircleBoth__xT_UZ"}},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[358,9774,2888,179],(function(){return t=5924,e(e.s=t);var t}));var t=e.O();_N_E=t}]);