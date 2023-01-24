(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69453],{17375:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}a.d(t,{Z:function(){return n}})},70766:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var n=a(17375),i=a(96156),r=(a(67294),a(3905));function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){(0,i.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var l,m=(l="Intro",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",s({},e))}),d={};function k(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",s(s(s({},d),a),{},{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"mapdict"}),"MapDict"),(0,r.kt)(m,{mdxType:"Intro"},(0,r.kt)("p",null,"This module separates identity from data, it is a bit more verbose but slightly more efficient due to the fact that there is no need to pack identity and data back after each operation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Advanced usage only")))),(0,r.kt)("h2",s({},{id:"t"}),"t"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type t<'key, 'value, 'id>\n")),(0,r.kt)("h2",s({},{id:"cmp"}),"cmp"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type cmp<'key, 'id> = Belt_Id.cmp<'key, 'id>\n")),(0,r.kt)("h2",s({},{id:"empty"}),"empty"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let empty: t<'k, 'v, 'id>\n")),(0,r.kt)("h2",s({},{id:"isempty"}),"isEmpty"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isEmpty: t<'k, 'v, 'id> => bool\n")),(0,r.kt)("h2",s({},{id:"has"}),"has"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let has: (t<'k, 'a, 'id>, 'k, ~cmp: cmp<'k, 'id>) => bool\n")),(0,r.kt)("h2",s({},{id:"cmpu"}),"cmpU"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmpU: (t<'k, 'v, 'id>, t<'k, 'v, 'id>, ~kcmp: cmp<'k, 'id>, ~vcmp: (. 'v, 'v) => int) => int\n")),(0,r.kt)("h2",s({},{id:"cmp-1"}),"cmp"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmp: (t<'k, 'v, 'id>, t<'k, 'v, 'id>, ~kcmp: cmp<'k, 'id>, ~vcmp: ('v, 'v) => int) => int\n")),(0,r.kt)("h2",s({},{id:"equ"}),"eqU"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eqU: (t<'k, 'a, 'id>, t<'k, 'a, 'id>, ~kcmp: cmp<'k, 'id>, ~veq: (. 'a, 'a) => bool) => bool\n")),(0,r.kt)("h2",s({},{id:"eq"}),"eq"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eq: (t<'k, 'a, 'id>, t<'k, 'a, 'id>, ~kcmp: cmp<'k, 'id>, ~veq: ('a, 'a) => bool) => bool\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"eq(m1, m2, cmp)")," tests whether the maps ",(0,r.kt)("inlineCode",{parentName:"p"},"m1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"m2")," are equal, that is, contain equal keys and associate them with equal data. ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp")," is the equality predicate used to compare the data associated with the keys."),(0,r.kt)("h2",s({},{id:"findfirstbyu"}),"findFirstByU"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let findFirstByU: (t<'k, 'v, 'id>, (. 'k, 'v) => bool) => option<('k, 'v)>\n")),(0,r.kt)("h2",s({},{id:"findfirstby"}),"findFirstBy"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let findFirstBy: (t<'k, 'v, 'id>, ('k, 'v) => bool) => option<('k, 'v)>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"findFirstBy(m, p)")," uses function ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," to find the first key value pair to match predicate ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'module IntCmp = Belt.Id.MakeComparable({\n  type t = int\n  let cmp = Pervasives.compare\n})\n\nlet s0 = Belt.Map.Dict.fromArray([(4, "4"), (1, "1"), (2, "2"), (3, "3")], ~cmp=IntCmp.cmp)\n\nBelt.Map.Dict.findFirstBy(s0, (k, _) => k == 4) == Some((4, "4"))\n')),(0,r.kt)("h2",s({},{id:"foreachu"}),"forEachU"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEachU: (t<'k, 'a, 'id>, (. 'k, 'a) => unit) => unit\n")),(0,r.kt)("h2",s({},{id:"foreach"}),"forEach"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEach: (t<'k, 'a, 'id>, ('k, 'a) => unit) => unit\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"forEach(m, f)")," applies ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," to all bindings in map ",(0,r.kt)("inlineCode",{parentName:"p"},"m"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," receives the key as first argument, and the associated value as second argument. The bindings are passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," in increasing order with respect to the ordering over the type of the keys."),(0,r.kt)("h2",s({},{id:"reduceu"}),"reduceU"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduceU: (t<'k, 'a, 'id>, 'b, (. 'b, 'k, 'a) => 'b) => 'b\n")),(0,r.kt)("h2",s({},{id:"reduce"}),"reduce"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduce: (t<'k, 'a, 'id>, 'b, ('b, 'k, 'a) => 'b) => 'b\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"reduce(m, a, f)")," computes ",(0,r.kt)("inlineCode",{parentName:"p"},"f(kN, dN ... f(k1, d1, a)...)"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"k1 ... kN")," are the keys of all bindings in ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," (in increasing order), and ",(0,r.kt)("inlineCode",{parentName:"p"},"d1 ... dN")," are the associated data."),(0,r.kt)("h2",s({},{id:"everyu"}),"everyU"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let everyU: (t<'k, 'a, 'id>, (. 'k, 'a) => bool) => bool\n")),(0,r.kt)("h2",s({},{id:"every"}),"every"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let every: (t<'k, 'a, 'id>, ('k, 'a) => bool) => bool\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"every(m, p)")," checks if all the bindings of the map satisfy the predicate ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),". Order unspecified"),(0,r.kt)("h2",s({},{id:"someu"}),"someU"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let someU: (t<'k, 'a, 'id>, (. 'k, 'a) => bool) => bool\n")),(0,r.kt)("h2",s({},{id:"some"}),"some"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let some: (t<'k, 'a, 'id>, ('k, 'a) => bool) => bool\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"some(m, p)")," checks if at least one binding of the map satisfy the predicate ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),". Order unspecified"),(0,r.kt)("h2",s({},{id:"size"}),"size"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let size: t<'k, 'a, 'id> => int\n")),(0,r.kt)("h2",s({},{id:"tolist"}),"toList"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toList: t<'k, 'a, 'id> => list<('k, 'a)>\n")),(0,r.kt)("p",null,"In increasing order."),(0,r.kt)("h2",s({},{id:"toarray"}),"toArray"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toArray: t<'k, 'a, 'id> => array<('k, 'a)>\n")),(0,r.kt)("h2",s({},{id:"fromarray"}),"fromArray"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromArray: (array<('k, 'a)>, ~cmp: cmp<'k, 'id>) => t<'k, 'a, 'id>\n")),(0,r.kt)("h2",s({},{id:"keystoarray"}),"keysToArray"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keysToArray: t<'k, 'a, 'id> => array<'k>\n")),(0,r.kt)("h2",s({},{id:"valuestoarray"}),"valuesToArray"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let valuesToArray: t<'k, 'a, 'id> => array<'a>\n")),(0,r.kt)("h2",s({},{id:"minkey"}),"minKey"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minKey: t<'k, 'a, 'b> => option<'k>\n")),(0,r.kt)("h2",s({},{id:"minkeyundefined"}),"minKeyUndefined"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minKeyUndefined: t<'k, 'a, 'b> => Js.undefined<'k>\n")),(0,r.kt)("h2",s({},{id:"maxkey"}),"maxKey"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxKey: t<'k, 'a, 'b> => option<'k>\n")),(0,r.kt)("h2",s({},{id:"maxkeyundefined"}),"maxKeyUndefined"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxKeyUndefined: t<'k, 'a, 'b> => Js.undefined<'k>\n")),(0,r.kt)("h2",s({},{id:"minimum"}),"minimum"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minimum: t<'k, 'a, 'b> => option<('k, 'a)>\n")),(0,r.kt)("h2",s({},{id:"minundefined"}),"minUndefined"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minUndefined: t<'k, 'a, 'b> => Js.undefined<('k, 'a)>\n")),(0,r.kt)("h2",s({},{id:"maximum"}),"maximum"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maximum: t<'k, 'a, 'b> => option<('k, 'a)>\n")),(0,r.kt)("h2",s({},{id:"maxundefined"}),"maxUndefined"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxUndefined: t<'k, 'a, 'b> => Js.undefined<('k, 'a)>\n")),(0,r.kt)("h2",s({},{id:"get"}),"get"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let get: (t<'k, 'a, 'id>, 'k, ~cmp: cmp<'k, 'id>) => option<'a>\n")),(0,r.kt)("h2",s({},{id:"getundefined"}),"getUndefined"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getUndefined: (t<'k, 'a, 'id>, 'k, ~cmp: cmp<'k, 'id>) => Js.undefined<'a>\n")),(0,r.kt)("h2",s({},{id:"getwithdefault"}),"getWithDefault"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getWithDefault: (t<'k, 'a, 'id>, 'k, 'a, ~cmp: cmp<'k, 'id>) => 'a\n")),(0,r.kt)("h2",s({},{id:"getexn"}),"getExn"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getExn: (t<'k, 'a, 'id>, 'k, ~cmp: cmp<'k, 'id>) => 'a\n")),(0,r.kt)("h2",s({},{id:"checkinvariantinternal"}),"checkInvariantInternal"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let checkInvariantInternal: t<'a, 'b, 'c> => unit\n")),(0,r.kt)("h2",s({},{id:"remove"}),"remove"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let remove: (t<'a, 'b, 'id>, 'a, ~cmp: cmp<'a, 'id>) => t<'a, 'b, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"remove(m, x)")," returns a map containing the same bindings as ",(0,r.kt)("inlineCode",{parentName:"p"},"m"),", except for ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," which is unbound in the returned map."),(0,r.kt)("h2",s({},{id:"removemany"}),"removeMany"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let removeMany: (t<'a, 'b, 'id>, array<'a>, ~cmp: cmp<'a, 'id>) => t<'a, 'b, 'id>\n")),(0,r.kt)("h2",s({},{id:"set"}),"set"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let set: (t<'a, 'b, 'id>, 'a, 'b, ~cmp: cmp<'a, 'id>) => t<'a, 'b, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"set(m, x, y)")," returns a map containing the same bindings as ",(0,r.kt)("inlineCode",{parentName:"p"},"m"),", plus a binding of ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," was already bound in ",(0,r.kt)("inlineCode",{parentName:"p"},"m"),", its previous binding disappears."),(0,r.kt)("h2",s({},{id:"updateu"}),"updateU"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let updateU: (\n  t<'a, 'b, 'id>,\n  'a,\n  (. option<'b>) => option<'b>,\n  ~cmp: cmp<'a, 'id>,\n) => t<'a, 'b, 'id>\n")),(0,r.kt)("h2",s({},{id:"update"}),"update"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let update: (t<'a, 'b, 'id>, 'a, option<'b> => option<'b>, ~cmp: cmp<'a, 'id>) => t<'a, 'b, 'id>\n")),(0,r.kt)("h2",s({},{id:"mergeu"}),"mergeU"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mergeU: (\n  t<'a, 'b, 'id>,\n  t<'a, 'c, 'id>,\n  (. 'a, option<'b>, option<'c>) => option<'d>,\n  ~cmp: cmp<'a, 'id>,\n) => t<'a, 'd, 'id>\n")),(0,r.kt)("h2",s({},{id:"merge"}),"merge"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let merge: (\n  t<'a, 'b, 'id>,\n  t<'a, 'c, 'id>,\n  ('a, option<'b>, option<'c>) => option<'d>,\n  ~cmp: cmp<'a, 'id>,\n) => t<'a, 'd, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"merge(m1, m2, f)")," computes a map whose keys is a subset of keys of ",(0,r.kt)("inlineCode",{parentName:"p"},"m1")," and of ",(0,r.kt)("inlineCode",{parentName:"p"},"m2"),". The presence of each such binding, and the corresponding value, is determined with the function ",(0,r.kt)("inlineCode",{parentName:"p"},"f"),"."),(0,r.kt)("h2",s({},{id:"mergemany"}),"mergeMany"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mergeMany: (t<'a, 'b, 'id>, array<('a, 'b)>, ~cmp: cmp<'a, 'id>) => t<'a, 'b, 'id>\n")),(0,r.kt)("h2",s({},{id:"keepu"}),"keepU"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keepU: (t<'k, 'a, 'id>, (. 'k, 'a) => bool) => t<'k, 'a, 'id>\n")),(0,r.kt)("h2",s({},{id:"keep"}),"keep"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keep: (t<'k, 'a, 'id>, ('k, 'a) => bool) => t<'k, 'a, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"keep(m, p)")," returns the map with all the bindings in ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," that satisfy predicate ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),"."),(0,r.kt)("h2",s({},{id:"partitionu"}),"partitionU"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let partitionU: (t<'k, 'a, 'id>, (. 'k, 'a) => bool) => (t<'k, 'a, 'id>, t<'k, 'a, 'id>)\n")),(0,r.kt)("h2",s({},{id:"partition"}),"partition"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let partition: (t<'k, 'a, 'id>, ('k, 'a) => bool) => (t<'k, 'a, 'id>, t<'k, 'a, 'id>)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"partition(m, p)")," returns a pair of maps ",(0,r.kt)("inlineCode",{parentName:"p"},"(m1, m2)"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"m1")," contains all the bindings of ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," that satisfy the predicate ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"m2")," is the map with all the bindings of ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," that do not satisfy ",(0,r.kt)("inlineCode",{parentName:"p"},"p"),"."),(0,r.kt)("h2",s({},{id:"split"}),"split"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let split: (\n  t<'a, 'b, 'id>,\n  'a,\n  ~cmp: cmp<'a, 'id>,\n) => ((t<'a, 'b, 'id>, t<'a, 'b, 'id>), option<'b>)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"split(x, m)")," returns a triple ",(0,r.kt)("inlineCode",{parentName:"p"},"(l, data, r)"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"l")," is the map with all the bindings of ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," whose key is strictly less than ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),"; ",(0,r.kt)("inlineCode",{parentName:"p"},"r")," is the map with all the bindings of ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," whose key is strictly greater than ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),"; ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," contains no binding for ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"Some(v)")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," binds ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,r.kt)("h2",s({},{id:"mapu"}),"mapU"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapU: (t<'k, 'a, 'id>, (. 'a) => 'b) => t<'k, 'b, 'id>\n")),(0,r.kt)("h2",s({},{id:"map"}),"map"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let map: (t<'k, 'a, 'id>, 'a => 'b) => t<'k, 'b, 'id>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"map(m, f)")," returns a map with same domain as ",(0,r.kt)("inlineCode",{parentName:"p"},"m"),", where the associated value ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," of all bindings of ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," has been replaced by the result of the application of ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),". The bindings are passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," in increasing order with respect to the ordering over the type of the keys."),(0,r.kt)("h2",s({},{id:"mapwithkeyu"}),"mapWithKeyU"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapWithKeyU: (t<'k, 'a, 'id>, (. 'k, 'a) => 'b) => t<'k, 'b, 'id>\n")),(0,r.kt)("h2",s({},{id:"mapwithkey"}),"mapWithKey"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapWithKey: (t<'k, 'a, 'id>, ('k, 'a) => 'b) => t<'k, 'b, 'id>\n")))}k.isMDXComponent=!0,k.frontmatter={__ghEditHref:"https://github.com/rescript-idea/rescript-lang.org-chinese-translation/tree/chinese-translation/pages/docs-cn/manual/latest/api/belt/map-dict.mdx"}},86422:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/api/belt/map-dict",function(){return a(70766)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=86422,e(e.s=t);var t}));var t=e.O();_N_E=t}]);