import{_ as n}from"./CodeSnippet.fdcdc553.js";import{u as e,c as p}from"./index.dc11fc09.js";import{r as s,o as t,b as o,d as a}from"./vendor.7ea3b6d9.js";const r=`\nimport Vue from 'vue'\nimport App from './App.vue'\nimport ${e} from '${p.name}'\nimport '${p.name}.css'\n\nVue.use(${e})\n\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n});\n`,i={name:"Start",components:{CodeSnippet:n},data:()=>({mainSnippet:r})},c={class:"page-Start page"},m={class:"snippets"},d={class:"section-content"};i.render=function(n,e,p,r,i,u){const f=s("CodeSnippet");return t(),o("div",c,[a("section",m,[a("div",d,[a(f,{class:"snippet",code:i.mainSnippet,lang:"js"},null,8,["code"])])])])};export default i;