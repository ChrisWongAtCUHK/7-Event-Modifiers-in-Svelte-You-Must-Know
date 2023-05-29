(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const f of o)if(f.type==="childList")for(const c of f.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const f={};return o.integrity&&(f.integrity=o.integrity),o.referrerPolicy&&(f.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?f.credentials="include":o.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(o){if(o.ep)return;o.ep=!0;const f=n(o);fetch(o.href,f)}})();function m(){}function D(e){return e()}function j(){return Object.create(null)}function v(e){e.forEach(D)}function T(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function G(e){return Object.keys(e).length===0}function w(e,t){e.appendChild(t)}function g(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode&&e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function J(e){return document.createTextNode(e)}function E(){return J(" ")}function Q(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function R(e){return function(t){return t.preventDefault(),e.call(this,t)}}function O(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function U(e){return Array.from(e.childNodes)}let N;function x(e){N=e}const p=[],M=[];let h=[];const S=[],V=Promise.resolve();let k=!1;function W(){k||(k=!0,V.then(H))}function C(e){h.push(e)}const L=new Set;let a=0;function H(){if(a!==0)return;const e=N;do{try{for(;a<p.length;){const t=p[a];a++,x(t),X(t.$$)}}catch(t){throw p.length=0,a=0,t}for(x(null),p.length=0,a=0;M.length;)M.pop()();for(let t=0;t<h.length;t+=1){const n=h[t];L.has(n)||(L.add(n),n())}h.length=0}while(p.length);for(;S.length;)S.pop()();k=!1,L.clear(),x(e)}function X(e){if(e.fragment!==null){e.update(),v(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}function Y(e){const t=[],n=[];h.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),h=t}const b=new Set;let Z;function I(e,t){e&&e.i&&(b.delete(e),e.i(t))}function ee(e,t,n,r){if(e&&e.o){if(b.has(e))return;b.add(e),Z.c.push(()=>{b.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function te(e){e&&e.c()}function q(e,t,n,r){const{fragment:o,after_update:f}=e.$$;o&&o.m(t,n),r||C(()=>{const c=e.$$.on_mount.map(D).filter(T);e.$$.on_destroy?e.$$.on_destroy.push(...c):v(c),e.$$.on_mount=[]}),f.forEach(C)}function F(e,t){const n=e.$$;n.fragment!==null&&(Y(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(e,t){e.$$.dirty[0]===-1&&(p.push(e),W(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(e,t,n,r,o,f,c,_=[-1]){const s=N;x(e);const u=e.$$={fragment:null,ctx:[],props:f,update:m,not_equal:o,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:j(),dirty:_,skip_bound:!1,root:t.target||s.$$.root};c&&c(u.root);let $=!1;if(u.ctx=n?n(e,t.props||{},(i,l,...P)=>{const A=P.length?P[0]:l;return u.ctx&&o(u.ctx[i],u.ctx[i]=A)&&(!u.skip_bound&&u.bound[i]&&u.bound[i](A),$&&ne(e,i)),l}):[],u.update(),$=!0,v(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const i=U(t.target);u.fragment&&u.fragment.l(i),i.forEach(d)}else u.fragment&&u.fragment.c();t.intro&&I(e.$$.fragment),q(e,t.target,t.anchor,t.customElement),H()}x(s)}class z{$destroy(){F(this,1),this.$destroy=m}$on(t,n){if(!T(n))return m;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!G(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function re(e){let t,n,r,o,f,c,_,s,u,$;return{c(){t=y("p"),t.textContent="Please click on the checkbox control.",n=E(),r=y("form"),o=y("label"),o.textContent="Checkbox:",f=E(),c=y("input"),_=E(),s=y("div"),O(o,"for","id-checkbox"),O(c,"type","checkbox"),O(c,"id","id-checkbox")},m(i,l){g(i,t,l),g(i,n,l),g(i,r,l),w(r,o),w(r,f),w(r,c),g(i,_,l),g(i,s,l),s.innerHTML=e[0],u||($=Q(c,"click",R(e[1])),u=!0)},p(i,[l]){l&1&&(s.innerHTML=i[0])},i:m,o:m,d(i){i&&d(t),i&&d(n),i&&d(r),i&&d(_),i&&d(s),u=!1,$()}}}function oe(e,t,n){let r="";function o(f){n(0,r+="preventDefault() won't let you check this!<br>")}return[r,o]}class ie extends z{constructor(t){super(),K(this,t,oe,re,B,{})}}function ue(e){let t,n;return t=new ie({}),{c(){te(t.$$.fragment)},m(r,o){q(t,r,o),n=!0},p:m,i(r){n||(I(t.$$.fragment,r),n=!0)},o(r){ee(t.$$.fragment,r),n=!1},d(r){F(t,r)}}}class fe extends z{constructor(t){super(),K(this,t,null,ue,B,{})}}new fe({target:document.getElementById("app")});