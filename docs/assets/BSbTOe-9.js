import{l as n,J as o,S as c,p as h,k as p,T as l,o as u,i as d,h as a,a2 as m}from"./CB3rD8JC.js";const g="img",S=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,i=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=c(h(p().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return l(e,t.src)}return t.src});return(s,e)=>(u(),d(m(a(g)),{src:a(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{S as default};
