import{u as h,an as k,a4 as C,E as m,r as x,o as p,a5 as V,w as t,b as e,V as P,ao as y,a7 as i,a9 as _,ap as S,aq as b,ar as w,a8 as B,R as E,as as R,a as T,e as A,F as N,at as F,au as I,O as L}from"./index-IwT1q-xU.js";import{V as M}from"./VContainer-CMXaNezA.js";import{V as g}from"./VCol-CTRkVoSt.js";import{V as U}from"./VPagination-DBZfRGj6.js";import{V as $}from"./VRow-C8qfN0lB.js";const q={__name:"ProductCard",props:["_id","category","description","image","name","price","sell"],setup(s){const c=h(),f=k(),n=C(),u=s,r=m(!1),d=async()=>{if(!c.isLogin){f.push("/login");return}r.value=!0;const o=await c.addCart(u._id,1);n({text:o.text,snackbarProps:{color:o.color}}),r.value=!1};return(o,l)=>{const a=x("router-link");return p(),V(R,null,{default:t(()=>[e(P,{src:s.image,cover:"",height:"200"},null,8,["src"]),e(y,null,{default:t(()=>[e(a,{to:"/products/"+s._id},{default:t(()=>[i(_(s.name),1)]),_:1},8,["to"])]),_:1}),e(S,null,{default:t(()=>[i("$"+_(s.price),1)]),_:1}),e(b,null,{default:t(()=>[i(_(s.description),1)]),_:1}),e(w,null,{default:t(()=>[e(B),e(E,{color:"primary","prepend-icon":"mdi-cart",onClick:d,loading:r.value},{default:t(()=>[i("加入購物車")]),_:1},8,["loading"])]),_:1})]),_:1})}}},D=F("h1",{class:"text-center"},"購物網",-1),v=20,J={__name:"index",setup(s){const{api:c}=I(),f=C(),n=m(1),u=m(1),r=m([]),d=async()=>{var o,l;try{const{data:a}=await c.get("/product",{params:{itemsPerPage:v,page:n.value}});u.value=Math.ceil(a.result.total/v),r.value.splice(0,r.value.length,...a.result.data)}catch(a){console.log(a),f({text:((l=(o=a==null?void 0:a.response)==null?void 0:o.data)==null?void 0:l.message)||"發生錯誤",snackbarProps:{color:"red"}})}};return d(),(o,l)=>(p(),V(M,null,{default:t(()=>[e($,null,{default:t(()=>[e(g,{cols:"12"},{default:t(()=>[D]),_:1}),(p(!0),T(N,null,A(r.value,a=>(p(),V(g,{cols:"12",md:"6",lg:"3",key:a._id},{default:t(()=>[e(q,L({ref_for:!0},a),null,16)]),_:2},1024))),128)),e(g,{cols:"12"},{default:t(()=>[e(U,{modelValue:n.value,"onUpdate:modelValue":[l[0]||(l[0]=a=>n.value=a),d],length:u.value,rounded:"circle"},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1}))}};export{J as default};
