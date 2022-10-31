(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{305:function(t,a,s){"use strict";s.r(a);var e=s(13),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"call-bind-apply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call-bind-apply"}},[t._v("#")]),t._v(" call bind apply")]),t._v(" "),a("p",[t._v("call接收的第一个参数就是新的this指向的东西 也就是重新绑定了原有对象的this指向让原有对象的this指向发生了改变，也就是new的对象里并没有相关的方法只是冒用了old对象的方法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("eg：\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oldobj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oldobj"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("txt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newobj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"new"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmbs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("bind本身是一个方法 而且bind方法的返回值也是一个函数 比如 mbs.say.bind(newobj) 这个执行完后会返回一个函数也就是 需要一个东西去承接而不是主动执行 比如 const NewSay = mbs.say.bind(newobj)  NewSay()需要自己再去执行一次这个函数之后才能进行下一步")]),t._v(" "),a("h2",{attrs:{id:"快速居中对齐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速居中对齐"}},[t._v("#")]),t._v(" 快速居中对齐")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transfrom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tranlate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n//flex布局\n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("flex\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("auto\n")])])]),a("h2",{attrs:{id:"vw与百分比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vw与百分比"}},[t._v("#")]),t._v(" vw与百分比")]),t._v(" "),a("p",[t._v("百分比单位针对的是父级下的百分比，也就是参照物是父级元素，都是父级元素的百分之多少，但是vw和px一样是一个固定的单位")]),t._v(" "),a("h2",{attrs:{id:"块级与行内元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块级与行内元素"}},[t._v("#")]),t._v(" 块级与行内元素")]),t._v(" "),a("p",[t._v("块级元素自己就可以占据一行，但是行内元素就是行内占据多少就是多少长度")]),t._v(" "),a("h2",{attrs:{id:"如何让谷歌浏览器支持更小的字体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何让谷歌浏览器支持更小的字体"}},[t._v("#")]),t._v(" 如何让谷歌浏览器支持更小的字体")]),t._v(" "),a("p",[t._v("通过tranfrom让字体自身进行缩放而不是一味的调节font-size")]),t._v(" "),a("h2",{attrs:{id:"padding与margin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#padding与margin"}},[t._v("#")]),t._v(" padding与margin")]),t._v(" "),a("p",[t._v("都知道是内外边距，但是要知道padding针对的是元素自身，而margin针对的是元素外的东西。")]),t._v(" "),a("h2",{attrs:{id:"浅拷贝与深拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浅拷贝与深拷贝"}},[t._v("#")]),t._v(" 浅拷贝与深拷贝")]),t._v(" "),a("p",[t._v("针对常规数据类型基本上不涉及到拷贝的概念，基本数据类型涉及的都是赋值而不是拷贝，拷贝针对的大多数都是引用数据类型")]),t._v(" "),a("h2",{attrs:{id:"性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210281919936.png",alt:"image-20221027205846927"}})]),t._v(" "),a("h2",{attrs:{id:"如何实现简单的数据委托"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何实现简单的数据委托"}},[t._v("#")]),t._v(" 如何实现简单的数据委托")]),t._v(" "),a("p",[t._v("避免简单单一的对某些dom元素重复进行事件绑定，将多个简单并列的事件在父级做一次代理，当这些事件发生时，父元素检测只要是属于自己子元素上发的事件都进行代处理，这种方法也解决了新加入的元素可能也需要重新绑定事件的过程。")]),t._v(" "),a("h2",{attrs:{id:"v-show与v-if"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-show与v-if"}},[t._v("#")]),t._v(" v-show与v-if")]),t._v(" "),a("p",[t._v("两者都可以在页面中控制元素是否显示但是两者的基本原理还是不同的\nv-show：直接操作 css ---\x3edisplay属性,让display值为none，dom元素本身还是存在的，只是不显示了\nv-if：直接不参与渲染流程，在dom树中根本就不添加这个元素，相比于v-show，v-if进行切换的时候的资源消耗更高，")]),t._v(" "),a("p",[t._v("使用场景：")]),t._v(" "),a("p",[a("code",[t._v("v-if")]),t._v(" 与 "),a("code",[t._v("v-show")]),t._v(" 都能控制"),a("code",[t._v("dom")]),t._v("元素在页面的显示\n"),a("code",[t._v("v-if")]),t._v(" 相比 "),a("code",[t._v("v-show")]),t._v(" 开销更大的（直接操作"),a("code",[t._v("dom")]),t._v("节点增加与删除）\n如果需要非常频繁地切换，则使用 v-show 较好\n如果在运行时条件很少改变，则使用 v-if 较好")]),t._v(" "),a("h2",{attrs:{id:"vue进行实例挂载的时候经历了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue进行实例挂载的时候经历了什么"}},[t._v("#")]),t._v(" Vue进行实例挂载的时候经历了什么")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("new Vue")]),t._v("的时候调用会调用"),a("code",[t._v("_init")]),t._v("方法\n"),a("ul",[a("li",[t._v("定义 "),a("code",[t._v("$set")]),t._v("、"),a("code",[t._v("$get")]),t._v(" 、"),a("code",[t._v("$delete")]),t._v("、"),a("code",[t._v("$watch")]),t._v(" 等方法")]),t._v(" "),a("li",[t._v("定义 "),a("code",[t._v("$on")]),t._v("、"),a("code",[t._v("$off")]),t._v("、"),a("code",[t._v("$emit")]),t._v("、"),a("code",[t._v("$off")]),t._v("等事件")]),t._v(" "),a("li",[t._v("定义 "),a("code",[t._v("_update")]),t._v("、"),a("code",[t._v("$forceUpdate")]),t._v("、"),a("code",[t._v("$destroy")]),t._v("生命周期")])])]),t._v(" "),a("li",[t._v("调用"),a("code",[t._v("$mount")]),t._v("进行页面的挂载")]),t._v(" "),a("li",[t._v("挂载的时候主要是通过"),a("code",[t._v("mountComponent")]),t._v("方法")]),t._v(" "),a("li",[t._v("定义"),a("code",[t._v("updateComponent")]),t._v("更新函数")]),t._v(" "),a("li",[t._v("执行"),a("code",[t._v("render")]),t._v("生成虚拟"),a("code",[t._v("DOM")])]),t._v(" "),a("li",[a("code",[t._v("_update")]),t._v("将虚拟"),a("code",[t._v("DOM")]),t._v("生成真实"),a("code",[t._v("DOM")]),t._v("结构，并且渲染到页面中")])]),t._v(" "),a("h2",{attrs:{id:"v-if和v-for的优先级是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-if和v-for的优先级是什么"}},[t._v("#")]),t._v(" v-if和v-for的优先级是什么？")]),t._v(" "),a("p",[t._v("当两者作用于同一个标签元素的时候，通过观察生成的render函数可以知道，v-for的优先级大于v-if的优先级，也就是先进行列表元素的渲染，然后进行判断，会造成性能的浪费，最好把v-if放在区域渲染的地方，而不是多次的调用他")]),t._v(" "),a("h2",{attrs:{id:"为什么data要写成一个函数而不是对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么data要写成一个函数而不是对象"}},[t._v("#")]),t._v(" 为什么data要写成一个函数而不是对象")]),t._v(" "),a("p",[t._v("防止在进行组件复用的时候，多次创建一个相同的组件对象后，多个data对象指向了同一个data地址，在comA中修改的数据会导致comB中数据同样发生改变。\n如果写成函数，函数不会产生数据污染的情况，如果你将其写成了一个对象，Vue底层的init初始化方法会将其封装成一个函数并向外抛出警告。")]),t._v(" "),a("h2",{attrs:{id:"为什么vue2无法检测到手动添加的对象属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么vue2无法检测到手动添加的对象属性"}},[t._v("#")]),t._v(" 为什么Vue2无法检测到手动添加的对象属性")]),t._v(" "),a("p",[t._v("原因就出在Vue2的数据劫持原理，Vue2的数据劫持是利用definePrototype，这样的写法只能对Object身上的某个属性添加get set方法，但是直接对Object添加属性，不会走数据劫持的道路，也就不会通知收集依赖以及触发依赖，自然就不会引起页面的变化。但是Vue3使用的Proxy进行重写就可以监听到对象身上大部分的属性操作，进而触发依赖")]),t._v(" "),a("h2",{attrs:{id:"axios-js以及ts的请求封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios-js以及ts的请求封装"}},[t._v("#")]),t._v(" Axios JS以及TS的请求封装")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("通过对vue axios请求的封装 减少后期维护代码的工作量\n而且可以施加拦截器对axios请求进行进一步分析  拦截对错误信息也可以进行进一步提示\n基本模板\nnetwork"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" axios "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'axios'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("baseURL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/////")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("timeout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/////")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" config\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("computed计算属性自身有缓存 多次同样的调用并不会多次调")]),t._v(" "),a("h2",{attrs:{id:"前端代理proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端代理proxy"}},[t._v("#")]),t._v(" 前端代理Proxy")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("代理！**\n\n前端代理主要就是为了解决跨域问题 当然如果后端可以解决 当我没说.......  通过设置文件更改了请求的url 但是打包后可能会出现 空白页 url丢失的问题 这个时候需要对打包工具进行配置 或者进行进一步修改\n\n打包配置：修改路由模式 history-----\x3ehash 修改打包路径 避免资源找不到的问题  如果需要history模式 跟我没关系  扔给后端就完事了  让他自己重定向\n\n代理配置： 通过设置代理的环境变量 更改baseurl\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("路由！\n\nhistory模式与hash模式的区别  history会发送请求 而hash模式会携带参数进行url请求  前端自测使用history 打包要用hash\n\nSPA 指的是单页面应用 SEO优化就不好 当然性能可能会不好 因为多次路由导致来回切换 \n\n路由传值就是显示传值和隐shi传值\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Vue源码\n\nVue2双向绑定原理\n\nVue2采取的原理本身叫做数据劫持，利用的是Object.defineProperty( )方法设置一个对象中的某个属性，当这个属性被调用的时候调用的就是get()操作 从而取得这个数据 或者是对这个数据进行二次加工 比如说给一个书名加上书名号这种简单操作 ，同样如果这个属性被修改那么就要进一步调用set函数 去进行修改后的操作 比如说Vue2本身是一个双向绑定的设计 调用set的同时要引起试图的改变\n\n1.实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。\n\n2.实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。\n\n3.实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。\n\n同样 vue的数据劫持也是通过 定义的setter 和getter 实现的如果 数据发生改变 就会监视到数据的变化然后引起识图的变化\n\nVue的事件循环机制\n\n　**简单总结事件循环：**\n\n​\t\t首先要知道浏览器以及js自身的事件循环机制 以及js运行顺序\n\n　　　同步代码执行 -> 查找异步队列，推入执行栈，执行callback1[事件循环1] ->查找异步队列，推入执行栈......\n\n　　即每个异步callback，最终都会形成自己独立的一个事件循环。\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("　\nVue2的组件通信方式\n\n1. Props特点父传子 相当于父亲把数据当成参数向下传递但是儿子同样要声明并且接受这个参数\n\n2. $emit特点子传父 其实就是儿子用自己的数据调用了父亲的函数\n\n3. v-slot\n\n4. 组件的chileren和parent属性\n5. $ref直接拿属性\n\n6. 通过$attrs和 listeners\n7. 全局事件总线 eventBus\n8. Vuex stroe\n")])])]),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[t._v("vue2的生命周期都是成对出现的\n\n1.beforeCreat  在一个组件被创建出来以前对应的有一个creat \n\n2.beforeMount 挂载之前对应的有mount\n\n3.beforeupdate  数据发生变化但是还没哟u更新到数据层和 update\n\n4.beforeDestory 和destoryed\n\n但是vue3中对生命周期的钩子做出了一定的修改 现在vue3只有六个生命周期\n\n1. onBeforeMount和moMount\n2. onBeforeupdate和update\n3. onBeforeunmount和onUnmount\n\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("回流与重绘 这就牵扯到浏览器工作原理了\n\n浏览器其实本身和js差不多 在识别html语句的时候 也会生成一个dom树 然后再进一步 解析css 样式  然后根据你自己写的布局 进行生成 布局 当然在这个过程中 不可见元素是不会被计算在内的 就是display：none的元素 但是当你使用定位以后 你的图层其实是分层的 这就导致 需要层叠的去生成元素  然后根据可视窗口进行光栅化渲染\n\n当然这个过程在第一次打开页面的时候是肯定会经理的 但是在你通过js或者响应式 更改了 布局以后这个过程就是重新走一遍 这就导致了 浏览器资源的消耗\n\n所以在日常的代码中 要减少这种资源的利用 也就是减少回流和重绘\n\n1.合并多次对dom元素的操作和修改 减少次数上的浪费\n\n2.如果dom修改的东西过多 可以通过更换类名 而不是依次更改\n\n3.让动起来的东西 脱离文档流 这样就不会重新生成dom树\n\n4.css3硬件加速（GPU加速）这是css3自带的属性 可以减少一部分的回流\n\n\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("for of 和 for in 的区别\n\nfor in 遍历的是可迭代也就是可枚举类型 所以他适合用来遍历对象 而且 可能会遍历到一些原型 for of就更适合遍历数组\n\n而且在foreach 中  使用break 和return 并不会返回上层\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("箭头函数里面的this指向有问题而且不能使用argements对象来获取参数 而且也没有yield命令\n")])])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210312107750.png",alt:"image-20220310205956227"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131936946.png",alt:"image-20220310210148969"}})]),t._v(" "),a("h2",{attrs:{id:"diff算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diff算法"}},[t._v("#")]),t._v(" diff算法")]),t._v(" "),a("p",[t._v("dom数据化也就是虚拟dom把dom，避免重复修改dom，操作dom浪费浏览器性能 但是标签一定要打上key的唯一标识，要不然并不会进行相应的操作，至于为什么dom变成的数据格式问题，这是vue底层的原理也就是dom元素解析原理，这个在vue原理方面有解释")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Promise属于微任务在Promise体内 t 而定时器属于宏任务 这么一对比 Prmise的优先级大于定时器\n")])])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210312107583.png",alt:"image-20220325222130056"}})]),t._v(" "),a("h2",{attrs:{id:"vue解决首屏加载速度慢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue解决首屏加载速度慢"}},[t._v("#")]),t._v(" Vue解决首屏加载速度慢")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1.路由懒加载 避免 在不用的时候对其他的组件进行渲染\n2.ui库按需引入，不要直接引入所有的ui组件库\n3.静态资源 利用前端进行一些简单的存储避免重复请求资源\n4.避免组件重复打包，利用webpack的配置 如果重复使用的组件进行单独打包\n5.图片进行压缩保存，避免使用特别大的图片进行使用\n")])])]),a("h2",{attrs:{id:"vue底层收集data变化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue底层收集data变化"}},[t._v("#")]),t._v(" Vue底层收集data变化")]),t._v(" "),a("p",[t._v("在一个data的值发生变化的时候并不会立即执行重新渲染这个操作，而是内部维护了一个队列，将涉及的数据变更放入队列，然后统一执行，减少系统开销")]),t._v(" "),a("h2",{attrs:{id:"vue是怎么收集依赖的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue是怎么收集依赖的"}},[t._v("#")]),t._v(" Vue是怎么收集依赖的")]),t._v(" "),a("p",[t._v("初始化组件实例对象的时候，会对data里的书记进行初始化，让其转换成响应式对象，在转换的过程中会收集依赖，其实主要是在Get的时候，Get的时候，Get证明了你对这个数据有引用，一旦更改就需要通知到所有引用他的地方，而一旦触发了get就意味着你已经用了这个数据，所以在get中手机依赖是最合适的")]),t._v(" "),a("p",[t._v("而依赖Dep是一个class内部维护了一个Map进行存储每个变量对应的依赖，其实应该是weakmap于map相比weakmap会在原来对象被设置为null的时候进行内存回收，而不会想Map一样不被内存回收")]),t._v(" "),a("h2",{attrs:{id:"vue-router与location-href的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router与location-href的区别"}},[t._v("#")]),t._v(" Vue-router与location.href的区别")]),t._v(" "),a("p",[t._v("使用router是静态跳转其实页面并没有跳转，location不仅跳转页面而且刷新页面")]),t._v(" "),a("h2",{attrs:{id:"vue3为什么要使用proxy重写数据劫持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3为什么要使用proxy重写数据劫持"}},[t._v("#")]),t._v(" Vue3为什么要使用Proxy重写数据劫持")]),t._v(" "),a("p",[t._v("1.支持的复杂数据类型更多比如Map Set\n2.对某些对象数据新属性的添加也可以检测的到，不再需要通过Vue.set进行\n3.全方位的数组变化检测")]),t._v(" "),a("h2",{attrs:{id:"vue中key的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue中key的作用"}},[t._v("#")]),t._v(" Vue中key的作用")]),t._v(" "),a("p",[t._v("Vue内部维护的有一个 虚拟Dom对比算法 再进行更新页面的时候 会将新产生的虚拟Dom于原来的虚拟Dom进行对比 将两次不同Dom的地方进行替换 将相同的地方保持不变 进一步在生成真实Dom的时候 减少浏览器渲染负荷  但是如果一旦在 使用key不当的情况下 虚拟Dom 可以误认为 两个不同的 标签 是一个标签 进行替换操作 而不是重新生成 导致 进一步的错误 所以 在 代码中key的存在 尽量保持唯一性 而且 和标签中的 属性 最好一致且唯一")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131844226.png",alt:"image-20211005165958901"}})]),t._v(" "),a("p",[t._v("v-for中使用key可以在diff的时候对未更改数据进行更快的复用，也就是跟踪元素.\n·更准确:因为带 key就不是就地复用了，在sameNode函数a.key=== b.key对比中可以\n避免就地复用的情况。所以会更加准确。\n·更快速:利用key的唯一性生成map对象来获取对应节点，比遍历方式更快\n且在v-for中如果使用index作为key其实用处不大只是为了不报错，因为数组不管如何变化下标永远都是从0开始，会让diff进行更多的检测")])])}),[],!1,null,null,null);a.default=n.exports}}]);