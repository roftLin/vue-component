import{c as e,a as t,s as n,o as s,b as o,d as r,t as i,F as a,r as c,e as u,w as l,f as d,p,g as m,h as v,i as g}from"./vendor.5b9c33d8.js";let h;const f={},b=function(e,t){if(!t)return e();if(void 0===h){const e=document.createElement("link").relList;h=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in f)return;f[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":h,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))},_=e(),y=[{path:"/",name:"Home",component:()=>b((()=>import("./Home.166edf3a.js")),["/assets/Home.166edf3a.js","/assets/Home.4414af59.css","/assets/CodeSnippet.edb6d24b.js","/assets/CodeSnippet.77e0e728.css","/assets/vendor.5b9c33d8.js"])},{path:"/start",name:"上手",component:()=>b((()=>import("./Start.b363c4ed.js")),["/assets/Start.b363c4ed.js","/assets/CodeSnippet.edb6d24b.js","/assets/CodeSnippet.77e0e728.css","/assets/vendor.5b9c33d8.js"])}],w=t({history:_,routes:y}),E="vue-component",j=["vue","vuejs","rollup","eslint","gihub-pages","gihub-actions","template","component"],L="dist/vue-component.umd.js",k="dist/vue-component.es.js",P="dist/vue-component.min.js",I={lint:"vue-cli-service lint",start:"vite",test:"vite --config vite.config.test.js","build:app":"cross-env BULID_TYPE=app vite build","build:lib":"cross-env BULID_TYPE=lib vite build","yalc:init":"yarn global add yalc nodemon","yalc:push":"yarn build:lib && yalc push","yalc:watch":"nodemon --ignore dist/ --ignore node_modules/ --watch src -C -e js,jsx,ts,vue,html,less,scss --debug -x 'yarn yalc:push'"},T={type:"git",url:"https://github.com/roftLin/vue-component.git"},D={url:"https://github.com/roftLin/vue-component/issues"},V="https://roftLin.github.com/vue-component",C={vue:"^3.0.5"},O={"@vitejs/plugin-vue":"^1.2.3","@vue/compiler-sfc":"^3.0.5","@vue/test-utils":"2.0.0-rc.0","cross-env":"^6.0.3","highlight.js":"^9.17.1",puppeteer:"^7.1.0",sass:"^1.34.1",screenfull:"^5.0.0",vite:"^2.3.7","vite-plugin-test":"^0.0.5","vue-router":"^4.0.8"},S=["> 1%","last 2 versions"];var $={name:E,version:"0.0.1",description:"vue组件模板",keywords:j,private:!1,author:"roftLin",license:"MIT",main:L,module:k,unpkg:P,scripts:I,repository:T,bugs:D,homepage:V,dependencies:C,devDependencies:O,browserslist:S},F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",name:E,version:"0.0.1",description:"vue组件模板",keywords:j,author:"roftLin",license:"MIT",main:L,module:k,unpkg:P,scripts:I,repository:T,bugs:D,homepage:V,dependencies:C,devDependencies:O,browserslist:S,default:$});const U=$.name.replace(/(^\w|-\w)/g,(e=>e.replace("-","").toUpperCase()));const x={data:()=>({routes:y.filter((e=>e.name)),config:$}),created(){document.title=$.name+"-demo"},methods:{toggleFullscreen(e){n.isEnabled&&n.toggle(document.documentElement)}}},A={id:"app"},M={class:"command"},R={class:"nav"};x.render=function(e,t,n,p,m,v){const g=u("router-link"),h=u("router-view");return s(),o("div",A,[r("header",null,[r("h1",null,i(m.config.name),1),r("div",M,"yarn add "+i(m.config.name),1),r("section",R,[(s(!0),o(a,null,c(m.routes,(e=>(s(),o(g,{key:e.path,to:e.path},{default:l((()=>[d(i(e.name),1)])),_:2},1032,["to"])))),128)),r("a",{href:`https://github.com/${m.config.author}/${m.config.name}#usage`},"文档",8,["href"]),r("a",{onClick:t[1]||(t[1]=(...e)=>v.toggleFullscreen&&v.toggleFullscreen(...e))},"切换全屏")])]),r(h)])};const B={name:"VComponent",props:{msg:{type:String,default:""}}},H=v();p("data-v-01c9b1a6");const Y={class:"component"},q={class:"component-content"};m();const z=H(((e,t,n,a,c,u)=>(s(),o("div",Y,[r("div",q,i(n.msg),1)]))));B.render=z,B.__scopeId="data-v-01c9b1a6";const W=[B],G=function(e){W.forEach((t=>{e.component(t.name,t)}))};"undefined"!=typeof window&&window.Vue&&G(window.Vue),b((()=>Promise.resolve().then((function(){return F}))),void 0).then((e=>{return t=`../dist/${e.name}.css`,Promise.reject(new Error("Unknown variable dynamic import: "+t));var t}));const J=g(x);J.use(G),J.use(w),J.mount("#app");export{$ as c,U as u};