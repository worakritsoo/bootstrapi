import{S as a,i as s,s as t,e,k as c,t as r,c as i,a as n,n as h,g as l,d as o,b as f,f as p,F as u,K as v,L as d,h as E,J as m,M as x,N as I}from"../../chunks/vendor-d16fa143.js";function y(a){let s,t,I,y,D,L,V,g,P,N,T,b,R,U,k,A,B,F,M,S,j,C,J,K,O,q,w,z,G,H;return{c(){s=e("form"),t=e("input"),I=c(),y=e("div"),D=e("label"),L=r("Rate"),V=e("input"),g=c(),P=e("div"),N=r("1"),T=c(),b=e("div"),R=c(),U=e("div"),k=e("label"),A=r("Pitch"),B=e("input"),F=c(),M=e("div"),S=r("1"),j=c(),C=e("div"),J=c(),K=e("select"),O=c(),q=r(a[0]),w=c(),z=r(a[1]),this.h()},l(e){s=i(e,"FORM",{});var c=n(s);t=i(c,"INPUT",{type:!0,class:!0}),I=h(c),y=i(c,"DIV",{});var r=n(y);D=i(r,"LABEL",{for:!0});var f=n(D);L=l(f,"Rate"),f.forEach(o),V=i(r,"INPUT",{type:!0,min:!0,max:!0,step:!0,id:!0}),g=h(r),P=i(r,"DIV",{class:!0});var p=n(P);N=l(p,"1"),p.forEach(o),T=h(r),b=i(r,"DIV",{class:!0}),n(b).forEach(o),r.forEach(o),R=h(c),U=i(c,"DIV",{});var u=n(U);k=i(u,"LABEL",{for:!0});var v=n(k);A=l(v,"Pitch"),v.forEach(o),B=i(u,"INPUT",{type:!0,min:!0,max:!0,step:!0,id:!0}),F=h(u),M=i(u,"DIV",{class:!0});var d=n(M);S=l(d,"1"),d.forEach(o),j=h(u),C=i(u,"DIV",{class:!0}),n(C).forEach(o),u.forEach(o),J=h(c),K=i(c,"SELECT",{}),n(K).forEach(o),c.forEach(o),O=h(e),q=l(e,a[0]),w=h(e),z=l(e,a[1]),this.h()},h(){f(t,"type","text"),f(t,"class","txt"),f(D,"for","rate"),f(V,"type","range"),f(V,"min","0.5"),f(V,"max","2"),f(V,"step","0.1"),f(V,"id","rate"),f(P,"class","rate-value"),f(b,"class","clearfix"),f(k,"for","pitch"),f(B,"type","range"),f(B,"min","0"),f(B,"max","2"),f(B,"step","0.1"),f(B,"id","pitch"),f(M,"class","pitch-value"),f(C,"class","clearfix")},m(e,c){p(e,s,c),u(s,t),u(s,I),u(s,y),u(y,D),u(D,L),u(y,V),v(V,a[0]),u(y,g),u(y,P),u(P,N),u(y,T),u(y,b),u(s,R),u(s,U),u(U,k),u(k,A),u(U,B),v(B,a[1]),u(U,F),u(U,M),u(M,S),u(U,j),u(U,C),u(s,J),u(s,K),p(e,O,c),p(e,q,c),p(e,w,c),p(e,z,c),G||(H=[d(V,"change",a[2]),d(V,"input",a[2]),d(B,"change",a[3]),d(B,"input",a[3])],G=!0)},p(a,[s]){1&s&&v(V,a[0]),2&s&&v(B,a[1]),1&s&&E(q,a[0]),2&s&&E(z,a[1])},i:m,o:m,d(a){a&&o(s),a&&o(O),a&&o(q),a&&o(w),a&&o(z),G=!1,x(H)}}}function D(a,s,t){let e=1,c=1;return[e,c,function(){e=I(this.value),t(0,e)},function(){c=I(this.value),t(1,c)}]}class L extends a{constructor(a){super(),s(this,a,D,y,t,{})}}export{L as default};
