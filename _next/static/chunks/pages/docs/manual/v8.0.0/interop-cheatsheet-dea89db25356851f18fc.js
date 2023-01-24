(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43189],{17375:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}a.d(t,{Z:function(){return n}})},67995:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var n=a(17375),l=a(96156),r=(a(67294),a(3905));function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){(0,l.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var i,p=(i="CodeTab",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",s({},e))}),u={};function d(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",s(s(s({},u),a),{},{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"interop-cheatsheet"}),"Interop Cheatsheet"),(0,r.kt)("h2",s({},{id:"raw-js"}),"Raw JS"),(0,r.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-re"}),'let add = [%raw "(a, b) => a + b"];\n[%%raw "const a = 1"];\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-ml"}),'let add = [%raw "(a, b) => a + b"]\n[%%raw "const a = 1"]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js"}),"var add = ((a, b) => a + b);\nconst a = 1\n"))),(0,r.kt)("h2",s({},{id:"global-value"}),"Global Value"),(0,r.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-re"}),'[@bs.val] external setTimeout: (unit => unit, int) => float = "setTimeout";\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-ml"}),'external setTimeout: (unit -> unit) -> int -> float = "setTimeout" [@@bs.val]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,r.kt)("h2",s({},{id:"global-modules-value"}),"Global Module's Value"),(0,r.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-re"}),'[@bs.val] [@bs.scope "Math"]\nexternal random: unit => float = "random";\n\nlet someNumber = random();\n\n[@bs.val] [@bs.scope ("window", "location", "ancestorOrigins")]\nexternal length: int = "length";\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-ml"}),'external random: unit -> float = "random"\n[@@bs.val][@@bs.scope "Math"]\n\nlet someNumber = random ()\n\nexternal length: int = "length"\n[@@bs.val][@@bs.scope ("window", "location", "ancestorOrigins")]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js"}),"var someNumber = Math.random();\n"))),(0,r.kt)("h2",s({},{id:"nullable"}),"Nullable"),(0,r.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-re"}),"let a = Some(5); // compiles to 5\nlet b = None; // compiles to undefined\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-ml"}),"let a = Some 5 (* compiles to 5 *)\nlet b = None (* compiles to undefined *)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js"}),"var a = 5;\nvar b;\n"))),(0,r.kt)("p",null,"Handling a value that can be ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", by ditching the ",(0,r.kt)("inlineCode",{parentName:"p"},"option")," type and using ",(0,r.kt)("inlineCode",{parentName:"p"},"Js.Nullable.t"),":"),(0,r.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-re"}),'let jsNull = Js.Nullable.null;\nlet jsUndefined = Js.Nullable.undefined;\nlet result1: Js.Nullable.t(string) = Js.Nullable.return("hello");\nlet result2: Js.Nullable.t(int) = Js.Nullable.fromOption(Some(10));\nlet result3: option(int) = Js.Nullable.toOption(Js.Nullable.return(10));\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-ml"}),'let jsNull = Js.Nullable.null\nlet jsUndefined = Js.Nullable.undefined\nlet result1: string Js.Nullable.t = Js.Nullable.return "hello"\nlet result2: int Js.Nullable.t = Js.Nullable.fromOption (Some 10)\nlet result3: int option = Js.Nullable.toOption (Js.Nullable.return 10)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var Caml_option = require("./stdlib/caml_option.js");\nvar Js_null_undefined = require("./stdlib/js_null_undefined.js");\n\nvar jsNull = null;\nvar jsUndefined;\nvar result1 = "hello";\nvar result2 = Js_null_undefined.fromOption(10);\nvar result3 = Caml_option.nullable_to_opt(10);\n'))),(0,r.kt)("h2",s({},{id:"js-object"}),"JS Object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"bind-to-js-object#bind-to-record-like-js-objects"}),"Bind to a JS object as a ReScript record"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"bind-to-js-object#bind-to-hash-map-like-js-object"}),"Bind to a JS object that acts like a hash map"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"bind-to-js-object#bind-to-a-js-object-thats-a-class"}),"Bind to a JS object that's a class"),".")),(0,r.kt)("h2",s({},{id:"function"}),"Function"),(0,r.kt)("h3",s({},{id:"object-method--chaining"}),"Object Method & Chaining"),(0,r.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-re"}),"[@bs.send] external map: (array('a), 'a => 'b) => array('b) = \"map\";\n[@bs.send] external filter: (array('a), 'a => 'b) => array('b) = \"filter\";\n[|1, 2, 3|]\n  ->map(a => a + 1)\n  ->filter(a => a mod 2 == 0)\n  ->Js.log;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-ml"}),"external map: 'a array -> ('a -> 'b) -> 'b array = \"map\" [@@bs.send]\nexternal filter: 'a array -> ('a -> 'b) -> 'b array = \"filter\" [@@bs.send]\n[|1; 2; 3|]\n  |. map(fun a -> a + 1)\n  |. filter(fun a -> a mod 2 = 0)\n  |. Js.log\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js"}),"console.log(\n  [1, 2, 3]\n    .map(function (a) {\n      return (a + 1) | 0;\n    })\n    .filter(function (a) {\n      return a % 2 === 0;\n    })\n);\n"))),(0,r.kt)("h3",s({},{id:"variadic-arguments"}),"Variadic Arguments"),(0,r.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-re"}),'[@bs.module "path"] [@bs.variadic]\nexternal join: array(string) => string = "join";\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-ml"}),'external join: string array -> string = "join"\n[@@bs.module "path"][@@bs.variadic]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,r.kt)("h3",s({},{id:"polymorphic-function"}),"Polymorphic Function"),(0,r.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-re"}),'[@bs.module "Drawing"] external drawCat: unit => unit = "draw";\n[@bs.module "Drawing"] external drawDog: (~giveName: string) => unit = "draw";\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-ml"}),'external drawCat: unit -> unit = "draw" [@@bs.module "Drawing"]\nexternal drawDog: giveName:string -> unit = "draw" [@@bs.module "Drawing"]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,r.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-re"}),'[@bs.val]\nexternal padLeft: (\n  string,\n  [@bs.unwrap] [\n    | `Str(string)\n    | `Int(int)\n  ])\n  => string = "padLeft";\n\npadLeft("Hello World", `Int(4));\npadLeft("Hello World", `Str("Message from ReScript: "));\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-ml"}),'external padLeft:\n  string ->\n  (([\n    | `Str of string\n    | `Int of int\n  ]) [@bs.unwrap]) ->\n  string = "padLeft" [@@bs.val]\n\nlet _ = padLeft "Hello World" (`Int 4)\nlet _ = padLeft "Hello World" (`Str "Message from ReScript: ")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js"}),'padLeft("Hello World", 4);\npadLeft("Hello World", "Message from ReScript: ");\n'))),(0,r.kt)("h2",s({},{id:"js-module-interop"}),"JS Module Interop"),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"import-from-export-to-js.md"}),"See here")),(0,r.kt)("h2",s({},{id:"dangerous-type-cast"}),"Dangerous Type Cast"),(0,r.kt)("p",null,"Final escape hatch converter. Do not abuse."),(0,r.kt)(p,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-re"}),'external convertToFloat: int => float = "%identity";\nlet age = 10;\nlet gpa = 2.1 +. convertToFloat(age);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-ml"}),'external convertToFloat: int => float = "%identity"\nlet age = 10\nlet gpa = 2.1 +. (convertToFloat age)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js"}),"var age = 10;\nvar gpa = 2.1 + 10;\n"))),(0,r.kt)("h2",s({},{id:"list-of-bs-decorators"}),"List of ",(0,r.kt)("inlineCode",{parentName:"h2"},"@bs")," Decorators"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@bs.as")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@bs.get")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@bs.inline")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@bs.int")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@bs.meth")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@bs.new")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@bs.return")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@bs.scope")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@bs.send")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@bs.set")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@bs.string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@bs.this")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@bs.uncurry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@bs.unwrap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@bs.val")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@bs.variadic"))))}d.isMDXComponent=!0,d.frontmatter={title:"Interop Cheatsheet",description:"Cheatsheet for various interop scenarios in ReScript",canonical:"/docs/manual/latest/interop-cheatsheet",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v8.0.0/interop-cheatsheet.mdx"}},1935:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v8.0.0/interop-cheatsheet",function(){return a(67995)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=1935,e(e.s=t);var t}));var t=e.O();_N_E=t}]);