import{o as e,b as l,e as s,d as n,c as a,r,w as t,t as o,F as i,q as u,f as d,y as p,s as m,P as v,p as c}from"./vendor.1d4532d8.js";import{u as h}from"./index.83468bfc.js";import{m as f,_ as k}from"./SourceButton.vue_vue&type=script&setup=true&lang.223851b3.js";import{d as y,t as w,_ as x,a as g,c as b,b as M}from"./See.vue_vue&type=script&setup=true&lang.f206ee26.js";import{a as j,b as T,D as _}from"./headlessui.esm.1f125c71.js";const H={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},B=s("g",{fill:"none"},[s("path",{d:"M12 6v6m0 0v6m0-6h6m-6 0H6",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var L={render:function(s,n){return e(),l("svg",H,[B])}};const P={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},R=s("g",{fill:"none"},[s("path",{d:"M20 12H4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var S={render:function(s,n){return e(),l("svg",P,[R])}};const A={class:"flex gap-1 items-center -ml-1"},C={class:"font-semibold"},E={class:"sr-only"};var Y=n({expose:[],props:["names","variable","nullable"],setup(n){var v;const c=n,k=p(),M=m(),H=h(),B=a((()=>H.state.docs)),P=r(null==(v=B.value)?void 0:v.typedefs.find((e=>e.name===c.names[0][0]))),R=a((()=>{var e;return f(b(null==(e=P.value)?void 0:e.description,B.value,k,M))}));return(a,r)=>{const p=L,m=S;return P.value?(e(),l(d(_),{key:0,as:"div"},{default:t((({open:a})=>[s(d(j),{as:"div",class:"focus:outline-none"},{default:t((()=>[s("div",A,[s("span",C,o(n.nullable?"?":"")+o(n.variable?"...":""),1),(e(!0),l(i,null,u(n.names,(s=>(e(),l(y,{key:d(w)(s),type:s},null,8,["type"])))),128)),s("button",{class:"leading-3 focus:outline-none","aria-expanded":a},[s("span",E,o(a?"Shrink":"Expand"),1),s(p,{class:["inline-block",{hidden:a}],"aria-hidden":"true"},null,8,["class"]),s(m,{class:["inline-block",{hidden:!a}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"])])])),_:2},1024),s(d(T),null,{default:t((()=>{var s,n;return[(null==(s=P.value)?void 0:s.props)?(e(),l(x,{key:0,parameters:null==(n=P.value)?void 0:n.props},null,8,["parameters"])):(e(),l("div",{key:1,innerHTML:d(R)},null,8,["innerHTML"]))]})),_:1})])),_:1})):(e(),l(g,{key:1,names:n.names},null,8,["names"]))}}});const q={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},D={class:"prose prose-discord dark:prose-light break-words-legacy mx-auto max-w-4xl lg:max-w-full"},F=s("h2",null,"Types",-1),I={id:"typedef-types"},$={key:2},z=s("h2",null,"Properties",-1),G={key:3},J=s("h2",null,"Parameters",-1),K={key:4},N=s("h2",null,"Returns",-1);var O=n({expose:[],setup(n){var r;const t=p(),y=m(),j=h(),T=a((()=>j.state.docs)),_=null==(r=T.value)?void 0:r.typedefs.find((e=>e.name===y.params.typedef)),H=a((()=>f(b(null==_?void 0:_.description,T.value,t,y))));return v((()=>{const e=document.getElementById("container");e&&e.scrollTop>200&&e.scrollTo({top:0,behavior:"smooth"})})),(n,a)=>{var r,t,p,m,v,h,f,y,b,j,T,B;return e(),l("div",q,[s(k,{class:"float-right mt-2",meta:null==(r=d(_))?void 0:r.meta},null,8,["meta"]),s("div",D,[s("h1",{id:`doc-for-${null==(t=d(_))?void 0:t.name}`},o(null==(p=d(_))?void 0:p.name),9,["id"]),(null==(m=d(_))?void 0:m.description)?(e(),l("p",{key:0,innerHTML:d(H)},null,8,["innerHTML"])):c("",!0),(null==(v=d(_))?void 0:v.see)?(e(),l(M,{key:1,see:null==(h=d(_))?void 0:h.see},null,8,["see"])):c("",!0),F,s("ul",I,[(e(!0),l(i,null,u(null==(f=d(_))?void 0:f.type,(n=>(e(),l("li",{key:d(w)(n)},[s(Y,{class:"!m-0",names:n},null,8,["names"])])))),128))]),(null==(y=d(_))?void 0:y.props)&&(null==(b=d(_))?void 0:b.props.length)?(e(),l("div",$,[z,s(x,{parameters:d(_).props},null,8,["parameters"])])):c("",!0),(null==(j=d(_))?void 0:j.params)&&(null==(T=d(_))?void 0:T.params.length)?(e(),l("div",G,[J,s(x,{parameters:d(_).params},null,8,["parameters"])])):c("",!0),(null==(B=d(_))?void 0:B.returns)?(e(),l("div",K,[N,s("p",null,[(e(!0),l(i,null,u(d(_).returns,(s=>(e(),l(g,{key:d(w)(s),names:s},null,8,["names"])))),128))])])):c("",!0)])])}}});export default O;
