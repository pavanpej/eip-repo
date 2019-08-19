(function(){var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var fa;a:{var ha={oa:!0},ia={};try{ia.__proto__=ha;fa=ia.oa;break a}catch(a){}fa=!1}da=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=da;
function n(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
var ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},la="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ma(a,b){if(b){for(var c=la,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ka(c,d,{configurable:!0,writable:!0,value:f})}}
function na(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
ma("String.prototype.startsWith",function(a){return a?a:function(a,c){var b=na(this,a,"startsWith");a+="";for(var e=b.length,f=a.length,g=Math.max(0,Math.min(c|0,b.length)),h=0;h<f&&g<e;)if(b[g++]!=a[h++])return!1;return h>=f}});
ma("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=na(this,a,"endsWith");a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
function oa(){oa=function(){};
la.Symbol||(la.Symbol=pa)}
var pa=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function qa(){oa();var a=la.Symbol.iterator;a||(a=la.Symbol.iterator=la.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ka(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ra(aa(this))}});
qa=function(){}}
function ra(a){qa();a={next:a};a[la.Symbol.iterator]=function(){return this};
return a}
function p(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var sa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)p(d,e)&&(a[e]=d[e])}return a};
ma("Object.assign",function(a){return a||sa});
ma("WeakMap",function(a){function b(a){this.b=(g+=Math.random()+1).toString();if(a){a=ba(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(){}
function d(a){p(a,f)||ka(a,f,{value:new c})}
function e(a){var b=Object[a];b&&(Object[a]=function(a){if(a instanceof c)return a;d(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(u){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;b.prototype.set=function(a,b){d(a);if(!p(a,f))throw Error("WeakMap key fail: "+a);a[f][this.b]=b;return this};
b.prototype.get=function(a){return p(a,f)?a[f][this.b]:void 0};
b.prototype.has=function(a){return p(a,f)&&p(a[f],this.b)};
b.prototype["delete"]=function(a){return p(a,f)&&p(a[f],this.b)?delete a[f][this.b]:!1};
return b});
ma("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.b;return ra(function(){if(c){for(;c.head!=a.b;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&p(a.f,c))for(var e=0;e<d.length;e++){var h=d[e];if(b!==b&&h.key!==h.key||b===h.key)return{id:c,list:d,index:e,o:h}}return{id:c,list:d,index:-1,o:void 0}}
function e(a){this.f={};this.b=b();this.size=0;if(a){a=ba(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(ba([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(ea){return!1}}())return a;
qa();var f=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.o?c.o.value=b:(c.o={next:this.b,previous:this.b.previous,head:this.b,key:a,value:b},c.list.push(c.o),this.b.previous.next=c.o,this.b.previous=c.o,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.o&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.o.previous.next=a.o.next,a.o.next.previous=a.o.previous,a.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.f={};this.b=this.b.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).o};
e.prototype.get=function(a){return(a=d(this,a).o)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
ma("Set",function(a){function b(a){this.b=new Map;if(a){a=ba(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.b.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(ba([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
qa();b.prototype.add=function(a){a=0===a?0:a;this.b.set(a,a);this.size=this.b.size;return this};
b.prototype["delete"]=function(a){a=this.b["delete"](a);this.size=this.b.size;return a};
b.prototype.clear=function(){this.b.clear();this.size=0};
b.prototype.has=function(a){return this.b.has(a)};
b.prototype.entries=function(){return this.b.entries()};
b.prototype.values=function(){return this.b.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.b.forEach(function(d){return a.call(b,d,d,c)})};
return b});
ma("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
ma("String.prototype.includes",function(a){return a?a:function(a,c){return-1!==na(this,a,"includes").indexOf(a,c||0)}});
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
var q=this;function r(a){return void 0!==a}
function t(a){return"string"==typeof a}
function v(a,b,c){a=a.split(".");c=c||q;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&r(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
var ta=/^[\w+/_-]+[=]{0,2}$/,ua=null;function w(a,b){for(var c=a.split("."),d=b||q,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function va(){}
function wa(a){a.ca=void 0;a.getInstance=function(){return a.ca?a.ca:a.ca=new a}}
function xa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function x(a){return"array"==xa(a)}
function ya(a){var b=xa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function y(a){return"function"==xa(a)}
function z(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var za="closure_uid_"+(1E9*Math.random()>>>0),Aa=0;function Ba(a,b,c){return a.call.apply(a.bind,arguments)}
function Ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function A(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?A=Ba:A=Ca;return A.apply(null,arguments)}
function Da(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var B=Date.now||function(){return+new Date};
function Ea(a,b){v(a,b,void 0)}
function C(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.kb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var Fa=document,D=window;function E(a){if(Error.captureStackTrace)Error.captureStackTrace(this,E);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
C(E,Error);E.prototype.name="CustomError";var Ga=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(t(a))return t(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ha=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=t(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ia=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=t(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ja=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d};
function Ka(a,b){a:{var c=a.length;for(var d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:t(a)?a.charAt(c):a[c]}
function La(a,b){var c=Ga(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ma(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Na(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ya(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Oa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Pa(a,b){if(b)a=a.replace(Qa,"&amp;").replace(Ra,"&lt;").replace(Sa,"&gt;").replace(Ta,"&quot;").replace(Ua,"&#39;").replace(Va,"&#0;");else{if(!Wa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Qa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ra,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Sa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ta,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ua,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Va,"&#0;"))}return a}
var Qa=/&/g,Ra=/</g,Sa=/>/g,Ta=/"/g,Ua=/'/g,Va=/\x00/g,Wa=/[\x00&<>"']/;function Xa(a){return a=Pa(a,void 0)}
function Ya(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Za;a:{var $a=q.navigator;if($a){var ab=$a.userAgent;if(ab){Za=ab;break a}}Za=""}function G(a){return-1!=Za.indexOf(a)}
;function bb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function cb(a,b){var c=ya(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function db(a){var b=eb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function fb(a){for(var b in a)return!1;return!0}
function gb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function hb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function ib(a){var b={},c;for(c in a)b[c]=a[c];return b}
function jb(a){var b=xa(a);if("object"==b||"array"==b){if(y(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=jb(a[c]);return b}return a}
var kb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<kb.length;f++)c=kb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function mb(a){mb[" "](a);return a}
mb[" "]=va;var nb=G("Opera"),ob=G("Trident")||G("MSIE"),pb=G("Edge"),qb=G("Gecko")&&!(-1!=Za.toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),rb=-1!=Za.toLowerCase().indexOf("webkit")&&!G("Edge");function sb(){var a=q.document;return a?a.documentMode:void 0}
var tb;a:{var ub="",vb=function(){var a=Za;if(qb)return/rv:([^\);]+)(\)|;)/.exec(a);if(pb)return/Edge\/([\d\.]+)/.exec(a);if(ob)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(rb)return/WebKit\/(\S+)/.exec(a);if(nb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
vb&&(ub=vb?vb[1]:"");if(ob){var wb=sb();if(null!=wb&&wb>parseFloat(ub)){tb=String(wb);break a}}tb=ub}var xb=tb,yb;var zb=q.document;yb=zb&&ob?sb()||("CSS1Compat"==zb.compatMode?parseInt(xb,10):5):void 0;var Ab=null,Bb=null;function Cb(a){this.b=a||{cookie:""}}
k=Cb.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');r(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(B()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Oa(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=r(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Oa(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Db=new Cb("undefined"==typeof document?null:document);function Eb(a){var b=w("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if(t(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||q.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&a.constructor instanceof
Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,Fb[b]?b=Fb[b]:(b=String(b),Fb[b]||(c=/function\s+([^\(]+)/m.exec(b),Fb[b]=c?c[1]:"[Anonymous]"),b=Fb[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var Fb={};function Gb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Hb=!ob||9<=Number(yb);function Ib(){this.b="";this.f=Jb}
Ib.prototype.J=!0;Ib.prototype.I=function(){return this.b};
Ib.prototype.ba=!0;Ib.prototype.Y=function(){return 1};
function Kb(a){if(a instanceof Ib&&a.constructor===Ib&&a.f===Jb)return a.b;xa(a);return"type_error:TrustedResourceUrl"}
var Jb={};function H(){this.b="";this.f=Lb}
H.prototype.J=!0;H.prototype.I=function(){return this.b};
H.prototype.ba=!0;H.prototype.Y=function(){return 1};
function Mb(a){if(a instanceof H&&a.constructor===H&&a.f===Lb)return a.b;xa(a);return"type_error:SafeUrl"}
var Nb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Ob(a){if(a instanceof H)return a;a="object"==typeof a&&a.J?a.I():String(a);Nb.test(a)||(a="about:invalid#zClosurez");return Pb(a)}
var Lb={};function Pb(a){var b=new H;b.b=a;return b}
Pb("about:blank");function Qb(){this.b="";this.g=Rb;this.f=null}
Qb.prototype.ba=!0;Qb.prototype.Y=function(){return this.f};
Qb.prototype.J=!0;Qb.prototype.I=function(){return this.b};
var Rb={};function Sb(a,b){var c=new Qb;c.b=a;c.f=b;return c}
Sb("<!DOCTYPE html>",0);Sb("",0);Sb("<br>",0);function Tb(a,b){var c=b instanceof H?b:Ob(b);a.href=Mb(c)}
function Ub(a,b){a.src=Kb(b);if(null===ua)b:{var c=q.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&ta.test(c)){ua=c;break b}ua=""}c=ua;c&&a.setAttribute("nonce",c)}
;function Vb(a,b){this.x=r(a)?a:0;this.y=r(b)?b:0}
k=Vb.prototype;k.clone=function(){return new Vb(this.x,this.y)};
k.equals=function(a){return a instanceof Vb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Wb(a,b){this.width=a;this.height=b}
k=Wb.prototype;k.clone=function(){return new Wb(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Xb(a){var b=document;return t(a)?b.getElementById(a):a}
function Yb(a,b){bb(b,function(b,d){b&&"object"==typeof b&&b.J&&(b=b.I());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Zb.hasOwnProperty(d)?a.setAttribute(Zb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Zb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function $b(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Hb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Xa(g.name),'"');if(g.type){f.push(' type="',Xa(g.type),'"');var h={};lb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(t(g)?f.className=g:x(g)?f.className=g.join(" "):Yb(f,g));2<d.length&&ac(e,f,d);return f}
function ac(a,b,c){function d(c){c&&b.appendChild(t(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];!ya(f)||z(f)&&0<f.nodeType?d(f):F(bc(f)?Ma(f):f,d)}}
function bc(a){if(a&&"number"==typeof a.length){if(z(a))return"function"==typeof a.item||"string"==typeof a.item;if(y(a))return"function"==typeof a.item}return!1}
function cc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function dc(a){ec();var b=new Ib;b.b=a;return b}
var ec=va;function fc(){var a=gc;try{var b;if(b=!!a&&null!=a.location.href)a:{try{mb(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
function hc(a){var b=ic;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function jc(){var a=[];hc(function(b){a.push(b)});
return a}
var ic={Wa:"allow-forms",Xa:"allow-modals",Ya:"allow-orientation-lock",Za:"allow-pointer-lock",ab:"allow-popups",bb:"allow-popups-to-escape-sandbox",cb:"allow-presentation",eb:"allow-same-origin",fb:"allow-scripts",gb:"allow-top-navigation",hb:"allow-top-navigation-by-user-activation"},kc=Gb(function(){return jc()});
function lc(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};F(kc(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function mc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var nc=!!window.google_async_iframe_id,gc=nc&&window.parent||window;var oc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function I(a){return a?decodeURI(a):a}
function J(a,b){return b.match(oc)[a]||null}
function pc(a,b,c){if(x(b))for(var d=0;d<b.length;d++)pc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function qc(a){var b=[],c;for(c in a)pc(c,a[c],b);return b.join("&")}
function rc(a,b){var c=qc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var sc=/#|$/;function tc(a,b){var c=a.search(sc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;var uc=null;function vc(){var a=q.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):B()}
function wc(){var a=void 0===a?q:a;return(a=a.performance)&&a.now?a.now():null}
;function xc(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0}
;var K=q.performance,yc=!!(K&&K.mark&&K.measure&&K.clearMarks),zc=Gb(function(){var a;if(a=yc){var b;if(null===uc){uc="";try{a="";try{a=q.top.location.hash}catch(c){a=q.location.hash}a&&(uc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=uc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function Ac(){var a=Bc;this.events=[];this.f=a||q;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=zc()||(null!=b?b:1>Math.random())}
Ac.prototype.disable=function(){this.b=!1;this.events!=this.f.google_js_reporting_queue&&(zc()&&F(this.events,Cc),this.events.length=0)};
function Cc(a){a&&K&&zc()&&(K.clearMarks("goog_"+a.uniqueId+"_start"),K.clearMarks("goog_"+a.uniqueId+"_end"))}
Ac.prototype.start=function(a,b){if(!this.b)return null;var c=wc()||vc();c=new xc(a,b,c);var d="goog_"+c.uniqueId+"_start";K&&zc()&&K.mark(d);return c};
Ac.prototype.end=function(a){if(this.b&&"number"==typeof a.value){var b=wc()||vc();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";K&&zc()&&K.mark(b);this.b&&this.events.push(a)}};if(nc&&!fc()){var Dc="."+Fa.domain;try{for(;2<Dc.split(".").length&&!fc();)Fa.domain=Dc=Dc.substr(Dc.indexOf(".")+1),gc=window.parent}catch(a){}fc()||(gc=window)}var Bc=gc,Ec=new Ac;if("complete"==Bc.document.readyState)Bc.google_measure_js_timing||Ec.disable();else if(Ec.b){var Fc=function(){Bc.google_measure_js_timing||Ec.disable()},Gc=Bc;
Gc.addEventListener&&Gc.addEventListener("load",Fc,!1)};var Hc=(new Date).getTime();function Ic(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Jc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;u=l=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],m=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var l=h^d&(f^h);var u=1518500249}else l=d^f^h,u=1859775393;else 60>c?(l=d&f|h&(d|f),u=2400959708):(l=d^f^h,u=3395469782);l=((a<<5|a>>>27)&4294967295)+l+m+u+b[c]&4294967295;m=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=l}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+m&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==l)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64;for(;d<c;)if(f[l++]=a[d++],u++,64==l)for(l=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64}
function d(){var a=[],d=8*u;56>l?c(h,56-l):c(h,64-(l-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var m=24;0<=m;m-=8)a[d++]=e[g]>>m&255;return a}
for(var e=[],f=[],g=[],h=[128],m=1;64>m;++m)h[m]=0;var l,u;a();return{reset:a,update:c,digest:d,ra:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Kc(a,b,c){var d=[],e=[];if(1==(x(c)?2:1))return e=[b,a],F(d,function(a){e.push(a)}),Lc(e.join(" "));
var f=[],g=[];F(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(a){e.push(a)});
a=Lc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Lc(a){var b=Jc();b.update(a);return b.ra().toLowerCase()}
;function Mc(a){var b=Ic(String(q.location.href)),c=q.__OVERRIDE_SID;null==c&&(c=(new Cb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?q.__SAPISID:q.__APISID,null==b&&(b=(new Cb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(q.location.href);return d&&b&&c?[c,Kc(Ic(d),b,a||null)].join(" "):null}return null}
;function Nc(a,b){this.g=a;this.h=b;this.f=0;this.b=null}
Nc.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function Oc(a,b){a.h(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function Pc(a){q.setTimeout(function(){throw a;},0)}
var Qc;
function Rc(){var a=q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=A(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(r(c.next)){c=c.next;var a=c.fa;c.fa=null;a()}};
return function(a){d.next={fa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){q.setTimeout(a,0)}}
;function Sc(){this.f=this.b=null}
var Uc=new Nc(function(){return new Tc},function(a){a.reset()});
Sc.prototype.add=function(a,b){var c=Uc.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
Sc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Tc(){this.next=this.scope=this.b=null}
Tc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Tc.prototype.reset=function(){this.next=this.scope=this.b=null};function Vc(a,b){Wc||Xc();Yc||(Wc(),Yc=!0);Zc.add(a,b)}
var Wc;function Xc(){if(q.Promise&&q.Promise.resolve){var a=q.Promise.resolve(void 0);Wc=function(){a.then($c)}}else Wc=function(){var a=$c;
!y(q.setImmediate)||q.Window&&q.Window.prototype&&!G("Edge")&&q.Window.prototype.setImmediate==q.setImmediate?(Qc||(Qc=Rc()),Qc(a)):q.setImmediate(a)}}
var Yc=!1,Zc=new Sc;function $c(){for(var a;a=Zc.remove();){try{a.b.call(a.scope)}catch(b){Pc(b)}Oc(Uc,a)}Yc=!1}
;function ad(){this.f=-1}
;function bd(){this.f=64;this.b=[];this.j=[];this.u=[];this.h=[];this.h[0]=128;for(var a=1;a<this.f;++a)this.h[a]=0;this.i=this.g=0;this.reset()}
C(bd,ad);bd.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.i=this.g=0};
function cd(a,b,c){c||(c=0);var d=a.u;if(t(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],h=a.b[3],m=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):(f=c^g^h,l=
3395469782);f=(b<<5|b>>>27)+f+m+l+d[e]&4294967295;m=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+m&4294967295}
bd.prototype.update=function(a,b){if(null!=a){r(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.j,f=this.g;d<b;){if(0==f)for(;d<=c;)cd(this,a,d),d+=this.f;if(t(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){cd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){cd(this,e);f=0;break}}this.g=f;this.i+=b}};
bd.prototype.digest=function(){var a=[],b=8*this.i;56>this.g?this.update(this.h,56-this.g):this.update(this.h,this.f-(this.g-56));for(var c=this.f-1;56<=c;c--)this.j[c]=b&255,b/=256;cd(this,this.j);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};function L(){this.f=this.f;this.u=this.u}
L.prototype.f=!1;L.prototype.dispose=function(){this.f||(this.f=!0,this.l())};
function dd(a,b){a.f?r(void 0)?b.call(void 0):b():(a.u||(a.u=[]),a.u.push(r(void 0)?A(b,void 0):b))}
L.prototype.l=function(){if(this.u)for(;this.u.length;)this.u.shift()()};
function ed(a){a&&"function"==typeof a.dispose&&a.dispose()}
function fd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ya(d)?fd.apply(null,d):ed(d)}}
;function gd(a){if(a.classList)return a.classList;a=a.className;return t(a)&&a.match(/\S+/g)||[]}
function hd(a,b){if(a.classList)var c=a.classList.contains(b);else c=gd(a),c=0<=Ga(c,b);return c}
function id(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):hd(a,"inverted-hdpi")&&(a.className=Ha(gd(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var jd="StopIteration"in q?q.StopIteration:{message:"StopIteration",stack:""};function kd(){}
kd.prototype.next=function(){throw jd;};
kd.prototype.F=function(){return this};
function ld(a){if(a instanceof kd)return a;if("function"==typeof a.F)return a.F(!1);if(ya(a)){var b=0,c=new kd;c.next=function(){for(;;){if(b>=a.length)throw jd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function md(a,b){if(ya(a))try{F(a,b,void 0)}catch(c){if(c!==jd)throw c;}else{a=ld(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==jd)throw c;}}}
function nd(a){if(ya(a))return Ma(a);a=ld(a);var b=[];md(a,function(a){b.push(a)});
return b}
;function od(a,b){this.g={};this.b=[];this.h=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof od)for(c=pd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function pd(a){qd(a);return a.b.concat()}
k=od.prototype;k.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||rd;qd(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function rd(a,b){return a===b}
k.isEmpty=function(){return 0==this.f};
k.clear=function(){this.g={};this.h=this.f=this.b.length=0};
k.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.f--,this.h++,this.b.length>2*this.f&&qd(this),!0):!1};
function qd(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.f++,this.b.push(a),this.h++);this.g[a]=b};
k.forEach=function(a,b){for(var c=pd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new od(this)};
k.F=function(a){qd(this);var b=0,c=this.h,d=this,e=new kd;e.next=function(){if(c!=d.h)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw jd;var e=d.b[b++];return a?e:d.g[e]};
return e};function sd(a){var b=[];td(new ud,a,b);return b.join("")}
function ud(){}
function td(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(x(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),td(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),vd(d,c),c.push(":"),td(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":vd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var wd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},xd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function vd(a,b){b.push('"',a.replace(xd,function(a){var b=wd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),wd[a]=b);return b}),'"')}
;function yd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function M(a){this.b=0;this.u=void 0;this.h=this.f=this.g=null;this.i=this.j=!1;if(a!=va)try{var b=this;a.call(void 0,function(a){zd(b,2,a)},function(a){zd(b,3,a)})}catch(c){zd(this,3,c)}}
function Ad(){this.next=this.context=this.onRejected=this.f=this.b=null;this.g=!1}
Ad.prototype.reset=function(){this.context=this.onRejected=this.f=this.b=null;this.g=!1};
var Bd=new Nc(function(){return new Ad},function(a){a.reset()});
function Dd(a,b,c){var d=Bd.get();d.f=a;d.onRejected=b;d.context=c;return d}
function Ed(a){return new M(function(b,c){c(a)})}
M.prototype.then=function(a,b,c){return Fd(this,y(a)?a:null,y(b)?b:null,c)};
M.prototype.$goog_Thenable=!0;function Gd(a,b){return Fd(a,null,b,void 0)}
M.prototype.cancel=function(a){0==this.b&&Vc(function(){var b=new Hd(a);Id(this,b)},this)};
function Id(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.g||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Id(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Jd(c),Kd(c,e,3,b)))}a.g=null}else zd(a,3,b)}
function Ld(a,b){a.f||2!=a.b&&3!=a.b||Md(a);a.h?a.h.next=b:a.f=b;a.h=b}
function Fd(a,b,c,d){var e=Dd(null,null,null);e.b=new M(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(l){g(l)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!r(e)&&b instanceof Hd?g(b):a(e)}catch(l){g(l)}}:g});
e.b.g=a;Ld(a,e);return e.b}
M.prototype.w=function(a){this.b=0;zd(this,2,a)};
M.prototype.B=function(a){this.b=0;zd(this,3,a)};
function zd(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.w,f=a.B;if(d instanceof M){Ld(d,Dd(e||va,f||null,a));var g=!0}else if(yd(d))d.then(e,f,a),g=!0;else{if(z(d))try{var h=d.then;if(y(h)){Nd(d,h,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}g||(a.u=c,a.b=b,a.g=null,Md(a),3!=b||c instanceof Hd||Od(a,c))}}
function Nd(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(m){f(m)}}
function Md(a){a.j||(a.j=!0,Vc(a.m,a))}
function Jd(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.h=null);return b}
M.prototype.m=function(){for(var a;a=Jd(this);)Kd(this,a,this.b,this.u);this.j=!1};
function Kd(a,b,c,d){if(3==c&&b.onRejected&&!b.g)for(;a&&a.i;a=a.g)a.i=!1;if(b.b)b.b.g=null,Pd(b,c,d);else try{b.g?b.f.call(b.context):Pd(b,c,d)}catch(e){Qd.call(null,e)}Oc(Bd,b)}
function Pd(a,b,c){2==b?a.f.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Od(a,b){a.i=!0;Vc(function(){a.i&&Qd.call(null,b)})}
var Qd=Pc;function Hd(a){E.call(this,a)}
C(Hd,E);Hd.prototype.name="cancel";function N(a){L.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.g={};this.m=!!a}
C(N,L);k=N.prototype;k.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function Rd(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=Ka(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.L(b)}}
k.L=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.i?(this.h.push(a),this.b[a+1]=va):(c&&La(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.K=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];Sd(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.L(c)}}return 0!=e}return!1};
function Sd(a,b,c){Vc(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.g[a];b&&(F(b,this.L,this),delete this.g[a])}else this.b.length=0,this.g={}};
k.l=function(){N.A.l.call(this);this.clear();this.h.length=0};function Td(a){this.b=a}
Td.prototype.set=function(a,b){r(b)?this.b.set(a,sd(b)):this.b.remove(a)};
Td.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Td.prototype.remove=function(a){this.b.remove(a)};function Ud(a){this.b=a}
C(Ud,Td);function Vd(a){this.data=a}
function Wd(a){return!r(a)||a instanceof Vd?a:new Vd(a)}
Ud.prototype.set=function(a,b){Ud.A.set.call(this,a,Wd(b))};
Ud.prototype.f=function(a){a=Ud.A.get.call(this,a);if(!r(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ud.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!r(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Xd(a){this.b=a}
C(Xd,Ud);Xd.prototype.set=function(a,b,c){if(b=Wd(b)){if(c){if(c<B()){Xd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=B()}Xd.A.set.call(this,a,b)};
Xd.prototype.f=function(a){var b=Xd.A.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<B()||c&&c>B())Xd.prototype.remove.call(this,a);else return b}};function Yd(){}
;function Zd(){}
C(Zd,Yd);Zd.prototype.clear=function(){var a=nd(this.F(!0)),b=this;F(a,function(a){b.remove(a)})};function $d(a){this.b=a}
C($d,Zd);k=$d.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.F=function(a){var b=0,c=this.b,d=new kd;d.next=function(){if(b>=c.length)throw jd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function ae(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
C(ae,$d);function be(a,b){this.f=a;this.b=null;if(ob&&!(9<=Number(yb))){ce||(ce=new od);this.b=ce.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),ce.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
C(be,Zd);var de={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ce=null;function ee(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return de[a]})}
k=be.prototype;k.isAvailable=function(){return!!this.b};
k.set=function(a,b){this.b.setAttribute(ee(a),b);fe(this)};
k.get=function(a){a=this.b.getAttribute(ee(a));if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeAttribute(ee(a));fe(this)};
k.F=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new kd;d.next=function(){if(b>=c.length)throw jd;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);fe(this)};
function fe(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ge(a,b){this.f=a;this.b=b+"::"}
C(ge,Zd);ge.prototype.set=function(a,b){this.f.set(this.b+a,b)};
ge.prototype.get=function(a){return this.f.get(this.b+a)};
ge.prototype.remove=function(a){this.f.remove(this.b+a)};
ge.prototype.F=function(a){var b=this.f.F(!0),c=this,d=new kd;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};function he(){this.f=[];this.b=-1}
he.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.f[a]!=b&&(this.f[a]=b,this.b=-1)};
he.prototype.get=function(a){return!!this.f[a]};
function ie(a){-1==a.b&&(a.b=Ja(a.f,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.b}
;function je(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var O=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var ke=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",ke,void 0);function P(a){je(ke,arguments)}
function Q(a,b){return a in ke?ke[a]:b}
function le(a){return Q(a,void 0)}
function me(){return Q("PLAYER_CONFIG",{})}
;function ne(){var a=oe;w("yt.ads.biscotti.getId_")||v("yt.ads.biscotti.getId_",a,void 0)}
function pe(a){v("yt.ads.biscotti.lastId_",a,void 0)}
;function qe(a){var b=re;a=void 0===a?w("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(se(b),te(b));b.ca_type="image";a&&(b.bid=a);return b}
function se(a){var b={};b.dt=Hc;b.flash="0";a:{try{var c=a.b.top.location.href}catch(f){a=2;break a}a=c?c===a.f.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?D:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!D.navigator&&"unknown"!==typeof D.navigator.javaEnabled&&!!D.navigator.javaEnabled&&D.navigator.javaEnabled();D.screen&&(b.u_h=D.screen.height,b.u_w=D.screen.width,b.u_ah=D.screen.availHeight,b.u_aw=D.screen.availWidth,b.u_cd=D.screen.colorDepth);
D.navigator&&D.navigator.plugins&&(b.u_nplug=D.navigator.plugins.length);D.navigator&&D.navigator.mimeTypes&&(b.u_nmime=D.navigator.mimeTypes.length);return b}
function te(a){var b=a.b;try{var c=b.screenX;var d=b.screenY}catch(ea){}try{var e=b.outerWidth;var f=b.outerHeight}catch(ea){}try{var g=b.innerWidth;var h=b.innerHeight}catch(ea){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.b.top;try{var m=(c||window).document,l="CSS1Compat"==m.compatMode?m.documentElement:m.body;var u=(new Wb(l.clientWidth,l.clientHeight)).round()}catch(ea){u=new Wb(-12245933,-12245933)}m=u;u={};l=new he;q.SVGElement&&
q.document.createElementNS&&l.set(0);c=lc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);q.crypto&&q.crypto.subtle&&l.set(3);l=ie(l);u.bc=l;u.bih=m.height;u.biw=m.width;u.brdim=b.join();a=a.f;return u.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,u.wgl=!!D.WebGLRenderingContext,u}
var re=new function(){var a=window.document;this.b=window;this.f=a};B();function ue(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){R(b)}}:a}
function R(a,b,c,d,e){var f=w("yt.logging.errors.log");f?f(a,b,c,d,e):(f=Q("ERRORS",[]),f.push([a,b,c,d,e]),P("ERRORS",f))}
function ve(a){R(a,"WARNING",void 0,void 0,void 0)}
;function we(a,b){var c=S(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function S(a){return Q("EXPERIMENT_FLAGS",{})[a]}
;var xe=r(XMLHttpRequest)?function(){return new XMLHttpRequest}:r(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function ye(){if(!xe)return null;var a=xe();return"open"in a?a:null}
function ze(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function T(a,b){y(a)&&(a=ue(a));return window.setTimeout(a,b)}
function U(a){window.clearTimeout(a)}
;function Ae(a){var b=[];bb(a,function(a,d){var c=encodeURIComponent(String(d)),f;x(a)?f=a:f=[a];F(f,function(a){""==a?b.push(c):b.push(c+"="+encodeURIComponent(String(a)))})});
return b.join("&")}
function Be(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?x(b[f])?Na(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(m){if(S("catch_invalid_url_components")){var h=Error("Error decoding URL component.");h.params="key: "+e[0]+", value: "+e[1];R(h)}else throw m;}}return b}
function Ce(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Be(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return rc(a,e)+d}
;var De={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Ee="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Fe=!1;
function Ge(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(1,a),e=I(J(3,a));d&&e?(d=c,c=a.match(oc),d=d.match(oc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?I(J(3,c))==e&&(Number(J(4,c))||null)==(Number(J(4,a))||null):!0;d=!!S("web_ajax_ignore_global_headers_if_set");for(var f in De)e=Q(De[f]),!e||!c&&!He(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||He(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();S("pass_biscotti_id_in_header_ajax")&&(c||He(a,"X-YouTube-Ad-Signals"))&&
(f=qe(void 0),b["X-YouTube-Ad-Signals"]=Ae(f));return b}
function Ie(a){var b=window.location.search,c=I(J(3,a)),d=I(J(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Be(b),f={};F(Ee,function(a){e[a]&&(f[a]=e[a])});
return Ce(a,f||{},!1)}
function He(a,b){var c=Q("CORS_HEADER_WHITELIST")||{},d=I(J(3,a));return d?(c=c[d])?0<=Ga(c,b):!1:!0}
function Je(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ke(a,b);var d=Le(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&U(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||q;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.da&&b.da.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.ha&&0<b.timeout&&(f=T(function(){e||(e=!0,U(f),b.ha.call(b.context||q))},b.timeout))}else Me(a,b)}
function Me(a,b){var c=b.format||"JSON";a=Ke(a,b);var d=Le(a,b),e=!1,f,g=Ne(a,function(a){if(!e){e=!0;f&&U(f);var d=ze(a),g=null,h=400<=a.status&&500>a.status,ea=500<=a.status&&600>a.status;if(d||h||ea)g=Oe(c,a,b.mb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};h=b.context||q;d?b.onSuccess&&b.onSuccess.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.da&&b.da.call(h,a,g)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.M&&0<b.timeout&&(f=T(function(){e||(e=!0,g.abort(),U(f),b.M.call(b.context||q,g))},b.timeout));
return g}
function Ke(a,b){b.wa&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.Va;d&&(d[c]&&delete d[c],a=Ce(a,d||{},!0));return a}
function Le(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.C,g=le("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.nb||I(J(3,a))&&!b.withCredentials&&I(J(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.C&&b.C[g]||(f||(f={}),f[c]=d);f&&t(e)&&(e=Be(e),lb(e,f),e=b.ia&&"JSON"==b.ia?JSON.stringify(e):qc(e));f=e||f&&!fb(f);!Fe&&f&&"POST"!=b.method&&(Fe=!0,R(Error("AJAX request with postData should use POST")));
return e}
function Oe(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Pe(b):null)d={},F(b.getElementsByTagName("*"),function(a){d[a.tagName]=Qe(a)})}c&&Re(d);
return d}
function Re(a){if(z(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Sb(a[b],null);a[c]=d}else Re(a[b])}}
function Pe(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Qe(a){var b="";F(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Se(a,b){b.method="POST";b.C||(b.C={});Me(a,b)}
function Ne(a,b,c,d,e,f,g){function h(){4==(m&&"readyState"in m?m.readyState:0)&&b&&ue(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=ye();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",h,!1):m.onreadystatechange=h;S("debug_forward_web_query_parameters")&&(a=Ie(a));m.open(c,a,!0);f&&(m.responseType=f);g&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ge(a,e))for(var l in e)m.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);
return m}
;var Te={},Ue=0;
function Ve(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Za,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof H||(a="object"==typeof a&&a.J?a.I():String(a),Nb.test(a)||(a="about:invalid#zClosurez"),a=Pb(a)),b=Mb(a),"about:invalid#zClosurez"===b?a="":(b instanceof Qb?a=b:(d="object"==typeof b,a=null,d&&b.ba&&(a=b.Y()),b=Pa(d&&b.J?b.I():String(b)),a=Sb(b,a)),a instanceof Qb&&a.constructor===Qb&&a.g===Rb?a=a.b:(xa(a),a="type_error:SafeHtml"),a=encodeURIComponent(String(sd(a)))),/^[\s\xa0]*$/.test(a)||
(a=$b("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Ne(a,b,"POST",e,d):Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ne(a,b,"GET","",d):((d=ke.EXPERIMENT_FLAGS)&&d.web_use_beacon_api_for_ad_click_server_pings&&-1!=I(J(5,a)).indexOf("/aclk")&&"1"===tc(a,"ae")&&"1"===tc(a,"act")?We(a)?(b&&b(),d=!0):d=!1:d=!1,d||Xe(a,b)))}
function We(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Xe(a,b){var c=new Image,d=""+Ue++;Te[d]=c;c.onload=c.onerror=function(){b&&Te[d]&&b();delete Te[d]};
c.src=a}
;var Ye={},Ze=0;
function $e(a,b,c,d,e,f){f=f||{};f.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Ze||(e=a.stacktrace,c=a.columnNumber,a.hasOwnProperty("params")&&(d=String(JSON.stringify(a.params)),f.params=d.substr(0,500)),a=Eb(a),e=e||a.stack,d=a.lineNumber.toString(),isNaN(d)||isNaN(c)||(d=d+":"+c),window.yterr&&y(window.yterr)&&window.yterr(a),
Ye[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")))){b={Va:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:d,level:b,"client.name":f.name},C:{url:Q("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);e&&(b.C.stack=e);for(var g in f)b.C["client."+g]=f[g];if(g=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var h in g)b.C[h]=g[h];Me(Q("ECATCHER_REPORT_HOST","")+"/error_204",b);Ye[a.message]=
!0;Ze++}}
;var af=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};v("yt.msgs_",af,void 0);function bf(a){je(af,arguments)}
;function cf(a){a&&(a.dataset?a.dataset[df("loaded")]="true":a.setAttribute("data-loaded","true"))}
function ef(a,b){return a?a.dataset?a.dataset[df(b)]:a.getAttribute("data-"+b):null}
var ff={};function df(a){return ff[a]||(ff[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var gf=w("ytPubsubPubsubInstance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.L;N.prototype.publish=N.prototype.K;N.prototype.clear=N.prototype.clear;v("ytPubsubPubsubInstance",gf,void 0);var hf=w("ytPubsubPubsubSubscribedKeys")||{};v("ytPubsubPubsubSubscribedKeys",hf,void 0);var jf=w("ytPubsubPubsubTopicToKeys")||{};v("ytPubsubPubsubTopicToKeys",jf,void 0);var kf=w("ytPubsubPubsubIsSynchronous")||{};v("ytPubsubPubsubIsSynchronous",kf,void 0);
function lf(a,b){var c=mf();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){hf[d]&&b.apply(window,c)};
try{kf[a]?f():T(f,0)}catch(g){R(g)}},void 0);
hf[d]=!0;jf[a]||(jf[a]=[]);jf[a].push(d);return d}return 0}
function nf(a){var b=mf();b&&("number"==typeof a?a=[a]:t(a)&&(a=[parseInt(a,10)]),F(a,function(a){b.unsubscribeByKey(a);delete hf[a]}))}
function of(a,b){var c=mf();c&&c.publish.apply(c,arguments)}
function pf(a){var b=mf();if(b)if(b.clear(a),a)qf(a);else for(var c in jf)qf(c)}
function mf(){return w("ytPubsubPubsubInstance")}
function qf(a){jf[a]&&(a=jf[a],F(a,function(a){hf[a]&&delete hf[a]}),a.length=0)}
;var rf=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,sf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function tf(a,b,c){c=void 0===c?null:c;if(window.spf){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(rf,""),c=c.replace(sf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else uf(a,b,c)}
function uf(a,b,c){c=void 0===c?null:c;var d=vf(a),e=document.getElementById(d),f=e&&ef(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=lf(d,b),b=""+(b[za]||(b[za]=++Aa)),wf[b]=f),g||(e=xf(a,d,function(){ef(e,"loaded")||(cf(e),of(d),T(Da(pf,d),0))},c)))}
function xf(a,b,c,d){d=void 0===d?null:d;var e=document.createElement("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Ub(e,dc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function yf(a){a=vf(a);var b=document.getElementById(a);b&&(pf(a),b.parentNode.removeChild(b))}
function zf(a,b){if(a&&b){var c=""+(b[za]||(b[za]=++Aa));(c=wf[c])&&nf(c)}}
function vf(a){var b=document.createElement("a");Tb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ya(a)}
var wf={};function Af(){}
function Bf(a,b){return Cf(a,1,b)}
;function Df(){}
n(Df,Af);function Cf(a,b,c){isNaN(c)&&(c=void 0);var d=w("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
function Ef(a){if(!isNaN(a)){var b=w("yt.scheduler.instance.cancelJob");b?b(a):U(a)}}
Df.prototype.start=function(){var a=w("yt.scheduler.instance.start");a&&a()};
Df.prototype.pause=function(){var a=w("yt.scheduler.instance.pause");a&&a()};
wa(Df);Df.getInstance();var Ff=[],Gf=!1;function Hf(){if("1"!=cb(me(),"args","privembed")){var a=function(){Gf=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)};
tf("//static.doubleclick.net/instream/ad_status.js",a);Ff.push(Bf(function(){Gf||"google_ad_status"in window||(zf("//static.doubleclick.net/instream/ad_status.js",a),Gf=!0,P("DCLKSTAT",3))},5E3))}}
function If(){return parseInt(Q("DCLKSTAT",0),10)}
;function Jf(){this.f=!1;this.b=null}
Jf.prototype.initialize=function(a,b,c,d,e){var f=this;b?(this.f=!0,tf(b,function(){f.f=!1;if(window.botguard)Kf(f,c,d);else{yf(b);var a=Error("Unable to load Botguard");a.params="from "+b;ve(a)}},e)):a&&(eval(a),window.botguard?Kf(this,c,d):ve(Error("Unable to load Botguard from JS")))};
function Kf(a,b,c){try{a.b=new botguard.bg(b)}catch(d){ve(d)}c&&c(b)}
Jf.prototype.dispose=function(){this.b=null};var Lf=new Jf,Mf=!1,Nf=0,Of="";function Pf(a){S("botguard_periodic_refresh")?Nf=O():S("botguard_always_refresh")&&(Of=a)}
function Qf(a){if(a){if(Lf.f)return!1;if(S("botguard_periodic_refresh"))return 72E5<O()-Nf;if(S("botguard_always_refresh"))return Of!=a}else return!1;return!Mf}
function Rf(){return!!Lf.b}
function Sf(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Lf.b?Lf.b.invoke(void 0,void 0,a):null}
;var Tf=0;v("ytDomDomGetNextId",w("ytDomDomGetNextId")||function(){return++Tf},void 0);var Uf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Vf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Uf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a.pageX;this.f=a.pageY}}
function Wf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.f=a.clientY+b}}
Vf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Vf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Vf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var eb=w("ytEventsEventsListeners")||{};v("ytEventsEventsListeners",eb,void 0);var Xf=w("ytEventsEventsCounter")||{count:0};v("ytEventsEventsCounter",Xf,void 0);
function Yf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return db(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g=z(e[4])&&z(d)&&hb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Zf=Gb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Yf(a,b,c,d);if(e)return e;e=++Xf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Vf(d);if(!cc(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Vf(b);
b.currentTarget=a;return c.call(a,b)};
g=ue(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Zf()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);eb[e]=[a,b,c,g,d];return e}
function $f(a){a&&("string"==typeof a&&(a=[a]),F(a,function(a){if(a in eb){var b=eb[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?Zf()||"boolean"==typeof b?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete eb[a]}}))}
;function ag(a){this.w=a;this.b=null;this.i=0;this.m=null;this.j=0;this.g=[];for(a=0;4>a;a++)this.g.push(0);this.h=0;this.D=V(window,"mousemove",A(this.G,this));a=A(this.B,this);y(a)&&(a=ue(a));this.H=window.setInterval(a,25)}
C(ag,L);ag.prototype.G=function(a){r(a.b)||Wf(a);var b=a.b;r(a.f)||Wf(a);this.b=new Vb(b,a.f)};
ag.prototype.B=function(){if(this.b){var a=O();if(0!=this.i){var b=this.m,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.i);this.g[this.h]=.5<Math.abs((d-this.j)/this.j)?1:0;for(c=b=0;4>c;c++)b+=this.g[c]||0;3<=b&&this.w();this.j=d}this.i=a;this.m=this.b;this.h=(this.h+1)%4}};
ag.prototype.l=function(){window.clearInterval(this.H);$f(this.D)};var bg={};
function cg(a){var b=void 0===a?{}:a;a=void 0===b.xa?!0:b.xa;b=void 0===b.Ka?!1:b.Ka;if(null==w("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?B()-Math.max(c,0):-1;v("_lact",c,window);v("_fact",c,window);-1==c&&dg();V(document,"keydown",dg);V(document,"keyup",dg);V(document,"mousedown",dg);V(document,"mouseup",dg);a&&(b?V(window,"touchmove",function(){eg("touchmove",200)},{passive:!0}):(V(window,"resize",function(){eg("resize",200)}),V(window,"scroll",function(){eg("scroll",200)})));
new ag(function(){eg("mouse",100)});
V(document,"touchstart",dg,{passive:!0});V(document,"touchend",dg,{passive:!0})}}
function eg(a,b){bg[a]||(bg[a]=!0,Bf(function(){dg();bg[a]=!1},b))}
function dg(){null==w("_lact",window)&&cg();var a=B();v("_lact",a,window);-1==w("_fact",window)&&v("_fact",a,window);(a=w("ytglobal.ytUtilActivityCallback_"))&&a()}
function fg(){var a=w("_lact",window);return null==a?-1:Math.max(B()-a,0)}
;var gg=Math.pow(2,16)-1,hg=null,ig=0,jg={log_event:"events",log_interaction:"interactions"},kg=Object.create(null);kg.log_event="GENERIC_EVENT_LOGGING";kg.log_interaction="INTERACTION_LOGGING";var lg=new Set(["log_event"]),mg={},ng=0,og=0,W=w("ytLoggingTransportLogPayloadsQueue_")||{};v("ytLoggingTransportLogPayloadsQueue_",W,void 0);var pg=w("ytLoggingTransportTokensToCttTargetIds_")||{};v("ytLoggingTransportTokensToCttTargetIds_",pg,void 0);var qg=w("ytLoggingTransportDispatchedStats_")||{};
v("ytLoggingTransportDispatchedStats_",qg,void 0);v("ytytLoggingTransportCapturedTime_",w("ytLoggingTransportCapturedTime_")||{},void 0);function rg(){U(ng);U(og);og=0;if(!fb(W)){for(var a in W){var b=mg[a];b&&(sg(a,b),delete W[a])}fb(W)||tg()}}
function tg(){S("web_gel_timeout_cap")&&!og&&(og=T(rg,3E4));U(ng);ng=T(rg,Q("LOGGING_BATCH_TIMEOUT",we("web_gel_debounce_ms",1E4)))}
function ug(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
function sg(a,b){var c=jg[a],d=qg[a]||{};qg[a]=d;var e=Math.round(O());for(l in W[a]){var f=jb,g=b.b;g={client:{hl:g.Da,gl:g.Ca,clientName:g.Aa,clientVersion:g.Ba}};var h=window.devicePixelRatio;h&&1!=h&&(g.client.screenDensityFloat=String(h));Q("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(g.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=ug(a,l);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=pg[l])a:{var m=l;if(g.videoId)h=
"VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:m,scope:h}]}delete pg[l];f.requestTimeMs=e;if(g=le("EVENT_ID"))h=(Q("BATCH_CLIENT_COUNTER",void 0)||0)+1,h>gg&&(h=1),P("BATCH_CLIENT_COUNTER",h),g={serializedEventId:g,clientCounter:h},f.serializedClientEventId=g,hg&&ig&&S("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:hg,roundtripMs:ig}),
hg=g,ig=0;vg(b,a,f,{retry:lg.has(a),onSuccess:A(wg,this,O())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var l=d.diffCount||0;d.averageTimeBetweenDispatchesMs=l?(d.averageTimeBetweenDispatchesMs*l+c)/(l+1):c;d.diffCount=l+1}d.previousDispatchMs=e}
function wg(a){ig=Math.round(O()-a)}
;function xg(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||O());f[a]=b;f.context={lastActivityMs:String(d?-1:fg())};e?(a={},e.videoId?a.videoId=e.videoId:e.playlistId&&(a.playlistId=e.playlistId),pg[e.token]=a,e=ug("log_event",e.token)):e=ug("log_event");e.push(f);c&&(mg.log_event=new c);e.length>=(we("web_logging_max_batch")||20)?rg():tg()}
;function yg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.jb||Q("AUTHORIZATION"))||(a?b="Bearer "+w("gapi.auth.getToken")().ib:b=Mc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
function zg(a){a=Object.assign({},a);delete a.Authorization;var b=Mc();if(b){var c=new bd;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();ya(b);if(!Ab)for(Ab={},Bb={},c=0;65>c;c++)Ab[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Bb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=Bb;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,h=g?b[e+1]:0,m=e+2<b.length,l=m?b[e+2]:0,u=f>>2;f=(f&3)<<4|h>>4;h=(h&15)<<
2|l>>6;l&=63;m||(l=64,g||(h=64));d.push(c[u],c[f],c[h],c[l])}a.hash=d.join("")}return a}
;function Ag(a,b,c,d){Db.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function Bg(){var a=new ae;(a=a.isAvailable()?new ge(a,"yt.innertube"):null)||(a=new be("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new Xd(a):null;this.f=document.domain||window.location.hostname}
Bg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,B()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(sd(b))}catch(f){return}else e=escape(b);Ag(a,e,c,this.f)};
Bg.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=Db.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Bg.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;Db.remove(""+a,"/",void 0===b?"youtube.com":b)};var Cg=new Bg;function Dg(a,b,c,d){if(d)return null;d=Cg.get("nextId",!0)||1;var e=Cg.get("requests",!0)||{};e[d]={method:a,request:b,authState:zg(c),requestTime:Math.round(O())};Cg.set("nextId",d+1,86400,!0);Cg.set("requests",e,86400,!0);return d}
function Eg(a){var b=Cg.get("requests",!0)||{};delete b[a];Cg.set("requests",b,86400,!0)}
function Fg(a){var b=Cg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(O())-d.requestTime)){var e=d.authState,f=zg(yg(!1));hb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(O())),vg(a,d.method,e,{}));delete b[c]}}Cg.set("requests",b,86400,!0)}}
;function Gg(a){var b=this;this.b=a||{ya:le("INNERTUBE_API_KEY"),za:le("INNERTUBE_API_VERSION"),Aa:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ba:le("INNERTUBE_CONTEXT_CLIENT_VERSION"),Da:le("INNERTUBE_CONTEXT_HL"),Ca:le("INNERTUBE_CONTEXT_GL"),Ea:le("INNERTUBE_HOST_OVERRIDE")||"",Fa:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};Cf(function(){Fg(b)},0,5E3)}
function vg(a,b,c,d){!Q("VISITOR_DATA")&&.01>Math.random()&&R(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",C:c,ia:"JSON",M:function(){d.M()},
ha:d.M,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
ga:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
ob:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",g=a.b.Ea;g&&(f=g);g=a.b.Fa||!1;var h=yg(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var m=""+f+("/youtubei/"+a.b.za+"/"+b)+"?alt=json&key="+a.b.ya,l;if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=Dg(b,c,h,g))){var u=e.onSuccess,ea=e.ga;e.onSuccess=function(a,b){Eg(l);u(a,b)};
c.ga=function(a,b){Eg(l);ea(a,b)}}try{S("use_fetch_for_op_xhr")?Je(m,e):Se(m,e)}catch(Cd){if("InvalidAccessError"==Cd)l&&(Eg(l),l=0),R(Error("An extension is blocking network request."),"WARNING");
else throw Cd;}l&&Cf(function(){Fg(a)},0,5E3)}
;var Hg=B().toString();
function Ig(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=B();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Hg)for(a=1,b=0;b<Hg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Hg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Jg=w("ytLoggingTimeDocumentNonce_")||Ig();v("ytLoggingTimeDocumentNonce_",Jg,void 0);function Kg(a){this.b=a}
function Lg(a){var b={};void 0!==a.b.trackingParams?b.trackingParams=a.b.trackingParams:(b.veType=a.b.veType,null!=a.b.veCounter&&(b.veCounter=a.b.veCounter),null!=a.b.elementIndex&&(b.elementIndex=a.b.elementIndex));void 0!==a.b.dataElement&&(b.dataElement=Lg(a.b.dataElement));void 0!==a.b.youtubeData&&(b.youtubeData=a.b.youtubeData);return b}
Kg.prototype.toString=function(){return JSON.stringify(Lg(this))};
var Mg=1;function Ng(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Og(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Pg(a){return Q(Og(void 0===a?0:a),void 0)}
v("yt_logging_screen.getRootVeType",Pg,void 0);function Qg(){var a=Pg(0),b;a?b=new Kg({veType:a,youtubeData:void 0}):b=null;return b}
function Rg(a){a=void 0===a?0:a;var b=Q(Ng(a));b||0!=a||(b=Q("EVENT_ID"));return b?b:null}
v("yt_logging_screen.getCurrentCsn",Rg,void 0);function Sg(a,b,c){c=void 0===c?0:c;if(a!==Q(Ng(c))||b!==Q(Og(c)))P(Ng(c),a),P(Og(c),b),0==c&&(b=function(){setTimeout(function(){a&&xg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Jg,clientScreenNonce:a},Gg)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())}
v("yt_logging_screen.setCurrentScreen",Sg,void 0);function Tg(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=I(J(3,window.location.href));f&&e.push(f);f=I(J(3,d));if(0<=Ga(e,f)||!f&&0==d.lastIndexOf("/",0))if(S("autoescape_tempdata_url")&&(e=document.createElement("a"),Tb(e,d),d=e.href),d){f=d.match(oc);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||Rg();if(h){var h=
parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+Ya(d).toString(36),b=b?qc(b):"",Ag(d,b,h||5))}else h="ST-"+Ya(d).toString(36),b=b?qc(b):"",Ag(h,b,5)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var m=void 0===m?{}:m;var l=void 0===l?"":l;var u=void 0===u?window:u;c=u.location;a=rc(a,m)+l;a=a instanceof H?a:Ob(a);c.href=Mb(a)}return!0}
;function Ug(a,b,c){a={csn:a,parentVe:Lg(b),childVes:Ia(c,function(a){return Lg(a)})};
xg("visualElementAttached",a,Gg,void 0,void 0)}
;function Vg(a){a=a||{};var b={enablejsapi:1},c={};this.url=a.url||"";this.args=a.args||ib(b);this.assets=a.assets||{};this.attrs=a.attrs||ib(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Vg.prototype.clone=function(){var a=new Vg,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==xa(c)?a[b]=ib(c):a[b]=c}return a};function Wg(){L.call(this);this.b=[]}
n(Wg,L);Wg.prototype.l=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.lb)}L.prototype.l.call(this)};var Xg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Yg(a){a=a||"";if(window.spf){var b=a.match(Xg);spf.style.load(a,b?b[1]:"",void 0)}else Zg(a)}
function Zg(a){var b=$g(a),c=document.getElementById(b),d=c&&ef(c,"loaded");d||c&&!d||(c=ah(a,b,function(){ef(c,"loaded")||(cf(c),of(b),T(Da(pf,b),0))}))}
function ah(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=dc(a);d.rel="stylesheet";d.href=Kb(a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function $g(a){var b=document.createElement("A");a=Pb(a);Tb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ya(b)}
;function bh(a,b){L.call(this);this.j=this.T=a;this.D=b;this.m=!1;this.api={};this.P=this.B=null;this.G=new N;dd(this,Da(ed,this.G));this.h={};this.N=this.R=this.g=this.X=this.b=null;this.H=!1;this.i=this.w=null;this.U={};this.ma=["onReady"];this.W=null;this.ea=NaN;this.O={};ch(this);this.V("WATCH_LATER_VIDEO_ADDED",this.Ha.bind(this));this.V("WATCH_LATER_VIDEO_REMOVED",this.Ia.bind(this));this.V("onAdAnnounce",this.qa.bind(this));this.na=new Wg(this);dd(this,Da(ed,this.na))}
n(bh,L);k=bh.prototype;
k.loadNewVideoConfig=function(a){if(!this.f){a instanceof Vg||(a=new Vg(a));this.X=a;this.b=a.clone();this.g=this.b.attrs.id||this.g;"video-player"==this.g&&(this.g=this.D,this.b.attrs.id=this.D);this.j.id==this.g&&(this.g+="-player",this.b.attrs.id=this.g);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.D;this.R||(this.R=dh(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.j.style.width=mc(Number(a)||a);if(a=this.b.attrs.height)this.j.style.height=
mc(Number(a)||a);eh(this);this.m&&fh(this)}};
k.ta=function(){return this.X};
function fh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.api.loadVideoByPlayerVars(a.b.args):a.api.cueVideoByPlayerVars(a.b.args))}
function gh(a){var b=!0,c=hh(a);c&&a.b&&(a=a.b,b=ef(c,"version")==a.assets.js);return b&&!!w("yt.player.Application.create")}
function eh(a){if(!a.f&&!a.H){var b=gh(a);if(b&&"html5"==(hh(a)?"html5":null))a.N="html5",a.m||ih(a);else if(jh(a),a.N="html5",b&&a.i)a.T.appendChild(a.i),ih(a);else{a.b.loaded=!0;var c=!1;a.w=function(){c=!0;var b=a.b.clone();w("yt.player.Application.create")(a.T,b);ih(a)};
a.H=!0;b?a.w():(tf(a.b.assets.js,a.w),Yg(a.b.assets.css),kh(a)&&!c&&v("yt.player.Application.create",null,void 0))}}}
function hh(a){var b=Xb(a.g);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.g));return b}
function ih(a){if(!a.f){var b=hh(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.H=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||lh(a)):a.ea=T(function(){ih(a)},50)}}
function lh(a){ch(a);a.m=!0;var b=hh(a);b.addEventListener&&(a.B=mh(a,b,"addEventListener"));b.removeEventListener&&(a.P=mh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=mh(a,b,e))}for(var f in a.h)a.B(f,a.h[f]);fh(a);a.R&&a.R(a.api);a.G.K("onReady",a.api)}
function mh(a,b,c){var d=b[c];return function(){try{return a.W=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.W=e,ve(e))}}}
function ch(a){a.m=!1;if(a.P)for(var b in a.h)a.P(b,a.h[b]);for(var c in a.O)U(parseInt(c,10));a.O={};a.B=null;a.P=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.V.bind(a);a.api.removeEventListener=a.Ma.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.ua.bind(a);a.api.getPlayerType=a.va.bind(a);a.api.getCurrentVideoConfig=a.ta.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Ga.bind(a)}
k.Ga=function(){return this.m};
k.V=function(a,b){var c=this,d=dh(this,b);if(d){if(!(0<=Ga(this.ma,a)||this.h[a])){var e=nh(this,a);this.B&&this.B(a,e)}this.G.subscribe(a,d);"onReady"==a&&this.m&&T(function(){d(c.api)},0)}};
k.Ma=function(a,b){if(!this.f){var c=dh(this,b);c&&Rd(this.G,a,c)}};
function dh(a,b){var c=b;if("string"==typeof b){if(a.U[b])return a.U[b];c=function(){var a=w(b);a&&a.apply(q,arguments)};
a.U[b]=c}return c?c:null}
function nh(a,b){var c="ytPlayer"+b+a.D;a.h[b]=c;q[c]=function(c){var d=T(function(){if(!a.f){a.G.K(b,c);var e=a.O,g=String(d);g in e&&delete e[g]}},0);
gb(a.O,String(d))};
return c}
k.qa=function(a){of("a11y-announce",a)};
k.Ha=function(a){of("WATCH_LATER_VIDEO_ADDED",a)};
k.Ia=function(a){of("WATCH_LATER_VIDEO_REMOVED",a)};
k.va=function(){return this.N||(hh(this)?"html5":null)};
k.ua=function(){return this.W};
function jh(a){a.cancel();ch(a);a.N=null;a.b&&(a.b.loaded=!1);var b=hh(a);b&&(gh(a)||!kh(a)?a.i=b:(b&&b.destroy&&b.destroy(),a.i=null));for(a=a.T;b=a.firstChild;)a.removeChild(b)}
k.cancel=function(){this.w&&zf(this.b.assets.js,this.w);U(this.ea);this.H=!1};
k.l=function(){jh(this);if(this.i&&this.b&&this.i.destroy)try{this.i.destroy()}catch(b){R(b)}this.U=null;for(var a in this.h)q[this.h[a]]=null;this.X=this.b=this.api=null;delete this.T;delete this.j;L.prototype.l.call(this)};
function kh(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var oh={},ph="player_uid_"+(1E9*Math.random()>>>0);function qh(a){var b="player";b=t(b)?Xb(b):b;var c=ph+"_"+(b[za]||(b[za]=++Aa)),d=oh[c];if(d)return d.loadNewVideoConfig(a),d.api;d=new bh(b,c);oh[c]=d;of("player-added",d.api);dd(d,Da(rh,d));T(function(){d.loadNewVideoConfig(a)},0);
return d.api}
function rh(a){delete oh[a.D]}
;function sh(a,b,c){var d=Gg;Q("ytLoggingEventsDefaultDisabled",!1)&&Gg==Gg&&(d=null);xg(a,b,d,c,void 0)}
;var th=w("ytLoggingLatencyUsageStats_")||{};v("ytLoggingLatencyUsageStats_",th,void 0);var uh=0;function vh(a){th[a]=th[a]||{count:0};var b=th[a];b.count++;b.time=O();uh||(uh=Cf(wh,0,5E3));if(10<b.count){if(11==b.count){b=0==a.indexOf("info")?"WARNING":"ERROR";var c=Error("CSI data exceeded logging limit with key");c.params=a;$e(c,b)}return!0}return!1}
function wh(){var a=O(),b;for(b in th)6E4<a-th[b].time&&delete th[b];uh=0}
;function xh(a,b){this.version=a;this.args=b}
;function yh(a){this.topic=a}
yh.prototype.toString=function(){return this.topic};var zh=w("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.L;N.prototype.publish=N.prototype.K;N.prototype.clear=N.prototype.clear;v("ytPubsub2Pubsub2Instance",zh,void 0);v("ytPubsub2Pubsub2SubscribedKeys",w("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);v("ytPubsub2Pubsub2TopicToKeys",w("ytPubsub2Pubsub2TopicToKeys")||{},void 0);v("ytPubsub2Pubsub2IsAsync",w("ytPubsub2Pubsub2IsAsync")||{},void 0);
v("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Ah(a,b){var c=w("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Bh(){var a=Q("TIMING_TICK_EXPIRATION");a||(a={},P("TIMING_TICK_EXPIRATION",a));return a}
function Ch(){var a=Bh(),b;for(b in a)Ef(a[b]);P("TIMING_TICK_EXPIRATION",{})}
;function Dh(a,b){xh.call(this,1,arguments)}
n(Dh,xh);function Eh(a,b){xh.call(this,1,arguments)}
n(Eh,xh);var Fh=new yh("aft-recorded"),Gh=new yh("timing-sent");var Hh={vc:!0},Y={},Ih=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.csn="clientScreenNonce",Y.docid="videoId",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id=
"kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.aq="tvInfo.appQuality",Y.br_trs="tvInfo.bedrockTriggerState",Y.label="tvInfo.label",
Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),Jh="ap c cver cbrand cmodel ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
Kh="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist".split(" "),Lh={},Mh=(Lh.pa="LATENCY_ACTION_",Lh.yt_pt="LATENCY_PLAYER_",Lh.yt_vst="VIDEO_STREAM_TYPE_",Lh),Nh=!1;
function Oh(){var a=Ph().info.yt_lt="hot_bg";Qh().info_yt_lt=a;if(Rh())if("yt_lt"in Ih){var b=Ih.yt_lt;0<=Ga(Kh,b)&&(a=!!a);"yt_lt"in Mh&&(a=Mh.yt_lt+a.toUpperCase());var c=a;if(Rh()){a={};b=b.split(".");for(var d=a,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=c;c=Sh();b=Object.keys(a).join("");vh("info_"+b+"_"+c)||(a.clientActionNonce=c,sh("latencyActionInfo",a))}}else 0<=Ga(Jh,"yt_lt")||R(Error("Unknown label yt_lt logged with GEL CSI."))}
function Th(){var a=Uh();if(a.aft)return a.aft;for(var b=Q("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
A(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||va,X);function Sh(){var a=Ph().nonce;a||(a=Ig(),Ph().nonce=a);return a}
function Uh(){return Ph().tick}
function Qh(){var a=Ph();"gel"in a||(a.gel={});return a.gel}
function Ph(){var a;(a=w("ytcsi.data_"))||(a={tick:{},info:{}},Ea("ytcsi.data_",a));return a}
function Vh(){var a=Uh(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Ph().info.yt_pvis}
function Rh(){return!!S("csi_on_gel")||!!Ph().useGel}
function Wh(){Ch();if(!Rh()){var a=Uh(),b=Ph().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&x(a[f])){var d=f.slice(1);if(d in Hh){var e=Ia(a[f],function(a){return Math.round(a-c)});
b["all_"+d]=e.join()}delete a[f]}e=Q("CSI_SERVICE_NAME","youtube");var f={v:2,s:e,action:Q("TIMING_ACTION",void 0)};d=Oh.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var g=window.location.protocol+w("ytplayer.config.assets.js");(g=X.getEntriesByName?X.getEntriesByName(g)[0]:null)?b.h5jse=Math.round(b.h5jse-g.responseEnd):delete b.h5jse}a.aft=Th();Vh()&&"youtube"==e&&(Oh(),e=a.vc,g=a.pbs,delete a.aft,b.aft=Math.round(g-e));for(var h in b)"_"!=h.charAt(0)&&(f[h]=b[h]);a.ps=O();h={};e=[];for(var m in a)"_"!=
m.charAt(0)&&(g=Math.round(a[m]-c),h[m]=g,e.push(m+"."+g));f.rt=e.join(",");(a=w("ytdebug.logTiming"))&&a(f,h);Xh(f,!!b.ap);Ah(Gh,new Eh(h.aft+(d||0),void 0))}}
function Xh(a,b){if(S("debug_csi_data")){var c=w("yt.timing.csiData");c||(c=[],v("yt.timing.csiData",c,void 0));c.push({page:location.href,time:new Date,args:a})}c="";for(var d in a)c+="&"+d+"="+a[d];d="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var e=void 0===e?"":e;We(d,e)||Ve(d,void 0,void 0,void 0,e)}else Ve(d);Ea("yt.timing.pingSent_",!0)}
;function Yh(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Zh(a,b,c){t(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return $h(a)}
function $h(a,b,c){if(z(a)){b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function ai(a,b,c,d){if(z(a)&&!x(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};t(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
;function bi(a){L.call(this);this.b=a;this.b.subscribe("command",this.ja,this);this.g={};this.i=!1}
C(bi,L);k=bi.prototype;k.start=function(){this.i||this.f||(this.i=!0,ci(this.b,"RECEIVING"))};
k.ja=function(a,b,c){if(this.i&&!this.f){var d=b||{};switch(a){case "addEventListener":t(d.event)&&(a=d.event,a in this.g||(c=A(this.Oa,this,a),this.g[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":t(d.event)&&di(this,d.event);break;default:this.h.isReady()&&this.h.isExternalMethodAvailable(a,c||null)&&(b=ei(a,b||{}),c=this.h.handleExternalCall(a,b,c||null),(c=fi(a,c))&&this.i&&!this.f&&ci(this.b,a,c))}}};
k.Oa=function(a,b){this.i&&!this.f&&ci(this.b,a,this.Z(a,b))};
k.Z=function(a,b){if(null!=b)return{value:b}};
function di(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
k.l=function(){var a=this.b;a.f||Rd(a.b,"command",this.ja,this);this.b=null;for(var b in this.g)di(this,b);bi.A.l.call(this)};function gi(a,b){bi.call(this,b);this.h=a;this.start()}
C(gi,bi);gi.prototype.addEventListener=function(a,b){this.h.addEventListener(a,b)};
gi.prototype.removeEventListener=function(a,b){this.h.removeEventListener(a,b)};
function ei(a,b){switch(a){case "loadVideoById":return b=$h(b),[b];case "cueVideoById":return b=$h(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=ai(b),[b];case "cuePlaylist":return b=ai(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey]}return[]}
function fi(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
gi.prototype.Z=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return gi.A.Z.call(this,a,b)};
gi.prototype.l=function(){gi.A.l.call(this);delete this.h};function hi(a,b,c,d){L.call(this);this.g=b||null;this.w="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.m=A(this.B,this);window.addEventListener("message",this.m)}
n(hi,L);hi.prototype.B=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.g&&a.source!=this.g)&&t(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.w=a.origin);this.g=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=Ga(this.j,b.func))&&this.i(b.func,b.args,a.origin)}}};
hi.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=sd(a);c.postMessage(d,this.w)}catch(e){R(e,"WARNING")}}};
hi.prototype.l=function(){window.removeEventListener("message",this.m);L.prototype.l.call(this)};function ii(a,b,c){hi.call(this,a,b,c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(ii,hi);function ji(){var a=this.f=new ii(!!Q("WIDGET_ID_ENFORCE")),b=A(this.La,this);a.i=b;a.j=null;this.f.channel="widget";if(a=Q("WIDGET_ID"))this.f.sessionId=a;this.h=[];this.j=!1;this.i={}}
k=ji.prototype;k.La=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.i[a]||"onReady"==a||(this.addEventListener(a,ki(this,a)),this.i[a]=!0)):this.la(a,b,c)};
k.la=function(){};
function ki(a,b){return A(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.sa=function(){this.j=!0;this.sendMessage("initialDelivery",this.aa());this.sendMessage("onReady");F(this.h,this.ka,this);this.h=[]};
k.aa=function(){return null};
function li(a,b){a.sendMessage("infoDelivery",b)}
k.ka=function(a){this.j?this.f.sendMessage(a):this.h.push(a)};
k.sendMessage=function(a,b){this.ka({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function mi(a){ji.call(this);this.b=a;this.g=[];this.addEventListener("onReady",A(this.Ja,this));this.addEventListener("onVideoProgress",A(this.Sa,this));this.addEventListener("onVolumeChange",A(this.Ta,this));this.addEventListener("onApiChange",A(this.Na,this));this.addEventListener("onPlaybackQualityChange",A(this.Pa,this));this.addEventListener("onPlaybackRateChange",A(this.Qa,this));this.addEventListener("onStateChange",A(this.Ra,this));this.addEventListener("onWebglSettingsChanged",A(this.Ua,
this))}
C(mi,ji);k=mi.prototype;k.la=function(a,b,c){if(this.b.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Yh(a)){var d=b;if(z(d[0])&&!x(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=$h.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Zh.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=ai.apply(window,d)}d=e}b.length=1;b[0]=d}this.b.handleExternalCall(a,b,c);Yh(a)&&li(this,this.aa())}};
k.Ja=function(){var a=A(this.sa,this);this.f.b=a};
k.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.aa=function(){if(!this.b)return null;var a=this.b.getApiInterface();La(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(m){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=B()/1E3;return b};
k.Ra=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),currentTimeLastUpdated_:B()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getVideoUrl&&(a.videoUrl=
this.b.getVideoUrl());this.b.getVideoContentRect&&(a.videoContentRect=this.b.getVideoContentRect());this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getPlaylist&&(a.playlist=this.b.getPlaylist());this.b.getPlaylistIndex&&(a.playlistIndex=this.b.getPlaylistIndex());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());li(this,a)};
k.Pa=function(a){li(this,{playbackQuality:a})};
k.Qa=function(a){li(this,{playbackRate:a})};
k.Na=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var m=f[g],l=this.b.getOption(e,m);b[e][m]=l}}this.sendMessage("apiInfoDelivery",b)};
k.Ta=function(){li(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.Sa=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:B()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());li(this,a)};
k.Ua=function(){var a={sphericalProperties:this.b.getSphericalProperties()};li(this,a)};
k.dispose=function(){mi.A.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function ni(a){a=void 0===a?!1:a;L.call(this);this.b=new N(a);dd(this,Da(ed,this.b))}
C(ni,L);ni.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
ni.prototype.i=function(a,b){this.f||this.b.K.apply(this.b,arguments)};function oi(a,b,c){ni.call(this);this.g=a;this.h=b;this.j=c}
C(oi,ni);function ci(a,b,c){if(!a.f){var d=a.g;d.f||a.h!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(sd(a),d.h))}}
oi.prototype.l=function(){this.h=this.g=null;oi.A.l.call(this)};function pi(a,b,c){L.call(this);this.b=a;this.h=c;this.i=V(window,"message",A(this.j,this));this.g=new oi(this,a,b);dd(this,Da(ed,this.g))}
C(pi,L);pi.prototype.j=function(a){var b;if(b=!this.f)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,t(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.g,c.f||c.i("command",b.command,b.data,a.origin))}};
pi.prototype.l=function(){$f(this.i);this.b=null;pi.A.l.call(this)};function qi(){var a=ib(ri),b;return Gd(new M(function(c,d){a.onSuccess=function(a){ze(a)?c(a):d(new si("Request failed, status="+a.status,"net.badstatus",a))};
a.onError=function(a){d(new si("Unknown request error","net.unknown",a))};
a.M=function(a){d(new si("Request timed out","net.timeout",a))};
b=Me("//googleads.g.doubleclick.net/pagead/id",a)}),function(a){a instanceof Hd&&b.abort();
return Ed(a)})}
function si(a,b){E.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(si,E);function ti(){this.f=0;this.b=null}
ti.prototype.then=function(a,b,c){return 1===this.f&&a?(a=a.call(c,this.b),yd(a)?a:ui(a)):2===this.f&&b?(a=b.call(c,this.b),yd(a)?a:vi(a)):this};
ti.prototype.getValue=function(){return this.b};
ti.prototype.$goog_Thenable=!0;function vi(a){var b=new ti;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function ui(a){var b=new ti;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function wi(a){E.call(this,a.message||a.description||a.name);this.isMissing=a instanceof xi;this.isTimeout=a instanceof si&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Hd}
n(wi,E);wi.prototype.name="BiscottiError";function xi(){E.call(this,"Biscotti ID is missing from server")}
n(xi,E);xi.prototype.name="BiscottiMissingError";var ri={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},yi=null;function oe(){if("1"===cb(me(),"args","privembed"))return Ed(Error("Biscotti ID is not available in private embed mode"));yi||(yi=Gd(qi().then(zi),function(a){return Ai(2,a)}));
return yi}
function zi(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new xi;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new xi;a=a.id;pe(a);yi=ui(a);Bi(18E5,2);return a}
function Ai(a,b){var c=new wi(b);pe("");yi=vi(c);0<a&&Bi(12E4,a-1);throw c;}
function Bi(a,b){T(function(){Gd(qi().then(zi,function(a){return Ai(b,a)}),va)},a)}
function Ci(){try{var a=w("yt.ads.biscotti.getId_");return a?a():oe()}catch(b){return Ed(b)}}
;function Di(a){if("1"!==cb(me(),"args","privembed")){a&&ne();try{Ci().then(function(a){a=qe(a);a.bsq=Ei++;Se("//www.youtube.com/ad_data_204",{wa:!1,C:a,withCredentials:!0})},function(){}),T(Di,18E5)}catch(b){R(b)}}}
var Ei=0;var Z=w("ytglobal.prefsUserPrefsPrefs_")||{};v("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Fi(){this.b=Q("ALT_PREF_COOKIE_NAME","PREF");var a=Db.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
k=Fi.prototype;k.get=function(a,b){Gi(a);Hi(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
k.set=function(a,b){Gi(a);Hi(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
k.remove=function(a){Gi(a);Hi(a);delete Z[a]};
k.save=function(){Ag(this.b,this.dump(),63072E3)};
k.clear=function(){for(var a in Z)delete Z[a]};
k.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function Hi(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Gi(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ii(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
wa(Fi);var Ji=null,Ki=null,Li=null,Mi={};function Ni(a){var b=a.id;a=a.ve_type;var c=Mg++;a=new Kg({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Mi[b]=a;b=Rg();c=Qg();b&&c&&Ug(b,c,[a])}
function Oi(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Sg(b,a),a=Qg()))for(var c in Mi){var d=Mi[c];d&&Ug(b,a,[d])}}
function Pi(a){Mi[a.id]=new Kg({trackingParams:a.tracking_params})}
function Qi(a){var b=Rg();a=Mi[a.id];b&&a&&xg("visualElementGestured",{csn:b,ve:Lg(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},Gg,void 0,void 0)}
function Ri(a){a=a.ids;var b=Rg();if(b)for(var c=0;c<a.length;c++){var d=Mi[a[c]];d&&xg("visualElementShown",{csn:b,ve:Lg(d),eventType:1},Gg,void 0,void 0)}}
;v("yt.setConfig",P,void 0);v("yt.config.set",P,void 0);v("yt.setMsg",bf,void 0);v("yt.msgs.set",bf,void 0);v("yt.logging.errors.log",$e,void 0);
v("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);Di(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=Q("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);Q("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");Ji=a=qh(a);a.addEventListener("onScreenChanged",Oi);a.addEventListener("onLogClientVeCreated",Ni);a.addEventListener("onLogServerVeCreated",Pi);a.addEventListener("onLogVeClicked",Qi);a.addEventListener("onLogVesShown",
Ri);b=Q("POST_MESSAGE_ID","player");Q("ENABLE_JS_API")?Li=new mi(a):Q("ENABLE_POST_API")&&t(b)&&t(c)&&(Ki=new pi(window.parent,b,c),Li=new gi(a,Ki.g));c=le("BG_P");Qf(c)&&(Q("BG_I")||Q("BG_IU"))&&(Mf=!0,Lf.initialize(Q("BG_I",null),Q("BG_IU",null),c,Pf,void 0));Hf()},void 0);
v("yt.www.watch.ads.restrictioncookie.spr",function(a){Ve(a+"mac_204?action_fcts=1");return!0},void 0);
var Si=ue(function(){var a="ol";X.mark&&(0==a.lastIndexOf("mark_",0)||(a="mark_"+a),X.mark(a));a=Uh();var b=O();a.ol&&(a._ol=a._ol||[a.ol],a._ol.push(b));a.ol=b;a=Bh();if(b=a.ol)Ef(b),a.ol=0;Qh().tick_ol=void 0;O();Rh()?(a=Sh(),vh("tick_ol_"+a)||sh("latencyActionTicked",{tickName:"ol",clientActionNonce:a},void 0),a=!0):a=!1;if(a=!a)a=!w("yt.timing.pingSent_");if(a&&(b=Q("TIMING_ACTION",void 0),a=Uh(),w("ytglobal.timingready_")&&b&&a._start&&(b=Th()))){Nh||(Ah(Fh,new Dh(Math.round(b-a._start),void 0)),
Nh=!0);b=!0;var c=Q("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Wh()}a=Fi.getInstance();c=!!((Ii("f"+(Math.floor(119/31)+1))||0)&67108864);b=1<window.devicePixelRatio;document.body&&hd(document.body,"exp-invert-logo")&&(b&&!hd(document.body,"inverted-hdpi")?(d=document.body,d.classList?d.classList.add("inverted-hdpi"):hd(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")):!b&&hd(document.body,"inverted-hdpi")&&id());
c!=b&&(c="f"+(Math.floor(119/31)+1),d=Ii(c)||0,d=b?d|67108864:d&-67108865,0==d?delete Z[c]:(b=d.toString(16),Z[c]=b.toString()),a.save())}),Ti=ue(function(){var a=Ji;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&Lf.dispose();a=0;for(var b=Ff.length;a<b;a++)Ef(Ff[a]);Ff.length=0;yf("//static.doubleclick.net/instream/ad_status.js");Gf=!1;P("DCLKSTAT",0);fd(Li,Ki);if(a=Ji)a.removeEventListener("onScreenChanged",Oi),a.removeEventListener("onLogClientVeCreated",Ni),a.removeEventListener("onLogServerVeCreated",Pi),a.removeEventListener("onLogVeClicked",Qi),a.removeEventListener("onLogVesShown",Ri),a.destroy();Mi={}});
window.addEventListener?(window.addEventListener("load",Si),window.addEventListener("unload",Ti)):window.attachEvent&&(window.attachEvent("onload",Si),window.attachEvent("onunload",Ti));Ea("yt.abuse.player.botguardInitialized",w("yt.abuse.player.botguardInitialized")||Rf);Ea("yt.abuse.player.invokeBotguard",w("yt.abuse.player.invokeBotguard")||Sf);Ea("yt.abuse.dclkstatus.checkDclkStatus",w("yt.abuse.dclkstatus.checkDclkStatus")||If);
Ea("yt.player.exports.navigate",w("yt.player.exports.navigate")||Tg);Ea("yt.util.activity.init",w("yt.util.activity.init")||cg);Ea("yt.util.activity.getTimeSinceActive",w("yt.util.activity.getTimeSinceActive")||fg);Ea("yt.util.activity.setTimestamp",w("yt.util.activity.setTimestamp")||dg);}).call(this);
