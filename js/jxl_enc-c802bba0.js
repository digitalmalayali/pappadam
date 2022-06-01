define(["module","require","exports"],(function(n,r,t){var e,a=(e=n.uri,function(r){var t,a;(r=void 0!==(r=r||{})?r:{}).ready=new Promise((function(n,r){t=n,a=r}));var o,i={};for(o in r)r.hasOwnProperty(o)&&(i[o]=r[o]);var u,c="./this.program",f="";f=self.location.href,e&&(f=e),f=0!==f.indexOf("blob:")?f.substr(0,f.lastIndexOf("/")+1):"",u=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)};var s,l,p=r.print||console.log.bind(console),h=r.printErr||console.warn.bind(console);for(o in i)i.hasOwnProperty(o)&&(r[o]=i[o]);i=null,r.arguments&&r.arguments,r.thisProgram&&(c=r.thisProgram),r.quit&&r.quit,r.wasmBinary&&(s=r.wasmBinary),r.noExitRuntime,"object"!=typeof WebAssembly&&N("no native wasm support detected");var g=!1,y=new TextDecoder("utf8");function v(n,r){if(!n)return"";for(var t=n+r,e=n;!(e>=t)&&b[e];)++e;return y.decode(b.subarray(n,e))}function d(n,r,t,e){if(!(e>0))return 0;for(var a=t,o=t+e-1,i=0;i<n.length;++i){var u=n.charCodeAt(i);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&n.charCodeAt(++i)),u<=127){if(t>=o)break;r[t++]=u}else if(u<=2047){if(t+1>=o)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=o)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=o)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}return r[t]=0,t-a}function m(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&(e=65536+((1023&e)<<10)|1023&n.charCodeAt(++t)),e<=127?++r:r+=e<=2047?2:e<=65535?3:4}return r}var _,w,b,T,A,C,F,E,D,P,W=new TextDecoder("utf-16le");function M(n,r){for(var t=n,e=t>>1,a=e+r/2;!(e>=a)&&A[e];)++e;return t=e<<1,W.decode(b.subarray(n,t))}function R(n,r,t){if(void 0===t&&(t=2147483647),t<2)return 0;for(var e=r,a=(t-=2)<2*n.length?t/2:n.length,o=0;o<a;++o){var i=n.charCodeAt(o);T[r>>1]=i,r+=2}return T[r>>1]=0,r-e}function S(n){return 2*n.length}function k(n,r){for(var t=0,e="";!(t>=r/4);){var a=C[n+4*t>>2];if(0==a)break;if(++t,a>=65536){var o=a-65536;e+=String.fromCharCode(55296|o>>10,56320|1023&o)}else e+=String.fromCharCode(a)}return e}function j(n,r,t){if(void 0===t&&(t=2147483647),t<4)return 0;for(var e=r,a=e+t-4,o=0;o<n.length;++o){var i=n.charCodeAt(o);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++o)),C[r>>2]=i,(r+=4)+4>a)break}return C[r>>2]=0,r-e}function O(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&++t,r+=4}return r}function I(n){_=n,r.HEAP8=w=new Int8Array(n),r.HEAP16=T=new Int16Array(n),r.HEAP32=C=new Int32Array(n),r.HEAPU8=b=new Uint8Array(n),r.HEAPU16=A=new Uint16Array(n),r.HEAPU32=F=new Uint32Array(n),r.HEAPF32=E=new Float32Array(n),r.HEAPF64=D=new Float64Array(n)}r.INITIAL_MEMORY;var U,Y=[],x=[],H=[],V=0,B=null;function N(n){r.onAbort&&r.onAbort(n),h(n+=""),g=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.";var t=new WebAssembly.RuntimeError(n);throw a(t),t}function z(n){return n.startsWith("data:application/octet-stream;base64,")}if(r.preloadedImages={},r.preloadedAudios={},r.locateFile)z(q="jxl_enc.wasm")||(U=q,q=r.locateFile?r.locateFile(U,f):f+U);else var q=new URL("/wasm/jxl_enc-68f8271f.wasm",n.uri).toString();function L(n){try{if(n==q&&s)return new Uint8Array(s);if(u)return u(n);throw"both async and sync fetching of the wasm failed"}catch(n){N(n)}}function G(n){for(;n.length>0;){var t=n.shift();if("function"!=typeof t){var e=t.func;"number"==typeof e?void 0===t.arg?P.get(e)():P.get(e)(t.arg):e(void 0===t.arg?null:t.arg)}else t(r)}}var J=0,X=4,K=8,Z=12,Q=13,$=16;function nn(n){this.excPtr=n,this.ptr=n-$,this.set_type=function(n){C[this.ptr+K>>2]=n},this.get_type=function(){return C[this.ptr+K>>2]},this.set_destructor=function(n){C[this.ptr+J>>2]=n},this.get_destructor=function(){return C[this.ptr+J>>2]},this.set_refcount=function(n){C[this.ptr+X>>2]=n},this.set_caught=function(n){n=n?1:0,w[this.ptr+Z>>0]=n},this.get_caught=function(){return 0!=w[this.ptr+Z>>0]},this.set_rethrown=function(n){n=n?1:0,w[this.ptr+Q>>0]=n},this.get_rethrown=function(){return 0!=w[this.ptr+Q>>0]},this.init=function(n,r){this.set_type(n),this.set_destructor(r),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var n=C[this.ptr+X>>2];C[this.ptr+X>>2]=n+1},this.release_ref=function(){var n=C[this.ptr+X>>2];return C[this.ptr+X>>2]=n-1,1===n}}var rn={mappings:{},buffers:[null,[],[]],printChar:function(n,r){var t=rn.buffers[n];0===r||10===r?((1===n?p:h)(function(n,r,t){for(var e=r+t,a=r;n[a]&&!(a>=e);)++a;return y.decode(n.subarray?n.subarray(r,a):new Uint8Array(n.slice(r,a)))}(t,0)),t.length=0):t.push(r)},varargs:void 0,get:function(){return rn.varargs+=4,C[rn.varargs-4>>2]},getStr:function(n){return v(n)},get64:function(n,r){return n}},tn={};function en(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function an(n){return this.fromWireType(F[n>>2])}var on={},un={},cn={};function fn(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_"+n:n}function sn(n,r){return n=fn(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function ln(n,r){var t=sn(r,(function(n){this.name=r,this.message=n;var t=new Error(n).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},t}var pn=void 0;function hn(n){throw new pn(n)}function gn(n,r,t){function e(r){var e=t(r);e.length!==n.length&&hn("Mismatched type converter count");for(var a=0;a<n.length;++a)wn(n[a],e[a])}n.forEach((function(n){cn[n]=r}));var a=new Array(r.length),o=[],i=0;r.forEach((function(n,r){un.hasOwnProperty(n)?a[r]=un[n]:(o.push(n),on.hasOwnProperty(n)||(on[n]=[]),on[n].push((function(){a[r]=un[n],++i===o.length&&e(a)})))})),0===o.length&&e(a)}function yn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var vn=void 0;function dn(n){for(var r="",t=n;b[t];)r+=vn[b[t++]];return r}var mn=void 0;function _n(n){throw new mn(n)}function wn(n,r,t){if(t=t||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=r.name;if(n||_n('type "'+e+'" must have a positive integer typeid pointer'),un.hasOwnProperty(n)){if(t.ignoreDuplicateRegistrations)return;_n("Cannot register type '"+e+"' twice")}if(un[n]=r,delete cn[n],on.hasOwnProperty(n)){var a=on[n];delete on[n],a.forEach((function(n){n()}))}}var bn=[],Tn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function An(n){n>4&&0==--Tn[n].refcount&&(Tn[n]=void 0,bn.push(n))}function Cn(){for(var n=0,r=5;r<Tn.length;++r)void 0!==Tn[r]&&++n;return n}function Fn(){for(var n=5;n<Tn.length;++n)if(void 0!==Tn[n])return Tn[n];return null}function En(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=bn.length?bn.pop():Tn.length;return Tn[r]={refcount:1,value:n},r}}function Dn(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function Pn(n,r){switch(r){case 2:return function(n){return this.fromWireType(E[n>>2])};case 3:return function(n){return this.fromWireType(D[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function Wn(n,r,t,e,a){var o=r.length;o<2&&_n("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var i=null!==r[1]&&null!==t,u=!1,c=1;c<r.length;++c)if(null!==r[c]&&void 0===r[c].destructorFunction){u=!0;break}var f="void"!==r[0].name,s="",l="";for(c=0;c<o-2;++c)s+=(0!==c?", ":"")+"arg"+c,l+=(0!==c?", ":"")+"arg"+c+"Wired";var p="return function "+fn(n)+"("+s+") {\nif (arguments.length !== "+(o-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+(o-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var h=u?"destructors":"null",g=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],y=[_n,e,a,en,r[0],r[1]];for(i&&(p+="var thisWired = classParam.toWireType("+h+", this);\n"),c=0;c<o-2;++c)p+="var arg"+c+"Wired = argType"+c+".toWireType("+h+", arg"+c+"); // "+r[c+2].name+"\n",g.push("argType"+c),y.push(r[c+2]);if(i&&(l="thisWired"+(l.length>0?", ":"")+l),p+=(f?"var rv = ":"")+"invoker(fn"+(l.length>0?", ":"")+l+");\n",u)p+="runDestructors(destructors);\n";else for(c=i?1:2;c<r.length;++c){var v=1===c?"thisWired":"arg"+(c-2)+"Wired";null!==r[c].destructorFunction&&(p+=v+"_dtor("+v+"); // "+r[c].name+"\n",g.push(v+"_dtor"),y.push(r[c].destructorFunction))}return f&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",g.push(p),function(n,r){if(!(n instanceof Function))throw new TypeError("new_ called with constructor type "+typeof n+" which is not a function");var t=sn(n.name||"unknownFunctionName",(function(){}));t.prototype=n.prototype;var e=new t,a=n.apply(e,r);return a instanceof Object?a:e}(Function,g).apply(null,y)}function Mn(n,t,e){r.hasOwnProperty(n)?((void 0===e||void 0!==r[n].overloadTable&&void 0!==r[n].overloadTable[e])&&_n("Cannot register public name '"+n+"' twice"),function(n,r,t){if(void 0===n[r].overloadTable){var e=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||_n("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[e.argCount]=e}}(r,n,n),r.hasOwnProperty(e)&&_n("Cannot register multiple overloads of a function with the same number of arguments ("+e+")!"),r[n].overloadTable[e]=t):(r[n]=t,void 0!==e&&(r[n].numArguments=e))}function Rn(n,t,e){return n.includes("j")?function(n,t,e){var a=r["dynCall_"+n];return e&&e.length?a.apply(null,[t].concat(e)):a.call(null,t)}(n,t,e):P.get(t).apply(null,e)}function Sn(n,r){var t,e,a,o=(n=dn(n)).includes("j")?(t=n,e=r,a=[],function(){a.length=arguments.length;for(var n=0;n<arguments.length;n++)a[n]=arguments[n];return Rn(t,e,a)}):P.get(r);return"function"!=typeof o&&_n("unknown function pointer with signature "+n+": "+r),o}var kn=void 0;function jn(n){var r=Qn(n),t=dn(r);return Zn(r),t}function On(n,r,t){switch(r){case 0:return t?function(n){return w[n]}:function(n){return b[n]};case 1:return t?function(n){return T[n>>1]}:function(n){return A[n>>1]};case 2:return t?function(n){return C[n>>2]}:function(n){return F[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var In={};function Un(){return"object"==typeof globalThis?globalThis:Function("return this")()}function Yn(n,r){var t=un[n];return void 0===t&&_n(r+" has unknown type "+jn(n)),t}var xn={};function Hn(n){try{return l.grow(n-_.byteLength+65535>>>16),I(l.buffer),1}catch(n){}}var Vn={};function Bn(){if(!Bn.strings){var n={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:c||"./this.program"};for(var r in Vn)n[r]=Vn[r];var t=[];for(var r in n)t.push(r+"="+n[r]);Bn.strings=t}return Bn.strings}function Nn(n){return n%4==0&&(n%100!=0||n%400==0)}function zn(n,r){for(var t=0,e=0;e<=r;t+=n[e++]);return t}var qn=[31,29,31,30,31,30,31,31,30,31,30,31],Ln=[31,28,31,30,31,30,31,31,30,31,30,31];function Gn(n,r){for(var t=new Date(n.getTime());r>0;){var e=Nn(t.getFullYear()),a=t.getMonth(),o=(e?qn:Ln)[a];if(!(r>o-t.getDate()))return t.setDate(t.getDate()+r),t;r-=o-t.getDate()+1,t.setDate(1),a<11?t.setMonth(a+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return t}function Jn(n,r,t,e){var a=C[e+40>>2],o={tm_sec:C[e>>2],tm_min:C[e+4>>2],tm_hour:C[e+8>>2],tm_mday:C[e+12>>2],tm_mon:C[e+16>>2],tm_year:C[e+20>>2],tm_wday:C[e+24>>2],tm_yday:C[e+28>>2],tm_isdst:C[e+32>>2],tm_gmtoff:C[e+36>>2],tm_zone:a?v(a):""},i=v(t),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var c in u)i=i.replace(new RegExp(c,"g"),u[c]);var f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s=["January","February","March","April","May","June","July","August","September","October","November","December"];function l(n,r,t){for(var e="number"==typeof n?n.toString():n||"";e.length<r;)e=t[0]+e;return e}function p(n,r){return l(n,r,"0")}function h(n,r){function t(n){return n<0?-1:n>0?1:0}var e;return 0===(e=t(n.getFullYear()-r.getFullYear()))&&0===(e=t(n.getMonth()-r.getMonth()))&&(e=t(n.getDate()-r.getDate())),e}function g(n){switch(n.getDay()){case 0:return new Date(n.getFullYear()-1,11,29);case 1:return n;case 2:return new Date(n.getFullYear(),0,3);case 3:return new Date(n.getFullYear(),0,2);case 4:return new Date(n.getFullYear(),0,1);case 5:return new Date(n.getFullYear()-1,11,31);case 6:return new Date(n.getFullYear()-1,11,30)}}function y(n){var r=Gn(new Date(n.tm_year+1900,0,1),n.tm_yday),t=new Date(r.getFullYear(),0,4),e=new Date(r.getFullYear()+1,0,4),a=g(t),o=g(e);return h(a,r)<=0?h(o,r)<=0?r.getFullYear()+1:r.getFullYear():r.getFullYear()-1}var _={"%a":function(n){return f[n.tm_wday].substring(0,3)},"%A":function(n){return f[n.tm_wday]},"%b":function(n){return s[n.tm_mon].substring(0,3)},"%B":function(n){return s[n.tm_mon]},"%C":function(n){return p((n.tm_year+1900)/100|0,2)},"%d":function(n){return p(n.tm_mday,2)},"%e":function(n){return l(n.tm_mday,2," ")},"%g":function(n){return y(n).toString().substring(2)},"%G":function(n){return y(n)},"%H":function(n){return p(n.tm_hour,2)},"%I":function(n){var r=n.tm_hour;return 0==r?r=12:r>12&&(r-=12),p(r,2)},"%j":function(n){return p(n.tm_mday+zn(Nn(n.tm_year+1900)?qn:Ln,n.tm_mon-1),3)},"%m":function(n){return p(n.tm_mon+1,2)},"%M":function(n){return p(n.tm_min,2)},"%n":function(){return"\n"},"%p":function(n){return n.tm_hour>=0&&n.tm_hour<12?"AM":"PM"},"%S":function(n){return p(n.tm_sec,2)},"%t":function(){return"\t"},"%u":function(n){return n.tm_wday||7},"%U":function(n){var r=new Date(n.tm_year+1900,0,1),t=0===r.getDay()?r:Gn(r,7-r.getDay()),e=new Date(n.tm_year+1900,n.tm_mon,n.tm_mday);if(h(t,e)<0){var a=zn(Nn(e.getFullYear())?qn:Ln,e.getMonth()-1)-31,o=31-t.getDate()+a+e.getDate();return p(Math.ceil(o/7),2)}return 0===h(t,r)?"01":"00"},"%V":function(n){var r,t=new Date(n.tm_year+1900,0,4),e=new Date(n.tm_year+1901,0,4),a=g(t),o=g(e),i=Gn(new Date(n.tm_year+1900,0,1),n.tm_yday);return h(i,a)<0?"53":h(o,i)<=0?"01":(r=a.getFullYear()<n.tm_year+1900?n.tm_yday+32-a.getDate():n.tm_yday+1-a.getDate(),p(Math.ceil(r/7),2))},"%w":function(n){return n.tm_wday},"%W":function(n){var r=new Date(n.tm_year,0,1),t=1===r.getDay()?r:Gn(r,0===r.getDay()?1:7-r.getDay()+1),e=new Date(n.tm_year+1900,n.tm_mon,n.tm_mday);if(h(t,e)<0){var a=zn(Nn(e.getFullYear())?qn:Ln,e.getMonth()-1)-31,o=31-t.getDate()+a+e.getDate();return p(Math.ceil(o/7),2)}return 0===h(t,r)?"01":"00"},"%y":function(n){return(n.tm_year+1900).toString().substring(2)},"%Y":function(n){return n.tm_year+1900},"%z":function(n){var r=n.tm_gmtoff,t=r>=0;return r=(r=Math.abs(r)/60)/60*100+r%60,(t?"+":"-")+String("0000"+r).slice(-4)},"%Z":function(n){return n.tm_zone},"%%":function(){return"%"}};for(var c in _)i.includes(c)&&(i=i.replace(new RegExp(c,"g"),_[c](o)));var b,T,A,F,E,D,P=(b=i,T=!1,F=A>0?A:m(b)+1,E=new Array(F),D=d(b,E,0,E.length),T&&(E.length=D),E);return P.length>r?0:(function(n,r){w.set(n,r)}(P,n),P.length-1)}pn=r.InternalError=ln(Error,"InternalError"),function(){for(var n=new Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);vn=n}(),mn=r.BindingError=ln(Error,"BindingError"),r.count_emval_handles=Cn,r.get_first_emval=Fn,kn=r.UnboundTypeError=ln(Error,"UnboundTypeError");var Xn={u:function(n){return Kn(n+$)+$},I:function(n,r){},p:function(n,r,t){throw new nn(n).init(r,t),n},h:function(n,r,t){return rn.varargs=t,0},A:function(n,r,t){return rn.varargs=t,0},B:function(n,r,t){rn.varargs=t},m:function(n){var r=tn[n];delete tn[n];var t=r.rawConstructor,e=r.rawDestructor,a=r.fields;gn([n],a.map((function(n){return n.getterReturnType})).concat(a.map((function(n){return n.setterArgumentType}))),(function(n){var o={};return a.forEach((function(r,t){var e=r.fieldName,i=n[t],u=r.getter,c=r.getterContext,f=n[t+a.length],s=r.setter,l=r.setterContext;o[e]={read:function(n){return i.fromWireType(u(c,n))},write:function(n,r){var t=[];s(l,n,f.toWireType(t,r)),en(t)}}})),[{name:r.name,fromWireType:function(n){var r={};for(var t in o)r[t]=o[t].read(n);return e(n),r},toWireType:function(n,r){for(var a in o)if(!(a in r))throw new TypeError('Missing field:  "'+a+'"');var i=t();for(a in o)o[a].write(i,r[a]);return null!==n&&n.push(e,i),i},argPackAdvance:8,readValueFromPointer:an,destructorFunction:e}]}))},r:function(n,r,t,e,a){},D:function(n,r,t,e,a){var o=yn(t);wn(n,{name:r=dn(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?e:a},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===t)e=w;else if(2===t)e=T;else{if(4!==t)throw new TypeError("Unknown boolean type size: "+r);e=C}return this.fromWireType(e[n>>o])},destructorFunction:null})},C:function(n,r){wn(n,{name:r=dn(r),fromWireType:function(n){var r=Tn[n].value;return An(n),r},toWireType:function(n,r){return En(r)},argPackAdvance:8,readValueFromPointer:an,destructorFunction:null})},j:function(n,r,t){var e=yn(t);wn(n,{name:r=dn(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+Dn(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:Pn(r,e),destructorFunction:null})},l:function(n,t,e,a,o,i){var u=function(n,r){for(var t=[],e=0;e<n;e++)t.push(C[(r>>2)+e]);return t}(t,e);n=dn(n),o=Sn(a,o),Mn(n,(function(){!function(n,r){var t=[],e={};throw r.forEach((function n(r){e[r]||un[r]||(cn[r]?cn[r].forEach(n):(t.push(r),e[r]=!0))})),new kn(n+": "+t.map(jn).join([", "]))}("Cannot call "+n+" due to unbound types",u)}),t-1),gn([],u,(function(e){var a=[e[0],null].concat(e.slice(1));return function(n,t,e){r.hasOwnProperty(n)||hn("Replacing nonexistant public symbol"),void 0!==r[n].overloadTable&&void 0!==e?r[n].overloadTable[e]=t:(r[n]=t,r[n].argCount=e)}(n,Wn(n,a,null,o,i),t-1),[]}))},c:function(n,r,t,e,a){r=dn(r),-1===a&&(a=4294967295);var o=yn(t),i=function(n){return n};if(0===e){var u=32-8*t;i=function(n){return n<<u>>>u}}var c=r.includes("unsigned");wn(n,{name:r,fromWireType:i,toWireType:function(n,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+Dn(t)+'" to '+this.name);if(t<e||t>a)throw new TypeError('Passing a number "'+Dn(t)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+e+", "+a+"]!");return c?t>>>0:0|t},argPackAdvance:8,readValueFromPointer:On(r,o,0!==e),destructorFunction:null})},b:function(n,r,t){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function a(n){var r=F,t=r[n>>=2],a=r[n+1];return new e(_,a,t)}wn(n,{name:t=dn(t),fromWireType:a,argPackAdvance:8,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},k:function(n,r){var t="std::string"===(r=dn(r));wn(n,{name:r,fromWireType:function(n){var r,e=F[n>>2];if(t)for(var a=n+4,o=0;o<=e;++o){var i=n+4+o;if(o==e||0==b[i]){var u=v(a,i-a);void 0===r?r=u:(r+=String.fromCharCode(0),r+=u),a=i+1}}else{var c=new Array(e);for(o=0;o<e;++o)c[o]=String.fromCharCode(b[n+4+o]);r=c.join("")}return Zn(n),r},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var e="string"==typeof r;e||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||_n("Cannot pass non-string to std::string");var a=(t&&e?function(){return m(r)}:function(){return r.length})(),o=Kn(4+a+1);if(F[o>>2]=a,t&&e)d(r,b,o+4,a+1);else if(e)for(var i=0;i<a;++i){var u=r.charCodeAt(i);u>255&&(Zn(o),_n("String has UTF-16 code units that do not fit in 8 bits")),b[o+4+i]=u}else for(i=0;i<a;++i)b[o+4+i]=r[i];return null!==n&&n.push(Zn,o),o},argPackAdvance:8,readValueFromPointer:an,destructorFunction:function(n){Zn(n)}})},g:function(n,r,t){var e,a,o,i,u;t=dn(t),2===r?(e=M,a=R,i=S,o=function(){return A},u=1):4===r&&(e=k,a=j,i=O,o=function(){return F},u=2),wn(n,{name:t,fromWireType:function(n){for(var t,a=F[n>>2],i=o(),c=n+4,f=0;f<=a;++f){var s=n+4+f*r;if(f==a||0==i[s>>u]){var l=e(c,s-c);void 0===t?t=l:(t+=String.fromCharCode(0),t+=l),c=s+r}}return Zn(n),t},toWireType:function(n,e){"string"!=typeof e&&_n("Cannot pass non-string to C++ string type "+t);var o=i(e),c=Kn(4+o+r);return F[c>>2]=o>>u,a(e,c+4,o+r),null!==n&&n.push(Zn,c),c},argPackAdvance:8,readValueFromPointer:an,destructorFunction:function(n){Zn(n)}})},n:function(n,r,t,e,a,o){tn[n]={name:dn(r),rawConstructor:Sn(t,e),rawDestructor:Sn(a,o),fields:[]}},d:function(n,r,t,e,a,o,i,u,c,f){tn[n].fields.push({fieldName:dn(r),getterReturnType:t,getter:Sn(e,a),getterContext:o,setterArgumentType:i,setter:Sn(u,c),setterContext:f})},E:function(n,r){wn(n,{isVoid:!0,name:r=dn(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,r){}})},e:An,H:function(n){return 0===n?En(Un()):(n=void 0===(t=In[r=n])?dn(r):t,En(Un()[n]));var r,t},G:function(n){n>4&&(Tn[n].refcount+=1)},o:function(n,t,e,a){n=function(n){return n||_n("Cannot use deleted val. handle = "+n),Tn[n].value}(n);var o=xn[t];return o||(o=function(n){for(var t="",e=0;e<n;++e)t+=(0!==e?", ":"")+"arg"+e;var a="return function emval_allocator_"+n+"(constructor, argTypes, args) {\n";for(e=0;e<n;++e)a+="var argType"+e+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+e+'], "parameter '+e+'");\nvar arg'+e+" = argType"+e+".readValueFromPointer(args);\nargs += argType"+e+"['argPackAdvance'];\n";return a+="var obj = new constructor("+t+");\nreturn __emval_register(obj);\n}\n",new Function("requireRegisteredType","Module","__emval_register",a)(Yn,r,En)}(t),xn[t]=o),o(n,e,a)},a:function(){N()},t:function(n,r,t){b.copyWithin(n,r,r+t)},f:function(n){var r,t,e=b.length,a=2147483648;if((n>>>=0)>a)return!1;for(var o=1;o<=4;o*=2){var i=e*(1+.2/o);if(i=Math.min(i,n+100663296),Hn(Math.min(a,((r=Math.max(n,i))%(t=65536)>0&&(r+=t-r%t),r))))return!0}return!1},w:function(n,r){var t=0;return Bn().forEach((function(e,a){var o=r+t;C[n+4*a>>2]=o,function(n,r,t){for(var e=0;e<n.length;++e)w[r++>>0]=n.charCodeAt(e);t||(w[r>>0]=0)}(e,o),t+=e.length+1})),0},x:function(n,r){var t=Bn();C[n>>2]=t.length;var e=0;return t.forEach((function(n){e+=n.length+1})),C[r>>2]=e,0},i:function(n){return 0},z:function(n,r,t,e){var a=rn.getStreamFromFD(n),o=rn.doReadv(a,r,t);return C[e>>2]=o,0},q:function(n,r,t,e,a){},y:function(n,r,t,e){for(var a=0,o=0;o<t;o++){for(var i=C[r+8*o>>2],u=C[r+(8*o+4)>>2],c=0;c<u;c++)rn.printChar(n,b[i+c]);a+=u}return C[e>>2]=a,0},s:function(n){},v:function(n,r,t,e){return Jn(n,r,t,e)},F:function(n){return n?(r=52,C[nr()>>2]=r,-1):0;var r}};!function(){var n={a:Xn};function t(n,t){var e,a=n.exports;r.asm=a,I((l=r.asm.J).buffer),P=r.asm.Q,e=r.asm.K,x.unshift(e),function(n){if(V--,r.monitorRunDependencies&&r.monitorRunDependencies(V),0==V&&B){var t=B;B=null,t()}}()}function e(n){t(n.instance)}function o(r){return(s||"function"!=typeof fetch?Promise.resolve().then((function(){return L(q)})):fetch(q,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+q+"'";return n.arrayBuffer()})).catch((function(){return L(q)}))).then((function(r){return WebAssembly.instantiate(r,n)})).then(r,(function(n){h("failed to asynchronously prepare wasm: "+n),N(n)}))}if(V++,r.monitorRunDependencies&&r.monitorRunDependencies(V),r.instantiateWasm)try{return r.instantiateWasm(n,t)}catch(n){return h("Module.instantiateWasm callback failed with error: "+n),!1}(s||"function"!=typeof WebAssembly.instantiateStreaming||z(q)||"function"!=typeof fetch?o(e):fetch(q,{credentials:"same-origin"}).then((function(r){return WebAssembly.instantiateStreaming(r,n).then(e,(function(n){return h("wasm streaming compile failed: "+n),h("falling back to ArrayBuffer instantiation"),o(e)}))}))).catch(a)}(),r.___wasm_call_ctors=function(){return(r.___wasm_call_ctors=r.asm.K).apply(null,arguments)};var Kn=r._malloc=function(){return(Kn=r._malloc=r.asm.L).apply(null,arguments)},Zn=r._free=function(){return(Zn=r._free=r.asm.M).apply(null,arguments)},Qn=r.___getTypeName=function(){return(Qn=r.___getTypeName=r.asm.N).apply(null,arguments)};r.___embind_register_native_and_builtin_types=function(){return(r.___embind_register_native_and_builtin_types=r.asm.O).apply(null,arguments)};var $n,nr=r.___errno_location=function(){return(nr=r.___errno_location=r.asm.P).apply(null,arguments)};function rr(n){function e(){$n||($n=!0,r.calledRun=!0,g||(G(x),t(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),function(){if(r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;)n=r.postRun.shift(),H.unshift(n);var n;G(H)}()))}V>0||(function(){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)n=r.preRun.shift(),Y.unshift(n);var n;G(Y)}(),V>0||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),e()}),1)):e()))}if(r.dynCall_jiji=function(){return(r.dynCall_jiji=r.asm.R).apply(null,arguments)},r.dynCall_iiji=function(){return(r.dynCall_iiji=r.asm.S).apply(null,arguments)},r.dynCall_iiiiij=function(){return(r.dynCall_iiiiij=r.asm.T).apply(null,arguments)},r.dynCall_iiiiijj=function(){return(r.dynCall_iiiiijj=r.asm.U).apply(null,arguments)},r.dynCall_iiiiiijj=function(){return(r.dynCall_iiiiiijj=r.asm.V).apply(null,arguments)},r.dynCall_viijii=function(){return(r.dynCall_viijii=r.asm.W).apply(null,arguments)},B=function n(){$n||rr(),$n||(B=n)},r.run=rr,r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();return rr(),r.ready});t.default=a}));