(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97038],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},27699:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(17375),r=n(96156),i=(n(67294),n(3905));function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s,l=(s="Intro",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",o({},e))}),u={};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",o(o(o({},u),n),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",o({},{id:"undefined"}),"Undefined"),(0,i.kt)(l,{mdxType:"Intro"},(0,i.kt)("p",null,"Provide utilities around ",(0,i.kt)("inlineCode",{parentName:"p"},"Js.undefined"),".")),(0,i.kt)("h2",o({},{id:"t"}),"t"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type t<'a> = Js.undefined<'a>\n")),(0,i.kt)("p",null,"Local alias for 'a Js.undefined."),(0,i.kt)("h2",o({},{id:"return"}),"return"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let return: 'a => t<'a>\n")),(0,i.kt)("p",null,"Constructs a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"Js.undefined('a)")," containing a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"'a"),"."),(0,i.kt)("h2",o({},{id:"test"}),"test"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let test: t<'a> => bool\n")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the given value is empty (undefined), ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,i.kt)("h2",o({},{id:"testany"}),"testAny"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let testAny: 'a => bool\n")),(0,i.kt)("p",null,"Since 1.6.1 Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if the given value is empty (undefined)."),(0,i.kt)("h2",o({},{id:"empty"}),"empty"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let empty: t<'a>\n")),(0,i.kt)("p",null,"The empty value, ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("h2",o({},{id:"getunsafe"}),"getUnsafe"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getUnsafe: t<'a> => 'a\n")),(0,i.kt)("h2",o({},{id:"getexn"}),"getExn"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getExn: t<'a> => 'a\n")),(0,i.kt)("h2",o({},{id:"bind"}),"bind"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let bind: (t<'a>, (. 'a) => 'b) => t<'b>\n")),(0,i.kt)("p",null,"Maps the contained value using the given function.\nIf ",(0,i.kt)("inlineCode",{parentName:"p"},"Js.undefined('a)")," contains a value, that value is unwrapped, mapped to a ",(0,i.kt)("inlineCode",{parentName:"p"},"'b")," using the given function ",(0,i.kt)("inlineCode",{parentName:"p"},"a' => 'b"),", then wrapped back up and returned as ",(0,i.kt)("inlineCode",{parentName:"p"},"Js.undefined('b)"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let maybeGreetWorld = (maybeGreeting: Js.undefined<string>) =>\n  Js.Undefined.bind(maybeGreeting, (. greeting) => greeting ++ " world!")\n')),(0,i.kt)("h2",o({},{id:"iter"}),"iter"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let iter: (t<'a>, (. 'a) => unit) => unit\n")),(0,i.kt)("p",null,"Iterates over the contained value with the given function.\nIf ",(0,i.kt)("inlineCode",{parentName:"p"},"Js.undefined('a)")," contains a value, that value is unwrapped and applied to the given function."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let maybeSay = (maybeMessage: Js.undefined<string>) =>\n  Js.Undefined.iter(maybeMessage, (. message) => Js.log(message))\n")),(0,i.kt)("h2",o({},{id:"fromoption"}),"fromOption"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromOption: option<'a> => t<'a>\n")),(0,i.kt)("p",null,"Maps ",(0,i.kt)("inlineCode",{parentName:"p"},"option('a)")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Js.undefined('a)"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"Some(a)")," => ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"None")," => ",(0,i.kt)("inlineCode",{parentName:"p"},"empty")),(0,i.kt)("h2",o({},{id:"from_opt"}),"from_opt"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let from_opt: option<'a> => t<'a>\n")),(0,i.kt)("h2",o({},{id:"tooption"}),"toOption"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toOption: t<'a> => option<'a>\n")),(0,i.kt)("p",null,"Maps ",(0,i.kt)("inlineCode",{parentName:"p"},"Js.undefined('a)")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"option('a)"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"a")," => ",(0,i.kt)("inlineCode",{parentName:"p"},"Some(a)"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"empty")," => ",(0,i.kt)("inlineCode",{parentName:"p"},"None")),(0,i.kt)("h2",o({},{id:"to_opt"}),"to_opt"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let to_opt: t<'a> => option<'a>\n")))}d.isMDXComponent=!0,d.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/api/js/undefined.mdx"}},18547:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/api/js/undefined",function(){return n(27699)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=18547,e(e.s=t);var t}));var t=e.O();_N_E=t}]);