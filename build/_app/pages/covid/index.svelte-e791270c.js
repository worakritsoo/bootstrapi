import{S as s,i as a,s as t,e,k as c,t as o,c as n,a as i,d as r,n as l,g as u,b as f,N as p,O as v,P as h,f as d,F as m,L as y,Q as E,h as j,J as g,M as N,R as D,T as S}from"../../chunks/vendor-7fd04d11.js";const{isNaN:T}=D;function k(s){let a,t,D,k,P,R,I,V,w,M,O,b,x,C,F,X,$,B,G,J,K,L,Q,q=!1,z=!0,H=A(s[0])+"",U=s[2]?"play":"pause",W=A(s[1])+"";function Y(){cancelAnimationFrame(P),t.paused||(P=S(Y),q=!0),s[7].call(t)}return{c(){a=e("div"),t=e("video"),D=e("track"),R=c(),I=e("div"),V=e("progress"),M=c(),O=e("div"),b=e("span"),x=o(H),C=c(),F=e("span"),X=o("กดเพื่อ เล่นหรือหยุด "),$=o(U),B=o(" / ลากเพื่อค้นหา"),G=c(),J=e("span"),K=o(W),this.h()},l(s){a=n(s,"DIV",{class:!0});var e=i(a);t=n(e,"VIDEO",{src:!0,class:!0});var c=i(t);D=n(c,"TRACK",{kind:!0}),c.forEach(r),R=l(e),I=n(e,"DIV",{class:!0,style:!0});var o=i(I);V=n(o,"PROGRESS",{class:!0}),i(V).forEach(r),M=l(o),O=n(o,"DIV",{class:!0});var f=i(O);b=n(f,"SPAN",{class:!0});var p=i(b);x=u(p,H),p.forEach(r),C=l(f),F=n(f,"SPAN",{class:!0});var v=i(F);X=u(v,"กดเพื่อ เล่นหรือหยุด "),$=u(v,U),B=u(v," / ลากเพื่อค้นหา"),v.forEach(r),G=l(f),J=n(f,"SPAN",{class:!0});var h=i(J);K=u(h,W),h.forEach(r),f.forEach(r),o.forEach(r),e.forEach(r),this.h()},h(){f(D,"kind","captions"),p(t.src,k="covid.mp4")||f(t,"src","covid.mp4"),f(t,"class","svelte-1175yja"),void 0===s[1]&&v((()=>s[8].call(t))),V.value=w=s[0]/s[1]||0,f(V,"class","svelte-1175yja"),f(b,"class","time svelte-1175yja"),f(F,"class","svelte-1175yja"),f(J,"class","time svelte-1175yja"),f(O,"class","info svelte-1175yja"),f(I,"class","controls svelte-1175yja"),h(I,"opacity",s[1]&&s[3]?1:0),f(a,"class","svelte-1175yja")},m(e,c){d(e,a,c),m(a,t),m(t,D),m(a,R),m(a,I),m(I,V),m(I,M),m(I,O),m(O,b),m(b,x),m(O,C),m(O,F),m(F,X),m(F,$),m(F,B),m(O,G),m(O,J),m(J,K),L||(Q=[y(t,"mousemove",s[4]),y(t,"touchmove",E(s[4])),y(t,"mousedown",s[5]),y(t,"mouseup",s[6]),y(t,"timeupdate",Y),y(t,"durationchange",s[8]),y(t,"play",s[9]),y(t,"pause",s[9])],L=!0)},p(s,[a]){!q&&1&a&&!T(s[0])&&(t.currentTime=s[0]),q=!1,4&a&&z!==(z=s[2])&&t[z?"pause":"play"](),3&a&&w!==(w=s[0]/s[1]||0)&&(V.value=w),1&a&&H!==(H=A(s[0])+"")&&j(x,H),4&a&&U!==(U=s[2]?"play":"pause")&&j($,U),2&a&&W!==(W=A(s[1])+"")&&j(K,W),10&a&&h(I,"opacity",s[1]&&s[3]?1:0)},i:g,o:g,d(s){s&&r(a),L=!1,N(Q)}}}function A(s){if(isNaN(s))return"...";const a=Math.floor(s/60);return(s=Math.floor(s%60))<10&&(s="0"+s),`${a}:${s}`}function P(s,a,t){let e,c,o,n=0,i=!0,r=!0;return[n,e,i,r,function(s){if(clearTimeout(c),c=setTimeout((()=>t(3,r=!1)),2500),t(3,r=!0),!e)return;if("touchmove"!==s.type&&!(1&s.buttons))return;const a="touchmove"===s.type?s.touches[0].clientX:s.clientX,{left:o,right:i}=this.getBoundingClientRect();t(0,n=e*(a-o)/(i-o))},function(s){o=new Date},function(s){new Date-o<300&&(i?s.target.play():s.target.pause())},function(){n=this.currentTime,t(0,n)},function(){e=this.duration,t(1,e)},function(){i=this.paused,t(2,i)}]}class R extends s{constructor(s){super(),a(this,s,P,k,t,{})}}export{R as default};
