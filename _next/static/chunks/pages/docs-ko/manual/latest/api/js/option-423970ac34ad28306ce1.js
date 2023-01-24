(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84240],{17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}t.d(n,{Z:function(){return a}})},24946:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var a=t(17375),i=t(96156),o=(t(67294),t(3905));function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p,s=(p="Intro",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",l({},e))}),m={};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",l(l(l({},m),t),{},{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",l({},{id:"option"}),"Option"),(0,o.kt)(s,{mdxType:"Intro"},(0,o.kt)("p",null,"Provide utilities for handling ",(0,o.kt)("inlineCode",{parentName:"p"},"option"),".")),(0,o.kt)("h2",l({},{id:"t"}),"t"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"type t<'a> = option<'a>\n")),(0,o.kt)("h2",l({},{id:"some"}),"some"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let some: 'a => option<'a>\n")),(0,o.kt)("p",null,"Wraps the given value in ",(0,o.kt)("inlineCode",{parentName:"p"},"Some()")),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"Js.Option.some(1066) == Some(1066)\n")),(0,o.kt)("h2",l({},{id:"issome"}),"isSome"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isSome: option<'a> => bool\n")),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the argument is ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(value)"),"; ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if the argument is ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,o.kt)("h2",l({},{id:"issomevalue"}),"isSomeValue"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isSomeValue: ((. 'a, 'a) => bool, 'a, option<'a>) => bool\n")),(0,o.kt)("p",null,"The first argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"isSomeValue")," is an uncurried function ",(0,o.kt)("inlineCode",{parentName:"p"},"eq()")," that takes two arguments and returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if they are considered to be equal. It is used to compare a plain value ",(0,o.kt)("inlineCode",{parentName:"p"},"v1"),"(the second argument) with an ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," value. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," value is ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"isSomeValue()")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"; if the third argument is ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(v2)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"isSomeValue()")," returns the result of calling ",(0,o.kt)("inlineCode",{parentName:"p"},"eq(v1, v2)"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let clockEqual = (. a, b) => mod(a, 12) == mod(b, 12)\nJs.Option.isSomeValue(clockEqual, 3, Some(15)) == true\nJs.Option.isSomeValue(clockEqual, 3, Some(4)) == false\nJs.Option.isSomeValue(clockEqual, 3, None) == false\n")),(0,o.kt)("h2",l({},{id:"isnone"}),"isNone"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isNone: option<'a> => bool\n")),(0,o.kt)("p",null,"Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the argument is ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"; ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,o.kt)("h2",l({},{id:"getexn"}),"getExn"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getExn: option<'a> => 'a\n")),(0,o.kt)("p",null,"If the argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"getExn()")," is of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(value)"),", returns ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),". If given ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),", it throws a ",(0,o.kt)("inlineCode",{parentName:"p"},"getExn")," exception."),(0,o.kt)("h2",l({},{id:"equal"}),"equal"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let equal: ((. 'a, 'b) => bool, option<'a>, option<'b>) => bool\n")),(0,o.kt)("p",null,"The first argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"equal")," is an uncurried function ",(0,o.kt)("inlineCode",{parentName:"p"},"eq()")," that takes two arguments and returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if they are considered to be equal. The second and third arguments are ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," values."),(0,o.kt)("p",null,"If the second and third arguments are of the form:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Some(v1)")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Some(v2)"),": returns ",(0,o.kt)("inlineCode",{parentName:"li"},"eq(v1, v2)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Some(v1)")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"None"),": returns ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"None")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Some(v2)"),": returns ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"None")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"None"),": returns ",(0,o.kt)("inlineCode",{parentName:"li"},"true"))),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let clockEqual = (. a, b) => mod(a, 12) == mod(b, 12)\nJs.Option.equal(clockEqual, Some(3), Some(15)) == true\nJs.Option.equal(clockEqual, Some(3), Some(16)) == false\nJs.Option.equal(clockEqual, Some(3), None) == false\nJs.Option.equal(clockEqual, None, Some(15)) == false\nJs.Option.equal(clockEqual, None, None) == true\n")),(0,o.kt)("h2",l({},{id:"andthen"}),"andThen"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let andThen: ((. 'a) => option<'b>, option<'a>) => option<'b>\n")),(0,o.kt)("p",null,"The first argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"andThen()")," is an uncurried function ",(0,o.kt)("inlineCode",{parentName:"p"},"f()")," that takes a plain value and returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," result. The second argument is an ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," value. If the second argument is ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),", the return value is ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),". If the second argument is ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(v)"),", the return value is ",(0,o.kt)("inlineCode",{parentName:"p"},"f(v)"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let reciprocal = (. x) => x == 0 ? None : Some(1.0 /. Belt.Int.toFloat(x))\nJs.Option.andThen(reciprocal, Some(5)) == Some(0.2)\nJs.Option.andThen(reciprocal, Some(0)) == None\nJs.Option.andThen(reciprocal, None) == None\n")),(0,o.kt)("h2",l({},{id:"map"}),"map"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let map: ((. 'a) => 'b, option<'a>) => option<'b>\n")),(0,o.kt)("p",null,"The first argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"map()")," is an uncurried function ",(0,o.kt)("inlineCode",{parentName:"p"},"f()")," that takes a plain value and returns a plain result. The second argument is an ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," value. If it is of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(v)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"map()")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(f(v))"),"; if it is ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),", the return value is ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),", and function ",(0,o.kt)("inlineCode",{parentName:"p"},"f()")," is not called."),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let square = (. x) => x * x\nJs.Option.map(square, Some(3)) == Some(9)\nJs.Option.map(square, None) == None\n")),(0,o.kt)("h2",l({},{id:"getwithdefault"}),"getWithDefault"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getWithDefault: ('a, option<'a>) => 'a\n")),(0,o.kt)("p",null,"The first argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"getWithDefault()")," is a default value. If the second argument is of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(v)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getWithDefault()")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"v"),"; if the second argument is ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),", the return value is the default value."),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"Js.Option.getWithDefault(1066, Some(15)) == 15\nJs.Option.getWithDefault(1066, None) == 1066\n")),(0,o.kt)("h2",l({},{id:"default"}),"default"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let default: ('a, option<'a>) => 'a\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See:")," ",(0,o.kt)("a",l({parentName:"p"},{href:"#getWithDefault"}),"getWithDefault")),(0,o.kt)("h2",l({},{id:"filter"}),"filter"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let filter: ((. 'a) => bool, option<'a>) => option<'a>\n")),(0,o.kt)("p",null,"The first argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"filter()")," is an uncurried function that takes a plain value and returns a boolean. The second argument is an ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," value."),(0,o.kt)("p",null,"If the second argument is of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(v)")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"f(v)")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),",\nthe return value is ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(v)"),". Otherwise, the return value is ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let isEven = (. x) => mod(x, 2) == 0\nJs.Option.filter(isEven, Some(2)) == Some(2)\nJs.Option.filter(isEven, Some(3)) == None\nJs.Option.filter(isEven, None) == None\n")),(0,o.kt)("h2",l({},{id:"firstsome"}),"firstSome"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let firstSome: (option<'a>, option<'a>) => option<'a>\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"firstSome()")," function takes two ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," values; if the first is of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(v1)"),", that is the return value. Otherwise, ",(0,o.kt)("inlineCode",{parentName:"p"},"firstSome()")," returns the second value."),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'Js.Option.firstSome(Some("one"), Some("two")) == Some("one")\nJs.Option.firstSome(Some("one"), None) == Some("one")\nJs.Option.firstSome(None, Some("two")) == Some("two")\nJs.Option.firstSome(None, None) == None\n')))}u.isMDXComponent=!0,u.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-ko/manual/latest/api/js/option.mdx"}},27679:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-ko/manual/latest/api/js/option",function(){return t(24946)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=27679,e(e.s=n);var n}));var n=e.O();_N_E=n}]);