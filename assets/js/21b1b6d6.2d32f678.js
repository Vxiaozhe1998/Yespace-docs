(self.webpackChunkyespace_docs=self.webpackChunkyespace_docs||[]).push([[498],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},5224:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return g},default:function(){return y},frontMatter:function(){return N},metadata:function(){return f},toc:function(){return b}});var a=n(2122),r=n(9756),i=n(7294),o=n(3905),l=n(9443);var p=function(){var e=(0,i.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(6010),m="tabItem_1uMI",c="tabItemActive_2DSg";var d=37,u=39;var k=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,r=e.values,o=e.groupId,l=e.className,k=p(),v=k.tabGroupChoices,h=k.setTabGroupChoices,N=(0,i.useState)(a),g=N[0],f=N[1],b=i.Children.toArray(e.children),w=[];if(null!=o){var y=v[o];null!=y&&y!==g&&r.some((function(e){return e.value===y}))&&f(y)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),a=r[n].value;f(a),null!=o&&(h(o,a),setTimeout((function(){var e,n,a,r,i,o,l,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,p=o.innerWidth,n>=0&&i<=p&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case u:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case d:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},l)},r.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,s.Z)("tabs__item",m,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:x,onClick:x},n)}))),t?(0,i.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))};var v=function(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},h=["components"],N={id:"intro",title:"\u5f00\u59cb\u4f7f\u7528",sidebar_position:1},g=void 0,f={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"\u5f00\u59cb\u4f7f\u7528",description:"\u9879\u76ee\u80cc\u666f",source:"@site/user\\\u5f00\u59cb\u4f7f\u7528.mdx",sourceDirName:".",slug:"/intro",permalink:"/yespace-docs/user/intro",version:"current",sidebarPosition:1,frontMatter:{id:"intro",title:"\u5f00\u59cb\u4f7f\u7528",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u5173\u6ce8\u516c\u4f17\u53f7",permalink:"/yespace-docs/user/basic/followPublicAccount"}},b=[{value:"\u9879\u76ee\u80cc\u666f",id:"\u9879\u76ee\u80cc\u666f",children:[]},{value:"\u5173\u4e8e\u7528\u6237",id:"\u5173\u4e8e\u7528\u6237",children:[]},{value:"\u5173\u4e8e\u5546\u4e1a\u5408\u4f5c",id:"\u5173\u4e8e\u5546\u4e1a\u5408\u4f5c",children:[]}],w={toc:b};function y(e){var t=e.components,n=(0,r.Z)(e,h);return(0,o.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u9879\u76ee\u80cc\u666f"},"\u9879\u76ee\u80cc\u666f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u60a0\u60a6\u6613\u5b58")," \u96b6\u5c5e\u4e8e ",(0,o.kt)("strong",{parentName:"p"},"\u60a0\u60a6\u667a\u80fd\u7f51\u7edc\u79d1\u6280\uff08\u5357\u4eac\uff09\u6709\u9650\u516c\u53f8")," \uff0c\u8be5\u9879\u76ee\u7684\u4ea7\u751f\u662f\u4e3a\u4e86\u89e3\u51b3\u9ad8\u6821\u56fe\u4e66\u9986\u5b66\u751f\u7269\u54c1\u5b89\u5168\u4e0e\u56fe\u4e66\u9986\u7ba1\u7406\u7684\u51b2\u7a81\uff0c\u81ea\u4fee\u5b66\u751f\u5f80\u8fd4\u56fe\u4e66\u9986\u5bbf\u820d\u643a\u5e26\u56fe\u4e66\u8d1f\u62c5\u91cd\u4e0e\u56fe\u4e66\u9986\u516c\u5171\u670d\u52a1\u7684\u6027\u8d28\u7684\u51b2\u7a81\uff0c\u901a\u8fc7\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\uff0c\u80fd\u5f88\u597d\u7684\u8c03\u548c\u77db\u76fe\uff0c\u63d0\u9ad8\u56fe\u4e66\u9986\u7684\u670d\u52a1\u7ba1\u7406\u6c34\u5e73\uff0c\u51cf\u5c11\u7269\u54c1\u76d7\u7a83\u4e22\u5931\u7b49\u73b0\u8c61\u7684\u53d1\u751f\uff0c\u7ef4\u6301\u56fe\u4e66\u9986\u7684\u516c\u5171\u79e9\u5e8f\uff0c\u4f7f\u9986\u5185\u516c\u5171\u8d44\u6e90\u80fd\u591f\u5f97\u5230\u66f4\u5927\u9650\u5ea6\u7684\u5229\u7528\u3002"),(0,o.kt)("h2",{id:"\u5173\u4e8e\u7528\u6237"},"\u5173\u4e8e\u7528\u6237"),(0,o.kt)("p",null,"\u7528\u6237\u53ef\u901a\u8fc7\u70b9\u51fb\u4e0b\u65b9\u5361\u7247\u9605\u8bfb ",(0,o.kt)("strong",{parentName:"p"},"\u57fa\u7840\u4f7f\u7528")," \u4e0e ",(0,o.kt)("strong",{parentName:"p"},"\u8fdb\u9636\u4f7f\u7528")," \u6765\u4e86\u89e3\u5982\u4f55\u6b63\u786e\u5730\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\uff0c\u6211\u4eec\u672c\u7740 \u201d",(0,o.kt)("strong",{parentName:"p"},"\u4ee5\u4eba\u4e3a\u672c\u201d")," \u7684\u539f\u5219\uff0c\u5728\u4ea7\u54c1\u8bbe\u8ba1\u3001\u4ea7\u54c1\u8fd0\u8425\u7b49\u65b9\u9762\u6700\u5927\u7a0b\u5ea6\u5730\u4fdd\u8bc1\u7528\u6237\u7684\u4f7f\u7528\u4f53\u9a8c\u3002"),(0,o.kt)("p",null,"\u4ea7\u54c1\u67b6\u6784\u4e8e\u5fae\u4fe1\u5e73\u53f0\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u5728\u60a8\u5e38\u7528\u7684\u5fae\u4fe1\u4e2d\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u800c\u65e0\u9700\u4e0b\u8f7d\u5176\u4ed6 ",(0,o.kt)("strong",{parentName:"p"},"APP")," \uff0c\u4e3a\u4e86\u4fdd\u8bc1\u60a8\u7684\u4f53\u9a8c\u548c\u9690\u79c1\uff0c\u6211\u4eec\u4ec5\u83b7\u53d6\u60a8\u7684\u5fae\u4fe1\u6635\u79f0\u4e0e\u5fae\u4fe1\u5934\u50cf\uff0c\u60a8\u53ef\u4ee5\u81ea\u52a9\u51b3\u5b9a\u662f\u5426\u7ed1\u5b9a\u624b\u673a\uff0c\u66f4\u591a\u8be6\u60c5\u60a8\u53ef\u53c2\u8003 ",(0,o.kt)("strong",{parentName:"p"},"\u9690\u79c1\u653f\u7b56")," \u3002\u4e3a\u4e86\u4fdd\u8bc1\u53cc\u65b9\u5229\u76ca\uff0c\u60a8\u53ef\u53c2\u8003 ",(0,o.kt)("strong",{parentName:"p"},"\u5bc4\u5b58\u670d\u52a1\u534f\u8bae")," \u4e86\u89e3\u60a8\u7684\u6743\u76ca\u4e0e\u4e49\u52a1\u3002"),(0,o.kt)("p",null,"\u5f53\u60a8\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u9047\u5230\u95ee\u9898\u6216\u8005\u5bf9\u4e8e\u4ea7\u54c1\u6709\u4efb\u4f55\u5efa\u8bae\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("strong",{parentName:"p"},"\u8054\u7cfb\u65b9\u5f0f")," \u4e2d\u7684\u4fe1\u606f\u4e0e\u6211\u4eec\u53d6\u5f97\u8054\u7cfb\u3002"),(0,o.kt)("h2",{id:"\u5173\u4e8e\u5546\u4e1a\u5408\u4f5c"},"\u5173\u4e8e\u5546\u4e1a\u5408\u4f5c"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u6709\u610f\u5411\u4e0e\u6211\u4eec\u5408\u4f5c\uff0c\u60a8\u53ef\u901a\u8fc7\u70b9\u51fb\u4e0b\u65b9\u7684\u5361\u7247\u6765\u4e86\u89e3\u6211\u4eec\u7684\u5546\u4e1a\u6a21\u5f0f\u5e76\u4e0e\u6211\u4eec\u53d6\u5f97\u8054\u7cfb\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u8fdb\u884c\u5143\u7d20\u6d4b\u8bd5\uff1a"),(0,o.kt)("p",null,"\u8fd9\u662f ",(0,o.kt)("strong",{parentName:"p"},"\u52a0\u7c97")," \u5143\u7d20"),(0,o.kt)("p",null,"\u8fd9\u662f ",(0,o.kt)("del",{parentName:"p"},"\u5220\u9664\u5143\u7d20")),(0,o.kt)("p",null,"\u8fd9\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"\u952e\u5e3d")," \u5143\u7d20"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://vxiaozhe1998.cn"},"\u8fd9\u662f\u94fe\u63a5")),(0,o.kt)("p",null,"\u8fd9\u662f\u6587\u7ae0\u4e2d\u7684",(0,o.kt)("a",{parentName:"p",href:"https://vxiaozhe1998.cn"},"\u94fe\u63a5"),"\u6837\u5f0f\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u5927\u6bb5\u7684\u6587\u672c\uff0c\u5982\u679c\u94fe\u63a5\u91cd\u5408\uff0c\u53ef\u80fd\u4f1a\u975e\u5e38\u7cdf\u7cd5\uff0c\u63a5\u4e0b\u6765\u6211\u8981\u6d4b\u8bd5\u5f88\u591a\u6587\u672c\u7684\u60c5\u51b5\uff0c\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u662f\u51d1\u6570\u7684\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u662f\u51d1\u6570\u7684\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u662f\u51d1\u6570\u7684\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u662f\u51d1\u6570\u7684\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u662f\u51d1\u6570\u7684\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u662f\u51d1\u6570\u7684\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u662f\u51d1\u6570\u7684\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u662f\u51d1\u6570\u7684\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u662f\u51d1\u6570\u7684\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u662f\u51d1\u6570\u7684\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u662f\u51d1\u6570\u7684\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u662f\u51d1\u6570\u7684\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u662f\u51d1\u6570\u7684\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u662f\u51d1\u6570\u7684\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u662f\u51d1\u6570\u7684\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u662f\u51d1\u6570\u7684\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u662f\u51d1\u6570\u7684\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u662f\u51d1\u6570\u7684","\xa9","AT&T"),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u662f\u533a\u5757\u5f15\u7528\u7684\u6837\u5f0f"),(0,o.kt)("p",{parentName:"blockquote"},"\u533a\u5757\u91cc\u9762\u53ef\u80fd\u5b58\u5728"),(0,o.kt)("h1",{parentName:"blockquote",id:"\u6807\u9898\u4e00"},"\u6807\u9898\u4e00"),(0,o.kt)("h2",{parentName:"blockquote",id:"\u6807\u9898\u4e8c"},"\u6807\u9898\u4e8c"),(0,o.kt)("h3",{parentName:"blockquote",id:"\u6807\u9898\u4e09"},"\u6807\u9898\u4e09"),(0,o.kt)("h4",{parentName:"blockquote",id:"\u6807\u9898\u56db"},"\u6807\u9898\u56db"),(0,o.kt)("h5",{parentName:"blockquote",id:"\u6807\u9898\u4e94"},"\u6807\u9898\u4e94"),(0,o.kt)("h5",{parentName:"blockquote",id:"\u6807\u9898\u516d"},"\u6807\u9898\u516d"),(0,o.kt)("h6",{parentName:"blockquote",id:"\u6807\u9898\u4e03"},"\u6807\u9898\u4e03")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8fd9\u662f\u65e0\u5e8f\u5217\u8868\u7684\u6837\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"\u5217\u88682")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8fd9\u662f\u6709\u5e8f\u5217\u8868\u7684\u6837\u5f0f"),(0,o.kt)("li",{parentName:"ol"},"\u5217\u88682")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u659c\u4f53\u5b57")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"## \u4ee3\u7801\u5757\nimprot numpy as np\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://vxiaozhe1998.gitee.io/images/my.jpg",alt:"\u5934\u50cf"})),(0,o.kt)(k,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,o.kt)(v,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,o.kt)(v,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,o.kt)(v,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{3}","{3}":!0},"function HighlightSomeText(highlight) {\n  if (highlight) {\n    return '\u8fd9\u53e5\u88ab\u9ad8\u4eae\u4e86\uff01';\n  }\n\n  return '\u8fd9\u53e5\u6ca1\u6709';\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    var timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>\u73b0\u5728\u662f {date.toLocaleTimeString()}\u3002</h2>\n    </div>\n  );\n}\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"\u4e2d\u6587")),"."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),"."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8fd9",(0,o.kt)("strong",{parentName:"p"},"\u91cc\u6709"),"\u5f88\u591a",(0,o.kt)("em",{parentName:"p"},"\u5185\u5bb9"),"\u53ef\u4ee5\u5199\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"\u952e\u5e3d"),"\u4e2d ,\u4f60\u751a\u81f3\u53ef\u4ee5",(0,o.kt)("a",{parentName:"p",href:"https://vxiaozhe1998.cn"},"\u94fe\u63a5",(0,o.kt)("inlineCode",{parentName:"a"},"\u952e\u5e3d"))))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Use tabs in admonitions")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(k,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,o.kt)(v,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,o.kt)(v,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,o.kt)(v,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")))))}y.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);