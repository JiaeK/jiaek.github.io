// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

function Button(Props) {
  var href = Props.href;
  var target = Props.target;
  var kindOpt = Props.kind;
  var sizeOpt = Props.size;
  var children = Props.children;
  var kind = kindOpt !== undefined ? kindOpt : /* PrimaryRed */0;
  var size = sizeOpt !== undefined ? sizeOpt : /* Large */1;
  var bgColor;
  switch (kind) {
    case /* PrimaryRed */0 :
        bgColor = "bg-fire hover:bg-fire-70 text-white";
        break;
    case /* PrimaryBlue */1 :
        bgColor = "bg-sky hover:bg-sky-70 text-white";
        break;
    case /* SecondaryRed */2 :
        bgColor = "border-fire-30 text-red hover:bg-fire-5";
        break;
    
  }
  var padding = size ? "px-8 py-4 rounded-lg" : "px-4 py-2 captions rounded";
  var rel = target === "_blank" ? "noopener noreferrer" : undefined;
  var tmp = {
    className: "select-none hover:cursor-pointer transition-colors duration-200 body-button focus:outline-none " + bgColor + " " + padding + "",
    role: "button"
  };
  if (href !== undefined) {
    tmp.href = Caml_option.valFromOption(href);
  }
  if (rel !== undefined) {
    tmp.rel = Caml_option.valFromOption(rel);
  }
  if (target !== undefined) {
    tmp.target = Caml_option.valFromOption(target);
  }
  return React.createElement("a", tmp, children);
}

var make = Button;

export {
  make ,
}
/* react Not a pure module */
