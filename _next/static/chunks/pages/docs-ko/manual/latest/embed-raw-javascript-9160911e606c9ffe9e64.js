(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33565],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},20224:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(17375),r=n(96156),o=(n(67294),n(3905));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s,p=(s="CodeTab",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",i({},e))}),u={};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",i(i(i({},u),n),{},{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",i({},{id:"embed-raw-javascript"}),"Embed Raw JavaScript"),(0,o.kt)("h2",i({},{id:"paste-raw-js-code"}),"Paste Raw JS Code"),(0,o.kt)("p",null,"First thing first. If you're ever stuck learning ReScript, remember that you can always just paste raw JavaScript code into our source file:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'%%raw(`\n// look ma, regular JavaScript!\nvar message = "hello";\nfunction greet(m) {\n  console.log(m)\n}\n`)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'// look ma, regular JavaScript!\nvar message = "hello";\nfunction greet(m) {\n  console.log(m)\n}\n'))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"%%raw")," special ReScript call takes your code string and pastes it as-is into the output. ",(0,o.kt)("strong",{parentName:"p"},"You've now technically written your first ReScript file!")),(0,o.kt)("p",null,"(The back tick syntax is a multiline string, similar to JavaScript's. Except for us, no escaping is needed inside the string. More on string in a later section.)"),(0,o.kt)("p",null,"While ",(0,o.kt)("inlineCode",{parentName:"p"},"%%raw")," lets you embed top-level raw JS code, ",(0,o.kt)("inlineCode",{parentName:"p"},"%raw")," lets you embed expression-level JS code:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let add = %raw(`\n  function(a, b) {\n    console.log("hello from raw JavaScript!");\n    return a + b\n  }\n`)\n\nJs.log(add(1, 2))\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var add = function(a, b) {\n  console.log("hello from raw JavaScript!");\n  return a + b\n};\n\nconsole.log(add(1, 2));\n'))),(0,o.kt)("p",null,"The above code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"declared a ReScript variable ",(0,o.kt)("inlineCode",{parentName:"li"},"add"),","),(0,o.kt)("li",{parentName:"ul"},"with the raw JavaScript value of a function declaration,"),(0,o.kt)("li",{parentName:"ul"},"then called that function in ReScript.")),(0,o.kt)("p",null,"If your boss is ever worried that your teammates can't adopt ReScript, just let them keep writing JavaScript inside ReScript files =)."),(0,o.kt)("h2",i({},{id:"debugger"}),"Debugger"),(0,o.kt)("p",null,"You can also drop a ",(0,o.kt)("inlineCode",{parentName:"p"},"%debugger")," expression in a body:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let f = (x, y) => {\n  %debugger\n  x + y\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"function f(x, y) {\n  debugger;\n  return x + y | 0;\n}\n"))),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"function f(x, y) {\n  debugger; // JavaScript developer tools will set an breakpoint and stop here\n  x + y;\n}\n")),(0,o.kt)("h2",i({},{id:"tips--tricks"}),"Tips & Tricks"),(0,o.kt)("p",null,"Embedding raw JS snippets isn't the best way to experience ReScript, though it's also highly useful if you're just starting out. As a matter of fact, the first few ReScript projects were converted through:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pasting raw JS snippets inside a file"),(0,o.kt)("li",{parentName:"ul"},"examining the JS output (identical to the old hand-written JS)"),(0,o.kt)("li",{parentName:"ul"},"gradually extract a few values and functions and making sure the output still looks OK")),(0,o.kt)("p",null,"At the end, we get a fully safe, converted ReScript file whose JS output is clean enough that we can confidently assert that no new bug has been introduced during the conversion process."),(0,o.kt)("p",null,"We have a small guide on this iteration ",(0,o.kt)("a",i({parentName:"p"},{href:"converting-from-js.md"}),"here"),". Feel free to peruse it later."))}c.isMDXComponent=!0,c.frontmatter={title:"Embed Raw JavaScript",description:"Utility syntax to for raw JS usage in ReScript",canonical:"/docs/manual/latest/embed-raw-javascript",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-ko/manual/latest/embed-raw-javascript.mdx"}},80757:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-ko/manual/latest/embed-raw-javascript",function(){return n(20224)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=80757,e(e.s=t);var t}));var t=e.O();_N_E=t}]);