import{_ as e}from"./CodeSnippet.edb6d24b.js";import{p as n,g as s,o,b as t,d as a,f as p,t as c,j as l,k as d,h as i,e as m,w as r}from"./vendor.5b9c33d8.js";const v={data:()=>({open:!0}),computed:{title(){return this.open?"隐藏代码":"显示代码"}}},u=i();n("data-v-ea4d35e4");const g=a("span",{class:"icon"},"▼",-1),f={key:0,class:"content"};s();const S=u(((e,n,s,i,m,r)=>(o(),t("div",{class:["collapse",{open:m.open}]},[a("div",{class:"toggle",onClick:n[1]||(n[1]=e=>m.open=!m.open)},[p(c(r.title)+" ",1),g]),m.open?(o(),t("div",f,[l(e.$slots,"default",{},void 0,!0)])):d("",!0)],2))));v.render=S,v.__scopeId="data-v-ea4d35e4";const C={name:"Home",components:{CodeSnippet:e,Collapse:v},data:()=>({mainSnippet:"\ndata () {\n  return {\n    msg: 'vue component'\n  }\n}\n",componentSnippet:'\n<v-component :msg="msg" />\n'})},b={class:"page-home page"},h={class:"demo"},j={class:"section-content"},_={class:"snippets"},k={class:"section-content"},w=a("div",{class:"plus"},"+",-1);C.render=function(e,n,s,p,c,l){const d=m("v-component"),i=m("CodeSnippet"),v=m("Collapse");return o(),t("div",b,[a("section",h,[a("div",j,[a(d,{msg:"vue component"})])]),a("section",_,[a(v,null,{default:r((()=>[a("div",k,[a(i,{class:"snippet",code:c.componentSnippet,lang:"html"},null,8,["code"]),w,a(i,{class:"snippet",code:c.mainSnippet,lang:"js"},null,8,["code"])])])),_:1})])])};export default C;
