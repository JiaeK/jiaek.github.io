(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77661],{17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return a}})},97861:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var a=t(17375),r=t(96156),l=(t(67294),t(3905));function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var c=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",i({},n))}},o=c("Intro"),m=c("CodeTab"),s={};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",i(i(i({},s),t),{},{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",i({},{id:"\u5143\u7d20--jsx"}),"\u5143\u7d20 & JSX"),(0,l.kt)(o,{mdxType:"Intro"},(0,l.kt)("p",null,"React \u5143\u7d20\u662f React \u5e94\u7528\u7684\u6700\u5c0f\u6784\u4ef6\u3002\u672c\u8282\u5c06\u8bf4\u660e\u5982\u4f55\u4f7f\u7528 ReScript \u7684 JSX \u8bed\u6cd5\u5728 React \u5e94\u7528\u4e2d\u64cd\u4f5c ",(0,l.kt)("inlineCode",{parentName:"p"},"React.element"),"\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a \u4ee5\u4e0b\u5185\u5bb9\u5047\u8bbe\u4f60\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"bsconfig.json")," \u62e5\u6709\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},'"reason": { "react-jsx": 3 }'),"\uff0c\u5426\u5219\u4f60\u7684 JSX \u5c06\u4e0d\u4f1a\u8f6c\u6362\u4e3a\u5b83\u7684 React \u7279\u5b9a\u5f62\u5f0f\u3002")),(0,l.kt)("h2",i({},{id:"\u5143\u7d20\u57fa\u7840"}),"\u5143\u7d20\u57fa\u7840"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u4ece\u521b\u5efa\u7b2c\u4e00\u4e2aReact\u5143\u7d20\u5f00\u59cb\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'let element = <h1> {React.string("Hello World")} </h1>\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"element")," \u7ed1\u5b9a\u548c\u8868\u8fbe\u5f0f ",(0,l.kt)("inlineCode",{parentName:"p"},'{React.string("Hello World")}')," \u90fd\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"React.element")," \u7c7b\u578b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"React.element")," \u662f React \u5e94\u7528\u4e2d\u8868\u793a React \u5143\u7d20\u7684\u57fa\u672c\u7c7b\u578b\u3002\u5143\u7d20\u63cf\u8ff0\u4e86\u4f60\u80fd\u5728\u5c4f\u5e55\u4e0a\u770b\u5230\u7684\u5185\u5bb9\u3002"),(0,l.kt)("p",null,"\u5f53\u4f60\u60f3\u521b\u5efa\u4e00\u4e2a\u51fd\u6570\u6765\u64cd\u4f5c\u53e6\u4e00\u4e2a React \u5143\u7d20\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"children")," \uff0c\u4f60\u53ef\u4ee5\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"children")," \u7684\u7c7b\u578b\u6807\u8bb0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"React.element")," \uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'let wrapChildren = (children: React.element) => {\n  <div>\n    <h1> {React.string("Overview")} </h1>\n    children\n  </div>\n}\n\nwrapChildren(<div> {React.string("Let\'s use React with ReScript")} </div>)\n')),(0,l.kt)("p",null,"\u7406\u89e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.element")," \u7684\u5b9a\u4e49\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u4e3a\u5b83\u5728 React API \u4e2d\u88ab\u5927\u91cf\u4f7f\u7528\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactDOM.render(element, ...)")," \u7b49\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cJSX \u4e0d\u4f1a\u81ea\u52a8\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," \u8f6c\u6362\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"React.element")," \uff08ReScript \u5f3a\u5236\u8981\u6c42\u663e\u5f0f\u7c7b\u578b\u8f6c\u6362\uff09\u3002\u4f8b\u5982\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"<div> Hello World </div>")," \u5c06\u4e0d\u4f1a\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362\uff08\u8fd9\u5b9e\u9645\u4e0a\u662f\u597d\u4e8b\uff0c\u56e0\u4e3a\u5b83\u5f88\u5bb9\u6613\u5f15\u53d1 bug \uff01\uff09\uff0c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.string")," \u51fd\u6570\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},'"Hello World"')," \u663e\u5f0f\u8f6c\u6362\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"React.element"),"\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u7684 React bindings \u62e5\u6709\u6240\u6709\u7684\u5fc5\u8981\u529f\u80fd\uff0c\u7528\u4e8e\u5c06\u6240\u6709\u76f8\u5173\u7684\u6570\u636e\u7c7b\u578b\u8868\u793a\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"React.element")," \u3002"),(0,l.kt)("h2",i({},{id:"\u4f7f\u7528-jsx-\u7ec4\u5408\u5143\u7d20"}),"\u4f7f\u7528 JSX \u7ec4\u5408\u5143\u7d20"),(0,l.kt)("p",null,"\u4f60\u80fd\u7528 JSX \u5c06\u5143\u7d20\u7ec4\u5408\u6210\u66f4\u590d\u6742\u7684\u7ed3\u6784\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'let greeting = React.string("Hello ")\nlet name = React.string("Stranger");\n\n\n// element is also of type React.element\nlet element = <div className="myElement"> greeting name </div>\n')),(0,l.kt)("p",null,"JSX \u80fd\u5c06\u4f60\u7684 React \u5e94\u7528\u8868\u793a\u4e3a\u4e00\u9897 React \u5143\u7d20\u6784\u6210\u7684\u6811\u3002"),(0,l.kt)("p",null,"\u5f53\u4f60\u4e0e\u73b0\u6709\u7684 ReactJS \u4ee3\u7801\u5e93\u8fdb\u884c\u5927\u91cf\u7684\u4e92\u64cd\u4f5c\u65f6\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u8bed\u6cd5\u9650\u5236\u800c\u4e0d\u80fd\u4f7f\u7528 JSX \u8bed\u6cd5\uff0c\u8bf7\u67e5\u770b",(0,l.kt)("a",i({parentName:"p"},{href:"#%E9%80%83%E7%94%9F%E9%80%9A%E9%81%93"}),"\u9003\u751f\u901a\u9053"),"\u3002"),(0,l.kt)("h2",i({},{id:"\u521b\u5efa\u5143\u7d20"}),"\u521b\u5efa\u5143\u7d20"),(0,l.kt)("h3",i({},{id:"\u4ece-string\uff0c-int\uff0c-float\uff0c-array-\u521b\u5efa\u5143\u7d20"}),"\u4ece ",(0,l.kt)("inlineCode",{parentName:"h3"},"string"),"\uff0c ",(0,l.kt)("inlineCode",{parentName:"h3"},"int"),"\uff0c ",(0,l.kt)("inlineCode",{parentName:"h3"},"float"),"\uff0c ",(0,l.kt)("inlineCode",{parentName:"h3"},"array")," \u521b\u5efa\u5143\u7d20"),(0,l.kt)("p",null,"\u9664\u4e86\u4f7f\u7528 JSX \u6765\u521b\u5efa React \u5143\u7d20\u6216 React \u7ec4\u4ef6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"React")," \u6a21\u5757\u8fd8\u63d0\u4f9b\u4e86\u5404\u79cd\u51fd\u6570\u6765\u4ece\u539f\u59cb\u6570\u636e\u7c7b\u578b\u521b\u5efa\u5143\u7d20\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'React.string("Hello") // new element representing "Hello"\n\nReact.int(1) // new element representing "1"\n\nReact.float(1.0) // new element representing "1.0"\n')),(0,l.kt)("p",null,"\u8fd8\u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.array")," \u6765\u5c06\u591a\u4e2a\u5143\u7d20\u8868\u793a\u4e3a\u5355\u4e2a\u5143\u7d20\uff08\u5bf9\u4e8e\u6e32\u67d3\u6570\u636e\u5217\u8868\u548c\u4f20\u9012\u5b50\u5143\u7d20\u5f88\u6709\u7528\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'let element = React.array([\n  React.string("element 1"),\n  React.string("element 2"),\n  React.string("element 3")\n])\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a \u6211\u4eec\u4e0d\u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"p"},"React.list")," \u51fd\u6570\uff0c\u56e0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," \u503c\u4f1a\u589e\u52a0\u8fd0\u884c\u65f6\u5f00\u9500\u3002 ReScript \u5173\u6ce8\u5e72\u51c0\u3001\u7b26\u5408\u4e60\u60ef\u7684 JS \u8f93\u51fa\u3002\u5982\u679c\u4f60\u60f3\u628a\u4e00\u4e2a\u5143\u7d20 ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," \u8f6c\u6362\u6210\u5355\u4e2a React \u5143\u7d20\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Belt.List.toArray")," \u8f6c\u6362\u4e3a\u6570\u7ec4\u540e\u518d\u8f6c\u6362\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"React.array"),"\u3002"),(0,l.kt)("h3",i({},{id:"\u521b\u5efa-null-\u5143\u7d20"}),"\u521b\u5efa Null \u5143\u7d20"),(0,l.kt)("p",null,"\u7531\u4e8e ReScript \u7684\u5f3a\u7c7b\u578b\u7279\u6027\uff0c\u4e0d\u5141\u8bb8 ",(0,l.kt)("inlineCode",{parentName:"p"},"element || null")," \u8fd9\u6837\u7684\u7ea6\u675f\u3002\u5f53\u4f60\u8981\u6839\u636e\u503c\u6765\u63a7\u5236\u5143\u7d20\u7684\u6e32\u67d3\u65f6\uff0c\u4f60\u9700\u8981 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.null")," \u5e38\u91cf\u6765\u8868\u793a ",(0,l.kt)("em",{parentName:"p"},"Null")),(0,l.kt)(m,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'let name = Some("Andrea")\n\nlet element = switch name {\n  | Some(name) => <div> {React.string("Hello " ++ name)} </div>\n  | None => React.null\n}\n\n<div> element </div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var name = "Andrea";\n\nvar element = name !== undefined ? React.createElement("div", undefined, "Hello " + name) : null;\n\nReact.createElement("div", undefined, element);\n'))),(0,l.kt)("h2",i({},{id:"\u9003\u751f\u901a\u9053"}),"\u9003\u751f\u901a\u9053"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a \u672c\u7ae0\u8282\u4ecb\u7ecd\u4e86 JSX \u4f7f\u7528\u7684\u5e95\u5c42 API \uff0c\u53ea\u6709\u5728\u9047\u5230 JSX \u8bed\u6cd5\u9650\u5236\u65f6\u624d\u5e94\u4f7f\u7528\u3002\u5173\u4e8e JSX \u5185\u90e8\u5b9e\u73b0\u7684\u66f4\u591a\u4fe1\u606f\u53ef\u53c2\u8003",(0,l.kt)("a",i({parentName:"p"},{href:"./beyond-jsx"}),"\u8d85\u8d8a JSX"),"\u3002"),(0,l.kt)("h3",i({},{id:"\u7528\u7ec4\u4ef6\u51fd\u6570\u521b\u5efa\u5143\u7d20"}),"\u7528\u7ec4\u4ef6\u51fd\u6570\u521b\u5efa\u5143\u7d20"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u7ec4\u4ef6\u548c props \u7684\u7ec6\u8282\u4f1a\u5728",(0,l.kt)("a",i({parentName:"p"},{href:"./components-and-props"}),"\u4e0b\u4e00\u7ae0"),"\u8bf4\u660e\u3002"),(0,l.kt)("p",null,"\u6709\u65f6\u5019\u9700\u8981\u4f20\u9012\u7ec4\u4ef6\u51fd\u6570\u6765\u66f4\u597d\u5730\u63a7\u5236 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.element")," \u7684\u521b\u5efa\u3002\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.createElement")," \u51fd\u6570\u6765\u5b9e\u4f8b\u5316\u4f60\u7684\u5143\u7d20\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'type props = {"name": string};\n\nlet render = (myComp: props => React.element) => {\n  <div>\n    {React.createElement(myComp, {"name": "Franz"})}\n  </div>\n}\n')),(0,l.kt)("p",null,"\u901a\u5e38\u5728\u4e0e\u73b0\u6709\u7684 JS/ReactJS \u4ee3\u7801\u4ea4\u4e92\u65f6\u4f7f\u7528\u8fd9\u4e2a\u7279\u6027\u3002\u5728\u7eaf ReScript React \u5e94\u7528\u4e2d\uff0c\u4f60\u4f1a\u4f20\u9012\u4e00\u4e2a\u6e32\u67d3\u51fd\u6570\uff08\u4e5f\u53eb \u201crender prop\u201d\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'let render = (renderMyComp: (~name: string) => React.element) => {\n  <div> {renderMyComp(~name="Franz")} </div>\n}\n')),(0,l.kt)("h4",i({},{id:"\u4f20\u9012\u4efb\u610f\u591a\u4e2a\u5b50\u5143\u7d20"}),"\u4f20\u9012\u4efb\u610f\u591a\u4e2a\u5b50\u5143\u7d20"),(0,l.kt)("p",null,"\u8fd8\u6709\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"React.createElementVariadic")," \u51fd\u6570\uff0c\u5b83\u63a5\u53d7\u4e00\u4e2a\u5b50\u5143\u7d20\u6570\u7ec4\u4f5c\u4e3a\u7b2c\u4e09\u4e2a\u53c2\u6570\uff1a"),(0,l.kt)(m,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'type props = {"title": string, "children": React.element};\n\nlet render = (article: props => React.element) => {\n  let children = [React.string("Introduction"), React.string("Body")];\n\n  let props = {"title": "Article #1", "children": React.null};\n\n  {React.createElementVariadic(article, props, children)}\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-js"}),'function render(article) {\n  var children = ["Introduction"];\n  var props = {\n    title: "Article #1",\n    children: null\n  };\n  return Caml_splice_call.spliceApply(React.createElement, [\n              article,\n              props,\n              children\n            ]);\n}\n'))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a \u8fd9\u91cc\u6211\u4eec\u4f20\u9012\u4e86\u4e00\u4e2a prop ",(0,l.kt)("inlineCode",{parentName:"p"},'"children": React.null')," \u6765\u6ee1\u8db3\u7c7b\u578b\u68c0\u67e5\u3002 React \u4f1a\u5ffd\u7565 children prop \u800c\u4f1a\u4f7f\u7528 children \u6570\u7ec4\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u4e3b\u8981\u88ab JSX \u8f6c\u6362\u4f7f\u7528\uff0c\u901a\u5e38\u4f60\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.createElement")," \u5e76\u4f20\u9012\u4e00\u4e2a children prop\u3002"),(0,l.kt)("h3",i({},{id:"\u521b\u5efadom\u5143\u7d20"}),"\u521b\u5efaDOM\u5143\u7d20"),(0,l.kt)("p",null,"\u8981\u521b\u5efa DOM \u5143\u7d20\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"<div>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<span>")," \u7b49\uff09\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactDOMRe.createDOMElementVariadic")," \uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'ReactDOMRe.createDOMElementVariadic("div", ~props=ReactDOM.domProps(~className="card", ()), []);\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u51fd\u6570\u9700\u8981 ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactDOM.domProps")," \u6784\u9020\u51fd\u6570\uff0c\u8fd9\u6837 ReScript \u53ef\u4ee5\u786e\u4fdd\u6211\u4eec\u53ea\u4f20\u9012\u6709\u6548\u7684 DOM props\u3002\u4f60\u53ef\u4ee5\u5728 ",(0,l.kt)("a",i({parentName:"p"},{href:"https://github.com/reasonml/reason-react/blob/master/src/ReactDOM.re#L61"}),"ReactDOM")," \u6a21\u5757\u4e2d\u627e\u5230\u6240\u6709\u53ef\u7528\u7684 props\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8b66\u544a\uff1a")," ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactDOMRe")," \u6a21\u5757\u4f1a\u5728\u4e0b\u4e2a\u4e3b\u8981\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"rescript-react")," \u7248\u672c\u4e2d\u88ab\u79fb\u9664\uff0c\u6240\u4ee5\u5c3d\u91cf\u5c11\u7528\uff01"),(0,l.kt)("h3",i({},{id:"\u590d\u5236\u5143\u7d20"}),"\u590d\u5236\u5143\u7d20"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a \u8fd9\u662f\u4e00\u4e2a\u9003\u751f\u901a\u9053\u7279\u6027\uff0c\u53ea\u6709\u5728\u4e0e\u73b0\u6709\u7684 JS \u4ee3\u7801/\u5e93\u8fdb\u884c\u4ea4\u4e92\u65f6\u624d\u6709\u7528\u3002"),(0,l.kt)("p",null,"\u6709\u65f6\u9700\u8981\u590d\u5236\u4e00\u4e2a\u73b0\u6709\u5143\u7d20\uff0c\u5e76\u5bf9\u65b0\u5b9e\u4f8b\u8bbe\u7f6e\u3001\u8986\u5199\u6216\u6dfb\u52a0 props\uff0c\u6216\u8005\u4f60\u60f3\u8981\u8bbe\u7f6e\u65e0\u6548\u7684 prop \u540d\u79f0\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"data-name")," \u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"React.cloneElement")," \uff1a"),(0,l.kt)(m,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-res"}),'let original = <div className="hello"/>\n\n// Will return a new React.element with className set to "world"\nReact.cloneElement(original, {"className": "world", "data-name": "some name"});\n')),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var original = React.createElement("div", {\n      className: "hello"\n    });\n\nReact.cloneElement(original, {\n      className: "world",\n      "data-name": "some name"\n    });\n'))),(0,l.kt)("p",null,"\u4e0a\u9762\u63d0\u5230\u7684\u7279\u6027\u4e5f\u53ef\u4ee5\u6a21\u4eff ",(0,l.kt)("inlineCode",{parentName:"p"},"props \u4f20\u64ad"),"\uff0c\u4e00\u4e2a\u5728 ReactJS \u4ee3\u7801\u5e93\u4e2d\u5e38\u89c1\u7684\u7528\u6cd5\uff0c\u4f46\u7531\u4e8e\u5b83\u7684\u4e0d\u5b89\u5168\u6027\u548c\u4e0d\u6b63\u786e\u6027\uff0c\u6211\u4eec\u975e\u5e38\u4e0d\u63a8\u8350\u4f60\u8fd9\u6837\u505a\uff08\u4f8b\u5982\uff0c\u7ed9\u7ec4\u4ef6\u6dfb\u52a0\u672a\u5b9a\u4e49\u7684\u989d\u5916 props \u662f\u6ca1\u6709\u610f\u4e49\u7684\uff0c\u5e76\u4f1a\u5bfc\u81f4\u96be\u4ee5\u53d1\u73b0\u7684 bug \uff09\u3002"),(0,l.kt)("p",null,"\u5728 ReScript \u4e2d\uff0c\u6211\u4eec\u4f1a\u5c06\u9700\u8981\u7684 props \u663e\u5f0f\u4f20\u9012\u7ed9\u53f6\u5b50\u7ec4\u4ef6\uff0c\u6216\u8005\u4f7f\u7528 renderProp \u3002\u6211\u4eec\u5f15\u5165\u4e86",(0,l.kt)("a",i({parentName:"p"},{href:"/docs/manual/latest/jsx#punning"}),"JSX \u53cc\u5173"),"\u8bed\u6cd5\u6765\u66f4\u4fbf\u6377\u5730\u4f20\u9012 props\u3002"))}d.isMDXComponent=!0,d.frontmatter={title:"\u5143\u7d20 & JSX",description:"React \u5143\u7d20\u7684\u57fa\u672c\u6982\u5ff5\u4ee5\u53ca\u5728 JSX \u4e2d\u4f7f\u7528 React \u5143\u7d20",canonical:"/docs/react/latest/elements-and-jsx",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-ko/react/latest/elements-and-jsx.mdx"}},72385:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-ko/react/latest/elements-and-jsx",function(){return t(97861)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=72385,e(e.s=n);var n}));var n=e.O();_N_E=n}]);