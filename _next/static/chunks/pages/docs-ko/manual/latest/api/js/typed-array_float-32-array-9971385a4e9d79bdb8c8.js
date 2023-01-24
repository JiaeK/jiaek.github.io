(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54167],{17375:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}a.d(t,{Z:function(){return r}})},21219:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var r=a(17375),n=a(96156),s=(a(67294),a(3905));function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g,p=(g="Intro",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",l({},e))}),o={};function m(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",l(l(l({},o),a),{},{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",l({},{id:"typedarrayfloat32array"}),"TypedArray.Float32Array"),(0,s.kt)(p,{mdxType:"Intro"},(0,s.kt)("p",null,"Provide bindings to JS typed array Float32Array.")),(0,s.kt)("h2",l({},{id:"t"}),"t"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type elt = float\ntype typed_array<'a> = Js_typed_array2.Float32Array.typed_array<'a>\ntype t = typed_array<elt>\n")),(0,s.kt)("h2",l({},{id:"unsafe_get"}),"unsafe_get"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let unsafe_get: (t, int) => elt\n")),(0,s.kt)("h2",l({},{id:"unsafe_set"}),"unsafe_set"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let unsafe_set: (t, int, elt) => unit\n")),(0,s.kt)("h2",l({},{id:"buffer"}),"buffer"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let buffer: t => Js_typed_array.array_buffer\n")),(0,s.kt)("h2",l({},{id:"bytelength"}),"byteLength"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let byteLength: t => int\n")),(0,s.kt)("h2",l({},{id:"byteoffset"}),"byteOffset"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let byteOffset: t => int\n")),(0,s.kt)("h2",l({},{id:"setarray"}),"setArray"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let setArray: (array<elt>, t) => unit\n")),(0,s.kt)("h2",l({},{id:"setarrayoffset"}),"setArrayOffset"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let setArrayOffset: (array<elt>, int, t) => unit\n")),(0,s.kt)("h2",l({},{id:"length"}),"length"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let length: t => int\n")),(0,s.kt)("h2",l({},{id:"copywithin"}),"copyWithin"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let copyWithin: (~to_: int, t) => t\n")),(0,s.kt)("h2",l({},{id:"copywithinfrom"}),"copyWithinFrom"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let copyWithinFrom: (~to_: int, ~from: int, t) => t\n")),(0,s.kt)("h2",l({},{id:"copywithinfromrange"}),"copyWithinFromRange"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let copyWithinFromRange: (~to_: int, ~start: int, ~end_: int, t) => t\n")),(0,s.kt)("h2",l({},{id:"fillinplace"}),"fillInPlace"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fillInPlace: (elt, t) => t\n")),(0,s.kt)("h2",l({},{id:"fillfrominplace"}),"fillFromInPlace"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fillFromInPlace: (elt, ~from: int, t) => t\n")),(0,s.kt)("h2",l({},{id:"fillrangeinplace"}),"fillRangeInPlace"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fillRangeInPlace: (elt, ~start: int, ~end_: int, t) => t\n")),(0,s.kt)("h2",l({},{id:"reverseinplace"}),"reverseInPlace"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reverseInPlace: t => t\n")),(0,s.kt)("h2",l({},{id:"sortinplace"}),"sortInPlace"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let sortInPlace: t => t\n")),(0,s.kt)("h2",l({},{id:"sortinplacewith"}),"sortInPlaceWith"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let sortInPlaceWith: ((. elt, elt) => int, t) => t\n")),(0,s.kt)("h2",l({},{id:"includes"}),"includes"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let includes: (elt, t) => bool\n")),(0,s.kt)("p",null,"ES2016"),(0,s.kt)("h2",l({},{id:"indexof"}),"indexOf"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let indexOf: (elt, t) => int\n")),(0,s.kt)("h2",l({},{id:"indexoffrom"}),"indexOfFrom"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let indexOfFrom: (elt, ~from: int, t) => int\n")),(0,s.kt)("h2",l({},{id:"join"}),"join"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let join: t => string\n")),(0,s.kt)("h2",l({},{id:"joinwith"}),"joinWith"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let joinWith: (string, t) => string\n")),(0,s.kt)("h2",l({},{id:"lastindexof"}),"lastIndexOf"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let lastIndexOf: (elt, t) => int\n")),(0,s.kt)("h2",l({},{id:"lastindexoffrom"}),"lastIndexOfFrom"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let lastIndexOfFrom: (elt, ~from: int, t) => int\n")),(0,s.kt)("h2",l({},{id:"slice"}),"slice"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let slice: (~start: int, ~end_: int, t) => t\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"start")," is inclusive, ",(0,s.kt)("inlineCode",{parentName:"p"},"end_")," exclusive."),(0,s.kt)("h2",l({},{id:"copy"}),"copy"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let copy: t => t\n")),(0,s.kt)("h2",l({},{id:"slicefrom"}),"sliceFrom"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let sliceFrom: (int, t) => t\n")),(0,s.kt)("h2",l({},{id:"subarray"}),"subarray"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let subarray: (~start: int, ~end_: int, t) => t\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"start")," is inclusive, ",(0,s.kt)("inlineCode",{parentName:"p"},"end_")," exclusive."),(0,s.kt)("h2",l({},{id:"subarrayfrom"}),"subarrayFrom"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let subarrayFrom: (int, t) => t\n")),(0,s.kt)("h2",l({},{id:"tostring"}),"toString"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toString: t => string\n")),(0,s.kt)("h2",l({},{id:"tolocalestring"}),"toLocaleString"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toLocaleString: t => string\n")),(0,s.kt)("h2",l({},{id:"every"}),"every"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let every: ((. elt) => bool, t) => bool\n")),(0,s.kt)("h2",l({},{id:"everyi"}),"everyi"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let everyi: ((. elt, int) => bool, t) => bool\n")),(0,s.kt)("h2",l({},{id:"filter"}),"filter"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let filter: ((. elt) => bool, t) => t\n")),(0,s.kt)("h2",l({},{id:"filteri"}),"filteri"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let filteri: ((. elt, int) => bool, t) => t\n")),(0,s.kt)("h2",l({},{id:"find"}),"find"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let find: ((. elt) => bool, t) => Js.undefined<elt>\n")),(0,s.kt)("h2",l({},{id:"findi"}),"findi"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let findi: ((. elt, int) => bool, t) => Js.undefined<elt>\n")),(0,s.kt)("h2",l({},{id:"findindex"}),"findIndex"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let findIndex: ((. elt) => bool, t) => int\n")),(0,s.kt)("h2",l({},{id:"findindexi"}),"findIndexi"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let findIndexi: ((. elt, int) => bool, t) => int\n")),(0,s.kt)("h2",l({},{id:"foreach"}),"forEach"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEach: ((. elt) => unit, t) => unit\n")),(0,s.kt)("h2",l({},{id:"foreachi"}),"forEachi"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEachi: ((. elt, int) => unit, t) => unit\n")),(0,s.kt)("h2",l({},{id:"map"}),"map"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let map: ((. elt) => 'b, t) => typed_array<'b>\n")),(0,s.kt)("h2",l({},{id:"mapi"}),"mapi"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapi: ((. elt, int) => 'b, t) => typed_array<'b>\n")),(0,s.kt)("h2",l({},{id:"reduce"}),"reduce"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduce: ((. 'b, elt) => 'b, 'b, t) => 'b\n")),(0,s.kt)("h2",l({},{id:"reducei"}),"reducei"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reducei: ((. 'b, elt, int) => 'b, 'b, t) => 'b\n")),(0,s.kt)("h2",l({},{id:"reduceright"}),"reduceRight"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduceRight: ((. 'b, elt) => 'b, 'b, t) => 'b\n")),(0,s.kt)("h2",l({},{id:"reducerighti"}),"reduceRighti"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduceRighti: ((. 'b, elt, int) => 'b, 'b, t) => 'b\n")),(0,s.kt)("h2",l({},{id:"some"}),"some"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let some: ((. elt) => bool, t) => bool\n")),(0,s.kt)("h2",l({},{id:"somei"}),"somei"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let somei: ((. elt, int) => bool, t) => bool\n")),(0,s.kt)("h2",l({},{id:"_bytes_per_element"}),"_BYTES_PER_ELEMENT"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let _BYTES_PER_ELEMENT: int\n")),(0,s.kt)("h2",l({},{id:"make"}),"make"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let make: array<elt> => t\n")),(0,s.kt)("h2",l({},{id:"frombuffer"}),"fromBuffer"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromBuffer: Js_typed_array.array_buffer => t\n")),(0,s.kt)("h2",l({},{id:"frombufferoffset"}),"fromBufferOffset"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromBufferOffset: (Js_typed_array.array_buffer, int) => t\n")),(0,s.kt)("p",null,"Can throw an exception."),(0,s.kt)("h2",l({},{id:"frombufferrange"}),"fromBufferRange"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromBufferRange: (Js_typed_array.array_buffer, ~offset: int, ~length: int) => t\n")),(0,s.kt)("p",null,"Raises ",(0,s.kt)("inlineCode",{parentName:"p"},"Js.Exn.Error")," raise Js exception."),(0,s.kt)("h2",l({},{id:"fromlength"}),"fromLength"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromLength: int => t\n")),(0,s.kt)("p",null,"Raises ",(0,s.kt)("inlineCode",{parentName:"p"},"Js.Exn.Error")," raise Js exception."),(0,s.kt)("h2",l({},{id:"from"}),"from"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let from: Js_typed_array.array_like<elt> => t\n")),(0,s.kt)("h2",l({},{id:"create"}),"create"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let create: array<elt> => t\n")),(0,s.kt)("h2",l({},{id:"of_buffer"}),"of_buffer"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let of_buffer: Js_typed_array.array_buffer => t\n")))}m.isMDXComponent=!0,m.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-ko/manual/latest/api/js/typed-array_float-32-array.mdx"}},87845:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-ko/manual/latest/api/js/typed-array_float-32-array",function(){return a(21219)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=87845,e(e.s=t);var t}));var t=e.O();_N_E=t}]);