(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},X8hv:function(e,t,r){var n=r("sXyB"),o=r("RIqP"),c=r("lSNA"),a=r("8OQS"),l=["scope","children"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r("q1tI"),u=r("7ljp").mdx,f=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,c=a(e,l),p=f(t),b=s.useMemo((function(){if(!r)return null;var e=i({React:s,mdx:u},p),t=Object.keys(e),c=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(c)))}),[r,t]);return s.createElement(b,i({},c))}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},sXyB:function(e,t,r){var n=r("SksO"),o=r("b48C");function c(t,r,a){return o()?(e.exports=c=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=c=function(e,t,r){var o=[null];o.push.apply(o,t);var c=new(Function.bind.apply(e,o));return r&&n(c,r.prototype),c},e.exports.default=e.exports,e.exports.__esModule=!0),c.apply(null,arguments)}e.exports=c,e.exports.default=e.exports,e.exports.__esModule=!0},yZlL:function(e,t,r){"use strict";r.r(t);var n=r("rePB"),o=r("dI71"),c=r("q1tI"),a=r.n(c),l=r("Wbzz"),p=r("A2+M"),i=r("6Gk8"),s=r("Bl7J"),u=r("vrFN"),f=r("p3AD");function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props.data.mdx,t=this.props.data.site.siteMetadata.title,r=this.props.pageContext,n=r.previous,o=r.next;return a.a.createElement(s.a,{location:this.props.location,title:t},a.a.createElement(u.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),a.a.createElement("h1",null,e.frontmatter.title),a.a.createElement("p",{style:y(y({},Object(f.b)(-.2)),{},{display:"block",marginBottom:Object(f.a)(1),marginTop:Object(f.a)(-1)})},e.frontmatter.date),a.a.createElement(p.MDXRenderer,null,e.body),a.a.createElement("hr",{style:{marginBottom:Object(f.a)(1)}}),a.a.createElement(i.a,null),a.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.a.createElement("li",null,n&&a.a.createElement(l.Link,{to:"/blog"+n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),a.a.createElement("li",null,o&&a.a.createElement(l.Link,{to:"/blog"+o.fields.slug,rel:"next"},o.frontmatter.title," →"))))},t}(a.a.Component);t.default=O}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-30360ff3d827999d2774.js.map