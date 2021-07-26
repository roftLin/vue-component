var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,a=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&s(e,n,t[n]);return e},l=(e,r)=>t(e,n(r));import{l as p,V as c,a as u,s as d,P as m,E as f,_ as h}from"./vendor.b4e1e96c.js";let v;const b={};function g(e,t,n,r,o,i,s,a){var l,p="function"==typeof e?e.options:e;if(t&&(p.render=t,p.staticRenderFns=n,p._compiled=!0),r&&(p.functional=!0),i&&(p._scopeId="data-v-"+i),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},p._ssrRegister=l):o&&(l=a?function(){o.call(this,(p.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(p.functional){p._injectStyles=l;var c=p.render;p.render=function(e,t){return l.call(t),c(e,t)}}else{var u=p.beforeCreate;p.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:p}}const _={};var y=g({name:"CodeSnippet",props:{code:{type:String,default:""},lang:{type:String,default:""}},computed:{result(){return p.highlight(this.lang,this.code.trim()).value},lineCount(){const e=this.result;let t=0;for(var n=0;n<e.length;++n)"\n"===e[n]&&t++;return t+1}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"code-snippet"},[n("div",{staticClass:"language"},[e._v(e._s(e.lang))]),n("div",{staticClass:"line-numbers"},e._l(e.lineCount,(function(t){return n("div",{key:t,staticClass:"line-number"},[e._v(e._s(t))])})),0),n("div",{staticClass:"render",domProps:{innerHTML:e._s(e.result)}})])}),[],!1,(function(e){for(let t in _)this[t]=_[t]}),null,null,null);y.options.__file="docs-src/components/CodeSnippet.vue";var C=y.exports;const E={};var w=g({data:()=>({open:!0}),computed:{title(){return this.open?"隐藏代码":"显示代码"}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"collapse",class:{open:e.open}},[n("div",{staticClass:"toggle",on:{click:function(t){e.open=!e.open}}},[e._v(e._s(e.title)+" "),n("span",{staticClass:"icon"},[e._v("▼")])]),e.open?n("div",{staticClass:"content"},[e._t("default")],2):e._e()])}),[],!1,(function(e){for(let t in E)this[t]=E[t]}),"ea4d35e4",null,null);w.options.__file="docs-src/components/Collapse.vue";var T=w.exports;function $(e="printIframe"){document.getElementById(e)&&document.body.removeChild(document.getElementById(e));const t=document.createElement("iframe");return t.id=e,t.style.position="absolute",t.style.top="-9999px",t.style.left="-9999px",document.body.appendChild(t),t}const I='<div style="page-break-after: always;"></div>';const O={};var k=g({name:"Home",components:{CodeSnippet:C,Collapse:T},mixins:[{data:()=>({formPrintData:[]}),mounted(){this.iframeId="printIframe",this.iframe=$(this.iframeId)},methods:{preview(){},getPrintString(e){let t="";return new Promise((n=>{e?Promise.all(e.map((e=>this.getTemplateData(e.data)))).then((r=>{r.forEach(((n,r)=>{let{copies:o}=e[r];o=o||1,t+=`${new Array(o).fill(n).join(`${I}`)}${I}`})),n(`\x3c!--startprint--\x3e${t}\x3c!--endprint--\x3e`)})):(t+=this.$el.innerHTML,n(`\x3c!--startprint--\x3e${t}\x3c!--endprint--\x3e`))}))},getFuncCfg(){return new Promise(((e,t)=>{"EC_CL"!==this.prodOrderType?e():this.$store.dispatch("base/getFuncCfg",{funcTypeCode:"edit",orderTypeCode:this.custOrderType}).then((t=>{t&&t.params&&t.params.AFFILIATION_PARAM&&t.params.AFFILIATION_PARAM.paramListValues&&t.params.AFFILIATION_PARAM.paramListValues.length?Object.assign(this.formData,{affiliationTypeOption:t.params.AFFILIATION_PARAM.paramListValues}):Object.assign(this.formData,{affiliationTypeOption:[]}),e()})).catch((e=>{t(e)}))}))},async print(e,t){await this.getFuncCfg(),this.formPrintData=e,this.$nextTick((()=>{this.printData(e,t)}))},async printData(e,t){const{afterPrint:n}=t||{},r=document.getElementById(this.iframeId).contentWindow;this.addStyleToIframe(r),this.addLinkToIframe(r);const o=await this.getPrintString(e);r.document.write(`<div>${o}</div>`),r.addEventListener("afterprint",(e=>{n&&n(),$()})),r.document.close(),r.focus(),setTimeout((()=>{r.print()}),300)},addStyleToIframe(e){const t=document.getElementsByTagName("style");Array.prototype.slice.call(t,0).forEach((t=>e.document.write(`<style>${t.innerHTML}</style>`)))},addLinkToIframe(e){const t=document.getElementsByTagName("link");Array.prototype.slice.call(t,0).forEach((t=>e.document.write(t.outerHTML)))}}}],data:()=>({printObj:{selector:"#printMe",popTitle:"good print",beforeOpenCallback(e){e.printLoading=!0,console.log("打开之前")},openCallback(e){e.printLoading=!1,console.log("执行了打印")},closeCallback(e){console.log("关闭了打印工具")}},mainSnippet:'\ndata () {\n  return {\n    config: {\n        isDetail: false,\n        columns: [\n          {\n            prop: "prop1",\n            label: "文本",\n            attr: { width: "180" },\n            format: ({ prop1 }) => `文本${prop1}`,\n          },\n          {\n            prop: "prop2",\n            label: "输入框",\n            attr: { minWidth: "120" },\n            edit: true,\n          },\n          {\n            prop: "prop3",\n            label: "下拉框",\n            attr: { minWidth: "120" },\n            edit: true,\n            type: "select",\n            options: [\n              { label: "选项一", value: "1" },\n              { label: "选项二", value: "2" },\n            ],\n          },\n          {\n            prop: "prop4",\n            label: "日期",\n            attr: { minWidth: "140" },\n            edit: true,\n            type: "date",\n            required: true,\n          },\n          { prop: "opt", label: "操作", attr: { minWidth: "120" }, edit: true },\n        ],\n        data: [\n          {\n            prop1: "1",\n            prop2: "输入框1",\n            prop3: "1",\n            prop4: "2021-06-17",\n          },\n          {\n            prop1: "2",\n            prop2: "输入框2",\n            prop3: "2",\n            prop4: "2021-06-17",\n          },\n          {\n            prop1: "3",\n            prop2: "",\n            prop3: "",\n            prop4: "",\n          },\n        ],\n      },\n  }\n},\nmethods: {\n  submit(res) {\n    console.log(res);\n  },\n},\n',componentSnippet:'\n<EditorTable :config="config" @submit="submit" />\n',config:{isDetail:!1,columns:[{prop:"prop1",label:"文本",attr:{width:"180"},format:({prop1:e})=>`文本${e}`},{prop:"prop2",label:"输入框",attr:{minWidth:"120"},edit:!0},{prop:"prop3",label:"下拉框",attr:{minWidth:"120"},edit:!0,type:"select",options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"}]},{prop:"prop4",label:"日期",attr:{minWidth:"140"},edit:!0,type:"date",required:!0},{prop:"opt",label:"操作",attr:{minWidth:"120"},edit:!0}],data:[{prop1:"1",prop2:"输入框1",prop3:"1",prop4:"2021-06-17"},{prop1:"2",prop2:"输入框2",prop3:"2",prop4:"2021-06-17"},{prop1:"3",prop2:"",prop3:"",prop4:""}]}}),methods:{submit(e){console.log(e)},handlePrint(){print()}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-home page"},[n("section",{staticClass:"demo"},[n("div",{ref:"printFrame",staticClass:"section-content",attrs:{id:"printMe"}},[n("EditorTable",{attrs:{config:e.config},on:{submit:e.submit}})],1)])])}),[],!1,(function(e){for(let t in O)this[t]=O[t]}),null,null,null);k.options.__file="docs-src/views/Home.vue";var j=k.exports;const S=["vue","vuejs","rollup","eslint","gihub-pages","gihub-actions","template","component"],x="dist/EditorTable.umd.js",A="dist/EditorTable.es.js",L="dist/EditorTable.min.js",P={lint:"vue-cli-service lint",start:"vite",test:"vite --config vite.config.test.js","build:app":"cross-env BULID_TYPE=app vite build","build:lib":"cross-env BULID_TYPE=lib vite build","yalc:init":"yarn global add yalc nodemon","yalc:push":"yarn build:lib && yalc push","yalc:watch":"nodemon --ignore dist/ --ignore node_modules/ --watch src -C -e js,jsx,ts,vue,html,less,scss --debug -x 'yarn yalc:push'"},F={type:"git",url:"https://github.com/roftLin/EditorTable.git"},D={url:"https://github.com/roftLin/EditorTable/issues"},M="https://roftLin.github.com/EditorTable",V={vue:"^2.6.10"},R={"@vue/compiler-sfc":"^3.0.5","@vue/test-utils":"2.0.0-rc.0","cross-env":"^6.0.3","element-ui":"^2.10.1","highlight.js":"^9.17.1",puppeteer:"^7.1.0",sass:"^1.34.1",screenfull:"^5.0.0",vite:"^2.3.7","vite-plugin-test":"^0.0.5","vite-plugin-vue2":"^1.6.2","vue-print-nb":"^1.7.4","vue-router":"3.0.1"},W=["> 1%","last 2 versions"];var N={name:"EditorTable",version:"0.0.1",description:"vue组件模板",keywords:S,private:!1,author:"roftLin",license:"MIT",main:x,module:A,unpkg:L,scripts:P,repository:F,bugs:D,homepage:M,dependencies:V,devDependencies:R,browserslist:W},B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",name:"EditorTable",version:"0.0.1",description:"vue组件模板",keywords:S,author:"roftLin",license:"MIT",main:x,module:A,unpkg:L,scripts:P,repository:F,bugs:D,homepage:M,dependencies:V,devDependencies:R,browserslist:W,default:N});const H=N.name.replace(/(^\w|-\w)/g,(e=>e.replace("-","").toUpperCase()));const U=`\nimport Vue from 'vue'\nimport App from './App.vue'\nimport ${H} from '${N.name}'\nimport '${N.name}.css'\n\nVue.use(${H})\n\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n});\n`,q={};var z=g({name:"Start",components:{CodeSnippet:C},data:()=>({mainSnippet:U})},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-Start page"},[n("section",{staticClass:"snippets"},[n("div",{staticClass:"section-content"},[n("CodeSnippet",{staticClass:"snippet",attrs:{code:e.mainSnippet,lang:"js"}})],1)])])}),[],!1,(function(e){for(let t in q)this[t]=q[t]}),null,null,null);z.options.__file="docs-src/views/Start.vue";var X=z.exports;c.use(u);const Y=[{path:"/",name:"Home",component:j},{path:"/start",name:"上手",component:X},{path:"*",redirect:"/"}],G=new u({mode:"history",routes:Y});const J={};var K=g({data:()=>({routes:Y.filter((e=>e.name)),config:N}),created(){document.title=N.name+"-demo"},methods:{toggleFullscreen(e){d.isEnabled&&d.toggle(document.documentElement)}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",[n("h1",[e._v(e._s(e.config.name))]),n("div",{staticClass:"command"},[e._v("yarn add "+e._s(e.config.name))]),n("section",{staticClass:"nav"},[e._l(e.routes,(function(t){return n("router-link",{key:t.path,attrs:{to:t.path}},[e._v(e._s(t.name))])})),n("a",{attrs:{href:"https://github.com/"+e.config.author+"/"+e.config.name+"#usage"}},[e._v("文档")]),n("a",{on:{click:e.toggleFullscreen}},[e._v("切换全屏")])],2)]),n("router-view")],1)}),[],!1,(function(e){for(let t in J)this[t]=J[t]}),null,null,null);K.options.__file="docs-src/App.vue";var Q=K.exports;const Z={};var ee=g({functional:!0,props:{prop:{type:String,default:""},rules:{type:Object,default:()=>{}},type:{type:String,default:"input"},options:{type:Array,default:()=>[]}},render:(e,{props:{prop:t,rules:n,type:r,options:o},data:i,listeners:{input:s=(()=>{})}})=>e("el-form-item",{props:{prop:t,rules:n}},[{input:e=>e("el-input",i),select:e=>e("el-select",{props:a({},i.attrs),on:{change(e){s(e)}}},o.map((t=>e("el-option",{props:l(a({},t),{key:t.value})})))),date:e=>e("el-date-picker",a({props:{type:"date",valueFormat:"yyyy-MM-dd"}},i)),opt:()=>""}[r](e)])},undefined,undefined,!1,(function(e){for(let t in Z)this[t]=Z[t]}),null,null,null);ee.options.__file="src/lib/CommonInput.vue";var te=ee.exports;const ne={};var re=g({props:{column:{type:Object,default:()=>({})},row:{type:Object,default:()=>({})}}},(function(e,t){var n=t._c;return n("div",[t.props.row[t.props.column.prop]?t._e():n("span"),t.props.column.format&&"function"==typeof t.props.column.format?n("span",[t._v(t._s(t.props.column.format(t.props.row)))]):n("span",[t._v(t._s(t.props.row[t.props.column.prop]))])])}),[],!0,(function(e){for(let t in ne)this[t]=ne[t]}),null,null,null);re.options.__file="src/lib/CommonText.vue";var oe=re.exports;const ie={};var se=g({name:"EditorTable",props:{config:Object,default:()=>({})},components:{CommonInput:te,CommonText:oe},data(){const{columns:e=[],data:t=[],isDetail:n=!1,isSubmit:r=!1}=this.config||{};return{form:{list:t&&t.length>0?t.map((t=>e.reduce(((e,n)=>l(a({},e),{[n.prop]:t[n.prop]||""})),{}))):[this.createInitItem()]},columns:e,rules:e.reduce(((e,t)=>l(a({},e),{[t.prop]:{required:!1!==t.required,message:t.label+"必填",trigger:"blur"}})),{}),isDetail:n,isSubmit:r}},methods:{createInitItem(){const{columns:e=[]}=this.config||{};return e.reduce(((e,t)=>l(a({},e),{[t.prop]:""})),{isAdd:!0})},initAttrs(e,t){const{type:n,label:r}=e,o=Object.fromEntries(Object.entries(e).filter((([e])=>!/(prop|edit|label|attr|format)/.test(e))));return Object.assign(o,{prop:`list.${t}.${e.prop}`,rules:this.rules[e.prop],placeholder:(/(select|el-date-picker)/.test(n)?"请选择":"请输入")+r}),o},add(){this.form.list.push(this.createInitItem())},save(e,t){const n=Object.keys(e).map((e=>`list.${t}.${e}`)).filter((e=>!/isAdd|opt/g.test(e)));let r=0;this.$refs.form.validateField(n,(e=>{e&&r++})),0===r&&this.$emit("submit",Object.fromEntries(Object.entries(e).filter((([e])=>!/^(isAdd|opt)/.test(e)))))},del(e){this.form.list.splice(e,1),this.$refs.form.fields.forEach((t=>{t.prop.split(".")[1]===e&&t.clearValidate()}))},submit(){this.$refs.form.validate((e=>{e&&this.$emit("submit",this.form.list.map((e=>Object.fromEntries(Object.entries(e).filter((([e])=>!/^(isAdd|opt)/.test(e)))))))}))},resetField(e){this.$refs.form.fields.forEach((t=>{t.prop.split(".")[1]===e+""&&t.resetField()}))},reset(){this.$refs.form.resetFields()}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"form",attrs:{model:e.form,size:"small",rules:e.rules}},[e.isDetail?e._e():n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("新增")])],1),n("el-table",{attrs:{data:e.form.list,border:""}},e._l(e.columns,(function(t){return n("el-table-column",e._b({key:t.prop,attrs:{label:t.label,prop:t.prop},scopedSlots:e._u([{key:"default",fn:function(r){var o=r.row,i=r.$index;return[t.edit?[e.isDetail?n("CommonText",{attrs:{column:t,row:o}}):["opt"!==t.prop?n("CommonInput",e._b({staticClass:"width100",model:{value:o[""+t.prop],callback:function(n){e.$set(o,""+t.prop,n)},expression:"row[`${column.prop}`]"}},"CommonInput",e.initAttrs(t,i),!1)):[n("div",{staticClass:"operating"},[n("el-link",{attrs:{type:"primary",underline:!1,cl:""},on:{click:function(t){return e.save(o,i)}}},[e._v("保存")]),o.isAdd?n("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(t){return e.del(i)}}},[e._v("删除")]):e._e(),n("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(t){return e.resetField(i)}}},[e._v("重置")])],1)]]]:n("CommonText",{attrs:{column:t,row:o}})]}}],null,!0)},"el-table-column",t.attr,!1))})),1),e.isDetail?e._e():n("el-form-item",[e.isSubmit?[n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")]),n("el-button",{on:{click:e.reset}},[e._v("重置")])]:e._e()],2)],1)}),[],!1,(function(e){for(let t in ie)this[t]=ie[t]}),"1219abac",null,null);se.options.__file="src/lib/index.vue";const ae=[se.exports],le=function(e){ae.forEach((t=>{e.component(t.name,t)}))};"undefined"!=typeof window&&window.Vue&&le(window.Vue);(function(e,t){if(!t)return e();if(void 0===v){const e=document.createElement("link").relList;v=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in b)return;b[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":v,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))})((()=>Promise.resolve().then((function(){return B}))),void 0).then((e=>{return t=`../dist/${e.name}.css`,Promise.reject(new Error("Unknown variable dynamic import: "+t));var t})),c.use(m),c.use(le),c.use(f,{locale:h,size:"mini"}),new c({el:"#app",router:G,render:e=>e(Q)});
