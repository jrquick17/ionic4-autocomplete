var __read=this&&this.__read||function(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,s=e.call(t),c=[];try{for(;(void 0===r||r-- >0)&&!(n=s.next()).done;)c.push(n.value)}catch(a){o={error:a}}finally{try{n&&!n.done&&(e=s.return)&&e.call(s)}finally{if(o)throw o.error}}return c},__spread=this&&this.__spread||function(){for(var t=[],r=0;r<arguments.length;r++)t=t.concat(__read(arguments[r]));return t};(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{"94vs":function(t,r,e){"use strict";e.r(r),e.d(r,"scopeCss",(function(){return W}));var n=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",o=new RegExp("(-shadowcsshost"+n,"gim"),s=new RegExp("(-shadowcsscontext"+n,"gim"),c=new RegExp("(-shadowcssslotted"+n,"gim"),a=/-shadowcsshost-no-combinator([^\s]*)/,i=[/::shadow/g,/::content/g],u=/-shadowcsshost/gim,h=/:host/gim,l=/::slotted/gim,f=/:host-context/gim,p=/\/\*\s*[\s\S]*?\*\//g,d=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,g=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,m=/([{}])/g,v=function(t,r){var e=w(t),n=0;return e.escapedString.replace(g,(function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];var s=t[2],c="",a=t[4],i="";a&&a.startsWith("{%BLOCK%")&&(c=e.blocks[n++],a=a.substring("%BLOCK%".length+1),i="{");var u=r({selector:s,content:c});return""+t[1]+u.selector+t[3]+i+u.content+a}))},w=function(t){for(var r=t.split(m),e=[],n=[],o=0,s=[],c=0;c<r.length;c++){var a=r[c];"}"===a&&o--,o>0?s.push(a):(s.length>0&&(n.push(s.join("")),e.push("%BLOCK%"),s=[]),e.push(a)),"{"===a&&o++}return s.length>0&&(n.push(s.join("")),e.push("%BLOCK%")),{escapedString:e.join(""),blocks:n}},_=function(t,r,e){return t.replace(r,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(t[2]){for(var n=t[2].split(","),o=[],s=0;s<n.length;s++){var c=n[s].trim();if(!c)break;o.push(e("-shadowcsshost-no-combinator",c,t[3]))}return o.join(",")}return"-shadowcsshost-no-combinator"+t[3]}))},b=function(t,r,e){return t+r.replace("-shadowcsshost","")+e},x=function(t,r,e){return r.indexOf("-shadowcsshost")>-1?b(t,r,e):t+r+e+", "+r+" "+t+e},O=function(t,r,e,n,o){return v(t,(function(t){var o=t.selector,s=t.content;return"@"!==t.selector[0]?o=function(t,r,e,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():function(t,r){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(r).test(t)}(t,r)?function(t,r,e){for(var n,o="."+(r=r.replace(/\[is=([^\]]*)\]/g,(function(t){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];return r[0]}))),s=function(t){var n=t.trim();if(!n)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)n=function(t,r,e){if(u.lastIndex=0,u.test(t)){var n="."+e;return t.replace(a,(function(t,r){return r.replace(/([^:]*)(:*)(.*)/,(function(t,r,e,o){return r+n+e+o}))})).replace(u,n+" ")}return r+" "+t}(t,r,e);else{var s=t.replace(u,"");if(s.length>0){var c=s.match(/([^:]*)(:*)(.*)/);c&&(n=c[1]+o+c[2]+c[3])}}return n},c=function(t){var r=[],e=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var o="__ph-"+e+"__";return r.push(n),e++,o}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,o){var s="__ph-"+e+"__";return r.push(o),e++,n+s})),placeholders:r}}(t),i="",h=0,l=/( |>|\+|~(?!=))\s*/g,f=!((t=c.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(n=l.exec(t));){var p=n[1],d=t.slice(h,n.index).trim();i+=((f=f||d.indexOf("-shadowcsshost-no-combinator")>-1)?s(d):d)+" "+p+" ",h=l.lastIndex}var g=t.substring(h);return i+=(f=f||g.indexOf("-shadowcsshost-no-combinator")>-1)?s(g):g,function(t,r){return r.replace(/__ph-(\d+)__/g,(function(r,e){return t[+e]}))}(c.placeholders,i)}(t,r,e).trim():t.trim()})).join(", ")}(t.selector,r,e,n):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(s=O(t.content,r,e,n)),{selector:o.replace(/\s{2,}/g," ").trim(),content:s}}))},W=function(t,r,e){var n=r+"-h",a=r+"-s",u=t.match(d)||[];t=function(t){return t.replace(p,"")}(t);var g=[];if(e){var m=function(t){var r="/*!@___"+g.length+"___*/";return g.push({placeholder:r,comment:"/*!@"+t.selector+"*/"}),t.selector=r+t.selector,t};t=v(t,(function(t){return"@"!==t.selector[0]?m(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=v(t.content,m),t):t}))}var w=function(t,r,e,n,a){return t=function(t){return i.reduce((function(t,r){return t.replace(r," ")}),t)}(t=function(t,r){return t.replace(c,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){var n=t[2].trim();return"."+r+" > "+n+t[3]}return"-shadowcsshost-no-combinator"+t[3]}))}(t=function(t){return _(t,s,x)}(t=function(t){return _(t,o,b)}(t=t.replace(f,"-shadowcsscontext").replace(h,"-shadowcsshost").replace(l,"-shadowcssslotted"))),n)),r&&(t=O(t,r,e,n)),(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+e)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim()}(t,r,n,a);return t=__spread([w],u).join("\n"),e&&g.forEach((function(r){var e=r.placeholder,n=r.comment;t=t.replace(e,n)})),t}}}]);