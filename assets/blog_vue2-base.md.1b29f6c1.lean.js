import{_ as s,c as n,b as a,d as l,t as p,a as o,o as e}from"./app.db8e6cb7.js";const t=JSON.parse('{"title":"vue | vue2知识点归纳与总结","description":"","frontmatter":{"title":"vue | vue2知识点归纳与总结"},"headers":[],"relativePath":"blog/vue2-base.md","lastUpdated":1681203305000}'),c={name:"blog/vue2-base.md"},r=o("",6),D=a("code",null,"v-cloak",-1),y=a("li",null,[a("code",null,"v-text"),l(" 会先执行 覆盖 元素中原本的内容 但是插值表达式只会覆盖自己的占位符，默认不会闪烁")],-1),F=a("li",null,[a("code",null,"v-html"),l(" 渲染 html标签 覆盖元素中原有元素内容")],-1),i=a("li",null,[a("code",null,"v-bind"),l(": 简写为: 用来绑定数据 可以写合法的js表达式")],-1),C=a("li",null,[a("code",null,"v-on"),l(": 简写为 "),a("code",null,"@"),l(" 用来点击事件")],-1),A=o("",56),d=a("li",null,[a("p",null,[a("code",null,"beforeCreate()"),l("：这是我们遇到的第一个生命周期函数,表示实例完全被创建出来之前,会执行它...")])],-1),u=a("li",null,[a("p",null,[a("code",null,"created()"),l(": 这是遇到的第二个生命周期函数...")])],-1),m=a("code",null,"beforeMount()",-1),h=a("code",null,"beforeMount",-1),g=o("",6),E=o("",284);const v=s(c,[["render",function(s,o,t,c,v,f){return e(),n("div",null,[r,a("ul",null,[a("li",null,[D,l(" 解决"+p()+"插值闪烁问题",1)]),y,F,i,C]),A,a("ul",null,[d,u,a("li",null,[a("p",null,[m,l("：这是遇到的第3个生命周期函数,表示 模板已经在内存中编辑完成,但是尚未把模板渲染(挂载)到页面中。在 "),h,l(" 执行的时候,页面中的元素,还没有被真正替换过来,只是之前写的一些模板字符串。就像"+p(s.text)+"这样",1)])]),g]),E])}]]);export{t as __pageData,v as default};
