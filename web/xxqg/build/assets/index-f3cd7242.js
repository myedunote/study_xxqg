import{_ as d,a as l}from"./codemirror-editor-vue3.es-8fff40f2.js";import{d as _,W as c,bC as u,a5 as p,am as m,u as v,a2 as a,o as f,bc as h,bd as g,be as x}from"./home-8ca0f577.js";const b=e=>(h("data-v-85732e41"),e=e(),g(),e),y={class:"relative",style:{height:"100%",overflow:"hidden"}},I=b(()=>a("img",{src:l,alt:""},null,-1)),k=[I],B=_({__name:"index",setup(e){const t=c();o();function o(){u().then(s=>{s&&(t.value=s.split(`
`).reverse().join(`
`).trim())})}const r={mode:"log",theme:"default",lineNumbers:!0,smartIndent:!0,indentUnit:2,foldGutter:!0,styleActiveLine:!0,readOnly:!0};return(s,n)=>(f(),p("div",y,[m(v(d),{value:t.value,"onUpdate:value":n[0]||(n[0]=i=>t.value=i),options:r,border:!0,height:"100%"},null,8,["value"]),a("div",{class:"refresh",onClick:o},k)]))}});const N=x(B,[["__scopeId","data-v-85732e41"]]);export{N as default};