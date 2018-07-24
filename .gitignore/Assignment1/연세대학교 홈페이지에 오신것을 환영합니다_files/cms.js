
/* 지니웍스 cms */
window.undefined=window.undefined;Andwise={$:function(el){if(el.jquery){return el}else{return $(el)}}};Andwise.apply=function(o,c,defaults){if(defaults){Andwise.apply(o,defaults)}if(o&&c&&typeof c=='object'){for(var p in c){o[p]=c[p]}}return o};(function(){var idSeed=0,toString=Object.prototype.toString,ua=navigator.userAgent.toLowerCase(),check=function(r){return r.test(ua)},DOC=document,docMode=DOC.documentMode,isStrict=DOC.compatMode=="CSS1Compat",isOpera=check(/opera/),isChrome=check(/\bchrome\b/),isWebKit=check(/webkit/),isSafari=!isChrome&&check(/safari/),isSafari2=isSafari&&check(/applewebkit\/4/),isSafari3=isSafari&&check(/version\/3/),isSafari4=isSafari&&check(/version\/4/),isIE=!isOpera&&check(/msie/),isIE7=isIE&&(check(/msie 7/)||docMode==7),isIE8=isIE&&(check(/msie 8/)&&docMode!=7),isIE9=isIE&&check(/msie 9/),isIE6=isIE&&!isIE7&&!isIE8&&!isIE9,isGecko=!isWebKit&&check(/gecko/),isGecko2=isGecko&&check(/rv:1\.8/),isGecko3=isGecko&&check(/rv:1\.9/),isBorderBox=isIE&&!isStrict,isWindows=check(/windows|win32/),isMac=check(/macintosh|mac os x/),isAir=check(/adobeair/),isLinux=check(/linux/),isSecure=/^https/i.test(window.location.protocol);if(isIE6){try{DOC.execCommand("BackgroundImageCache",false,true)}catch(e){}}Andwise.apply(Andwise,{SSL_SECURE_URL:isSecure&&isIE?'javascript:""':'about:blank',isStrict:isStrict,isSecure:isSecure,isReady:false,enableForcedBoxModel:false,enableGarbageCollector:true,enableListenerCollection:false,enableNestedListenerRemoval:false,USE_NATIVE_JSON:false,applyIf:function(o,c){if(o){for(var p in c){if(!Andwise.isDefined(o[p])){o[p]=c[p]}}}return o},id:function(el,prefix){el=Andwise.getDom(el,true)||{};if(!el.id){el.id=(prefix||"ext-gen")+(++idSeed)}return el.id},extend:function(){var io=function(o){for(var m in o){this[m]=o[m]}};var oc=Object.prototype.constructor;return function(sb,sp,overrides){if(typeof sp=='object'){overrides=sp;sp=sb;sb=overrides.constructor!=oc?overrides.constructor:function(){sp.apply(this,arguments)}}var F=function(){},sbp,spp=sp.prototype;F.prototype=spp;sbp=sb.prototype=new F();sbp.constructor=sb;sb.superclass=spp;if(spp.constructor==oc){spp.constructor=sp}sb.override=function(o){Andwise.override(sb,o)};sbp.superclass=sbp.supr=(function(){return spp});sbp.override=io;Andwise.override(sb,overrides);sb.extend=function(o){return Andwise.extend(sb,o)};return sb}}(),override:function(origclass,overrides){if(overrides){var p=origclass.prototype;Andwise.apply(p,overrides);if(Andwise.isIE&&overrides.hasOwnProperty('toString')){p.toString=overrides.toString}}},namespace:function(){var len1=arguments.length,i=0,len2,j,main,ns,sub,current;for(;i<len1;++i){main=arguments[i];ns=arguments[i].split('.');current=window[ns[0]];if(current===undefined){current=window[ns[0]]={}}sub=ns.slice(1);len2=sub.length;for(j=0;j<len2;++j){current=current[sub[j]]=current[sub[j]]||{}}}return current},urlEncode:function(o,pre){var empty,buf=[],e=encodeURIComponent;Andwise.iterate(o,function(key,item){empty=Andwise.isEmpty(item);Andwise.each(empty?key:item,function(val){buf.push('&',e(key),'=',(!Andwise.isEmpty(val)&&(val!=key||!empty))?(Andwise.isDate(val)?Andwise.encode(val).replace(/"/g,''):e(val)):'')})});if(!pre){buf.shift();pre=''}return pre+buf.join('')},urlDecode:function(string,overwrite){if(Andwise.isEmpty(string)){return{}}var obj={},pairs=string.split('&'),d=decodeURIComponent,name,value;Andwise.each(pairs,function(pair){pair=pair.split('=');name=d(pair[0]);value=d(pair[1]);obj[name]=overwrite||!obj[name]?value:[].concat(obj[name]).concat(value)});return obj},urlAppend:function(url,s){if(!Andwise.isEmpty(s)){return url+(url.indexOf('?')===-1?'?':'&')+s}return url},toArray:function(){return isIE?function(a,i,j,res){res=[];for(var x=0,len=a.length;x<len;x++){res.push(a[x])}return res.slice(i||0,j||res.length)}:function(a,i,j){return Array.prototype.slice.call(a,i||0,j||a.length)}}(),isIterable:function(v){if(Andwise.isArray(v)||v.callee){return true}if(/NodeList|HTMLCollection/.test(toString.call(v))){return true}return((typeof v.nextNode!='undefined'||v.item)&&Andwise.isNumber(v.length))},each:function(array,fn,scope){if(Andwise.isEmpty(array,true)){return}if(!Andwise.isIterable(array)||Andwise.isPrimitive(array)){array=[array]}for(var i=0,len=array.length;i<len;i++){if(fn.call(scope||array[i],array[i],i,array)===false){return i}}},iterate:function(obj,fn,scope){if(Andwise.isEmpty(obj)){return}if(Andwise.isIterable(obj)){Andwise.each(obj,fn,scope);return}else if(typeof obj=='object'){for(var prop in obj){if(obj.hasOwnProperty(prop)){if(fn.call(scope||obj,prop,obj[prop],obj)===false){return}}}}},getDom:function(el,strict){if(!el||!DOC){return null}if(el.dom){return el.dom}else{if(typeof el=='string'){var e=DOC.getElementById(el);if(e&&isIE&&strict){if(el==e.getAttribute('id')){return e}else{return null}}return e}else{return el}}},getBody:function(){return Andwise.get(DOC.body||DOC.documentElement)},getHead:function(){var head;return function(){if(head==undefined){head=Andwise.get(DOC.getElementsByTagName("head")[0])}return head}}(),removeNode:isIE&&!isIE8?function(){var d;return function(n){if(n&&n.tagName!='BODY'){(Andwise.enableNestedListenerRemoval)?Andwise.EventManager.purgeElement(n,true):Andwise.EventManager.removeAll(n);d=d||DOC.createElement('div');d.appendChild(n);d.innerHTML='';delete Andwise.elCache[n.id]}}}():function(n){if(n&&n.parentNode&&n.tagName!='BODY'){(Andwise.enableNestedListenerRemoval)?Andwise.EventManager.purgeElement(n,true):Andwise.EventManager.removeAll(n);n.parentNode.removeChild(n);delete Andwise.elCache[n.id]}},isEmpty:function(v,allowBlank){return v===null||v===undefined||((Andwise.isArray(v)&&!v.length))||(!allowBlank?v==='':false)},isArray:function(v){return toString.apply(v)==='[object Array]'},isDate:function(v){return toString.apply(v)==='[object Date]'},isObject:function(v){return!!v&&Object.prototype.toString.call(v)==='[object Object]'},isPrimitive:function(v){return Andwise.isString(v)||Andwise.isNumber(v)||Andwise.isBoolean(v)},isFunction:function(v){return toString.apply(v)==='[object Function]'},isNumber:function(v){return typeof v==='number'&&isFinite(v)},isString:function(v){return typeof v==='string'},isBoolean:function(v){return typeof v==='boolean'},isElement:function(v){return v?!!v.tagName:false},isDefined:function(v){return typeof v!=='undefined'},isOpera:isOpera,isWebKit:isWebKit,isChrome:isChrome,isSafari:isSafari,isSafari3:isSafari3,isSafari4:isSafari4,isSafari2:isSafari2,isIE:isIE,isIE6:isIE6,isIE7:isIE7,isIE8:isIE8,isIE9:isIE9,isGecko:isGecko,isGecko2:isGecko2,isGecko3:isGecko3,isBorderBox:isBorderBox,isLinux:isLinux,isWindows:isWindows,isMac:isMac,isAir:isAir});Andwise.ns=Andwise.namespace})();Andwise.ns('Andwise.util','Andwise.lib','Andwise.data','Andwise.supports');Andwise.elCache={};Andwise.apply(Function.prototype,{createInterceptor:function(fcn,scope){var method=this;return!Andwise.isFunction(fcn)?this:function(){var me=this,args=arguments;fcn.target=me;fcn.method=method;return(fcn.apply(scope||me||window,args)!==false)?method.apply(me||window,args):null}},createCallback:function(){var args=arguments,method=this;return function(){return method.apply(window,args)}},createDelegate:function(obj,args,appendArgs){var method=this;return function(){var callArgs=args||arguments;if(appendArgs===true){callArgs=Array.prototype.slice.call(arguments,0);callArgs=callArgs.concat(args)}else if(Andwise.isNumber(appendArgs)){callArgs=Array.prototype.slice.call(arguments,0);var applyArgs=[appendArgs,0].concat(args);Array.prototype.splice.apply(callArgs,applyArgs)}return method.apply(obj||window,callArgs)}},defer:function(millis,obj,args,appendArgs){var fn=this.createDelegate(obj,args,appendArgs);if(millis>0){return setTimeout(fn,millis)}fn();return 0}});Andwise.applyIf(String,{format:function(format){var args=Andwise.toArray(arguments,1);return format.replace(/\{(\d+)\}/g,function(m,i){return args[i]})}});Andwise.applyIf(Array.prototype,{indexOf:function(o,from){var len=this.length;from=from||0;from+=(from<0)?len:0;for(;from<len;++from){if(this[from]===o){return from}}return-1},remove:function(o){var index=this.indexOf(o);if(index!=-1){this.splice(index,1)}return this}});
/* jQuery CooQuery Plugin v2 (minified) - http://cooquery.lenonmarcel.com.br/http://www.gnu.org/licenses/gpl.html */
(function($){$.setCookie=function(name,value,options){if(typeof name==='undefined'||typeof value==='undefined')
return false;var str=name+'='+encodeURIComponent(value);if(options.domain)str+='; domain='+options.domain;if(options.path)str+='; path='+options.path;if(options.duration){var date=new Date();date.setTime(date.getTime()+options.duration*24*60*60*1000);str+='; expires='+date.toGMTString();}
if(options.secure)str+='; secure';return document.cookie=str;};$.delCookie=function(name){return $.setCookie(name,'',{duration:-1});};$.readCookie=function(name){var value=document.cookie.match('(?:^|;)\\s*'+name.replace(/([-.*+?^${}()|[\]\/\\])/g,'\\$1')+'=([^;]*)');return(value)?decodeURIComponent(value[1]):null;};$.getCookie=$.readCookie;$.CooQueryVersion='v 2.0';})(jQuery);
/*jquery.event.drag.js ~ v1.5 ~ Copyright (c) 2008, Three Dub Media (http://threedubmedia.com)*/
(function(E){E.fn.drag=function(L,K,J){if(K){this.bind("dragstart",L)}if(J){this.bind("dragend",J)}return !L?this.trigger("drag"):this.bind("drag",K?K:L)};var A=E.event,B=A.special,F=B.drag={not:":input",distance:0,which:1,dragging:false,setup:function(J){J=E.extend({distance:F.distance,which:F.which,not:F.not},J||{});J.distance=I(J.distance);A.add(this,"mousedown",H,J);if(this.attachEvent){this.attachEvent("ondragstart",D)}},teardown:function(){A.remove(this,"mousedown",H);if(this===F.dragging){F.dragging=F.proxy=false}G(this,true);if(this.detachEvent){this.detachEvent("ondragstart",D)}}};B.dragstart=B.dragend={setup:function(){},teardown:function(){}};function H(L){var K=this,J,M=L.data||{};if(M.elem){K=L.dragTarget=M.elem;L.dragProxy=F.proxy||K;L.cursorOffsetX=M.pageX-M.left;L.cursorOffsetY=M.pageY-M.top;L.offsetX=L.pageX-L.cursorOffsetX;L.offsetY=L.pageY-L.cursorOffsetY}else{if(F.dragging||(M.which>0&&L.which!=M.which)||E(L.target).is(M.not)){return }}switch(L.type){case"mousedown":E.extend(M,E(K).offset(),{elem:K,target:L.target,pageX:L.pageX,pageY:L.pageY});A.add(document,"mousemove mouseup",H,M);G(K,false);F.dragging=null;return false;case !F.dragging&&"mousemove":if(I(L.pageX-M.pageX)+I(L.pageY-M.pageY)<M.distance){break}L.target=M.target;J=C(L,"dragstart",K);if(J!==false){F.dragging=K;F.proxy=L.dragProxy=E(J||K)[0]}case"mousemove":if(F.dragging){J=C(L,"drag",K);if(B.drop){B.drop.allowed=(J!==false);B.drop.handler(L)}if(J!==false){break}L.type="mouseup"}case"mouseup":A.remove(document,"mousemove mouseup",H);if(F.dragging){if(B.drop){B.drop.handler(L)}C(L,"dragend",K)}G(K,true);F.dragging=F.proxy=M.elem=false;break}return true}function C(M,K,L){M.type=K;var J=E.event.handle.call(L,M);return J===false?false:J||M.result}function I(J){return Math.pow(J,2)}function D(){return(F.dragging===false)}function G(K,J){if(!K){return }K.unselectable=J?"off":"on";K.onselectstart=function(){return J};if(K.style){K.style.MozUserSelect=J?"":"none"}}})(jQuery);
// drop shadow
(function($){var dropShadowZindex=1;$.fn.dropShadow=function(options){var opt=$.extend({left:4,top:4,blur:2,opacity:.5,color:"black",swap:false},options);var jShadows=$([]);this.not(".dropShadow").each(function(){var jthis=$(this);var shadows=[];var blur=(opt.blur<=0)?0:opt.blur;var opacity=(blur==0)?opt.opacity:opt.opacity/(blur*8);var zOriginal=(opt.swap)?dropShadowZindex:dropShadowZindex+1;var zShadow=(opt.swap)?dropShadowZindex+1:dropShadowZindex;var shadowId;if(this.id){shadowId=this.id+"_dropShadow"}else{shadowId="ds"+(1+Math.floor(9999*Math.random()))}$.data(this,"shadowId",shadowId);$.data(this,"shadowOptions",options);jthis.attr("shadowId",shadowId).css("zIndex",zOriginal);if(jthis.css("position")!="absolute"){jthis.css({position:"relative",zoom:1})}bgColor=jthis.css("backgroundColor");if(bgColor=="rgba(0, 0, 0, 0)")bgColor="transparent";shadows[0]=$("<div></div>").css("background",opt.color);shadows[0].addClass("dropShadow").css({height:jthis.outerHeight(),left:blur,opacity:opacity,position:"absolute",top:blur,width:jthis.outerWidth(),zIndex:zShadow});var layers=(8*blur)+1;for(i=1;i<layers;i++){shadows[i]=shadows[0].clone()}var i=1;var j=blur;while(j>0){shadows[i].css({left:j*2,top:0});shadows[i+1].css({left:j*4,top:j*2});shadows[i+2].css({left:j*2,top:j*4});shadows[i+3].css({left:0,top:j*2});shadows[i+4].css({left:j*3,top:j});shadows[i+5].css({left:j*3,top:j*3});shadows[i+6].css({left:j,top:j*3});shadows[i+7].css({left:j,top:j});i+=8;j--}var divShadow=$("<div></div>").attr("id",shadowId).addClass("dropShadow").css({left:jthis.position().left+opt.left-blur,marginTop:jthis.css("marginTop"),marginRight:jthis.css("marginRight"),marginBottom:jthis.css("marginBottom"),marginLeft:jthis.css("marginLeft"),position:"absolute",top:jthis.position().top+opt.top-blur,zIndex:zShadow});for(i=0;i<layers;i++){divShadow.append(shadows[i])}jthis.after(divShadow);jShadows=jShadows.add(divShadow);$(window).resize(function(){try{divShadow.css({left:jthis.position().left+opt.left-blur,top:jthis.position().top+opt.top-blur})}catch(e){}});dropShadowZindex+=2});return this.pushStack(jShadows)};$.fn.redrawShadow=function(){this.removeShadow();return this.each(function(){var shadowOptions=$.data(this,"shadowOptions");$(this).dropShadow(shadowOptions)})};$.fn.removeShadow=function(){return this.each(function(){var shadowId=$(this).shadowId();$("div#"+shadowId).remove()})};$.fn.shadowId=function(){return $.data(this[0],"shadowId")};$(function(){var noPrint="<style type='text/css' media='print'>";noPrint+=".dropShadow{visibility:hidden;}</style>";$("head").append(noPrint)})})(jQuery);
jQuery.fn.outerHTML = function(s) {  
return (s)  
? this.before(s).remove()  
: jQuery("&lt;p&gt;").append(this.eq(0).clone()).html();  
} 
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64}else if(isNaN(chr3)){enc4=64}output=output+this._keyStr.charAt(enc1)+this._keyStr.charAt(enc2)+this._keyStr.charAt(enc3)+this._keyStr.charAt(enc4)}return output},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2)}if(enc4!=64){output=output+String.fromCharCode(chr3)}}output=Base64._utf8_decode(output);return output},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c)}else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128)}else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128)}}return utftext},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++}else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2}else{c2=utftext.charCodeAt(i+1);c3=utftext.charCodeAt(i+2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3}}return string}}
//fgnass.github.com/spin.js#v1.2.7
!function(e,t,n){function o(e,n){var r=t.createElement(e||"div"),i;for(i in n)r[i]=n[i];return r}function u(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t]);return e}function f(e,t,n,r){var o=["opacity",t,~~(e*100),n,r].join("-"),u=.01+n/r*100,f=Math.max(1-(1-e)/t*(100-u),e),l=s.substring(0,s.indexOf("Animation")).toLowerCase(),c=l&&"-"+l+"-"||"";return i[o]||(a.insertRule("@"+c+"keyframes "+o+"{"+"0%{opacity:"+f+"}"+u+"%{opacity:"+e+"}"+(u+.01)+"%{opacity:1}"+(u+t)%100+"%{opacity:"+e+"}"+"100%{opacity:"+f+"}"+"}",a.cssRules.length),i[o]=1),o}function l(e,t){var i=e.style,s,o;if(i[t]!==n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(o=0;o<r.length;o++){s=r[o]+t;if(i[s]!==n)return s}}function c(e,t){for(var n in t)e.style[l(e,n)||n]=t[n];return e}function h(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)e[i]===n&&(e[i]=r[i])}return e}function p(e){var t={x:e.offsetLeft,y:e.offsetTop};while(e=e.offsetParent)t.x+=e.offsetLeft,t.y+=e.offsetTop;return t}var r=["webkit","Moz","ms","O"],i={},s,a=function(){var e=o("style",{type:"text/css"});return u(t.getElementsByTagName("head")[0],e),e.sheet||e.styleSheet}(),d={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"},v=function m(e){if(!this.spin)return new m(e);this.opts=h(e||{},m.defaults,d)};v.defaults={},h(v.prototype,{spin:function(e){this.stop();var t=this,n=t.opts,r=t.el=c(o(0,{className:n.className}),{position:n.position,width:0,zIndex:n.zIndex}),i=n.radius+n.length+n.width,u,a;e&&(e.insertBefore(r,e.firstChild||null),a=p(e),u=p(r),c(r,{left:(n.left=="auto"?a.x-u.x+(e.offsetWidth>>1):parseInt(n.left,10)+i)+"px",top:(n.top=="auto"?a.y-u.y+(e.offsetHeight>>1):parseInt(n.top,10)+i)+"px"})),r.setAttribute("aria-role","progressbar"),t.lines(r,t.opts);if(!s){var f=0,l=n.fps,h=l/n.speed,d=(1-n.opacity)/(h*n.trail/100),v=h/n.lines;(function m(){f++;for(var e=n.lines;e;e--){var i=Math.max(1-(f+e*v)%h*d,n.opacity);t.opacity(r,n.lines-e,i,n)}t.timeout=t.el&&setTimeout(m,~~(1e3/l))})()}return t},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=n),this},lines:function(e,t){function i(e,r){return c(o(),{position:"absolute",width:t.length+t.width+"px",height:t.width+"px",background:e,boxShadow:r,transformOrigin:"left",transform:"rotate("+~~(360/t.lines*n+t.rotate)+"deg) translate("+t.radius+"px"+",0)",borderRadius:(t.corners*t.width>>1)+"px"})}var n=0,r;for(;n<t.lines;n++)r=c(o(),{position:"absolute",top:1+~(t.width/2)+"px",transform:t.hwaccel?"translate3d(0,0,0)":"",opacity:t.opacity,animation:s&&f(t.opacity,t.trail,n,t.lines)+" "+1/t.speed+"s linear infinite"}),t.shadow&&u(r,c(i("#000","0 0 4px #000"),{top:"2px"})),u(e,u(r,i(t.color,"0 0 1px rgba(0,0,0,.1)")));return e},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}}),function(){function e(e,t){return o("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',t)}var t=c(o("group"),{behavior:"url(#default#VML)"});!l(t,"transform")&&t.adj?(a.addRule(".spin-vml","behavior:url(#default#VML)"),v.prototype.lines=function(t,n){function s(){return c(e("group",{coordsize:i+" "+i,coordorigin:-r+" "+ -r}),{width:i,height:i})}function l(t,i,o){u(a,u(c(s(),{rotation:360/n.lines*t+"deg",left:~~i}),u(c(e("roundrect",{arcsize:n.corners}),{width:r,height:n.width,left:n.radius,top:-n.width>>1,filter:o}),e("fill",{color:n.color,opacity:n.opacity}),e("stroke",{opacity:0}))))}var r=n.length+n.width,i=2*r,o=-(n.width+n.length)*2+"px",a=c(s(),{position:"absolute",top:o,left:o}),f;if(n.shadow)for(f=1;f<=n.lines;f++)l(f,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(f=1;f<=n.lines;f++)l(f);return u(t,a)},v.prototype.opacity=function(e,t,n,r){var i=e.firstChild;r=r.shadow&&r.lines||0,i&&t+r<i.childNodes.length&&(i=i.childNodes[t+r],i=i&&i.firstChild,i=i&&i.firstChild,i&&(i.opacity=n))}):s=l(t,"animation")}(),typeof define=="function"&&define.amd?define(function(){return v}):e.Spinner=v}(window,document);
$.fn.spinStart = function(opts) {  this.each(function() {    var $this = $(this), data = $this.data();    if (data.spinner) {      data.spinner.stop();      delete data.spinner;    }    if (opts !== false) {      data.spinner = new Spinner($.extend({color: $this.css('color')}, opts)).spin(this);    }  });  return this;};
$.fn.spinStop = function(opts) {  this.each(function() {    var $this = $(this), data = $this.data();    if (data.spinner) {      data.spinner.stop();      delete data.spinner;    }  });  return this;};
// $.toJSON $.parseJSON
(function($){var m={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},s={'array':function(x){var a=['['],b,f,i,l=x.length,v;for(i=0;i<l;i+=1){v=x[i];f=s[typeof v];if(f){v=f(v);if(typeof v=='string'){if(b){a[a.length]=','}a[a.length]=v;b=true}}}a[a.length]=']';return a.join('')},'boolean':function(x){return String(x)},'null':function(x){return"null"},'number':function(x){return isFinite(x)?String(x):'null'},'object':function(x){if(x){if(x instanceof Array){return s.array(x)}var a=['{'],b,f,i,v;for(i in x){v=x[i];f=s[typeof v];if(f){v=f(v);if(typeof v=='string'){if(b){a[a.length]=','}a.push(s.string(i),':',v);b=true}}}a[a.length]='}';return a.join('')}return'null'},'string':function(x){if(/["\\\x00-\x1f]/.test(x)){x=x.replace(/([\x00-\x1f\\"])/g,function(a,b){var c=m[b];if(c){return c}c=b.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16)})}return'"'+x+'"'}};$.toJSON=function(v){var f=isNaN(v)?s[typeof v]:s['number'];if(f)return f(v)};$.parseJSON=function(v,safe){if(safe===undefined)safe=$.parseJSON.safe;if(safe&&!/^("(\\.|[^"\\\n\r])*?"|[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t])+?$/.test(v))return undefined;return eval('('+v+')')};$.parseJSON.safe=false})(jQuery);

// $.addclass; $.removeclass
(function(){var rspace=/\s+/,rclass=/[\n\t\r]/g;jQuery.fn.extend({addClass:function(value){var classNames,i,l,elem,setClass,c,cl;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className));jQuery(this).trigger('addclass',value)})}if(value&&typeof value==="string"){classNames=value.split(rspace);for(i=0,l=this.length;i<l;i++){elem=this[i];var jQry=jQuery(elem);if(elem.nodeType===1){if(!elem.className&&classNames.length===1){elem.className=value}else{setClass=" "+elem.className+" ";for(c=0,cl=classNames.length;c<cl;c++){if(!~setClass.indexOf(" "+classNames[c]+" ")){setClass+=classNames[c]+" "}}elem.className=jQuery.trim(setClass)}}jQry.trigger('addclass',value)}}return this},removeClass:function(value){var classNames,i,l,elem,className,c,cl;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className));jQuery(this).trigger('removeclass',value)})}if((value&&typeof value==="string")||value===undefined){classNames=(value||"").split(rspace);for(i=0,l=this.length;i<l;i++){elem=this[i];var jQry=jQuery(elem);if(elem.nodeType===1&&elem.className){if(value){className=(" "+elem.className+" ").replace(rclass," ");for(c=0,cl=classNames.length;c<cl;c++){className=className.replace(" "+classNames[c]+" "," ")}elem.className=jQuery.trim(className)}else{elem.className=""}}}jQuery(this).trigger('removeclass',value)}return this}})})();

App = {};
if(!$.browser) {
	$.browser = (function() {
		var s = navigator.userAgent.toLowerCase();  
		var match = /(webkit)[ \/](\w.]+)/.exec(s) ||
		/(opera)(?:.*version)?[ \/](\w.]+)/.exec(s) ||
		/(msie) ([\w.]+)/.exec(s) ||
		/(mozilla)(?:.*? rv:([\w.]+))?/.exec(s) ||
		[];  
		return { name: match[1] || "", version: match[2] || "0" };	
	}());
}

$.browser.ismobile = (/iphone|ipad|ipod|android|blackberry|symbian|mobi|polaris|iemobile|lgtelecom|nokia|sonyericsson|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));

if(typeof(rootPath) == 'undefined') {
	rootPath = '';  
}

// String prototype -------------------------------------------
String.prototype.encodeURI = function( url ) {
	return encodeURIComponent(this);
}

String.prototype.test = function(regex, params){
	return ((typeof regex == 'string') ? new RegExp(regex, params) : regex).test(this);
}

String.prototype.contains= function(string, separator){
	return (separator) ? (separator + this + separator).indexOf(separator + string + separator) > -1 : this.indexOf(string) > -1;
}

String.prototype.trim= function(){
	return this.replace(/^\s+|\s+$/g, '');
}

String.prototype.clean= function(){
	return this.replace(/\s+/g, ' ').trim();
}

String.prototype.camelCase= function(){
	return this.replace(/-\D/g, function(match){
		return match.charAt(1).toUpperCase();
	});
}

String.prototype.hyphenate= function(){
	return this.replace(/[A-Z]/g, function(match){
		return ('-' + match.charAt(0).toLowerCase());
	});
}

String.prototype.capitalize= function(){
	return this.replace(/\b[a-z]/g, function(match){
		return match.toUpperCase();
	});
}

String.prototype.escapeRegExp= function(){
	return this.replace(/([-.*+?^${}()|[\]\/\\])/g, '\\$1');
}

String.prototype.toInt= function(base){
		return parseInt(this, base || 10);
	}

String.prototype.toFloat= function(){
	return parseFloat(this);
}

String.prototype.hexToRgb= function(array){
	var hex = this.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
	return (hex) ? hex.slice(1).hexToRgb(array) : null;
}

String.prototype.rgbToHex= function(array){
	var rgb = this.match(/\d{1,3}/g);
	return (rgb) ? rgb.rgbToHex(array) : null;
}

String.prototype.stripScripts= function(option){
	var scripts = '';
	var text = this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, function(){
		scripts += arguments[1] + '\n';
		return '';
	});
	if (option === true) $exec(scripts);
	else if ($type(option) == 'function') option(scripts, text);
	return text;
}

String.prototype.htmlEncode = function(){
	return this.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}

String.prototype.htmlDecode = function(){
  return this.replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
}


String.prototype.substitute= function(object, regexp){
	return this.replace(regexp || (/\\?\{([^{}]+)\}/g), function(match, name){
		if (match.charAt(0) == '\\') return match.slice(1);
		return (object[name] != undefined) ? object[name] : '';
	});
}


String.prototype.replaceAll = function(FindString, ReplaceString) {
	if(!FindString) return FindString;
	var SearchIndex = 0;
	var NewString = ""; 
	while (this.indexOf(FindString,SearchIndex) != -1)    {
  	NewString += this.substring(SearchIndex,this.indexOf(FindString,SearchIndex));
  	NewString += ReplaceString;
  	SearchIndex = (this.indexOf(FindString,SearchIndex) + FindString.length);         
 	}
	NewString += this.substring(SearchIndex,this.length);
	return NewString;
}

String.prototype.startsWith = function(compareString) {
	return this.substring(0,compareString.length) == compareString;
}

String.prototype.endsWith = function(compareString) {
	return this.substring(this.length-compareString.length) == compareString;
}

function startsWith(value, compareString) {
	if(typeof(value) != 'string') return false;
	return value.startsWith(compareString);
}

function toCommaString(n) {
  var reg = /(^[+-]?\d+)(\d{3})/;   // 정규식
  n += '';                          // 숫자를 문자열로 변환

  while (reg.test(n))
    n = n.replace(reg, '$1' + ',' + '$2');

  return n;
}


//각종 상수값들
/*
left side quick menu가 윈도우가 작아지는 경우 본문을 가릴 수 있음. 그래서 최소값을 지정.
만약 이 값을 여기서 정의만 되며 변경이 필요하면 user.js에서 변경하여 사용할 것.
*/
var jwxe_left_quick_min_x = 0; // 초기에는 작 잡혀있음
var max_zIndex=100;
var _anchors = [];
//var _scroll_btns = [];
window.jwxe = {};
andwise = {
	popupbtns:{ // 팝업존 가이드 버튼들
	}	
};

//select theme
document.write('<script type="text/javascript" src="'+rootPath+'/_common/js/select/dropkick.1-0.1.js"></script>');

$(function(){
	
	$.body = $(document.body);
	
	//select dropkick
	$('.select-gray').dropkick();
	$('.select-black').dropkick({
			theme: 'black'
	});
});


/*************************************************************
// ie6의 백그라운드 이미지 없어지는 문제 해결책
*************************************************************/
if($.browser.msie && $.browser.version < 7) {
   var head = document.getElementsByTagName("head")[0];
   var css = document.createElement("link");
   
   css.setAttribute("rel", "stylesheet");
   css.setAttribute("type", "text/css");
   css.setAttribute("href",rootPath + "/_common/ie6.css");
   head.appendChild(css); 
}


//*************************************************************
// 배경이미지 오버/아웃
// id, sson_url, sson_over_bg, sson_out_bg, sson_sel_over_bg, sson_sel_out_bg,
// ssoff_url, ssoff_over_bg, ssoff_out_bg, ssoff_sel_over_bg, ssoff_sel_out_bg,
//*************************************************************
function jwxe_changeBgCss(obj,url) {
	
	// 이미지 타입
	//if(!url) return;
	if(obj.get(0).bgObj.imageTag) {	
		if(!url) return;
		obj.get(0).bgObj.imageTag.src = url;
	} else {
		//백그라운드 타입	
		obj.css('background-image','url('+url+')');
	}	
	//$(obj).fadeIn('fast');
}

function jwxe_setMouseOverOut(obj, over_bg, out_bg){
	
	//$(
	//	function() {
			obj.hover(function(){
		  		jwxe_changeBgCss($(this),over_bg);
					
		  });
			obj.focus(function(){
		  		jwxe_changeBgCss($(this),over_bg);
					
		  });
	//	}
	//)
	
	//$(
	//	function() {
			obj.mouseout(function(){
				//if($(this).parents('.jwxe_menu_box2').length == 0)  // tab menu, main menu 는 마우스아웃을 금지
				var jqry = $(this), cls;
				if((cls = jqry.parent().parent().attr('class')) && cls.test(/jwxe_menu_box0|jwxe_menu_box2/) == false ) {// tab menu 는 마우스아웃을 금지
					if(!jqry.get(0).bgObj.select) { // 선택이 되었으면 변동 없음
		  			jwxe_changeBgCss(jqry,out_bg);
					}
				}
		  });
			obj.blur(function(){
				//if($(this).parents('.jwxe_menu_box2').length == 0)  // tab menu 는 마우스아웃을 금지
				var jqry = $(this), cls;
				if((cls = jqry.parent().parent().attr('class')) && cls.test(/jwxe_menu_box0|jwxe_menu_box2/) == false ) {// tab menu 는 마우스아웃을 금지
					if(!jqry.get(0).bgObj.select) { // 선택이 되었으면 변동 없음
			  		jwxe_changeBgCss($(this),out_bg);
					}
				}
		  });
	//	}
	//)
	
	
 }

function jwxe_clearMouseOverOut(obj){
	
	/*	
	obj.unbind('hover');
	obj.unbind('focus');
	obj.unbind('blur');
	obj.unbind('mouseout');
	
	obj.unbind('focus');
	obj.unbind('blur');
	obj.unbind('mouseout');
	obj.unbind('mouseover');
	obj.unbind('mouseenter');
	obj.unbind('mouseleave');
	*/	
	
}


function jwxe_changeBg(obj){
	_anchors.push(obj);
}

function jwxe_expand(a) {
	if(a.next().length > 0) {
		$(a.next().get(0)).css("display","block");
	}
}


function jwxe_bubble_select(el) {
	
	// 메인 메뉴 이면 셀렉트를 취소
	//if(el.parents('[class^="jwxe_menu_box0"]').length > 0 ) return;
	
	// 메인메뉴 버블을  취소
	var pel = el.parentsUntil('.jwxe_menu_box0').parent('.jwxe_menu_box0');
	if(pel.attr('bubble') == 'false') {
		//1번만 취소
		//pel.attr('bubble','true');
		return;
	}
	
	var j, parent = el.parent().parent(), tagName = parent.prop('tagName'), a, className = parent.attr('class');

	// 부모를 펼친다.	
	//while (tagName && tagName.toLowerCase() == "ul" && parent.css("display") == "none" && className != 'jwxe_menu_box0' && className != 'jwxe_menu_box0_relative') {
	while (tagName && tagName.toLowerCase() == "ul" ) {
	
		a = parent.prev();
		
		parent.css("display", "block");
		if(a && (tag = a.prop('tagName')) && tag.toLowerCase() == 'a') {
			
			j = a.get(0); 
			if(j && j.bgObj) {
				
				j.bgObj.select = true;
				jwxe_clearMouseOverOut(a);
				jwxe_changeBGProc(j.bgObj);
			}
		}
		
		parent = a.parent().parent();
		tagName = parent.prop('tagName');
		
	}
	
	// 자식을 펼친다.
	var nxt = el.next();
	
	if(nxt.length > 0 && nxt.prop('tagName').toLowerCase() == 'ul') {
		nxt.css('display','block');		
	}
		
}

function jwxe_set_select( obj ) {
	
	if(!obj) return;
	
	var a, j;
	
	if(typeof(obj) == 'string') {
		a = $('#'+obj);
		j = a.get(0);
	}	else {
		a = $(obj);
		j = obj;
	}
	if(!j.bgObj) {
		var ul;
		//if((ul = a.next()) && ul.length>0 && ul.get(0).tagName.toLowerCase() == 'ul' && (ul.attr('display') || ul.attr('focused'))) {
		if((ul = a.next('ul')) && ul.find('.jw_selected').length > 0 ) {
			ul.css('display','block');
		}
  	return;
  }
	
	j.bgObj.select = true;
	jwxe_clearMouseOverOut(a);
	jwxe_changeBGProc(j.bgObj);

}


function jwxe_changeBGProc(obj) {
	
	var sson_url = obj.sson_url?obj.sson_url:obj.ssoff_url;
	var ssoff_url = obj.ssoff_url;
	var el = $('#'+obj.id);
	
	if(!el.length) return;
	 
	el.get(0).bgObj = obj;
	obj.el = el;
	

	// background 인지 image tg 인지
	obj.imageTag = el.children('img').get(0);

	// 이미 jwxe_bubble_select 에 의하여 지정 되었으면
	if(obj.assinged) {
		jwxe_clearMouseOverOut(el);
	}
	
	// 메인메뉴에 있는 anchor 인지
	
	if(_so_) { 
	
		//if(_thisUrl.indexOf(sson_url) > -1 ) { // session on, selected
		//el.get(0).selectBg = obj.sson_sel_out_bg;
		if(obj.select == true) { // session on, selected
			//var sson_sel_over_bg = obj.sson_sel_over_bg ? obj.sson_sel_over_bg : (obj.ssoff_sel_over_bg?obj.ssoff_sel_over_bg:obj.ssoff_over_bg);
			$( function() { jwxe_bubble_select(el); } );
			if(obj.sson_sel_out_bg) {
				$( function(){
						obj.outBg = obj.sson_sel_out_bg;
						jwxe_changeBgCss(el, obj.sson_sel_out_bg);
					}
				);
				if(obj.sson_sel_over_bg ) {
					obj.outBg = obj.sson_sel_out_bg;
					obj.overBg = obj.sson_sel_over_bg;
					jwxe_setMouseOverOut(el,obj.sson_sel_over_bg,obj.sson_sel_out_bg);
				}	
			} else {
				if(obj.sson_out_bg) {
					$( function() {
							obj.outBg = obj.sson_out_bg;
							jwxe_changeBgCss(el,obj.sson_out_bg);
						}
					)		
					if(obj.sson_over_bg ) {
						obj.outBg = obj.sson_out_bg;
						obj.overBg = obj.sson_over_bg;
						jwxe_setMouseOverOut(el,obj.sson_over_bg,obj.sson_out_bg);
					}	
				} else {
					if(obj.ssoff_sel_out_bg) {
						
						$( function() {
								obj.outBg = obj.ssoff_sel_out_bg;
								jwxe_changeBgCss(el,obj.ssoff_sel_out_bg);
							}
						)		
						
						if(obj.ssoff_sel_over_bg) {
							obj.outBg = obj.ssoff_sel_out_bg;
							obj.overBg = obj.ssoff_sel_over_bg;
							jwxe_setMouseOverOut(el,obj.ssoff_sel_over_bg,obj.ssoff_sel_out_bg);
						}
					} else {
						
						if(obj.ssoff_over_bg && obj.ssoff_out_bg) {
							obj.outBg = obj.ssoff_out_bg;
							obj.overBg = obj.ssoff_out_bg;
							jwxe_setMouseOverOut(el,obj.ssoff_over_bg,obj.ssoff_out_bg);
						}
						
					}
					
				}
			}
			
		}	else {
			if(obj.sson_out_bg) {
				$( function() {
						obj.outBg = obj.sson_out_bg;
						jwxe_changeBgCss(el,obj.sson_out_bg);
					}
				)		
				if(obj.sson_over_bg) {
					obj.outBg = obj.sson_out_bg;
					obj.overBg = obj.sson_over_bg;
					jwxe_setMouseOverOut(el,obj.sson_over_bg,obj.sson_out_bg);
				}	
			} else {
				//if(obj.ssoff_over_bg && obj.ssoff_out_bg) { 
					// 오버만 있으면  가능
				if(obj.ssoff_over_bg) { 
					obj.outBg = obj.ssoff_out_bg;
					obj.overBg = obj.ssoff_over_bg;
					jwxe_setMouseOverOut(el,obj.ssoff_over_bg,obj.ssoff_out_bg);
				}
			}
		}

	} else {

		
		if(obj.select == true) { // session on, selected
			$( function() { jwxe_bubble_select(el); } );
			if(obj.ssoff_sel_out_bg) {
				$( function() {
						obj.outBg = obj.ssoff_sel_out_bg;
						jwxe_changeBgCss(el,obj.ssoff_sel_out_bg);
					}
				)		
				if(obj.ssoff_sel_over_bg) {
					obj.outBg = obj.ssoff_sel_out_bg;
					obj.overBg = obj.ssoff_sel_over_bg;
					jwxe_setMouseOverOut(el,obj.ssoff_sel_over_bg,obj.ssoff_sel_out_bg);
				}
			} else {
				
				if(obj.ssoff_over_bg && obj.ssoff_out_bg) {
					obj.outBg = obj.ssoff_out_bg;
					obj.overBg = obj.ssoff_over_bg;
					jwxe_setMouseOverOut(el,obj.ssoff_over_bg,obj.ssoff_out_bg);
				}
				
			}
		
		}	else {
			//if(obj.ssoff_over_bg && obj.ssoff_out_bg) {
			if(obj.ssoff_over_bg) {
				obj.outBg = obj.ssoff_out_bg;
				obj.overBg = obj.ssoff_over_bg;
				jwxe_setMouseOverOut(el,obj.ssoff_over_bg,obj.ssoff_out_bg);
			}
		}
		
	}
	
	obj.assinged = true;
}

/*************************************************************
// 엥커 마우스 오버/아웃/셀렉트 , 공통
*************************************************************/

$(
	function() {
		
		// 텍스트 라운드 버튼 효과
		$('a.sbtn').mousedown(function() {
			$(this).addClass('hover');
		}).mouseup(function() {
			$(this).removeClass('hover');
		});
		
		var selected = false, key, i, obj, url, objs = [], curUrl = document.location.href, found = false, menu_cd;

		var lastIndex = curUrl.indexOf('?');
		if(lastIndex >= 0)
			curUrl = curUrl.substring(0,lastIndex);
			
		//셀렉트를 판단
		for(i=0; i<_anchors.length; i++) {
			
			obj = _anchors[i];
			
			url = obj.ssoff_url || '';
			
			menu_cd = obj.menu_cd;
			
			if(!menu_cd && (!url || url == '' || url == '#')) continue;

			if(url) {			
				if (_so_) {
					url = obj.sson_url ? obj.sson_url : obj.ssoff_url;
				}
				url = _thisHost + url.trim().replace(_thisHost,'');
				
				lastIndex = url.indexOf('?');
				if(lastIndex >= 0)
					url = url.substring(0,lastIndex);
			}			
			
			
			obj.select = false;
			var tmp;
			if((menu_cd && _cur_menu_cd && menu_cd == _cur_menu_cd) || curUrl == url ) {
				selected = true;
				obj.select = true;
				found = true;
				var item = $('#' + obj.id);
				item.addClass('jw_selected');
				
			} else if(url && curUrl.indexOf(url) > -1) {
				////obj.length = url.length;
				////objs.push( obj );
			}
			
		}

			
		for (i = 0; i < _anchors.length; i++) {
			jwxe_changeBGProc(_anchors[i]);
		}
				
	}
	
)

$(

	/* anchor 커스텀 태그에서 판단한 선택여부를 script에 적용
	 * 
	 */
	
	function() {
		$('a[class~=jw_selected]').each(function() {
				//this.bgObj.select = true;
				var jObj = $(this);
				
				if(this.bgObj && this.bgObj.select == false) {
					
					this.bgObj.select = true;
					
					jwxe_changeBGProc(this.bgObj);
					jwxe_clearMouseOverOut($(this));
				}
				
		}); 
	}
	

)



/*************************************************************
// 밑으로 늘어나는 서브 메뉴 관련
*************************************************************/

var jwxe_menu_box1_click = function( el ) {
		
		var li = $(el).parent();
		var ul = li.parent();
		var objs = ul.children(), a;
		//console.log(li, objs);
		for(var i=0; i<objs.length; i++) {
			var obj = objs[i];
			if(li[0] != obj) {
				//console.log(obj);
				if(obj.children.length > 0 && obj.children[0])
					$(obj.children[0]).next().css("display", "none");
			}	
		}
		
		
  	var next = $(el).next();
  	var tagName = "";
  	if ((tagName = next.prop('tagName')) != null && (tagName.toLowerCase() == "ul")) {
			
  		var dip = next.css("display");
  		if (dip == "none") {
				next.fadeIn('fast');
	  		//next.css('display','block');
  		} else {
				next.fadeOut('fast');
	  		//next.css('display','none');
			}
  	}
		
}


function subMenuClassOverOut( submnu ) {
	
		this.element = submnu;
		// on class 넣어 주기
		this.allLinks = this.element.find('a');
		var self = this;
		 
		this.allLinks.mouseover(function(event) {
			self.onLinkOver.call(self,$(this),event);
		}).mouseout(function(event) {
			self.onLinkOut.call(self,$(this),event);
		});
		
}

subMenuClassOverOut.prototype = {
	onLinkOver: function(a, event, tag) {
		
		if(a.length == 0) return;
		
		a.addClass('over'); 
		a.next('ul').addClass('over');
		a.parentsUntil(this.element).children('ul').prev('a').addClass('over');
		a.parentsUntil(this.element).addClass('over');
		
	},
	
	onLinkOut: function(a, event) {

		if(a.length == 0) return;
		
			a.removeClass('over');
			a.next('ul').removeClass('over');
			a.parent('li').parent('ul').prev('a').removeClass('over');
			a.parentsUntil(this.element).children('ul').prev('a').removeClass('over');
			a.parentsUntil(this.element).removeClass('over');
		
	}
}

$(
	function() {
		
		$('.jwxe_menu_box1').each(function() {
			var submnu = $(this);
			// on class 넣어 주기
			new subMenuClassOverOut(submnu);
		});
		
		$('.jwxe_menu_box1 a').css('position','relative');
		$('.jwxe_menu_box1 .jwxe_menu_box1').each( function() {
			var obj = $(this);
			if(obj.css('position') == 'absolute' && obj.css('left').toInt() == 0 && obj.css('top').toInt() == 0 ) {
				obj.css('position','relative');
			} 
		});
		
		 
		// 링크가 없고 하위가 ul 인것만 클릭 이벤트 생성
		var jwxe_menu_box1_focused = false;
		var jwxe_menu_box1_time;
		var jwxe_menu_box1_keydown = false;
		$('.jwxe_menu_box1 a').each(function(){
			var anchor = $(this);
			var next = anchor.next(), tagName;
			if(next.length > 0) {
				var tagName = next.prop('tagName').toLowerCase();
				var href = anchor.attr('href');
				if(tagName == 'ul' && (href == '' || typeof(href) == 'undefined' || href.substring(0,1) == '#')) {
					anchor.click(function() {
						if(jwxe_menu_box1_focused) {
							jwxe_menu_box1_focused = false;
							return;
						}
		  			jwxe_menu_box1_click( this );
						return false;
					});	
				} else {
					anchor.click(function() {
				    if(jwxe_menu_box1_time) {
				      clearTimeout(jwxe_menu_box1_time);
				    }
				    return true;
				  });
				}      
			}
		});
		
//		if(!$.browser.msie) {
			$(".jwxe_menu_box1 a").keydown(function(e) {
				jwxe_menu_box1_keydown = true;
			});	
		
			$(".jwxe_menu_box1 a").focus(function(e) {
			  	var anchor = $(this);
					jwxe_menu_box1_focused = true;
					var next = anchor.next(), tagName;
					if(next.length > 0 ) {
						if(jwxe_menu_box1_keydown) {
								next.find('.jwxe_menu_box1').css('display','block');
								var tagName = next.get(0).tagName.toLowerCase();
								if(tagName == 'ul') {
									next.fadeIn('fast');
								}	
						} else {
							jwxe_menu_box1_time = setTimeout( function() {
									next.find('.jwxe_menu_box1').css('display','block');
									var tagName = next.get(0).tagName.toLowerCase();
									if(tagName == 'ul') {
										next.fadeIn('fast');
									}	
							},200);
						}
						jwxe_menu_box1_keydown = false;
					}
			});
//		}
		
		
	}
)

/*************************************************************
// 플래시 삽입
*************************************************************/

$(

	function() {

	
		// flash wrapper div의  display:none 를 제거한다
		$('.jwxe_flash').each(function(){

			if(this.style.display == 'none') {
				this.style.display = 'block';
			}
			 
		});
		
	}
	
	

) 

/*************************************************************
// 탭처리
*************************************************************/



/*
$(
	function() {
		$("a[class=jwxe_popup_close_7]").click(
			function() {
				$(this).parent().css("display","none");
				var nm = $(this).attr("name");
				var idx = nm.indexOf("_");
				nm = "/" + nm.substring(0, idx) +"/_popup/" + nm.substring(idx+1);
				$.get(nm);
			}
		);
	}
)
*/
$(
	function() {
		// 버튼 위치 정리		
		$("a[class=jwxe_popup_close]").each(function() {
			var el = $(this);
			el.css({top:(el.parent().height()-24)+'px', left:(el.parent().width()-54)+'px'});
		});
		$("a[class=jwxe_popup_close_1]").each(function() {
			var el = $(this);
			el.css({top:(el.parent().height()-24)+'px', left:(el.parent().width()-168)+'px'});
		});
		$("a[class=jwxe_popup_close_7]").each(function() {
			var el = $(this);
			el.css({top:(el.parent().height()-24)+'px', left:(el.parent().width()-168)+'px'});
		});

	}
)
/*************************************************************
// 설문  처리
*************************************************************/
$(
	function() {
		var vote_objs = $("input[class=jwxe_survey_vote]");
		vote_objs.css("top", (vote_objs.parent().parent().parent().height() - 39) + "px");
		vote_objs.css("left", (vote_objs.parent().parent().parent().width() - 92) + "px");

		var q_objs = $("div[class=jwxe_survey_q]");
		q_objs.css("width", (q_objs.parent().parent().parent().parent().width() - 50) + "px");
		
		var r_objs = $("div[class=jwxe_survey_r]");
		r_objs.css("width", (r_objs.parent().width() - 50) + "px");
	}
)

/*************************************************************
// JWXE_A_MASTER인 경우 처리 Mouse Over, Focus에 반응하는 Layer 관련 Script
*************************************************************/
// 먼저 모두 숨겨준다.
$(
	function() {
		$('.jwxe_a_master').next().css("display","none");
	}
)

$(
	function() {
		$('.jwxe_a_master').focus(
			function() {
				$('.jwxe_a_master').next().css("display","none");
				$('.jwxe_a_master').next().css("z-index", "");
				$(this).next().css("z-index",max_zIndex);
				$(this).next().css("display","block");
				//$(this).next().fadeIn();
			}
		)
	}
)
$(
	function() {
		$('.jwxe_a_master').mouseover(
			function() {
				$('.jwxe_a_master').next().css("display","none");
				$('.jwxe_a_master').next().css("z-index", "");
				$(this).next().css("z-index",max_zIndex);
				$(this).next().css("display","block");
				//$(this).next().fadeIn();
			}
		)
	}
)



/**********************************************************************
// 브라우저에 가로폭이 꽉차는 배경 처리 관련...
**********************************************************************/
// 시작시점에 layout용으로 설정된 DIV 태그에 대해 가상으로 자식 엘리먼트를 추가하고 Background를 설정한다.\
$(
	function() {
		var divs = $("div[class^=lo_]");
		for(var i=0;i<divs.length;i++) {
			var div = $(divs.get(i));
			var inlineStyle = div.attr('style') || '';
			
      if(inlineStyle.test(/background/)) {
				var bg = div.css('background-image');
        var rp = div.css('background-repeat');
				bg = bg.replaceAll('"','');
				if (bg != '' && bg != 'none') {
					var vt = "<div class='JWXE_BG' style='visibility:hidden;display:none;position:absolute;left:0;top:0;height:0;width:0;background:" + bg +" "+ rp +";z-index:-1000;'>&nbsp;</div>";
					div.append(vt);
					div.css("background", "");
				}
			}
		}
	}
)

var onWindowResize = function() {
	var divs = $("div[class=JWXE_BG]");
	for(var i=0;i<divs.length;i++) {
		var div = $(divs.get(i));
		div.css("left", "-" + div.parent().offset().left + "px");
		div.css("width", document.documentElement.clientWidth + "px");
		div.css("height", div.parent().height());
		//alert(div.parent().height());
		div.css("display", "block");
		div.css("visibility", "visible");
	}
}

// 브라우저 크기가 변할 경우 설정된 가상 엘리먼트들의 폭을 변경해준다.
$(
	function() {
		$(window).resize(onWindowResize);
		setTimeout(onWindowResize, 100);
	}
)

/**********************************************************************
// submit 버튼의 value 를 제거한다
**********************************************************************/
$(
	function() {
		$('.jwxe_input_submit').attr("value", "");
	}
)


/**********************************************************************
// 확대/축소/출력 스크립트
**********************************************************************/
var current_zoom = 100;
var jwxe_zoomIn = function() {
  if($.browser.msie){    // IE
  	if($.browser.version >= 8) {
			current_zoom += 10;
  		$("body").children().css("zoom", current_zoom + "%");
		} else {
			current_zoom += 2;
  		$("body *").css("zoom", current_zoom + "%");
			$('div[class$="_left"]').parent().css('width','auto');
		}
    return;
	}	
	alert("표준 브라우저에서의 확대/축소는 브라우저의 기능을 이용합니다.\n화면 확대: 키보드의 control키와 '+'를 동시에 누릅니다.\n화면 축소: 키보드의 control키와 '-'를 동시에 누릅니다.");
}
var jwxe_zoomDef = function() {
  if($.browser.msie){    // IE
  	current_zoom = 100;
  	if($.browser.version >= 8) {
  		$("body").children().css("zoom", "100%");
		} else {
  		$("body *").css("zoom", "100%");
		}
    return;
	}	
	alert("표준 브라우저에서의 확대/축소는 브라우저의 기능을 이용합니다.\n화면 확대: 키보드의 control키와 '+'를 동시에 누릅니다.\n화면 축소: 키보드의 control키와 '-'를 동시에 누릅니다.");
}
var jwxe_zoomOut = function() {
  if($.browser.msie ){    // IE
  	if($.browser.version >= 8) {
	  	current_zoom -= 10;
		
	  	$("body").children().css("zoom", current_zoom + "%");
		} else {
	  	current_zoom -= 2;
	  	$("body *").css("zoom", current_zoom + "%");
		}
    return;
	}	
	alert("표준 브라우저에서의 확대/축소는 브라우저의 기능을 이용합니다.\n화면 확대: 키보드의 control키와 '+'를 동시에 누릅니다.\n화면 축소: 키보드의 control키와 '-'를 동시에 누릅니다.");
}
var jwxe_print = function() {
	
	var max_div;
	if(typeof(printSelector) !== 'undefined') {
		max_div = $(printSelector);
	} else {
		max_div = $('#jwxe_main_content');
	}
	
	if(max_div.length == 0) {
		
		var arr = $('div[class*="lo_"]');
		var max_tb = 0;
	
		for(var i=0;i<arr.length;i++) {
			var emt = $(arr.get(i));
			var tmp_tb = emt.height() * emt.width();
			if(tmp_tb > max_tb) {
				max_tb = tmp_tb;
				max_div = emt;
			}
		}
	}
	
	if(max_div != null) {
		var pf = $('#jwxe_print_form'), link;
		if(pf.length > 0) {
			var links = $('link');
			for(var i=0; i<links.length; i++) {
				link = $('<input type="hidden" name="links"/>');
				link.attr('value',links.get(i).href);
				link.appendTo(pf)
			}
			pf.get(0).contents.value = Base64.encode(max_div.html());
			pf.get(0).submit();
			pf.get(0).contents.value = '';
			pf.find('input[name="links"]').remove();
		}
	}
	
	return false;
	
	/*
	var p = $(this);
	do {
		p = p.parent();
		var cls = p.attr("class")
	} while(!(cls.length > 3 && cls.substring(0,3) == "lo_"));

	var pf = document.getElementById("jwxe_print_form");
	pf.contents.value = p.attr("outerHTML");
	pf.submit();
	*/
}

$(
	function() {
		

		var current_zoom = 1.0;
		var cur_line = 1.2;
		var current_font_step = 0;
		var isInitFont = false;
		
		var jwxe_zoomInFont = function() {
				if(!isInitFont) {
					initFont();
				}
				current_font_step ++;
	  		$("body *").each(function() {
		  		var $this = $(this);
		  		if($this.data('font-size')) {
		  			$this.css("font-size", ($this.data('font-size').toInt()+current_font_step)+ "px");
		  		}
	  		});
		}
		
		var jwxe_zoomDefFont = function() {
				if(!isInitFont) {
					initFont();
				}
				current_font_step = 0;
	  		$("body *").each(function() {
		  		var $this = $(this);
		  		if($this.data('font-size')) {
			  		$this.css("font-size",$this.data('font-size'));
		  		}
	  		});
		}
		var jwxe_zoomOutFont = function() {
				if(!isInitFont) {
					initFont();
				}
				current_font_step --;
	  		$("body *").each(function() {
		  		var $this = $(this);
		  		if($this.data('font-size')) {
			  		$this.css("font-size",($this.data('font-size').toInt()+current_font_step)+ "px");
		  		}
	  		});
		}
		
		var initFont = function() {
				isInitFont = true;
	  		$("body *").each(function() {
		  		var $this = $(this);
		  		$this.data("font-size",$this.css('font-size'));
	  		});
		}
		
		if(typeof(zooInOutMode) == 'undefined' || zooInOutMode == 'screen') {
		
			$("#jwxe_zoomIn").click(jwxe_zoomIn);
			$("#jwxe_zoomOut").click(jwxe_zoomOut);
			$("#jwxe_zoomDef").click(jwxe_zoomDef);
			
		} else {

			$("#jwxe_zoomIn").click(jwxe_zoomInFont);
			$("#jwxe_zoomOut").click(jwxe_zoomOutFont);
			$("#jwxe_zoomDef").click(jwxe_zoomDefFont);
			
		}
		
		var obj = $("#jwxe_print");
		if(obj.length > 0) {
			obj.click(jwxe_print);
			if(!obj.attr('href')) {
				obj.attr({
					'href': rootPath+'/_common/template/print.jsp',
					'title': '새창으로 프린트'
				});
			}
			var str = "<form id='jwxe_print_form' action='"+rootPath+"/_common/template/print.jsp' method='post' target='_blank'>" +
			"<input type='hidden' name='contents' value='123'/>" + 
			"</form>";
			$("body").append(str);
		}
	}
)


/**********************************************************************
// 퀵메뉴 스크립트(상하 스크롤)
**********************************************************************/

$(function(){
	 
  $('.jwxe_quick_menu').each(function() {
      var $this = $(this);
      var max = document.documentElement.scrollHeight || document.body.scrollHeight;
      var orignTop = $this.css('top').toInt();
      var height = $this.height();
      //var userQuickMax = $('.foot_up').offset().top;
    $(window).scroll(function() {
      var mx = typeof(userQuickMax)!='undefined'? userQuickMax: max;
      var offset = $this.offset();
      var top = document.documentElement.scrollTop || document.body.scrollTop;
      if(top  + height > mx ) {
        top = mx - height - orignTop;
      }  
      $this.stop().animate({'top':  top + orignTop },500);
      
      
    });
    
  });
	  
}); 


/**********************************************************************
// 퀵메뉴 스크립트 (상단 고정)
**********************************************************************/

$(function(){
	 
	var _quickSideMenuBox = $('.jwxe_quick_side_menu, .jwxe_quick_right_side_menu');
	
	var _quickSideMenuBoxWidth, _body, _quickRightMinTop;
	
	if(_quickSideMenuBox.length > 0) {
		_quickRightMinTop = _quickSideMenuBox.css('top').toInt();
		_quickSideMenuBoxWidth = _quickSideMenuBox.css('width').toInt();
		_body = $('body');
	}	
	
	var _quickSideChange = function( firstLoading ) {
		var el;
		
		if(_quickSideMenuBox.length <= 0) return;
			
		if ($.browser.safari) {
	  	el =  document.body;
		} else {
	  	el =  document.documentElement;
		}
		
		var top; // = el.scrollTop;
		if(startsWith(_quickSideMenuBox.get(0).className,'jwxe_quick_right_side_menu')) {
			if (el.scrollTop > _quickRightMinTop) {
	  		top = el.scrollTop;
	  	} else {
	  		top = _quickRightMinTop;
			} 	
		} else {
			top = el.scrollTop;
		}
		
		var offsetWidth = el.offsetWidth;
		var left = el.scrollLeft+offsetWidth;//   Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
		
		// 최소값의 적용
		if(left < jwxe_left_quick_min_x)
			left = jwxe_left_quick_min_x;

		if($.browser.msie) {
			left -= 4;
			
			if($.browser.version == 6.0 || el.scrollHeight > el.offsetHeight) {
				if($.browser.version == 6.0 )
					left -= 13;
				else
					left -= 17;
			}
		}
		_quickSideMenuBox.stop();
		_quickSideMenuBox.animate({top: top, left: left - _quickSideMenuBoxWidth}, 400);	 
	}
	
	if(_quickSideMenuBox.length) {
		$(_body.children().get(1)).after(_quickSideMenuBox);
		_quickSideMenuBox.css('z-index',1000);		
	}

	$(window).load(function(){ //윈도우에 스크롤값이 변경될때마다 
		_quickSideChange( true ); 
	});
	
	$(window).scroll(function(){ //윈도우에 스크롤값이 변경될때마다 
			_quickSideChange(); 
	}); 
	
 	var resizeTimer;
	if ($.browser.msie) {
  	window.onresize = function(){
  		clearTimeout(resizeTimer);
  		resizeTimer = setTimeout(_quickSideChange, 100);
  	}
  } else {
		$(window).resize(function() {
			_quickSideChange(); 
		    clearTimeout(resizeTimer); 
		    resizeTimer = setTimeout(_quickSideChange, 100); 
		}); 
	} 
	
	/*	
	var resizeTimer; 
	$(window).resize(function() {
		_quickSideChange(); 
	    clearTimeout(resizeTimer); 
	    resizeTimer = setTimeout(_quickSideChange, 100); 
	});*/ 

	_quickSideChange( true );
	
});

/*
 * 구글맵 로딩 함수
 */
var loadGoogleMap = function( opt ) {
	this.load(opt);
}
loadGoogleMap.prototype = {
		
	load: function(opt) {

		var self = this;
		var dom = document.getElementById(opt.id)

		this.latlng = new google.maps.LatLng(opt.lat, opt.lng);
		
		var options = {
			zoom: opt.zoom,
			center: this.latlng,
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	  }
		
	  this.map = new google.maps.Map(dom , options);
		
		var marker = new google.maps.Marker({
	    position: this.latlng, 
	    map: this.map 
	  });		
	
	
	  this.infowindow = new google.maps.InfoWindow({ 
			content: opt.content,
	    position: this.latlng
	  });
	  this.infowindow.open(this.map);
	
			
		google.maps.event.addListener(marker, "click", function() {
	 		self.infowindow.open(self.map);
	 	});			
	}
		
}



/* 폼 재전송 방지 */
function __jwxeOnSubmit(form) {
	if(form.submitted == true) return false;
	form.submitted = true;
	form.submit();
	return true;
}


function chkEmail(val) {
	var reg = /^[\w\-]+@(?:(?:[\w\-]{2,}\.)+[a-zA-Z]{2,})$/;
	return reg.test(val);	
	
}

function chkTel(val) {
	var reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
	return reg.test(val);	
}

function chkDate(dayStr) {

	var valid = false;
	if(dayStr.search(/\d{4}-(0[1-9]|1[0-2])-([0-3][0-9])/)==0) { 
        var arrDay = dayStr.split("-");
        var year = parseInt(arrDay[0]);
        var month = parseInt(arrDay[1].replace(/^0(\d)/g,"$1"));
        var day = parseInt(arrDay[2].replace(/^0(\d)/g,"$1"));
        var d = new Date(year,month-1,day);
        if(d.getMonth() == month-1 && d.getDate() == day ) 
				valid = true ;
  }
		
  return valid;

}

function chkEmailValid(obj, title, mustInput) {
	
	if(!obj) return true;
	
	if(!obj.value && mustInput == true) {	
		alert(title+' 입력해 주세요');
		obj.focus();
		return false;
	} 
	
	if(obj.value && !chkEmail(obj.value)) {
		alert('이메일 형식이 옳바르지 않습니다.');
		obj.focus();
		return false;
	}
	
	return true;
	
}

function chkNumberValid(obj, title, mustInput) {
	
	if(!obj) return true;
	
	if(!obj.value && (mustInput == true || typeof(mustInput) == 'undefined' )) {	
		alert(title+' 입력해 주세요');
		obj.focus();
		return false;
	} 
	
	if(obj.value) {
		var reg = /\d/;
		if(!reg.test(obj.value)) {	
			alert('숫자만 입력이 가능합니다.');
			obj.focus();
			return false;
		}
	}
	
	return true;
	
}



function chkTelValid(obj, title, mustInput) {
	
	if(!obj) return true;

	if(!obj.value && mustInput) {	
		alert(title+' 입력해 주세요');
		obj.focus();
		return false;
	} 
	
	if(obj.value && !chkTel(obj.value)) {
		alert('연락처 형식이 옳바르지 않습니다. 예) 02-123-1234 또는 011-123-1234');
		obj.focus();
		return false;
	}
	
	return true;
	
}

function chkDateValid(obj, title, mustInput) {

	if(!obj) return true;

	if(!obj.value && mustInput) {	
		alert(title+' 입력해 주세요');
		obj.focus();
		return false;
	} 
	
	if(obj.value && !chkDate(obj.value)) {
		alert('정확한 날짜형식을 입력해 주시기 바랍니다. (예:2010-05-05)');
		obj.focus();
		return false;
	}
	
	return true;
	
}


function chkValid(obj, title, footMsg) {

	if(!obj) return true;

	if(!obj.value) {
		title = title+' 입력 또는 선택해 주세요';
		if(footMsg) {
			title += '\n\n'+footMsg;
		} 	
		alert(title);
		try {
			obj.focus();
		} catch(e) {}
		return false;
	}
	
	return true;
	
}

/*****************************
 * 업로드 파일 종류 체크
 */

function chkFileExt(obj, reg, pass){
	
	var value = obj.value;
	
	if(pass && !value) return true;
	
	return reg.test(value.substring(value.indexOf('.') + 1));
	
}

/*****************************
 * 파일첨부에서 갯수를 선택하면 늘고 줄이기
 */
function initAttach(id, maxCount) {
	$(
		function() {
			var changeAttachSelect = function(value) {
				var cnt = parseInt(value);
				for(var i=1; i<=maxCount; i++ ) {
					var f = $('#file_nm'+i);
					if(i<=cnt) {
						f.parent().css('display','block');
						f.css('display','inline');
					} else {
						f.css('display','none');
						f.attr('value','');
						f.parent().css('display','none');
					}	
					f = $('#image_alt'+i);
					if(f.length > 0) {
						if(i<=cnt) {
							f.css('display','inline');
						} else {
							f.attr('value','');
							f.parent().css('display','none');
						}	
					}
				}	
			};
			
			var dropkick = $('#'+id).data('dropkick');
			if(dropkick) {
				$('#'+id).dropkick({
					change: function($select, value) {
						changeAttachSelect(value)
					}
				});
			} else {
				$('#'+id).change(function() {
					changeAttachSelect(this.value);
				});
			}
		}
	)	
}




/*****************************
 * 달력 초기화
 */
function initCalendar(id, isEmpty){
	$(
		function() {
			var obj;
			
			if(typeof(id) == 'string') {
			 obj = $('#'+id);
			} else {
				obj = id;
			}
			if(!isEmpty) {
				obj.each(function() {
					var item = $(this);
					if(!item.attr("value")) {
						item.attr("value",new Date().getDateString("YYYY-MM-DD"));
					}
				});
			}
			
			obj.datepicker({
				changeMonth: true,
				changeYear: true,
              yearRange: '2009:2020'
			});
		}
	)
	
}


/*****************************
 * 에디터 초기화
 */
function initEditor(id, jsPath, callBack ) {
$(
		function() {
			try {	
			
				var _site_id, con; // = ( (typeof(_thisUrl) !== 'undefined') && _thisUrl.replace(_thisHost,'')), con;
				var	contentsCss = [rootPath+'/_common/cms.css', rootPath+'/_common/_plugin/ckeditor/contents.css'];
				if(typeof(_siteId) != 'undefined') {
				 	_site_id = _siteId;
					contentsCss.push(_reouscePath+'_css/user.css');
				}
			
				var config = {
					customConfig: jsPath,
					contentsCss: contentsCss,
					//resize_enabled:true,
		 			//skin: 'office2003',
					on: {
						instanceReady: function() {
							if(callBack){
								try {
				  				callBack();
				  			} catch(e) {}
							}
							onWindowResize();
						}
					}
				}
	  		CKEDITOR.replace(id, config);
				
			} catch (e) {}		
	
		}
	);
}


		
		/*****************************
		 * 날짜 포맷
		 */
		
		Number.prototype.to2 = function() { return (this > 9 ? "" : "0")+this; };
		Date.MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		Date.DAYS   = ["Sun", "Mon", "Tue", "Wed", "Tur", "Fri", "Sat"];
		Date.prototype.getDateString = function(dateFormat) {
		  var result = "";
		  
		  dateFormat = dateFormat == 8 && "YYYY.MM.DD" ||
		               dateFormat == 6 && "hh:mm:ss" ||
		               dateFormat ||
		               "YYYY.MM.DD hh:mm:ss";
		  for (var i = 0; i < dateFormat.length; i++) {
		    result += dateFormat.indexOf("YYYY", i) == i ? (i+=3, this.getFullYear()                     ) :
		              dateFormat.indexOf("YY",   i) == i ? (i+=1, String(this.getFullYear()).substring(2)) :
		              dateFormat.indexOf("MMM",  i) == i ? (i+=2, Date.MONTHS[this.getMonth()]           ) :
		              dateFormat.indexOf("MM",   i) == i ? (i+=1, (this.getMonth()+1).to2()              ) :
		              dateFormat.indexOf("M",    i) == i ? (      this.getMonth()+1                      ) :
		              dateFormat.indexOf("DDD",  i) == i ? (i+=2, Date.DAYS[this.getDay()]               ) :
		              dateFormat.indexOf("DD",   i) == i ? (i+=1, this.getDate().to2()                   ) :
		              dateFormat.indexOf("D"   , i) == i ? (      this.getDate()                         ) :
		              dateFormat.indexOf("hh",   i) == i ? (i+=1, this.getHours().to2()                  ) :
		              dateFormat.indexOf("h",    i) == i ? (      this.getHours()                        ) :
		              dateFormat.indexOf("mm",   i) == i ? (i+=1, this.getMinutes().to2()                ) :
		              dateFormat.indexOf("m",    i) == i ? (      this.getMinutes()                      ) :
		              dateFormat.indexOf("ss",   i) == i ? (i+=1, this.getSeconds().to2()                ) :
		              dateFormat.indexOf("s",    i) == i ? (      this.getSeconds()                      ) :
		                                                   (dateFormat.charAt(i)                         ) ;
		  }
		  return result;
		};




	function jwxe_popupWindow( url, width, height, target, scrollbars, resizable) {
		var tar = "";
		var properties = "";
		
		if( target ) tar = target;
		if( width ) properties += ", width=" + width;
		if( height ) properties += ", height=" + height;
		if( scrollbars ) properties += ", scrollbars=yes";
		if( resizable ) properties += ", resizable=yes";

		properties = properties.substring(2);

		var win = window.open( url, tar, properties );
		win.focus();

		//return win;
	}

// 개발 모드가 아니면 페이지 전환시 쿠키 삭제	
var forceDevMode = false;
var forceRealMode = false;
if(typeof(developMode) == 'undefined' || developMode == false) {
	
	$(window).unload(function() {
		if(!forceDevMode) {
				$.setCookie( 'develop_preview_mode', 'N', {
					  duration : 0,
					  path : '/',
					  domain : '',
					  secure : false
				});
				$.delCookie('develop_preview_mode');
		}
	});
	
}	else {
	if(developMode == true) {
		// 개발모드이면 페이지 전환시 쿠기 생성
		$(window).unload(function() {
			if(!forceRealMode) {
				$.setCookie( 'develop_preview_mode', 'Y', {
				  duration : 0,
				  path : '/',
				  domain : '',
				  secure : false
				});
			}
		});
	}

}


if(typeof(_edit_content) != 'undefined' && _edit_content) {
	
	var editDivs = [];
	var tmpStart, cStart;
	var trace = {};
	//var _site_id = typeof(_siteId) == 'undefined'?    _thisUrl.replace(_thisHost,'');
	//_site_id = _site_id.substring(1,_site_id.indexOf('/',1));
	
	var _parseDom = function( html ) {
		
		//wrapper.css({display:'none'});
		//$('body').append(wrapper);
		
		//cStart = _findFirst(wrapper);
		
	}

	var _showEditBtn = function(html, onlyMainYn, mainItemKey) {
		
		
		var a = $('<a id="_jwxe_edit_content" style="cursor:pointer;" ><img src="'+rootPath+'/_common/img/btn_edit_content.gif" alt=""/></a>');

		var wrap = $('<div style="padding-top:50px;clear:both;text-align:right;position:relative;z-index:101">').append(a);
		
		// 개발 모드 사용 여부
		if(typeof(_cfgUseDevMode) != 'undefined' && _cfgUseDevMode) {
			var modeNm = '운영';
			if(typeof(developMode) == 'undefined') {
				// 개발모드로 전환 버튼
				var devBtn = $('<a id="_jwxe_dev_mode" style="cursor:pointer;margin-left:10px;" ><img src="'+rootPath+'/_common/img/btn-dev.gif" alt=""/></a>');
				wrap.append(devBtn);
				devBtn.click(function() {
					forceDevMode = true;
					forceRealMode = false;
					$.setCookie( 'develop_preview_mode', 'Y', {
						  duration : 0,
						  path : '/',
						  domain : '',
						  secure : false
					});
					location.href = sysPath+'/proc/call_dev_page.jsp?url=' + encodeURIComponent( location.pathname );
				});
			} else {
				// 운영모드로 전환 버튼
				modeNm = '개발';
				var realBtn = $('<a id="_jwxe_real_mode" style="cursor:pointer;margin-left:10px;" ><img src="'+rootPath+'/_common/img/btn-real.gif" alt=""/></a>');
				realBtn.click(function() {
					forceDevMode = false;
					forceRealMode = true;
					$.setCookie( 'develop_preview_mode', null, {
						  duration : -1,
						  path : '/',
						  domain : '',
						  secure : false
					});
					$.delCookie('develop_preview_mode');
					location.href = sysPath+'/proc/call_preview_page.jsp?url=' + encodeURIComponent( location.pathname );
				});
				wrap.append(realBtn);
			}
		
		}
		var body = $('body');
		body.append(wrap);
		
		
		a.click(function(e){
			
			e.preventDefault();

			if(editDivs.length > 0) {
				for(var i=0; i<editDivs.length; i++) {
					editDivs[i].remove();
				}
				editDivs = [];
				$('.jwxe_root').fadeTo('fast',1);
				$(a.children()).attr('src',rootPath+'/_common/img/btn_edit_content.gif');
				return;
				
			}

			
			var _cntItem = body.find( 'Y' == onlyMainYn ? '#jwxe_main_content' : '[class^="lo_"]')  ;
			var wrapper = $('<div>'+html+'</div>');
			var tmpItem = wrapper.find( 'Y' == onlyMainYn ? '#jwxe_main_content' : '[class^="lo_"]')  ;
						
			for(var i=0; i<tmpItem.length; i++ ) {
				
				var tmp = $(tmpItem.get(i));
				
				//console.log(tmp);
				if(tmp.attr('board_id') || !tmp.attr('item')) continue;

				try {
					var content = $(_cntItem.get(i));
				} catch(e) {
					continue;
				} 
				 
				var root = content.find('.jwxe_root');
				if(root.length == 0) continue;
				
				root = $(root.get(0));
				root.fadeTo('fast',.5);
				root.css('cursor','pointer');
				
				var href = sysPath+'/jwxe.jsp?_site='+_siteId+'&_edit=Y&_key='+encodeURIComponent(tmp.attr('item'))
				+(typeof(developMode) != 'undefined' && developMode == true ? '&developMode=Y': '');
				
				var btn = $('<a title="아이템 편집" href="'+href+'" target="'+tmp.attr('item')+'"><img src="'+rootPath+'/_common/img/tick-button.png" alt=""/></a>');
				btn.css({
					cursor: 'pointer',
					position: 'absolute',
					right: 0,
					top: parseInt((root.height() /2)-16)+'px', 
					bottom: 0,
					'z-index': 10000
				});
				btn.mouseenter(function() {
					$(this).parent().fadeTo('fast',1);
				});
				btn.mouseleave(function() {
					$(this).parent().fadeTo('fast',.5);
				});
				root.append(btn);
				editDivs.push(btn);
				
				
				var west = $('<div></div>');
				west.css({
					position: 'absolute',
					'border-left': '1px dotted blue',
					top: 0,
					left: 0,
					width: '1px',
					height: '100%'
				});
				root.append(west);
				editDivs.push(west);

				var north = $('<div></div>');
				north.css({
					position: 'absolute',
					'border-top': '1px dotted blue',
					top: 0,
					left: 0,
					height: '1px',
					width: '100%'
				});
				
				root.append(north);
				editDivs.push(north);

				var east = $('<div></div>');
				east.css({
					position: 'absolute',
					'border-right': '1px dotted blue',
					top: 0,
					right: 0,
					width: '1px',
					height: '100%'
				});
				
				root.append(east);
				editDivs.push(east);

				var south = $('<div></div>');
				south.css({
					position: 'absolute',
					'border-bottom': '1px dotted blue',
					left: 0,
					bottom: 0,
					height: '1px',
					width: '100%'
				});
				
				root.append(south);
				editDivs.push(south);
				
			}
			
			wrapper.remove();
			
			if(editDivs.length == 0) {
				if(mainItemKey) {
					window.open( sysPath + "/jwxe.jsp?_edit=Y&_site="+ _siteId +"&_key="+ mainItemKey );
				} else {
					alert('편집 가능한 컨텐츠가 존재하지 않습니다.\n페이지 관리에서 편집할 컨텐츠를 메인컨텐츠를 지정하세요');
				}
				return false;
			}
			
			
			$(a.children()).attr('src',rootPath+'/_common/img/btn_edit_cancel.gif');

			return false;
		});
				
	}
	
	$(function() {
		
		
		if(typeof(front_page_edit) == 'undefined' || front_page_edit == false) return;
		
		var _key = location.pathname;
		if (_key.endsWith('.jsp') ) {
			_key = _key.substring(0, _key.lastIndexOf('.jsp') + 4);
		} else if (_key.endsWith('.do')) {
			_key = _key + ".jsp";
		} else {
			_key = _key+'index.jsp';
		} 
		
		
		
		$.ajax({
			url: rootPath + '/_common/jsp/auth/check_edit_auth.jsp?dc='+new Date().getTime(),
			data: {
				_key: _key
			},
			dataType: 'json',
			success: function(data) {
				if(typeof(data.success) != 'undefined' && data.success == true) {

					sysPath = data.path;

					_showEditBtn(data.html, data.only_main_yn || 'N', data.main_item );
				}
			}
		});
		
	})
}


function jwxeKeyPress(evt, callBack) {
	
	evt = (evt) ? evt : (window.event) ? event : null;
  if (evt)
  {
    var charCode = (evt.charCode) ? evt.charCode :((evt.keyCode) ? evt.keyCode :((evt.which) ? evt.which : 0));
    if (charCode == 13) {
			callBack();
		}
  }	
	
} 




/*************************************************************
// 팝업코드 처리
*************************************************************/

$(
	function() {
		
		// 복사된 팝업의 아이디 정리
		if(typeof(_siteId) !== 'undefined') {
			$('a[class^=jwxe_popup_close_]').each(function() {
				var name = $(this).attr('name');
				name = _siteId + '_' + name.substring( name.indexOf('1') );
				$(this).attr('name',name);
			});
		}

		var popups = $(".jwxe_popup");
		
		if(popups.length > 0) {

			popups.css({'z-index':1001,'cursor':'move'});
			
			var w = 0;
			var left = 0;
			/*
			var divs = $("div[class^=lo_]");
			if(divs.length > 0) {
				w = parseInt($(divs[0]).css("width"));
				left = $(divs[0]).position().left;
			} else {
				w = 1000;
			}*/
			
			
			if ($.browser.safari) {
		  	el =  document.body;
			} else {
		  	el =  document.documentElement;
			}
			w = el.offsetWidth;
			
			var sw = 0;
			for (var i = 0; i < popups.length; i++) {
				popups[i] = $(popups[i]);
				sw += popups[i].width()+20;
			}

			
			left = (parseInt((w-sw)/2) );
			if(left < 0) left = 0;
			
			// 팝업의 초기 위치 user.js
			left = typeof(user_popup_left) == 'undefined' ? left: user_popup_left;
			var top = typeof(user_popup_top) == 'undefined' ? 150: user_popup_top;
			
			for(var i=0;i<popups.length;i++) {
				var p = popups[i];
				var wrap = p.parent();
				// 새창 팝업은 스킵
				if(wrap.hasClass('popup-window')) {
					continue;
				}
				
				
				if(wrap.hasClass('popup-wrap')) {
					left = wrap.css('left').toInt();
					top = wrap.css('top').toInt();
					p.unwrap();
				} else
				if(i!=0) {
					left += (popups[i-1].width())+20;
				}
				
				p.css("left", left + "px") 
				p.css("top", top+"px");
			}

				// 그림자
			for(var i=0; i<popups.length; i++) {			
				if(popups.get(i).parent().hasClass('popup-window')) {
					popups.get(i).css('visibility','visible');
					continue;
				}
				
				// 새창 팝업은 스킵
				var drs = popups.get(i).dropShadow({left: 4, top: 4, blur: 1, color:'#787878'});
				//drs.removeClass('jwxe_popup');
				// 드래그
				popups.get(i).bind('drag',function( event ){
					if(typeof(user_popup_drag_disable) == 'undefined' || user_popup_drag_disable == false) {
						$( this ).css({
							top: event.offsetY,
							left: event.offsetX
							});
						$( this ).next('.dropShadow').css({
							top: event.offsetY,
							left: event.offsetX
						});
					}
				});
				popups.get(i).css('visibility','visible');
			}
		}
		
		$("a[class=jwxe_popup_close]").click(
			function() {
				if($(this).parent('.jwxe_popup').parent().hasClass('popup-window')) {
					// 새창
					self.close();
				} else {
					// 레이어
					var parent = $(this).parent('.jwxe_popup');
					parent.next('.dropShadow').remove(); // 그림자 지운다
					parent.remove();
					/*
					var parent = $(this).parent();
					parent.css("display","none");
					parent.next('.dropShadow').css('display','none'); // 그림자도 지운다
					return false;*/
				}
				return false;
			}
		);
	
		$("a[class=jwxe_popup_close_7]").click(
			function() {
				/*
				var parent = $(this).parent();
				parent.css("display","none");
				parent.next('.dropShadow').css('display','none'); // 그림자도 지운다
				*/
			
				var nm = $(this).attr("name");

				$.setCookie( nm, 'true', {
				  duration : 7, // In days
				  path : '/',
				  domain : '',
				  secure : false
				});

				if($(this).parent('.jwxe_popup').parent().hasClass('popup-window')) {
					// 새창
					self.close();
				} else {
				  // 레이어
					var parent = $(this).parent('.jwxe_popup');
					parent.next('.dropShadow').remove(); // 그림자 지운다
					parent.remove();
					
				}
				
				return false;
				//console.log($.readCookie(nm));			
			}
		);

		$("a[class=jwxe_popup_close_1]").click(
			function() {
				/*
				var parent = $(this).parent();
				parent.css("display","none");
				parent.next('.dropShadow').css('display','none'); // 그림자도 지운다
				*/
				
				var nm = $(this).attr("name");
				
				$.setCookie( nm, 'true', {
				  duration : 1, // In days
				  path : '/',
				  domain : '',
				  secure : false
				});
				
				if($(this).parent('.jwxe_popup').parent().hasClass('popup-window')) {
					// 새창
					self.close();
				} else {
					// 레이어
					var parent = $(this).parent('.jwxe_popup');
					parent.next('.dropShadow').remove(); // 그림자 지운다
					parent.remove();
				}
				
				return false;
				//console.log($.readCookie(nm));			
			}
		);
		
	}
	
)

$(function(){
		$(".jwxe_popup").css({'z-index':1001,'cursor':'move'});
	
})


/**
 * 추천 / 반대
 */
function recommend(obj,article_no,mode) {
	
		$.ajax({
			url: rootPath+'/_common/jsp/recommend/set_point.jsp?dc='+new Date().getTime(),
			data: {
				mode: mode,
				article_no: article_no
			},
			dataType: 'json',
			success: function(data) {
				if(typeof(data.success) != 'undefined') {
					if (data.success == true) {
		  			$(obj).html('<em>' + data.cnt + '</em>');
		  		} else {
						if(data.msg) {
							alert(data.msg);
						}
					}
				} 
			}
		});
	
}

function drawNaverMap(id, pointX, pointY, width, height, detail ){

	var oPoint = new nhn.api.map.LatLng(pointX, pointY);
	nhn.api.map.setDefaultPoint('LatLng');
	var oMap = new nhn.api.map.Map(id, {
		point: oPoint,
		zoom: 10,
		enableWheelZoom: true,
		enableDragPan: true,
		enableDblClickZoom: false,
		mapMode: 0,
		activateTrafficMap: false,
		activateBicycleMap: false,
		minMaxLevel: [1, 14],
		size: new nhn.api.map.Size(width, height)
	});
	
	var oSize = new nhn.api.map.Size(28, 37);
	var oOffset = new nhn.api.map.Size(14, 37);
	var oIcon = new nhn.api.map.Icon('http://static.naver.com/maps2/icons/pin_spot2.png', oSize, oOffset);

	var oMarker = new nhn.api.map.Marker(oIcon, { title : '' });
	oMarker.setPoint(oPoint);
	oMap.addOverlay(oMarker);
	
	if(detail == true) {
		
		var mapZoom = new nhn.api.map.ZoomControl();
		mapZoom.setPosition({left:10, top:10}); 
		oMap.addControl(mapZoom);
		
		var mapTypeChangeButton = new nhn.api.map.MapTypeBtn(); // - 지도 타입 버튼 선언
		 mapTypeChangeButton.setPosition({top:10, left:50}); // - 지도 타입 버튼 위치 지정
		 oMap.addControl(mapTypeChangeButton);

		
	}
	
}

function loadCSS(url) {
   var head = document.getElementsByTagName("head")[0];
   var css = document.createElement("link");
   
   css.setAttribute("rel", "stylesheet");
   css.setAttribute("type", "text/css");
   css.setAttribute("href",url);
   head.appendChild(css); 
}
function loadJavascript(url, callback, charset) {

		$.ajaxSetup({async:false, cache: true});
		$.getScript(url, callback);
		$.ajaxSetup({async:true, cache: false});
	
}

/**
 * 게시판에서 youtube 사용
 * class="jwxe-youtubue src"
 */
var youtubeGen = function(){
	
	$('.jwxe-youtube').each(function() {
		var item = $(this), style = item.attr('style');
		var isWidth = style && style.indexOf('width') > -1;
		var width = (isWidth? item.css('width').toInt():560);
		var height = (isWidth? item.css('height').toInt():315);
		
		var center = style && style.indexOf('margin') > -1 && style.indexOf('auto') > -1;
		var src = item.attr('class');
		src = src.substring(src.indexOf(' ')+1);
		if(src) {
			var html = (center?'<center>':'')+'<iframe title="유투브 동영상" align="center" width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+src+'?wmode=transparent" frameborder="0" allowfullscreen';
			html += '></iframe>'+(center?'</center>':'');
			item.outerHTML(html);
		}		
	});

}

$(function(){
	youtubeGen();
});


/*
$(function() {
	// https 제거
	if(typeof(_thisHost) == 'undefined') return;
	
  var _thisScheme = _thisHost.substring(0,_thisHost.indexOf('/')-1);
  if(_thisScheme != 'https') return;
  var _thisDomain = _thisHost.substring(_thisHost.lastIndexOf('/')+1);
	if(_thisDomain.indexOf(':') > -1) {
		_thisDomain = _thisDomain.substring(0,_thisDomain.indexOf(':'));
	}
  $('a').each(function() {  
    var item = $(this);
    var href = item.attr('href');
    if(!href) return;
    if(!href.startsWith('https')) {      
        return;
    }
    item.attr('href','http://'+_thisDomain+href);
  });  
});
*/

Andwise.ns('Andwise.app');

/**
 * validator 유효성 검사 클래스
 * 
 * 엘리먼트의 class 에 jwvalid 로 시작한다.
 * jwvalid-xxxx 					-> xxx는 정규식 비교 ex) 								jwvalid-must-name
 * jwvalid-xxxx-yyyy 			-> yyyy 는 타이틀 (이름은, 나이는, ...)  	jwvalid-num-tel
 * jwvalid-xxxx-yyyy-zzz 	-> zzz 는 변수 	jwvalid-min-tel-4
 */

Andwise.app.Validator = function( $form ) {

	if($form && !$form.jquery) {
		$form = $($form);
	}
	
	if($form) {
		this.items = $form.find('input[class*="jwvalid-"],select[class*="jwvalid-"],textarea[class*="jwvalid-"]');
	} else {
		this.items = $('input[class*="jwvalid-"],select[class*="jwvalid-"],textarea[class*="jwvalid-"]');
	}
	
}


/**
 * must: 필수입력
 * min: 최소 길이 제한
 * max: 최대 길이 제한
 * len: 길이가 반드시 일치
 * a0: 영문,숫자가 반드시 포함
 * a0s: 영문,숫자,특수문자가 반드시 포함
 * aA0s: 영문소, 영문대, 숫자, 특수문자가 반드시 포함
 * mail: 메일형식 검사 (abc@abc.com)
 * mailtail : 메일형식 중 도메인만 검사 (abc.com)
 * tel: 전화번호 형식과 일치 (02-123-1234)
 * mobile: 휴대폰번호 형식과 일치 (011-123-1234)
 * zipcode: 우편번호 형식과 일치 (123-123)
 * num: 숫자 입력만 가능
 * date: 날짜 형식과 일치 yyyy-mm-dd 
 *  
 * addTitle( key, title)  // 정의되지 않은 타이틀을 추가한다.
 * 
 * .pwd-chk 클래스가 있는 input 는 (모바일,전화번호) 비밀번호와 비교 
 * ex)
 * function onSubmit() {
 * 	var validator = new Andwise.app.Validator();
 * 	validator.addTitle('cpwd','현재 비밀번호');
 * 	validator.addTitle('npwd','변경할 비밀번호');
 * 	return validator.valid();
 * }
 * 
 */

$(function() {
	
	$('form.jw-form-valid').each(function() {
		
		var $this = $(this);
		$this.submit(function() {
			var validator = new Andwise.app.Validator($this);
			return validator.valid();
		});
	});
	
});
Andwise.app.Validator.prototype = {
	
	regex: {
		// 필수입력  ex) jwvalid-must-id
		must: {
			hanTail: ['은','는'],
			msg: function() { return '필수 입력 항목 입니다.'; }, 
			valid: function(val) { return val && val.length > 0 ? true: false; } 
		},
		// 최소 입력 ex) jwvalid-min-id-5
		min: {
			hanTail: ['의','의'],
			msg: function() { return ' 길이는 '+this.len+'자 이상 이어야 합니다.'; },
			len: 0,
			valid: function(val, len ) { if(!val) return true; this.len = len; return val && val.length >= this.len  ? true: false; } 
		},
		// 최대 입력 ex) jwvalid-max-name-16
		max: {
			hanTail: ['의','의'],
			msg: function() { return ' 길이는 '+this.len+'자 이하만 가능합니다.'; },
			len: 0,
			valid: function(val, len ) { if(!val) return true; this.len = len; return val && val.length <= this.len  ? true: false; } 
		},
		// 길이가 일치
		len: {
			hanTail: ['의','의'],
			msg: function() { return ' 길이는 '+this.len+'자 이어야 합니다.'; },
			len: 0,
			valid: function(val, len ) { if(!val) return true; this.len = len; return val && val.length == this.len  ? true: false; } 
		},
		// 영어 숫자 조합
		a0: {
			hanTail: ['은','는'],
			msg: function() { return '영어와 숫자가 모두 포함되어야 합니다.'; },
			valid: function(val) {
				if(!val) return true;
				return /^(?=.*\d)(?=.*[a-zA-Z]).+$/.test(val);
			}
		},
		// 영어,숫자,특수문자 조합
		a0s: {
			hanTail: ['은','는'],
			msg: function() { return '영어, 숫자, 특수문자가 모두 포함되어야 합니다.'; },
			valid: function(val) {
				if(!val) return true;
				return /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^0-9a-zA-Z]).+$/.test(val);
			}
		},
		// 영어 대문자, 영어 소문자 ,숫자,특수문자 조합
		aA0s: {
			hanTail: ['은','는'],
			msg: function() { return '영어 소문자, 영어 대문자 ,숫자, 특수문자가 모두 포함되어야 합니다.'; },
			valid: function(val) {
				if(!val) return true;
				return /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^0-9a-zA-Z]).+$/.test(val);
			}
		},
		// 이메일 
		mail: {
			hanTail: ['의','의'],
			msg: function() { return '형식에 맞지 않습니다. 예) abc@abc.com'; },
			valid: function(val) {
				if(!val) return true;
				return /^[_a-zA-Z0-9\.\-]+@[\._a-zA-Z0-9\-]+\.[a-zA-Z]{2,}/.test(val);
			}
			
		},
		// 이메일 도메인
		emaildomain: {

			hanTail: ['의','의'],
			msg: function() { return '형식에 맞지 않습니다. 예) abc.com'; },
			valid: function(val) {
				if(!val) return true;
				return /^[\._a-zA-Z0-9\-]+\.[a-zA-Z]{2,}$/.test(val);
			}
			
		},
		// 사업자 등록번호
		saupno: {
			hanTail: ['의','의'],
			msg: function() { return '형식에 맞지 않습니다. 예) 123-12-12345'; },
			valid: function(val) {
				if(!val) return true;
				return /^[0-9]{3}\-[0-9]{2}\-[0-9]{5}$/.test(val);
			}
			
		},
		
		// 이메일 뒷부분만 체크 
		mailtail: {
			hanTail: ['',''],
			msg: function() { return '형식에 맞지 않습니다. 아이디와 @을 제외하고 입력하세요 예) abc.com'; },
			valid: function(val) {
				if(!val) return true;
				return /^[\._a-zA-Z0-9\-]+\.[a-zA-Z]{2,}/.test(val);
			}
			
		},
		// 전화번호 체크 
		tel: {
			hanTail: ['',''],
			msg: function() { return '형식에 맞지 않습니다. 예) 02-123-1234 또는 010-123-1234'; },
			valid: function(val) {
				if(!val) return true;
				return /^0[0-9]{1,2}-[0-9]{3,4}-[0-9]{4}$/.test(val);
			}
			
		},
		// 휴대폰번호 체크 
		mobile: {
			hanTail: ['',''],
			msg: function() { return '형식에 맞지 않습니다. 예) 010-123-1234'; },
			valid: function(val) {
				if(!val) return true;
				return /^01[0-9]-[0-9]{3,4}-[0-9]{4}$/.test(val);
			}
			
		},
		// 숫자만 가능
		num: {
			hanTail: ['은','는'],
			msg: function() { return '숫자만 입력이 가능합니다.'; },
			valid: function(val) {
				if(!val) return true;
				return /^[0-9]+$/.test(val);
			}
			
		},
		// 우편번호
		zipcode: {
			hanTail: ['',''],
			msg: function() { return '형식에 맞지 않습니다. 예) 123-123'; },
			valid: function(val) {
				if(!val) return true;
				return /^[0-9]{3}-[0-9]{3}$/.test(val);
			}
			
		} ,
		imgfile: {
			hanTail: ['은','는'],
			msg: function() { return '이미지 파일만 업로드가 가능합니다. (gif, bmp, png, jpg, jpeg)'},
			valid: function(val) {
				if(!val) return true;
				return /\.(png|bmp|jpg|gif)$/i.test(val);
			}
		},
		xlsfile: {
			hanTail: ['은','는'],
			msg: function() { return '엑셀 파일만 업로드가 가능합니다. (xls)'},
			valid: function(val) {
				if(!val) return true;
				return /\.xls$/i.test(val);
			}
		},
		// 날짜형식
		date: {
			hanTail: ['의','의'],
			msg: function() { return '형식이 날짜 형식에 맞지 않습니다. 예) 2013-05-05'; },
			valid: function(val) {
				if(!val) return true;
				return /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/.test(val);
			}
			
		}, 
		url: {
			hanTail: ['은','는'],
			msg: function() { return 'URL 형식이 맞지 않습니다. http:// 를 포함하여 정확한 주소를 입력 해 주세요'; },
			valid: function(val) {
				if(!val) return true;
				return /^((http(s?))\:\/\/)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?$/.test(val);
			}
			
		}, 
		// 지정한 값보다 작거나 같아야함
		// 예) 날짜 범위에서 시작일이 종료일 보다 클경우
		// jwvalid-less-startdt-enddt
		less: {
			hanTail: ['은','는'],
			msg: function() { return ' 종료 보다 클 수 없습니다.;' },
			valid: function( val, targetName, $this ) {
				
				if(val > $('[name='+targetName+']').val()) {
					return false;
				}
				
				return true;
				
			}
			
		},
		// 지정한 값보다 크거나 같아야함
		// 예) 날짜 범위에서 시작일이 종료일 보다 클경우
		// jwvalid-less-startdt-enddt
		greater: {
			hanTail: ['은','는'],
			msg: function() { return ' 시작 보다 작을 수 없습니다.;' },
			valid: function( val, targetName, $this ) {
				
				if(val < $('[name='+targetName+']').val()) {
					return false;
				}
				
				return true;
				
			}
			
		},
		// 안전한 비밀번호 
		// .pwd-chk 클래스가 있는 input 는 (모바일,전화번호) 비밀번호와 비교 
		pwd: {
			hanTail: ['은','는'],
			msg: function() { return this.message; },
			len: 0,
			valid: function(val, len, $this ) {
				var retv = true;
				this.message = '동일한 문자가 연속으로 3회이상 들어갈 수 없습니다.';
				for(var i=0; i<val.length; i++) {
					var sub = val.substring(i);
					if(sub.length < 3) {
						retv = true;
						break;
					}
					var ch = sub.substring(0,1);
					if(sub.substring(1,2) == ch && sub.substring(2,3) == ch) {
						retv = false;
						break;
					}
				}
				// 휴대폰 또는 전화번호 체크
				var form = $this.parents('form');
				if(retv && $this.parents('form').length > 0) {
					
					this.message = '휴대폰 또는 전화번호중 세자이상 동일한 숫자를 사용할 수 없습니다.';
					form.find('.pwd-chk').each(function() {
						var value = $(this).val().replace(/-/g,'');
						for(var i=0; i<value.length; i++) {
							if(i+3 > value.length) {
								return false;
							}
							var sub = value.substring(i,i+3); // 3개 문자 추출
							if(val.indexOf(sub) > -1) {
								retv = false;
								return false;
							}
							
						}
					});
					
				}
				 
				return retv;
			} 
		} 
		
	},
	
	title: {
		name: '이름', sex: '성별', id: '아이디', pwd: '비밀번호', repwd: '비밀번호 확인란', mail: '이메일', tel: '전화번호', mobile: '휴대폰번호',
		zipcode: '우편번호', addr: '주소', article_title: '제목', article_text: '내용', saupno : '사업자등록번호', category: '분류', search_val: '검색어',
		emailid: '이메일 아이디', emaildomain: '이메일 도메인', title: '제목', contents: '내용', url: 'URL 경로', captcha: '보안문자', upload: '업로드'
	},
	
	// 타이틀을 추가한다.
	addTitle: function(key, title) {
		
		this.title[key] = title;
		
	},
	
	// 종성이 받침으로 끝나는지 여부
	isHanTail : function( a ) {
		
		if(a.length > 1) {
			a = a.substring(a.length-1);
		}
		var r = (a.charCodeAt(0) - parseInt('0xac00',16)) % 28;
		var t = String.fromCharCode(r + parseInt('0x11A8') -1);
		
		return (t.charCodeAt(0) != 4519);		
		
	},
	
	valid: function() {
		
		var item, type, className, index, classes, regexKey, value, regVal;
		
		try {
		
			for(var i=0; i<this.items.length; i++) {
				
				item = $(this.items[i]);
				
				className = item.attr('class').replace(/\s{2,20}/g,' ');
				classes = className.split(' '); // 클래스를 분리한다.
				
				for(var j=0; j<classes.length; j++) {
					className = classes[j]; 
					index = className.indexOf('jwvalid-');
					// validator class 가 존재
					if(index > -1) {
						var strs = className.split('-');
						
						// 정규식 key 추출
						regexKey = strs[1];
						if(!this.regex.hasOwnProperty(regexKey)) {
							//throw '클래스명 '+className+' 에서 regex key 추출 오류';
							alert('develop error : 클래스명 '+className+' 에서 regex key 추출 오류');
							return false;
						}
						// type 추출
						typeKey = strs[2];
						if(!this.title.hasOwnProperty(typeKey)) {
							//throw '클래스명 '+className+' 에서 type key 추출 오류';
							this.title[typeKey] = typeKey;
						}
						// 그외의 변수 추출
						regVal = '';
						if(strs.length > 3) {
							regVal = strs[3];
						}
						
						// 값추출
						value = this.getValue(item);
						
						
						/* 검증 */					
						if(!this.regex[regexKey].valid( value, regVal, item )) {
							
							if(this.alertFunction) {
								this.alertFunction( this.getValidMessage(typeKey, regexKey) );
							} else {
								alert( this.getValidMessage(typeKey, regexKey) );
							}
							var t = item.offset().top;
							$('html,body').stop(true, false).animate({scrollTop: t - 160 }, 900, function() {
								item.focus();
							});
							
							return false;
						}
						
					}
					
				}	 
			}
		
		} catch(e) {
			alert('dev error : '+e);
			return false;
		}
		
		return true;
		
	},
	
	getValidMessage: function(typeKey, regexKey) {
		
		var name = this.title[typeKey];
		
		var tail = this.isHanTail(this.title[typeKey])? this.regex[regexKey].hanTail[0]:this.regex[regexKey].hanTail[1]
		
		return name + tail +' '+ this.regex[regexKey].msg();
		
	},
	
	getValue: function(item) {
		
			var value, elName ;
			
			inputType = item.attr('type');
			if(!inputType) {
				inputType = item.get(0).tagName.toLowerCase();
			}
			
			switch(inputType) {
				case 'radio' :
					//elName = item.attr('name');
					//value = $('input[name="'+elName+'"]:checked').val();
					value = item.val();
					break;
				case 'select':
					//elName = item.attr('name');
					//value = $('select[name="'+elName+'"] option:selected').val();
					value = item.val();
				
					break;
				default:
					value = item.val();
			}
			
			return value;
		
	},
	alertFunction: null
	
	
};
/**
 * 폼 유효성 체크 jquery 플러그인
 * title: 사용자 정의 타이틀 추가 
 * alertFunction : 사용자 경고창 함수를 다른 함수로 적용할 경우
 * beforeSubmit :  기본 체크외에 사용자 유효성 체크 함수가 필요한 경우 
 * $('#form').formValid({
 * 	title: [
		{title: 'emailid',	text: '이메일 아이디'	},
		{title: 'emaildomain',	text: '이메일 도메인'	},
		{title: 'mtel',	text: '연락처'},
 * ],
 * alertFunction: toastr.error,
 * beforeSubmit: function(validator) {
 *  
 *  	if(false) {
 *  		alert('안됩니다');
 *  		return false;
 *  	}
 *  	return true;
 *  
 * });
 */
(function($) {
	
  $.fn.formValid = function(opt) {
  	 
	opt = opt || {};
			
	this.each(function() {
			
		var $this = $(this);
		
		$this.submit(function(e) {
			
			//e.preventDefault();
			var validator = new Andwise.app.Validator($this);
			validator.alertFunction = opt.alertFunction ? opt.alertFunction: false;
			
			
			if(opt.title) {
				for(var i=0; i<opt.title.length; i++) {
					validator.addTitle(opt.title[i].title,opt.title[i].text);
				}
			}
			
			retv = validator.valid();;
			
			if(opt.beforeSubmit) {
				
				retv = retv && opt.beforeSubmit(validator); 
			}
			
			if(!retv) {
				e.stopImmediatePropagation();
			}
			
			return retv;
		});
			
			
	});
	
	return $(this);
	
  }
})(jQuery);  

// 클래스를 이용한 팝업
// href 의 주소로 팝업을 띄운다
// jwpopup 으로 시작하는 클래스
// jwpopup-www-hhh : www 팝업넓이, hhh 팝업 높이
// ex) <a class="jwpopup-200-300" href=""></a>
$(function() {
  $('a[class*="jwpopup-"]').click(function(e) {
    
		e.preventDefault();
		
    var href = this.href, $this = $(this);
    var cls = $this.attr('class');
    
    var re = /jwpopup-[\d]+-[\d]+/;
    var arr = re.exec(cls);
    if(arr) {
      arr = arr[0].split('-');
      jwxe_popupWindow(href, arr[1], arr[2], 'popup', false, false);
      return false;
    }
  });
});

// 클래스를 이용한 우편번호 찾기 팝업창
// href 의 주소로 우편번호 찾기 팝업을 띄운다
// jwzip 으로 시작하는 클래스
// jwzip-jusofield-arr2-zip1-zip2 : jusofield: 주소필드 name, addr2 : 나머지주소 필드 , zip1:우편번호 앞자리 name, zip2: 우편번호뒤자리 name
// zip 이 하나일 경우는 (101-232 형태)
// zip 이 두개일 경우는 첫번째 필드에 101, 두번째 필드에 232 가 들어간다
// ex) <a class="jwzip-addr1-addr2-zip1-zip2" href="#findZip"></a>
// ex) <a class="jwzip-addr1-addr2-zip" href="#findZip"></a>
// ex) <a class="jwzip-addr1-addr2" href="#findZip"></a>
$(function() {
  $('a[class*="jwzip-"],input[class*="jwzip-"]').click(function(e) {
		    
		e.preventDefault();
		
    var $this = $(this);
    var cls = $this.attr('class');
    
    var re = /jwzip-[\w]+-[\w]+[-[\w]+]?[-[\w]+]?/;
    var arr = re.exec(cls);
    if(arr) {
			arr = arr[0].split('-');
			var autoHref = rootPath + '/_common/jsp/popup_zipcode_new.jsp?addr1='+arr[1]+'&addr2='+arr[2] ;
			if(arr.length > 4) {
				autoHref += '&zip1=' + arr[3] + '&zip2=' + arr[4];
			} else if(arr.length > 3) {
				autoHref += '&zip=' + arr[3];
			}
			
	    var href = $this.attr('href'); 
			if(href && href.substring(0,1) != '#') {
				href = href
			} else {
				href = autoHref;				
			}
			
      arr = arr[0].split('-');
      jwxe_popupWindow(href, 425, 305, 'findZipCode', false, false);
      return false;
    }
  });
});
//클래스를 이용한 도로명 주소 팝업창
//href 의 주소로 도로명 주소 팝업을 띄운다
//jwroad 으로 시작하는 클래스
//ex) <a class="jwroad" href="#findLoadoad"></a>
// 우편번호 <input id=road_zip ..
// 주소1 <input id=road_addr1 ..
// 주소2 <input id=road_addr2 ..
// 그냥 주소 <input id=road_addr ..
$(function() {
	$('a[class*="jwroad"],input[class*="jwroad"]').click(function(e) {
			    
		e.preventDefault();
			
		var $this = $(this);
		var cls = $this.attr('class');
	 
		var autoHref = rootPath+'/_common/jsp/new_zipcode/road.jsp';
		var href = $this.attr('href'); 
			if(href && href.substring(0,1) != '#') {
				href = href
			} else {
				href = autoHref;				
			}
				
	   jwxe_popupWindow(href, 630, 575, 'findRoadZipCode', true, true);
	   return false;
	   
	});
});

//클래스를 이용한 도로명 검색 팝업창
//href 의 주소로 우편번호 찾기 팝업을 띄운다
//jwroadzip 으로 시작하는 클래스
//jwroadzip-jusofield-arr2-zip1-zip2 : jusofield: 주소필드 name, addr2 : 나머지주소 필드 , zip1:우편번호 앞자리 name, zip2: 우편번호뒤자리 name
//zip 이 하나일 경우는 (101-232 형태)
//zip 이 두개일 경우는 첫번째 필드에 101, 두번째 필드에 232 가 들어간다
//ex) <a class="jwzip-addr1-addr2-zip1-zip2" href="#findZip"></a>
//ex) <a class="jwzip-addr1-addr2-zip" href="#findZip"></a>
//ex) <a class="jwzip-addr1-addr2" href="#findZip"></a>
$(function() {
	$('a[class*="jwnewzip-"],input[class*="jwnewzip-"]').click(function(e) {
			    
			e.preventDefault();
			
	 var $this = $(this);
	 var cls = $this.attr('class');
	 
	 var re = /jwnewzip-[\w]+-[\w]+[-[\w]+]?[-[\w]+]?/;
	 var arr = re.exec(cls);
	 if(arr) {
				arr = arr[0].split('-');
				var autoHref = rootPath + '/_common/jsp/new_zipcode/road.jsp?addr1='+arr[1]+'&addr2='+arr[2] ;
				if(arr.length > 4) {
					autoHref += '&zip1=' + arr[3] + '&zip2=' + arr[4];
				} else if(arr.length > 3) {
					autoHref += '&zip=' + arr[3];
				}
				
		    var href = $this.attr('href'); 
				if(href && href.substring(0,1) != '#') {
					href = href
				} else {
					href = autoHref;				
				}
				
	   arr = arr[0].split('-');
	   jwxe_popupWindow(href, 630, 575, 'findRoadNewZipCode', true,true);
	   
	   return false;
	 }
	 
	});
});

/*안행부 도로명 주소 URL 팝업 ver*/
$(function() {
	$('a[class*="jwnewjuso-"],input[class*="jwnewjuso-"]').click(function(e) {
			    
			e.preventDefault();
			
	 var $this = $(this);
	 var cls = $this.attr('class');
	 
	 var re = /jwnewjuso-[\w]+-[\w]+[-[\w]+]?[-[\w]+]?/;
	 var arr = re.exec(cls);
	 if(arr) {
				arr = arr[0].split('-');
				var autoHref = rootPath + '/_common/jsp/new_juso/jusoPopup.jsp?addr1='+arr[1]+'&addr2='+arr[2] ;
				if(arr.length > 4) {
					autoHref += '&zip1=' + arr[3] + '&zip2=' + arr[4];
				} else if(arr.length > 3) {
					autoHref += '&zip=' + arr[3];
				}
				
		    var href = $this.attr('href'); 
				if(href && href.substring(0,1) != '#') {
					href = href
				} else {
					href = autoHref;				
				}
				
	   arr = arr[0].split('-');
	   jwxe_popupWindow(href, 570, 420, 'pop', true,true);
	   
	   return false;
	 }
	 
	});
});



function loadFacyBoxScript() {

	loadCSS(rootPath+'\/_common\/js\/fancybox\/jquery.fancybox-1.3.4.css');	
	loadJavascript(rootPath+'\/_common\/js\/fancybox\/jquery.easing-1.3.pack.js');	
	loadJavascript(rootPath+'\/_common\/js\/fancybox\/jquery.fancybox-1.3.4.pack.js');	
	
}

function loadFancyBoxScript() {
	loadFacyBoxScript();
}

// SSL 주소 치환
if(typeof(sslYN) != 'undefined' && sslYN == 'Y') {
	$(function() {
	
		if(document.location.href.startsWith('http:')) {
			$('a.jwssl').attr('href',function(index, href) {
				if(!href || !href.startsWith('/')) {
					return;
				}	
				
				$(this).attr('href','https://'+document.location.hostname+(sslPort?':'+sslPort:'')+href );
				
			});
		}

		if(document.location.href.startsWith('https')) {
			$('a.jwnossl').attr('href',function(index, href) {
				
				if(!href || !href.startsWith('/')) {
					return;
				}
				
				$(this).attr('href','http://'+document.location.hostname+(servicePort?':'+servicePort:'')+href );
				
			});
		}
		
	});
}

$(function() {           
	$('form[action="'+rootPath+'/_common/jsp/redirect.jsp"]').submit(function() {
	  if(!this.link.value) {
	    alert('이동하실 사이트를 선택하세요');
	    return false;
	  }
	    return true;
	});
	
	// 본문 바로가기 제거
	if($('#jwxe_main_content').length == 0) {
		$('a[href="#jwxe_main_content"]').parent('li').remove();
	}           
	// 주메뉴 바로가기 제거
	if($('#jwxe_main_menu').length == 0) {
		$('a[href="#jwxe_main_menu"]').parent('li').remove();
	}           
	// 서브메뉴 바로가기 제거
	if($('#jwxe_sub_menu').length == 0) {
		$('a[href="#jwxe_sub_menu"]').parent('li').remove();
	}        
	if($('#go_main li').length == 0) {
		$('#go_main').remove();
	}   
});

document.write('<script type="text/javascript" src="'+rootPath+'/_common/js/control.js"></script>');
