(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38021],{17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},22541:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(96156),a=n(17375),o=(n(67294),n(3905));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",l(l(l({},p),n),{},{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",l({},{id:"installation"}),"Installation"),(0,o.kt)("p",null,"Prerequisite: NPM, which comes with ",(0,o.kt)("a",l({parentName:"p"},{href:"https://nodejs.org/en/"}),"NodeJS"),". ",(0,o.kt)("a",l({parentName:"p"},{href:"https://yarnpkg.com/en/"}),"Yarn")," also works."),(0,o.kt)("p",null,"To install ReScript globally:"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-sh"}),"npm install -g bs-platform\n")),(0,o.kt)("h2",l({},{id:"new-project"}),"New Project"),(0,o.kt)("pre",null,(0,o.kt)("code",l({parentName:"pre"},{className:"language-sh"}),"git clone https://github.com/rescript-lang/rescript-project-template\ncd rescript-project-template\nnpm install\nnpm run build\nnode src/Demo.bs.js\n")),(0,o.kt)("p",null,"That compiles your ReScript into JavaScript, then uses NodeJS to run said JavaScript. ",(0,o.kt)("strong",{parentName:"p"},"We recommend you use our unique workflow of keeping a tab open for the generated ",(0,o.kt)("inlineCode",{parentName:"strong"},".bs.js")," file"),", so that you can learn how ReScript transforms into JavaScript. Not many languages output clean JavaScript code you can inspect and learn from!"),(0,o.kt)("p",null,"During development, instead of running ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build")," each time to compile, use ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run start")," to start a watcher that recompiles automatically after file changes."),(0,o.kt)("h2",l({},{id:"integrate-into-existing-js-project"}),"Integrate Into Existing JS Project"),(0,o.kt)("p",null,"If you already have a JavaScript project into which you'd like to add ReScript:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ReScript locally as a ",(0,o.kt)("a",l({parentName:"li"},{href:"https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file"}),"devDependency"),":",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",l({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev bs-platform\n"))),(0,o.kt)("li",{parentName:"ul"},"Create a ReScript build configuration at the root:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",l({parentName:"pre"},{className:"language-json"}),'{\n  "name": "your-project-name",\n  "sources": [\n    {\n      "dir": "src", // update this to wherever you\'re putting ReScript files\n      "subdirs": true\n    }\n  ],\n  "package-specs": [\n    {\n      "module": "es6",\n      "in-source": true\n    }\n  ],\n  "suffix": ".bs.js",\n  "bs-dependencies": []\n}\n')),"See ",(0,o.kt)("a",l({parentName:"li"},{href:"build-configuration"}),"Build Configuration")," for more details on ",(0,o.kt)("inlineCode",{parentName:"li"},"bsconfig.json"),"."),(0,o.kt)("li",{parentName:"ul"},"Add convenience ",(0,o.kt)("inlineCode",{parentName:"li"},"npm")," scripts to ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),":",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",l({parentName:"pre"},{className:"language-json"}),'"scripts": {\n  "re:build": "bsb -make-world -clean-world",\n  "re:start": "bsb -make-world -clean-world -w"\n}\n')))),(0,o.kt)("p",null,"Since ReScript compiles to clean readable JS files, the rest of your existing toolchain (e.g. Babel and Webpack) should just work!"),(0,o.kt)("p",null,"Helpful guides:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",l({parentName:"li"},{href:"converting-from-js"}),"Converting from JS"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",l({parentName:"li"},{href:"shared-data-types"}),"Shared Data Types"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",l({parentName:"li"},{href:"import-from-export-to-js"}),"Import from/Export to JS"),".")),(0,o.kt)("h3",l({},{id:"integrate-with-a-reactjs-project"}),"Integrate with a ReactJS Project"),(0,o.kt)("p",null,"To start a ",(0,o.kt)("a",l({parentName:"p"},{href:"/docs/react/latest/introduction"}),"rescript-react")," app, or to integrate ReScript into an existing ReactJS app, follow the instructions ",(0,o.kt)("a",l({parentName:"p"},{href:"/docs/react/latest/installation"}),"here"),"."))}s.isMDXComponent=!0,s.frontmatter={title:"Installation",description:"ReScript installation and setup instructions",canonical:"/docs/manual/latest/installation",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v9.0.0/installation.mdx"}},23692:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v9.0.0/installation",function(){return n(22541)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=23692,e(e.s=t);var t}));var t=e.O();_N_E=t}]);