import{S as a,i as s,s as t,e,k as c,t as r,c as i,a as n,n as h,g as l,d as o,b as f,f as p,F as u,U as v,K as d,h as E,J as m,L as x,V as I}from"../../chunks/vendor-f6c08a3e.js";function V(a){let s,t,I,V,y,D,L,g,P,T,U,b,N,R,k,A,B,F,S,j,C,J,K,M,O,q,w,z,G,H;return{c(){s=e("form"),t=e("input"),I=c(),V=e("div"),y=e("label"),D=r("Rate"),L=e("input"),g=c(),P=e("div"),T=r("1"),U=c(),b=e("div"),N=c(),R=e("div"),k=e("label"),A=r("Pitch"),B=e("input"),F=c(),S=e("div"),j=r("1"),C=c(),J=e("div"),K=c(),M=e("select"),O=c(),q=r(a[0]),w=c(),z=r(a[1]),this.h()},l(e){s=i(e,"FORM",{});var c=n(s);t=i(c,"INPUT",{type:!0,class:!0}),I=h(c),V=i(c,"DIV",{});var r=n(V);y=i(r,"LABEL",{for:!0});var f=n(y);D=l(f,"Rate"),f.forEach(o),L=i(r,"INPUT",{type:!0,min:!0,max:!0,step:!0,id:!0}),g=h(r),P=i(r,"DIV",{class:!0});var p=n(P);T=l(p,"1"),p.forEach(o),U=h(r),b=i(r,"DIV",{class:!0}),n(b).forEach(o),r.forEach(o),N=h(c),R=i(c,"DIV",{});var u=n(R);k=i(u,"LABEL",{for:!0});var v=n(k);A=l(v,"Pitch"),v.forEach(o),B=i(u,"INPUT",{type:!0,min:!0,max:!0,step:!0,id:!0}),F=h(u),S=i(u,"DIV",{class:!0});var d=n(S);j=l(d,"1"),d.forEach(o),C=h(u),J=i(u,"DIV",{class:!0}),n(J).forEach(o),u.forEach(o),K=h(c),M=i(c,"SELECT",{}),n(M).forEach(o),c.forEach(o),O=h(e),q=l(e,a[0]),w=h(e),z=l(e,a[1]),this.h()},h(){f(t,"type","text"),f(t,"class","txt"),f(y,"for","rate"),f(L,"type","range"),f(L,"min","0.5"),f(L,"max","2"),f(L,"step","0.1"),f(L,"id","rate"),f(P,"class","rate-value"),f(b,"class","clearfix"),f(k,"for","pitch"),f(B,"type","range"),f(B,"min","0"),f(B,"max","2"),f(B,"step","0.1"),f(B,"id","pitch"),f(S,"class","pitch-value"),f(J,"class","clearfix")},m(e,c){p(e,s,c),u(s,t),u(s,I),u(s,V),u(V,y),u(y,D),u(V,L),v(L,a[0]),u(V,g),u(V,P),u(P,T),u(V,U),u(V,b),u(s,N),u(s,R),u(R,k),u(k,A),u(R,B),v(B,a[1]),u(R,F),u(R,S),u(S,j),u(R,C),u(R,J),u(s,K),u(s,M),p(e,O,c),p(e,q,c),p(e,w,c),p(e,z,c),G||(H=[d(L,"change",a[2]),d(L,"input",a[2]),d(B,"change",a[3]),d(B,"input",a[3])],G=!0)},p(a,[s]){1&s&&v(L,a[0]),2&s&&v(B,a[1]),1&s&&E(q,a[0]),2&s&&E(z,a[1])},i:m,o:m,d(a){a&&o(s),a&&o(O),a&&o(q),a&&o(w),a&&o(z),G=!1,x(H)}}}function y(a,s,t){let e=1,c=1;return[e,c,function(){e=I(this.value),t(0,e)},function(){c=I(this.value),t(1,c)}]}class D extends a{constructor(a){super(),s(this,a,y,V,t,{})}}export{D as default};