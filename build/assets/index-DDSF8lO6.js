(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Td(r,e){if(typeof r>"u"||!r.document)throw new Error("jQuery requires a window with a document");var t=[],n=Object.getPrototypeOf,i=t.slice,s=t.flat?function(a){return t.flat.call(a)}:function(a){return t.concat.apply([],a)},o=t.push,c=t.indexOf,u={},f=u.toString,p=u.hasOwnProperty,m=p.toString,g=m.call(Object),v={};function S(a){return a==null?a+"":typeof a=="object"?u[f.call(a)]||"object":typeof a}function T(a){return a!=null&&a===a.window}function b(a){var l=!!a&&a.length,d=S(a);return typeof a=="function"||T(a)?!1:d==="array"||l===0||typeof l=="number"&&l>0&&l-1 in a}var _=r.document,D={type:!0,src:!0,nonce:!0,noModule:!0};function P(a,l,d){d=d||_;var x,y=d.createElement("script");y.text=a;for(x in D)l&&l[x]&&(y[x]=l[x]);d.head.appendChild(y).parentNode&&y.parentNode.removeChild(y)}var L="4.0.0",B=/HTML$/i,h=function(a,l){return new h.fn.init(a,l)};h.fn=h.prototype={jquery:L,constructor:h,length:0,toArray:function(){return i.call(this)},get:function(a){return a==null?i.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var l=h.merge(this.constructor(),a);return l.prevObject=this,l},each:function(a){return h.each(this,a)},map:function(a){return this.pushStack(h.map(this,function(l,d){return a.call(l,d,l)}))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(h.grep(this,function(a,l){return(l+1)%2}))},odd:function(){return this.pushStack(h.grep(this,function(a,l){return l%2}))},eq:function(a){var l=this.length,d=+a+(a<0?l:0);return this.pushStack(d>=0&&d<l?[this[d]]:[])},end:function(){return this.prevObject||this.constructor()}},h.extend=h.fn.extend=function(){var a,l,d,x,y,M,R=arguments[0]||{},O=1,N=arguments.length,W=!1;for(typeof R=="boolean"&&(W=R,R=arguments[O]||{},O++),typeof R!="object"&&typeof R!="function"&&(R={}),O===N&&(R=this,O--);O<N;O++)if((a=arguments[O])!=null)for(l in a)x=a[l],!(l==="__proto__"||R===x)&&(W&&x&&(h.isPlainObject(x)||(y=Array.isArray(x)))?(d=R[l],y&&!Array.isArray(d)?M=[]:!y&&!h.isPlainObject(d)?M={}:M=d,y=!1,R[l]=h.extend(W,M,x)):x!==void 0&&(R[l]=x));return R},h.extend({expando:"jQuery"+(L+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isPlainObject:function(a){var l,d;return!a||f.call(a)!=="[object Object]"?!1:(l=n(a),l?(d=p.call(l,"constructor")&&l.constructor,typeof d=="function"&&m.call(d)===g):!0)},isEmptyObject:function(a){var l;for(l in a)return!1;return!0},globalEval:function(a,l,d){P(a,{nonce:l&&l.nonce},d)},each:function(a,l){var d,x=0;if(b(a))for(d=a.length;x<d&&l.call(a[x],x,a[x])!==!1;x++);else for(x in a)if(l.call(a[x],x,a[x])===!1)break;return a},text:function(a){var l,d="",x=0,y=a.nodeType;if(!y)for(;l=a[x++];)d+=h.text(l);return y===1||y===11?a.textContent:y===9?a.documentElement.textContent:y===3||y===4?a.nodeValue:d},makeArray:function(a,l){var d=l||[];return a!=null&&(b(Object(a))?h.merge(d,typeof a=="string"?[a]:a):o.call(d,a)),d},inArray:function(a,l,d){return l==null?-1:c.call(l,a,d)},isXMLDoc:function(a){var l=a&&a.namespaceURI,d=a&&(a.ownerDocument||a).documentElement;return!B.test(l||d&&d.nodeName||"HTML")},contains:function(a,l){var d=l&&l.parentNode;return a===d||!!(d&&d.nodeType===1&&(a.contains?a.contains(d):a.compareDocumentPosition&&a.compareDocumentPosition(d)&16))},merge:function(a,l){for(var d=+l.length,x=0,y=a.length;x<d;x++)a[y++]=l[x];return a.length=y,a},grep:function(a,l,d){for(var x,y=[],M=0,R=a.length,O=!d;M<R;M++)x=!l(a[M],M),x!==O&&y.push(a[M]);return y},map:function(a,l,d){var x,y,M=0,R=[];if(b(a))for(x=a.length;M<x;M++)y=l(a[M],M,d),y!=null&&R.push(y);else for(M in a)y=l(a[M],M,d),y!=null&&R.push(y);return s(R)},guid:1,support:v}),typeof Symbol=="function"&&(h.fn[Symbol.iterator]=t[Symbol.iterator]),h.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,l){u["[object "+l+"]"]=l.toLowerCase()});function I(a,l){return a.nodeName&&a.nodeName.toLowerCase()===l.toLowerCase()}var z=t.pop,E="[\\x20\\t\\r\\n\\f]",w=_.documentMode,F=w&&new RegExp(":enabled|:disabled|\\["+E+"*name"+E+"*="+E+`*(?:''|"")`),H=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),G="(?:\\\\[\\da-fA-F]{1,6}"+E+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",$=new RegExp("^"+E+"*([>+~]|"+E+")"+E+"*"),ie=new RegExp(E+"|>"),ae=/[+~]/,fe=_.documentElement,re=fe.matches||fe.msMatchesSelector;function me(){var a=[];function l(d,x){return a.push(d+" ")>h.expr.cacheLength&&delete l[a.shift()],l[d+" "]=x}return l}function _e(a){return a&&typeof a.getElementsByTagName<"u"&&a}var Ie="\\["+E+"*("+G+")(?:"+E+"*([*^$|!~]?=)"+E+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+G+"))|)"+E+"*\\]",it=":("+G+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Ie+")*)|.*)\\)|)",ht={ID:new RegExp("^#("+G+")"),CLASS:new RegExp("^\\.("+G+")"),TAG:new RegExp("^("+G+"|[*])"),ATTR:new RegExp("^"+Ie),PSEUDO:new RegExp("^"+it),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i")},bt=new RegExp(it),xt=new RegExp("\\\\[\\da-fA-F]{1,6}"+E+"?|\\\\([^\\r\\n\\f])","g"),ce=function(a,l){var d="0x"+a.slice(1)-65536;return l||(d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,d&1023|56320))};function oe(a){return a.replace(xt,ce)}function Me(a){h.error("Syntax error, unrecognized expression: "+a)}var We=new RegExp("^"+E+"*,"+E+"*"),De=me();function Qe(a,l){var d,x,y,M,R,O,N,W=De[a+" "];if(W)return l?0:W.slice(0);for(R=a,O=[],N=h.expr.preFilter;R;){(!d||(x=We.exec(R)))&&(x&&(R=R.slice(x[0].length)||R),O.push(y=[])),d=!1,(x=$.exec(R))&&(d=x.shift(),y.push({value:d,type:x[0].replace(H," ")}),R=R.slice(d.length));for(M in ht)(x=h.expr.match[M].exec(R))&&(!N[M]||(x=N[M](x)))&&(d=x.shift(),y.push({value:d,type:M,matches:x}),R=R.slice(d.length));if(!d)break}return l?R.length:R?Me(a):De(a,O).slice(0)}var kt={ATTR:function(a){return a[1]=oe(a[1]),a[3]=oe(a[3]||a[4]||a[5]||""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1].slice(0,3)==="nth"?(a[3]||Me(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*(a[3]==="even"||a[3]==="odd")),a[5]=+(a[7]+a[8]||a[3]==="odd")):a[3]&&Me(a[0]),a},PSEUDO:function(a){var l,d=!a[6]&&a[2];return ht.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":d&&bt.test(d)&&(l=Qe(d,!0))&&(l=d.indexOf(")",d.length-l)-d.length)&&(a[0]=a[0].slice(0,l),a[2]=d.slice(0,l)),a.slice(0,3))}};function et(a){for(var l=0,d=a.length,x="";l<d;l++)x+=a[l].value;return x}function dt(a,l,d,x,y,M,R){var O=0,N=a.length,W=d==null;if(S(d)==="object"){y=!0;for(O in d)dt(a,l,O,d[O],!0,M,R)}else if(x!==void 0&&(y=!0,typeof x!="function"&&(R=!0),W&&(R?(l.call(a,x),l=null):(W=l,l=function(K,te,q){return W.call(h(K),q)})),l))for(;O<N;O++)l(a[O],d,R?x:x.call(a[O],O,l(a[O],d)));return y?a:W?l.call(a):N?l(a[0],d):M}var k=/[^\x20\t\r\n\f]+/g;h.fn.extend({attr:function(a,l){return dt(this,h.attr,a,l,arguments.length>1)},removeAttr:function(a){return this.each(function(){h.removeAttr(this,a)})}}),h.extend({attr:function(a,l,d){var x,y,M=a.nodeType;if(!(M===3||M===8||M===2)){if(typeof a.getAttribute>"u")return h.prop(a,l,d);if((M!==1||!h.isXMLDoc(a))&&(y=h.attrHooks[l.toLowerCase()]),d!==void 0){if(d===null||d===!1&&l.toLowerCase().indexOf("aria-")!==0){h.removeAttr(a,l);return}return y&&"set"in y&&(x=y.set(a,d,l))!==void 0?x:(a.setAttribute(l,d),d)}return y&&"get"in y&&(x=y.get(a,l))!==null?x:(x=a.getAttribute(l),x??void 0)}},attrHooks:{},removeAttr:function(a,l){var d,x=0,y=l&&l.match(k);if(y&&a.nodeType===1)for(;d=y[x++];)a.removeAttribute(d)}}),w&&(h.attrHooks.type={set:function(a,l){if(l==="radio"&&I(a,"input")){var d=a.value;return a.setAttribute("type",l),d&&(a.value=d),l}}});var st=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function at(a,l){return l?a==="\0"?"�":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a}h.escapeSelector=function(a){return(a+"").replace(st,at)};var Et=t.sort,Le=t.splice,Ct;function ke(a,l){if(a===l)return Ct=!0,0;var d=!a.compareDocumentPosition-!l.compareDocumentPosition;return d||(d=(a.ownerDocument||a)==(l.ownerDocument||l)?a.compareDocumentPosition(l):1,d&1?a==_||a.ownerDocument==_&&h.contains(_,a)?-1:l==_||l.ownerDocument==_&&h.contains(_,l)?1:0:d&4?-1:1)}h.uniqueSort=function(a){var l,d=[],x=0,y=0;if(Ct=!1,Et.call(a,ke),Ct){for(;l=a[y++];)l===a[y]&&(x=d.push(y));for(;x--;)Le.call(a,d[x],1)}return a},h.fn.uniqueSort=function(){return this.pushStack(h.uniqueSort(i.apply(this)))};var qe,U,A,Z,se,le=0,ne=0,Fe=me(),Se=me(),Be=me(),Ne=new RegExp(E+"+","g"),he=new RegExp("^"+G+"$"),ve=h.extend({needsContext:new RegExp("^"+E+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)","i")},ht),je=/^(?:input|select|textarea|button)$/i,Ge=/^h\d$/i,Ae=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ke=function(){Xe()},V=mt(function(a){return a.disabled===!0&&I(a,"fieldset")},{dir:"parentNode",next:"legend"});function xe(a,l,d,x){var y,M,R,O,N,W,K,te=l&&l.ownerDocument,q=l?l.nodeType:9;if(d=d||[],typeof a!="string"||!a||q!==1&&q!==9&&q!==11)return d;if(!x&&(Xe(l),l=l||A,se)){if(q!==11&&(N=Ae.exec(a)))if(y=N[1]){if(q===9)return(R=l.getElementById(y))&&o.call(d,R),d;if(te&&(R=te.getElementById(y))&&h.contains(l,R))return o.call(d,R),d}else{if(N[2])return o.apply(d,l.getElementsByTagName(a)),d;if((y=N[3])&&l.getElementsByClassName)return o.apply(d,l.getElementsByClassName(y)),d}if(!Be[a+" "]&&(!F||!F.test(a))){if(K=a,te=l,q===1&&(ie.test(a)||$.test(a))){for(te=ae.test(a)&&_e(l.parentNode)||l,(te!=l||w)&&((O=l.getAttribute("id"))?O=h.escapeSelector(O):l.setAttribute("id",O=h.expando)),W=Qe(a),M=W.length;M--;)W[M]=(O?"#"+O:":scope")+" "+et(W[M]);K=W.join(",")}try{return o.apply(d,te.querySelectorAll(K)),d}catch{Be(a,!0)}finally{O===h.expando&&l.removeAttribute("id")}}}return Gr(a.replace(H,"$1"),l,d,x)}function pe(a){return a[h.expando]=!0,a}function ye(a){return function(l){return I(l,"input")&&l.type===a}}function de(a){return function(l){return(I(l,"input")||I(l,"button"))&&l.type===a}}function ue(a){return function(l){return"form"in l?l.parentNode&&l.disabled===!1?"label"in l?"label"in l.parentNode?l.parentNode.disabled===a:l.disabled===a:l.isDisabled===a||l.isDisabled!==!a&&V(l)===a:l.disabled===a:"label"in l?l.disabled===a:!1}}function we(a){return pe(function(l){return l=+l,pe(function(d,x){for(var y,M=a([],d.length,l),R=M.length;R--;)d[y=M[R]]&&(d[y]=!(x[y]=d[y]))})})}function Xe(a){var l,d=a?a.ownerDocument||a:_;d==A||d.nodeType!==9||(A=d,Z=A.documentElement,se=!h.isXMLDoc(A),w&&_!=A&&(l=A.defaultView)&&l.top!==l&&l.addEventListener("unload",Ke))}xe.matches=function(a,l){return xe(a,null,null,l)},xe.matchesSelector=function(a,l){if(Xe(a),se&&!Be[l+" "]&&(!F||!F.test(l)))try{return re.call(a,l)}catch{Be(l,!0)}return xe(l,A,null,[a]).length>0},h.expr={cacheLength:50,createPseudo:pe,match:ve,find:{ID:function(a,l){if(typeof l.getElementById<"u"&&se){var d=l.getElementById(a);return d?[d]:[]}},TAG:function(a,l){return typeof l.getElementsByTagName<"u"?l.getElementsByTagName(a):l.querySelectorAll(a)},CLASS:function(a,l){if(typeof l.getElementsByClassName<"u"&&se)return l.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:kt,filter:{ID:function(a){var l=oe(a);return function(d){return d.getAttribute("id")===l}},TAG:function(a){var l=oe(a).toLowerCase();return a==="*"?function(){return!0}:function(d){return I(d,l)}},CLASS:function(a){var l=Fe[a+" "];return l||(l=new RegExp("(^|"+E+")"+a+"("+E+"|$)"))&&Fe(a,function(d){return l.test(typeof d.className=="string"&&d.className||typeof d.getAttribute<"u"&&d.getAttribute("class")||"")})},ATTR:function(a,l,d){return function(x){var y=h.attr(x,a);return y==null?l==="!=":l?(y+="",l==="="?y===d:l==="!="?y!==d:l==="^="?d&&y.indexOf(d)===0:l==="*="?d&&y.indexOf(d)>-1:l==="$="?d&&y.slice(-d.length)===d:l==="~="?(" "+y.replace(Ne," ")+" ").indexOf(d)>-1:l==="|="?y===d||y.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,l,d,x,y){var M=a.slice(0,3)!=="nth",R=a.slice(-4)!=="last",O=l==="of-type";return x===1&&y===0?function(N){return!!N.parentNode}:function(N,W,K){var te,q,ee,Re,Ze,Ye=M!==R?"nextSibling":"previousSibling",Ut=N.parentNode,Lt=O&&N.nodeName.toLowerCase(),pn=!K&&!O,Zt=!1;if(Ut){if(M){for(;Ye;){for(ee=N;ee=ee[Ye];)if(O?I(ee,Lt):ee.nodeType===1)return!1;Ze=Ye=a==="only"&&!Ze&&"nextSibling"}return!0}if(Ze=[R?Ut.firstChild:Ut.lastChild],R&&pn){for(q=Ut[h.expando]||(Ut[h.expando]={}),te=q[a]||[],Re=te[0]===le&&te[1],Zt=Re&&te[2],ee=Re&&Ut.childNodes[Re];ee=++Re&&ee&&ee[Ye]||(Zt=Re=0)||Ze.pop();)if(ee.nodeType===1&&++Zt&&ee===N){q[a]=[le,Re,Zt];break}}else if(pn&&(q=N[h.expando]||(N[h.expando]={}),te=q[a]||[],Re=te[0]===le&&te[1],Zt=Re),Zt===!1)for(;(ee=++Re&&ee&&ee[Ye]||(Zt=Re=0)||Ze.pop())&&!((O?I(ee,Lt):ee.nodeType===1)&&++Zt&&(pn&&(q=ee[h.expando]||(ee[h.expando]={}),q[a]=[le,Zt]),ee===N)););return Zt-=y,Zt===x||Zt%x===0&&Zt/x>=0}}},PSEUDO:function(a,l){var d=h.expr.pseudos[a]||h.expr.setFilters[a.toLowerCase()]||Me("unsupported pseudo: "+a);return d[h.expando]?d(l):d}},pseudos:{not:pe(function(a){var l=[],d=[],x=Ai(a.replace(H,"$1"));return x[h.expando]?pe(function(y,M,R,O){for(var N,W=x(y,null,O,[]),K=y.length;K--;)(N=W[K])&&(y[K]=!(M[K]=N))}):function(y,M,R){return l[0]=y,x(l,null,R,d),l[0]=null,!d.pop()}}),has:pe(function(a){return function(l){return xe(a,l).length>0}}),contains:pe(function(a){return a=oe(a),function(l){return(l.textContent||h.text(l)).indexOf(a)>-1}}),lang:pe(function(a){return he.test(a||"")||Me("unsupported lang: "+a),a=oe(a).toLowerCase(),function(l){var d;do if(d=se?l.lang:l.getAttribute("xml:lang")||l.getAttribute("lang"))return d=d.toLowerCase(),d===a||d.indexOf(a+"-")===0;while((l=l.parentNode)&&l.nodeType===1);return!1}}),target:function(a){var l=r.location&&r.location.hash;return l&&l.slice(1)===a.id},root:function(a){return a===Z},focus:function(a){return a===A.activeElement&&A.hasFocus()&&!!(a.type||a.href||~a.tabIndex)},enabled:ue(!1),disabled:ue(!0),checked:function(a){return I(a,"input")&&!!a.checked||I(a,"option")&&!!a.selected},selected:function(a){return w&&a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!h.expr.pseudos.empty(a)},header:function(a){return Ge.test(a.nodeName)},input:function(a){return je.test(a.nodeName)},button:function(a){return I(a,"input")&&a.type==="button"||I(a,"button")},text:function(a){return I(a,"input")&&a.type==="text"},first:we(function(){return[0]}),last:we(function(a,l){return[l-1]}),eq:we(function(a,l,d){return[d<0?d+l:d]}),even:we(function(a,l){for(var d=0;d<l;d+=2)a.push(d);return a}),odd:we(function(a,l){for(var d=1;d<l;d+=2)a.push(d);return a}),lt:we(function(a,l,d){var x;for(d<0?x=d+l:d>l?x=l:x=d;--x>=0;)a.push(x);return a}),gt:we(function(a,l,d){for(var x=d<0?d+l:d;++x<l;)a.push(x);return a})}},h.expr.pseudos.nth=h.expr.pseudos.eq;for(qe in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})h.expr.pseudos[qe]=ye(qe);for(qe in{submit:!0,reset:!0})h.expr.pseudos[qe]=de(qe);function At(){}At.prototype=h.expr.pseudos,h.expr.setFilters=new At;function mt(a,l,d){var x=l.dir,y=l.next,M=y||x,R=d&&M==="parentNode",O=ne++;return l.first?function(N,W,K){for(;N=N[x];)if(N.nodeType===1||R)return a(N,W,K);return!1}:function(N,W,K){var te,q,ee=[le,O];if(K){for(;N=N[x];)if((N.nodeType===1||R)&&a(N,W,K))return!0}else for(;N=N[x];)if(N.nodeType===1||R)if(q=N[h.expando]||(N[h.expando]={}),y&&I(N,y))N=N[x]||N;else{if((te=q[M])&&te[0]===le&&te[1]===O)return ee[2]=te[2];if(q[M]=ee,ee[2]=a(N,W,K))return!0}return!1}}function un(a){return a.length>1?function(l,d,x){for(var y=a.length;y--;)if(!a[y](l,d,x))return!1;return!0}:a[0]}function gn(a,l,d){for(var x=0,y=l.length;x<y;x++)xe(a,l[x],d);return d}function Yi(a,l,d,x,y){for(var M,R=[],O=0,N=a.length,W=l!=null;O<N;O++)(M=a[O])&&(!d||d(M,x,y))&&(R.push(M),W&&l.push(O));return R}function Ki(a,l,d,x,y,M){return x&&!x[h.expando]&&(x=Ki(x)),y&&!y[h.expando]&&(y=Ki(y,M)),pe(function(R,O,N,W){var K,te,q,ee,Re=[],Ze=[],Ye=O.length,Ut=R||gn(l||"*",N.nodeType?[N]:N,[]),Lt=a&&(R||!l)?Yi(Ut,Re,a,N,W):Ut;if(d?(ee=y||(R?a:Ye||x)?[]:O,d(Lt,ee,N,W)):ee=Lt,x)for(K=Yi(ee,Ze),x(K,[],N,W),te=K.length;te--;)(q=K[te])&&(ee[Ze[te]]=!(Lt[Ze[te]]=q));if(R){if(y||a){if(y){for(K=[],te=ee.length;te--;)(q=ee[te])&&K.push(Lt[te]=q);y(null,ee=[],K,W)}for(te=ee.length;te--;)(q=ee[te])&&(K=y?c.call(R,q):Re[te])>-1&&(R[K]=!(O[K]=q))}}else ee=Yi(ee===O?ee.splice(Ye,ee.length):ee),y?y(null,O,ee,W):o.apply(O,ee)})}function Zi(a){for(var l,d,x,y=a.length,M=h.expr.relative[a[0].type],R=M||h.expr.relative[" "],O=M?1:0,N=mt(function(te){return te===l},R,!0),W=mt(function(te){return c.call(l,te)>-1},R,!0),K=[function(te,q,ee){var Re=!M&&(ee||q!=U)||((l=q).nodeType?N(te,q,ee):W(te,q,ee));return l=null,Re}];O<y;O++)if(d=h.expr.relative[a[O].type])K=[mt(un(K),d)];else{if(d=h.expr.filter[a[O].type].apply(null,a[O].matches),d[h.expando]){for(x=++O;x<y&&!h.expr.relative[a[x].type];x++);return Ki(O>1&&un(K),O>1&&et(a.slice(0,O-1).concat({value:a[O-2].type===" "?"*":""})).replace(H,"$1"),d,O<x&&Zi(a.slice(O,x)),x<y&&Zi(a=a.slice(x)),x<y&&et(a))}K.push(d)}return un(K)}function jn(a,l){var d=l.length>0,x=a.length>0,y=function(M,R,O,N,W){var K,te,q,ee=0,Re="0",Ze=M&&[],Ye=[],Ut=U,Lt=M||x&&h.expr.find.TAG("*",W),pn=le+=Ut==null?1:Math.random()||.1;for(W&&(U=R==A||R||W);(K=Lt[Re])!=null;Re++){if(x&&K){for(te=0,!R&&K.ownerDocument!=A&&(Xe(K),O=!se);q=a[te++];)if(q(K,R||A,O)){o.call(N,K);break}W&&(le=pn)}d&&((K=!q&&K)&&ee--,M&&Ze.push(K))}if(ee+=Re,d&&Re!==ee){for(te=0;q=l[te++];)q(Ze,Ye,R,O);if(M){if(ee>0)for(;Re--;)Ze[Re]||Ye[Re]||(Ye[Re]=z.call(N));Ye=Yi(Ye)}o.apply(N,Ye),W&&!M&&Ye.length>0&&ee+l.length>1&&h.uniqueSort(N)}return W&&(le=pn,U=Ut),Ze};return d?pe(y):y}function Ai(a,l){var d,x=[],y=[],M=Se[a+" "];if(!M){for(l||(l=Qe(a)),d=l.length;d--;)M=Zi(l[d]),M[h.expando]?x.push(M):y.push(M);M=Se(a,jn(y,x)),M.selector=a}return M}function Gr(a,l,d,x){var y,M,R,O,N,W=typeof a=="function"&&a,K=!x&&Qe(a=W.selector||a);if(d=d||[],K.length===1){if(M=K[0]=K[0].slice(0),M.length>2&&(R=M[0]).type==="ID"&&l.nodeType===9&&se&&h.expr.relative[M[1].type]){if(l=(h.expr.find.ID(oe(R.matches[0]),l)||[])[0],l)W&&(l=l.parentNode);else return d;a=a.slice(M.shift().value.length)}for(y=ve.needsContext.test(a)?0:M.length;y--&&(R=M[y],!h.expr.relative[O=R.type]);)if((N=h.expr.find[O])&&(x=N(oe(R.matches[0]),ae.test(M[0].type)&&_e(l.parentNode)||l))){if(M.splice(y,1),a=x.length&&et(M),!a)return o.apply(d,x),d;break}}return(W||Ai(a,K))(x,l,!se,d,!l||ae.test(a)&&_e(l.parentNode)||l),d}Xe(),h.find=xe,xe.compile=Ai,xe.select=Gr,xe.setDocument=Xe,xe.tokenize=Qe;function Yn(a,l,d){for(var x=[],y=d!==void 0;(a=a[l])&&a.nodeType!==9;)if(a.nodeType===1){if(y&&h(a).is(d))break;x.push(a)}return x}function wi(a,l){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==l&&d.push(a);return d}var Wr=h.expr.match.needsContext,Ri=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Xr(a){return a[0]==="<"&&a[a.length-1]===">"&&a.length>=3}function $i(a,l,d){return typeof l=="function"?h.grep(a,function(x,y){return!!l.call(x,y,x)!==d}):l.nodeType?h.grep(a,function(x){return x===l!==d}):typeof l!="string"?h.grep(a,function(x){return c.call(l,x)>-1!==d}):h.filter(l,a,d)}h.filter=function(a,l,d){var x=l[0];return d&&(a=":not("+a+")"),l.length===1&&x.nodeType===1?h.find.matchesSelector(x,a)?[x]:[]:h.find.matches(a,h.grep(l,function(y){return y.nodeType===1}))},h.fn.extend({find:function(a){var l,d,x=this.length,y=this;if(typeof a!="string")return this.pushStack(h(a).filter(function(){for(l=0;l<x;l++)if(h.contains(y[l],this))return!0}));for(d=this.pushStack([]),l=0;l<x;l++)h.find(a,y[l],d);return x>1?h.uniqueSort(d):d},filter:function(a){return this.pushStack($i(this,a||[],!1))},not:function(a){return this.pushStack($i(this,a||[],!0))},is:function(a){return!!$i(this,typeof a=="string"&&Wr.test(a)?h(a):a||[],!1).length}});var Ji,Ca=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Pa=h.fn.init=function(a,l){var d,x;if(!a)return this;if(a.nodeType)return this[0]=a,this.length=1,this;if(typeof a=="function")return Ji.ready!==void 0?Ji.ready(a):a(h);if(d=a+"",Xr(d))d=[null,a,null];else if(typeof a=="string")d=Ca.exec(a);else return h.makeArray(a,this);if(d&&(d[1]||!l))if(d[1]){if(l=l instanceof h?l[0]:l,h.merge(this,h.parseHTML(d[1],l&&l.nodeType?l.ownerDocument||l:_,!0)),Ri.test(d[1])&&h.isPlainObject(l))for(d in l)typeof this[d]=="function"?this[d](l[d]):this.attr(d,l[d]);return this}else return x=_.getElementById(d[2]),x&&(this[0]=x,this.length=1),this;else return!l||l.jquery?(l||Ji).find(a):this.constructor(l).find(a)};Pa.prototype=h.fn,Ji=h(_);var La=/^(?:parents|prev(?:Until|All))/,Da={children:!0,contents:!0,next:!0,prev:!0};h.fn.extend({has:function(a){var l=h(a,this),d=l.length;return this.filter(function(){for(var x=0;x<d;x++)if(h.contains(this,l[x]))return!0})},closest:function(a,l){var d,x=0,y=this.length,M=[],R=typeof a!="string"&&h(a);if(!Wr.test(a)){for(;x<y;x++)for(d=this[x];d&&d!==l;d=d.parentNode)if(d.nodeType<11&&(R?R.index(d)>-1:d.nodeType===1&&h.find.matchesSelector(d,a))){M.push(d);break}}return this.pushStack(M.length>1?h.uniqueSort(M):M)},index:function(a){return a?typeof a=="string"?c.call(h(a),this[0]):c.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,l){return this.pushStack(h.uniqueSort(h.merge(this.get(),h(a,l))))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}});function Ss(a,l){for(;(a=a[l])&&a.nodeType!==1;);return a}h.each({parent:function(a){var l=a.parentNode;return l&&l.nodeType!==11?l:null},parents:function(a){return Yn(a,"parentNode")},parentsUntil:function(a,l,d){return Yn(a,"parentNode",d)},next:function(a){return Ss(a,"nextSibling")},prev:function(a){return Ss(a,"previousSibling")},nextAll:function(a){return Yn(a,"nextSibling")},prevAll:function(a){return Yn(a,"previousSibling")},nextUntil:function(a,l,d){return Yn(a,"nextSibling",d)},prevUntil:function(a,l,d){return Yn(a,"previousSibling",d)},siblings:function(a){return wi((a.parentNode||{}).firstChild,a)},children:function(a){return wi(a.firstChild)},contents:function(a){return a.contentDocument!=null&&n(a.contentDocument)?a.contentDocument:(I(a,"template")&&(a=a.content||a),h.merge([],a.childNodes))}},function(a,l){h.fn[a]=function(d,x){var y=h.map(this,l,d);return a.slice(-5)!=="Until"&&(x=d),x&&typeof x=="string"&&(y=h.filter(x,y)),this.length>1&&(Da[a]||h.uniqueSort(y),La.test(a)&&y.reverse()),this.pushStack(y)}});function C(a){var l={};return h.each(a.match(k)||[],function(d,x){l[x]=!0}),l}h.Callbacks=function(a){a=typeof a=="string"?C(a):h.extend({},a);var l,d,x,y,M=[],R=[],O=-1,N=function(){for(y=y||a.once,x=l=!0;R.length;O=-1)for(d=R.shift();++O<M.length;)M[O].apply(d[0],d[1])===!1&&a.stopOnFalse&&(O=M.length,d=!1);a.memory||(d=!1),l=!1,y&&(d?M=[]:M="")},W={add:function(){return M&&(d&&!l&&(O=M.length-1,R.push(d)),(function K(te){h.each(te,function(q,ee){typeof ee=="function"?(!a.unique||!W.has(ee))&&M.push(ee):ee&&ee.length&&S(ee)!=="string"&&K(ee)})})(arguments),d&&!l&&N()),this},remove:function(){return h.each(arguments,function(K,te){for(var q;(q=h.inArray(te,M,q))>-1;)M.splice(q,1),q<=O&&O--}),this},has:function(K){return K?h.inArray(K,M)>-1:M.length>0},empty:function(){return M&&(M=[]),this},disable:function(){return y=R=[],M=d="",this},disabled:function(){return!M},lock:function(){return y=R=[],!d&&!l&&(M=d=""),this},locked:function(){return!!y},fireWith:function(K,te){return y||(te=te||[],te=[K,te.slice?te.slice():te],R.push(te),l||N()),this},fire:function(){return W.fireWith(this,arguments),this},fired:function(){return!!x}};return W};function X(a){return a}function J(a){throw a}function Q(a,l,d,x){var y;try{a&&typeof(y=a.promise)=="function"?y.call(a).done(l).fail(d):a&&typeof(y=a.then)=="function"?y.call(a,l,d):l.apply(void 0,[a].slice(x))}catch(M){d(M)}}h.extend({Deferred:function(a){var l=[["notify","progress",h.Callbacks("memory"),h.Callbacks("memory"),2],["resolve","done",h.Callbacks("once memory"),h.Callbacks("once memory"),0,"resolved"],["reject","fail",h.Callbacks("once memory"),h.Callbacks("once memory"),1,"rejected"]],d="pending",x={state:function(){return d},always:function(){return y.done(arguments).fail(arguments),this},catch:function(M){return x.then(null,M)},pipe:function(){var M=arguments;return h.Deferred(function(R){h.each(l,function(O,N){var W=typeof M[N[4]]=="function"&&M[N[4]];y[N[1]](function(){var K=W&&W.apply(this,arguments);K&&typeof K.promise=="function"?K.promise().progress(R.notify).done(R.resolve).fail(R.reject):R[N[0]+"With"](this,W?[K]:arguments)})}),M=null}).promise()},then:function(M,R,O){var N=0;function W(K,te,q,ee){return function(){var Re=this,Ze=arguments,Ye=function(){var Lt,pn;if(!(K<N)){if(Lt=q.apply(Re,Ze),Lt===te.promise())throw new TypeError("Thenable self-resolution");pn=Lt&&(typeof Lt=="object"||typeof Lt=="function")&&Lt.then,typeof pn=="function"?ee?pn.call(Lt,W(N,te,X,ee),W(N,te,J,ee)):(N++,pn.call(Lt,W(N,te,X,ee),W(N,te,J,ee),W(N,te,X,te.notifyWith))):(q!==X&&(Re=void 0,Ze=[Lt]),(ee||te.resolveWith)(Re,Ze))}},Ut=ee?Ye:function(){try{Ye()}catch(Lt){h.Deferred.exceptionHook&&h.Deferred.exceptionHook(Lt,Ut.error),K+1>=N&&(q!==J&&(Re=void 0,Ze=[Lt]),te.rejectWith(Re,Ze))}};K?Ut():(h.Deferred.getErrorHook&&(Ut.error=h.Deferred.getErrorHook()),r.setTimeout(Ut))}}return h.Deferred(function(K){l[0][3].add(W(0,K,typeof O=="function"?O:X,K.notifyWith)),l[1][3].add(W(0,K,typeof M=="function"?M:X)),l[2][3].add(W(0,K,typeof R=="function"?R:J))}).promise()},promise:function(M){return M!=null?h.extend(M,x):x}},y={};return h.each(l,function(M,R){var O=R[2],N=R[5];x[R[1]]=O.add,N&&O.add(function(){d=N},l[3-M][2].disable,l[3-M][3].disable,l[0][2].lock,l[0][3].lock),O.add(R[3].fire),y[R[0]]=function(){return y[R[0]+"With"](this===y?void 0:this,arguments),this},y[R[0]+"With"]=O.fireWith}),x.promise(y),a&&a.call(y,y),y},when:function(a){var l=arguments.length,d=l,x=Array(d),y=i.call(arguments),M=h.Deferred(),R=function(O){return function(N){x[O]=this,y[O]=arguments.length>1?i.call(arguments):N,--l||M.resolveWith(x,y)}};if(l<=1&&(Q(a,M.done(R(d)).resolve,M.reject,!l),M.state()==="pending"||typeof(y[d]&&y[d].then)=="function"))return M.then();for(;d--;)Q(y[d],R(d),M.reject);return M.promise()}});var Y=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;h.Deferred.exceptionHook=function(a,l){a&&Y.test(a.name)&&r.console.warn("jQuery.Deferred exception",a,l)},h.readyException=function(a){r.setTimeout(function(){throw a})};var ge=h.Deferred();h.fn.ready=function(a){return ge.then(a).catch(function(l){h.readyException(l)}),this},h.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--h.readyWait:h.isReady)||(h.isReady=!0,!(a!==!0&&--h.readyWait>0)&&ge.resolveWith(_,[h]))}}),h.ready.then=ge.then;function Te(){_.removeEventListener("DOMContentLoaded",Te),r.removeEventListener("load",Te),h.ready()}_.readyState!=="loading"?r.setTimeout(h.ready):(_.addEventListener("DOMContentLoaded",Te),r.addEventListener("load",Te));var Pe=/-([a-z])/g;function Ce(a,l){return l.toUpperCase()}function Oe(a){return a.replace(Pe,Ce)}function He(a){return a.nodeType===1||a.nodeType===9||!+a.nodeType}function Ue(){this.expando=h.expando+Ue.uid++}Ue.uid=1,Ue.prototype={cache:function(a){var l=a[this.expando];return l||(l=Object.create(null),He(a)&&(a.nodeType?a[this.expando]=l:Object.defineProperty(a,this.expando,{value:l,configurable:!0}))),l},set:function(a,l,d){var x,y=this.cache(a);if(typeof l=="string")y[Oe(l)]=d;else for(x in l)y[Oe(x)]=l[x];return d},get:function(a,l){return l===void 0?this.cache(a):a[this.expando]&&a[this.expando][Oe(l)]},access:function(a,l,d){return l===void 0||l&&typeof l=="string"&&d===void 0?this.get(a,l):(this.set(a,l,d),d!==void 0?d:l)},remove:function(a,l){var d,x=a[this.expando];if(x!==void 0){if(l!==void 0)for(Array.isArray(l)?l=l.map(Oe):(l=Oe(l),l=l in x?[l]:l.match(k)||[]),d=l.length;d--;)delete x[l[d]];(l===void 0||h.isEmptyObject(x))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var l=a[this.expando];return l!==void 0&&!h.isEmptyObject(l)}};var be=new Ue,$e=new Ue,It=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Nt=/[A-Z]/g;function Mt(a){return a==="true"?!0:a==="false"?!1:a==="null"?null:a===+a+""?+a:It.test(a)?JSON.parse(a):a}function ze(a,l,d){var x;if(d===void 0&&a.nodeType===1)if(x="data-"+l.replace(Nt,"-$&").toLowerCase(),d=a.getAttribute(x),typeof d=="string"){try{d=Mt(d)}catch{}$e.set(a,l,d)}else d=void 0;return d}h.extend({hasData:function(a){return $e.hasData(a)||be.hasData(a)},data:function(a,l,d){return $e.access(a,l,d)},removeData:function(a,l){$e.remove(a,l)},_data:function(a,l,d){return be.access(a,l,d)},_removeData:function(a,l){be.remove(a,l)}}),h.fn.extend({data:function(a,l){var d,x,y,M=this[0],R=M&&M.attributes;if(a===void 0){if(this.length&&(y=$e.get(M),M.nodeType===1&&!be.get(M,"hasDataAttrs"))){for(d=R.length;d--;)R[d]&&(x=R[d].name,x.indexOf("data-")===0&&(x=Oe(x.slice(5)),ze(M,x,y[x])));be.set(M,"hasDataAttrs",!0)}return y}return typeof a=="object"?this.each(function(){$e.set(this,a)}):dt(this,function(O){var N;if(M&&O===void 0)return N=$e.get(M,a),N!==void 0||(N=ze(M,a),N!==void 0)?N:void 0;this.each(function(){$e.set(this,a,O)})},null,l,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){$e.remove(this,a)})}}),h.extend({queue:function(a,l,d){var x;if(a)return l=(l||"fx")+"queue",x=be.get(a,l),d&&(!x||Array.isArray(d)?x=be.set(a,l,h.makeArray(d)):x.push(d)),x||[]},dequeue:function(a,l){l=l||"fx";var d=h.queue(a,l),x=d.length,y=d.shift(),M=h._queueHooks(a,l),R=function(){h.dequeue(a,l)};y==="inprogress"&&(y=d.shift(),x--),y&&(l==="fx"&&d.unshift("inprogress"),delete M.stop,y.call(a,R,M)),!x&&M&&M.empty.fire()},_queueHooks:function(a,l){var d=l+"queueHooks";return be.get(a,d)||be.set(a,d,{empty:h.Callbacks("once memory").add(function(){be.remove(a,[l+"queue",d])})})}}),h.fn.extend({queue:function(a,l){var d=2;return typeof a!="string"&&(l=a,a="fx",d--),arguments.length<d?h.queue(this[0],a):l===void 0?this:this.each(function(){var x=h.queue(this,a,l);h._queueHooks(this,a),a==="fx"&&x[0]!=="inprogress"&&h.dequeue(this,a)})},dequeue:function(a){return this.each(function(){h.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,l){var d,x=1,y=h.Deferred(),M=this,R=this.length,O=function(){--x||y.resolveWith(M,[M])};for(typeof a!="string"&&(l=a,a=void 0),a=a||"fx";R--;)d=be.get(M[R],a+"queueHooks"),d&&d.empty&&(x++,d.empty.add(O));return O(),y.promise(l)}});var Pt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ot=new RegExp("^(?:([+-])=|)("+Pt+")([a-z%]*)$","i"),Ft=["Top","Right","Bottom","Left"];function Sn(a,l){return a=l||a,a.style.display==="none"||a.style.display===""&&h.css(a,"display")==="none"}var nn=/^[a-z]/,Ci=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;function wt(a){return nn.test(a)&&Ci.test(a[0].toUpperCase()+a.slice(1))}function qt(a,l,d,x){var y,M,R=20,O=x?function(){return x.cur()}:function(){return h.css(a,l,"")},N=O(),W=d&&d[3]||(wt(l)?"px":""),K=a.nodeType&&(!wt(l)||W!=="px"&&+N)&&ot.exec(h.css(a,l));if(K&&K[3]!==W){for(N=N/2,W=W||K[3],K=+N||1;R--;)h.style(a,l,K+W),(1-M)*(1-(M=O()/N||.5))<=0&&(R=0),K=K/M;K=K*2,h.style(a,l,K+W),d=d||[]}return d&&(K=+K||+N||0,y=d[1]?K+(d[1]+1)*d[2]:+d[2],x&&(x.unit=W,x.start=K,x.end=y)),y}var fn=/^-ms-/;function zt(a){return Oe(a.replace(fn,"ms-"))}var jt={};function qr(a){var l,d=a.ownerDocument,x=a.nodeName,y=jt[x];return y||(l=d.body.appendChild(d.createElement(x)),y=h.css(l,"display"),l.parentNode.removeChild(l),y==="none"&&(y="block"),jt[x]=y,y)}function hn(a,l){for(var d,x,y=[],M=0,R=a.length;M<R;M++)x=a[M],x.style&&(d=x.style.display,l?(d==="none"&&(y[M]=be.get(x,"display")||null,y[M]||(x.style.display="")),x.style.display===""&&Sn(x)&&(y[M]=qr(x))):d!=="none"&&(y[M]="none",be.set(x,"display",d)));for(M=0;M<R;M++)y[M]!=null&&(a[M].style.display=y[M]);return a}h.fn.extend({show:function(){return hn(this,!0)},hide:function(){return hn(this)},toggle:function(a){return typeof a=="boolean"?a?this.show():this.hide():this.each(function(){Sn(this)?h(this).show():h(this).hide()})}});var jr=function(a){return h.contains(a.ownerDocument,a)||a.getRootNode(jh)===a.ownerDocument},jh={composed:!0};fe.getRootNode||(jr=function(a){return h.contains(a.ownerDocument,a)});var Tl=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Kn={thead:["table"],col:["colgroup","table"],tr:["tbody","table"],td:["tr","tbody","table"]};Kn.tbody=Kn.tfoot=Kn.colgroup=Kn.caption=Kn.thead,Kn.th=Kn.td;function dn(a,l){var d;return typeof a.getElementsByTagName<"u"?d=t.slice.call(a.getElementsByTagName(l||"*")):typeof a.querySelectorAll<"u"?d=a.querySelectorAll(l||"*"):d=[],l===void 0||l&&I(a,l)?h.merge([a],d):d}var El=/^$|^module$|\/(?:java|ecma)script/i;function Ia(a,l){for(var d=0,x=a.length;d<x;d++)be.set(a[d],"globalEval",!l||be.get(l[d],"globalEval"))}var Yh=/<|&#?\w+;/;function Al(a,l,d,x,y){for(var M,R,O,N,W,K,te=l.createDocumentFragment(),q=[],ee=0,Re=a.length;ee<Re;ee++)if(M=a[ee],M||M===0)if(S(M)==="object"&&(M.nodeType||b(M)))h.merge(q,M.nodeType?[M]:M);else if(!Yh.test(M))q.push(l.createTextNode(M));else{for(R=R||te.appendChild(l.createElement("div")),O=(Tl.exec(M)||["",""])[1].toLowerCase(),N=Kn[O]||t,K=N.length;--K>-1;)R=R.appendChild(l.createElement(N[K]));R.innerHTML=h.htmlPrefilter(M),h.merge(q,R.childNodes),R=te.firstChild,R.textContent=""}for(te.textContent="",ee=0;M=q[ee++];){if(x&&h.inArray(M,x)>-1){y&&y.push(M);continue}if(W=jr(M),R=dn(te.appendChild(M),"script"),W&&Ia(R),d)for(K=0;M=R[K++];)El.test(M.type||"")&&d.push(M)}return te}function Kh(a){return a.type=(a.getAttribute("type")!==null)+"/"+a.type,a}function Zh(a){return(a.type||"").slice(0,5)==="true/"?a.type=a.type.slice(5):a.removeAttribute("type"),a}function Qi(a,l,d,x){l=s(l);var y,M,R,O,N,W,K=0,te=a.length,q=te-1,ee=l[0],Re=typeof ee=="function";if(Re)return a.each(function(Ze){var Ye=a.eq(Ze);l[0]=ee.call(this,Ze,Ye.html()),Qi(Ye,l,d,x)});if(te&&(y=Al(l,a[0].ownerDocument,!1,a,x),M=y.firstChild,y.childNodes.length===1&&(y=M),M||x)){for(R=h.map(dn(y,"script"),Kh),O=R.length;K<te;K++)N=y,K!==q&&(N=h.clone(N,!0,!0),O&&h.merge(R,dn(N,"script"))),d.call(a[K],N,K);if(O)for(W=R[R.length-1].ownerDocument,h.map(R,Zh),K=0;K<O;K++)N=R[K],El.test(N.type||"")&&!be.get(N,"globalEval")&&h.contains(W,N)&&(N.src&&(N.type||"").toLowerCase()!=="module"?h._evalUrl&&!N.noModule&&h._evalUrl(N.src,{nonce:N.nonce,crossOrigin:N.crossOrigin},W):P(N.textContent,N,W))}return a}var Ts=/^(?:checkbox|radio)$/i,wl=/^([^.]*)(?:\.(.+)|)/;function er(){return!0}function tr(){return!1}function Na(a,l,d,x,y,M){var R,O;if(typeof l=="object"){typeof d!="string"&&(x=x||d,d=void 0);for(O in l)Na(a,O,d,x,l[O],M);return a}if(x==null&&y==null?(y=d,x=d=void 0):y==null&&(typeof d=="string"?(y=x,x=void 0):(y=x,x=d,d=void 0)),y===!1)y=tr;else if(!y)return a;return M===1&&(R=y,y=function(N){return h().off(N),R.apply(this,arguments)},y.guid=R.guid||(R.guid=h.guid++)),a.each(function(){h.event.add(this,l,y,x,d)})}h.event={add:function(a,l,d,x,y){var M,R,O,N,W,K,te,q,ee,Re,Ze,Ye=be.get(a);if(He(a))for(d.handler&&(M=d,d=M.handler,y=M.selector),y&&h.find.matchesSelector(fe,y),d.guid||(d.guid=h.guid++),(N=Ye.events)||(N=Ye.events=Object.create(null)),(R=Ye.handle)||(R=Ye.handle=function(Ut){return typeof h<"u"&&h.event.triggered!==Ut.type?h.event.dispatch.apply(a,arguments):void 0}),l=(l||"").match(k)||[""],W=l.length;W--;)O=wl.exec(l[W])||[],ee=Ze=O[1],Re=(O[2]||"").split(".").sort(),ee&&(te=h.event.special[ee]||{},ee=(y?te.delegateType:te.bindType)||ee,te=h.event.special[ee]||{},K=h.extend({type:ee,origType:Ze,data:x,handler:d,guid:d.guid,selector:y,needsContext:y&&h.expr.match.needsContext.test(y),namespace:Re.join(".")},M),(q=N[ee])||(q=N[ee]=[],q.delegateCount=0,(!te.setup||te.setup.call(a,x,Re,R)===!1)&&a.addEventListener&&a.addEventListener(ee,R)),te.add&&(te.add.call(a,K),K.handler.guid||(K.handler.guid=d.guid)),y?q.splice(q.delegateCount++,0,K):q.push(K))},remove:function(a,l,d,x,y){var M,R,O,N,W,K,te,q,ee,Re,Ze,Ye=be.hasData(a)&&be.get(a);if(!(!Ye||!(N=Ye.events))){for(l=(l||"").match(k)||[""],W=l.length;W--;){if(O=wl.exec(l[W])||[],ee=Ze=O[1],Re=(O[2]||"").split(".").sort(),!ee){for(ee in N)h.event.remove(a,ee+l[W],d,x,!0);continue}for(te=h.event.special[ee]||{},ee=(x?te.delegateType:te.bindType)||ee,q=N[ee]||[],O=O[2]&&new RegExp("(^|\\.)"+Re.join("\\.(?:.*\\.|)")+"(\\.|$)"),R=M=q.length;M--;)K=q[M],(y||Ze===K.origType)&&(!d||d.guid===K.guid)&&(!O||O.test(K.namespace))&&(!x||x===K.selector||x==="**"&&K.selector)&&(q.splice(M,1),K.selector&&q.delegateCount--,te.remove&&te.remove.call(a,K));R&&!q.length&&((!te.teardown||te.teardown.call(a,Re,Ye.handle)===!1)&&h.removeEvent(a,ee,Ye.handle),delete N[ee])}h.isEmptyObject(N)&&be.remove(a,"handle events")}},dispatch:function(a){var l,d,x,y,M,R,O=new Array(arguments.length),N=h.event.fix(a),W=(be.get(this,"events")||Object.create(null))[N.type]||[],K=h.event.special[N.type]||{};for(O[0]=N,l=1;l<arguments.length;l++)O[l]=arguments[l];if(N.delegateTarget=this,!(K.preDispatch&&K.preDispatch.call(this,N)===!1)){for(R=h.event.handlers.call(this,N,W),l=0;(y=R[l++])&&!N.isPropagationStopped();)for(N.currentTarget=y.elem,d=0;(M=y.handlers[d++])&&!N.isImmediatePropagationStopped();)(!N.rnamespace||M.namespace===!1||N.rnamespace.test(M.namespace))&&(N.handleObj=M,N.data=M.data,x=((h.event.special[M.origType]||{}).handle||M.handler).apply(y.elem,O),x!==void 0&&(N.result=x)===!1&&(N.preventDefault(),N.stopPropagation()));return K.postDispatch&&K.postDispatch.call(this,N),N.result}},handlers:function(a,l){var d,x,y,M,R,O=[],N=l.delegateCount,W=a.target;if(N&&!(a.type==="click"&&a.button>=1)){for(;W!==this;W=W.parentNode||this)if(W.nodeType===1&&!(a.type==="click"&&W.disabled===!0)){for(M=[],R={},d=0;d<N;d++)x=l[d],y=x.selector+" ",R[y]===void 0&&(R[y]=x.needsContext?h(y,this).index(W)>-1:h.find(y,this,null,[W]).length),R[y]&&M.push(x);M.length&&O.push({elem:W,handlers:M})}}return W=this,N<l.length&&O.push({elem:W,handlers:l.slice(N)}),O},addProp:function(a,l){Object.defineProperty(h.Event.prototype,a,{enumerable:!0,configurable:!0,get:typeof l=="function"?function(){if(this.originalEvent)return l(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(d){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:d})}})},fix:function(a){return a[h.expando]?a:new h.Event(a)},special:h.extend(Object.create(null),{load:{noBubble:!0},click:{setup:function(a){var l=this||a;return Ts.test(l.type)&&l.click&&I(l,"input")&&Es(l,"click",!0),!1},trigger:function(a){var l=this||a;return Ts.test(l.type)&&l.click&&I(l,"input")&&Es(l,"click"),!0},_default:function(a){var l=a.target;return Ts.test(l.type)&&l.click&&I(l,"input")&&be.get(l,"click")||I(l,"a")}},beforeunload:{postDispatch:function(a){a.result!==void 0&&a.preventDefault()}}})};function Es(a,l,d){if(!d){be.get(a,l)===void 0&&h.event.add(a,l,er);return}be.set(a,l,!1),h.event.add(a,l,{namespace:!1,handler:function(x){var y,M=be.get(this,l);if(x.isTrigger&1&&this[l]){if(M.length)(h.event.special[l]||{}).delegateType&&x.stopPropagation();else if(M=i.call(arguments),be.set(this,l,M),this[l](),y=be.get(this,l),be.set(this,l,!1),M!==y)return x.stopImmediatePropagation(),x.preventDefault(),y&&y.value}else M.length&&(be.set(this,l,{value:h.event.trigger(M[0],M.slice(1),this)}),x.stopPropagation(),x.isImmediatePropagationStopped=er)}})}h.removeEvent=function(a,l,d){a.removeEventListener&&a.removeEventListener(l,d)},h.Event=function(a,l){if(!(this instanceof h.Event))return new h.Event(a,l);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented?er:tr,this.target=a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,l&&h.extend(this,l),this.timeStamp=a&&a.timeStamp||Date.now(),this[h.expando]=!0},h.Event.prototype={constructor:h.Event,isDefaultPrevented:tr,isPropagationStopped:tr,isImmediatePropagationStopped:tr,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=er,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=er,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=er,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},h.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},h.event.addProp),h.each({focus:"focusin",blur:"focusout"},function(a,l){function d(x){var y=h.event.fix(x);y.type=x.type==="focusin"?"focus":"blur",y.isSimulated=!0,y.target===y.currentTarget&&be.get(this,"handle")(y)}h.event.special[a]={setup:function(){if(Es(this,a,!0),w)this.addEventListener(l,d);else return!1},trigger:function(){return Es(this,a),!0},teardown:function(){if(w)this.removeEventListener(l,d);else return!1},_default:function(x){return be.get(x.target,a)},delegateType:l}}),h.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,l){h.event.special[a]={delegateType:l,bindType:l,handle:function(d){var x,y=this,M=d.relatedTarget,R=d.handleObj;return(!M||M!==y&&!h.contains(y,M))&&(d.type=R.origType,x=R.handler.apply(this,arguments),d.type=l),x}}}),h.fn.extend({on:function(a,l,d,x){return Na(this,a,l,d,x)},one:function(a,l,d,x){return Na(this,a,l,d,x,1)},off:function(a,l,d){var x,y;if(a&&a.preventDefault&&a.handleObj)return x=a.handleObj,h(a.delegateTarget).off(x.namespace?x.origType+"."+x.namespace:x.origType,x.selector,x.handler),this;if(typeof a=="object"){for(y in a)this.off(y,l,a[y]);return this}return(l===!1||typeof l=="function")&&(d=l,l=void 0),d===!1&&(d=tr),this.each(function(){h.event.remove(this,a,d,l)})}});var $h=/<script|<style|<link/i;function Rl(a,l){return I(a,"table")&&I(l.nodeType!==11?l:l.firstChild,"tr")&&h(a).children("tbody")[0]||a}function Cl(a,l){var d,x,y,M=be.get(a,"events");if(l.nodeType===1){if(M){be.remove(l,"handle events");for(d in M)for(x=0,y=M[d].length;x<y;x++)h.event.add(l,d,M[d][x])}$e.hasData(a)&&$e.set(l,h.extend({},$e.get(a)))}}function Pl(a,l,d){for(var x,y=l?h.filter(l,a):a,M=0;(x=y[M])!=null;M++)!d&&x.nodeType===1&&h.cleanData(dn(x)),x.parentNode&&(d&&jr(x)&&Ia(dn(x,"script")),x.parentNode.removeChild(x));return a}h.extend({htmlPrefilter:function(a){return a},clone:function(a,l,d){var x,y,M,R,O=a.cloneNode(!0),N=jr(a);if(w&&(a.nodeType===1||a.nodeType===11)&&!h.isXMLDoc(a))for(R=dn(O),M=dn(a),x=0,y=M.length;x<y;x++)I(R[x],"textarea")&&(R[x].defaultValue=M[x].defaultValue);if(l)if(d)for(M=M||dn(a),R=R||dn(O),x=0,y=M.length;x<y;x++)Cl(M[x],R[x]);else Cl(a,O);return R=dn(O,"script"),R.length>0&&Ia(R,!N&&dn(a,"script")),O},cleanData:function(a){for(var l,d,x,y=h.event.special,M=0;(d=a[M])!==void 0;M++)if(He(d)){if(l=d[be.expando]){if(l.events)for(x in l.events)y[x]?h.event.remove(d,x):h.removeEvent(d,x,l.handle);d[be.expando]=void 0}d[$e.expando]&&(d[$e.expando]=void 0)}}}),h.fn.extend({detach:function(a){return Pl(this,a,!0)},remove:function(a){return Pl(this,a)},text:function(a){return dt(this,function(l){return l===void 0?h.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=l)})},null,a,arguments.length)},append:function(){return Qi(this,arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var l=Rl(this,a);l.appendChild(a)}})},prepend:function(){return Qi(this,arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var l=Rl(this,a);l.insertBefore(a,l.firstChild)}})},before:function(){return Qi(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Qi(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,l=0;(a=this[l])!=null;l++)a.nodeType===1&&(h.cleanData(dn(a,!1)),a.textContent="");return this},clone:function(a,l){return a=a??!1,l=l??a,this.map(function(){return h.clone(this,a,l)})},html:function(a){return dt(this,function(l){var d=this[0]||{},x=0,y=this.length;if(l===void 0&&d.nodeType===1)return d.innerHTML;if(typeof l=="string"&&!$h.test(l)&&!Kn[(Tl.exec(l)||["",""])[1].toLowerCase()]){l=h.htmlPrefilter(l);try{for(;x<y;x++)d=this[x]||{},d.nodeType===1&&(h.cleanData(dn(d,!1)),d.innerHTML=l);d=0}catch{}}d&&this.empty().append(l)},null,a,arguments.length)},replaceWith:function(){var a=[];return Qi(this,arguments,function(l){var d=this.parentNode;h.inArray(this,a)<0&&(h.cleanData(dn(this)),d&&d.replaceChild(l,this))},a)}}),h.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,l){h.fn[a]=function(d){for(var x,y=[],M=h(d),R=M.length-1,O=0;O<=R;O++)x=O===R?this:this.clone(!0),h(M[O])[l](x),o.apply(y,x);return this.pushStack(y)}});var Jh=new RegExp("^("+Pt+")(?!px)[a-z%]+$","i"),Ua=/^--/;function As(a){var l=a.ownerDocument.defaultView;return l||(l=r),l.getComputedStyle(a)}function Qh(a,l,d){var x,y,M={};for(y in l)M[y]=a.style[y],a.style[y]=l[y];x=d.call(a);for(y in l)a.style[y]=M[y];return x}function Ll(a,l,d){var x,y=Ua.test(l);return d=d||As(a),d&&(x=d.getPropertyValue(l)||d[l],y&&x&&(x=x.replace(H,"$1")||void 0),x===""&&!jr(a)&&(x=h.style(a,l))),x!==void 0?x+"":x}var Dl=["Webkit","Moz","ms"],Il=_.createElement("div").style;function ed(a){for(var l=a[0].toUpperCase()+a.slice(1),d=Dl.length;d--;)if(a=Dl[d]+l,a in Il)return a}function Fa(a){return a in Il?a:ed(a)||a}var Nl,Ul,hi=_.createElement("table");function Fl(){if(!(!hi||!hi.style)){var a,l=_.createElement("col"),d=_.createElement("tr"),x=_.createElement("td");if(hi.style.cssText="position:absolute;left:-11111px;border-collapse:separate;border-spacing:0",d.style.cssText="box-sizing:content-box;border:1px solid;height:1px",x.style.cssText="height:9px;width:9px;padding:0",l.span=2,fe.appendChild(hi).appendChild(l).parentNode.appendChild(d).appendChild(x).parentNode.appendChild(x.cloneNode(!0)),hi.offsetWidth===0){fe.removeChild(hi);return}a=r.getComputedStyle(d),Ul=w||Math.round(parseFloat(r.getComputedStyle(l).width))===18,Nl=Math.round(parseFloat(a.height)+parseFloat(a.borderTopWidth)+parseFloat(a.borderBottomWidth))===d.offsetHeight,fe.removeChild(hi),hi=null}}h.extend(v,{reliableTrDimensions:function(){return Fl(),Nl},reliableColDimensions:function(){return Fl(),Ul}});var td={position:"absolute",visibility:"hidden",display:"block"},Ol={letterSpacing:"0",fontWeight:"400"};function Bl(a,l,d){var x=ot.exec(l);return x?Math.max(0,x[2]-(d||0))+(x[3]||"px"):l}function kl(a,l,d,x,y,M){var R=l==="width"?1:0,O=0,N=0,W=0;if(d===(x?"border":"content"))return 0;for(;R<4;R+=2)d==="margin"&&(W+=h.css(a,d+Ft[R],!0,y)),x?(d==="content"&&(N-=h.css(a,"padding"+Ft[R],!0,y)),d!=="margin"&&(N-=h.css(a,"border"+Ft[R]+"Width",!0,y))):(N+=h.css(a,"padding"+Ft[R],!0,y),d!=="padding"?N+=h.css(a,"border"+Ft[R]+"Width",!0,y):O+=h.css(a,"border"+Ft[R]+"Width",!0,y));return!x&&M>=0&&(N+=Math.max(0,Math.ceil(a["offset"+l[0].toUpperCase()+l.slice(1)]-M-N-O-.5))||0),N+W}function zl(a,l,d){var x=As(a),y=w||d,M=y&&h.css(a,"boxSizing",!1,x)==="border-box",R=M,O=Ll(a,l,x),N="offset"+l[0].toUpperCase()+l.slice(1);if(Jh.test(O)){if(!d)return O;O="auto"}return(O==="auto"||w&&M||!v.reliableColDimensions()&&I(a,"col")||!v.reliableTrDimensions()&&I(a,"tr"))&&a.getClientRects().length&&(M=h.css(a,"boxSizing",!1,x)==="border-box",R=N in a,R&&(O=a[N])),O=parseFloat(O)||0,O+kl(a,l,d||(M?"border":"content"),R,x,O)+"px"}h.extend({cssHooks:{},style:function(a,l,d,x){if(!(!a||a.nodeType===3||a.nodeType===8||!a.style)){var y,M,R,O=zt(l),N=Ua.test(l),W=a.style;if(N||(l=Fa(O)),R=h.cssHooks[l]||h.cssHooks[O],d!==void 0){if(M=typeof d,M==="string"&&(y=ot.exec(d))&&y[1]&&(d=qt(a,l,y),M="number"),d==null||d!==d)return;M==="number"&&(d+=y&&y[3]||(wt(O)?"px":"")),w&&d===""&&l.indexOf("background")===0&&(W[l]="inherit"),(!R||!("set"in R)||(d=R.set(a,d,x))!==void 0)&&(N?W.setProperty(l,d):W[l]=d)}else return R&&"get"in R&&(y=R.get(a,!1,x))!==void 0?y:W[l]}},css:function(a,l,d,x){var y,M,R,O=zt(l),N=Ua.test(l);return N||(l=Fa(O)),R=h.cssHooks[l]||h.cssHooks[O],R&&"get"in R&&(y=R.get(a,!0,d)),y===void 0&&(y=Ll(a,l,x)),y==="normal"&&l in Ol&&(y=Ol[l]),d===""||d?(M=parseFloat(y),d===!0||isFinite(M)?M||0:y):y}}),h.each(["height","width"],function(a,l){h.cssHooks[l]={get:function(d,x,y){if(x)return h.css(d,"display")==="none"?Qh(d,td,function(){return zl(d,l,y)}):zl(d,l,y)},set:function(d,x,y){var M,R=As(d),O=y&&h.css(d,"boxSizing",!1,R)==="border-box",N=y?kl(d,l,y,O,R):0;return N&&(M=ot.exec(x))&&(M[3]||"px")!=="px"&&(d.style[l]=x,x=h.css(d,l)),Bl(d,x,N)}}}),h.each({margin:"",padding:"",border:"Width"},function(a,l){h.cssHooks[a+l]={expand:function(d){for(var x=0,y={},M=typeof d=="string"?d.split(" "):[d];x<4;x++)y[a+Ft[x]+l]=M[x]||M[x-2]||M[0];return y}},a!=="margin"&&(h.cssHooks[a+l].set=Bl)}),h.fn.extend({css:function(a,l){return dt(this,function(d,x,y){var M,R,O={},N=0;if(Array.isArray(x)){for(M=As(d),R=x.length;N<R;N++)O[x[N]]=h.css(d,x[N],!1,M);return O}return y!==void 0?h.style(d,x,y):h.css(d,x)},a,l,arguments.length>1)}});function vn(a,l,d,x,y){return new vn.prototype.init(a,l,d,x,y)}h.Tween=vn,vn.prototype={constructor:vn,init:function(a,l,d,x,y,M){this.elem=a,this.prop=d,this.easing=y||h.easing._default,this.options=l,this.start=this.now=this.cur(),this.end=x,this.unit=M||(wt(d)?"px":"")},cur:function(){var a=vn.propHooks[this.prop];return a&&a.get?a.get(this):vn.propHooks._default.get(this)},run:function(a){var l,d=vn.propHooks[this.prop];return this.options.duration?this.pos=l=h.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=l=a,this.now=(this.end-this.start)*l+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),d&&d.set?d.set(this):vn.propHooks._default.set(this),this}},vn.prototype.init.prototype=vn.prototype,vn.propHooks={_default:{get:function(a){var l;return a.elem.nodeType!==1||a.elem[a.prop]!=null&&a.elem.style[a.prop]==null?a.elem[a.prop]:(l=h.css(a.elem,a.prop,""),!l||l==="auto"?0:l)},set:function(a){h.fx.step[a.prop]?h.fx.step[a.prop](a):a.elem.nodeType===1&&(h.cssHooks[a.prop]||a.elem.style[Fa(a.prop)]!=null)?h.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},h.easing={linear:function(a){return a},swing:function(a){return .5-Math.cos(a*Math.PI)/2},_default:"swing"},h.fx=vn.prototype.init,h.fx.step={};var nr,ws,nd=/^(?:toggle|show|hide)$/,id=/queueHooks$/;function Oa(){ws&&(_.hidden===!1&&r.requestAnimationFrame?r.requestAnimationFrame(Oa):r.setTimeout(Oa,13),h.fx.tick())}function Vl(){return r.setTimeout(function(){nr=void 0}),nr=Date.now()}function Rs(a,l){var d,x=0,y={height:a};for(l=l?1:0;x<4;x+=2-l)d=Ft[x],y["margin"+d]=y["padding"+d]=a;return l&&(y.opacity=y.width=a),y}function Hl(a,l,d){for(var x,y=(Tn.tweeners[l]||[]).concat(Tn.tweeners["*"]),M=0,R=y.length;M<R;M++)if(x=y[M].call(d,l,a))return x}function rd(a,l,d){var x,y,M,R,O,N,W,K,te="width"in l||"height"in l,q=this,ee={},Re=a.style,Ze=a.nodeType&&Sn(a),Ye=be.get(a,"fxshow");d.queue||(R=h._queueHooks(a,"fx"),R.unqueued==null&&(R.unqueued=0,O=R.empty.fire,R.empty.fire=function(){R.unqueued||O()}),R.unqueued++,q.always(function(){q.always(function(){R.unqueued--,h.queue(a,"fx").length||R.empty.fire()})}));for(x in l)if(y=l[x],nd.test(y)){if(delete l[x],M=M||y==="toggle",y===(Ze?"hide":"show"))if(y==="show"&&Ye&&Ye[x]!==void 0)Ze=!0;else continue;ee[x]=Ye&&Ye[x]||h.style(a,x)}if(N=!h.isEmptyObject(l),!(!N&&h.isEmptyObject(ee))){te&&a.nodeType===1&&(d.overflow=[Re.overflow,Re.overflowX,Re.overflowY],W=Ye&&Ye.display,W==null&&(W=be.get(a,"display")),K=h.css(a,"display"),K==="none"&&(W?K=W:(hn([a],!0),W=a.style.display||W,K=h.css(a,"display"),hn([a]))),(K==="inline"||K==="inline-block"&&W!=null)&&h.css(a,"float")==="none"&&(N||(q.done(function(){Re.display=W}),W==null&&(K=Re.display,W=K==="none"?"":K)),Re.display="inline-block")),d.overflow&&(Re.overflow="hidden",q.always(function(){Re.overflow=d.overflow[0],Re.overflowX=d.overflow[1],Re.overflowY=d.overflow[2]})),N=!1;for(x in ee)N||(Ye?"hidden"in Ye&&(Ze=Ye.hidden):Ye=be.set(a,"fxshow",{display:W}),M&&(Ye.hidden=!Ze),Ze&&hn([a],!0),q.done(function(){Ze||hn([a]),be.remove(a,"fxshow");for(x in ee)h.style(a,x,ee[x])})),N=Hl(Ze?Ye[x]:0,x,q),x in Ye||(Ye[x]=N.start,Ze&&(N.end=N.start,N.start=0))}}function sd(a,l){var d,x,y,M,R;for(d in a)if(x=zt(d),y=l[x],M=a[d],Array.isArray(M)&&(y=M[1],M=a[d]=M[0]),d!==x&&(a[x]=M,delete a[d]),R=h.cssHooks[x],R&&"expand"in R){M=R.expand(M),delete a[x];for(d in M)d in a||(a[d]=M[d],l[d]=y)}else l[x]=y}function Tn(a,l,d){var x,y,M=0,R=Tn.prefilters.length,O=h.Deferred().always(function(){delete N.elem}),N=function(){if(y)return!1;for(var te=nr||Vl(),q=Math.max(0,W.startTime+W.duration-te),ee=1-(q/W.duration||0),Re=0,Ze=W.tweens.length;Re<Ze;Re++)W.tweens[Re].run(ee);return O.notifyWith(a,[W,ee,q]),ee<1&&Ze?q:(Ze||O.notifyWith(a,[W,1,0]),O.resolveWith(a,[W]),!1)},W=O.promise({elem:a,props:h.extend({},l),opts:h.extend(!0,{specialEasing:{},easing:h.easing._default},d),originalProperties:l,originalOptions:d,startTime:nr||Vl(),duration:d.duration,tweens:[],createTween:function(te,q){var ee=h.Tween(a,W.opts,te,q,W.opts.specialEasing[te]||W.opts.easing);return W.tweens.push(ee),ee},stop:function(te){var q=0,ee=te?W.tweens.length:0;if(y)return this;for(y=!0;q<ee;q++)W.tweens[q].run(1);return te?(O.notifyWith(a,[W,1,0]),O.resolveWith(a,[W,te])):O.rejectWith(a,[W,te]),this}}),K=W.props;for(sd(K,W.opts.specialEasing);M<R;M++)if(x=Tn.prefilters[M].call(W,a,K,W.opts),x)return typeof x.stop=="function"&&(h._queueHooks(W.elem,W.opts.queue).stop=x.stop.bind(x)),x;return h.map(K,Hl,W),typeof W.opts.start=="function"&&W.opts.start.call(a,W),W.progress(W.opts.progress).done(W.opts.done,W.opts.complete).fail(W.opts.fail).always(W.opts.always),h.fx.timer(h.extend(N,{elem:a,anim:W,queue:W.opts.queue})),W}h.Animation=h.extend(Tn,{tweeners:{"*":[function(a,l){var d=this.createTween(a,l);return qt(d.elem,a,ot.exec(l),d),d}]},tweener:function(a,l){typeof a=="function"?(l=a,a=["*"]):a=a.match(k);for(var d,x=0,y=a.length;x<y;x++)d=a[x],Tn.tweeners[d]=Tn.tweeners[d]||[],Tn.tweeners[d].unshift(l)},prefilters:[rd],prefilter:function(a,l){l?Tn.prefilters.unshift(a):Tn.prefilters.push(a)}}),h.speed=function(a,l,d){var x=a&&typeof a=="object"?h.extend({},a):{complete:d||l||typeof a=="function"&&a,duration:a,easing:d&&l||l&&typeof l!="function"&&l};return h.fx.off?x.duration=0:typeof x.duration!="number"&&(x.duration in h.fx.speeds?x.duration=h.fx.speeds[x.duration]:x.duration=h.fx.speeds._default),(x.queue==null||x.queue===!0)&&(x.queue="fx"),x.old=x.complete,x.complete=function(){typeof x.old=="function"&&x.old.call(this),x.queue&&h.dequeue(this,x.queue)},x},h.fn.extend({fadeTo:function(a,l,d,x){return this.filter(Sn).css("opacity",0).show().end().animate({opacity:l},a,d,x)},animate:function(a,l,d,x){var y=h.isEmptyObject(a),M=h.speed(l,d,x),R=function(){var O=Tn(this,h.extend({},a),M);(y||be.get(this,"finish"))&&O.stop(!0)};return R.finish=R,y||M.queue===!1?this.each(R):this.queue(M.queue,R)},stop:function(a,l,d){var x=function(y){var M=y.stop;delete y.stop,M(d)};return typeof a!="string"&&(d=l,l=a,a=void 0),l&&this.queue(a||"fx",[]),this.each(function(){var y=!0,M=a!=null&&a+"queueHooks",R=h.timers,O=be.get(this);if(M)O[M]&&O[M].stop&&x(O[M]);else for(M in O)O[M]&&O[M].stop&&id.test(M)&&x(O[M]);for(M=R.length;M--;)R[M].elem===this&&(a==null||R[M].queue===a)&&(R[M].anim.stop(d),y=!1,R.splice(M,1));(y||!d)&&h.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var l,d=be.get(this),x=d[a+"queue"],y=d[a+"queueHooks"],M=h.timers,R=x?x.length:0;for(d.finish=!0,h.queue(this,a,[]),y&&y.stop&&y.stop.call(this,!0),l=M.length;l--;)M[l].elem===this&&M[l].queue===a&&(M[l].anim.stop(!0),M.splice(l,1));for(l=0;l<R;l++)x[l]&&x[l].finish&&x[l].finish.call(this);delete d.finish})}}),h.each(["toggle","show","hide"],function(a,l){var d=h.fn[l];h.fn[l]=function(x,y,M){return x==null||typeof x=="boolean"?d.apply(this,arguments):this.animate(Rs(l,!0),x,y,M)}}),h.each({slideDown:Rs("show"),slideUp:Rs("hide"),slideToggle:Rs("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,l){h.fn[a]=function(d,x,y){return this.animate(l,d,x,y)}}),h.timers=[],h.fx.tick=function(){var a,l=0,d=h.timers;for(nr=Date.now();l<d.length;l++)a=d[l],!a()&&d[l]===a&&d.splice(l--,1);d.length||h.fx.stop(),nr=void 0},h.fx.timer=function(a){h.timers.push(a),h.fx.start()},h.fx.start=function(){ws||(ws=!0,Oa())},h.fx.stop=function(){ws=null},h.fx.speeds={slow:600,fast:200,_default:400},h.fn.delay=function(a,l){return a=h.fx&&h.fx.speeds[a]||a,l=l||"fx",this.queue(l,function(d,x){var y=r.setTimeout(d,a);x.stop=function(){r.clearTimeout(y)}})};var ad=/^(?:input|select|textarea|button)$/i,od=/^(?:a|area)$/i;h.fn.extend({prop:function(a,l){return dt(this,h.prop,a,l,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[h.propFix[a]||a]})}}),h.extend({prop:function(a,l,d){var x,y,M=a.nodeType;if(!(M===3||M===8||M===2))return(M!==1||!h.isXMLDoc(a))&&(l=h.propFix[l]||l,y=h.propHooks[l]),d!==void 0?y&&"set"in y&&(x=y.set(a,d,l))!==void 0?x:a[l]=d:y&&"get"in y&&(x=y.get(a,l))!==null?x:a[l]},propHooks:{tabIndex:{get:function(a){var l=a.getAttribute("tabindex");return l?parseInt(l,10):ad.test(a.nodeName)||od.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),w&&(h.propHooks.selected={get:function(a){var l=a.parentNode;return l&&l.parentNode&&l.parentNode.selectedIndex,null},set:function(a){var l=a.parentNode;l&&(l.selectedIndex,l.parentNode&&l.parentNode.selectedIndex)}}),h.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){h.propFix[this.toLowerCase()]=this});function Pi(a){var l=a.match(k)||[];return l.join(" ")}function ir(a){return a.getAttribute&&a.getAttribute("class")||""}function Ba(a){return Array.isArray(a)?a:typeof a=="string"?a.match(k)||[]:[]}h.fn.extend({addClass:function(a){var l,d,x,y,M,R;return typeof a=="function"?this.each(function(O){h(this).addClass(a.call(this,O,ir(this)))}):(l=Ba(a),l.length?this.each(function(){if(x=ir(this),d=this.nodeType===1&&" "+Pi(x)+" ",d){for(M=0;M<l.length;M++)y=l[M],d.indexOf(" "+y+" ")<0&&(d+=y+" ");R=Pi(d),x!==R&&this.setAttribute("class",R)}}):this)},removeClass:function(a){var l,d,x,y,M,R;return typeof a=="function"?this.each(function(O){h(this).removeClass(a.call(this,O,ir(this)))}):arguments.length?(l=Ba(a),l.length?this.each(function(){if(x=ir(this),d=this.nodeType===1&&" "+Pi(x)+" ",d){for(M=0;M<l.length;M++)for(y=l[M];d.indexOf(" "+y+" ")>-1;)d=d.replace(" "+y+" "," ");R=Pi(d),x!==R&&this.setAttribute("class",R)}}):this):this.attr("class","")},toggleClass:function(a,l){var d,x,y,M;return typeof a=="function"?this.each(function(R){h(this).toggleClass(a.call(this,R,ir(this),l),l)}):typeof l=="boolean"?l?this.addClass(a):this.removeClass(a):(d=Ba(a),d.length?this.each(function(){for(M=h(this),y=0;y<d.length;y++)x=d[y],M.hasClass(x)?M.removeClass(x):M.addClass(x)}):this)},hasClass:function(a){var l,d,x=0;for(l=" "+a+" ";d=this[x++];)if(d.nodeType===1&&(" "+Pi(ir(d))+" ").indexOf(l)>-1)return!0;return!1}}),h.fn.extend({val:function(a){var l,d,x,y=this[0];return arguments.length?(x=typeof a=="function",this.each(function(M){var R;this.nodeType===1&&(x?R=a.call(this,M,h(this).val()):R=a,R==null?R="":typeof R=="number"?R+="":Array.isArray(R)&&(R=h.map(R,function(O){return O==null?"":O+""})),l=h.valHooks[this.type]||h.valHooks[this.nodeName.toLowerCase()],(!l||!("set"in l)||l.set(this,R,"value")===void 0)&&(this.value=R))})):y?(l=h.valHooks[y.type]||h.valHooks[y.nodeName.toLowerCase()],l&&"get"in l&&(d=l.get(y,"value"))!==void 0?d:(d=y.value,d??"")):void 0}}),h.extend({valHooks:{select:{get:function(a){var l,d,x,y=a.options,M=a.selectedIndex,R=a.type==="select-one",O=R?null:[],N=R?M+1:y.length;for(M<0?x=N:x=R?M:0;x<N;x++)if(d=y[x],d.selected&&!d.disabled&&(!d.parentNode.disabled||!I(d.parentNode,"optgroup"))){if(l=h(d).val(),R)return l;O.push(l)}return O},set:function(a,l){for(var d,x,y=a.options,M=h.makeArray(l),R=y.length;R--;)x=y[R],(x.selected=h.inArray(h(x).val(),M)>-1)&&(d=!0);return d||(a.selectedIndex=-1),M}}}}),w&&(h.valHooks.option={get:function(a){var l=a.getAttribute("value");return l??Pi(h.text(a))}}),h.each(["radio","checkbox"],function(){h.valHooks[this]={set:function(a,l){if(Array.isArray(l))return a.checked=h.inArray(h(a).val(),l)>-1}}});var Gl=/^(?:focusinfocus|focusoutblur)$/,Wl=function(a){a.stopPropagation()};h.extend(h.event,{trigger:function(a,l,d,x){var y,M,R,O,N,W,K,te,q=[d||_],ee=p.call(a,"type")?a.type:a,Re=p.call(a,"namespace")?a.namespace.split("."):[];if(M=te=R=d=d||_,!(d.nodeType===3||d.nodeType===8)&&!Gl.test(ee+h.event.triggered)&&(ee.indexOf(".")>-1&&(Re=ee.split("."),ee=Re.shift(),Re.sort()),N=ee.indexOf(":")<0&&"on"+ee,a=a[h.expando]?a:new h.Event(ee,typeof a=="object"&&a),a.isTrigger=x?2:3,a.namespace=Re.join("."),a.rnamespace=a.namespace?new RegExp("(^|\\.)"+Re.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,a.result=void 0,a.target||(a.target=d),l=l==null?[a]:h.makeArray(l,[a]),K=h.event.special[ee]||{},!(!x&&K.trigger&&K.trigger.apply(d,l)===!1))){if(!x&&!K.noBubble&&!T(d)){for(O=K.delegateType||ee,Gl.test(O+ee)||(M=M.parentNode);M;M=M.parentNode)q.push(M),R=M;R===(d.ownerDocument||_)&&q.push(R.defaultView||R.parentWindow||r)}for(y=0;(M=q[y++])&&!a.isPropagationStopped();)te=M,a.type=y>1?O:K.bindType||ee,W=(be.get(M,"events")||Object.create(null))[a.type]&&be.get(M,"handle"),W&&W.apply(M,l),W=N&&M[N],W&&W.apply&&He(M)&&(a.result=W.apply(M,l),a.result===!1&&a.preventDefault());return a.type=ee,!x&&!a.isDefaultPrevented()&&(!K._default||K._default.apply(q.pop(),l)===!1)&&He(d)&&N&&typeof d[ee]=="function"&&!T(d)&&(R=d[N],R&&(d[N]=null),h.event.triggered=ee,a.isPropagationStopped()&&te.addEventListener(ee,Wl),d[ee](),a.isPropagationStopped()&&te.removeEventListener(ee,Wl),h.event.triggered=void 0,R&&(d[N]=R)),a.result}},simulate:function(a,l,d){var x=h.extend(new h.Event,d,{type:a,isSimulated:!0});h.event.trigger(x,null,l)}}),h.fn.extend({trigger:function(a,l){return this.each(function(){h.event.trigger(a,l,this)})},triggerHandler:function(a,l){var d=this[0];if(d)return h.event.trigger(a,l,d,!0)}});var Yr=r.location,Xl={guid:Date.now()},ka=/\?/;h.parseXML=function(a){var l,d;if(!a||typeof a!="string")return null;try{l=new r.DOMParser().parseFromString(a,"text/xml")}catch{}return d=l&&l.getElementsByTagName("parsererror")[0],(!l||d)&&h.error("Invalid XML: "+(d?h.map(d.childNodes,function(x){return x.textContent}).join(`
`):a)),l};var cd=/\[\]$/,ql=/\r?\n/g,ld=/^(?:submit|button|image|reset|file)$/i,ud=/^(?:input|select|textarea|keygen)/i;function za(a,l,d,x){var y;if(Array.isArray(l))h.each(l,function(M,R){d||cd.test(a)?x(a,R):za(a+"["+(typeof R=="object"&&R!=null?M:"")+"]",R,d,x)});else if(!d&&S(l)==="object")for(y in l)za(a+"["+y+"]",l[y],d,x);else x(a,l)}h.param=function(a,l){var d,x=[],y=function(M,R){var O=typeof R=="function"?R():R;x[x.length]=encodeURIComponent(M)+"="+encodeURIComponent(O??"")};if(a==null)return"";if(Array.isArray(a)||a.jquery&&!h.isPlainObject(a))h.each(a,function(){y(this.name,this.value)});else for(d in a)za(d,a[d],l,y);return x.join("&")},h.fn.extend({serialize:function(){return h.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=h.prop(this,"elements");return a?h.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!h(this).is(":disabled")&&ud.test(this.nodeName)&&!ld.test(a)&&(this.checked||!Ts.test(a))}).map(function(a,l){var d=h(this).val();return d==null?null:Array.isArray(d)?h.map(d,function(x){return{name:l.name,value:x.replace(ql,`\r
`)}}):{name:l.name,value:d.replace(ql,`\r
`)}}).get()}});var fd=/%20/g,hd=/#.*$/,dd=/([?&])_=[^&]*/,pd=/^(.*?):[ \t]*([^\r\n]*)$/mg,md=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,gd=/^(?:GET|HEAD)$/,xd=/^\/\//,jl={},Va={},Yl="*/".concat("*"),Ha=_.createElement("a");Ha.href=Yr.href;function Kl(a){return function(l,d){typeof l!="string"&&(d=l,l="*");var x,y=0,M=l.toLowerCase().match(k)||[];if(typeof d=="function")for(;x=M[y++];)x[0]==="+"?(x=x.slice(1)||"*",(a[x]=a[x]||[]).unshift(d)):(a[x]=a[x]||[]).push(d)}}function Zl(a,l,d,x){var y={},M=a===Va;function R(O){var N;return y[O]=!0,h.each(a[O]||[],function(W,K){var te=K(l,d,x);if(typeof te=="string"&&!M&&!y[te])return l.dataTypes.unshift(te),R(te),!1;if(M)return!(N=te)}),N}return R(l.dataTypes[0])||!y["*"]&&R("*")}function Ga(a,l){var d,x,y=h.ajaxSettings.flatOptions||{};for(d in l)l[d]!==void 0&&((y[d]?a:x||(x={}))[d]=l[d]);return x&&h.extend(!0,a,x),a}function _d(a,l,d){for(var x,y,M,R,O=a.contents,N=a.dataTypes;N[0]==="*";)N.shift(),x===void 0&&(x=a.mimeType||l.getResponseHeader("Content-Type"));if(x){for(y in O)if(O[y]&&O[y].test(x)){N.unshift(y);break}}if(N[0]in d)M=N[0];else{for(y in d){if(!N[0]||a.converters[y+" "+N[0]]){M=y;break}R||(R=y)}M=M||R}if(M)return M!==N[0]&&N.unshift(M),d[M]}function vd(a,l,d,x){var y,M,R,O,N,W={},K=a.dataTypes.slice();if(K[1])for(R in a.converters)W[R.toLowerCase()]=a.converters[R];for(M=K.shift();M;)if(a.responseFields[M]&&(d[a.responseFields[M]]=l),!N&&x&&a.dataFilter&&(l=a.dataFilter(l,a.dataType)),N=M,M=K.shift(),M){if(M==="*")M=N;else if(N!=="*"&&N!==M){if(R=W[N+" "+M]||W["* "+M],!R){for(y in W)if(O=y.split(" "),O[1]===M&&(R=W[N+" "+O[0]]||W["* "+O[0]],R)){R===!0?R=W[y]:W[y]!==!0&&(M=O[0],K.unshift(O[1]));break}}if(R!==!0)if(R&&a.throws)l=R(l);else try{l=R(l)}catch(te){return{state:"parsererror",error:R?te:"No conversion from "+N+" to "+M}}}}return{state:"success",data:l}}h.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Yr.href,type:"GET",isLocal:md.test(Yr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Yl,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":h.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,l){return l?Ga(Ga(a,h.ajaxSettings),l):Ga(h.ajaxSettings,a)},ajaxPrefilter:Kl(jl),ajaxTransport:Kl(Va),ajax:function(a,l){typeof a=="object"&&(l=a,a=void 0),l=l||{};var d,x,y,M,R,O,N,W,K,te,q=h.ajaxSetup({},l),ee=q.context||q,Re=q.context&&(ee.nodeType||ee.jquery)?h(ee):h.event,Ze=h.Deferred(),Ye=h.Callbacks("once memory"),Ut=q.statusCode||{},Lt={},pn={},Zt="canceled",gt={readyState:0,getResponseHeader:function(vt){var Ot;if(N){if(!M)for(M={};Ot=pd.exec(y);)M[Ot[1].toLowerCase()+" "]=(M[Ot[1].toLowerCase()+" "]||[]).concat(Ot[2]);Ot=M[vt.toLowerCase()+" "]}return Ot==null?null:Ot.join(", ")},getAllResponseHeaders:function(){return N?y:null},setRequestHeader:function(vt,Ot){return N==null&&(vt=pn[vt.toLowerCase()]=pn[vt.toLowerCase()]||vt,Lt[vt]=Ot),this},overrideMimeType:function(vt){return N==null&&(q.mimeType=vt),this},statusCode:function(vt){var Ot;if(vt)if(N)gt.always(vt[gt.status]);else for(Ot in vt)Ut[Ot]=[Ut[Ot],vt[Ot]];return this},abort:function(vt){var Ot=vt||Zt;return d&&d.abort(Ot),Cs(0,Ot),this}};if(Ze.promise(gt),q.url=((a||q.url||Yr.href)+"").replace(xd,Yr.protocol+"//"),q.type=l.method||l.type||q.method||q.type,q.dataTypes=(q.dataType||"*").toLowerCase().match(k)||[""],q.crossDomain==null){O=_.createElement("a");try{O.href=q.url,O.href=O.href,q.crossDomain=Ha.protocol+"//"+Ha.host!=O.protocol+"//"+O.host}catch{q.crossDomain=!0}}if(Zl(jl,q,l,gt),q.data&&q.processData&&typeof q.data!="string"&&(q.data=h.param(q.data,q.traditional)),N)return gt;W=h.event&&q.global,W&&h.active++===0&&h.event.trigger("ajaxStart"),q.type=q.type.toUpperCase(),q.hasContent=!gd.test(q.type),x=q.url.replace(hd,""),q.hasContent?q.data&&q.processData&&(q.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(q.data=q.data.replace(fd,"+")):(te=q.url.slice(x.length),q.data&&(q.processData||typeof q.data=="string")&&(x+=(ka.test(x)?"&":"?")+q.data,delete q.data),q.cache===!1&&(x=x.replace(dd,"$1"),te=(ka.test(x)?"&":"?")+"_="+Xl.guid+++te),q.url=x+te),q.ifModified&&(h.lastModified[x]&&gt.setRequestHeader("If-Modified-Since",h.lastModified[x]),h.etag[x]&&gt.setRequestHeader("If-None-Match",h.etag[x])),(q.data&&q.hasContent&&q.contentType!==!1||l.contentType)&&gt.setRequestHeader("Content-Type",q.contentType),gt.setRequestHeader("Accept",q.dataTypes[0]&&q.accepts[q.dataTypes[0]]?q.accepts[q.dataTypes[0]]+(q.dataTypes[0]!=="*"?", "+Yl+"; q=0.01":""):q.accepts["*"]);for(K in q.headers)gt.setRequestHeader(K,q.headers[K]);if(q.beforeSend&&(q.beforeSend.call(ee,gt,q)===!1||N))return gt.abort();if(Zt="abort",Ye.add(q.complete),gt.done(q.success),gt.fail(q.error),d=Zl(Va,q,l,gt),!d)Cs(-1,"No Transport");else{if(gt.readyState=1,W&&Re.trigger("ajaxSend",[gt,q]),N)return gt;q.async&&q.timeout>0&&(R=r.setTimeout(function(){gt.abort("timeout")},q.timeout));try{N=!1,d.send(Lt,Cs)}catch(vt){if(N)throw vt;Cs(-1,vt)}}function Cs(vt,Ot,Ql,Sd){var di,Xa,Kr,rr,sr,Nn=Ot;N||(N=!0,R&&r.clearTimeout(R),d=void 0,y=Sd||"",gt.readyState=vt>0?4:0,di=vt>=200&&vt<300||vt===304,Ql&&(rr=_d(q,gt,Ql)),!di&&h.inArray("script",q.dataTypes)>-1&&h.inArray("json",q.dataTypes)<0&&(q.converters["text script"]=function(){}),rr=vd(q,rr,gt,di),di?(q.ifModified&&(sr=gt.getResponseHeader("Last-Modified"),sr&&(h.lastModified[x]=sr),sr=gt.getResponseHeader("etag"),sr&&(h.etag[x]=sr)),vt===204||q.type==="HEAD"?Nn="nocontent":vt===304?Nn="notmodified":(Nn=rr.state,Xa=rr.data,Kr=rr.error,di=!Kr)):(Kr=Nn,(vt||!Nn)&&(Nn="error",vt<0&&(vt=0))),gt.status=vt,gt.statusText=(Ot||Nn)+"",di?Ze.resolveWith(ee,[Xa,Nn,gt]):Ze.rejectWith(ee,[gt,Nn,Kr]),gt.statusCode(Ut),Ut=void 0,W&&Re.trigger(di?"ajaxSuccess":"ajaxError",[gt,q,di?Xa:Kr]),Ye.fireWith(ee,[gt,Nn]),W&&(Re.trigger("ajaxComplete",[gt,q]),--h.active||h.event.trigger("ajaxStop")))}return gt},getJSON:function(a,l,d){return h.get(a,l,d,"json")},getScript:function(a,l){return h.get(a,void 0,l,"script")}}),h.each(["get","post"],function(a,l){h[l]=function(d,x,y,M){return(typeof x=="function"||x===null)&&(M=M||y,y=x,x=void 0),h.ajax(h.extend({url:d,type:l,dataType:M,data:x,success:y},h.isPlainObject(d)&&d))}}),h.ajaxPrefilter(function(a){var l;for(l in a.headers)l.toLowerCase()==="content-type"&&(a.contentType=a.headers[l]||"")}),h._evalUrl=function(a,l,d){return h.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,scriptAttrs:l.crossOrigin?{crossOrigin:l.crossOrigin}:void 0,converters:{"text script":function(){}},dataFilter:function(x){h.globalEval(x,l,d)}})},h.fn.extend({wrapAll:function(a){var l;return this[0]&&(typeof a=="function"&&(a=a.call(this[0])),l=h(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&l.insertBefore(this[0]),l.map(function(){for(var d=this;d.firstElementChild;)d=d.firstElementChild;return d}).append(this)),this},wrapInner:function(a){return typeof a=="function"?this.each(function(l){h(this).wrapInner(a.call(this,l))}):this.each(function(){var l=h(this),d=l.contents();d.length?d.wrapAll(a):l.append(a)})},wrap:function(a){var l=typeof a=="function";return this.each(function(d){h(this).wrapAll(l?a.call(this,d):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){h(this).replaceWith(this.childNodes)}),this}}),h.expr.pseudos.hidden=function(a){return!h.expr.pseudos.visible(a)},h.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},h.ajaxSettings.xhr=function(){return new r.XMLHttpRequest};var yd={0:200};h.ajaxTransport(function(a){var l;return{send:function(d,x){var y,M=a.xhr();if(M.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(y in a.xhrFields)M[y]=a.xhrFields[y];a.mimeType&&M.overrideMimeType&&M.overrideMimeType(a.mimeType),!a.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");for(y in d)M.setRequestHeader(y,d[y]);l=function(R){return function(){l&&(l=M.onload=M.onerror=M.onabort=M.ontimeout=null,R==="abort"?M.abort():R==="error"?x(M.status,M.statusText):x(yd[M.status]||M.status,M.statusText,(M.responseType||"text")==="text"?{text:M.responseText}:{binary:M.response},M.getAllResponseHeaders()))}},M.onload=l(),M.onabort=M.onerror=M.ontimeout=l("error"),l=l("abort");try{M.send(a.hasContent&&a.data||null)}catch(R){if(l)throw R}},abort:function(){l&&l()}}});function $l(a){return a.scriptAttrs||!a.headers&&(a.crossDomain||a.async&&h.inArray("json",a.dataTypes)<0)}h.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},converters:{"text script":function(a){return h.globalEval(a),a}}}),h.ajaxPrefilter("script",function(a){a.cache===void 0&&(a.cache=!1),$l(a)&&(a.type="GET")}),h.ajaxTransport("script",function(a){if($l(a)){var l,d;return{send:function(x,y){l=h("<script>").attr(a.scriptAttrs||{}).prop({charset:a.scriptCharset,src:a.url}).on("load error",d=function(M){l.remove(),d=null,M&&y(M.type==="error"?404:200,M.type)}),_.head.appendChild(l[0])},abort:function(){d&&d()}}}});var Jl=[],Wa=/(=)\?(?=&|$)|\?\?/;h.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jl.pop()||h.expando+"_"+Xl.guid++;return this[a]=!0,a}}),h.ajaxPrefilter("jsonp",function(a,l,d){var x,y,M,R=a.jsonp!==!1&&(Wa.test(a.url)?"url":typeof a.data=="string"&&(a.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Wa.test(a.data)&&"data");return x=a.jsonpCallback=typeof a.jsonpCallback=="function"?a.jsonpCallback():a.jsonpCallback,R?a[R]=a[R].replace(Wa,"$1"+x):a.jsonp!==!1&&(a.url+=(ka.test(a.url)?"&":"?")+a.jsonp+"="+x),a.converters["script json"]=function(){return M||h.error(x+" was not called"),M[0]},a.dataTypes[0]="json",y=r[x],r[x]=function(){M=arguments},d.always(function(){y===void 0?h(r).removeProp(x):r[x]=y,a[x]&&(a.jsonpCallback=l.jsonpCallback,Jl.push(x)),M&&typeof y=="function"&&y(M[0]),M=y=void 0}),"script"}),h.ajaxPrefilter(function(a,l){typeof a.data!="string"&&!h.isPlainObject(a.data)&&!Array.isArray(a.data)&&!("processData"in l)&&(a.processData=!1),a.data instanceof r.FormData&&(a.contentType=!1)}),h.parseHTML=function(a,l,d){if(typeof a!="string"&&!Xr(a+""))return[];typeof l=="boolean"&&(d=l,l=!1);var x,y;return l||(l=new r.DOMParser().parseFromString("","text/html")),x=Ri.exec(a),y=!d&&[],x?[l.createElement(x[1])]:(x=Al([a],l,y),y&&y.length&&h(y).remove(),h.merge([],x.childNodes))},h.fn.load=function(a,l,d){var x,y,M,R=this,O=a.indexOf(" ");return O>-1&&(x=Pi(a.slice(O)),a=a.slice(0,O)),typeof l=="function"?(d=l,l=void 0):l&&typeof l=="object"&&(y="POST"),R.length>0&&h.ajax({url:a,type:y||"GET",dataType:"html",data:l}).done(function(N){M=arguments,R.html(x?h("<div>").append(h.parseHTML(N)).find(x):N)}).always(d&&function(N,W){R.each(function(){d.apply(this,M||[N.responseText,W,N])})}),this},h.expr.pseudos.animated=function(a){return h.grep(h.timers,function(l){return a===l.elem}).length},h.offset={setOffset:function(a,l,d){var x,y,M,R,O,N,W,K=h.css(a,"position"),te=h(a),q={};K==="static"&&(a.style.position="relative"),O=te.offset(),M=h.css(a,"top"),N=h.css(a,"left"),W=(K==="absolute"||K==="fixed")&&(M+N).indexOf("auto")>-1,W?(x=te.position(),R=x.top,y=x.left):(R=parseFloat(M)||0,y=parseFloat(N)||0),typeof l=="function"&&(l=l.call(a,d,h.extend({},O))),l.top!=null&&(q.top=l.top-O.top+R),l.left!=null&&(q.left=l.left-O.left+y),"using"in l?l.using.call(a,q):te.css(q)}},h.fn.extend({offset:function(a){if(arguments.length)return a===void 0?this:this.each(function(y){h.offset.setOffset(this,a,y)});var l,d,x=this[0];if(x)return x.getClientRects().length?(l=x.getBoundingClientRect(),d=x.ownerDocument.defaultView,{top:l.top+d.pageYOffset,left:l.left+d.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var a,l,d,x=this[0],y={top:0,left:0};if(h.css(x,"position")==="fixed")l=x.getBoundingClientRect();else{for(l=this.offset(),d=x.ownerDocument,a=x.offsetParent||d.documentElement;a&&a!==d.documentElement&&h.css(a,"position")==="static";)a=a.offsetParent||d.documentElement;a&&a!==x&&a.nodeType===1&&h.css(a,"position")!=="static"&&(y=h(a).offset(),y.top+=h.css(a,"borderTopWidth",!0),y.left+=h.css(a,"borderLeftWidth",!0))}return{top:l.top-y.top-h.css(x,"marginTop",!0),left:l.left-y.left-h.css(x,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&h.css(a,"position")==="static";)a=a.offsetParent;return a||fe})}}),h.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,l){var d=l==="pageYOffset";h.fn[a]=function(x){return dt(this,function(y,M,R){var O;if(T(y)?O=y:y.nodeType===9&&(O=y.defaultView),R===void 0)return O?O[l]:y[M];O?O.scrollTo(d?O.pageXOffset:R,d?R:O.pageYOffset):y[M]=R},a,x,arguments.length)}}),h.each({Height:"height",Width:"width"},function(a,l){h.each({padding:"inner"+a,content:l,"":"outer"+a},function(d,x){h.fn[x]=function(y,M){var R=arguments.length&&(d||typeof y!="boolean"),O=d||(y===!0||M===!0?"margin":"border");return dt(this,function(N,W,K){var te;return T(N)?x.indexOf("outer")===0?N["inner"+a]:N.document.documentElement["client"+a]:N.nodeType===9?(te=N.documentElement,Math.max(N.body["scroll"+a],te["scroll"+a],N.body["offset"+a],te["offset"+a],te["client"+a])):K===void 0?h.css(N,W,O):h.style(N,W,K,O)},l,R?y:void 0,R)}})}),h.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,l){h.fn[l]=function(d){return this.on(l,d)}}),h.fn.extend({bind:function(a,l,d){return this.on(a,null,l,d)},unbind:function(a,l){return this.off(a,null,l)},delegate:function(a,l,d,x){return this.on(l,a,d,x)},undelegate:function(a,l,d){return arguments.length===1?this.off(a,"**"):this.off(l,a||"**",d)},hover:function(a,l){return this.on("mouseenter",a).on("mouseleave",l||a)}}),h.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,l){h.fn[l]=function(d,x){return arguments.length>0?this.on(l,null,d,x):this.trigger(l)}}),h.proxy=function(a,l){var d,x,y;if(typeof l=="string"&&(d=a[l],l=a,a=d),typeof a=="function")return x=i.call(arguments,2),y=function(){return a.apply(l||this,x.concat(i.call(arguments)))},y.guid=a.guid=a.guid||h.guid++,y},h.holdReady=function(a){a?h.readyWait++:h.ready(!0)},h.expr[":"]=h.expr.filters=h.expr.pseudos,typeof define=="function"&&define.amd&&define("jquery",[],function(){return h});var bd=r.jQuery,Md=r.$;return h.noConflict=function(a){return r.$===h&&(r.$=Md),a&&r.jQuery===h&&(r.jQuery=bd),h},h}var _t=Td(window);const Jc="181",Ed=0,eu=1,Ad=2,nh=1,wd=2,ii=3,ui=0,mn=1,Bn=2,ci=0,Sr=1,tu=2,nu=3,iu=4,Rd=5,ki=100,Cd=101,Pd=102,Ld=103,Dd=104,Id=200,Nd=201,Ud=202,Fd=203,tc=204,nc=205,Od=206,Bd=207,kd=208,zd=209,Vd=210,Hd=211,Gd=212,Wd=213,Xd=214,ic=0,rc=1,sc=2,wr=3,ac=4,oc=5,cc=6,lc=7,ih=0,qd=1,jd=2,Ti=0,Yd=1,Kd=2,Zd=3,$d=4,Jd=5,Qd=6,ep=7,ru="attached",tp="detached",rh=300,Rr=301,Cr=302,uc=303,fc=304,ba=306,Pr=1e3,kn=1001,da=1002,cn=1003,sh=1004,os=1005,on=1006,oa=1007,si=1008,Gn=1009,ah=1010,oh=1011,ds=1012,Qc=1013,Gi=1014,Pn=1015,Fr=1016,el=1017,tl=1018,ps=1020,ch=35902,lh=35899,uh=1021,fh=1022,Mn=1023,ms=1026,gs=1027,nl=1028,il=1029,rl=1030,sl=1031,al=1033,ca=33776,la=33777,ua=33778,fa=33779,hc=35840,dc=35841,pc=35842,mc=35843,gc=36196,xc=37492,_c=37496,vc=37808,yc=37809,bc=37810,Mc=37811,Sc=37812,Tc=37813,Ec=37814,Ac=37815,wc=37816,Rc=37817,Cc=37818,Pc=37819,Lc=37820,Dc=37821,Ic=36492,Nc=36494,Uc=36495,Fc=36283,Oc=36284,Bc=36285,kc=36286,xs=2300,_s=2301,qa=2302,su=2400,au=2401,ou=2402,np=2500,ip=0,hh=1,zc=2,rp=3200,sp=3201,dh=0,ap=1,Mi="",Yt="srgb",ln="srgb-linear",pa="linear",Rt="srgb",ar=7680,cu=519,op=512,cp=513,lp=514,ph=515,up=516,fp=517,hp=518,dp=519,Vc=35044,lu="300 es",zn=2e3,ma=2001;function mh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function vs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pp(){const r=vs("canvas");return r.style.display="block",r}const uu={};function ga(...r){const e="THREE."+r.shift();console.log(e,...r)}function Ve(...r){const e="THREE."+r.shift();console.warn(e,...r)}function ct(...r){const e="THREE."+r.shift();console.error(e,...r)}function ys(...r){const e=r.join(" ");e in uu||(uu[e]=!0,Ve(...r))}function mp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class Or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fu=1234567;const ls=Math.PI/180,Lr=180/Math.PI;function Ln(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[r&255]+$t[r>>8&255]+$t[r>>16&255]+$t[r>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function lt(r,e,t){return Math.max(e,Math.min(t,r))}function ol(r,e){return(r%e+e)%e}function gp(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function xp(r,e,t){return r!==e?(t-r)/(e-r):0}function us(r,e,t){return(1-t)*r+t*e}function _p(r,e,t,n){return us(r,e,1-Math.exp(-t*n))}function vp(r,e=1){return e-Math.abs(ol(r,e*2)-e)}function yp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function bp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Mp(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Sp(r,e){return r+Math.random()*(e-r)}function Tp(r){return r*(.5-Math.random())}function Ep(r){r!==void 0&&(fu=r);let e=fu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ap(r){return r*ls}function wp(r){return r*Lr}function Rp(r){return(r&r-1)===0&&r!==0}function Cp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Pp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Lp(r,e,t,n,i){const s=Math.cos,o=Math.sin,c=s(t/2),u=o(t/2),f=s((e+n)/2),p=o((e+n)/2),m=s((e-n)/2),g=o((e-n)/2),v=s((n-e)/2),S=o((n-e)/2);switch(i){case"XYX":r.set(c*p,u*m,u*g,c*f);break;case"YZY":r.set(u*g,c*p,u*m,c*f);break;case"ZXZ":r.set(u*m,u*g,c*p,c*f);break;case"XZX":r.set(c*p,u*S,u*v,c*f);break;case"YXY":r.set(u*v,c*p,u*S,c*f);break;case"ZYZ":r.set(u*S,u*v,c*p,c*f);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function St(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Dp={DEG2RAD:ls,RAD2DEG:Lr,generateUUID:Ln,clamp:lt,euclideanModulo:ol,mapLinear:gp,inverseLerp:xp,lerp:us,damp:_p,pingpong:vp,smoothstep:yp,smootherstep:bp,randInt:Mp,randFloat:Sp,randFloatSpread:Tp,seededRandom:Ep,degToRad:Ap,radToDeg:wp,isPowerOfTwo:Rp,ceilPowerOfTwo:Cp,floorPowerOfTwo:Pp,setQuaternionFromProperEuler:Lp,normalize:St,denormalize:Rn};class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ei{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,c){let u=n[i+0],f=n[i+1],p=n[i+2],m=n[i+3],g=s[o+0],v=s[o+1],S=s[o+2],T=s[o+3];if(c<=0){e[t+0]=u,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(c>=1){e[t+0]=g,e[t+1]=v,e[t+2]=S,e[t+3]=T;return}if(m!==T||u!==g||f!==v||p!==S){let b=u*g+f*v+p*S+m*T;b<0&&(g=-g,v=-v,S=-S,T=-T,b=-b);let _=1-c;if(b<.9995){const D=Math.acos(b),P=Math.sin(D);_=Math.sin(_*D)/P,c=Math.sin(c*D)/P,u=u*_+g*c,f=f*_+v*c,p=p*_+S*c,m=m*_+T*c}else{u=u*_+g*c,f=f*_+v*c,p=p*_+S*c,m=m*_+T*c;const D=1/Math.sqrt(u*u+f*f+p*p+m*m);u*=D,f*=D,p*=D,m*=D}}e[t]=u,e[t+1]=f,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,i,s,o){const c=n[i],u=n[i+1],f=n[i+2],p=n[i+3],m=s[o],g=s[o+1],v=s[o+2],S=s[o+3];return e[t]=c*S+p*m+u*v-f*g,e[t+1]=u*S+p*g+f*m-c*v,e[t+2]=f*S+p*v+c*g-u*m,e[t+3]=p*S-c*m-u*g-f*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,c=Math.cos,u=Math.sin,f=c(n/2),p=c(i/2),m=c(s/2),g=u(n/2),v=u(i/2),S=u(s/2);switch(o){case"XYZ":this._x=g*p*m+f*v*S,this._y=f*v*m-g*p*S,this._z=f*p*S+g*v*m,this._w=f*p*m-g*v*S;break;case"YXZ":this._x=g*p*m+f*v*S,this._y=f*v*m-g*p*S,this._z=f*p*S-g*v*m,this._w=f*p*m+g*v*S;break;case"ZXY":this._x=g*p*m-f*v*S,this._y=f*v*m+g*p*S,this._z=f*p*S+g*v*m,this._w=f*p*m-g*v*S;break;case"ZYX":this._x=g*p*m-f*v*S,this._y=f*v*m+g*p*S,this._z=f*p*S-g*v*m,this._w=f*p*m+g*v*S;break;case"YZX":this._x=g*p*m+f*v*S,this._y=f*v*m+g*p*S,this._z=f*p*S-g*v*m,this._w=f*p*m-g*v*S;break;case"XZY":this._x=g*p*m-f*v*S,this._y=f*v*m-g*p*S,this._z=f*p*S+g*v*m,this._w=f*p*m+g*v*S;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],c=t[5],u=t[9],f=t[2],p=t[6],m=t[10],g=n+c+m;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(p-u)*v,this._y=(s-f)*v,this._z=(o-i)*v}else if(n>c&&n>m){const v=2*Math.sqrt(1+n-c-m);this._w=(p-u)/v,this._x=.25*v,this._y=(i+o)/v,this._z=(s+f)/v}else if(c>m){const v=2*Math.sqrt(1+c-n-m);this._w=(s-f)/v,this._x=(i+o)/v,this._y=.25*v,this._z=(u+p)/v}else{const v=2*Math.sqrt(1+m-n-c);this._w=(o-i)/v,this._x=(s+f)/v,this._y=(u+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,c=t._x,u=t._y,f=t._z,p=t._w;return this._x=n*p+o*c+i*f-s*u,this._y=i*p+o*u+s*c-n*f,this._z=s*p+o*f+n*u-i*c,this._w=o*p-n*c-i*u-s*f,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,c=this.dot(e);c<0&&(n=-n,i=-i,s=-s,o=-o,c=-c);let u=1-t;if(c<.9995){const f=Math.acos(c),p=Math.sin(f);u=Math.sin(u*f)/p,t=Math.sin(t*f)/p,this._x=this._x*u+n*t,this._y=this._y*u+i*t,this._z=this._z*u+s*t,this._w=this._w*u+o*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+i*t,this._z=this._z*u+s*t,this._w=this._w*u+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,c=e.z,u=e.w,f=2*(o*i-c*n),p=2*(c*t-s*i),m=2*(s*n-o*t);return this.x=t+u*f+o*m-c*p,this.y=n+u*p+c*f-s*m,this.z=i+u*m+s*p-o*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,c=t.y,u=t.z;return this.x=i*u-s*c,this.y=s*o-n*u,this.z=n*c-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ja.copy(this).projectOnVector(e),this.sub(ja)}reflect(e){return this.sub(ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new j,hu=new Ei;class nt{constructor(e,t,n,i,s,o,c,u,f){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,c,u,f)}set(e,t,n,i,s,o,c,u,f){const p=this.elements;return p[0]=e,p[1]=i,p[2]=c,p[3]=t,p[4]=s,p[5]=u,p[6]=n,p[7]=o,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],c=n[3],u=n[6],f=n[1],p=n[4],m=n[7],g=n[2],v=n[5],S=n[8],T=i[0],b=i[3],_=i[6],D=i[1],P=i[4],L=i[7],B=i[2],h=i[5],I=i[8];return s[0]=o*T+c*D+u*B,s[3]=o*b+c*P+u*h,s[6]=o*_+c*L+u*I,s[1]=f*T+p*D+m*B,s[4]=f*b+p*P+m*h,s[7]=f*_+p*L+m*I,s[2]=g*T+v*D+S*B,s[5]=g*b+v*P+S*h,s[8]=g*_+v*L+S*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],u=e[6],f=e[7],p=e[8];return t*o*p-t*c*f-n*s*p+n*c*u+i*s*f-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],u=e[6],f=e[7],p=e[8],m=p*o-c*f,g=c*u-p*s,v=f*s-o*u,S=t*m+n*g+i*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=m*T,e[1]=(i*f-p*n)*T,e[2]=(c*n-i*o)*T,e[3]=g*T,e[4]=(p*t-i*u)*T,e[5]=(i*s-c*t)*T,e[6]=v*T,e[7]=(n*u-f*t)*T,e[8]=(o*t-n*s)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,c){const u=Math.cos(s),f=Math.sin(s);return this.set(n*u,n*f,-n*(u*o+f*c)+o+e,-i*f,i*u,-i*(-f*o+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Ya.makeScale(e,t)),this}rotate(e){return this.premultiply(Ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ya=new nt,du=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pu=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ip(){const r={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Rt&&(i.r=li(i.r),i.g=li(i.g),i.b=li(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Rt&&(i.r=Tr(i.r),i.g=Tr(i.g),i.b=Tr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mi?pa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ln]:{primaries:e,whitePoint:n,transfer:pa,toXYZ:du,fromXYZ:pu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:du,fromXYZ:pu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),r}const pt=Ip();function li(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Tr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let or;class Np{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{or===void 0&&(or=vs("canvas")),or.width=e.width,or.height=e.height;const i=or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=or}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=li(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Up=0;class cl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,c=i.length;o<c;o++)i[o].isDataTexture?s.push(Ka(i[o].image)):s.push(Ka(i[o]))}else s=Ka(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ka(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Np.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let Fp=0;const Za=new j;class Xt extends Or{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=kn,i=kn,s=on,o=si,c=Mn,u=Gn,f=Xt.DEFAULT_ANISOTROPY,p=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Ln(),this.name="",this.source=new cl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=u,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Za).x}get height(){return this.source.getSize(Za).y}get depth(){return this.source.getSize(Za).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pr:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pr:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=rh;Xt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,n=0,i=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,f=u[0],p=u[4],m=u[8],g=u[1],v=u[5],S=u[9],T=u[2],b=u[6],_=u[10];if(Math.abs(p-g)<.01&&Math.abs(m-T)<.01&&Math.abs(S-b)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+T)<.1&&Math.abs(S+b)<.1&&Math.abs(f+v+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(f+1)/2,L=(v+1)/2,B=(_+1)/2,h=(p+g)/4,I=(m+T)/4,z=(S+b)/4;return P>L&&P>B?P<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(P),i=h/n,s=I/n):L>B?L<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(L),n=h/i,s=z/i):B<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(B),n=I/s,i=z/s),this.set(n,i,s,t),this}let D=Math.sqrt((b-S)*(b-S)+(m-T)*(m-T)+(g-p)*(g-p));return Math.abs(D)<.001&&(D=1),this.x=(b-S)/D,this.y=(m-T)/D,this.z=(g-p)/D,this.w=Math.acos((f+v+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Op extends Or{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Xt(i);this.textures=[];const o=n.count;for(let c=0;c<o;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new cl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends Op{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gh extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bp extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=s.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(s,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ps.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox)),Ps.applyMatrix4(e.matrixWorld),this.union(Ps)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),Ls.subVectors(this.max,Zr),cr.subVectors(e.a,Zr),lr.subVectors(e.b,Zr),ur.subVectors(e.c,Zr),pi.subVectors(lr,cr),mi.subVectors(ur,lr),Li.subVectors(cr,ur);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Li.z,Li.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Li.z,0,-Li.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Li.y,Li.x,0];return!$a(t,cr,lr,ur,Ls)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,cr,lr,ur,Ls))?!1:(Ds.crossVectors(pi,mi),t=[Ds.x,Ds.y,Ds.z],$a(t,cr,lr,ur,Ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zn=[new j,new j,new j,new j,new j,new j,new j,new j],En=new j,Ps=new Dn,cr=new j,lr=new j,ur=new j,pi=new j,mi=new j,Li=new j,Zr=new j,Ls=new j,Ds=new j,Di=new j;function $a(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Di.fromArray(r,s);const c=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),u=e.dot(Di),f=t.dot(Di),p=n.dot(Di);if(Math.max(-Math.max(u,f,p),Math.min(u,f,p))>c)return!1}return!0}const kp=new Dn,$r=new j,Ja=new j;class Xn{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);const t=$r.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($r,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(Ja)),this.expandByPoint($r.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const $n=new j,Qa=new j,Is=new j,gi=new j,eo=new j,Ns=new j,to=new j;class bs{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qa.copy(e).add(t).multiplyScalar(.5),Is.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(Qa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Is),c=gi.dot(this.direction),u=-gi.dot(Is),f=gi.lengthSq(),p=Math.abs(1-o*o);let m,g,v,S;if(p>0)if(m=o*u-c,g=o*c-u,S=s*p,m>=0)if(g>=-S)if(g<=S){const T=1/p;m*=T,g*=T,v=m*(m+o*g+2*c)+g*(o*m+g+2*u)+f}else g=s,m=Math.max(0,-(o*g+c)),v=-m*m+g*(g+2*u)+f;else g=-s,m=Math.max(0,-(o*g+c)),v=-m*m+g*(g+2*u)+f;else g<=-S?(m=Math.max(0,-(-o*s+c)),g=m>0?-s:Math.min(Math.max(-s,-u),s),v=-m*m+g*(g+2*u)+f):g<=S?(m=0,g=Math.min(Math.max(-s,-u),s),v=g*(g+2*u)+f):(m=Math.max(0,-(o*s+c)),g=m>0?s:Math.min(Math.max(-s,-u),s),v=-m*m+g*(g+2*u)+f);else g=o>0?-s:s,m=Math.max(0,-(o*g+c)),v=-m*m+g*(g+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,m),i&&i.copy(Qa).addScaledVector(Is,g),v}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),i=$n.dot($n)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),c=n-o,u=n+o;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,c,u;const f=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return f>=0?(n=(e.min.x-g.x)*f,i=(e.max.x-g.x)*f):(n=(e.max.x-g.x)*f,i=(e.min.x-g.x)*f),p>=0?(s=(e.min.y-g.y)*p,o=(e.max.y-g.y)*p):(s=(e.max.y-g.y)*p,o=(e.min.y-g.y)*p),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),m>=0?(c=(e.min.z-g.z)*m,u=(e.max.z-g.z)*m):(c=(e.max.z-g.z)*m,u=(e.min.z-g.z)*m),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,i,s){eo.subVectors(t,e),Ns.subVectors(n,e),to.crossVectors(eo,Ns);let o=this.direction.dot(to),c;if(o>0){if(i)return null;c=1}else if(o<0)c=-1,o=-o;else return null;gi.subVectors(this.origin,e);const u=c*this.direction.dot(Ns.crossVectors(gi,Ns));if(u<0)return null;const f=c*this.direction.dot(eo.cross(gi));if(f<0||u+f>o)return null;const p=-c*gi.dot(to);return p<0?null:this.at(p/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,i,s,o,c,u,f,p,m,g,v,S,T,b){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,c,u,f,p,m,g,v,S,T,b)}set(e,t,n,i,s,o,c,u,f,p,m,g,v,S,T,b){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=c,_[13]=u,_[2]=f,_[6]=p,_[10]=m,_[14]=g,_[3]=v,_[7]=S,_[11]=T,_[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fr.setFromMatrixColumn(e,0).length(),s=1/fr.setFromMatrixColumn(e,1).length(),o=1/fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),c=Math.sin(n),u=Math.cos(i),f=Math.sin(i),p=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const g=o*p,v=o*m,S=c*p,T=c*m;t[0]=u*p,t[4]=-u*m,t[8]=f,t[1]=v+S*f,t[5]=g-T*f,t[9]=-c*u,t[2]=T-g*f,t[6]=S+v*f,t[10]=o*u}else if(e.order==="YXZ"){const g=u*p,v=u*m,S=f*p,T=f*m;t[0]=g+T*c,t[4]=S*c-v,t[8]=o*f,t[1]=o*m,t[5]=o*p,t[9]=-c,t[2]=v*c-S,t[6]=T+g*c,t[10]=o*u}else if(e.order==="ZXY"){const g=u*p,v=u*m,S=f*p,T=f*m;t[0]=g-T*c,t[4]=-o*m,t[8]=S+v*c,t[1]=v+S*c,t[5]=o*p,t[9]=T-g*c,t[2]=-o*f,t[6]=c,t[10]=o*u}else if(e.order==="ZYX"){const g=o*p,v=o*m,S=c*p,T=c*m;t[0]=u*p,t[4]=S*f-v,t[8]=g*f+T,t[1]=u*m,t[5]=T*f+g,t[9]=v*f-S,t[2]=-f,t[6]=c*u,t[10]=o*u}else if(e.order==="YZX"){const g=o*u,v=o*f,S=c*u,T=c*f;t[0]=u*p,t[4]=T-g*m,t[8]=S*m+v,t[1]=m,t[5]=o*p,t[9]=-c*p,t[2]=-f*p,t[6]=v*m+S,t[10]=g-T*m}else if(e.order==="XZY"){const g=o*u,v=o*f,S=c*u,T=c*f;t[0]=u*p,t[4]=-m,t[8]=f*p,t[1]=g*m+T,t[5]=o*p,t[9]=v*m-S,t[2]=S*m-v,t[6]=c*p,t[10]=T*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zp,e,Vp)}lookAt(e,t,n){const i=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),xi.crossVectors(n,xn),xi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),xi.crossVectors(n,xn)),xi.normalize(),Us.crossVectors(xn,xi),i[0]=xi.x,i[4]=Us.x,i[8]=xn.x,i[1]=xi.y,i[5]=Us.y,i[9]=xn.y,i[2]=xi.z,i[6]=Us.z,i[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],c=n[4],u=n[8],f=n[12],p=n[1],m=n[5],g=n[9],v=n[13],S=n[2],T=n[6],b=n[10],_=n[14],D=n[3],P=n[7],L=n[11],B=n[15],h=i[0],I=i[4],z=i[8],E=i[12],w=i[1],F=i[5],H=i[9],G=i[13],$=i[2],ie=i[6],ae=i[10],fe=i[14],re=i[3],me=i[7],_e=i[11],Ie=i[15];return s[0]=o*h+c*w+u*$+f*re,s[4]=o*I+c*F+u*ie+f*me,s[8]=o*z+c*H+u*ae+f*_e,s[12]=o*E+c*G+u*fe+f*Ie,s[1]=p*h+m*w+g*$+v*re,s[5]=p*I+m*F+g*ie+v*me,s[9]=p*z+m*H+g*ae+v*_e,s[13]=p*E+m*G+g*fe+v*Ie,s[2]=S*h+T*w+b*$+_*re,s[6]=S*I+T*F+b*ie+_*me,s[10]=S*z+T*H+b*ae+_*_e,s[14]=S*E+T*G+b*fe+_*Ie,s[3]=D*h+P*w+L*$+B*re,s[7]=D*I+P*F+L*ie+B*me,s[11]=D*z+P*H+L*ae+B*_e,s[15]=D*E+P*G+L*fe+B*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],c=e[5],u=e[9],f=e[13],p=e[2],m=e[6],g=e[10],v=e[14],S=e[3],T=e[7],b=e[11],_=e[15];return S*(+s*u*m-i*f*m-s*c*g+n*f*g+i*c*v-n*u*v)+T*(+t*u*v-t*f*g+s*o*g-i*o*v+i*f*p-s*u*p)+b*(+t*f*m-t*c*v-s*o*m+n*o*v+s*c*p-n*f*p)+_*(-i*c*p-t*u*m+t*c*g+i*o*m-n*o*g+n*u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],u=e[6],f=e[7],p=e[8],m=e[9],g=e[10],v=e[11],S=e[12],T=e[13],b=e[14],_=e[15],D=m*b*f-T*g*f+T*u*v-c*b*v-m*u*_+c*g*_,P=S*g*f-p*b*f-S*u*v+o*b*v+p*u*_-o*g*_,L=p*T*f-S*m*f+S*c*v-o*T*v-p*c*_+o*m*_,B=S*m*u-p*T*u-S*c*g+o*T*g+p*c*b-o*m*b,h=t*D+n*P+i*L+s*B;if(h===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/h;return e[0]=D*I,e[1]=(T*g*s-m*b*s-T*i*v+n*b*v+m*i*_-n*g*_)*I,e[2]=(c*b*s-T*u*s+T*i*f-n*b*f-c*i*_+n*u*_)*I,e[3]=(m*u*s-c*g*s-m*i*f+n*g*f+c*i*v-n*u*v)*I,e[4]=P*I,e[5]=(p*b*s-S*g*s+S*i*v-t*b*v-p*i*_+t*g*_)*I,e[6]=(S*u*s-o*b*s-S*i*f+t*b*f+o*i*_-t*u*_)*I,e[7]=(o*g*s-p*u*s+p*i*f-t*g*f-o*i*v+t*u*v)*I,e[8]=L*I,e[9]=(S*m*s-p*T*s-S*n*v+t*T*v+p*n*_-t*m*_)*I,e[10]=(o*T*s-S*c*s+S*n*f-t*T*f-o*n*_+t*c*_)*I,e[11]=(p*c*s-o*m*s-p*n*f+t*m*f+o*n*v-t*c*v)*I,e[12]=B*I,e[13]=(p*T*i-S*m*i+S*n*g-t*T*g-p*n*b+t*m*b)*I,e[14]=(S*c*i-o*T*i-S*n*u+t*T*u+o*n*b-t*c*b)*I,e[15]=(o*m*i-p*c*i+p*n*u-t*m*u-o*n*g+t*c*g)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,c=e.y,u=e.z,f=s*o,p=s*c;return this.set(f*o+n,f*c-i*u,f*u+i*c,0,f*c+i*u,p*c+n,p*u-i*o,0,f*u-i*c,p*u+i*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,c=t._z,u=t._w,f=s+s,p=o+o,m=c+c,g=s*f,v=s*p,S=s*m,T=o*p,b=o*m,_=c*m,D=u*f,P=u*p,L=u*m,B=n.x,h=n.y,I=n.z;return i[0]=(1-(T+_))*B,i[1]=(v+L)*B,i[2]=(S-P)*B,i[3]=0,i[4]=(v-L)*h,i[5]=(1-(g+_))*h,i[6]=(b+D)*h,i[7]=0,i[8]=(S+P)*I,i[9]=(b-D)*I,i[10]=(1-(g+T))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fr.set(i[0],i[1],i[2]).length();const o=fr.set(i[4],i[5],i[6]).length(),c=fr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],An.copy(this);const f=1/s,p=1/o,m=1/c;return An.elements[0]*=f,An.elements[1]*=f,An.elements[2]*=f,An.elements[4]*=p,An.elements[5]*=p,An.elements[6]*=p,An.elements[8]*=m,An.elements[9]*=m,An.elements[10]*=m,t.setFromRotationMatrix(An),n.x=s,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,o,c=zn,u=!1){const f=this.elements,p=2*s/(t-e),m=2*s/(n-i),g=(t+e)/(t-e),v=(n+i)/(n-i);let S,T;if(u)S=s/(o-s),T=o*s/(o-s);else if(c===zn)S=-(o+s)/(o-s),T=-2*o*s/(o-s);else if(c===ma)S=-o/(o-s),T=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=p,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=T,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,i,s,o,c=zn,u=!1){const f=this.elements,p=2/(t-e),m=2/(n-i),g=-(t+e)/(t-e),v=-(n+i)/(n-i);let S,T;if(u)S=1/(o-s),T=o/(o-s);else if(c===zn)S=-2/(o-s),T=-(o+s)/(o-s);else if(c===ma)S=-1/(o-s),T=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=p,f[4]=0,f[8]=0,f[12]=g,f[1]=0,f[5]=m,f[9]=0,f[13]=v,f[2]=0,f[6]=0,f[10]=S,f[14]=T,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fr=new j,An=new tt,zp=new j(0,0,0),Vp=new j(1,1,1),xi=new j,Us=new j,xn=new j,mu=new tt,gu=new Ei;class Wn{constructor(e=0,t=0,n=0,i=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],c=i[8],u=i[1],f=i[5],p=i[9],m=i[2],g=i[6],v=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-lt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-p,v),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class ll{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hp=0;const xu=new j,hr=new Ei,Jn=new tt,Fs=new j,Jr=new j,Gp=new j,Wp=new Ei,_u=new j(1,0,0),vu=new j(0,1,0),yu=new j(0,0,1),bu={type:"added"},Xp={type:"removed"},dr={type:"childadded",child:null},no={type:"childremoved",child:null};class Dt extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new j,t=new Wn,n=new Ei,i=new j(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new nt}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(_u,e)}rotateY(e){return this.rotateOnAxis(vu,e)}rotateZ(e){return this.rotateOnAxis(yu,e)}translateOnAxis(e,t){return xu.copy(e).applyQuaternion(this.quaternion),this.position.add(xu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_u,e)}translateY(e){return this.translateOnAxis(vu,e)}translateZ(e){return this.translateOnAxis(yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fs.copy(e):Fs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Jr,Fs,this.up):Jn.lookAt(Fs,Jr,this.up),this.quaternion.setFromRotationMatrix(Jn),i&&(Jn.extractRotation(i.matrixWorld),hr.setFromRotationMatrix(Jn),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bu),dr.child=e,this.dispatchEvent(dr),dr.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xp),no.child=e,this.dispatchEvent(no),no.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bu),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,Gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,Wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(c=>({...c})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let f=0,p=u.length;f<p;f++){const m=u[f];s(e.shapes,m)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,f=this.material.length;u<f;u++)c.push(s(e.materials,this.material[u]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(s(e.animations,u))}}if(t){const c=o(e.geometries),u=o(e.materials),f=o(e.textures),p=o(e.images),m=o(e.shapes),g=o(e.skeletons),v=o(e.animations),S=o(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),S.length>0&&(n.nodes=S)}return n.object=i,n;function o(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Dt.DEFAULT_UP=new j(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new j,Qn=new j,io=new j,ei=new j,pr=new j,mr=new j,Mu=new j,ro=new j,so=new j,ao=new j,oo=new yt,co=new yt,lo=new yt;class Cn{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wn.subVectors(e,t),i.cross(wn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){wn.subVectors(i,t),Qn.subVectors(n,t),io.subVectors(e,t);const o=wn.dot(wn),c=wn.dot(Qn),u=wn.dot(io),f=Qn.dot(Qn),p=Qn.dot(io),m=o*f-c*c;if(m===0)return s.set(0,0,0),null;const g=1/m,v=(f*u-c*p)*g,S=(o*p-c*u)*g;return s.set(1-v-S,S,v)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,i,s,o,c,u){return this.getBarycoord(e,t,n,i,ei)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,ei.x),u.addScaledVector(o,ei.y),u.addScaledVector(c,ei.z),u)}static getInterpolatedAttribute(e,t,n,i,s,o){return oo.setScalar(0),co.setScalar(0),lo.setScalar(0),oo.fromBufferAttribute(e,t),co.fromBufferAttribute(e,n),lo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(oo,s.x),o.addScaledVector(co,s.y),o.addScaledVector(lo,s.z),o}static isFrontFacing(e,t,n,i){return wn.subVectors(n,t),Qn.subVectors(e,t),wn.cross(Qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),wn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,c;pr.subVectors(i,n),mr.subVectors(s,n),ro.subVectors(e,n);const u=pr.dot(ro),f=mr.dot(ro);if(u<=0&&f<=0)return t.copy(n);so.subVectors(e,i);const p=pr.dot(so),m=mr.dot(so);if(p>=0&&m<=p)return t.copy(i);const g=u*m-p*f;if(g<=0&&u>=0&&p<=0)return o=u/(u-p),t.copy(n).addScaledVector(pr,o);ao.subVectors(e,s);const v=pr.dot(ao),S=mr.dot(ao);if(S>=0&&v<=S)return t.copy(s);const T=v*f-u*S;if(T<=0&&f>=0&&S<=0)return c=f/(f-S),t.copy(n).addScaledVector(mr,c);const b=p*S-v*m;if(b<=0&&m-p>=0&&v-S>=0)return Mu.subVectors(s,i),c=(m-p)/(m-p+(v-S)),t.copy(i).addScaledVector(Mu,c);const _=1/(b+T+g);return o=T*_,c=g*_,t.copy(n).addScaledVector(pr,o).addScaledVector(mr,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Os={h:0,s:0,l:0};function uo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=ol(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=uo(o,s,e+1/3),this.g=uo(o,s,e),this.b=uo(o,s,e-1/3)}return pt.colorSpaceToWorking(this,i),this}setStyle(e,t=Yt){function n(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],c=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return pt.workingToColorSpace(Jt.copy(this),e),Math.round(lt(Jt.r*255,0,255))*65536+Math.round(lt(Jt.g*255,0,255))*256+Math.round(lt(Jt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(Jt.copy(this),t);const n=Jt.r,i=Jt.g,s=Jt.b,o=Math.max(n,i,s),c=Math.min(n,i,s);let u,f;const p=(c+o)/2;if(c===o)u=0,f=0;else{const m=o-c;switch(f=p<=.5?m/(o+c):m/(2-o-c),o){case n:u=(i-s)/m+(i<s?6:0);break;case i:u=(s-n)/m+2;break;case s:u=(n-i)/m+4;break}u/=6}return e.h=u,e.s=f,e.l=p,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Yt){pt.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,i=Jt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Os);const n=us(_i.h,Os.h,t),i=us(_i.s,Os.s,t),s=us(_i.l,Os.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Je;Je.NAMES=xh;let qp=0;class Hn extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=Sr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=nc,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tc&&(n.blendSrc=this.blendSrc),this.blendDst!==nc&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const c in s){const u=s[c];delete u.metadata,o.push(u)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vn extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new j,Bs=new ft;let jp=0;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),e}}class _h extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vh extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vt extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yp=0;const yn=new tt,fo=new Dt,gr=new j,_n=new Dn,Qr=new Dn,Wt=new j;class tn extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mh(e)?vh:_h)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return fo.lookAt(e),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const c=t[s];Qr.setFromBufferAttribute(c),this.morphTargetsRelative?(Wt.addVectors(_n.min,Qr.min),_n.expandByPoint(Wt),Wt.addVectors(_n.max,Qr.max),_n.expandByPoint(Wt)):(_n.expandByPoint(Qr.min),_n.expandByPoint(Qr.max))}_n.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Wt));if(t)for(let s=0,o=t.length;s<o;s++){const c=t[s],u=this.morphTargetsRelative;for(let f=0,p=c.count;f<p;f++)Wt.fromBufferAttribute(c,f),u&&(gr.fromBufferAttribute(e,f),Wt.add(gr)),i=Math.max(i,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),c=[],u=[];for(let z=0;z<n.count;z++)c[z]=new j,u[z]=new j;const f=new j,p=new j,m=new j,g=new ft,v=new ft,S=new ft,T=new j,b=new j;function _(z,E,w){f.fromBufferAttribute(n,z),p.fromBufferAttribute(n,E),m.fromBufferAttribute(n,w),g.fromBufferAttribute(s,z),v.fromBufferAttribute(s,E),S.fromBufferAttribute(s,w),p.sub(f),m.sub(f),v.sub(g),S.sub(g);const F=1/(v.x*S.y-S.x*v.y);isFinite(F)&&(T.copy(p).multiplyScalar(S.y).addScaledVector(m,-v.y).multiplyScalar(F),b.copy(m).multiplyScalar(v.x).addScaledVector(p,-S.x).multiplyScalar(F),c[z].add(T),c[E].add(T),c[w].add(T),u[z].add(b),u[E].add(b),u[w].add(b))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let z=0,E=D.length;z<E;++z){const w=D[z],F=w.start,H=w.count;for(let G=F,$=F+H;G<$;G+=3)_(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const P=new j,L=new j,B=new j,h=new j;function I(z){B.fromBufferAttribute(i,z),h.copy(B);const E=c[z];P.copy(E),P.sub(B.multiplyScalar(B.dot(E))).normalize(),L.crossVectors(h,E);const F=L.dot(u[z])<0?-1:1;o.setXYZW(z,P.x,P.y,P.z,F)}for(let z=0,E=D.length;z<E;++z){const w=D[z],F=w.start,H=w.count;for(let G=F,$=F+H;G<$;G+=3)I(e.getX(G+0)),I(e.getX(G+1)),I(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const i=new j,s=new j,o=new j,c=new j,u=new j,f=new j,p=new j,m=new j;if(e)for(let g=0,v=e.count;g<v;g+=3){const S=e.getX(g+0),T=e.getX(g+1),b=e.getX(g+2);i.fromBufferAttribute(t,S),s.fromBufferAttribute(t,T),o.fromBufferAttribute(t,b),p.subVectors(o,s),m.subVectors(i,s),p.cross(m),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,b),c.add(p),u.add(p),f.add(p),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(T,u.x,u.y,u.z),n.setXYZ(b,f.x,f.y,f.z)}else for(let g=0,v=t.count;g<v;g+=3)i.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),o.fromBufferAttribute(t,g+2),p.subVectors(o,s),m.subVectors(i,s),p.cross(m),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(c,u){const f=c.array,p=c.itemSize,m=c.normalized,g=new f.constructor(u.length*p);let v=0,S=0;for(let T=0,b=u.length;T<b;T++){c.isInterleavedBufferAttribute?v=u[T]*c.data.stride+c.offset:v=u[T]*p;for(let _=0;_<p;_++)g[S++]=f[v++]}return new Kt(g,p,m)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],f=e(u,n);t.setAttribute(c,f)}const s=this.morphAttributes;for(const c in s){const u=[],f=s[c];for(let p=0,m=f.length;p<m;p++){const g=f[p],v=e(g,n);u.push(v)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(e[f]=u[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const f=n[u];e.data.attributes[u]=f.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],p=[];for(let m=0,g=f.length;m<g;m++){const v=f[m];p.push(v.toJSON(e.data))}p.length>0&&(i[u]=p,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const f in i){const p=i[f];this.setAttribute(f,p.clone(t))}const s=e.morphAttributes;for(const f in s){const p=[],m=s[f];for(let g=0,v=m.length;g<v;g++)p.push(m[g].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let f=0,p=o.length;f<p;f++){const m=o[f];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Su=new tt,Ii=new bs,ks=new Xn,Tu=new j,zs=new j,Vs=new j,Hs=new j,ho=new j,Gs=new j,Eu=new j,Ws=new j;class en extends Dt{constructor(e=new tn,t=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){Gs.set(0,0,0);for(let u=0,f=s.length;u<f;u++){const p=c[u],m=s[u];p!==0&&(ho.fromBufferAttribute(m,e),o?Gs.addScaledVector(ho,p):Gs.addScaledVector(ho.sub(t),p))}t.add(Gs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(s),Ii.copy(e.ray).recast(e.near),!(ks.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(ks,Tu)===null||Ii.origin.distanceToSquared(Tu)>(e.far-e.near)**2))&&(Su.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(Su),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,c=s.index,u=s.attributes.position,f=s.attributes.uv,p=s.attributes.uv1,m=s.attributes.normal,g=s.groups,v=s.drawRange;if(c!==null)if(Array.isArray(o))for(let S=0,T=g.length;S<T;S++){const b=g[S],_=o[b.materialIndex],D=Math.max(b.start,v.start),P=Math.min(c.count,Math.min(b.start+b.count,v.start+v.count));for(let L=D,B=P;L<B;L+=3){const h=c.getX(L),I=c.getX(L+1),z=c.getX(L+2);i=Xs(this,_,e,n,f,p,m,h,I,z),i&&(i.faceIndex=Math.floor(L/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{const S=Math.max(0,v.start),T=Math.min(c.count,v.start+v.count);for(let b=S,_=T;b<_;b+=3){const D=c.getX(b),P=c.getX(b+1),L=c.getX(b+2);i=Xs(this,o,e,n,f,p,m,D,P,L),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(o))for(let S=0,T=g.length;S<T;S++){const b=g[S],_=o[b.materialIndex],D=Math.max(b.start,v.start),P=Math.min(u.count,Math.min(b.start+b.count,v.start+v.count));for(let L=D,B=P;L<B;L+=3){const h=L,I=L+1,z=L+2;i=Xs(this,_,e,n,f,p,m,h,I,z),i&&(i.faceIndex=Math.floor(L/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{const S=Math.max(0,v.start),T=Math.min(u.count,v.start+v.count);for(let b=S,_=T;b<_;b+=3){const D=b,P=b+1,L=b+2;i=Xs(this,o,e,n,f,p,m,D,P,L),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}}}function Kp(r,e,t,n,i,s,o,c){let u;if(e.side===mn?u=n.intersectTriangle(o,s,i,!0,c):u=n.intersectTriangle(i,s,o,e.side===ui,c),u===null)return null;Ws.copy(c),Ws.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(Ws);return f<t.near||f>t.far?null:{distance:f,point:Ws.clone(),object:r}}function Xs(r,e,t,n,i,s,o,c,u,f){r.getVertexPosition(c,zs),r.getVertexPosition(u,Vs),r.getVertexPosition(f,Hs);const p=Kp(r,e,t,n,zs,Vs,Hs,Eu);if(p){const m=new j;Cn.getBarycoord(Eu,zs,Vs,Hs,m),i&&(p.uv=Cn.getInterpolatedAttribute(i,c,u,f,m,new ft)),s&&(p.uv1=Cn.getInterpolatedAttribute(s,c,u,f,m,new ft)),o&&(p.normal=Cn.getInterpolatedAttribute(o,c,u,f,m,new j),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:u,c:f,normal:new j,materialIndex:0};Cn.getNormal(zs,Vs,Hs,g.normal),p.face=g,p.barycoord=m}return p}class Br extends tn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const c=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const u=[],f=[],p=[],m=[];let g=0,v=0;S("z","y","x",-1,-1,n,t,e,o,s,0),S("z","y","x",1,-1,n,t,-e,o,s,1),S("x","z","y",1,1,e,n,t,i,o,2),S("x","z","y",1,-1,e,n,-t,i,o,3),S("x","y","z",1,-1,e,t,n,i,s,4),S("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new Vt(f,3)),this.setAttribute("normal",new Vt(p,3)),this.setAttribute("uv",new Vt(m,2));function S(T,b,_,D,P,L,B,h,I,z,E){const w=L/I,F=B/z,H=L/2,G=B/2,$=h/2,ie=I+1,ae=z+1;let fe=0,re=0;const me=new j;for(let _e=0;_e<ae;_e++){const Ie=_e*F-G;for(let it=0;it<ie;it++){const ht=it*w-H;me[T]=ht*D,me[b]=Ie*P,me[_]=$,f.push(me.x,me.y,me.z),me[T]=0,me[b]=0,me[_]=h>0?1:-1,p.push(me.x,me.y,me.z),m.push(it/I),m.push(1-_e/z),fe+=1}}for(let _e=0;_e<z;_e++)for(let Ie=0;Ie<I;Ie++){const it=g+Ie+ie*_e,ht=g+Ie+ie*(_e+1),bt=g+(Ie+1)+ie*(_e+1),xt=g+(Ie+1)+ie*_e;u.push(it,ht,xt),u.push(ht,bt,xt),re+=6}c.addGroup(v,re,E),v+=re,g+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Dr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function sn(r){const e={};for(let t=0;t<r.length;t++){const n=Dr(r[t]);for(const i in n)e[i]=n[i]}return e}function Zp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function yh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const $p={clone:Dr,merge:sn};var Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=Zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bh extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new j,Au=new ft,wu=new ft;class an extends bh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,Au,wu),t.subVectors(wu,Au)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ls*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,f=o.fullHeight;s+=o.offsetX*i/u,t-=o.offsetY*n/f,i*=o.width/u,n*=o.height/f}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xr=-90,_r=1;class em extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new an(xr,_r,e,t);i.layers=this.layers,this.add(i);const s=new an(xr,_r,e,t);s.layers=this.layers,this.add(s);const o=new an(xr,_r,e,t);o.layers=this.layers,this.add(o);const c=new an(xr,_r,e,t);c.layers=this.layers,this.add(c);const u=new an(xr,_r,e,t);u.layers=this.layers,this.add(u);const f=new an(xr,_r,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,c,u]=t;for(const f of t)this.remove(f);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,c,u,f,p]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,f),n.texture.generateMipmaps=T,e.setRenderTarget(n,5,i),e.render(t,p),e.setRenderTarget(m,g,v),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Mh extends Xt{constructor(e=[],t=Rr,n,i,s,o,c,u,f,p){super(e,t,n,i,s,o,c,u,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tm extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Mh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Br(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:ci});s.uniforms.tEquirect.value=t;const o=new en(i,s),c=t.minFilter;return t.minFilter===si&&(t.minFilter=on),new em(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Hi extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nm={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const c=this._targetRay,u=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){o=!0;for(const T of e.hand.values()){const b=t.getJointPose(T,n),_=this._getHandJoint(f,T);b!==null&&(_.matrix.fromArray(b.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=b.radius),_.visible=b!==null}const p=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],g=p.position.distanceTo(m.position),v=.02,S=.005;f.inputState.pinching&&g>v+S?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&g<=v-S&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(nm)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=s!==null),f!==null&&(f.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class im extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vc,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new j;class ul{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ga("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ul(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ga("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ru=new j,Cu=new yt,Pu=new yt,sm=new j,Lu=new tt,qs=new j,mo=new Xn,Du=new tt,go=new bs;class am extends en{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ru,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qs),this.boundingBox.expandByPoint(qs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qs),this.boundingSphere.expandByPoint(qs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mo.copy(this.boundingSphere),mo.applyMatrix4(i),e.ray.intersectsSphere(mo)!==!1&&(Du.copy(i).invert(),go.copy(e.ray).applyMatrix4(Du),!(this.boundingBox!==null&&go.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,go)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ru?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ve("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Cu.fromBufferAttribute(i.attributes.skinIndex,e),Pu.fromBufferAttribute(i.attributes.skinWeight,e),Ru.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Pu.getComponent(s);if(o!==0){const c=Cu.getComponent(s);Lu.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(sm.copy(Ru).applyMatrix4(Lu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Sh extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fl extends Xt{constructor(e=null,t=1,n=1,i,s,o,c,u,f=cn,p=cn,m,g){super(null,o,c,u,f,p,i,s,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Iu=new tt,om=new tt;class hl{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ve("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const c=e[s]?e[s].matrixWorld:om;Iu.multiplyMatrices(c,t[s]),Iu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new hl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new fl(t,e,e,Mn,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(Ve("Skeleton: No bone found with UUID:",s),o=new Sh),this.bones.push(o),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class Hc extends Kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vr=new tt,Nu=new tt,js=[],Uu=new Dn,cm=new tt,es=new en,ts=new Xn;class lm extends en{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,cm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),Uu.copy(e.boundingBox).applyMatrix4(vr),this.boundingBox.union(Uu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),ts.copy(e.boundingSphere).applyMatrix4(vr),this.boundingSphere.union(ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let c=0;c<n.length;c++)n[c]=i[o+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ts.copy(this.boundingSphere),ts.applyMatrix4(n),e.ray.intersectsSphere(ts)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,vr),Nu.multiplyMatrices(n,vr),es.matrixWorld=Nu,es.raycast(e,js);for(let o=0,c=js.length;o<c;o++){const u=js[o];u.instanceId=s,u.object=this,t.push(u)}js.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new fl(new Float32Array(i*this.count),i,this.count,nl,Pn));const s=this.morphTexture.source.data.data;let o=0;for(let f=0;f<n.length;f++)o+=n[f];const c=this.geometry.morphTargetsRelative?1:1-o,u=i*e;s[u]=c,s.set(n,u+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const xo=new j,um=new j,fm=new nt;class Bi{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=xo.subVectors(n,t).cross(um.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fm.getNormalMatrix(e),i=this.coplanarPoint(xo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Xn,hm=new ft(.5,.5),Ys=new j;class dl{constructor(e=new Bi,t=new Bi,n=new Bi,i=new Bi,s=new Bi,o=new Bi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){const i=this.planes,s=e.elements,o=s[0],c=s[1],u=s[2],f=s[3],p=s[4],m=s[5],g=s[6],v=s[7],S=s[8],T=s[9],b=s[10],_=s[11],D=s[12],P=s[13],L=s[14],B=s[15];if(i[0].setComponents(f-o,v-p,_-S,B-D).normalize(),i[1].setComponents(f+o,v+p,_+S,B+D).normalize(),i[2].setComponents(f+c,v+m,_+T,B+P).normalize(),i[3].setComponents(f-c,v-m,_-T,B-P).normalize(),n)i[4].setComponents(u,g,b,L).normalize(),i[5].setComponents(f-u,v-g,_-b,B-L).normalize();else if(i[4].setComponents(f-u,v-g,_-b,B-L).normalize(),t===zn)i[5].setComponents(f+u,v+g,_+b,B+L).normalize();else if(t===ma)i[5].setComponents(u,g,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){Ni.center.set(0,0,0);const t=hm.distanceTo(e.center);return Ni.radius=.7071067811865476+t,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ys.x=i.normal.x>0?e.max.x:e.min.x,Ys.y=i.normal.y>0?e.max.y:e.min.y,Ys.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ma extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xa=new j,_a=new j,Fu=new tt,ns=new bs,Ks=new Xn,_o=new j,Ou=new j;class Sa extends Dt{constructor(e=new tn,t=new Ma){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)xa.fromBufferAttribute(t,i-1),_a.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xa.distanceTo(_a);e.setAttribute("lineDistance",new Vt(n,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(i),Ks.radius+=s,e.ray.intersectsSphere(Ks)===!1)return;Fu.copy(i).invert(),ns.copy(e.ray).applyMatrix4(Fu);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,f=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){const v=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let T=v,b=S-1;T<b;T+=f){const _=p.getX(T),D=p.getX(T+1),P=Zs(this,e,ns,u,_,D,T);P&&t.push(P)}if(this.isLineLoop){const T=p.getX(S-1),b=p.getX(v),_=Zs(this,e,ns,u,T,b,S-1);_&&t.push(_)}}else{const v=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let T=v,b=S-1;T<b;T+=f){const _=Zs(this,e,ns,u,T,T+1,T);_&&t.push(_)}if(this.isLineLoop){const T=Zs(this,e,ns,u,S-1,v,S-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function Zs(r,e,t,n,i,s,o){const c=r.geometry.attributes.position;if(xa.fromBufferAttribute(c,i),_a.fromBufferAttribute(c,s),t.distanceSqToSegment(xa,_a,_o,Ou)>n)return;_o.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(_o);if(!(f<e.near||f>e.far))return{distance:f,point:Ou.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Bu=new j,ku=new j;class Th extends Sa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Bu.fromBufferAttribute(t,i),ku.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bu.distanceTo(ku);e.setAttribute("lineDistance",new Vt(n,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dm extends Sa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Eh extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zu=new tt,Gc=new bs,$s=new Xn,Js=new j;class pm extends Dt{constructor(e=new tn,t=new Eh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(i),$s.radius+=s,e.ray.intersectsSphere($s)===!1)return;zu.copy(i).invert(),Gc.copy(e.ray).applyMatrix4(zu);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,f=n.index,m=n.attributes.position;if(f!==null){const g=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let S=g,T=v;S<T;S++){const b=f.getX(S);Js.fromBufferAttribute(m,b),Vu(Js,b,u,i,e,t,this)}}else{const g=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let S=g,T=v;S<T;S++)Js.fromBufferAttribute(m,S),Vu(Js,S,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function Vu(r,e,t,n,i,s,o){const c=Gc.distanceSqToPoint(r);if(c<t){const u=new j;Gc.closestPointToPoint(r,u),u.applyMatrix4(n);const f=i.ray.origin.distanceTo(u);if(f<i.near||f>i.far)return;s.push({distance:f,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ah extends Xt{constructor(e,t,n=Gi,i,s,o,c=cn,u=cn,f,p=ms,m=1){if(p!==ms&&p!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:m};super(g,i,s,o,c,u,p,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wh extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pl extends tn{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:u};const f=this;i=Math.floor(i),s=Math.floor(s);const p=[],m=[],g=[],v=[];let S=0;const T=[],b=n/2;let _=0;D(),o===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(p),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(g,3)),this.setAttribute("uv",new Vt(v,2));function D(){const L=new j,B=new j;let h=0;const I=(t-e)/n;for(let z=0;z<=s;z++){const E=[],w=z/s,F=w*(t-e)+e;for(let H=0;H<=i;H++){const G=H/i,$=G*u+c,ie=Math.sin($),ae=Math.cos($);B.x=F*ie,B.y=-w*n+b,B.z=F*ae,m.push(B.x,B.y,B.z),L.set(ie,I,ae).normalize(),g.push(L.x,L.y,L.z),v.push(G,1-w),E.push(S++)}T.push(E)}for(let z=0;z<i;z++)for(let E=0;E<s;E++){const w=T[E][z],F=T[E+1][z],H=T[E+1][z+1],G=T[E][z+1];(e>0||E!==0)&&(p.push(w,F,G),h+=3),(t>0||E!==s-1)&&(p.push(F,H,G),h+=3)}f.addGroup(_,h,0),_+=h}function P(L){const B=S,h=new ft,I=new j;let z=0;const E=L===!0?e:t,w=L===!0?1:-1;for(let H=1;H<=i;H++)m.push(0,b*w,0),g.push(0,w,0),v.push(.5,.5),S++;const F=S;for(let H=0;H<=i;H++){const $=H/i*u+c,ie=Math.cos($),ae=Math.sin($);I.x=E*ae,I.y=b*w,I.z=E*ie,m.push(I.x,I.y,I.z),g.push(0,w,0),h.x=ie*.5+.5,h.y=ae*.5*w+.5,v.push(h.x,h.y),S++}for(let H=0;H<i;H++){const G=B+H,$=F+H;L===!0?p.push($,$+1,G):p.push($+1,$,G),z+=3}f.addGroup(_,z,L===!0?1:2),_+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ml extends pl{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,c=Math.PI*2){super(0,e,t,n,i,s,o,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:c}}static fromJSON(e){return new ml(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ta extends tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,c=Math.floor(n),u=Math.floor(i),f=c+1,p=u+1,m=e/c,g=t/u,v=[],S=[],T=[],b=[];for(let _=0;_<p;_++){const D=_*g-o;for(let P=0;P<f;P++){const L=P*m-s;S.push(L,-D,0),T.push(0,0,1),b.push(P/c),b.push(1-_/u)}}for(let _=0;_<u;_++)for(let D=0;D<c;D++){const P=D+f*_,L=D+f*(_+1),B=D+1+f*(_+1),h=D+1+f*_;v.push(P,L,h),v.push(L,B,h)}this.setIndex(v),this.setAttribute("position",new Vt(S,3)),this.setAttribute("normal",new Vt(T,3)),this.setAttribute("uv",new Vt(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.widthSegments,e.heightSegments)}}class gl extends tn{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const c=[],u=[],f=[],p=[];let m=e;const g=(t-e)/i,v=new j,S=new ft;for(let T=0;T<=i;T++){for(let b=0;b<=n;b++){const _=s+b/n*o;v.x=m*Math.cos(_),v.y=m*Math.sin(_),u.push(v.x,v.y,v.z),f.push(0,0,1),S.x=(v.x/t+1)/2,S.y=(v.y/t+1)/2,p.push(S.x,S.y)}m+=g}for(let T=0;T<i;T++){const b=T*(n+1);for(let _=0;_<n;_++){const D=_+b,P=D,L=D+n+1,B=D+n+2,h=D+1;c.push(P,L,h),c.push(L,B,h)}}this.setIndex(c),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ea extends tn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+c,Math.PI);let f=0;const p=[],m=new j,g=new j,v=[],S=[],T=[],b=[];for(let _=0;_<=n;_++){const D=[],P=_/n;let L=0;_===0&&o===0?L=.5/t:_===n&&u===Math.PI&&(L=-.5/t);for(let B=0;B<=t;B++){const h=B/t;m.x=-e*Math.cos(i+h*s)*Math.sin(o+P*c),m.y=e*Math.cos(o+P*c),m.z=e*Math.sin(i+h*s)*Math.sin(o+P*c),S.push(m.x,m.y,m.z),g.copy(m).normalize(),T.push(g.x,g.y,g.z),b.push(h+L,1-P),D.push(f++)}p.push(D)}for(let _=0;_<n;_++)for(let D=0;D<t;D++){const P=p[_][D+1],L=p[_][D],B=p[_+1][D],h=p[_+1][D+1];(_!==0||o>0)&&v.push(P,L,h),(_!==n-1||u<Math.PI)&&v.push(L,B,h)}this.setIndex(v),this.setAttribute("position",new Vt(S,3)),this.setAttribute("normal",new Vt(T,3)),this.setAttribute("uv",new Vt(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Aa extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dh,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qn extends Aa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class mm extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gm extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Qs(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function xm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function _m(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Hu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const c=t[s]*e;for(let u=0;u!==e;++u)i[o++]=r[c+u]}return i}function Rh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ms{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const c=n+o>>>1;e<t[c]?o=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class vm extends Ms{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:su,endingEnd:su}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,c=i[s],u=i[o];if(c===void 0)switch(this.getSettings_().endingStart){case au:s=e,c=2*t-n;break;case ou:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case au:o=e,u=2*n-t;break;case ou:o=1,u=n+i[1]-i[0];break;default:o=e-1,u=t}const f=(n-t)*.5,p=this.valueSize;this._weightPrev=f/(t-c),this._weightNext=f/(u-n),this._offsetPrev=s*p,this._offsetNext=o*p}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,f=u-c,p=this._offsetPrev,m=this._offsetNext,g=this._weightPrev,v=this._weightNext,S=(n-t)/(i-t),T=S*S,b=T*S,_=-g*b+2*g*T-g*S,D=(1+g)*b+(-1.5-2*g)*T+(-.5+g)*S+1,P=(-1-v)*b+(1.5+v)*T+.5*S,L=v*b-v*T;for(let B=0;B!==c;++B)s[B]=_*o[p+B]+D*o[f+B]+P*o[u+B]+L*o[m+B];return s}}class ym extends Ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,f=u-c,p=(n-t)/(i-t),m=1-p;for(let g=0;g!==c;++g)s[g]=o[f+g]*m+o[u+g]*p;return s}}class bm extends Ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class In{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qs(t,this.TimeBufferType),this.values=Qs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qs(e.times,Array),values:Qs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ym(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xs:t=this.InterpolantFactoryMethodDiscrete;break;case _s:t=this.InterpolantFactoryMethodLinear;break;case qa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xs;case this.InterpolantFactoryMethodLinear:return _s;case this.InterpolantFactoryMethodSmooth:return qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const c=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*c,o*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ct("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(ct("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let c=0;c!==s;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){ct("KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(o!==null&&o>u){ct("KeyframeTrack: Out of order keys.",this,c,u,o),e=!1;break}o=u}if(i!==void 0&&xm(i))for(let c=0,u=i.length;c!==u;++c){const f=i[c];if(isNaN(f)){ct("KeyframeTrack: Value is not a valid number.",this,c,f),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qa,s=e.length-1;let o=1;for(let c=1;c<s;++c){let u=!1;const f=e[c],p=e[c+1];if(f!==p&&(c!==1||f!==e[0]))if(i)u=!0;else{const m=c*n,g=m-n,v=m+n;for(let S=0;S!==n;++S){const T=t[m+S];if(T!==t[g+S]||T!==t[v+S]){u=!0;break}}}if(u){if(c!==o){e[o]=e[c];const m=c*n,g=o*n;for(let v=0;v!==n;++v)t[g+v]=t[m+v]}++o}}if(s>0){e[o]=e[s];for(let c=s*n,u=o*n,f=0;f!==n;++f)t[u+f]=t[c+f];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=_s;class kr extends In{constructor(e,t,n){super(e,t,n)}}kr.prototype.ValueTypeName="bool";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=xs;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ch extends In{constructor(e,t,n,i){super(e,t,n,i)}}Ch.prototype.ValueTypeName="color";class Ir extends In{constructor(e,t,n,i){super(e,t,n,i)}}Ir.prototype.ValueTypeName="number";class Mm extends Ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=(n-t)/(i-t);let f=e*c;for(let p=f+c;f!==p;f+=4)Ei.slerpFlat(s,0,o,f-c,o,f,u);return s}}class Nr extends In{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Mm(this.times,this.values,this.getValueSize(),e)}}Nr.prototype.ValueTypeName="quaternion";Nr.prototype.InterpolantFactoryMethodSmooth=void 0;class zr extends In{constructor(e,t,n){super(e,t,n)}}zr.prototype.ValueTypeName="string";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=xs;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ur extends In{constructor(e,t,n,i){super(e,t,n,i)}}Ur.prototype.ValueTypeName="vector";class Sm{constructor(e="",t=-1,n=[],i=np){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ln(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,c=n.length;o!==c;++o)t.push(Em(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(In.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let c=0;c<s;c++){let u=[],f=[];u.push((c+s-1)%s,c,(c+1)%s),f.push(0,1,0);const p=_m(u);u=Hu(u,1,p),f=Hu(f,1,p),!i&&u[0]===0&&(u.push(s),f.push(f[0])),o.push(new Ir(".morphTargetInfluences["+t[c].name+"]",u,f).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const f=e[c],p=f.name.match(s);if(p&&p.length>1){const m=p[1];let g=i[m];g||(i[m]=g=[]),g.push(f)}}const o=[];for(const c in i)o.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return o}static parseAnimation(e,t){if(Ve("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return ct("AnimationClip: No animation in JSONLoader data."),null;const n=function(m,g,v,S,T){if(v.length!==0){const b=[],_=[];Rh(v,b,_,S),b.length!==0&&T.push(new m(g,b,_))}},i=[],s=e.name||"default",o=e.fps||30,c=e.blendMode;let u=e.length||-1;const f=e.hierarchy||[];for(let m=0;m<f.length;m++){const g=f[m].keys;if(!(!g||g.length===0))if(g[0].morphTargets){const v={};let S;for(S=0;S<g.length;S++)if(g[S].morphTargets)for(let T=0;T<g[S].morphTargets.length;T++)v[g[S].morphTargets[T]]=-1;for(const T in v){const b=[],_=[];for(let D=0;D!==g[S].morphTargets.length;++D){const P=g[S];b.push(P.time),_.push(P.morphTarget===T?1:0)}i.push(new Ir(".morphTargetInfluence["+T+"]",b,_))}u=v.length*o}else{const v=".bones["+t[m].name+"]";n(Ur,v+".position",g,"pos",i),n(Nr,v+".quaternion",g,"rot",i),n(Ur,v+".scale",g,"scl",i)}}return i.length===0?null:new this(s,u,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Tm(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ir;case"vector":case"vector2":case"vector3":case"vector4":return Ur;case"color":return Ch;case"quaternion":return Nr;case"bool":case"boolean":return kr;case"string":return zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Em(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Tm(r.type);if(r.times===void 0){const t=[],n=[];Rh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ai={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Am{constructor(e,t,n){const i=this;let s=!1,o=0,c=0,u;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(p){c++,s===!1&&i.onStart!==void 0&&i.onStart(p,o,c),s=!0},this.itemEnd=function(p){o++,i.onProgress!==void 0&&i.onProgress(p,o,c),o===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(p){i.onError!==void 0&&i.onError(p)},this.resolveURL=function(p){return u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,m){return f.push(p,m),this},this.removeHandler=function(p){const m=f.indexOf(p);return m!==-1&&f.splice(m,2),this},this.getHandler=function(p){for(let m=0,g=f.length;m<g;m+=2){const v=f[m],S=f[m+1];if(v.global&&(v.lastIndex=0),v.test(p))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const wm=new Am;class Vr{constructor(e){this.manager=e!==void 0?e:wm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Vr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class Rm extends Error{constructor(e,t){super(e),this.response=t}}class Ph extends Vr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ai.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:n,onError:i});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,u=this.responseType;fetch(o).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&Ve("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const p=ti[e],m=f.body.getReader(),g=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),v=g?parseInt(g):0,S=v!==0;let T=0;const b=new ReadableStream({start(_){D();function D(){m.read().then(({done:P,value:L})=>{if(P)_.close();else{T+=L.byteLength;const B=new ProgressEvent("progress",{lengthComputable:S,loaded:T,total:v});for(let h=0,I=p.length;h<I;h++){const z=p[h];z.onProgress&&z.onProgress(B)}_.enqueue(L),D()}},P=>{_.error(P)})}}});return new Response(b)}else throw new Rm(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(u){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(p=>new DOMParser().parseFromString(p,c));case"json":return f.json();default:if(c==="")return f.text();{const m=/charset="?([^;"\s]*)"?/i.exec(c),g=m&&m[1]?m[1].toLowerCase():void 0,v=new TextDecoder(g);return f.arrayBuffer().then(S=>v.decode(S))}}}).then(f=>{ai.add(`file:${e}`,f);const p=ti[e];delete ti[e];for(let m=0,g=p.length;m<g;m++){const v=p[m];v.onLoad&&v.onLoad(f)}}).catch(f=>{const p=ti[e];if(p===void 0)throw this.manager.itemError(e),f;delete ti[e];for(let m=0,g=p.length;m<g;m++){const v=p[m];v.onError&&v.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const yr=new WeakMap;class Cm extends Vr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ai.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let m=yr.get(o);m===void 0&&(m=[],yr.set(o,m)),m.push({onLoad:t,onError:i})}return o}const c=vs("img");function u(){p(),t&&t(this);const m=yr.get(this)||[];for(let g=0;g<m.length;g++){const v=m[g];v.onLoad&&v.onLoad(this)}yr.delete(this),s.manager.itemEnd(e)}function f(m){p(),i&&i(m),ai.remove(`image:${e}`);const g=yr.get(this)||[];for(let v=0;v<g.length;v++){const S=g[v];S.onError&&S.onError(m)}yr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function p(){c.removeEventListener("load",u,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),ai.add(`image:${e}`,c),s.manager.itemStart(e),c.src=e,c}}class Pm extends Vr{constructor(e){super(e)}load(e,t,n,i){const s=new Xt,o=new Cm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class xl extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const vo=new tt,Gu=new j,Wu=new j;class _l{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dl,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gu),Wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wu),t.updateMatrixWorld(),vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Lm extends _l{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Lr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Dm extends xl{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Lm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xu=new tt,is=new j,yo=new j;class Im extends _l{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),is.setFromMatrixPosition(e.matrixWorld),n.position.copy(is),yo.copy(n.position),yo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(yo),n.updateMatrixWorld(),i.makeTranslation(-is.x,-is.y,-is.z),Xu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu,n.coordinateSystem,n.reversedDepth)}}class Nm extends xl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Im}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vl extends bh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,o=s+f*this.view.width,c-=p*this.view.offsetY,u=c-p*this.view.height}this.projectionMatrix.makeOrthographic(s,o,c,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Um extends _l{constructor(){super(new vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yl extends xl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Um}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const bo=new WeakMap;class Fm extends Vr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ve("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ve("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ai.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(f=>{if(bo.has(o)===!0)i&&i(bo.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(f),s.manager.itemEnd(e),f});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader,c.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const u=fetch(e,c).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(f){return ai.add(`image-bitmap:${e}`,f),t&&t(f),s.manager.itemEnd(e),f}).catch(function(f){i&&i(f),bo.set(u,f),ai.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});ai.add(`image-bitmap:${e}`,u),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Om extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const bl="\\[\\]\\.:\\/",Bm=new RegExp("["+bl+"]","g"),Ml="[^"+bl+"]",km="[^"+bl.replace("\\.","")+"]",zm=/((?:WC+[\/:])*)/.source.replace("WC",Ml),Vm=/(WCOD+)?/.source.replace("WCOD",km),Hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ml),Gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ml),Wm=new RegExp("^"+zm+Vm+Hm+Gm+"$"),Xm=["material","materials","bones","map"];class qm{constructor(e,t,n){const i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tt{constructor(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Tt.Composite(e,t,n):new Tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bm,"")}static parseTrackName(e){const t=Wm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Xm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const c=s[o];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=t.objectIndex;switch(n){case"materials":if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===f){f=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(f!==void 0){if(e[f]===void 0){ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}const o=e[i];if(o===void 0){const f=t.nodeName;ct("PropertyBinding: Trying to update property for track: "+f+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=qm;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const qu=new tt;class jm{constructor(e,t,n=0,i=1/0){this.ray=new bs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ll,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qu),this}intersectObject(e,t=!0,n=[]){return Wc(e,this,n,t),n.sort(ju),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Wc(e[i],this,n,t);return n.sort(ju),n}}function ju(r,e){return r.distance-e.distance}function Wc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,c=s.length;o<c;o++)Wc(s[o],e,t,!0)}}const ea=new Dn;class Ym extends Th{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),s=new tn;s.setIndex(new Kt(n,1)),s.setAttribute("position",new Kt(i,3)),super(s,new Ma({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&ea.setFromObject(this.object),ea.isEmpty())return;const e=ea.min,t=ea.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}const Yu=new j;let ta,Mo;class Km extends Dt{constructor(e=new j(0,0,1),t=new j(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",ta===void 0&&(ta=new tn,ta.setAttribute("position",new Vt([0,0,0,0,1,0],3)),Mo=new ml(.5,1,5,1),Mo.translate(0,-.5,0)),this.position.copy(t),this.line=new Sa(ta,new Ma({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new en(Mo,new Vn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Yu.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Yu,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}function Ku(r,e,t,n){const i=Zm(n);switch(t){case uh:return r*e;case nl:return r*e/i.components*i.byteLength;case il:return r*e/i.components*i.byteLength;case rl:return r*e*2/i.components*i.byteLength;case sl:return r*e*2/i.components*i.byteLength;case fh:return r*e*3/i.components*i.byteLength;case Mn:return r*e*4/i.components*i.byteLength;case al:return r*e*4/i.components*i.byteLength;case ca:case la:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ua:case fa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dc:case mc:return Math.max(r,16)*Math.max(e,8)/4;case hc:case pc:return Math.max(r,8)*Math.max(e,8)/2;case gc:case xc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case bc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case wc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ic:case Nc:case Uc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Fc:case Oc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Bc:case kc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zm(r){switch(r){case Gn:case ah:return{byteLength:1,components:1};case ds:case oh:case Fr:return{byteLength:2,components:1};case el:case tl:return{byteLength:2,components:4};case Gi:case Qc:case Pn:return{byteLength:4,components:1};case ch:case lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jc}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jc);function Lh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function $m(r){const e=new WeakMap;function t(c,u){const f=c.array,p=c.usage,m=f.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,f,p),c.onUploadCallback();let v;if(f instanceof Float32Array)v=r.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)v=r.HALF_FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?v=r.HALF_FLOAT:v=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=r.SHORT;else if(f instanceof Uint32Array)v=r.UNSIGNED_INT;else if(f instanceof Int32Array)v=r.INT;else if(f instanceof Int8Array)v=r.BYTE;else if(f instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,u,f){const p=u.array,m=u.updateRanges;if(r.bindBuffer(f,c),m.length===0)r.bufferSubData(f,0,p);else{m.sort((v,S)=>v.start-S.start);let g=0;for(let v=1;v<m.length;v++){const S=m[g],T=m[v];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++g,m[g]=T)}m.length=g+1;for(let v=0,S=m.length;v<S;v++){const T=m[v];r.bufferSubData(f,T.start*p.BYTES_PER_ELEMENT,p,T.start,T.count)}u.clearUpdateRanges()}u.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(r.deleteBuffer(u.buffer),e.delete(c))}function o(c,u){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=e.get(c);if(f===void 0)e.set(c,t(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,c,u),f.version=c.version}}return{get:i,remove:s,update:o}}var Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,e0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,s0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,o0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,f0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,h0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,b0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,S0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R0="gl_FragColor = linearToOutputTexel( gl_FragColor );",C0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,W0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,X0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Z0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,J0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,og=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ag=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ax=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ux=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_x=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Jm,alphahash_pars_fragment:Qm,alphamap_fragment:e0,alphamap_pars_fragment:t0,alphatest_fragment:n0,alphatest_pars_fragment:i0,aomap_fragment:r0,aomap_pars_fragment:s0,batching_pars_vertex:a0,batching_vertex:o0,begin_vertex:c0,beginnormal_vertex:l0,bsdfs:u0,iridescence_fragment:f0,bumpmap_pars_fragment:h0,clipping_planes_fragment:d0,clipping_planes_pars_fragment:p0,clipping_planes_pars_vertex:m0,clipping_planes_vertex:g0,color_fragment:x0,color_pars_fragment:_0,color_pars_vertex:v0,color_vertex:y0,common:b0,cube_uv_reflection_fragment:M0,defaultnormal_vertex:S0,displacementmap_pars_vertex:T0,displacementmap_vertex:E0,emissivemap_fragment:A0,emissivemap_pars_fragment:w0,colorspace_fragment:R0,colorspace_pars_fragment:C0,envmap_fragment:P0,envmap_common_pars_fragment:L0,envmap_pars_fragment:D0,envmap_pars_vertex:I0,envmap_physical_pars_fragment:W0,envmap_vertex:N0,fog_vertex:U0,fog_pars_vertex:F0,fog_fragment:O0,fog_pars_fragment:B0,gradientmap_pars_fragment:k0,lightmap_pars_fragment:z0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:H0,lights_pars_begin:G0,lights_toon_fragment:X0,lights_toon_pars_fragment:q0,lights_phong_fragment:j0,lights_phong_pars_fragment:Y0,lights_physical_fragment:K0,lights_physical_pars_fragment:Z0,lights_fragment_begin:$0,lights_fragment_maps:J0,lights_fragment_end:Q0,logdepthbuf_fragment:eg,logdepthbuf_pars_fragment:tg,logdepthbuf_pars_vertex:ng,logdepthbuf_vertex:ig,map_fragment:rg,map_pars_fragment:sg,map_particle_fragment:ag,map_particle_pars_fragment:og,metalnessmap_fragment:cg,metalnessmap_pars_fragment:lg,morphinstance_vertex:ug,morphcolor_vertex:fg,morphnormal_vertex:hg,morphtarget_pars_vertex:dg,morphtarget_vertex:pg,normal_fragment_begin:mg,normal_fragment_maps:gg,normal_pars_fragment:xg,normal_pars_vertex:_g,normal_vertex:vg,normalmap_pars_fragment:yg,clearcoat_normal_fragment_begin:bg,clearcoat_normal_fragment_maps:Mg,clearcoat_pars_fragment:Sg,iridescence_pars_fragment:Tg,opaque_fragment:Eg,packing:Ag,premultiplied_alpha_fragment:wg,project_vertex:Rg,dithering_fragment:Cg,dithering_pars_fragment:Pg,roughnessmap_fragment:Lg,roughnessmap_pars_fragment:Dg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Ng,shadowmap_vertex:Ug,shadowmask_pars_fragment:Fg,skinbase_vertex:Og,skinning_pars_vertex:Bg,skinning_vertex:kg,skinnormal_vertex:zg,specularmap_fragment:Vg,specularmap_pars_fragment:Hg,tonemapping_fragment:Gg,tonemapping_pars_fragment:Wg,transmission_fragment:Xg,transmission_pars_fragment:qg,uv_pars_fragment:jg,uv_pars_vertex:Yg,uv_vertex:Kg,worldpos_vertex:Zg,background_vert:$g,background_frag:Jg,backgroundCube_vert:Qg,backgroundCube_frag:ex,cube_vert:tx,cube_frag:nx,depth_vert:ix,depth_frag:rx,distanceRGBA_vert:sx,distanceRGBA_frag:ax,equirect_vert:ox,equirect_frag:cx,linedashed_vert:lx,linedashed_frag:ux,meshbasic_vert:fx,meshbasic_frag:hx,meshlambert_vert:dx,meshlambert_frag:px,meshmatcap_vert:mx,meshmatcap_frag:gx,meshnormal_vert:xx,meshnormal_frag:_x,meshphong_vert:vx,meshphong_frag:yx,meshphysical_vert:bx,meshphysical_frag:Mx,meshtoon_vert:Sx,meshtoon_frag:Tx,points_vert:Ex,points_frag:Ax,shadow_vert:wx,shadow_frag:Rx,sprite_vert:Cx,sprite_frag:Px},Ee={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},On={basic:{uniforms:sn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:sn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:sn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:sn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:sn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:sn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:sn([Ee.points,Ee.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:sn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:sn([Ee.common,Ee.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:sn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:sn([Ee.sprite,Ee.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:sn([Ee.common,Ee.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:sn([Ee.lights,Ee.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};On.physical={uniforms:sn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const na={r:0,b:0,g:0},Ui=new Wn,Lx=new tt;function Dx(r,e,t,n,i,s,o){const c=new Je(0);let u=s===!0?0:1,f,p,m=null,g=0,v=null;function S(P){let L=P.isScene===!0?P.background:null;return L&&L.isTexture&&(L=(P.backgroundBlurriness>0?t:e).get(L)),L}function T(P){let L=!1;const B=S(P);B===null?_(c,u):B&&B.isColor&&(_(B,1),L=!0);const h=r.xr.getEnvironmentBlendMode();h==="additive"?n.buffers.color.setClear(0,0,0,1,o):h==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(P,L){const B=S(L);B&&(B.isCubeTexture||B.mapping===ba)?(p===void 0&&(p=new en(new Br(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:Dr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(h,I,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(p)),Ui.copy(L.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),p.material.uniforms.envMap.value=B,p.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(Ui)),p.material.toneMapped=pt.getTransfer(B.colorSpace)!==Rt,(m!==B||g!==B.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,m=B,g=B.version,v=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):B&&B.isTexture&&(f===void 0&&(f=new en(new Ta(2,2),new fi({name:"BackgroundMaterial",uniforms:Dr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=B,f.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,f.material.toneMapped=pt.getTransfer(B.colorSpace)!==Rt,B.matrixAutoUpdate===!0&&B.updateMatrix(),f.material.uniforms.uvTransform.value.copy(B.matrix),(m!==B||g!==B.version||v!==r.toneMapping)&&(f.material.needsUpdate=!0,m=B,g=B.version,v=r.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null))}function _(P,L){P.getRGB(na,yh(r)),n.buffers.color.setClear(na.r,na.g,na.b,L,o)}function D(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,L=1){c.set(P),u=L,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(P){u=P,_(c,u)},render:T,addToRenderList:b,dispose:D}}function Ix(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=g(null);let s=i,o=!1;function c(w,F,H,G,$){let ie=!1;const ae=m(G,H,F);s!==ae&&(s=ae,f(s.object)),ie=v(w,G,H,$),ie&&S(w,G,H,$),$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,L(w,F,H,G),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function u(){return r.createVertexArray()}function f(w){return r.bindVertexArray(w)}function p(w){return r.deleteVertexArray(w)}function m(w,F,H){const G=H.wireframe===!0;let $=n[w.id];$===void 0&&($={},n[w.id]=$);let ie=$[F.id];ie===void 0&&(ie={},$[F.id]=ie);let ae=ie[G];return ae===void 0&&(ae=g(u()),ie[G]=ae),ae}function g(w){const F=[],H=[],G=[];for(let $=0;$<t;$++)F[$]=0,H[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:G,object:w,attributes:{},index:null}}function v(w,F,H,G){const $=s.attributes,ie=F.attributes;let ae=0;const fe=H.getAttributes();for(const re in fe)if(fe[re].location>=0){const _e=$[re];let Ie=ie[re];if(Ie===void 0&&(re==="instanceMatrix"&&w.instanceMatrix&&(Ie=w.instanceMatrix),re==="instanceColor"&&w.instanceColor&&(Ie=w.instanceColor)),_e===void 0||_e.attribute!==Ie||Ie&&_e.data!==Ie.data)return!0;ae++}return s.attributesNum!==ae||s.index!==G}function S(w,F,H,G){const $={},ie=F.attributes;let ae=0;const fe=H.getAttributes();for(const re in fe)if(fe[re].location>=0){let _e=ie[re];_e===void 0&&(re==="instanceMatrix"&&w.instanceMatrix&&(_e=w.instanceMatrix),re==="instanceColor"&&w.instanceColor&&(_e=w.instanceColor));const Ie={};Ie.attribute=_e,_e&&_e.data&&(Ie.data=_e.data),$[re]=Ie,ae++}s.attributes=$,s.attributesNum=ae,s.index=G}function T(){const w=s.newAttributes;for(let F=0,H=w.length;F<H;F++)w[F]=0}function b(w){_(w,0)}function _(w,F){const H=s.newAttributes,G=s.enabledAttributes,$=s.attributeDivisors;H[w]=1,G[w]===0&&(r.enableVertexAttribArray(w),G[w]=1),$[w]!==F&&(r.vertexAttribDivisor(w,F),$[w]=F)}function D(){const w=s.newAttributes,F=s.enabledAttributes;for(let H=0,G=F.length;H<G;H++)F[H]!==w[H]&&(r.disableVertexAttribArray(H),F[H]=0)}function P(w,F,H,G,$,ie,ae){ae===!0?r.vertexAttribIPointer(w,F,H,$,ie):r.vertexAttribPointer(w,F,H,G,$,ie)}function L(w,F,H,G){T();const $=G.attributes,ie=H.getAttributes(),ae=F.defaultAttributeValues;for(const fe in ie){const re=ie[fe];if(re.location>=0){let me=$[fe];if(me===void 0&&(fe==="instanceMatrix"&&w.instanceMatrix&&(me=w.instanceMatrix),fe==="instanceColor"&&w.instanceColor&&(me=w.instanceColor)),me!==void 0){const _e=me.normalized,Ie=me.itemSize,it=e.get(me);if(it===void 0)continue;const ht=it.buffer,bt=it.type,xt=it.bytesPerElement,ce=bt===r.INT||bt===r.UNSIGNED_INT||me.gpuType===Qc;if(me.isInterleavedBufferAttribute){const oe=me.data,Me=oe.stride,We=me.offset;if(oe.isInstancedInterleavedBuffer){for(let De=0;De<re.locationSize;De++)_(re.location+De,oe.meshPerAttribute);w.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let De=0;De<re.locationSize;De++)b(re.location+De);r.bindBuffer(r.ARRAY_BUFFER,ht);for(let De=0;De<re.locationSize;De++)P(re.location+De,Ie/re.locationSize,bt,_e,Me*xt,(We+Ie/re.locationSize*De)*xt,ce)}else{if(me.isInstancedBufferAttribute){for(let oe=0;oe<re.locationSize;oe++)_(re.location+oe,me.meshPerAttribute);w.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let oe=0;oe<re.locationSize;oe++)b(re.location+oe);r.bindBuffer(r.ARRAY_BUFFER,ht);for(let oe=0;oe<re.locationSize;oe++)P(re.location+oe,Ie/re.locationSize,bt,_e,Ie*xt,Ie/re.locationSize*oe*xt,ce)}}else if(ae!==void 0){const _e=ae[fe];if(_e!==void 0)switch(_e.length){case 2:r.vertexAttrib2fv(re.location,_e);break;case 3:r.vertexAttrib3fv(re.location,_e);break;case 4:r.vertexAttrib4fv(re.location,_e);break;default:r.vertexAttrib1fv(re.location,_e)}}}}D()}function B(){z();for(const w in n){const F=n[w];for(const H in F){const G=F[H];for(const $ in G)p(G[$].object),delete G[$];delete F[H]}delete n[w]}}function h(w){if(n[w.id]===void 0)return;const F=n[w.id];for(const H in F){const G=F[H];for(const $ in G)p(G[$].object),delete G[$];delete F[H]}delete n[w.id]}function I(w){for(const F in n){const H=n[F];if(H[w.id]===void 0)continue;const G=H[w.id];for(const $ in G)p(G[$].object),delete G[$];delete H[w.id]}}function z(){E(),o=!0,s!==i&&(s=i,f(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:z,resetDefaultState:E,dispose:B,releaseStatesOfGeometry:h,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:b,disableUnusedAttributes:D}}function Nx(r,e,t){let n;function i(f){n=f}function s(f,p){r.drawArrays(n,f,p),t.update(p,n,1)}function o(f,p,m){m!==0&&(r.drawArraysInstanced(n,f,p,m),t.update(p,n,m))}function c(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,p,0,m);let v=0;for(let S=0;S<m;S++)v+=p[S];t.update(v,n,1)}function u(f,p,m,g){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<f.length;S++)o(f[S],p[S],g[S]);else{v.multiDrawArraysInstancedWEBGL(n,f,0,p,0,g,0,m);let S=0;for(let T=0;T<m;T++)S+=p[T]*g[T];t.update(S,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Ux(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(I){return!(I!==Mn&&n.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(I){const z=I===Fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Gn&&n.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Pn&&!z)}function u(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=u(f);p!==f&&(Ve("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const m=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=S>0,h=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:m,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:b,maxAttributes:_,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:L,vertexTextures:B,maxSamples:h}}function Fx(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Bi,c=new nt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const v=m.length!==0||g||n!==0||i;return i=g,n=m.length,v},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,g){t=p(m,g,0)},this.setState=function(m,g,v){const S=m.clippingPlanes,T=m.clipIntersection,b=m.clipShadows,_=r.get(m);if(!i||S===null||S.length===0||s&&!b)s?p(null):f();else{const D=s?0:n,P=D*4;let L=_.clippingState||null;u.value=L,L=p(S,g,P,v);for(let B=0;B!==P;++B)L[B]=t[B];_.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function f(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,g,v,S){const T=m!==null?m.length:0;let b=null;if(T!==0){if(b=u.value,S!==!0||b===null){const _=v+T*4,D=g.matrixWorldInverse;c.getNormalMatrix(D),(b===null||b.length<_)&&(b=new Float32Array(_));for(let P=0,L=v;P!==T;++P,L+=4)o.copy(m[P]).applyMatrix4(D,c),o.normal.toArray(b,L),b[L+3]=o.constant}u.value=b,u.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,b}}function Ox(r){let e=new WeakMap;function t(o,c){return c===uc?o.mapping=Rr:c===fc&&(o.mapping=Cr),o}function n(o){if(o&&o.isTexture){const c=o.mapping;if(c===uc||c===fc)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const f=new tm(u.height);return f.fromEquirectangularTexture(r,o),e.set(o,f),o.addEventListener("dispose",i),t(f.texture,o.mapping)}else return null}}return o}function i(o){const c=o.target;c.removeEventListener("dispose",i);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Si=4,Zu=[.125,.215,.35,.446,.526,.582],zi=20,Bx=256,rs=new vl,$u=new Je;let So=null,To=0,Eo=0,Ao=!1;const kx=new j;class Ju{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:c=kx}=s;So=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,i,u,c),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(So,To,Eo),this._renderer.xr.enabled=Ao,e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),So=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Fr,format:Mn,colorSpace:ln,depthBuffer:!1},i=Qu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zx(s)),this._blurMaterial=Hx(s,e,t),this._ggxMaterial=Vx(s,e,t)}return i}_compileMaterial(e){const t=new en(new tn,e);this._renderer.compile(t,rs)}_sceneToCubeUV(e,t,n,i,s){const u=new an(90,1,t,n),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor($u),m.toneMapping=Ti,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(i),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new en(new Br,new Vn({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,b=T.material;let _=!1;const D=e.background;D?D.isColor&&(b.color.copy(D),e.background=null,_=!0):(b.color.copy($u),_=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(u.up.set(0,f[P],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+p[P],s.y,s.z)):L===1?(u.up.set(0,0,f[P]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+p[P],s.z)):(u.up.set(0,f[P],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+p[P]));const B=this._cubeSize;br(i,L*B,P>2?B:0,B,B),m.setRenderTarget(i),_&&m.render(T,u),m.render(e,u)}m.toneMapping=v,m.autoClear=g,e.background=D}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Rr||e.mapping===Cr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ef());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;br(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,rs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[n];c.material=o;const u=o.uniforms,f=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),m=Math.sqrt(f*f-p*p),g=.05+f*.95,v=m*g,{_lodMax:S}=this,T=this._sizeLods[n],b=3*T*(n>S-Si?n-S+Si:0),_=4*(this._cubeSize-T);u.envMap.value=e.texture,u.roughness.value=v,u.mipInt.value=S-t,br(s,b,_,3*T,2*T),i.setRenderTarget(s),i.render(c,rs),u.envMap.value=s.texture,u.roughness.value=0,u.mipInt.value=S-n,br(e,b,_,3*T,2*T),i.setRenderTarget(e),i.render(c,rs)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,c){const u=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ct("blur direction must be either latitudinal or longitudinal!");const p=3,m=this._lodMeshes[i];m.material=f;const g=f.uniforms,v=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*zi-1),T=s/S,b=isFinite(s)?1+Math.floor(p*T):zi;b>zi&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${zi}`);const _=[];let D=0;for(let I=0;I<zi;++I){const z=I/T,E=Math.exp(-z*z/2);_.push(E),I===0?D+=E:I<b&&(D+=2*E)}for(let I=0;I<_.length;I++)_[I]=_[I]/D;g.envMap.value=e.texture,g.samples.value=b,g.weights.value=_,g.latitudinal.value=o==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:P}=this;g.dTheta.value=S,g.mipInt.value=P-n;const L=this._sizeLods[i],B=3*L*(i>P-Si?i-P+Si:0),h=4*(this._cubeSize-L);br(t,B,h,3*L,2*L),u.setRenderTarget(t),u.render(m,rs)}}function zx(r){const e=[],t=[],n=[];let i=r;const s=r-Si+1+Zu.length;for(let o=0;o<s;o++){const c=Math.pow(2,i);e.push(c);let u=1/c;o>r-Si?u=Zu[o-r+Si-1]:o===0&&(u=0),t.push(u);const f=1/(c-2),p=-f,m=1+f,g=[p,p,m,p,m,m,p,p,m,m,p,m],v=6,S=6,T=3,b=2,_=1,D=new Float32Array(T*S*v),P=new Float32Array(b*S*v),L=new Float32Array(_*S*v);for(let h=0;h<v;h++){const I=h%3*2/3-1,z=h>2?0:-1,E=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];D.set(E,T*S*h),P.set(g,b*S*h);const w=[h,h,h,h,h,h];L.set(w,_*S*h)}const B=new tn;B.setAttribute("position",new Kt(D,T)),B.setAttribute("uv",new Kt(P,b)),B.setAttribute("faceIndex",new Kt(L,_)),n.push(new en(B,null)),i>Si&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Qu(r,e,t){const n=new Wi(r,e,t);return n.texture.mapping=ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Vx(r,e,t){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Hx(r,e,t){const n=new Float32Array(zi),i=new j(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ef(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function tf(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function wa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gx(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,f=u===uc||u===fc,p=u===Rr||u===Cr;if(f||p){let m=e.get(c);const g=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return t===null&&(t=new Ju(r)),m=f?t.fromEquirectangular(c,m):t.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),m.texture;if(m!==void 0)return m.texture;{const v=c.image;return f&&v&&v.height>0||p&&v&&i(v)?(t===null&&(t=new Ju(r)),m=f?t.fromEquirectangular(c):t.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),c.addEventListener("dispose",s),m.texture):null}}}return c}function i(c){let u=0;const f=6;for(let p=0;p<f;p++)c[p]!==void 0&&u++;return u===f}function s(c){const u=c.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Wx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ys("WebGLRenderer: "+n+" extension not supported."),i}}}function Xx(r,e,t,n){const i={},s=new WeakMap;function o(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);g.removeEventListener("dispose",o),delete i[g.id];const v=s.get(g);v&&(e.remove(v),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(m,g){return i[g.id]===!0||(g.addEventListener("dispose",o),i[g.id]=!0,t.memory.geometries++),g}function u(m){const g=m.attributes;for(const v in g)e.update(g[v],r.ARRAY_BUFFER)}function f(m){const g=[],v=m.index,S=m.attributes.position;let T=0;if(v!==null){const D=v.array;T=v.version;for(let P=0,L=D.length;P<L;P+=3){const B=D[P+0],h=D[P+1],I=D[P+2];g.push(B,h,h,I,I,B)}}else if(S!==void 0){const D=S.array;T=S.version;for(let P=0,L=D.length/3-1;P<L;P+=3){const B=P+0,h=P+1,I=P+2;g.push(B,h,h,I,I,B)}}else return;const b=new(mh(g)?vh:_h)(g,1);b.version=T;const _=s.get(m);_&&e.remove(_),s.set(m,b)}function p(m){const g=s.get(m);if(g){const v=m.index;v!==null&&g.version<v.version&&f(m)}else f(m);return s.get(m)}return{get:c,update:u,getWireframeAttribute:p}}function qx(r,e,t){let n;function i(g){n=g}let s,o;function c(g){s=g.type,o=g.bytesPerElement}function u(g,v){r.drawElements(n,v,s,g*o),t.update(v,n,1)}function f(g,v,S){S!==0&&(r.drawElementsInstanced(n,v,s,g*o,S),t.update(v,n,S))}function p(g,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,s,g,0,S);let b=0;for(let _=0;_<S;_++)b+=v[_];t.update(b,n,1)}function m(g,v,S,T){if(S===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let _=0;_<g.length;_++)f(g[_]/o,v[_],T[_]);else{b.multiDrawElementsInstancedWEBGL(n,v,0,s,g,0,T,0,S);let _=0;for(let D=0;D<S;D++)_+=v[D]*T[D];t.update(_,n,1)}}this.setMode=i,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function jx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,c){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:ct("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Yx(r,e,t){const n=new WeakMap,i=new yt;function s(o,c,u){const f=o.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=p!==void 0?p.length:0;let g=n.get(c);if(g===void 0||g.count!==m){let w=function(){z.dispose(),n.delete(c),c.removeEventListener("dispose",w)};var v=w;g!==void 0&&g.texture.dispose();const S=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,b=c.morphAttributes.color!==void 0,_=c.morphAttributes.position||[],D=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let L=0;S===!0&&(L=1),T===!0&&(L=2),b===!0&&(L=3);let B=c.attributes.position.count*L,h=1;B>e.maxTextureSize&&(h=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const I=new Float32Array(B*h*4*m),z=new gh(I,B,h,m);z.type=Pn,z.needsUpdate=!0;const E=L*4;for(let F=0;F<m;F++){const H=_[F],G=D[F],$=P[F],ie=B*h*4*F;for(let ae=0;ae<H.count;ae++){const fe=ae*E;S===!0&&(i.fromBufferAttribute(H,ae),I[ie+fe+0]=i.x,I[ie+fe+1]=i.y,I[ie+fe+2]=i.z,I[ie+fe+3]=0),T===!0&&(i.fromBufferAttribute(G,ae),I[ie+fe+4]=i.x,I[ie+fe+5]=i.y,I[ie+fe+6]=i.z,I[ie+fe+7]=0),b===!0&&(i.fromBufferAttribute($,ae),I[ie+fe+8]=i.x,I[ie+fe+9]=i.y,I[ie+fe+10]=i.z,I[ie+fe+11]=$.itemSize===4?i.w:1)}}g={count:m,texture:z,size:new ft(B,h)},n.set(c,g),c.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let S=0;for(let b=0;b<f.length;b++)S+=f[b];const T=c.morphTargetsRelative?1:1-S;u.getUniforms().setValue(r,"morphTargetBaseInfluence",T),u.getUniforms().setValue(r,"morphTargetInfluences",f)}u.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:s}}function Kx(r,e,t,n){let i=new WeakMap;function s(u){const f=n.render.frame,p=u.geometry,m=e.get(u,p);if(i.get(m)!==f&&(e.update(m),i.set(m,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),i.get(u)!==f&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,f))),u.isSkinnedMesh){const g=u.skeleton;i.get(g)!==f&&(g.update(),i.set(g,f))}return m}function o(){i=new WeakMap}function c(u){const f=u.target;f.removeEventListener("dispose",c),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:o}}const Dh=new Xt,nf=new Ah(1,1),Ih=new gh,Nh=new Bp,Uh=new Mh,rf=[],sf=[],af=new Float32Array(16),of=new Float32Array(9),cf=new Float32Array(4);function Hr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=rf[i];if(s===void 0&&(s=new Float32Array(i),rf[i]=s),e!==0){n.toArray(s,0);for(let o=1,c=0;o!==e;++o)c+=t,r[o].toArray(s,c)}return s}function Ht(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Gt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ra(r,e){let t=sf[e];t===void 0&&(t=new Int32Array(e),sf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Zx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function $x(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;r.uniform2fv(this.addr,e),Gt(t,e)}}function Jx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;r.uniform3fv(this.addr,e),Gt(t,e)}}function Qx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;r.uniform4fv(this.addr,e),Gt(t,e)}}function e_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;cf.set(n),r.uniformMatrix2fv(this.addr,!1,cf),Gt(t,n)}}function t_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;of.set(n),r.uniformMatrix3fv(this.addr,!1,of),Gt(t,n)}}function n_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;af.set(n),r.uniformMatrix4fv(this.addr,!1,af),Gt(t,n)}}function i_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function r_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;r.uniform2iv(this.addr,e),Gt(t,e)}}function s_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;r.uniform3iv(this.addr,e),Gt(t,e)}}function a_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;r.uniform4iv(this.addr,e),Gt(t,e)}}function o_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function c_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;r.uniform2uiv(this.addr,e),Gt(t,e)}}function l_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;r.uniform3uiv(this.addr,e),Gt(t,e)}}function u_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;r.uniform4uiv(this.addr,e),Gt(t,e)}}function f_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(nf.compareFunction=ph,s=nf):s=Dh,t.setTexture2D(e||s,i)}function h_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Nh,i)}function d_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Uh,i)}function p_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ih,i)}function m_(r){switch(r){case 5126:return Zx;case 35664:return $x;case 35665:return Jx;case 35666:return Qx;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return r_;case 35668:case 35672:return s_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return c_;case 36295:return l_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return p_}}function g_(r,e){r.uniform1fv(this.addr,e)}function x_(r,e){const t=Hr(e,this.size,2);r.uniform2fv(this.addr,t)}function __(r,e){const t=Hr(e,this.size,3);r.uniform3fv(this.addr,t)}function v_(r,e){const t=Hr(e,this.size,4);r.uniform4fv(this.addr,t)}function y_(r,e){const t=Hr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function b_(r,e){const t=Hr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function M_(r,e){const t=Hr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function S_(r,e){r.uniform1iv(this.addr,e)}function T_(r,e){r.uniform2iv(this.addr,e)}function E_(r,e){r.uniform3iv(this.addr,e)}function A_(r,e){r.uniform4iv(this.addr,e)}function w_(r,e){r.uniform1uiv(this.addr,e)}function R_(r,e){r.uniform2uiv(this.addr,e)}function C_(r,e){r.uniform3uiv(this.addr,e)}function P_(r,e){r.uniform4uiv(this.addr,e)}function L_(r,e,t){const n=this.cache,i=e.length,s=Ra(t,i);Ht(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Dh,s[o])}function D_(r,e,t){const n=this.cache,i=e.length,s=Ra(t,i);Ht(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Nh,s[o])}function I_(r,e,t){const n=this.cache,i=e.length,s=Ra(t,i);Ht(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Uh,s[o])}function N_(r,e,t){const n=this.cache,i=e.length,s=Ra(t,i);Ht(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ih,s[o])}function U_(r){switch(r){case 5126:return g_;case 35664:return x_;case 35665:return __;case 35666:return v_;case 35674:return y_;case 35675:return b_;case 35676:return M_;case 5124:case 35670:return S_;case 35667:case 35671:return T_;case 35668:case 35672:return E_;case 35669:case 35673:return A_;case 5125:return w_;case 36294:return R_;case 36295:return C_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return N_}}class F_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=m_(t.type)}}class O_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U_(t.type)}}class B_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const wo=/(\w+)(\])?(\[|\.)?/g;function lf(r,e){r.seq.push(e),r.map[e.id]=e}function k_(r,e,t){const n=r.name,i=n.length;for(wo.lastIndex=0;;){const s=wo.exec(n),o=wo.lastIndex;let c=s[1];const u=s[2]==="]",f=s[3];if(u&&(c=c|0),f===void 0||f==="["&&o+2===i){lf(t,f===void 0?new F_(c,r,e):new O_(c,r,e));break}else{let m=t.map[c];m===void 0&&(m=new B_(c),lf(t,m)),t=m}}}class ha{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);k_(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function uf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const z_=37297;let V_=0;function H_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}const ff=new nt;function G_(r){pt._getMatrix(ff,pt.workingColorSpace,r);const e=`mat3( ${ff.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(r)){case pa:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function hf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+H_(r.getShaderSource(e),c)}else return s}function W_(r,e){const t=G_(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function X_(r,e){let t;switch(e){case Yd:t="Linear";break;case Kd:t="Reinhard";break;case Zd:t="Cineon";break;case $d:t="ACESFilmic";break;case Qd:t="AgX";break;case ep:t="Neutral";break;case Jd:t="Custom";break;default:Ve("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ia=new j;function q_(){pt.getLuminanceCoefficients(ia);const r=ia.x.toFixed(4),e=ia.y.toFixed(4),t=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function Y_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function K_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:c}}return t}function cs(r){return r!==""}function df(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(r){return r.replace(Z_,J_)}const $_=new Map;function J_(r,e){let t=rt[e];if(t===void 0){const n=$_.get(e);if(n!==void 0)t=rt[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xc(t)}const Q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mf(r){return r.replace(Q_,ev)}function ev(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===nh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===wd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function nv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Rr:case Cr:e="ENVMAP_TYPE_CUBE";break;case ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function rv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ih:e="ENVMAP_BLENDING_MULTIPLY";break;case qd:e="ENVMAP_BLENDING_MIX";break;case jd:e="ENVMAP_BLENDING_ADD";break}return e}function sv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function av(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,c=t.fragmentShader;const u=tv(t),f=nv(t),p=iv(t),m=rv(t),g=sv(t),v=j_(t),S=Y_(s),T=i.createProgram();let b,_,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(cs).join(`
`),b.length>0&&(b+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(cs).join(`
`),_.length>0&&(_+=`
`)):(b=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),_=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?rt.tonemapping_pars_fragment:"",t.toneMapping!==Ti?X_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,W_("linearToOutputTexel",t.outputColorSpace),q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cs).join(`
`)),o=Xc(o),o=df(o,t),o=pf(o,t),c=Xc(c),c=df(c,t),c=pf(c,t),o=mf(o),c=mf(c),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,b=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,_=["#define varying in",t.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=D+b+o,L=D+_+c,B=uf(i,i.VERTEX_SHADER,P),h=uf(i,i.FRAGMENT_SHADER,L);i.attachShader(T,B),i.attachShader(T,h),t.index0AttributeName!==void 0?i.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(T,0,"position"),i.linkProgram(T);function I(F){if(r.debug.checkShaderErrors){const H=i.getProgramInfoLog(T)||"",G=i.getShaderInfoLog(B)||"",$=i.getShaderInfoLog(h)||"",ie=H.trim(),ae=G.trim(),fe=$.trim();let re=!0,me=!0;if(i.getProgramParameter(T,i.LINK_STATUS)===!1)if(re=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,T,B,h);else{const _e=hf(i,B,"vertex"),Ie=hf(i,h,"fragment");ct("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(T,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ie+`
`+_e+`
`+Ie)}else ie!==""?Ve("WebGLProgram: Program Info Log:",ie):(ae===""||fe==="")&&(me=!1);me&&(F.diagnostics={runnable:re,programLog:ie,vertexShader:{log:ae,prefix:b},fragmentShader:{log:fe,prefix:_}})}i.deleteShader(B),i.deleteShader(h),z=new ha(i,T),E=K_(i,T)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(T,z_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V_++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=h,this}let ov=0;class cv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lv(e),t.set(e,n)),n}}class lv{constructor(e){this.id=ov++,this.code=e,this.usedTimes=0}}function uv(r,e,t,n,i,s,o){const c=new ll,u=new cv,f=new Set,p=[],m=i.logarithmicDepthBuffer,g=i.vertexTextures;let v=i.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return f.add(E),E===0?"uv":`uv${E}`}function b(E,w,F,H,G){const $=H.fog,ie=G.geometry,ae=E.isMeshStandardMaterial?H.environment:null,fe=(E.isMeshStandardMaterial?t:e).get(E.envMap||ae),re=fe&&fe.mapping===ba?fe.image.height:null,me=S[E.type];E.precision!==null&&(v=i.getMaxPrecision(E.precision),v!==E.precision&&Ve("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const _e=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ie=_e!==void 0?_e.length:0;let it=0;ie.morphAttributes.position!==void 0&&(it=1),ie.morphAttributes.normal!==void 0&&(it=2),ie.morphAttributes.color!==void 0&&(it=3);let ht,bt,xt,ce;if(me){const mt=On[me];ht=mt.vertexShader,bt=mt.fragmentShader}else ht=E.vertexShader,bt=E.fragmentShader,u.update(E),xt=u.getVertexShaderID(E),ce=u.getFragmentShaderID(E);const oe=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),We=G.isInstancedMesh===!0,De=G.isBatchedMesh===!0,Qe=!!E.map,kt=!!E.matcap,et=!!fe,dt=!!E.aoMap,k=!!E.lightMap,st=!!E.bumpMap,at=!!E.normalMap,Et=!!E.displacementMap,Le=!!E.emissiveMap,Ct=!!E.metalnessMap,ke=!!E.roughnessMap,qe=E.anisotropy>0,U=E.clearcoat>0,A=E.dispersion>0,Z=E.iridescence>0,se=E.sheen>0,le=E.transmission>0,ne=qe&&!!E.anisotropyMap,Fe=U&&!!E.clearcoatMap,Se=U&&!!E.clearcoatNormalMap,Be=U&&!!E.clearcoatRoughnessMap,Ne=Z&&!!E.iridescenceMap,he=Z&&!!E.iridescenceThicknessMap,ve=se&&!!E.sheenColorMap,je=se&&!!E.sheenRoughnessMap,Ge=!!E.specularMap,Ae=!!E.specularColorMap,Ke=!!E.specularIntensityMap,V=le&&!!E.transmissionMap,xe=le&&!!E.thicknessMap,pe=!!E.gradientMap,ye=!!E.alphaMap,de=E.alphaTest>0,ue=!!E.alphaHash,we=!!E.extensions;let Xe=Ti;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Xe=r.toneMapping);const At={shaderID:me,shaderType:E.type,shaderName:E.name,vertexShader:ht,fragmentShader:bt,defines:E.defines,customVertexShaderID:xt,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:De,batchingColor:De&&G._colorsTexture!==null,instancing:We,instancingColor:We&&G.instanceColor!==null,instancingMorph:We&&G.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:oe===null?r.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ln,alphaToCoverage:!!E.alphaToCoverage,map:Qe,matcap:kt,envMap:et,envMapMode:et&&fe.mapping,envMapCubeUVHeight:re,aoMap:dt,lightMap:k,bumpMap:st,normalMap:at,displacementMap:g&&Et,emissiveMap:Le,normalMapObjectSpace:at&&E.normalMapType===ap,normalMapTangentSpace:at&&E.normalMapType===dh,metalnessMap:Ct,roughnessMap:ke,anisotropy:qe,anisotropyMap:ne,clearcoat:U,clearcoatMap:Fe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Be,dispersion:A,iridescence:Z,iridescenceMap:Ne,iridescenceThicknessMap:he,sheen:se,sheenColorMap:ve,sheenRoughnessMap:je,specularMap:Ge,specularColorMap:Ae,specularIntensityMap:Ke,transmission:le,transmissionMap:V,thicknessMap:xe,gradientMap:pe,opaque:E.transparent===!1&&E.blending===Sr&&E.alphaToCoverage===!1,alphaMap:ye,alphaTest:de,alphaHash:ue,combine:E.combine,mapUv:Qe&&T(E.map.channel),aoMapUv:dt&&T(E.aoMap.channel),lightMapUv:k&&T(E.lightMap.channel),bumpMapUv:st&&T(E.bumpMap.channel),normalMapUv:at&&T(E.normalMap.channel),displacementMapUv:Et&&T(E.displacementMap.channel),emissiveMapUv:Le&&T(E.emissiveMap.channel),metalnessMapUv:Ct&&T(E.metalnessMap.channel),roughnessMapUv:ke&&T(E.roughnessMap.channel),anisotropyMapUv:ne&&T(E.anisotropyMap.channel),clearcoatMapUv:Fe&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Se&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:he&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:je&&T(E.sheenRoughnessMap.channel),specularMapUv:Ge&&T(E.specularMap.channel),specularColorMapUv:Ae&&T(E.specularColorMap.channel),specularIntensityMapUv:Ke&&T(E.specularIntensityMap.channel),transmissionMapUv:V&&T(E.transmissionMap.channel),thicknessMapUv:xe&&T(E.thicknessMap.channel),alphaMapUv:ye&&T(E.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(at||qe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ie.attributes.uv&&(Qe||ye),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Me,skinning:G.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:it,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Qe&&E.map.isVideoTexture===!0&&pt.getTransfer(E.map.colorSpace)===Rt,decodeVideoTextureEmissive:Le&&E.emissiveMap.isVideoTexture===!0&&pt.getTransfer(E.emissiveMap.colorSpace)===Rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Bn,flipSided:E.side===mn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:we&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&E.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return At.vertexUv1s=f.has(1),At.vertexUv2s=f.has(2),At.vertexUv3s=f.has(3),f.clear(),At}function _(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)w.push(F),w.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(D(w,E),P(w,E),w.push(r.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function D(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function P(E,w){c.disableAll(),w.supportsVertexTextures&&c.enable(0),w.instancing&&c.enable(1),w.instancingColor&&c.enable(2),w.instancingMorph&&c.enable(3),w.matcap&&c.enable(4),w.envMap&&c.enable(5),w.normalMapObjectSpace&&c.enable(6),w.normalMapTangentSpace&&c.enable(7),w.clearcoat&&c.enable(8),w.iridescence&&c.enable(9),w.alphaTest&&c.enable(10),w.vertexColors&&c.enable(11),w.vertexAlphas&&c.enable(12),w.vertexUv1s&&c.enable(13),w.vertexUv2s&&c.enable(14),w.vertexUv3s&&c.enable(15),w.vertexTangents&&c.enable(16),w.anisotropy&&c.enable(17),w.alphaHash&&c.enable(18),w.batching&&c.enable(19),w.dispersion&&c.enable(20),w.batchingColor&&c.enable(21),w.gradientMap&&c.enable(22),E.push(c.mask),c.disableAll(),w.fog&&c.enable(0),w.useFog&&c.enable(1),w.flatShading&&c.enable(2),w.logarithmicDepthBuffer&&c.enable(3),w.reversedDepthBuffer&&c.enable(4),w.skinning&&c.enable(5),w.morphTargets&&c.enable(6),w.morphNormals&&c.enable(7),w.morphColors&&c.enable(8),w.premultipliedAlpha&&c.enable(9),w.shadowMapEnabled&&c.enable(10),w.doubleSided&&c.enable(11),w.flipSided&&c.enable(12),w.useDepthPacking&&c.enable(13),w.dithering&&c.enable(14),w.transmission&&c.enable(15),w.sheen&&c.enable(16),w.opaque&&c.enable(17),w.pointsUvs&&c.enable(18),w.decodeVideoTexture&&c.enable(19),w.decodeVideoTextureEmissive&&c.enable(20),w.alphaToCoverage&&c.enable(21),E.push(c.mask)}function L(E){const w=S[E.type];let F;if(w){const H=On[w];F=$p.clone(H.uniforms)}else F=E.uniforms;return F}function B(E,w){let F;for(let H=0,G=p.length;H<G;H++){const $=p[H];if($.cacheKey===w){F=$,++F.usedTimes;break}}return F===void 0&&(F=new av(r,w,E,s),p.push(F)),F}function h(E){if(--E.usedTimes===0){const w=p.indexOf(E);p[w]=p[p.length-1],p.pop(),E.destroy()}}function I(E){u.remove(E)}function z(){u.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:L,acquireProgram:B,releaseProgram:h,releaseShaderCache:I,programs:p,dispose:z}}function fv(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let c=r.get(o);return c===void 0&&(c={},r.set(o,c)),c}function n(o){r.delete(o)}function i(o,c,u){r.get(o)[c]=u}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function hv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function xf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _f(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(m,g,v,S,T,b){let _=r[e];return _===void 0?(_={id:m.id,object:m,geometry:g,material:v,groupOrder:S,renderOrder:m.renderOrder,z:T,group:b},r[e]=_):(_.id=m.id,_.object=m,_.geometry=g,_.material=v,_.groupOrder=S,_.renderOrder=m.renderOrder,_.z=T,_.group=b),e++,_}function c(m,g,v,S,T,b){const _=o(m,g,v,S,T,b);v.transmission>0?n.push(_):v.transparent===!0?i.push(_):t.push(_)}function u(m,g,v,S,T,b){const _=o(m,g,v,S,T,b);v.transmission>0?n.unshift(_):v.transparent===!0?i.unshift(_):t.unshift(_)}function f(m,g){t.length>1&&t.sort(m||hv),n.length>1&&n.sort(g||xf),i.length>1&&i.sort(g||xf)}function p(){for(let m=e,g=r.length;m<g;m++){const v=r[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:u,finish:p,sort:f}}function dv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new _f,r.set(n,[o])):i>=s.length?(o=new _f,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function pv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Je};break;case"SpotLight":t={position:new j,direction:new j,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new j,halfWidth:new j,halfHeight:new j};break}return r[e.id]=t,t}}}function mv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let gv=0;function xv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function _v(r){const e=new pv,t=mv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new j);const i=new j,s=new tt,o=new tt;function c(f){let p=0,m=0,g=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let v=0,S=0,T=0,b=0,_=0,D=0,P=0,L=0,B=0,h=0,I=0;f.sort(xv);for(let E=0,w=f.length;E<w;E++){const F=f[E],H=F.color,G=F.intensity,$=F.distance,ie=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)p+=H.r*G,m+=H.g*G,g+=H.b*G;else if(F.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(F.sh.coefficients[ae],G);I++}else if(F.isDirectionalLight){const ae=e.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const fe=F.shadow,re=t.get(F);re.shadowIntensity=fe.intensity,re.shadowBias=fe.bias,re.shadowNormalBias=fe.normalBias,re.shadowRadius=fe.radius,re.shadowMapSize=fe.mapSize,n.directionalShadow[v]=re,n.directionalShadowMap[v]=ie,n.directionalShadowMatrix[v]=F.shadow.matrix,D++}n.directional[v]=ae,v++}else if(F.isSpotLight){const ae=e.get(F);ae.position.setFromMatrixPosition(F.matrixWorld),ae.color.copy(H).multiplyScalar(G),ae.distance=$,ae.coneCos=Math.cos(F.angle),ae.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ae.decay=F.decay,n.spot[T]=ae;const fe=F.shadow;if(F.map&&(n.spotLightMap[B]=F.map,B++,fe.updateMatrices(F),F.castShadow&&h++),n.spotLightMatrix[T]=fe.matrix,F.castShadow){const re=t.get(F);re.shadowIntensity=fe.intensity,re.shadowBias=fe.bias,re.shadowNormalBias=fe.normalBias,re.shadowRadius=fe.radius,re.shadowMapSize=fe.mapSize,n.spotShadow[T]=re,n.spotShadowMap[T]=ie,L++}T++}else if(F.isRectAreaLight){const ae=e.get(F);ae.color.copy(H).multiplyScalar(G),ae.halfWidth.set(F.width*.5,0,0),ae.halfHeight.set(0,F.height*.5,0),n.rectArea[b]=ae,b++}else if(F.isPointLight){const ae=e.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity),ae.distance=F.distance,ae.decay=F.decay,F.castShadow){const fe=F.shadow,re=t.get(F);re.shadowIntensity=fe.intensity,re.shadowBias=fe.bias,re.shadowNormalBias=fe.normalBias,re.shadowRadius=fe.radius,re.shadowMapSize=fe.mapSize,re.shadowCameraNear=fe.camera.near,re.shadowCameraFar=fe.camera.far,n.pointShadow[S]=re,n.pointShadowMap[S]=ie,n.pointShadowMatrix[S]=F.shadow.matrix,P++}n.point[S]=ae,S++}else if(F.isHemisphereLight){const ae=e.get(F);ae.skyColor.copy(F.color).multiplyScalar(G),ae.groundColor.copy(F.groundColor).multiplyScalar(G),n.hemi[_]=ae,_++}}b>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=g;const z=n.hash;(z.directionalLength!==v||z.pointLength!==S||z.spotLength!==T||z.rectAreaLength!==b||z.hemiLength!==_||z.numDirectionalShadows!==D||z.numPointShadows!==P||z.numSpotShadows!==L||z.numSpotMaps!==B||z.numLightProbes!==I)&&(n.directional.length=v,n.spot.length=T,n.rectArea.length=b,n.point.length=S,n.hemi.length=_,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=L+B-h,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=h,n.numLightProbes=I,z.directionalLength=v,z.pointLength=S,z.spotLength=T,z.rectAreaLength=b,z.hemiLength=_,z.numDirectionalShadows=D,z.numPointShadows=P,z.numSpotShadows=L,z.numSpotMaps=B,z.numLightProbes=I,n.version=gv++)}function u(f,p){let m=0,g=0,v=0,S=0,T=0;const b=p.matrixWorldInverse;for(let _=0,D=f.length;_<D;_++){const P=f[_];if(P.isDirectionalLight){const L=n.directional[m];L.direction.setFromMatrixPosition(P.matrixWorld),i.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(i),L.direction.transformDirection(b),m++}else if(P.isSpotLight){const L=n.spot[v];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(b),L.direction.setFromMatrixPosition(P.matrixWorld),i.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(i),L.direction.transformDirection(b),v++}else if(P.isRectAreaLight){const L=n.rectArea[S];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(b),o.identity(),s.copy(P.matrixWorld),s.premultiply(b),o.extractRotation(s),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),S++}else if(P.isPointLight){const L=n.point[g];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(b),g++}else if(P.isHemisphereLight){const L=n.hemi[T];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(b),T++}}}return{setup:c,setupView:u,state:n}}function vf(r){const e=new _v(r),t=[],n=[];function i(p){f.camera=p,t.length=0,n.length=0}function s(p){t.push(p)}function o(p){n.push(p)}function c(){e.setup(t)}function u(p){e.setupView(t,p)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:f,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:o}}function vv(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let c;return o===void 0?(c=new vf(r),e.set(i,[c])):s>=o.length?(c=new vf(r),o.push(c)):c=o[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mv(r,e,t){let n=new dl;const i=new ft,s=new ft,o=new yt,c=new mm({depthPacking:sp}),u=new gm,f={},p=t.maxTextureSize,m={[ui]:mn,[mn]:ui,[Bn]:Bn},g=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:yv,fragmentShader:bv}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const S=new tn;S.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new en(S,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nh;let _=this.type;this.render=function(h,I,z){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||h.length===0)return;const E=r.getRenderTarget(),w=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),H=r.state;H.setBlending(ci),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=_!==ii&&this.type===ii,$=_===ii&&this.type!==ii;for(let ie=0,ae=h.length;ie<ae;ie++){const fe=h[ie],re=fe.shadow;if(re===void 0){Ve("WebGLShadowMap:",fe,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;i.copy(re.mapSize);const me=re.getFrameExtents();if(i.multiply(me),s.copy(re.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(s.x=Math.floor(p/me.x),i.x=s.x*me.x,re.mapSize.x=s.x),i.y>p&&(s.y=Math.floor(p/me.y),i.y=s.y*me.y,re.mapSize.y=s.y)),re.map===null||G===!0||$===!0){const Ie=this.type!==ii?{minFilter:cn,magFilter:cn}:{};re.map!==null&&re.map.dispose(),re.map=new Wi(i.x,i.y,Ie),re.map.texture.name=fe.name+".shadowMap",re.camera.updateProjectionMatrix()}r.setRenderTarget(re.map),r.clear();const _e=re.getViewportCount();for(let Ie=0;Ie<_e;Ie++){const it=re.getViewport(Ie);o.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),H.viewport(o),re.updateMatrices(fe,Ie),n=re.getFrustum(),L(I,z,re.camera,fe,this.type)}re.isPointLightShadow!==!0&&this.type===ii&&D(re,z),re.needsUpdate=!1}_=this.type,b.needsUpdate=!1,r.setRenderTarget(E,w,F)};function D(h,I){const z=e.update(T);g.defines.VSM_SAMPLES!==h.blurSamples&&(g.defines.VSM_SAMPLES=h.blurSamples,v.defines.VSM_SAMPLES=h.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),h.mapPass===null&&(h.mapPass=new Wi(i.x,i.y)),g.uniforms.shadow_pass.value=h.map.texture,g.uniforms.resolution.value=h.mapSize,g.uniforms.radius.value=h.radius,r.setRenderTarget(h.mapPass),r.clear(),r.renderBufferDirect(I,null,z,g,T,null),v.uniforms.shadow_pass.value=h.mapPass.texture,v.uniforms.resolution.value=h.mapSize,v.uniforms.radius.value=h.radius,r.setRenderTarget(h.map),r.clear(),r.renderBufferDirect(I,null,z,v,T,null)}function P(h,I,z,E){let w=null;const F=z.isPointLight===!0?h.customDistanceMaterial:h.customDepthMaterial;if(F!==void 0)w=F;else if(w=z.isPointLight===!0?u:c,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const H=w.uuid,G=I.uuid;let $=f[H];$===void 0&&($={},f[H]=$);let ie=$[G];ie===void 0&&(ie=w.clone(),$[G]=ie,I.addEventListener("dispose",B)),w=ie}if(w.visible=I.visible,w.wireframe=I.wireframe,E===ii?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:m[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const H=r.properties.get(w);H.light=z}return w}function L(h,I,z,E,w){if(h.visible===!1)return;if(h.layers.test(I.layers)&&(h.isMesh||h.isLine||h.isPoints)&&(h.castShadow||h.receiveShadow&&w===ii)&&(!h.frustumCulled||n.intersectsObject(h))){h.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,h.matrixWorld);const G=e.update(h),$=h.material;if(Array.isArray($)){const ie=G.groups;for(let ae=0,fe=ie.length;ae<fe;ae++){const re=ie[ae],me=$[re.materialIndex];if(me&&me.visible){const _e=P(h,me,E,w);h.onBeforeShadow(r,h,I,z,G,_e,re),r.renderBufferDirect(z,null,G,_e,h,re),h.onAfterShadow(r,h,I,z,G,_e,re)}}}else if($.visible){const ie=P(h,$,E,w);h.onBeforeShadow(r,h,I,z,G,ie,null),r.renderBufferDirect(z,null,G,ie,h,null),h.onAfterShadow(r,h,I,z,G,ie,null)}}const H=h.children;for(let G=0,$=H.length;G<$;G++)L(H[G],I,z,E,w)}function B(h){h.target.removeEventListener("dispose",B);for(const z in f){const E=f[z],w=h.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}const Sv={[ic]:rc,[sc]:cc,[ac]:lc,[wr]:oc,[rc]:ic,[cc]:sc,[lc]:ac,[oc]:wr};function Tv(r,e){function t(){let V=!1;const xe=new yt;let pe=null;const ye=new yt(0,0,0,0);return{setMask:function(de){pe!==de&&!V&&(r.colorMask(de,de,de,de),pe=de)},setLocked:function(de){V=de},setClear:function(de,ue,we,Xe,At){At===!0&&(de*=Xe,ue*=Xe,we*=Xe),xe.set(de,ue,we,Xe),ye.equals(xe)===!1&&(r.clearColor(de,ue,we,Xe),ye.copy(xe))},reset:function(){V=!1,pe=null,ye.set(-1,0,0,0)}}}function n(){let V=!1,xe=!1,pe=null,ye=null,de=null;return{setReversed:function(ue){if(xe!==ue){const we=e.get("EXT_clip_control");ue?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),xe=ue;const Xe=de;de=null,this.setClear(Xe)}},getReversed:function(){return xe},setTest:function(ue){ue?oe(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(ue){pe!==ue&&!V&&(r.depthMask(ue),pe=ue)},setFunc:function(ue){if(xe&&(ue=Sv[ue]),ye!==ue){switch(ue){case ic:r.depthFunc(r.NEVER);break;case rc:r.depthFunc(r.ALWAYS);break;case sc:r.depthFunc(r.LESS);break;case wr:r.depthFunc(r.LEQUAL);break;case ac:r.depthFunc(r.EQUAL);break;case oc:r.depthFunc(r.GEQUAL);break;case cc:r.depthFunc(r.GREATER);break;case lc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ye=ue}},setLocked:function(ue){V=ue},setClear:function(ue){de!==ue&&(xe&&(ue=1-ue),r.clearDepth(ue),de=ue)},reset:function(){V=!1,pe=null,ye=null,de=null,xe=!1}}}function i(){let V=!1,xe=null,pe=null,ye=null,de=null,ue=null,we=null,Xe=null,At=null;return{setTest:function(mt){V||(mt?oe(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(mt){xe!==mt&&!V&&(r.stencilMask(mt),xe=mt)},setFunc:function(mt,un,gn){(pe!==mt||ye!==un||de!==gn)&&(r.stencilFunc(mt,un,gn),pe=mt,ye=un,de=gn)},setOp:function(mt,un,gn){(ue!==mt||we!==un||Xe!==gn)&&(r.stencilOp(mt,un,gn),ue=mt,we=un,Xe=gn)},setLocked:function(mt){V=mt},setClear:function(mt){At!==mt&&(r.clearStencil(mt),At=mt)},reset:function(){V=!1,xe=null,pe=null,ye=null,de=null,ue=null,we=null,Xe=null,At=null}}}const s=new t,o=new n,c=new i,u=new WeakMap,f=new WeakMap;let p={},m={},g=new WeakMap,v=[],S=null,T=!1,b=null,_=null,D=null,P=null,L=null,B=null,h=null,I=new Je(0,0,0),z=0,E=!1,w=null,F=null,H=null,G=null,$=null;const ie=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,fe=0;const re=r.getParameter(r.VERSION);re.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(re)[1]),ae=fe>=1):re.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ae=fe>=2);let me=null,_e={};const Ie=r.getParameter(r.SCISSOR_BOX),it=r.getParameter(r.VIEWPORT),ht=new yt().fromArray(Ie),bt=new yt().fromArray(it);function xt(V,xe,pe,ye){const de=new Uint8Array(4),ue=r.createTexture();r.bindTexture(V,ue),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let we=0;we<pe;we++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(xe,0,r.RGBA,1,1,ye,0,r.RGBA,r.UNSIGNED_BYTE,de):r.texImage2D(xe+we,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,de);return ue}const ce={};ce[r.TEXTURE_2D]=xt(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=xt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=xt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=xt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),c.setClear(0),oe(r.DEPTH_TEST),o.setFunc(wr),st(!1),at(eu),oe(r.CULL_FACE),dt(ci);function oe(V){p[V]!==!0&&(r.enable(V),p[V]=!0)}function Me(V){p[V]!==!1&&(r.disable(V),p[V]=!1)}function We(V,xe){return m[V]!==xe?(r.bindFramebuffer(V,xe),m[V]=xe,V===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=xe),V===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=xe),!0):!1}function De(V,xe){let pe=v,ye=!1;if(V){pe=g.get(xe),pe===void 0&&(pe=[],g.set(xe,pe));const de=V.textures;if(pe.length!==de.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let ue=0,we=de.length;ue<we;ue++)pe[ue]=r.COLOR_ATTACHMENT0+ue;pe.length=de.length,ye=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,ye=!0);ye&&r.drawBuffers(pe)}function Qe(V){return S!==V?(r.useProgram(V),S=V,!0):!1}const kt={[ki]:r.FUNC_ADD,[Cd]:r.FUNC_SUBTRACT,[Pd]:r.FUNC_REVERSE_SUBTRACT};kt[Ld]=r.MIN,kt[Dd]=r.MAX;const et={[Id]:r.ZERO,[Nd]:r.ONE,[Ud]:r.SRC_COLOR,[tc]:r.SRC_ALPHA,[Vd]:r.SRC_ALPHA_SATURATE,[kd]:r.DST_COLOR,[Od]:r.DST_ALPHA,[Fd]:r.ONE_MINUS_SRC_COLOR,[nc]:r.ONE_MINUS_SRC_ALPHA,[zd]:r.ONE_MINUS_DST_COLOR,[Bd]:r.ONE_MINUS_DST_ALPHA,[Hd]:r.CONSTANT_COLOR,[Gd]:r.ONE_MINUS_CONSTANT_COLOR,[Wd]:r.CONSTANT_ALPHA,[Xd]:r.ONE_MINUS_CONSTANT_ALPHA};function dt(V,xe,pe,ye,de,ue,we,Xe,At,mt){if(V===ci){T===!0&&(Me(r.BLEND),T=!1);return}if(T===!1&&(oe(r.BLEND),T=!0),V!==Rd){if(V!==b||mt!==E){if((_!==ki||L!==ki)&&(r.blendEquation(r.FUNC_ADD),_=ki,L=ki),mt)switch(V){case Sr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tu:r.blendFunc(r.ONE,r.ONE);break;case nu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case iu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ct("WebGLState: Invalid blending: ",V);break}else switch(V){case Sr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case nu:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iu:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",V);break}D=null,P=null,B=null,h=null,I.set(0,0,0),z=0,b=V,E=mt}return}de=de||xe,ue=ue||pe,we=we||ye,(xe!==_||de!==L)&&(r.blendEquationSeparate(kt[xe],kt[de]),_=xe,L=de),(pe!==D||ye!==P||ue!==B||we!==h)&&(r.blendFuncSeparate(et[pe],et[ye],et[ue],et[we]),D=pe,P=ye,B=ue,h=we),(Xe.equals(I)===!1||At!==z)&&(r.blendColor(Xe.r,Xe.g,Xe.b,At),I.copy(Xe),z=At),b=V,E=!1}function k(V,xe){V.side===Bn?Me(r.CULL_FACE):oe(r.CULL_FACE);let pe=V.side===mn;xe&&(pe=!pe),st(pe),V.blending===Sr&&V.transparent===!1?dt(ci):dt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const ye=V.stencilWrite;c.setTest(ye),ye&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Le(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?oe(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function st(V){w!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),w=V)}function at(V){V!==Ed?(oe(r.CULL_FACE),V!==F&&(V===eu?r.cullFace(r.BACK):V===Ad?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),F=V}function Et(V){V!==H&&(ae&&r.lineWidth(V),H=V)}function Le(V,xe,pe){V?(oe(r.POLYGON_OFFSET_FILL),(G!==xe||$!==pe)&&(r.polygonOffset(xe,pe),G=xe,$=pe)):Me(r.POLYGON_OFFSET_FILL)}function Ct(V){V?oe(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function ke(V){V===void 0&&(V=r.TEXTURE0+ie-1),me!==V&&(r.activeTexture(V),me=V)}function qe(V,xe,pe){pe===void 0&&(me===null?pe=r.TEXTURE0+ie-1:pe=me);let ye=_e[pe];ye===void 0&&(ye={type:void 0,texture:void 0},_e[pe]=ye),(ye.type!==V||ye.texture!==xe)&&(me!==pe&&(r.activeTexture(pe),me=pe),r.bindTexture(V,xe||ce[V]),ye.type=V,ye.texture=xe)}function U(){const V=_e[me];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function A(){try{r.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function se(){try{r.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function le(){try{r.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ne(){try{r.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Fe(){try{r.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Se(){try{r.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Be(){try{r.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ne(){try{r.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function he(){try{r.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ve(V){ht.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),ht.copy(V))}function je(V){bt.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),bt.copy(V))}function Ge(V,xe){let pe=f.get(xe);pe===void 0&&(pe=new WeakMap,f.set(xe,pe));let ye=pe.get(V);ye===void 0&&(ye=r.getUniformBlockIndex(xe,V.name),pe.set(V,ye))}function Ae(V,xe){const ye=f.get(xe).get(V);u.get(xe)!==ye&&(r.uniformBlockBinding(xe,ye,V.__bindingPointIndex),u.set(xe,ye))}function Ke(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},me=null,_e={},m={},g=new WeakMap,v=[],S=null,T=!1,b=null,_=null,D=null,P=null,L=null,B=null,h=null,I=new Je(0,0,0),z=0,E=!1,w=null,F=null,H=null,G=null,$=null,ht.set(0,0,r.canvas.width,r.canvas.height),bt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),c.reset()}return{buffers:{color:s,depth:o,stencil:c},enable:oe,disable:Me,bindFramebuffer:We,drawBuffers:De,useProgram:Qe,setBlending:dt,setMaterial:k,setFlipSided:st,setCullFace:at,setLineWidth:Et,setPolygonOffset:Le,setScissorTest:Ct,activeTexture:ke,bindTexture:qe,unbindTexture:U,compressedTexImage2D:A,compressedTexImage3D:Z,texImage2D:Ne,texImage3D:he,updateUBOMapping:Ge,uniformBlockBinding:Ae,texStorage2D:Se,texStorage3D:Be,texSubImage2D:se,texSubImage3D:le,compressedTexSubImage2D:ne,compressedTexSubImage3D:Fe,scissor:ve,viewport:je,reset:Ke}}function Ev(r,e,t,n,i,s,o){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ft,p=new WeakMap;let m;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(U,A){return v?new OffscreenCanvas(U,A):vs("canvas")}function T(U,A,Z){let se=1;const le=qe(U);if((le.width>Z||le.height>Z)&&(se=Z/Math.max(le.width,le.height)),se<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ne=Math.floor(se*le.width),Fe=Math.floor(se*le.height);m===void 0&&(m=S(ne,Fe));const Se=A?S(ne,Fe):m;return Se.width=ne,Se.height=Fe,Se.getContext("2d").drawImage(U,0,0,ne,Fe),Ve("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ne+"x"+Fe+")."),Se}else return"data"in U&&Ve("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),U;return U}function b(U){return U.generateMipmaps}function _(U){r.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(U,A,Z,se,le=!1){if(U!==null){if(r[U]!==void 0)return r[U];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ne=A;if(A===r.RED&&(Z===r.FLOAT&&(ne=r.R32F),Z===r.HALF_FLOAT&&(ne=r.R16F),Z===r.UNSIGNED_BYTE&&(ne=r.R8)),A===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ne=r.R8UI),Z===r.UNSIGNED_SHORT&&(ne=r.R16UI),Z===r.UNSIGNED_INT&&(ne=r.R32UI),Z===r.BYTE&&(ne=r.R8I),Z===r.SHORT&&(ne=r.R16I),Z===r.INT&&(ne=r.R32I)),A===r.RG&&(Z===r.FLOAT&&(ne=r.RG32F),Z===r.HALF_FLOAT&&(ne=r.RG16F),Z===r.UNSIGNED_BYTE&&(ne=r.RG8)),A===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ne=r.RG8UI),Z===r.UNSIGNED_SHORT&&(ne=r.RG16UI),Z===r.UNSIGNED_INT&&(ne=r.RG32UI),Z===r.BYTE&&(ne=r.RG8I),Z===r.SHORT&&(ne=r.RG16I),Z===r.INT&&(ne=r.RG32I)),A===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ne=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(ne=r.RGB16UI),Z===r.UNSIGNED_INT&&(ne=r.RGB32UI),Z===r.BYTE&&(ne=r.RGB8I),Z===r.SHORT&&(ne=r.RGB16I),Z===r.INT&&(ne=r.RGB32I)),A===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ne=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(ne=r.RGBA16UI),Z===r.UNSIGNED_INT&&(ne=r.RGBA32UI),Z===r.BYTE&&(ne=r.RGBA8I),Z===r.SHORT&&(ne=r.RGBA16I),Z===r.INT&&(ne=r.RGBA32I)),A===r.RGB&&(Z===r.UNSIGNED_INT_5_9_9_9_REV&&(ne=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(ne=r.R11F_G11F_B10F)),A===r.RGBA){const Fe=le?pa:pt.getTransfer(se);Z===r.FLOAT&&(ne=r.RGBA32F),Z===r.HALF_FLOAT&&(ne=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(ne=Fe===Rt?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function L(U,A){let Z;return U?A===null||A===Gi||A===ps?Z=r.DEPTH24_STENCIL8:A===Pn?Z=r.DEPTH32F_STENCIL8:A===ds&&(Z=r.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Gi||A===ps?Z=r.DEPTH_COMPONENT24:A===Pn?Z=r.DEPTH_COMPONENT32F:A===ds&&(Z=r.DEPTH_COMPONENT16),Z}function B(U,A){return b(U)===!0||U.isFramebufferTexture&&U.minFilter!==cn&&U.minFilter!==on?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function h(U){const A=U.target;A.removeEventListener("dispose",h),z(A),A.isVideoTexture&&p.delete(A)}function I(U){const A=U.target;A.removeEventListener("dispose",I),w(A)}function z(U){const A=n.get(U);if(A.__webglInit===void 0)return;const Z=U.source,se=g.get(Z);if(se){const le=se[A.__cacheKey];le.usedTimes--,le.usedTimes===0&&E(U),Object.keys(se).length===0&&g.delete(Z)}n.remove(U)}function E(U){const A=n.get(U);r.deleteTexture(A.__webglTexture);const Z=U.source,se=g.get(Z);delete se[A.__cacheKey],o.memory.textures--}function w(U){const A=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(A.__webglFramebuffer[se]))for(let le=0;le<A.__webglFramebuffer[se].length;le++)r.deleteFramebuffer(A.__webglFramebuffer[se][le]);else r.deleteFramebuffer(A.__webglFramebuffer[se]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[se])}else{if(Array.isArray(A.__webglFramebuffer))for(let se=0;se<A.__webglFramebuffer.length;se++)r.deleteFramebuffer(A.__webglFramebuffer[se]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let se=0;se<A.__webglColorRenderbuffer.length;se++)A.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[se]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=U.textures;for(let se=0,le=Z.length;se<le;se++){const ne=n.get(Z[se]);ne.__webglTexture&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(Z[se])}n.remove(U)}let F=0;function H(){F=0}function G(){const U=F;return U>=i.maxTextures&&Ve("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),F+=1,U}function $(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function ie(U,A){const Z=n.get(U);if(U.isVideoTexture&&Ct(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Z.__version!==U.version){const se=U.image;if(se===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(Z,U,A);return}}else U.isExternalTexture&&(Z.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+A)}function ae(U,A){const Z=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){ce(Z,U,A);return}else U.isExternalTexture&&(Z.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+A)}function fe(U,A){const Z=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){ce(Z,U,A);return}t.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+A)}function re(U,A){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){oe(Z,U,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+A)}const me={[Pr]:r.REPEAT,[kn]:r.CLAMP_TO_EDGE,[da]:r.MIRRORED_REPEAT},_e={[cn]:r.NEAREST,[sh]:r.NEAREST_MIPMAP_NEAREST,[os]:r.NEAREST_MIPMAP_LINEAR,[on]:r.LINEAR,[oa]:r.LINEAR_MIPMAP_NEAREST,[si]:r.LINEAR_MIPMAP_LINEAR},Ie={[op]:r.NEVER,[dp]:r.ALWAYS,[cp]:r.LESS,[ph]:r.LEQUAL,[lp]:r.EQUAL,[hp]:r.GEQUAL,[up]:r.GREATER,[fp]:r.NOTEQUAL};function it(U,A){if(A.type===Pn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===on||A.magFilter===oa||A.magFilter===os||A.magFilter===si||A.minFilter===on||A.minFilter===oa||A.minFilter===os||A.minFilter===si)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,me[A.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,me[A.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,me[A.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,_e[A.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,_e[A.minFilter]),A.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,Ie[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===cn||A.minFilter!==os&&A.minFilter!==si||A.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ht(U,A){let Z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",h));const se=A.source;let le=g.get(se);le===void 0&&(le={},g.set(se,le));const ne=$(A);if(ne!==U.__cacheKey){le[ne]===void 0&&(le[ne]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),le[ne].usedTimes++;const Fe=le[U.__cacheKey];Fe!==void 0&&(le[U.__cacheKey].usedTimes--,Fe.usedTimes===0&&E(A)),U.__cacheKey=ne,U.__webglTexture=le[ne].texture}return Z}function bt(U,A,Z){return Math.floor(Math.floor(U/Z)/A)}function xt(U,A,Z,se){const ne=U.updateRanges;if(ne.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,Z,se,A.data);else{ne.sort((he,ve)=>he.start-ve.start);let Fe=0;for(let he=1;he<ne.length;he++){const ve=ne[Fe],je=ne[he],Ge=ve.start+ve.count,Ae=bt(je.start,A.width,4),Ke=bt(ve.start,A.width,4);je.start<=Ge+1&&Ae===Ke&&bt(je.start+je.count-1,A.width,4)===Ae?ve.count=Math.max(ve.count,je.start+je.count-ve.start):(++Fe,ne[Fe]=je)}ne.length=Fe+1;const Se=r.getParameter(r.UNPACK_ROW_LENGTH),Be=r.getParameter(r.UNPACK_SKIP_PIXELS),Ne=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let he=0,ve=ne.length;he<ve;he++){const je=ne[he],Ge=Math.floor(je.start/4),Ae=Math.ceil(je.count/4),Ke=Ge%A.width,V=Math.floor(Ge/A.width),xe=Ae,pe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,V),t.texSubImage2D(r.TEXTURE_2D,0,Ke,V,xe,pe,Z,se,A.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Be),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ne)}}function ce(U,A,Z){let se=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(se=r.TEXTURE_3D);const le=ht(U,A),ne=A.source;t.bindTexture(se,U.__webglTexture,r.TEXTURE0+Z);const Fe=n.get(ne);if(ne.version!==Fe.__version||le===!0){t.activeTexture(r.TEXTURE0+Z);const Se=pt.getPrimaries(pt.workingColorSpace),Be=A.colorSpace===Mi?null:pt.getPrimaries(A.colorSpace),Ne=A.colorSpace===Mi||Se===Be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let he=T(A.image,!1,i.maxTextureSize);he=ke(A,he);const ve=s.convert(A.format,A.colorSpace),je=s.convert(A.type);let Ge=P(A.internalFormat,ve,je,A.colorSpace,A.isVideoTexture);it(se,A);let Ae;const Ke=A.mipmaps,V=A.isVideoTexture!==!0,xe=Fe.__version===void 0||le===!0,pe=ne.dataReady,ye=B(A,he);if(A.isDepthTexture)Ge=L(A.format===gs,A.type),xe&&(V?t.texStorage2D(r.TEXTURE_2D,1,Ge,he.width,he.height):t.texImage2D(r.TEXTURE_2D,0,Ge,he.width,he.height,0,ve,je,null));else if(A.isDataTexture)if(Ke.length>0){V&&xe&&t.texStorage2D(r.TEXTURE_2D,ye,Ge,Ke[0].width,Ke[0].height);for(let de=0,ue=Ke.length;de<ue;de++)Ae=Ke[de],V?pe&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Ae.width,Ae.height,ve,je,Ae.data):t.texImage2D(r.TEXTURE_2D,de,Ge,Ae.width,Ae.height,0,ve,je,Ae.data);A.generateMipmaps=!1}else V?(xe&&t.texStorage2D(r.TEXTURE_2D,ye,Ge,he.width,he.height),pe&&xt(A,he,ve,je)):t.texImage2D(r.TEXTURE_2D,0,Ge,he.width,he.height,0,ve,je,he.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){V&&xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,Ge,Ke[0].width,Ke[0].height,he.depth);for(let de=0,ue=Ke.length;de<ue;de++)if(Ae=Ke[de],A.format!==Mn)if(ve!==null)if(V){if(pe)if(A.layerUpdates.size>0){const we=Ku(Ae.width,Ae.height,A.format,A.type);for(const Xe of A.layerUpdates){const At=Ae.data.subarray(Xe*we/Ae.data.BYTES_PER_ELEMENT,(Xe+1)*we/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,Xe,Ae.width,Ae.height,1,ve,At)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Ae.width,Ae.height,he.depth,ve,Ae.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,de,Ge,Ae.width,Ae.height,he.depth,0,Ae.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?pe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Ae.width,Ae.height,he.depth,ve,je,Ae.data):t.texImage3D(r.TEXTURE_2D_ARRAY,de,Ge,Ae.width,Ae.height,he.depth,0,ve,je,Ae.data)}else{V&&xe&&t.texStorage2D(r.TEXTURE_2D,ye,Ge,Ke[0].width,Ke[0].height);for(let de=0,ue=Ke.length;de<ue;de++)Ae=Ke[de],A.format!==Mn?ve!==null?V?pe&&t.compressedTexSubImage2D(r.TEXTURE_2D,de,0,0,Ae.width,Ae.height,ve,Ae.data):t.compressedTexImage2D(r.TEXTURE_2D,de,Ge,Ae.width,Ae.height,0,Ae.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?pe&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Ae.width,Ae.height,ve,je,Ae.data):t.texImage2D(r.TEXTURE_2D,de,Ge,Ae.width,Ae.height,0,ve,je,Ae.data)}else if(A.isDataArrayTexture)if(V){if(xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,Ge,he.width,he.height,he.depth),pe)if(A.layerUpdates.size>0){const de=Ku(he.width,he.height,A.format,A.type);for(const ue of A.layerUpdates){const we=he.data.subarray(ue*de/he.data.BYTES_PER_ELEMENT,(ue+1)*de/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ue,he.width,he.height,1,ve,je,we)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ve,je,he.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ge,he.width,he.height,he.depth,0,ve,je,he.data);else if(A.isData3DTexture)V?(xe&&t.texStorage3D(r.TEXTURE_3D,ye,Ge,he.width,he.height,he.depth),pe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ve,je,he.data)):t.texImage3D(r.TEXTURE_3D,0,Ge,he.width,he.height,he.depth,0,ve,je,he.data);else if(A.isFramebufferTexture){if(xe)if(V)t.texStorage2D(r.TEXTURE_2D,ye,Ge,he.width,he.height);else{let de=he.width,ue=he.height;for(let we=0;we<ye;we++)t.texImage2D(r.TEXTURE_2D,we,Ge,de,ue,0,ve,je,null),de>>=1,ue>>=1}}else if(Ke.length>0){if(V&&xe){const de=qe(Ke[0]);t.texStorage2D(r.TEXTURE_2D,ye,Ge,de.width,de.height)}for(let de=0,ue=Ke.length;de<ue;de++)Ae=Ke[de],V?pe&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,ve,je,Ae):t.texImage2D(r.TEXTURE_2D,de,Ge,ve,je,Ae);A.generateMipmaps=!1}else if(V){if(xe){const de=qe(he);t.texStorage2D(r.TEXTURE_2D,ye,Ge,de.width,de.height)}pe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,je,he)}else t.texImage2D(r.TEXTURE_2D,0,Ge,ve,je,he);b(A)&&_(se),Fe.__version=ne.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function oe(U,A,Z){if(A.image.length!==6)return;const se=ht(U,A),le=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+Z);const ne=n.get(le);if(le.version!==ne.__version||se===!0){t.activeTexture(r.TEXTURE0+Z);const Fe=pt.getPrimaries(pt.workingColorSpace),Se=A.colorSpace===Mi?null:pt.getPrimaries(A.colorSpace),Be=A.colorSpace===Mi||Fe===Se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const Ne=A.isCompressedTexture||A.image[0].isCompressedTexture,he=A.image[0]&&A.image[0].isDataTexture,ve=[];for(let ue=0;ue<6;ue++)!Ne&&!he?ve[ue]=T(A.image[ue],!0,i.maxCubemapSize):ve[ue]=he?A.image[ue].image:A.image[ue],ve[ue]=ke(A,ve[ue]);const je=ve[0],Ge=s.convert(A.format,A.colorSpace),Ae=s.convert(A.type),Ke=P(A.internalFormat,Ge,Ae,A.colorSpace),V=A.isVideoTexture!==!0,xe=ne.__version===void 0||se===!0,pe=le.dataReady;let ye=B(A,je);it(r.TEXTURE_CUBE_MAP,A);let de;if(Ne){V&&xe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ye,Ke,je.width,je.height);for(let ue=0;ue<6;ue++){de=ve[ue].mipmaps;for(let we=0;we<de.length;we++){const Xe=de[we];A.format!==Mn?Ge!==null?V?pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,0,0,Xe.width,Xe.height,Ge,Xe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,Ke,Xe.width,Xe.height,0,Xe.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,0,0,Xe.width,Xe.height,Ge,Ae,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,Ke,Xe.width,Xe.height,0,Ge,Ae,Xe.data)}}}else{if(de=A.mipmaps,V&&xe){de.length>0&&ye++;const ue=qe(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ye,Ke,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(he){V?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ve[ue].width,ve[ue].height,Ge,Ae,ve[ue].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ke,ve[ue].width,ve[ue].height,0,Ge,Ae,ve[ue].data);for(let we=0;we<de.length;we++){const At=de[we].image[ue].image;V?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,0,0,At.width,At.height,Ge,Ae,At.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,Ke,At.width,At.height,0,Ge,Ae,At.data)}}else{V?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ge,Ae,ve[ue]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ke,Ge,Ae,ve[ue]);for(let we=0;we<de.length;we++){const Xe=de[we];V?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,0,0,Ge,Ae,Xe.image[ue]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,Ke,Ge,Ae,Xe.image[ue])}}}b(A)&&_(r.TEXTURE_CUBE_MAP),ne.__version=le.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Me(U,A,Z,se,le,ne){const Fe=s.convert(Z.format,Z.colorSpace),Se=s.convert(Z.type),Be=P(Z.internalFormat,Fe,Se,Z.colorSpace),Ne=n.get(A),he=n.get(Z);if(he.__renderTarget=A,!Ne.__hasExternalTextures){const ve=Math.max(1,A.width>>ne),je=Math.max(1,A.height>>ne);le===r.TEXTURE_3D||le===r.TEXTURE_2D_ARRAY?t.texImage3D(le,ne,Be,ve,je,A.depth,0,Fe,Se,null):t.texImage2D(le,ne,Be,ve,je,0,Fe,Se,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),Le(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,le,he.__webglTexture,0,Et(A)):(le===r.TEXTURE_2D||le>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,le,he.__webglTexture,ne),t.bindFramebuffer(r.FRAMEBUFFER,null)}function We(U,A,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,U),A.depthBuffer){const se=A.depthTexture,le=se&&se.isDepthTexture?se.type:null,ne=L(A.stencilBuffer,le),Fe=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=Et(A);Le(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,ne,A.width,A.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,ne,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,ne,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Fe,r.RENDERBUFFER,U)}else{const se=A.textures;for(let le=0;le<se.length;le++){const ne=se[le],Fe=s.convert(ne.format,ne.colorSpace),Se=s.convert(ne.type),Be=P(ne.internalFormat,Fe,Se,ne.colorSpace),Ne=Et(A);Z&&Le(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,Be,A.width,A.height):Le(A)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ne,Be,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Be,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function De(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(A.depthTexture);se.__renderTarget=A,(!se.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ie(A.depthTexture,0);const le=se.__webglTexture,ne=Et(A);if(A.depthTexture.format===ms)Le(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,le,0);else if(A.depthTexture.format===gs)Le(A)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Qe(U){const A=n.get(U),Z=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const se=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),se){const le=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,se.removeEventListener("dispose",le)};se.addEventListener("dispose",le),A.__depthDisposeCallback=le}A.__boundDepthTexture=se}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const se=U.texture.mipmaps;se&&se.length>0?De(A.__webglFramebuffer[0],U):De(A.__webglFramebuffer,U)}else if(Z){A.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[se]),A.__webglDepthbuffer[se]===void 0)A.__webglDepthbuffer[se]=r.createRenderbuffer(),We(A.__webglDepthbuffer[se],U,!1);else{const le=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=A.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,ne)}}else{const se=U.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),We(A.__webglDepthbuffer,U,!1);else{const le=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,ne)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(U,A,Z){const se=n.get(U);A!==void 0&&Me(se.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&Qe(U)}function et(U){const A=U.texture,Z=n.get(U),se=n.get(A);U.addEventListener("dispose",I);const le=U.textures,ne=U.isWebGLCubeRenderTarget===!0,Fe=le.length>1;if(Fe||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=A.version,o.memory.textures++),ne){Z.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[Se]=[];for(let Be=0;Be<A.mipmaps.length;Be++)Z.__webglFramebuffer[Se][Be]=r.createFramebuffer()}else Z.__webglFramebuffer[Se]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Se=0;Se<A.mipmaps.length;Se++)Z.__webglFramebuffer[Se]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Fe)for(let Se=0,Be=le.length;Se<Be;Se++){const Ne=n.get(le[Se]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=r.createTexture(),o.memory.textures++)}if(U.samples>0&&Le(U)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Se=0;Se<le.length;Se++){const Be=le[Se];Z.__webglColorRenderbuffer[Se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Se]);const Ne=s.convert(Be.format,Be.colorSpace),he=s.convert(Be.type),ve=P(Be.internalFormat,Ne,he,Be.colorSpace,U.isXRRenderTarget===!0),je=Et(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,je,ve,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Se])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),We(Z.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ne){t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),it(r.TEXTURE_CUBE_MAP,A);for(let Se=0;Se<6;Se++)if(A.mipmaps&&A.mipmaps.length>0)for(let Be=0;Be<A.mipmaps.length;Be++)Me(Z.__webglFramebuffer[Se][Be],U,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be);else Me(Z.__webglFramebuffer[Se],U,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);b(A)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let Se=0,Be=le.length;Se<Be;Se++){const Ne=le[Se],he=n.get(Ne);let ve=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ve=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ve,he.__webglTexture),it(ve,Ne),Me(Z.__webglFramebuffer,U,Ne,r.COLOR_ATTACHMENT0+Se,ve,0),b(Ne)&&_(ve)}t.unbindTexture()}else{let Se=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Se=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Se,se.__webglTexture),it(Se,A),A.mipmaps&&A.mipmaps.length>0)for(let Be=0;Be<A.mipmaps.length;Be++)Me(Z.__webglFramebuffer[Be],U,A,r.COLOR_ATTACHMENT0,Se,Be);else Me(Z.__webglFramebuffer,U,A,r.COLOR_ATTACHMENT0,Se,0);b(A)&&_(Se),t.unbindTexture()}U.depthBuffer&&Qe(U)}function dt(U){const A=U.textures;for(let Z=0,se=A.length;Z<se;Z++){const le=A[Z];if(b(le)){const ne=D(U),Fe=n.get(le).__webglTexture;t.bindTexture(ne,Fe),_(ne),t.unbindTexture()}}}const k=[],st=[];function at(U){if(U.samples>0){if(Le(U)===!1){const A=U.textures,Z=U.width,se=U.height;let le=r.COLOR_BUFFER_BIT;const ne=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Fe=n.get(U),Se=A.length>1;if(Se)for(let Ne=0;Ne<A.length;Ne++)t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const Be=U.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ne=0;Ne<A.length;Ne++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(le|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(le|=r.STENCIL_BUFFER_BIT)),Se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ne]);const he=n.get(A[Ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,he,0)}r.blitFramebuffer(0,0,Z,se,0,0,Z,se,le,r.NEAREST),u===!0&&(k.length=0,st.length=0,k.push(r.COLOR_ATTACHMENT0+Ne),U.depthBuffer&&U.resolveDepthBuffer===!1&&(k.push(ne),st.push(ne),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,st)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Se)for(let Ne=0;Ne<A.length;Ne++){t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ne]);const he=n.get(A[Ne]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,he,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&u){const A=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function Et(U){return Math.min(i.maxSamples,U.samples)}function Le(U){const A=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ct(U){const A=o.render.frame;p.get(U)!==A&&(p.set(U,A),U.update())}function ke(U,A){const Z=U.colorSpace,se=U.format,le=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Z!==ln&&Z!==Mi&&(pt.getTransfer(Z)===Rt?(se!==Mn||le!==Gn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",Z)),A}function qe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=ie,this.setTexture2DArray=ae,this.setTexture3D=fe,this.setTextureCube=re,this.rebindTextures=kt,this.setupRenderTarget=et,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Le}function Av(r,e){function t(n,i=Mi){let s;const o=pt.getTransfer(i);if(n===Gn)return r.UNSIGNED_BYTE;if(n===el)return r.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===lh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===ah)return r.BYTE;if(n===oh)return r.SHORT;if(n===ds)return r.UNSIGNED_SHORT;if(n===Qc)return r.INT;if(n===Gi)return r.UNSIGNED_INT;if(n===Pn)return r.FLOAT;if(n===Fr)return r.HALF_FLOAT;if(n===uh)return r.ALPHA;if(n===fh)return r.RGB;if(n===Mn)return r.RGBA;if(n===ms)return r.DEPTH_COMPONENT;if(n===gs)return r.DEPTH_STENCIL;if(n===nl)return r.RED;if(n===il)return r.RED_INTEGER;if(n===rl)return r.RG;if(n===sl)return r.RG_INTEGER;if(n===al)return r.RGBA_INTEGER;if(n===ca||n===la||n===ua||n===fa)if(o===Rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hc||n===dc||n===pc||n===mc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===hc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gc||n===xc||n===_c)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gc||n===xc)return o===Rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===_c)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vc||n===yc||n===bc||n===Mc||n===Sc||n===Tc||n===Ec||n===Ac||n===wc||n===Rc||n===Cc||n===Pc||n===Lc||n===Dc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===vc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ec)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ac)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dc)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ic||n===Nc||n===Uc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ic)return o===Rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fc||n===Oc||n===Bc||n===kc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Fc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Oc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const wv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Cv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new wh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fi({vertexShader:wv,fragmentShader:Rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new Ta(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pv extends Or{constructor(e,t){super();const n=this;let i=null,s=1,o=null,c="local-floor",u=1,f=null,p=null,m=null,g=null,v=null,S=null;const T=typeof XRWebGLBinding<"u",b=new Cv,_={},D=t.getContextAttributes();let P=null,L=null;const B=[],h=[],I=new ft;let z=null;const E=new an;E.viewport=new yt;const w=new an;w.viewport=new yt;const F=[E,w],H=new Om;let G=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let oe=B[ce];return oe===void 0&&(oe=new po,B[ce]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ce){let oe=B[ce];return oe===void 0&&(oe=new po,B[ce]=oe),oe.getGripSpace()},this.getHand=function(ce){let oe=B[ce];return oe===void 0&&(oe=new po,B[ce]=oe),oe.getHandSpace()};function ie(ce){const oe=h.indexOf(ce.inputSource);if(oe===-1)return;const Me=B[oe];Me!==void 0&&(Me.update(ce.inputSource,ce.frame,f||o),Me.dispatchEvent({type:ce.type,data:ce.inputSource}))}function ae(){i.removeEventListener("select",ie),i.removeEventListener("selectstart",ie),i.removeEventListener("selectend",ie),i.removeEventListener("squeeze",ie),i.removeEventListener("squeezestart",ie),i.removeEventListener("squeezeend",ie),i.removeEventListener("end",ae),i.removeEventListener("inputsourceschange",fe);for(let ce=0;ce<B.length;ce++){const oe=h[ce];oe!==null&&(h[ce]=null,B[ce].disconnect(oe))}G=null,$=null,b.reset();for(const ce in _)delete _[ce];e.setRenderTarget(P),v=null,g=null,m=null,i=null,L=null,xt.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){s=ce,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){c=ce,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function(ce){f=ce},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return m===null&&T&&(m=new XRWebGLBinding(i,t)),m},this.getFrame=function(){return S},this.getSession=function(){return i},this.setSession=async function(ce){if(i=ce,i!==null){if(P=e.getRenderTarget(),i.addEventListener("select",ie),i.addEventListener("selectstart",ie),i.addEventListener("selectend",ie),i.addEventListener("squeeze",ie),i.addEventListener("squeezestart",ie),i.addEventListener("squeezeend",ie),i.addEventListener("end",ae),i.addEventListener("inputsourceschange",fe),D.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,We=null,De=null;D.depth&&(De=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=D.stencil?gs:ms,We=D.stencil?ps:Gi);const Qe={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};m=this.getBinding(),g=m.createProjectionLayer(Qe),i.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new Wi(g.textureWidth,g.textureHeight,{format:Mn,type:Gn,depthTexture:new Ah(g.textureWidth,g.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),L=new Wi(v.framebufferWidth,v.framebufferHeight,{format:Mn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(u),f=null,o=await i.requestReferenceSpace(c),xt.setContext(i),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function fe(ce){for(let oe=0;oe<ce.removed.length;oe++){const Me=ce.removed[oe],We=h.indexOf(Me);We>=0&&(h[We]=null,B[We].disconnect(Me))}for(let oe=0;oe<ce.added.length;oe++){const Me=ce.added[oe];let We=h.indexOf(Me);if(We===-1){for(let Qe=0;Qe<B.length;Qe++)if(Qe>=h.length){h.push(Me),We=Qe;break}else if(h[Qe]===null){h[Qe]=Me,We=Qe;break}if(We===-1)break}const De=B[We];De&&De.connect(Me)}}const re=new j,me=new j;function _e(ce,oe,Me){re.setFromMatrixPosition(oe.matrixWorld),me.setFromMatrixPosition(Me.matrixWorld);const We=re.distanceTo(me),De=oe.projectionMatrix.elements,Qe=Me.projectionMatrix.elements,kt=De[14]/(De[10]-1),et=De[14]/(De[10]+1),dt=(De[9]+1)/De[5],k=(De[9]-1)/De[5],st=(De[8]-1)/De[0],at=(Qe[8]+1)/Qe[0],Et=kt*st,Le=kt*at,Ct=We/(-st+at),ke=Ct*-st;if(oe.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(ke),ce.translateZ(Ct),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),De[10]===-1)ce.projectionMatrix.copy(oe.projectionMatrix),ce.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const qe=kt+Ct,U=et+Ct,A=Et-ke,Z=Le+(We-ke),se=dt*et/U*qe,le=k*et/U*qe;ce.projectionMatrix.makePerspective(A,Z,se,le,qe,U),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function Ie(ce,oe){oe===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(oe.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(i===null)return;let oe=ce.near,Me=ce.far;b.texture!==null&&(b.depthNear>0&&(oe=b.depthNear),b.depthFar>0&&(Me=b.depthFar)),H.near=w.near=E.near=oe,H.far=w.far=E.far=Me,(G!==H.near||$!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),G=H.near,$=H.far),H.layers.mask=ce.layers.mask|6,E.layers.mask=H.layers.mask&3,w.layers.mask=H.layers.mask&5;const We=ce.parent,De=H.cameras;Ie(H,We);for(let Qe=0;Qe<De.length;Qe++)Ie(De[Qe],We);De.length===2?_e(H,E,w):H.projectionMatrix.copy(E.projectionMatrix),it(ce,H,We)};function it(ce,oe,Me){Me===null?ce.matrix.copy(oe.matrixWorld):(ce.matrix.copy(Me.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(oe.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(oe.projectionMatrix),ce.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Lr*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(g===null&&v===null))return u},this.setFoveation=function(ce){u=ce,g!==null&&(g.fixedFoveation=ce),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ce)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(H)},this.getCameraTexture=function(ce){return _[ce]};let ht=null;function bt(ce,oe){if(p=oe.getViewerPose(f||o),S=oe,p!==null){const Me=p.views;v!==null&&(e.setRenderTargetFramebuffer(L,v.framebuffer),e.setRenderTarget(L));let We=!1;Me.length!==H.cameras.length&&(H.cameras.length=0,We=!0);for(let et=0;et<Me.length;et++){const dt=Me[et];let k=null;if(v!==null)k=v.getViewport(dt);else{const at=m.getViewSubImage(g,dt);k=at.viewport,et===0&&(e.setRenderTargetTextures(L,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(L))}let st=F[et];st===void 0&&(st=new an,st.layers.enable(et),st.viewport=new yt,F[et]=st),st.matrix.fromArray(dt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(dt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(k.x,k.y,k.width,k.height),et===0&&(H.matrix.copy(st.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),We===!0&&H.cameras.push(st)}const De=i.enabledFeatures;if(De&&De.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&T){m=n.getBinding();const et=m.getDepthInformation(Me[0]);et&&et.isValid&&et.texture&&b.init(et,i.renderState)}if(De&&De.includes("camera-access")&&T){e.state.unbindTexture(),m=n.getBinding();for(let et=0;et<Me.length;et++){const dt=Me[et].camera;if(dt){let k=_[dt];k||(k=new wh,_[dt]=k);const st=m.getCameraImage(dt);k.sourceTexture=st}}}}for(let Me=0;Me<B.length;Me++){const We=h[Me],De=B[Me];We!==null&&De!==void 0&&De.update(We,oe,f||o)}ht&&ht(ce,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),S=null}const xt=new Lh;xt.setAnimationLoop(bt),this.setAnimationLoop=function(ce){ht=ce},this.dispose=function(){}}}const Fi=new Wn,Lv=new tt;function Dv(r,e){function t(b,_){b.matrixAutoUpdate===!0&&b.updateMatrix(),_.value.copy(b.matrix)}function n(b,_){_.color.getRGB(b.fogColor.value,yh(r)),_.isFog?(b.fogNear.value=_.near,b.fogFar.value=_.far):_.isFogExp2&&(b.fogDensity.value=_.density)}function i(b,_,D,P,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(b,_):_.isMeshToonMaterial?(s(b,_),m(b,_)):_.isMeshPhongMaterial?(s(b,_),p(b,_)):_.isMeshStandardMaterial?(s(b,_),g(b,_),_.isMeshPhysicalMaterial&&v(b,_,L)):_.isMeshMatcapMaterial?(s(b,_),S(b,_)):_.isMeshDepthMaterial?s(b,_):_.isMeshDistanceMaterial?(s(b,_),T(b,_)):_.isMeshNormalMaterial?s(b,_):_.isLineBasicMaterial?(o(b,_),_.isLineDashedMaterial&&c(b,_)):_.isPointsMaterial?u(b,_,D,P):_.isSpriteMaterial?f(b,_):_.isShadowMaterial?(b.color.value.copy(_.color),b.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(b,_){b.opacity.value=_.opacity,_.color&&b.diffuse.value.copy(_.color),_.emissive&&b.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(b.map.value=_.map,t(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,t(_.alphaMap,b.alphaMapTransform)),_.bumpMap&&(b.bumpMap.value=_.bumpMap,t(_.bumpMap,b.bumpMapTransform),b.bumpScale.value=_.bumpScale,_.side===mn&&(b.bumpScale.value*=-1)),_.normalMap&&(b.normalMap.value=_.normalMap,t(_.normalMap,b.normalMapTransform),b.normalScale.value.copy(_.normalScale),_.side===mn&&b.normalScale.value.negate()),_.displacementMap&&(b.displacementMap.value=_.displacementMap,t(_.displacementMap,b.displacementMapTransform),b.displacementScale.value=_.displacementScale,b.displacementBias.value=_.displacementBias),_.emissiveMap&&(b.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,b.emissiveMapTransform)),_.specularMap&&(b.specularMap.value=_.specularMap,t(_.specularMap,b.specularMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest);const D=e.get(_),P=D.envMap,L=D.envMapRotation;P&&(b.envMap.value=P,Fi.copy(L),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),b.envMapRotation.value.setFromMatrix4(Lv.makeRotationFromEuler(Fi)),b.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=_.reflectivity,b.ior.value=_.ior,b.refractionRatio.value=_.refractionRatio),_.lightMap&&(b.lightMap.value=_.lightMap,b.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,b.lightMapTransform)),_.aoMap&&(b.aoMap.value=_.aoMap,b.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,b.aoMapTransform))}function o(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,_.map&&(b.map.value=_.map,t(_.map,b.mapTransform))}function c(b,_){b.dashSize.value=_.dashSize,b.totalSize.value=_.dashSize+_.gapSize,b.scale.value=_.scale}function u(b,_,D,P){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.size.value=_.size*D,b.scale.value=P*.5,_.map&&(b.map.value=_.map,t(_.map,b.uvTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,t(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function f(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.rotation.value=_.rotation,_.map&&(b.map.value=_.map,t(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,t(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function p(b,_){b.specular.value.copy(_.specular),b.shininess.value=Math.max(_.shininess,1e-4)}function m(b,_){_.gradientMap&&(b.gradientMap.value=_.gradientMap)}function g(b,_){b.metalness.value=_.metalness,_.metalnessMap&&(b.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,b.metalnessMapTransform)),b.roughness.value=_.roughness,_.roughnessMap&&(b.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,b.roughnessMapTransform)),_.envMap&&(b.envMapIntensity.value=_.envMapIntensity)}function v(b,_,D){b.ior.value=_.ior,_.sheen>0&&(b.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),b.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(b.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,b.sheenColorMapTransform)),_.sheenRoughnessMap&&(b.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,b.sheenRoughnessMapTransform))),_.clearcoat>0&&(b.clearcoat.value=_.clearcoat,b.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(b.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,b.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(b.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===mn&&b.clearcoatNormalScale.value.negate())),_.dispersion>0&&(b.dispersion.value=_.dispersion),_.iridescence>0&&(b.iridescence.value=_.iridescence,b.iridescenceIOR.value=_.iridescenceIOR,b.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(b.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,b.iridescenceMapTransform)),_.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),_.transmission>0&&(b.transmission.value=_.transmission,b.transmissionSamplerMap.value=D.texture,b.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(b.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,b.transmissionMapTransform)),b.thickness.value=_.thickness,_.thicknessMap&&(b.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=_.attenuationDistance,b.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(b.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(b.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=_.specularIntensity,b.specularColor.value.copy(_.specularColor),_.specularColorMap&&(b.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,b.specularColorMapTransform)),_.specularIntensityMap&&(b.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,b.specularIntensityMapTransform))}function S(b,_){_.matcap&&(b.matcap.value=_.matcap)}function T(b,_){const D=e.get(_).light;b.referencePosition.value.setFromMatrixPosition(D.matrixWorld),b.nearDistance.value=D.shadow.camera.near,b.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Iv(r,e,t,n){let i={},s={},o=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(D,P){const L=P.program;n.uniformBlockBinding(D,L)}function f(D,P){let L=i[D.id];L===void 0&&(S(D),L=p(D),i[D.id]=L,D.addEventListener("dispose",b));const B=P.program;n.updateUBOMapping(D,B);const h=e.render.frame;s[D.id]!==h&&(g(D),s[D.id]=h)}function p(D){const P=m();D.__bindingPointIndex=P;const L=r.createBuffer(),B=D.__size,h=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,B,h),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,L),L}function m(){for(let D=0;D<c;D++)if(o.indexOf(D)===-1)return o.push(D),D;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const P=i[D.id],L=D.uniforms,B=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let h=0,I=L.length;h<I;h++){const z=Array.isArray(L[h])?L[h]:[L[h]];for(let E=0,w=z.length;E<w;E++){const F=z[E];if(v(F,h,E,B)===!0){const H=F.__offset,G=Array.isArray(F.value)?F.value:[F.value];let $=0;for(let ie=0;ie<G.length;ie++){const ae=G[ie],fe=T(ae);typeof ae=="number"||typeof ae=="boolean"?(F.__data[0]=ae,r.bufferSubData(r.UNIFORM_BUFFER,H+$,F.__data)):ae.isMatrix3?(F.__data[0]=ae.elements[0],F.__data[1]=ae.elements[1],F.__data[2]=ae.elements[2],F.__data[3]=0,F.__data[4]=ae.elements[3],F.__data[5]=ae.elements[4],F.__data[6]=ae.elements[5],F.__data[7]=0,F.__data[8]=ae.elements[6],F.__data[9]=ae.elements[7],F.__data[10]=ae.elements[8],F.__data[11]=0):(ae.toArray(F.__data,$),$+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function v(D,P,L,B){const h=D.value,I=P+"_"+L;if(B[I]===void 0)return typeof h=="number"||typeof h=="boolean"?B[I]=h:B[I]=h.clone(),!0;{const z=B[I];if(typeof h=="number"||typeof h=="boolean"){if(z!==h)return B[I]=h,!0}else if(z.equals(h)===!1)return z.copy(h),!0}return!1}function S(D){const P=D.uniforms;let L=0;const B=16;for(let I=0,z=P.length;I<z;I++){const E=Array.isArray(P[I])?P[I]:[P[I]];for(let w=0,F=E.length;w<F;w++){const H=E[w],G=Array.isArray(H.value)?H.value:[H.value];for(let $=0,ie=G.length;$<ie;$++){const ae=G[$],fe=T(ae),re=L%B,me=re%fe.boundary,_e=re+me;L+=me,_e!==0&&B-_e<fe.storage&&(L+=B-_e),H.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=L,L+=fe.storage}}}const h=L%B;return h>0&&(L+=B-h),D.__size=L,D.__cache={},this}function T(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",D),P}function b(D){const P=D.target;P.removeEventListener("dispose",b);const L=o.indexOf(P.__bindingPointIndex);o.splice(L,1),r.deleteBuffer(i[P.id]),delete i[P.id],delete s[P.id]}function _(){for(const D in i)r.deleteBuffer(i[D]);o=[],i={},s={}}return{bind:u,update:f,dispose:_}}const Nv=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ni=null;function Uv(){return ni===null&&(ni=new fl(Nv,32,32,rl,Fr),ni.minFilter=on,ni.magFilter=on,ni.wrapS=kn,ni.wrapT=kn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class Fv{constructor(e={}){const{canvas:t=pp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=o;const S=new Set([al,sl,il]),T=new Set([Gn,Gi,ds,ps,el,tl]),b=new Uint32Array(4),_=new Int32Array(4);let D=null,P=null;const L=[],B=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const h=this;let I=!1;this._outputColorSpace=Yt;let z=0,E=0,w=null,F=-1,H=null;const G=new yt,$=new yt;let ie=null;const ae=new Je(0);let fe=0,re=t.width,me=t.height,_e=1,Ie=null,it=null;const ht=new yt(0,0,re,me),bt=new yt(0,0,re,me);let xt=!1;const ce=new dl;let oe=!1,Me=!1;const We=new tt,De=new j,Qe=new yt,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function dt(){return w===null?_e:1}let k=n;function st(C,X){return t.getContext(C,X)}try{const C={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jc}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",we,!1),k===null){const X="webgl2";if(k=st(X,C),k===null)throw st(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw C("WebGLRenderer: "+C.message),C}let at,Et,Le,Ct,ke,qe,U,A,Z,se,le,ne,Fe,Se,Be,Ne,he,ve,je,Ge,Ae,Ke,V,xe;function pe(){at=new Wx(k),at.init(),Ke=new Av(k,at),Et=new Ux(k,at,e,Ke),Le=new Tv(k,at),Et.reversedDepthBuffer&&g&&Le.buffers.depth.setReversed(!0),Ct=new jx(k),ke=new fv,qe=new Ev(k,at,Le,ke,Et,Ke,Ct),U=new Ox(h),A=new Gx(h),Z=new $m(k),V=new Ix(k,Z),se=new Xx(k,Z,Ct,V),le=new Kx(k,se,Z,Ct),je=new Yx(k,Et,qe),Ne=new Fx(ke),ne=new uv(h,U,A,at,Et,V,Ne),Fe=new Dv(h,ke),Se=new dv,Be=new vv(at),ve=new Dx(h,U,A,Le,le,v,u),he=new Mv(h,le,Et),xe=new Iv(k,Ct,Et,Le),Ge=new Nx(k,at,Ct),Ae=new qx(k,at,Ct),Ct.programs=ne.programs,h.capabilities=Et,h.extensions=at,h.properties=ke,h.renderLists=Se,h.shadowMap=he,h.state=Le,h.info=Ct}pe();const ye=new Pv(h,k);this.xr=ye,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=at.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=at.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(C){C!==void 0&&(_e=C,this.setSize(re,me,!1))},this.getSize=function(C){return C.set(re,me)},this.setSize=function(C,X,J=!0){if(ye.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}re=C,me=X,t.width=Math.floor(C*_e),t.height=Math.floor(X*_e),J===!0&&(t.style.width=C+"px",t.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(re*_e,me*_e).floor()},this.setDrawingBufferSize=function(C,X,J){re=C,me=X,_e=J,t.width=Math.floor(C*J),t.height=Math.floor(X*J),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(ht)},this.setViewport=function(C,X,J,Q){C.isVector4?ht.set(C.x,C.y,C.z,C.w):ht.set(C,X,J,Q),Le.viewport(G.copy(ht).multiplyScalar(_e).round())},this.getScissor=function(C){return C.copy(bt)},this.setScissor=function(C,X,J,Q){C.isVector4?bt.set(C.x,C.y,C.z,C.w):bt.set(C,X,J,Q),Le.scissor($.copy(bt).multiplyScalar(_e).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(C){Le.setScissorTest(xt=C)},this.setOpaqueSort=function(C){Ie=C},this.setTransparentSort=function(C){it=C},this.getClearColor=function(C){return C.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,J=!0){let Q=0;if(C){let Y=!1;if(w!==null){const ge=w.texture.format;Y=S.has(ge)}if(Y){const ge=w.texture.type,Te=T.has(ge),Pe=ve.getClearColor(),Ce=ve.getClearAlpha(),Oe=Pe.r,He=Pe.g,Ue=Pe.b;Te?(b[0]=Oe,b[1]=He,b[2]=Ue,b[3]=Ce,k.clearBufferuiv(k.COLOR,0,b)):(_[0]=Oe,_[1]=He,_[2]=Ue,_[3]=Ce,k.clearBufferiv(k.COLOR,0,_))}else Q|=k.COLOR_BUFFER_BIT}X&&(Q|=k.DEPTH_BUFFER_BIT),J&&(Q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",we,!1),ve.dispose(),Se.dispose(),Be.dispose(),ke.dispose(),U.dispose(),A.dispose(),le.dispose(),V.dispose(),xe.dispose(),ne.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Ki),ye.removeEventListener("sessionend",Zi),jn.stop()};function de(C){C.preventDefault(),ga("WebGLRenderer: Context Lost."),I=!0}function ue(){ga("WebGLRenderer: Context Restored."),I=!1;const C=Ct.autoReset,X=he.enabled,J=he.autoUpdate,Q=he.needsUpdate,Y=he.type;pe(),Ct.autoReset=C,he.enabled=X,he.autoUpdate=J,he.needsUpdate=Q,he.type=Y}function we(C){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Xe(C){const X=C.target;X.removeEventListener("dispose",Xe),At(X)}function At(C){mt(C),ke.remove(C)}function mt(C){const X=ke.get(C).programs;X!==void 0&&(X.forEach(function(J){ne.releaseProgram(J)}),C.isShaderMaterial&&ne.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,J,Q,Y,ge){X===null&&(X=kt);const Te=Y.isMesh&&Y.matrixWorld.determinant()<0,Pe=Ji(C,X,J,Q,Y);Le.setMaterial(Q,Te);let Ce=J.index,Oe=1;if(Q.wireframe===!0){if(Ce=se.getWireframeAttribute(J),Ce===void 0)return;Oe=2}const He=J.drawRange,Ue=J.attributes.position;let be=He.start*Oe,$e=(He.start+He.count)*Oe;ge!==null&&(be=Math.max(be,ge.start*Oe),$e=Math.min($e,(ge.start+ge.count)*Oe)),Ce!==null?(be=Math.max(be,0),$e=Math.min($e,Ce.count)):Ue!=null&&(be=Math.max(be,0),$e=Math.min($e,Ue.count));const It=$e-be;if(It<0||It===1/0)return;V.setup(Y,Q,Pe,J,Ce);let Nt,Mt=Ge;if(Ce!==null&&(Nt=Z.get(Ce),Mt=Ae,Mt.setIndex(Nt)),Y.isMesh)Q.wireframe===!0?(Le.setLineWidth(Q.wireframeLinewidth*dt()),Mt.setMode(k.LINES)):Mt.setMode(k.TRIANGLES);else if(Y.isLine){let ze=Q.linewidth;ze===void 0&&(ze=1),Le.setLineWidth(ze*dt()),Y.isLineSegments?Mt.setMode(k.LINES):Y.isLineLoop?Mt.setMode(k.LINE_LOOP):Mt.setMode(k.LINE_STRIP)}else Y.isPoints?Mt.setMode(k.POINTS):Y.isSprite&&Mt.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ys("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))Mt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const ze=Y._multiDrawStarts,Pt=Y._multiDrawCounts,ot=Y._multiDrawCount,Ft=Ce?Z.get(Ce).bytesPerElement:1,Sn=ke.get(Q).currentProgram.getUniforms();for(let nn=0;nn<ot;nn++)Sn.setValue(k,"_gl_DrawID",nn),Mt.render(ze[nn]/Ft,Pt[nn])}else if(Y.isInstancedMesh)Mt.renderInstances(be,It,Y.count);else if(J.isInstancedBufferGeometry){const ze=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Pt=Math.min(J.instanceCount,ze);Mt.renderInstances(be,It,Pt)}else Mt.render(be,It)};function un(C,X,J){C.transparent===!0&&C.side===Bn&&C.forceSinglePass===!1?(C.side=mn,C.needsUpdate=!0,Ri(C,X,J),C.side=ui,C.needsUpdate=!0,Ri(C,X,J),C.side=Bn):Ri(C,X,J)}this.compile=function(C,X,J=null){J===null&&(J=C),P=Be.get(J),P.init(X),B.push(P),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(P.pushLight(Y),Y.castShadow&&P.pushShadow(Y))}),C!==J&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(P.pushLight(Y),Y.castShadow&&P.pushShadow(Y))}),P.setupLights();const Q=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ge=Y.material;if(ge)if(Array.isArray(ge))for(let Te=0;Te<ge.length;Te++){const Pe=ge[Te];un(Pe,J,Y),Q.add(Pe)}else un(ge,J,Y),Q.add(ge)}),P=B.pop(),Q},this.compileAsync=function(C,X,J=null){const Q=this.compile(C,X,J);return new Promise(Y=>{function ge(){if(Q.forEach(function(Te){ke.get(Te).currentProgram.isReady()&&Q.delete(Te)}),Q.size===0){Y(C);return}setTimeout(ge,10)}at.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let gn=null;function Yi(C){gn&&gn(C)}function Ki(){jn.stop()}function Zi(){jn.start()}const jn=new Lh;jn.setAnimationLoop(Yi),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(C){gn=C,ye.setAnimationLoop(C),C===null?jn.stop():jn.start()},ye.addEventListener("sessionstart",Ki),ye.addEventListener("sessionend",Zi),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(X),X=ye.getCamera()),C.isScene===!0&&C.onBeforeRender(h,C,X,w),P=Be.get(C,B.length),P.init(X),B.push(P),We.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ce.setFromProjectionMatrix(We,zn,X.reversedDepth),Me=this.localClippingEnabled,oe=Ne.init(this.clippingPlanes,Me),D=Se.get(C,L.length),D.init(),L.push(D),ye.enabled===!0&&ye.isPresenting===!0){const ge=h.xr.getDepthSensingMesh();ge!==null&&Ai(ge,X,-1/0,h.sortObjects)}Ai(C,X,0,h.sortObjects),D.finish(),h.sortObjects===!0&&D.sort(Ie,it),et=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,et&&ve.addToRenderList(D,C),this.info.render.frame++,oe===!0&&Ne.beginShadows();const J=P.state.shadowsArray;he.render(J,C,X),oe===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=D.opaque,Y=D.transmissive;if(P.setupLights(),X.isArrayCamera){const ge=X.cameras;if(Y.length>0)for(let Te=0,Pe=ge.length;Te<Pe;Te++){const Ce=ge[Te];Yn(Q,Y,C,Ce)}et&&ve.render(C);for(let Te=0,Pe=ge.length;Te<Pe;Te++){const Ce=ge[Te];Gr(D,C,Ce,Ce.viewport)}}else Y.length>0&&Yn(Q,Y,C,X),et&&ve.render(C),Gr(D,C,X);w!==null&&E===0&&(qe.updateMultisampleRenderTarget(w),qe.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(h,C,X),V.resetDefaultState(),F=-1,H=null,B.pop(),B.length>0?(P=B[B.length-1],oe===!0&&Ne.setGlobalState(h.clippingPlanes,P.state.camera)):P=null,L.pop(),L.length>0?D=L[L.length-1]:D=null};function Ai(C,X,J,Q){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ce.intersectsSprite(C)){Q&&Qe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(We);const Te=le.update(C),Pe=C.material;Pe.visible&&D.push(C,Te,Pe,J,Qe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ce.intersectsObject(C))){const Te=le.update(C),Pe=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Qe.copy(C.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Qe.copy(Te.boundingSphere.center)),Qe.applyMatrix4(C.matrixWorld).applyMatrix4(We)),Array.isArray(Pe)){const Ce=Te.groups;for(let Oe=0,He=Ce.length;Oe<He;Oe++){const Ue=Ce[Oe],be=Pe[Ue.materialIndex];be&&be.visible&&D.push(C,Te,be,J,Qe.z,Ue)}}else Pe.visible&&D.push(C,Te,Pe,J,Qe.z,null)}}const ge=C.children;for(let Te=0,Pe=ge.length;Te<Pe;Te++)Ai(ge[Te],X,J,Q)}function Gr(C,X,J,Q){const{opaque:Y,transmissive:ge,transparent:Te}=C;P.setupLightsView(J),oe===!0&&Ne.setGlobalState(h.clippingPlanes,J),Q&&Le.viewport(G.copy(Q)),Y.length>0&&wi(Y,X,J),ge.length>0&&wi(ge,X,J),Te.length>0&&wi(Te,X,J),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Yn(C,X,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;P.state.transmissionRenderTarget[Q.id]===void 0&&(P.state.transmissionRenderTarget[Q.id]=new Wi(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Fr:Gn,minFilter:si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const ge=P.state.transmissionRenderTarget[Q.id],Te=Q.viewport||G;ge.setSize(Te.z*h.transmissionResolutionScale,Te.w*h.transmissionResolutionScale);const Pe=h.getRenderTarget(),Ce=h.getActiveCubeFace(),Oe=h.getActiveMipmapLevel();h.setRenderTarget(ge),h.getClearColor(ae),fe=h.getClearAlpha(),fe<1&&h.setClearColor(16777215,.5),h.clear(),et&&ve.render(J);const He=h.toneMapping;h.toneMapping=Ti;const Ue=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),P.setupLightsView(Q),oe===!0&&Ne.setGlobalState(h.clippingPlanes,Q),wi(C,J,Q),qe.updateMultisampleRenderTarget(ge),qe.updateRenderTargetMipmap(ge),at.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let $e=0,It=X.length;$e<It;$e++){const Nt=X[$e],{object:Mt,geometry:ze,material:Pt,group:ot}=Nt;if(Pt.side===Bn&&Mt.layers.test(Q.layers)){const Ft=Pt.side;Pt.side=mn,Pt.needsUpdate=!0,Wr(Mt,J,Q,ze,Pt,ot),Pt.side=Ft,Pt.needsUpdate=!0,be=!0}}be===!0&&(qe.updateMultisampleRenderTarget(ge),qe.updateRenderTargetMipmap(ge))}h.setRenderTarget(Pe,Ce,Oe),h.setClearColor(ae,fe),Ue!==void 0&&(Q.viewport=Ue),h.toneMapping=He}function wi(C,X,J){const Q=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,ge=C.length;Y<ge;Y++){const Te=C[Y],{object:Pe,geometry:Ce,group:Oe}=Te;let He=Te.material;He.allowOverride===!0&&Q!==null&&(He=Q),Pe.layers.test(J.layers)&&Wr(Pe,X,J,Ce,He,Oe)}}function Wr(C,X,J,Q,Y,ge){C.onBeforeRender(h,X,J,Q,Y,ge),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(h,X,J,Q,C,ge),Y.transparent===!0&&Y.side===Bn&&Y.forceSinglePass===!1?(Y.side=mn,Y.needsUpdate=!0,h.renderBufferDirect(J,X,Q,Y,C,ge),Y.side=ui,Y.needsUpdate=!0,h.renderBufferDirect(J,X,Q,Y,C,ge),Y.side=Bn):h.renderBufferDirect(J,X,Q,Y,C,ge),C.onAfterRender(h,X,J,Q,Y,ge)}function Ri(C,X,J){X.isScene!==!0&&(X=kt);const Q=ke.get(C),Y=P.state.lights,ge=P.state.shadowsArray,Te=Y.state.version,Pe=ne.getParameters(C,Y.state,ge,X,J),Ce=ne.getProgramCacheKey(Pe);let Oe=Q.programs;Q.environment=C.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(C.isMeshStandardMaterial?A:U).get(C.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Oe===void 0&&(C.addEventListener("dispose",Xe),Oe=new Map,Q.programs=Oe);let He=Oe.get(Ce);if(He!==void 0){if(Q.currentProgram===He&&Q.lightsStateVersion===Te)return $i(C,Pe),He}else Pe.uniforms=ne.getUniforms(C),C.onBeforeCompile(Pe,h),He=ne.acquireProgram(Pe,Ce),Oe.set(Ce,He),Q.uniforms=Pe.uniforms;const Ue=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ue.clippingPlanes=Ne.uniform),$i(C,Pe),Q.needsLights=Pa(C),Q.lightsStateVersion=Te,Q.needsLights&&(Ue.ambientLightColor.value=Y.state.ambient,Ue.lightProbe.value=Y.state.probe,Ue.directionalLights.value=Y.state.directional,Ue.directionalLightShadows.value=Y.state.directionalShadow,Ue.spotLights.value=Y.state.spot,Ue.spotLightShadows.value=Y.state.spotShadow,Ue.rectAreaLights.value=Y.state.rectArea,Ue.ltc_1.value=Y.state.rectAreaLTC1,Ue.ltc_2.value=Y.state.rectAreaLTC2,Ue.pointLights.value=Y.state.point,Ue.pointLightShadows.value=Y.state.pointShadow,Ue.hemisphereLights.value=Y.state.hemi,Ue.directionalShadowMap.value=Y.state.directionalShadowMap,Ue.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ue.spotShadowMap.value=Y.state.spotShadowMap,Ue.spotLightMatrix.value=Y.state.spotLightMatrix,Ue.spotLightMap.value=Y.state.spotLightMap,Ue.pointShadowMap.value=Y.state.pointShadowMap,Ue.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=He,Q.uniformsList=null,He}function Xr(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=ha.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function $i(C,X){const J=ke.get(C);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function Ji(C,X,J,Q,Y){X.isScene!==!0&&(X=kt),qe.resetTextureUnits();const ge=X.fog,Te=Q.isMeshStandardMaterial?X.environment:null,Pe=w===null?h.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ln,Ce=(Q.isMeshStandardMaterial?A:U).get(Q.envMap||Te),Oe=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,He=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ue=!!J.morphAttributes.position,be=!!J.morphAttributes.normal,$e=!!J.morphAttributes.color;let It=Ti;Q.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(It=h.toneMapping);const Nt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Mt=Nt!==void 0?Nt.length:0,ze=ke.get(Q),Pt=P.state.lights;if(oe===!0&&(Me===!0||C!==H)){const zt=C===H&&Q.id===F;Ne.setState(Q,C,zt)}let ot=!1;Q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Pt.state.version||ze.outputColorSpace!==Pe||Y.isBatchedMesh&&ze.batching===!1||!Y.isBatchedMesh&&ze.batching===!0||Y.isBatchedMesh&&ze.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&ze.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&ze.instancing===!1||!Y.isInstancedMesh&&ze.instancing===!0||Y.isSkinnedMesh&&ze.skinning===!1||!Y.isSkinnedMesh&&ze.skinning===!0||Y.isInstancedMesh&&ze.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ze.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ze.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ze.instancingMorph===!1&&Y.morphTexture!==null||ze.envMap!==Ce||Q.fog===!0&&ze.fog!==ge||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ne.numPlanes||ze.numIntersection!==Ne.numIntersection)||ze.vertexAlphas!==Oe||ze.vertexTangents!==He||ze.morphTargets!==Ue||ze.morphNormals!==be||ze.morphColors!==$e||ze.toneMapping!==It||ze.morphTargetsCount!==Mt)&&(ot=!0):(ot=!0,ze.__version=Q.version);let Ft=ze.currentProgram;ot===!0&&(Ft=Ri(Q,X,Y));let Sn=!1,nn=!1,Ci=!1;const wt=Ft.getUniforms(),qt=ze.uniforms;if(Le.useProgram(Ft.program)&&(Sn=!0,nn=!0,Ci=!0),Q.id!==F&&(F=Q.id,nn=!0),Sn||H!==C){Le.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),wt.setValue(k,"projectionMatrix",C.projectionMatrix),wt.setValue(k,"viewMatrix",C.matrixWorldInverse);const jt=wt.map.cameraPosition;jt!==void 0&&jt.setValue(k,De.setFromMatrixPosition(C.matrixWorld)),Et.logarithmicDepthBuffer&&wt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&wt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),H!==C&&(H=C,nn=!0,Ci=!0)}if(Y.isSkinnedMesh){wt.setOptional(k,Y,"bindMatrix"),wt.setOptional(k,Y,"bindMatrixInverse");const zt=Y.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),wt.setValue(k,"boneTexture",zt.boneTexture,qe))}Y.isBatchedMesh&&(wt.setOptional(k,Y,"batchingTexture"),wt.setValue(k,"batchingTexture",Y._matricesTexture,qe),wt.setOptional(k,Y,"batchingIdTexture"),wt.setValue(k,"batchingIdTexture",Y._indirectTexture,qe),wt.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&wt.setValue(k,"batchingColorTexture",Y._colorsTexture,qe));const fn=J.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&je.update(Y,J,Ft),(nn||ze.receiveShadow!==Y.receiveShadow)&&(ze.receiveShadow=Y.receiveShadow,wt.setValue(k,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(qt.envMap.value=Ce,qt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(qt.envMapIntensity.value=X.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=Uv()),nn&&(wt.setValue(k,"toneMappingExposure",h.toneMappingExposure),ze.needsLights&&Ca(qt,Ci),ge&&Q.fog===!0&&Fe.refreshFogUniforms(qt,ge),Fe.refreshMaterialUniforms(qt,Q,_e,me,P.state.transmissionRenderTarget[C.id]),ha.upload(k,Xr(ze),qt,qe)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ha.upload(k,Xr(ze),qt,qe),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&wt.setValue(k,"center",Y.center),wt.setValue(k,"modelViewMatrix",Y.modelViewMatrix),wt.setValue(k,"normalMatrix",Y.normalMatrix),wt.setValue(k,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const zt=Q.uniformsGroups;for(let jt=0,qr=zt.length;jt<qr;jt++){const hn=zt[jt];xe.update(hn,Ft),xe.bind(hn,Ft)}}return Ft}function Ca(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Pa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,X,J){const Q=ke.get(C);Q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),ke.get(C.texture).__webglTexture=X,ke.get(C.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:J,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const J=ke.get(C);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0};const La=k.createFramebuffer();this.setRenderTarget=function(C,X=0,J=0){w=C,z=X,E=J;let Q=!0,Y=null,ge=!1,Te=!1;if(C){const Ce=ke.get(C);if(Ce.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(k.FRAMEBUFFER,null),Q=!1;else if(Ce.__webglFramebuffer===void 0)qe.setupRenderTarget(C);else if(Ce.__hasExternalTextures)qe.rebindTextures(C,ke.get(C.texture).__webglTexture,ke.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ue=C.depthTexture;if(Ce.__boundDepthTexture!==Ue){if(Ue!==null&&ke.has(Ue)&&(C.width!==Ue.image.width||C.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(C)}}const Oe=C.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Te=!0);const He=ke.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(He[X])?Y=He[X][J]:Y=He[X],ge=!0):C.samples>0&&qe.useMultisampledRTT(C)===!1?Y=ke.get(C).__webglMultisampledFramebuffer:Array.isArray(He)?Y=He[J]:Y=He,G.copy(C.viewport),$.copy(C.scissor),ie=C.scissorTest}else G.copy(ht).multiplyScalar(_e).floor(),$.copy(bt).multiplyScalar(_e).floor(),ie=xt;if(J!==0&&(Y=La),Le.bindFramebuffer(k.FRAMEBUFFER,Y)&&Q&&Le.drawBuffers(C,Y),Le.viewport(G),Le.scissor($),Le.setScissorTest(ie),ge){const Ce=ke.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ce.__webglTexture,J)}else if(Te){const Ce=X;for(let Oe=0;Oe<C.textures.length;Oe++){const He=ke.get(C.textures[Oe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Oe,He.__webglTexture,J,Ce)}}else if(C!==null&&J!==0){const Ce=ke.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ce.__webglTexture,J)}F=-1},this.readRenderTargetPixels=function(C,X,J,Q,Y,ge,Te,Pe=0){if(!(C&&C.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){Le.bindFramebuffer(k.FRAMEBUFFER,Ce);try{const Oe=C.textures[Pe],He=Oe.format,Ue=Oe.type;if(!Et.textureFormatReadable(He)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Ue)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-Q&&J>=0&&J<=C.height-Y&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pe),k.readPixels(X,J,Q,Y,Ke.convert(He),Ke.convert(Ue),ge))}finally{const Oe=w!==null?ke.get(w).__webglFramebuffer:null;Le.bindFramebuffer(k.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(C,X,J,Q,Y,ge,Te,Pe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce)if(X>=0&&X<=C.width-Q&&J>=0&&J<=C.height-Y){Le.bindFramebuffer(k.FRAMEBUFFER,Ce);const Oe=C.textures[Pe],He=Oe.format,Ue=Oe.type;if(!Et.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,be),k.bufferData(k.PIXEL_PACK_BUFFER,ge.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pe),k.readPixels(X,J,Q,Y,Ke.convert(He),Ke.convert(Ue),0);const $e=w!==null?ke.get(w).__webglFramebuffer:null;Le.bindFramebuffer(k.FRAMEBUFFER,$e);const It=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await mp(k,It,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,be),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ge),k.deleteBuffer(be),k.deleteSync(It),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,J=0){const Q=Math.pow(2,-J),Y=Math.floor(C.image.width*Q),ge=Math.floor(C.image.height*Q),Te=X!==null?X.x:0,Pe=X!==null?X.y:0;qe.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Te,Pe,Y,ge),Le.unbindTexture()};const Da=k.createFramebuffer(),Ss=k.createFramebuffer();this.copyTextureToTexture=function(C,X,J=null,Q=null,Y=0,ge=null){ge===null&&(Y!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=Y,Y=0):ge=0);let Te,Pe,Ce,Oe,He,Ue,be,$e,It;const Nt=C.isCompressedTexture?C.mipmaps[ge]:C.image;if(J!==null)Te=J.max.x-J.min.x,Pe=J.max.y-J.min.y,Ce=J.isBox3?J.max.z-J.min.z:1,Oe=J.min.x,He=J.min.y,Ue=J.isBox3?J.min.z:0;else{const fn=Math.pow(2,-Y);Te=Math.floor(Nt.width*fn),Pe=Math.floor(Nt.height*fn),C.isDataArrayTexture?Ce=Nt.depth:C.isData3DTexture?Ce=Math.floor(Nt.depth*fn):Ce=1,Oe=0,He=0,Ue=0}Q!==null?(be=Q.x,$e=Q.y,It=Q.z):(be=0,$e=0,It=0);const Mt=Ke.convert(X.format),ze=Ke.convert(X.type);let Pt;X.isData3DTexture?(qe.setTexture3D(X,0),Pt=k.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(qe.setTexture2DArray(X,0),Pt=k.TEXTURE_2D_ARRAY):(qe.setTexture2D(X,0),Pt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const ot=k.getParameter(k.UNPACK_ROW_LENGTH),Ft=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Sn=k.getParameter(k.UNPACK_SKIP_PIXELS),nn=k.getParameter(k.UNPACK_SKIP_ROWS),Ci=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Nt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Nt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Oe),k.pixelStorei(k.UNPACK_SKIP_ROWS,He),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ue);const wt=C.isDataArrayTexture||C.isData3DTexture,qt=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const fn=ke.get(C),zt=ke.get(X),jt=ke.get(fn.__renderTarget),qr=ke.get(zt.__renderTarget);Le.bindFramebuffer(k.READ_FRAMEBUFFER,jt.__webglFramebuffer),Le.bindFramebuffer(k.DRAW_FRAMEBUFFER,qr.__webglFramebuffer);for(let hn=0;hn<Ce;hn++)wt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ke.get(C).__webglTexture,Y,Ue+hn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ke.get(X).__webglTexture,ge,It+hn)),k.blitFramebuffer(Oe,He,Te,Pe,be,$e,Te,Pe,k.DEPTH_BUFFER_BIT,k.NEAREST);Le.bindFramebuffer(k.READ_FRAMEBUFFER,null),Le.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||C.isRenderTargetTexture||ke.has(C)){const fn=ke.get(C),zt=ke.get(X);Le.bindFramebuffer(k.READ_FRAMEBUFFER,Da),Le.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ss);for(let jt=0;jt<Ce;jt++)wt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,fn.__webglTexture,Y,Ue+jt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,fn.__webglTexture,Y),qt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,zt.__webglTexture,ge,It+jt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,zt.__webglTexture,ge),Y!==0?k.blitFramebuffer(Oe,He,Te,Pe,be,$e,Te,Pe,k.COLOR_BUFFER_BIT,k.NEAREST):qt?k.copyTexSubImage3D(Pt,ge,be,$e,It+jt,Oe,He,Te,Pe):k.copyTexSubImage2D(Pt,ge,be,$e,Oe,He,Te,Pe);Le.bindFramebuffer(k.READ_FRAMEBUFFER,null),Le.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else qt?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Pt,ge,be,$e,It,Te,Pe,Ce,Mt,ze,Nt.data):X.isCompressedArrayTexture?k.compressedTexSubImage3D(Pt,ge,be,$e,It,Te,Pe,Ce,Mt,Nt.data):k.texSubImage3D(Pt,ge,be,$e,It,Te,Pe,Ce,Mt,ze,Nt):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ge,be,$e,Te,Pe,Mt,ze,Nt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ge,be,$e,Nt.width,Nt.height,Mt,Nt.data):k.texSubImage2D(k.TEXTURE_2D,ge,be,$e,Te,Pe,Mt,ze,Nt);k.pixelStorei(k.UNPACK_ROW_LENGTH,ot),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ft),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Sn),k.pixelStorei(k.UNPACK_SKIP_ROWS,nn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ci),ge===0&&X.generateMipmaps&&k.generateMipmap(Pt),Le.unbindTexture()},this.initRenderTarget=function(C){ke.get(C).__webglFramebuffer===void 0&&qe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?qe.setTextureCube(C,0):C.isData3DTexture?qe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?qe.setTexture2DArray(C,0):qe.setTexture2D(C,0),Le.unbindTexture()},this.resetState=function(){z=0,E=0,w=null,Le.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}function yf(r,e){if(e===ip)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===zc||e===hh){let t=r.getIndex();if(t===null){const o=[],c=r.getAttribute("position");if(c!==void 0){for(let u=0;u<c.count;u++)o.push(u);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===zc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Ov extends Vr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Hv(t)}),this.register(function(t){return new Gv(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new Xv(t)}),this.register(function(t){return new qv(t)}),this.register(function(t){return new jv(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new Vv(t)}),this.register(function(t){return new Kv(t)}),this.register(function(t){return new Wv(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new kv(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new ny(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const f=fs.extractUrlBase(e);o=fs.resolveURL(f,this.path)}else o=fs.extractUrlBase(e);this.manager.itemStart(e);const c=function(f){i?i(f):console.error(f),s.manager.itemError(e),s.manager.itemEnd(e)},u=new Ph(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(f){try{s.parse(f,o,function(p){t(p),s.manager.itemEnd(e)},c)}catch(p){c(p)}},n,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},c={},u=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(u.decode(new Uint8Array(e,0,4))===Fh){try{o[ut.KHR_BINARY_GLTF]=new iy(e)}catch(m){i&&i(m);return}s=JSON.parse(o[ut.KHR_BINARY_GLTF].content)}else s=JSON.parse(u.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const f=new gy(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});f.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const m=this.pluginCallbacks[p](f);m.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[m.name]=m,o[m.name]=!0}if(s.extensionsUsed)for(let p=0;p<s.extensionsUsed.length;++p){const m=s.extensionsUsed[p],g=s.extensionsRequired||[];switch(m){case ut.KHR_MATERIALS_UNLIT:o[m]=new zv;break;case ut.KHR_DRACO_MESH_COMPRESSION:o[m]=new ry(s,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:o[m]=new sy;break;case ut.KHR_MESH_QUANTIZATION:o[m]=new ay;break;default:g.indexOf(m)>=0&&c[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}f.setExtensions(o),f.setPlugins(c),f.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Bv(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class kv{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,u=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let f;const p=new Je(16777215);u.color!==void 0&&p.setRGB(u.color[0],u.color[1],u.color[2],ln);const m=u.range!==void 0?u.range:0;switch(u.type){case"directional":f=new yl(p),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new Nm(p),f.distance=m;break;case"spot":f=new Dm(p),f.distance=m,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,f.angle=u.spot.outerConeAngle,f.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return f.position.set(0,0,0),Fn(f,u),u.intensity!==void 0&&(f.intensity=u.intensity),f.name=t.createUniqueName(u.name||"light_"+e),i=Promise.resolve(f),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],c=(s.extensions&&s.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(u){return n._getNodeRef(t.cache,c,u)})}}class zv{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return Vn}extendParams(e,t,n){const i=[];e.color=new Je(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ln),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Yt))}return Promise.all(i)}}class Vv{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Hv{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const c=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ft(c,c)}return Promise.all(s)}}class Gv{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Wv{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Xv{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Je(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const c=o.sheenColorFactor;t.sheenColor.setRGB(c[0],c[1],c[2],ln)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Yt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class qv{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class jv{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const c=o.attenuationColor||[1,1,1];return t.attenuationColor=new Je().setRGB(c[0],c[1],c[2],ln),Promise.all(s)}}class Yv{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Kv{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const c=o.specularColorFactor||[1,1,1];return t.specularColor=new Je().setRGB(c[0],c[1],c[2],ln),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Yt)),Promise.all(s)}}class Zv{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class $v{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Jv{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Qv{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],c=i.images[o.source];let u=n.textureLoader;if(c.uri){const f=n.options.manager.getHandler(c.uri);f!==null&&(u=f)}return n.loadTextureImage(e,o.source,u)}}class ey{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],c=i.images[o.source];let u=n.textureLoader;if(c.uri){const f=n.options.manager.getHandler(c.uri);f!==null&&(u=f)}return n.loadTextureImage(e,o.source,u)}}class ty{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(c){const u=i.byteOffset||0,f=i.byteLength||0,p=i.count,m=i.byteStride,g=new Uint8Array(c,u,f);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(p,m,g,i.mode,i.filter).then(function(v){return v.buffer}):o.ready.then(function(){const v=new ArrayBuffer(p*m);return o.decodeGltfBuffer(new Uint8Array(v),p,m,g,i.mode,i.filter),v})})}else return null}}class ny{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const f of i.primitives)if(f.mode!==bn.TRIANGLES&&f.mode!==bn.TRIANGLE_STRIP&&f.mode!==bn.TRIANGLE_FAN&&f.mode!==void 0)return null;const o=n.extensions[this.name].attributes,c=[],u={};for(const f in o)c.push(this.parser.getDependency("accessor",o[f]).then(p=>(u[f]=p,u[f])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(f=>{const p=f.pop(),m=p.isGroup?p.children:[p],g=f[0].count,v=[];for(const S of m){const T=new tt,b=new j,_=new Ei,D=new j(1,1,1),P=new lm(S.geometry,S.material,g);for(let L=0;L<g;L++)u.TRANSLATION&&b.fromBufferAttribute(u.TRANSLATION,L),u.ROTATION&&_.fromBufferAttribute(u.ROTATION,L),u.SCALE&&D.fromBufferAttribute(u.SCALE,L),P.setMatrixAt(L,T.compose(b,_,D));for(const L in u)if(L==="_COLOR_0"){const B=u[L];P.instanceColor=new Hc(B.array,B.itemSize,B.normalized)}else L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE"&&S.geometry.setAttribute(L,u[L]);Dt.prototype.copy.call(P,S),this.parser.assignFinalMaterial(P),v.push(P)}return p.isGroup?(p.clear(),p.add(...v),p):v[0]}))}}const Fh="glTF",ss=12,bf={JSON:1313821514,BIN:5130562};class iy{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ss),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Fh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ss,s=new DataView(e,ss);let o=0;for(;o<i;){const c=s.getUint32(o,!0);o+=4;const u=s.getUint32(o,!0);if(o+=4,u===bf.JSON){const f=new Uint8Array(e,ss+o,c);this.content=n.decode(f)}else if(u===bf.BIN){const f=ss+o;this.body=e.slice(f,f+c)}o+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ry{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,c={},u={},f={};for(const p in o){const m=qc[p]||p.toLowerCase();c[m]=o[p]}for(const p in e.attributes){const m=qc[p]||p.toLowerCase();if(o[p]!==void 0){const g=n.accessors[e.attributes[p]],v=Er[g.componentType];f[m]=v.name,u[m]=g.normalized===!0}}return t.getDependency("bufferView",s).then(function(p){return new Promise(function(m,g){i.decodeDracoFile(p,function(v){for(const S in v.attributes){const T=v.attributes[S],b=u[S];b!==void 0&&(T.normalized=b)}m(v)},c,f,ln,g)})})}}class sy{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ay{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}}class Oh extends Ms{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=c*2,f=c*3,p=i-t,m=(n-t)/p,g=m*m,v=g*m,S=e*f,T=S-f,b=-2*v+3*g,_=v-g,D=1-b,P=_-g+m;for(let L=0;L!==c;L++){const B=o[T+L+c],h=o[T+L+u]*p,I=o[S+L+c],z=o[S+L]*p;s[L]=D*B+P*h+b*I+_*z}return s}}const oy=new Ei;class cy extends Oh{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return oy.fromArray(s).normalize().toArray(s),s}}const bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Er={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Mf={9728:cn,9729:on,9984:sh,9985:oa,9986:os,9987:si},Sf={33071:kn,33648:da,10497:Pr},Ro={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ly={CUBICSPLINE:void 0,LINEAR:_s,STEP:xs},Co={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Aa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ui})),r.DefaultMaterial}function Oi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fy(r,e,t){let n=!1,i=!1,s=!1;for(let f=0,p=e.length;f<p;f++){const m=e[f];if(m.POSITION!==void 0&&(n=!0),m.NORMAL!==void 0&&(i=!0),m.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],c=[],u=[];for(let f=0,p=e.length;f<p;f++){const m=e[f];if(n){const g=m.POSITION!==void 0?t.getDependency("accessor",m.POSITION):r.attributes.position;o.push(g)}if(i){const g=m.NORMAL!==void 0?t.getDependency("accessor",m.NORMAL):r.attributes.normal;c.push(g)}if(s){const g=m.COLOR_0!==void 0?t.getDependency("accessor",m.COLOR_0):r.attributes.color;u.push(g)}}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(u)]).then(function(f){const p=f[0],m=f[1],g=f[2];return n&&(r.morphAttributes.position=p),i&&(r.morphAttributes.normal=m),s&&(r.morphAttributes.color=g),r.morphTargetsRelative=!0,r})}function hy(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dy(r){let e;const t=r.extensions&&r.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Po(t.attributes):e=r.indices+":"+Po(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Po(r.targets[n]);return e}function Po(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function jc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function py(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const my=new tt;class gy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Bv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const c=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(c)===!0;const u=c.match(/Version\/(\d+)/);i=n&&u?parseInt(u[1],10):-1,s=c.indexOf("Firefox")>-1,o=s?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Pm(this.options.manager):this.textureLoader=new Fm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ph(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const c={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Oi(s,c,i),Fn(c,i),Promise.all(n._invokeAll(function(u){return u.afterRoot&&u.afterRoot(c)})).then(function(){for(const u of c.scenes)u.updateMatrixWorld();e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let c=0,u=o.length;c<u;c++)e[o[c]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,c)=>{const u=this.associations.get(o);u!=null&&this.associations.set(c,u);for(const[f,p]of o.children.entries())s(p,c.children[f])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(fs.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ro[i.type],c=Er[i.componentType],u=i.normalized===!0,f=new c(i.count*o);return Promise.resolve(new Kt(f,o,u))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const c=o[0],u=Ro[i.type],f=Er[i.componentType],p=f.BYTES_PER_ELEMENT,m=p*u,g=i.byteOffset||0,v=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,S=i.normalized===!0;let T,b;if(v&&v!==m){const _=Math.floor(g/v),D="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let P=t.cache.get(D);P||(T=new f(c,_*v,i.count*v/p),P=new rm(T,v/p),t.cache.add(D,P)),b=new ul(P,u,g%v/p,S)}else c===null?T=new f(i.count*u):T=new f(c,g,i.count*u),b=new Kt(T,u,S);if(i.sparse!==void 0){const _=Ro.SCALAR,D=Er[i.sparse.indices.componentType],P=i.sparse.indices.byteOffset||0,L=i.sparse.values.byteOffset||0,B=new D(o[1],P,i.sparse.count*_),h=new f(o[2],L,i.sparse.count*u);c!==null&&(b=new Kt(b.array.slice(),b.itemSize,b.normalized)),b.normalized=!1;for(let I=0,z=B.length;I<z;I++){const E=B[I];if(b.setX(E,h[I*u]),u>=2&&b.setY(E,h[I*u+1]),u>=3&&b.setZ(E,h[I*u+2]),u>=4&&b.setW(E,h[I*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}b.normalized=S}return b})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let c=this.textureLoader;if(o.uri){const u=n.manager.getHandler(o.uri);u!==null&&(c=u)}return this.loadTextureImage(e,s,c)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],c=s.images[t],u=(c.uri||c.bufferView)+":"+o.sampler;if(this.textureCache[u])return this.textureCache[u];const f=this.loadImageSource(t,n).then(function(p){p.flipY=!1,p.name=o.name||c.name||"",p.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(p.name=c.uri);const g=(s.samplers||{})[o.sampler]||{};return p.magFilter=Mf[g.magFilter]||on,p.minFilter=Mf[g.minFilter]||si,p.wrapS=Sf[g.wrapS]||Pr,p.wrapT=Sf[g.wrapT]||Pr,p.generateMipmaps=!p.isCompressedTexture&&p.minFilter!==cn&&p.minFilter!==on,i.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[u]=f,f}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(m=>m.clone());const o=i.images[e],c=self.URL||self.webkitURL;let u=o.uri||"",f=!1;if(o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(m){f=!0;const g=new Blob([m],{type:o.mimeType});return u=c.createObjectURL(g),u});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(u).then(function(m){return new Promise(function(g,v){let S=g;t.isImageBitmapLoader===!0&&(S=function(T){const b=new Xt(T);b.needsUpdate=!0,g(b)}),t.load(fs.resolveURL(m,s.path),S,void 0,v)})}).then(function(m){return f===!0&&c.revokeObjectURL(u),Fn(m,o),m.userData.mimeType=o.mimeType||py(o.uri),m}).catch(function(m){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),m});return this.sourceCache[e]=p,p}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ut.KHR_TEXTURE_TRANSFORM]){const c=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const u=s.associations.get(o);o=s.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(o,c),s.associations.set(o,u)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+n.uuid;let u=this.cache.get(c);u||(u=new Eh,Hn.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(c,u)),n=u}else if(e.isLine){const c="LineBasicMaterial:"+n.uuid;let u=this.cache.get(c);u||(u=new Ma,Hn.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,this.cache.add(c,u)),n=u}if(i||s||o){let c="ClonedMaterial:"+n.uuid+":";i&&(c+="derivative-tangents:"),s&&(c+="vertex-colors:"),o&&(c+="flat-shading:");let u=this.cache.get(c);u||(u=n.clone(),s&&(u.vertexColors=!0),o&&(u.flatShading=!0),i&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(c,u),this.associations.set(u,this.associations.get(n))),n=u}e.material=n}getMaterialType(){return Aa}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const c={},u=s.extensions||{},f=[];if(u[ut.KHR_MATERIALS_UNLIT]){const m=i[ut.KHR_MATERIALS_UNLIT];o=m.getMaterialType(),f.push(m.extendParams(c,s,t))}else{const m=s.pbrMetallicRoughness||{};if(c.color=new Je(1,1,1),c.opacity=1,Array.isArray(m.baseColorFactor)){const g=m.baseColorFactor;c.color.setRGB(g[0],g[1],g[2],ln),c.opacity=g[3]}m.baseColorTexture!==void 0&&f.push(t.assignTexture(c,"map",m.baseColorTexture,Yt)),c.metalness=m.metallicFactor!==void 0?m.metallicFactor:1,c.roughness=m.roughnessFactor!==void 0?m.roughnessFactor:1,m.metallicRoughnessTexture!==void 0&&(f.push(t.assignTexture(c,"metalnessMap",m.metallicRoughnessTexture)),f.push(t.assignTexture(c,"roughnessMap",m.metallicRoughnessTexture))),o=this._invokeOne(function(g){return g.getMaterialType&&g.getMaterialType(e)}),f.push(Promise.all(this._invokeAll(function(g){return g.extendMaterialParams&&g.extendMaterialParams(e,c)})))}s.doubleSided===!0&&(c.side=Bn);const p=s.alphaMode||Co.OPAQUE;if(p===Co.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,p===Co.MASK&&(c.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Vn&&(f.push(t.assignTexture(c,"normalMap",s.normalTexture)),c.normalScale=new ft(1,1),s.normalTexture.scale!==void 0)){const m=s.normalTexture.scale;c.normalScale.set(m,m)}if(s.occlusionTexture!==void 0&&o!==Vn&&(f.push(t.assignTexture(c,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Vn){const m=s.emissiveFactor;c.emissive=new Je().setRGB(m[0],m[1],m[2],ln)}return s.emissiveTexture!==void 0&&o!==Vn&&f.push(t.assignTexture(c,"emissiveMap",s.emissiveTexture,Yt)),Promise.all(f).then(function(){const m=new o(c);return s.name&&(m.name=s.name),Fn(m,s),t.associations.set(m,{materials:e}),s.extensions&&Oi(i,m,s),m})}createUniqueName(e){const t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(c){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(u){return Tf(u,c,t)})}const o=[];for(let c=0,u=e.length;c<u;c++){const f=e[c],p=dy(f),m=i[p];if(m)o.push(m.promise);else{let g;f.extensions&&f.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?g=s(f):g=Tf(new tn,f,t),i[p]={primitive:f,promise:g},o.push(g)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,c=[];for(let u=0,f=o.length;u<f;u++){const p=o[u].material===void 0?uy(this.cache):this.getDependency("material",o[u].material);c.push(p)}return c.push(t.loadGeometries(o)),Promise.all(c).then(function(u){const f=u.slice(0,u.length-1),p=u[u.length-1],m=[];for(let v=0,S=p.length;v<S;v++){const T=p[v],b=o[v];let _;const D=f[v];if(b.mode===bn.TRIANGLES||b.mode===bn.TRIANGLE_STRIP||b.mode===bn.TRIANGLE_FAN||b.mode===void 0)_=s.isSkinnedMesh===!0?new am(T,D):new en(T,D),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),b.mode===bn.TRIANGLE_STRIP?_.geometry=yf(_.geometry,hh):b.mode===bn.TRIANGLE_FAN&&(_.geometry=yf(_.geometry,zc));else if(b.mode===bn.LINES)_=new Th(T,D);else if(b.mode===bn.LINE_STRIP)_=new Sa(T,D);else if(b.mode===bn.LINE_LOOP)_=new dm(T,D);else if(b.mode===bn.POINTS)_=new pm(T,D);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+b.mode);Object.keys(_.geometry.morphAttributes).length>0&&hy(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),Fn(_,s),b.extensions&&Oi(i,_,b),t.assignFinalMaterial(_),m.push(_)}for(let v=0,S=m.length;v<S;v++)t.associations.set(m[v],{meshes:e,primitives:v});if(m.length===1)return s.extensions&&Oi(i,m[0],s),m[0];const g=new Hi;s.extensions&&Oi(i,g,s),t.associations.set(g,{meshes:e});for(let v=0,S=m.length;v<S;v++)g.add(m[v]);return g})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new an(Dp.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new vl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,c=[],u=[];for(let f=0,p=o.length;f<p;f++){const m=o[f];if(m){c.push(m);const g=new tt;s!==null&&g.fromArray(s.array,f*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[f])}return new hl(c,u)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],c=[],u=[],f=[],p=[];for(let m=0,g=i.channels.length;m<g;m++){const v=i.channels[m],S=i.samplers[v.sampler],T=v.target,b=T.node,_=i.parameters!==void 0?i.parameters[S.input]:S.input,D=i.parameters!==void 0?i.parameters[S.output]:S.output;T.node!==void 0&&(o.push(this.getDependency("node",b)),c.push(this.getDependency("accessor",_)),u.push(this.getDependency("accessor",D)),f.push(S),p.push(T))}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(u),Promise.all(f),Promise.all(p)]).then(function(m){const g=m[0],v=m[1],S=m[2],T=m[3],b=m[4],_=[];for(let P=0,L=g.length;P<L;P++){const B=g[P],h=v[P],I=S[P],z=T[P],E=b[P];if(B===void 0)continue;B.updateMatrix&&B.updateMatrix();const w=n._createAnimationTracks(B,h,I,z,E);if(w)for(let F=0;F<w.length;F++)_.push(w[F])}const D=new Sm(s,void 0,_);return Fn(D,i),D})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(c){if(c.isMesh)for(let u=0,f=i.weights.length;u<f;u++)c.morphTargetInfluences[u]=i.weights[u]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],c=i.children||[];for(let f=0,p=c.length;f<p;f++)o.push(n.getDependency("node",c[f]));const u=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),u]).then(function(f){const p=f[0],m=f[1],g=f[2];g!==null&&p.traverse(function(v){v.isSkinnedMesh&&v.bind(g,my)});for(let v=0,S=m.length;v<S;v++)p.add(m[v]);return p})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",c=[],u=i._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});return u&&c.push(u),s.camera!==void 0&&c.push(i.getDependency("camera",s.camera).then(function(f){return i._getNodeRef(i.cameraCache,s.camera,f)})),i._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){c.push(f)}),this.nodeCache[e]=Promise.all(c).then(function(f){let p;if(s.isBone===!0?p=new Sh:f.length>1?p=new Hi:f.length===1?p=f[0]:p=new Dt,p!==f[0])for(let m=0,g=f.length;m<g;m++)p.add(f[m]);if(s.name&&(p.userData.name=s.name,p.name=o),Fn(p,s),s.extensions&&Oi(n,p,s),s.matrix!==void 0){const m=new tt;m.fromArray(s.matrix),p.applyMatrix4(m)}else s.translation!==void 0&&p.position.fromArray(s.translation),s.rotation!==void 0&&p.quaternion.fromArray(s.rotation),s.scale!==void 0&&p.scale.fromArray(s.scale);if(!i.associations.has(p))i.associations.set(p,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const m=i.associations.get(p);i.associations.set(p,{...m})}return i.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Hi;n.name&&(s.name=i.createUniqueName(n.name)),Fn(s,n),n.extensions&&Oi(t,s,n);const o=n.nodes||[],c=[];for(let u=0,f=o.length;u<f;u++)c.push(i.getDependency("node",o[u]));return Promise.all(c).then(function(u){for(let p=0,m=u.length;p<m;p++)s.add(u[p]);const f=p=>{const m=new Map;for(const[g,v]of i.associations)(g instanceof Hn||g instanceof Xt)&&m.set(g,v);return p.traverse(g=>{const v=i.associations.get(g);v!=null&&m.set(g,v)}),m};return i.associations=f(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],c=e.name?e.name:e.uuid,u=[];yi[s.path]===yi.weights?e.traverse(function(g){g.morphTargetInfluences&&u.push(g.name?g.name:g.uuid)}):u.push(c);let f;switch(yi[s.path]){case yi.weights:f=Ir;break;case yi.rotation:f=Nr;break;case yi.translation:case yi.scale:f=Ur;break;default:switch(n.itemSize){case 1:f=Ir;break;case 2:case 3:default:f=Ur;break}break}const p=i.interpolation!==void 0?ly[i.interpolation]:_s,m=this._getArrayFromAccessor(n);for(let g=0,v=u.length;g<v;g++){const S=new f(u[g]+"."+yi[s.path],t.array,m,p);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(S),o.push(S)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=jc(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Nr?cy:Oh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function xy(r,e,t){const n=e.attributes,i=new Dn;if(n.POSITION!==void 0){const c=t.json.accessors[n.POSITION],u=c.min,f=c.max;if(u!==void 0&&f!==void 0){if(i.set(new j(u[0],u[1],u[2]),new j(f[0],f[1],f[2])),c.normalized){const p=jc(Er[c.componentType]);i.min.multiplyScalar(p),i.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const c=new j,u=new j;for(let f=0,p=s.length;f<p;f++){const m=s[f];if(m.POSITION!==void 0){const g=t.json.accessors[m.POSITION],v=g.min,S=g.max;if(v!==void 0&&S!==void 0){if(u.setX(Math.max(Math.abs(v[0]),Math.abs(S[0]))),u.setY(Math.max(Math.abs(v[1]),Math.abs(S[1]))),u.setZ(Math.max(Math.abs(v[2]),Math.abs(S[2]))),g.normalized){const T=jc(Er[g.componentType]);u.multiplyScalar(T)}c.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(c)}r.boundingBox=i;const o=new Xn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Tf(r,e,t){const n=e.attributes,i=[];function s(o,c){return t.getDependency("accessor",o).then(function(u){r.setAttribute(c,u)})}for(const o in n){const c=qc[o]||o.toLowerCase();c in r.attributes||i.push(s(n[o],c))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(c){r.setIndex(c)});i.push(o)}return pt.workingColorSpace!==ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Fn(r,e),xy(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?fy(r,e.targets,t):r})}function _y(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Mr={},Lo,Ef;function vy(){return Ef||(Ef=1,Lo=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Lo}var Do={},bi={},Af;function qi(){if(Af)return bi;Af=1;let r;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return bi.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},bi.getSymbolTotalCodewords=function(n){return e[n]},bi.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},bi.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');r=n},bi.isKanjiModeEnabled=function(){return typeof r<"u"},bi.toSJIS=function(n){return r(n)},bi}var Io={},wf;function Sl(){return wf||(wf=1,(function(r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+t)}}r.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},r.from=function(n,i){if(r.isValid(n))return n;try{return e(n)}catch{return i}}})(Io)),Io}var No,Rf;function yy(){if(Rf)return No;Rf=1;function r(){this.buffer=[],this.length=0}return r.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},No=r,No}var Uo,Cf;function by(){if(Cf)return Uo;Cf=1;function r(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return r.prototype.set=function(e,t,n,i){const s=e*this.size+t;this.data[s]=n,i&&(this.reservedBit[s]=!0)},r.prototype.get=function(e,t){return this.data[e*this.size+t]},r.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},r.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Uo=r,Uo}var Fo={},Pf;function My(){return Pf||(Pf=1,(function(r){const e=qi().getSymbolSize;r.getRowColCoords=function(n){if(n===1)return[];const i=Math.floor(n/7)+2,s=e(n),o=s===145?26:Math.ceil((s-13)/(2*i-2))*2,c=[s-7];for(let u=1;u<i-1;u++)c[u]=c[u-1]-o;return c.push(6),c.reverse()},r.getPositions=function(n){const i=[],s=r.getRowColCoords(n),o=s.length;for(let c=0;c<o;c++)for(let u=0;u<o;u++)c===0&&u===0||c===0&&u===o-1||c===o-1&&u===0||i.push([s[c],s[u]]);return i}})(Fo)),Fo}var Oo={},Lf;function Sy(){if(Lf)return Oo;Lf=1;const r=qi().getSymbolSize,e=7;return Oo.getPositions=function(n){const i=r(n);return[[0,0],[i-e,0],[0,i-e]]},Oo}var Bo={},Df;function Ty(){return Df||(Df=1,(function(r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};r.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},r.from=function(i){return r.isValid(i)?parseInt(i,10):void 0},r.getPenaltyN1=function(i){const s=i.size;let o=0,c=0,u=0,f=null,p=null;for(let m=0;m<s;m++){c=u=0,f=p=null;for(let g=0;g<s;g++){let v=i.get(m,g);v===f?c++:(c>=5&&(o+=e.N1+(c-5)),f=v,c=1),v=i.get(g,m),v===p?u++:(u>=5&&(o+=e.N1+(u-5)),p=v,u=1)}c>=5&&(o+=e.N1+(c-5)),u>=5&&(o+=e.N1+(u-5))}return o},r.getPenaltyN2=function(i){const s=i.size;let o=0;for(let c=0;c<s-1;c++)for(let u=0;u<s-1;u++){const f=i.get(c,u)+i.get(c,u+1)+i.get(c+1,u)+i.get(c+1,u+1);(f===4||f===0)&&o++}return o*e.N2},r.getPenaltyN3=function(i){const s=i.size;let o=0,c=0,u=0;for(let f=0;f<s;f++){c=u=0;for(let p=0;p<s;p++)c=c<<1&2047|i.get(f,p),p>=10&&(c===1488||c===93)&&o++,u=u<<1&2047|i.get(p,f),p>=10&&(u===1488||u===93)&&o++}return o*e.N3},r.getPenaltyN4=function(i){let s=0;const o=i.data.length;for(let u=0;u<o;u++)s+=i.data[u];return Math.abs(Math.ceil(s*100/o/5)-10)*e.N4};function t(n,i,s){switch(n){case r.Patterns.PATTERN000:return(i+s)%2===0;case r.Patterns.PATTERN001:return i%2===0;case r.Patterns.PATTERN010:return s%3===0;case r.Patterns.PATTERN011:return(i+s)%3===0;case r.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case r.Patterns.PATTERN101:return i*s%2+i*s%3===0;case r.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case r.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}r.applyMask=function(i,s){const o=s.size;for(let c=0;c<o;c++)for(let u=0;u<o;u++)s.isReserved(u,c)||s.xor(u,c,t(i,u,c))},r.getBestMask=function(i,s){const o=Object.keys(r.Patterns).length;let c=0,u=1/0;for(let f=0;f<o;f++){s(f),r.applyMask(f,i);const p=r.getPenaltyN1(i)+r.getPenaltyN2(i)+r.getPenaltyN3(i)+r.getPenaltyN4(i);r.applyMask(f,i),p<u&&(u=p,c=f)}return c}})(Bo)),Bo}var ra={},If;function Bh(){if(If)return ra;If=1;const r=Sl(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return ra.getBlocksCount=function(i,s){switch(s){case r.L:return e[(i-1)*4+0];case r.M:return e[(i-1)*4+1];case r.Q:return e[(i-1)*4+2];case r.H:return e[(i-1)*4+3];default:return}},ra.getTotalCodewordsCount=function(i,s){switch(s){case r.L:return t[(i-1)*4+0];case r.M:return t[(i-1)*4+1];case r.Q:return t[(i-1)*4+2];case r.H:return t[(i-1)*4+3];default:return}},ra}var ko={},as={},Nf;function Ey(){if(Nf)return as;Nf=1;const r=new Uint8Array(512),e=new Uint8Array(256);return(function(){let n=1;for(let i=0;i<255;i++)r[i]=n,e[n]=i,n<<=1,n&256&&(n^=285);for(let i=255;i<512;i++)r[i]=r[i-255]})(),as.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},as.exp=function(n){return r[n]},as.mul=function(n,i){return n===0||i===0?0:r[e[n]+e[i]]},as}var Uf;function Ay(){return Uf||(Uf=1,(function(r){const e=Ey();r.mul=function(n,i){const s=new Uint8Array(n.length+i.length-1);for(let o=0;o<n.length;o++)for(let c=0;c<i.length;c++)s[o+c]^=e.mul(n[o],i[c]);return s},r.mod=function(n,i){let s=new Uint8Array(n);for(;s.length-i.length>=0;){const o=s[0];for(let u=0;u<i.length;u++)s[u]^=e.mul(i[u],o);let c=0;for(;c<s.length&&s[c]===0;)c++;s=s.slice(c)}return s},r.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let s=0;s<n;s++)i=r.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(ko)),ko}var zo,Ff;function wy(){if(Ff)return zo;Ff=1;const r=Ay();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=r.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(n.length+this.degree);i.set(n);const s=r.mod(i,this.genPoly),o=this.degree-s.length;if(o>0){const c=new Uint8Array(this.degree);return c.set(s,o),c}return s},zo=e,zo}var Vo={},Ho={},Go={},Of;function kh(){return Of||(Of=1,Go.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Go}var Un={},Bf;function zh(){if(Bf)return Un;Bf=1;const r="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;Un.KANJI=new RegExp(t,"g"),Un.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Un.BYTE=new RegExp(n,"g"),Un.NUMERIC=new RegExp(r,"g"),Un.ALPHANUMERIC=new RegExp(e,"g");const i=new RegExp("^"+t+"$"),s=new RegExp("^"+r+"$"),o=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return Un.testKanji=function(u){return i.test(u)},Un.testNumeric=function(u){return s.test(u)},Un.testAlphanumeric=function(u){return o.test(u)},Un}var kf;function ji(){return kf||(kf=1,(function(r){const e=kh(),t=zh();r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(s,o){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?s.ccBits[0]:o<27?s.ccBits[1]:s.ccBits[2]},r.getBestModeForData=function(s){return t.testNumeric(s)?r.NUMERIC:t.testAlphanumeric(s)?r.ALPHANUMERIC:t.testKanji(s)?r.KANJI:r.BYTE},r.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},r.isValid=function(s){return s&&s.bit&&s.ccBits};function n(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+i)}}r.from=function(s,o){if(r.isValid(s))return s;try{return n(s)}catch{return o}}})(Ho)),Ho}var zf;function Ry(){return zf||(zf=1,(function(r){const e=qi(),t=Bh(),n=Sl(),i=ji(),s=kh(),o=7973,c=e.getBCHDigit(o);function u(g,v,S){for(let T=1;T<=40;T++)if(v<=r.getCapacity(T,S,g))return T}function f(g,v){return i.getCharCountIndicator(g,v)+4}function p(g,v){let S=0;return g.forEach(function(T){const b=f(T.mode,v);S+=b+T.getBitsLength()}),S}function m(g,v){for(let S=1;S<=40;S++)if(p(g,S)<=r.getCapacity(S,v,i.MIXED))return S}r.from=function(v,S){return s.isValid(v)?parseInt(v,10):S},r.getCapacity=function(v,S,T){if(!s.isValid(v))throw new Error("Invalid QR Code version");typeof T>"u"&&(T=i.BYTE);const b=e.getSymbolTotalCodewords(v),_=t.getTotalCodewordsCount(v,S),D=(b-_)*8;if(T===i.MIXED)return D;const P=D-f(T,v);switch(T){case i.NUMERIC:return Math.floor(P/10*3);case i.ALPHANUMERIC:return Math.floor(P/11*2);case i.KANJI:return Math.floor(P/13);case i.BYTE:default:return Math.floor(P/8)}},r.getBestVersionForData=function(v,S){let T;const b=n.from(S,n.M);if(Array.isArray(v)){if(v.length>1)return m(v,b);if(v.length===0)return 1;T=v[0]}else T=v;return u(T.mode,T.getLength(),b)},r.getEncodedBits=function(v){if(!s.isValid(v)||v<7)throw new Error("Invalid QR Code version");let S=v<<12;for(;e.getBCHDigit(S)-c>=0;)S^=o<<e.getBCHDigit(S)-c;return v<<12|S}})(Vo)),Vo}var Wo={},Vf;function Cy(){if(Vf)return Wo;Vf=1;const r=qi(),e=1335,t=21522,n=r.getBCHDigit(e);return Wo.getEncodedBits=function(s,o){const c=s.bit<<3|o;let u=c<<10;for(;r.getBCHDigit(u)-n>=0;)u^=e<<r.getBCHDigit(u)-n;return(c<<10|u)^t},Wo}var Xo={},qo,Hf;function Py(){if(Hf)return qo;Hf=1;const r=ji();function e(t){this.mode=r.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let i,s,o;for(i=0;i+3<=this.data.length;i+=3)s=this.data.substr(i,3),o=parseInt(s,10),n.put(o,10);const c=this.data.length-i;c>0&&(s=this.data.substr(i),o=parseInt(s,10),n.put(o,c*3+1))},qo=e,qo}var jo,Gf;function Ly(){if(Gf)return jo;Gf=1;const r=ji(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=r.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(i){return 11*Math.floor(i/2)+6*(i%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let s;for(s=0;s+2<=this.data.length;s+=2){let o=e.indexOf(this.data[s])*45;o+=e.indexOf(this.data[s+1]),i.put(o,11)}this.data.length%2&&i.put(e.indexOf(this.data[s]),6)},jo=t,jo}var Yo,Wf;function Dy(){if(Wf)return Yo;Wf=1;const r=ji();function e(t){this.mode=r.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,i=this.data.length;n<i;n++)t.put(this.data[n],8)},Yo=e,Yo}var Ko,Xf;function Iy(){if(Xf)return Ko;Xf=1;const r=ji(),e=qi();function t(n){this.mode=r.KANJI,this.data=n}return t.getBitsLength=function(i){return i*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let i;for(i=0;i<this.data.length;i++){let s=e.toSJIS(this.data[i]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[i]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),n.put(s,13)}},Ko=t,Ko}var Zo={exports:{}},qf;function Ny(){return qf||(qf=1,(function(r){var e={single_source_shortest_paths:function(t,n,i){var s={},o={};o[n]=0;var c=e.PriorityQueue.make();c.push(n,0);for(var u,f,p,m,g,v,S,T,b;!c.empty();){u=c.pop(),f=u.value,m=u.cost,g=t[f]||{};for(p in g)g.hasOwnProperty(p)&&(v=g[p],S=m+v,T=o[p],b=typeof o[p]>"u",(b||T>S)&&(o[p]=S,c.push(p,S),s[p]=f))}if(typeof i<"u"&&typeof o[i]>"u"){var _=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(_)}return s},extract_shortest_path_from_predecessor_list:function(t,n){for(var i=[],s=n;s;)i.push(s),t[s],s=t[s];return i.reverse(),i},find_path:function(t,n,i){var s=e.single_source_shortest_paths(t,n,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,i={},s;t=t||{};for(s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);return i.queue=[],i.sorter=t.sorter||n.default_sorter,i},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var i={value:t,cost:n};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};r.exports=e})(Zo)),Zo.exports}var jf;function Uy(){return jf||(jf=1,(function(r){const e=ji(),t=Py(),n=Ly(),i=Dy(),s=Iy(),o=zh(),c=qi(),u=Ny();function f(_){return unescape(encodeURIComponent(_)).length}function p(_,D,P){const L=[];let B;for(;(B=_.exec(P))!==null;)L.push({data:B[0],index:B.index,mode:D,length:B[0].length});return L}function m(_){const D=p(o.NUMERIC,e.NUMERIC,_),P=p(o.ALPHANUMERIC,e.ALPHANUMERIC,_);let L,B;return c.isKanjiModeEnabled()?(L=p(o.BYTE,e.BYTE,_),B=p(o.KANJI,e.KANJI,_)):(L=p(o.BYTE_KANJI,e.BYTE,_),B=[]),D.concat(P,L,B).sort(function(I,z){return I.index-z.index}).map(function(I){return{data:I.data,mode:I.mode,length:I.length}})}function g(_,D){switch(D){case e.NUMERIC:return t.getBitsLength(_);case e.ALPHANUMERIC:return n.getBitsLength(_);case e.KANJI:return s.getBitsLength(_);case e.BYTE:return i.getBitsLength(_)}}function v(_){return _.reduce(function(D,P){const L=D.length-1>=0?D[D.length-1]:null;return L&&L.mode===P.mode?(D[D.length-1].data+=P.data,D):(D.push(P),D)},[])}function S(_){const D=[];for(let P=0;P<_.length;P++){const L=_[P];switch(L.mode){case e.NUMERIC:D.push([L,{data:L.data,mode:e.ALPHANUMERIC,length:L.length},{data:L.data,mode:e.BYTE,length:L.length}]);break;case e.ALPHANUMERIC:D.push([L,{data:L.data,mode:e.BYTE,length:L.length}]);break;case e.KANJI:D.push([L,{data:L.data,mode:e.BYTE,length:f(L.data)}]);break;case e.BYTE:D.push([{data:L.data,mode:e.BYTE,length:f(L.data)}])}}return D}function T(_,D){const P={},L={start:{}};let B=["start"];for(let h=0;h<_.length;h++){const I=_[h],z=[];for(let E=0;E<I.length;E++){const w=I[E],F=""+h+E;z.push(F),P[F]={node:w,lastCount:0},L[F]={};for(let H=0;H<B.length;H++){const G=B[H];P[G]&&P[G].node.mode===w.mode?(L[G][F]=g(P[G].lastCount+w.length,w.mode)-g(P[G].lastCount,w.mode),P[G].lastCount+=w.length):(P[G]&&(P[G].lastCount=w.length),L[G][F]=g(w.length,w.mode)+4+e.getCharCountIndicator(w.mode,D))}}B=z}for(let h=0;h<B.length;h++)L[B[h]].end=0;return{map:L,table:P}}function b(_,D){let P;const L=e.getBestModeForData(_);if(P=e.from(D,L),P!==e.BYTE&&P.bit<L.bit)throw new Error('"'+_+'" cannot be encoded with mode '+e.toString(P)+`.
 Suggested mode is: `+e.toString(L));switch(P===e.KANJI&&!c.isKanjiModeEnabled()&&(P=e.BYTE),P){case e.NUMERIC:return new t(_);case e.ALPHANUMERIC:return new n(_);case e.KANJI:return new s(_);case e.BYTE:return new i(_)}}r.fromArray=function(D){return D.reduce(function(P,L){return typeof L=="string"?P.push(b(L,null)):L.data&&P.push(b(L.data,L.mode)),P},[])},r.fromString=function(D,P){const L=m(D,c.isKanjiModeEnabled()),B=S(L),h=T(B,P),I=u.find_path(h.map,"start","end"),z=[];for(let E=1;E<I.length-1;E++)z.push(h.table[I[E]].node);return r.fromArray(v(z))},r.rawSplit=function(D){return r.fromArray(m(D,c.isKanjiModeEnabled()))}})(Xo)),Xo}var Yf;function Fy(){if(Yf)return Do;Yf=1;const r=qi(),e=Sl(),t=yy(),n=by(),i=My(),s=Sy(),o=Ty(),c=Bh(),u=wy(),f=Ry(),p=Cy(),m=ji(),g=Uy();function v(h,I){const z=h.size,E=s.getPositions(I);for(let w=0;w<E.length;w++){const F=E[w][0],H=E[w][1];for(let G=-1;G<=7;G++)if(!(F+G<=-1||z<=F+G))for(let $=-1;$<=7;$++)H+$<=-1||z<=H+$||(G>=0&&G<=6&&($===0||$===6)||$>=0&&$<=6&&(G===0||G===6)||G>=2&&G<=4&&$>=2&&$<=4?h.set(F+G,H+$,!0,!0):h.set(F+G,H+$,!1,!0))}}function S(h){const I=h.size;for(let z=8;z<I-8;z++){const E=z%2===0;h.set(z,6,E,!0),h.set(6,z,E,!0)}}function T(h,I){const z=i.getPositions(I);for(let E=0;E<z.length;E++){const w=z[E][0],F=z[E][1];for(let H=-2;H<=2;H++)for(let G=-2;G<=2;G++)H===-2||H===2||G===-2||G===2||H===0&&G===0?h.set(w+H,F+G,!0,!0):h.set(w+H,F+G,!1,!0)}}function b(h,I){const z=h.size,E=f.getEncodedBits(I);let w,F,H;for(let G=0;G<18;G++)w=Math.floor(G/3),F=G%3+z-8-3,H=(E>>G&1)===1,h.set(w,F,H,!0),h.set(F,w,H,!0)}function _(h,I,z){const E=h.size,w=p.getEncodedBits(I,z);let F,H;for(F=0;F<15;F++)H=(w>>F&1)===1,F<6?h.set(F,8,H,!0):F<8?h.set(F+1,8,H,!0):h.set(E-15+F,8,H,!0),F<8?h.set(8,E-F-1,H,!0):F<9?h.set(8,15-F-1+1,H,!0):h.set(8,15-F-1,H,!0);h.set(E-8,8,1,!0)}function D(h,I){const z=h.size;let E=-1,w=z-1,F=7,H=0;for(let G=z-1;G>0;G-=2)for(G===6&&G--;;){for(let $=0;$<2;$++)if(!h.isReserved(w,G-$)){let ie=!1;H<I.length&&(ie=(I[H]>>>F&1)===1),h.set(w,G-$,ie),F--,F===-1&&(H++,F=7)}if(w+=E,w<0||z<=w){w-=E,E=-E;break}}}function P(h,I,z){const E=new t;z.forEach(function($){E.put($.mode.bit,4),E.put($.getLength(),m.getCharCountIndicator($.mode,h)),$.write(E)});const w=r.getSymbolTotalCodewords(h),F=c.getTotalCodewordsCount(h,I),H=(w-F)*8;for(E.getLengthInBits()+4<=H&&E.put(0,4);E.getLengthInBits()%8!==0;)E.putBit(0);const G=(H-E.getLengthInBits())/8;for(let $=0;$<G;$++)E.put($%2?17:236,8);return L(E,h,I)}function L(h,I,z){const E=r.getSymbolTotalCodewords(I),w=c.getTotalCodewordsCount(I,z),F=E-w,H=c.getBlocksCount(I,z),G=E%H,$=H-G,ie=Math.floor(E/H),ae=Math.floor(F/H),fe=ae+1,re=ie-ae,me=new u(re);let _e=0;const Ie=new Array(H),it=new Array(H);let ht=0;const bt=new Uint8Array(h.buffer);for(let We=0;We<H;We++){const De=We<$?ae:fe;Ie[We]=bt.slice(_e,_e+De),it[We]=me.encode(Ie[We]),_e+=De,ht=Math.max(ht,De)}const xt=new Uint8Array(E);let ce=0,oe,Me;for(oe=0;oe<ht;oe++)for(Me=0;Me<H;Me++)oe<Ie[Me].length&&(xt[ce++]=Ie[Me][oe]);for(oe=0;oe<re;oe++)for(Me=0;Me<H;Me++)xt[ce++]=it[Me][oe];return xt}function B(h,I,z,E){let w;if(Array.isArray(h))w=g.fromArray(h);else if(typeof h=="string"){let ie=I;if(!ie){const ae=g.rawSplit(h);ie=f.getBestVersionForData(ae,z)}w=g.fromString(h,ie||40)}else throw new Error("Invalid data");const F=f.getBestVersionForData(w,z);if(!F)throw new Error("The amount of data is too big to be stored in a QR Code");if(!I)I=F;else if(I<F)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+F+`.
`);const H=P(I,z,w),G=r.getSymbolSize(I),$=new n(G);return v($,I),S($),T($,I),_($,z,0),I>=7&&b($,I),D($,H),isNaN(E)&&(E=o.getBestMask($,_.bind(null,$,z))),o.applyMask(E,$),_($,z,E),{modules:$,version:I,errorCorrectionLevel:z,maskPattern:E,segments:w}}return Do.create=function(I,z){if(typeof I>"u"||I==="")throw new Error("No input text");let E=e.M,w,F;return typeof z<"u"&&(E=e.from(z.errorCorrectionLevel,e.M),w=f.from(z.version),F=o.from(z.maskPattern),z.toSJISFunc&&r.setToSJISFunction(z.toSJISFunc)),B(I,w,E,F)},Do}var $o={},Jo={},Kf;function Vh(){return Kf||(Kf=1,(function(r){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(s){return[s,s]}))),n.length===6&&n.push("F","F");const i=parseInt(n.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+n.slice(0,6).join("")}}r.getOptions=function(n){n||(n={}),n.color||(n.color={});const i=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,s=n.width&&n.width>=21?n.width:void 0,o=n.scale||4;return{width:s,scale:s?4:o,margin:i,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},r.getScale=function(n,i){return i.width&&i.width>=n+i.margin*2?i.width/(n+i.margin*2):i.scale},r.getImageWidth=function(n,i){const s=r.getScale(n,i);return Math.floor((n+i.margin*2)*s)},r.qrToImageData=function(n,i,s){const o=i.modules.size,c=i.modules.data,u=r.getScale(o,s),f=Math.floor((o+s.margin*2)*u),p=s.margin*u,m=[s.color.light,s.color.dark];for(let g=0;g<f;g++)for(let v=0;v<f;v++){let S=(g*f+v)*4,T=s.color.light;if(g>=p&&v>=p&&g<f-p&&v<f-p){const b=Math.floor((g-p)/u),_=Math.floor((v-p)/u);T=m[c[b*o+_]?1:0]}n[S++]=T.r,n[S++]=T.g,n[S++]=T.b,n[S]=T.a}}})(Jo)),Jo}var Zf;function Oy(){return Zf||(Zf=1,(function(r){const e=Vh();function t(i,s,o){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=o,s.width=o,s.style.height=o+"px",s.style.width=o+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}r.render=function(s,o,c){let u=c,f=o;typeof u>"u"&&(!o||!o.getContext)&&(u=o,o=void 0),o||(f=n()),u=e.getOptions(u);const p=e.getImageWidth(s.modules.size,u),m=f.getContext("2d"),g=m.createImageData(p,p);return e.qrToImageData(g.data,s,u),t(m,f,p),m.putImageData(g,0,0),f},r.renderToDataURL=function(s,o,c){let u=c;typeof u>"u"&&(!o||!o.getContext)&&(u=o,o=void 0),u||(u={});const f=r.render(s,o,u),p=u.type||"image/png",m=u.rendererOpts||{};return f.toDataURL(p,m.quality)}})($o)),$o}var Qo={},$f;function By(){if($f)return Qo;$f=1;const r=Vh();function e(i,s){const o=i.a/255,c=s+'="'+i.hex+'"';return o<1?c+" "+s+'-opacity="'+o.toFixed(2).slice(1)+'"':c}function t(i,s,o){let c=i+s;return typeof o<"u"&&(c+=" "+o),c}function n(i,s,o){let c="",u=0,f=!1,p=0;for(let m=0;m<i.length;m++){const g=Math.floor(m%s),v=Math.floor(m/s);!g&&!f&&(f=!0),i[m]?(p++,m>0&&g>0&&i[m-1]||(c+=f?t("M",g+o,.5+v+o):t("m",u,0),u=0,f=!1),g+1<s&&i[m+1]||(c+=t("h",p),p=0)):u++}return c}return Qo.render=function(s,o,c){const u=r.getOptions(o),f=s.modules.size,p=s.modules.data,m=f+u.margin*2,g=u.color.light.a?"<path "+e(u.color.light,"fill")+' d="M0 0h'+m+"v"+m+'H0z"/>':"",v="<path "+e(u.color.dark,"stroke")+' d="'+n(p,f,u.margin)+'"/>',S='viewBox="0 0 '+m+" "+m+'"',b='<svg xmlns="http://www.w3.org/2000/svg" '+(u.width?'width="'+u.width+'" height="'+u.width+'" ':"")+S+' shape-rendering="crispEdges">'+g+v+`</svg>
`;return typeof c=="function"&&c(null,b),b},Qo}var Jf;function ky(){if(Jf)return Mr;Jf=1;const r=vy(),e=Fy(),t=Oy(),n=By();function i(s,o,c,u,f){const p=[].slice.call(arguments,1),m=p.length,g=typeof p[m-1]=="function";if(!g&&!r())throw new Error("Callback required as last argument");if(g){if(m<2)throw new Error("Too few arguments provided");m===2?(f=c,c=o,o=u=void 0):m===3&&(o.getContext&&typeof f>"u"?(f=u,u=void 0):(f=u,u=c,c=o,o=void 0))}else{if(m<1)throw new Error("Too few arguments provided");return m===1?(c=o,o=u=void 0):m===2&&!o.getContext&&(u=c,c=o,o=void 0),new Promise(function(v,S){try{const T=e.create(c,u);v(s(T,o,u))}catch(T){S(T)}})}try{const v=e.create(c,u);f(null,s(v,o,u))}catch(v){f(v)}}return Mr.create=e.create,Mr.toCanvas=i.bind(null,t.render),Mr.toDataURL=i.bind(null,t.renderToDataURL),Mr.toString=i.bind(null,function(s,o,c){return n.render(s,c)}),Mr}var zy=ky();const Vy=_y(zy);async function Yc(r){document.getElementById("qr-code").src=await Vy.toDataURL(r,{margin:2,color:{dark:"#fe007d",light:"#FFFFFF"}})}async function Qf(){try{const r=await window.VLaunch.getLaunchUrl(window.location.href);await Yc(r),console.log("Launch Code Generated")}catch(r){console.warn("VLaunch failed, falling back to normal QR",r),Yc(window.location.href)}}function Hy(){if(window.VLaunch&&window.VLaunch.initialized){Qf();return}window.addEventListener("vlaunch-initialized",()=>{Qf()}),Yc(window.location.href)}const Gy=10,Wy=1e3,Xy=.1,qy=.006,jy=[1.5,1.15,1.35],Yy=120,Xi={MAX_BUTTONS:Gy,MULTICLICK_TIMEOUT:Wy,MULTICLICK_RATE:Xy,ASTEROID_ROATATION_SPEED:qy,ASTEROID_RADIUS:jy,TARGET_RESOURCES:Yy};function Ky(){const r=new en(new Ea(1,32,32),new Vn({color:65535,wireframe:!0,transparent:!0,opacity:.35}));return r.scale.set(...Xi.ASTEROID_RADIUS),r}function Zy(r){return new Ym(r,16711680)}function $y(r){return new Km(r.ray.direction,r.ray.origin,1,65280)}const Kc=[{title:"Milestone 1",text:"The Psyche spacecraft was launched on Oct 13, 2023, and is expected to arrive there by July 2029."},{title:"Milestone 2",text:"Psyche as big as Massachusetts, 3x as small as Arizona."},{title:"Milestone 3",text:"The Psyche spacecraft uses a solar electric propulsion system, the first of its kind, which emits a cool blue glow while it's launched."},{title:"Milestone 4",text:"The surface gravity on Psyche is much less than it is on Earth; therefore gravity on Psyche makes lifting a car feel like lifting a dog!"},{title:"Milestone 5",text:"It is estimated that 30-60% of Psyche’s volume is metal. "},{title:"M6",text:"TEXT6"}],Jy=[{name:"Manual Drill",cost:20,incrementBy:1,resourcesPerSecond:1},{name:"Crew Manager",cost:50,incrementBy:5,resourcesPerSecond:3}];class Qy{static createButton(e,t={}){const n=document.createElement("button");function i(){if(t.domOverlay===void 0){const g=document.createElement("div");g.style.display="none",document.body.appendChild(g);const v=document.createElementNS("http://www.w3.org/2000/svg","svg");v.setAttribute("width",38),v.setAttribute("height",38),v.style.position="absolute",v.style.right="20px",v.style.top="20px",v.addEventListener("click",function(){f.end()}),g.appendChild(v);const S=document.createElementNS("http://www.w3.org/2000/svg","path");S.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),S.setAttribute("stroke","#fff"),S.setAttribute("stroke-width",2),v.appendChild(S),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:g}}let f=null;async function p(g){g.addEventListener("end",m),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(g),n.textContent="STOP AR",t.domOverlay.root.style.display="",f=g}function m(){f.removeEventListener("end",m),n.textContent="START AR",t.domOverlay.root.style.display="none",f=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){f===null?navigator.xr.requestSession("immersive-ar",t).then(p):(f.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(p).catch(g=>{console.warn(g)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(p).catch(g=>{console.warn(g)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){s(),n.textContent="AR NOT SUPPORTED"}function c(f){s(),console.warn("Exception when trying to call xr.isSessionSupported",f),n.textContent="AR NOT ALLOWED"}function u(f){f.style.position="absolute",f.style.bottom="20px",f.style.padding="12px 6px",f.style.border="1px solid #fff",f.style.borderRadius="4px",f.style.background="rgba(0,0,0,0.1)",f.style.color="#fff",f.style.font="normal 13px sans-serif",f.style.textAlign="center",f.style.opacity="0.5",f.style.outline="none",f.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",u(n),navigator.xr.isSessionSupported("immersive-ar").then(function(f){f?i():o()}).catch(c),n;{const f=document.createElement("a");return window.isSecureContext===!1?(f.href=document.location.href.replace(/^http:/,"https:"),f.innerHTML="WEBXR NEEDS HTTPS"):(f.href="https://immersiveweb.dev/",f.innerHTML="WEBXR NOT AVAILABLE"),f.style.left="calc(50% - 90px)",f.style.width="180px",f.style.textDecoration="none",u(f),f}}}function eb(){return new an(70,window.innerWidth/window.innerHeight,.01,20)}function tb(){const r=new yl(16777215,1);return r.position.set(2,2,2),r}function nb(){const r=new yl(16777215,.5);return r.position.set(-2,-2,-2),r}function ib(r){const e=new Fv({antialias:!0,alpha:!0});return e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),e.xr.enabled=!0,e.xr.addEventListener("sessionstart",r),e}function rb(r){return Qy.createButton(r,{requiredFeatures:["local","hit-test","dom-overlay"],domOverlay:{root:document.querySelector("#overlay")}})}function sb(r,e){const t=r.xr.getController(0);return t.addEventListener("select",e),t}function ab(){const r=new en(new gl(.15,.2,32).rotateX(-Math.PI/2),new Vn);return r.matrixAutoUpdate=!1,r.visible=!1,r}class Hh{constructor(e,t,n=1){this.ON_SELECT_TIME=100,this.ON_SELECT_COLOR=255,this.color=t,this.mesh=new en(e,new Aa({color:t,emissive:t,emissiveIntensity:.6,roughness:.4,metalness:.1})),this.mesh.scale.setScalar(n)}changeColor(e){this.mesh.material.color.set(e),this.mesh.material.emissive.set(e)}onSelect(){setTimeout(()=>{this.changeColor(this.ON_SELECT_COLOR),setTimeout(()=>this.changeColor(this.color),this.ON_SELECT_TIME)},this.ON_SELECT_TIME)}}class ob extends Hh{constructor(){super(new Ea(.15,16,16),10182117,2),this.type="single"}onSelect(){super.onSelect()}}class Gh extends Hh{constructor(){super(new Br(.12,.12,.12),15817252,2),this.type="multi"}onSelect(){super.onSelect()}}function cb(r){return Math.random()<=r?new Gh:new ob}class Wh{constructor(e,t,n,i){this.name=e,this.cost=t,this.incrementBy=n,this.resourcesBySecond=i,this.count=0,this.interval=null}start(){this.interval&&clearInterval(this.interval),this.interval=setInterval(()=>Zc(this.resourcesBySecond*this.count),1e3)}getCount(){return this.count}getTotalCost(){return this.cost+this.incrementBy*this.count}buy(){hb()-this.getTotalCost()>=0&&(Zc(-this.getTotalCost()),this.count++,this.start())}}class lb extends Wh{constructor(){super("1",20,1,1)}buy(){super.buy()}}class ub extends Wh{constructor(){super("2",40,5,3)}buy(){super.buy()}}document.addEventListener("DOMContentLoaded",function(){_t("#hud").hide()});function fb(){_t("#hud").show(),_t("#instructions").hide();let r=0,e=0,t=null,n=[new lb,new ub];function i(){e++,e===60&&(r++,e=0);const s=String(e).padStart(2,"0");_t("#timer").text(`${r}:${s}`)}_t("#start").on("click",function(){t||(t=setInterval(i,1e3))}),_t("#pause").on("click",function(){clearInterval(t),t=null}),Kc.forEach((s,o)=>{_t("#milestones").prepend(`<button class="milestone-buttons locked-milestones" id="${o}"></button>`)}),Jy.forEach((s,o)=>{_t("#upgrade-options").prepend(`<button class="upgrade-button" data-index=${o}>${o}</button>`)}),_t("#upgrade-options").on("click",".upgrade-button",function(){const s=_t(this).data("index");n[s].buy()}),_t("#pop-up").hide(),_t("#upgrade-options").hide(),_t("#pop-up-close-button").on("click",function(){_t("#pop-up").hide()}),_t("#upgrade-trigger").on("click",function(){_t("#upgrade-options").toggle()})}function hb(){return Number(_t("#resources").text())}function Zc(r){const t=Number(_t("#resources").text())+r,n=Xi.TARGET_RESOURCES,i=_t("#milestones").height()/n;_t("#resources").text(t),_t("#milestones-tracker").height(i*Math.min(t,n)),Kc.forEach((s,o)=>{const c=_t(`.milestone-buttons#${o}`),u=n/Kc.length*(o+1),f=c.hasClass("locked-milestones");if(!f)return;const p=()=>{_t("#pop-up-title").text(s.title),_t("#pop-up-text").text(s.text),_t("#pop-up").show()};c.off("click"),t>=u?(c.addClass("unlocked-milestones").removeClass("locked-milestones"),c.on("click",p),f&&p()):c.on("click",()=>{alert(`${u-t} resources away from this milestone!`)})})}function db(){{console.warn("Launchar key missing");return}}async function pb(){try{await db(),console.log("Launchar SDK loaded")}catch(r){console.warn("Launchar SDK failed to load",r)}Hy(),mb()}let eh,va,ri,oi,ya,Ar,sa=null,ec=!1,$c=!1,Vi=[],aa=[],th=!1,Qt,hs=!1;pb();function mb(){"xr"in navigator&&navigator.xr.isSessionSupported("immersive-ar").then(r=>{r&&(_t("#ar-not-supported").hide(),vb(),bb())})}function Xh(r,e){return!!e}function gb(){$c=!1,_t("#tracking-prompt").show()}function xb(){function r(){if(!Xh("Asteroid",Qt))return;Ar.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale);const t=.25;Qt.scale.set(t,t,t),Qt.position.y+=.5,Qt.updateWorldMatrix(!0,!0),ri.add(Qt),hs=!0,Ky(),Zy(Qt)}function e(){function t(){function o(m,g){return m.map(v=>v.mesh).indexOf(g)}let c=0,u=!0;Zc(1);const f=s[0].object,p=Vi[o(Vi,f)];p.onSelect(),p instanceof Gh&&(aa.every(m=>m!==p)?aa.push(p):u=!1,c=Xi.MULTICLICK_TIMEOUT),u&&setTimeout(()=>{Qt.remove(f);const m=o(Vi,f),g=o(aa,f);m>-1&&Vi.splice(m,1),g>-1&&aa.splice(g,1),qh()},c)}const n=new tt;n.identity().extractRotation(ya.matrixWorld);const i=new jm;i.ray.origin.setFromMatrixPosition(ya.matrixWorld),i.ray.direction.set(0,0,-1).applyMatrix4(n),$y(i);const s=i.intersectObjects(Vi.map(o=>o.mesh));`${s.length}`,s.length>0&&t()}hs?e():r()}function _b(){va.aspect=window.innerWidth/window.innerHeight,va.updateProjectionMatrix(),oi.setSize(window.innerWidth,window.innerHeight)}function qh(){if(!Xh("Asteroid",Qt))return!1;const r=cb(Xi.MULTICLICK_RATE),e=r.mesh,[t,n,i]=Xi.ASTEROID_RADIUS,s=new j(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize(),o=new j(s.x*t,s.y*n,s.z*i);return o.addScaledVector(s,-.08),e.position.copy(o),Qt.add(e),Vi.push(r),!0}function vb(){eh=_t("<div>").appendTo("body"),ri=new im,va=eb(),oi=ib(gb),ya=sb(oi,xb),Ar=ab(),ri.add(tb()),ri.add(nb()),ri.add(ya),ri.add(Ar),new Ov().load("psyche.glb",e=>{const t=e.scene,i=new Dn().setFromObject(t).getCenter(new j),s=new Dt;t.position.sub(i),s.add(t),Qt=s}),eh.append(oi.domElement),_t("body").append(rb(oi)),_t(window).on("resize",_b)}function yb(r,e){if(e){const t=oi.xr.getReferenceSpace(),n=oi.xr.getSession();if(ec===!1&&(n.requestReferenceSpace("viewer").then(i=>{n.requestHitTestSource({space:i}).then(s=>{sa=s})}),n.addEventListener("end",()=>{ec=!1,sa=null}),ec=!0),sa){const i=e.getHitTestResults(sa);if(i.length){$c||($c=!0,_t("#tracking-prompt").hide(),_t("#instructions").show());const s=i[0];if(hs||(Ar.visible=!0,Ar.matrix.fromArray(s.getPose(t).transform.matrix)),hs&&!th){fb();for(let o=0;o<Xi.MAX_BUTTONS;o++)qh()&&(th=!0)}}else Ar.visible=!1}}hs&&Qt&&(Qt.rotation.x+=Xi.ASTEROID_ROATATION_SPEED),Vi.forEach(t=>{if(t.mesh){if(t.type==="single"){const n=1+.1*Math.sin(r*.005);t.mesh.scale.setScalar(n)}t.type==="multi"&&(t.mesh.rotation.y+=.03)}}),oi.render(ri,va)}function bb(){oi.setAnimationLoop(yb)}
