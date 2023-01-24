(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52788],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},10460:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(96156),r=n(17375),o=(n(67294),n(3905));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",s(s(s({},l),n),{},{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",s({},{id:"handling-js-naming-collisions"}),"Handling JS Naming Collisions"),(0,o.kt)("p",null,"JavaScript has different naming conventions and has only very few limitations when it comes to naming variables, classes, functions, JS object attributes etc."),(0,o.kt)("p",null,"Reason on the contrary has more restrictive naming rules which need to be considered whenever you define  a type, function, value, module, record attribute or similar. Here are a few typical naming restrictions which cause trouble with JS: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Every name needs to start with a lowercase letter (uppercase is reserved for module names)"),(0,o.kt)("li",{parentName:"ul"},"For the same reason, names can't be all caps  (very common for JS constants: ",(0,o.kt)("inlineCode",{parentName:"li"},'const MY_CONSTANT = "my_constant"'),")"),(0,o.kt)("li",{parentName:"ul"},"It's not possible to use ",(0,o.kt)("a",s({parentName:"li"},{href:"/docs/manual/latest/reserved-keywords"}),"reserved keywords")," for names"),(0,o.kt)("li",{parentName:"ul"},"Labeled arguments (for defining JSX attributes) can't be named after keywords and can't start with an uppercase letter"),(0,o.kt)("li",{parentName:"ul"},"etc.")),(0,o.kt)("p",null,"Of course, when doing interop, we still want to be able to map to the JS equivalent (preferably without any runtime overhead). In this section we describe some common scenarios on how to gracefully handle naming collisions."),(0,o.kt)("h2",s({},{id:"using-reserved-keywords-as-jsx-props"}),"Using reserved keywords as JSX props"),(0,o.kt)("p",null,"Many React components have a prop named ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," in JavaScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'/* this won\'t work in Reason since `type` is a reserved keyword! */\n<Component type="title" />\n')),(0,o.kt)("p",null,"If you're using a React component with a reserved keyword as a prop name, then simply prepend a underscore (so that it's a valid Reason name):"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-reason"}),'/* This works because `_type` is not a reserved keyword */\n<Component _type="title" />\n')),(0,o.kt)("p",null,"The Reason compiler will remove the leading underscore when outputting JavaScript (so the JavaScript will have ",(0,o.kt)("inlineCode",{parentName:"p"},'<Component type="POST" />'),")."),(0,o.kt)("p",null,"The removal of the ",(0,o.kt)("inlineCode",{parentName:"p"},"_"),' is called "Name mangling". The ruleset for this behavior is discussed ',(0,o.kt)("a",s({parentName:"p"},{href:"#special-name-mangling-rules-for-js-object-attribute-names"}),"further down below"),"."),(0,o.kt)("h2",s({},{id:"accessing-javascript-object-attributes-that-start-with-a-capital-letter"}),"Accessing JavaScript object attributes that start with a capital letter"),(0,o.kt)("p",null,"Capital letters in Reason are used exclusively for module names, like ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Belt"),", and they cannot be used as record field names like in JavaScript."),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'const payload = {\n  PostTitle: "Welcome to Reason",\n};\n\n/* this won\'t work in Reason since `PostTitle` is capitalized, so `paylod.PostTitle` would break */\nconst title = payload.PostTitle;\n')),(0,o.kt)("p",null,"In this case, when writing bindings to the JavaScript object, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},'[@bs.as "whatever-name-you-want-in-javascript"]')," to tell the compiler exactly what the JavaScript attribute name should be in the compiled output:"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-reason"}),'type payload {\n  [@bs.as "PostTitle"]\n  postTitle: string\n}\n\nlet payload = {\n  postTitle: "Welcome to Reason"\n}\n\n/* Reason is happy since we\'re using the valid `postTitle` field name */\nlet title = payload.postTitle;\n')),(0,o.kt)("p",null,"The code above will be translated to following JS:"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),"/* The correct capitalized field name is output in the JavaScript! */\nvar title = payload.PostTitle;\n")),(0,o.kt)("h2",s({},{id:"accessing-reserved-keywords-as-javascript-object-attribute-names"}),"Accessing reserved keywords as JavaScript object attribute names"),(0,o.kt)("p",null,"Just like accessing attributes that start with a capital letter, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},'[@bs.as "the-reserved-keyword-that-javascript-wants"]'),". It's customary to append an underscore (unlike the JSX case, where we ",(0,o.kt)("em",{parentName:"p"},"prepend")," the underscore) to the reserved keyword name:"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-reason"}),'type payload {\n  [@bs.as "type"]\n  type_: string\n}\n\nlet payload = {\n  type_: "Documentation"\n}\n\n/* Reason is happy since we\'re using the valid `type_` field name */\nlet payloadType = payload.type_;\n')),(0,o.kt)("p",null,"The code above will be translated to following JS:"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),"/* The reason compiler has correctly ouput `payload.type` even though *we* called the field `type_` */\nvar payloadType = payload.type;\n")),(0,o.kt)("h2",s({},{id:"special-name-mangling-rules-for-js-object-attribute-names"}),"Special name mangling rules for JS object attribute names"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," This is special behavior partly implemented in the Reason syntax, partly in the BuckleScript compiler. This section is mostly useful for understanding how JS object attributes and labeled arguments of ReasonReact components are compiled.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Another Note:")," A JS object type is a structurally typed entity with special compilation behavior, so they act differently than records or plain Reason objects. They are encoded as ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.t({...})")," types, more details about that feature can be found ",(0,o.kt)("a",s({parentName:"p"},{href:"http://localhost:3000/docs/reason-compiler/latest/object-2#actual-solution"}),"here"),"."),(0,o.kt)("p",{parentName:"blockquote"},"Labeled arguments used in ",(0,o.kt)("inlineCode",{parentName:"p"},"[@react.component]")," functions (like ",(0,o.kt)("inlineCode",{parentName:"p"},"let make = (~name: string, ~age: int) => React.element"),") are transformed into the ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.t")," representation (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'let make = Js.t({."name": string, "age": int}) => React.element'),"), so they follow the same ruleset.")),(0,o.kt)("p",null,"When accessing a JavaScript object field in a structural way (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"myJsObject##some"),"), the following rules apply:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A single ",(0,o.kt)("em",{parentName:"li"},"leading")," underscore will be ",(0,o.kt)("em",{parentName:"li"},"dropped")," from the output: ",(0,o.kt)("inlineCode",{parentName:"li"},"myJsObject##_type")," => ",(0,o.kt)("inlineCode",{parentName:"li"},"myJsObject.type")),(0,o.kt)("li",{parentName:"ol"},"Two (or more) ",(0,o.kt)("em",{parentName:"li"},"leading")," underscores will be ",(0,o.kt)("em",{parentName:"li"},"kept")," in the output: ",(0,o.kt)("inlineCode",{parentName:"li"},"myJsObject##__type")," => ",(0,o.kt)("inlineCode",{parentName:"li"},"myJsObject.__type")),(0,o.kt)("li",{parentName:"ol"},"There is ",(0,o.kt)("em",{parentName:"li"},"no way")," to access e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"myJsObject##_type")," structurally - use records and ",(0,o.kt)("inlineCode",{parentName:"li"},'[@bs.as "_type"]')," instead"),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("em",{parentName:"li"},"final trailing")," double underscores (and anything following them) will be dropped from the output: ",(0,o.kt)("inlineCode",{parentName:"li"},"myJsObject##this_is_kept__this_is_omitted")," => ",(0,o.kt)("inlineCode",{parentName:"li"},"myJsObject.this_is_kept"))))}p.isMDXComponent=!0,p.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/reason-compiler/latest/handling-js-naming-collisions.mdx"}},84091:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/reason-compiler/latest/handling-js-naming-collisions",function(){return n(10460)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=84091,e(e.s=t);var t}));var t=e.O();_N_E=t}]);