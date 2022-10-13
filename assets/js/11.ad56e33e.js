(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{301:function(t,e,a){"use strict";a.r(e);var s=a(13),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"vue2入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue2入门"}},[t._v("#")]),t._v(" Vue2入门")]),t._v(" "),e("p",[t._v("一份很简单的入门文档")]),t._v(" "),e("h3",{attrs:{id:"v-bind-绑定元素属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-bind-绑定元素属性"}},[t._v("#")]),t._v(" V-bind 绑定元素属性")]),t._v(" "),e("p",[t._v("将后面所指的东西变为表达式后期直接简写成：\n一般 标签的属性利用 ：进行绑定js表达式而标签里面的内容利用双向绑定信息绑定信息。而Vue写法中的 date属性 同样支持吃进一步绑定对象信息 用于区分多个对象之间同名属性 的问题 v-model 利用 这个可以实现双向数据绑定 但是 一般只能利永再 表单元素中 因为一般只有表单元素 拥有value属性")]),t._v(" "),e("p",[t._v("所以 V-model 针对的就是表单元素的value进行双向绑定")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931154.png",alt:"image-20210729162456492"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931325.png",alt:"image-20210730132647608"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931060.png",alt:"image-20210730132832555"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931867.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931376.png",alt:"image-20210730143653727"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931132.png",alt:"image-20210730144750005"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931629.png",alt:"image-20210730145647030"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931114.png",alt:"image-20210801145611608"}})]),t._v(" "),e("h3",{attrs:{id:"vue数据代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue数据代理"}},[t._v("#")]),t._v(" Vue数据代理")]),t._v(" "),e("p",[t._v("利用defineperproty 进行两个对象类型的互相绑定 利用 seteer 和 getter  对第一个对象调用第二个对象的数据的时候 进行相应修改和操作")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931953.png",alt:"image-20211004181755120"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931481.png",alt:""}})]),t._v(" "),e("p",[t._v("通过数据代理 简化了vue框架的代码 使得后期对vue代码更加简洁\n当然_date 中的数据 就是真正的数据位置 只不过vm实例对象对他做了一个数据劫持\nVue 中事件的参数 中$event 可以当作事件传入\n@click.事件修饰符")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931886.png",alt:"image-20211005145605150"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931667.png",alt:"image-20211005150637054"}})]),t._v(" "),e("p",[t._v("键盘事件中简写的别名")]),t._v(" "),e("h3",{attrs:{id:"vue-的计算属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-的计算属性"}},[t._v("#")]),t._v(" Vue 的计算属性")]),t._v(" "),e("p",[t._v("计算属性在第一次加载页面的时候就进行了一次加载\n如果需要对vue实例的某些属性进行一些 复杂操作 可以借助计算属性 的操作 计算属性 类似于上面的数据代理 后 将处理后的数据 作为一个属性添加到vm身上 如果这个操作并不是太复杂的操作 接用插值表达式就可以")]),t._v(" "),e("p",[t._v("这个好处在于他内部维护了一个缓存机制如果数据被多次访问直接用数据可以加快访问速度")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931543.png",alt:"image-20211005153254301"}})]),t._v(" "),e("p",[t._v("如果这个计算属性只考虑读取 没考虑修改的时候 可以将get完全简写成一个函数 以此来简化代码量")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931961.png",alt:"image-20211005153538762"}})]),t._v(" "),e("h3",{attrs:{id:"vue-监视属性-watch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-监视属性-watch"}},[t._v("#")]),t._v(" Vue 监视属性 watch")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931756.png",alt:"image-20211005160108147"}})]),t._v(" "),e("p",[t._v("对于一些经常改变的值 能设置watch 去监视这个值  如果这个值发生改变 就会 返回改变前后的值 后续对其进行进一步操作")]),t._v(" "),e("p",[t._v("深度监视：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('deep：true 开启后 如果 监视对象内部某个属性进行改变 那么进而 就能 出发监视事件  默认不开启 监视某些数组 或者 含有多级层次关系的对象 就会发生错误\n\n相同的效果 计算属性和监听属性 好像都能实现 但是计算属性 无法实现异步操作 但是监听属性 可以开启异步任务\n\n;class 动态绑定 class 后期通过vue 函数进行操作class\n\n:style 同样能实现style的动态绑定 对象或者数组写法 但是同属于date 数据 但是总体还是样式对象的写法\n\nv-show="true" 只要后面的值 是true 就对元素进行显示 但是只是通过调节 display值进行调整\n\nv-if=“true”   直接删了  同样支持 v-else-if  v-else\n\nv-for  动态执行 多用于未定数量的标签添加  类似于 for in 循环 \n\n eg：  p in person {{p.id}}进行调用 后面跟上:key 对循环生成的元素进行绑定识别属性\n')])])]),e("p",[t._v("Vue 的数据监测 十分严格 如果不通过正确的办法进行方法调用 那么页面将不会 进一步更新 Vue 自身 有一个数据代理 他为data中的数据都添加了 相应 的 set get 方法 进行代理 如果不调用对应的方法进行修改数据 那么 Vue框架将不会识别")]),t._v(" "),e("p",[t._v("Vue自身 提供了set的方法 进行 添加属性 但是这个方法只能作用域 data中的对象数据 而不能针对vm实例进行添加")]),t._v(" "),e("p",[t._v("同样 Vue 也没有为数组设置相应的代理 它默认了数组的七个操作 如果 数组调用对应的方法那么 Vue就会认为 数组发生了更新")]),t._v(" "),e("p",[t._v("收集表单数据")]),t._v(" "),e("p",[t._v("利用 v-model 进行收集数据  有一定的局限 他只能 收集value")]),t._v(" "),e("p",[t._v("所以 在大多数 数据后面 都应该 对应 value值 同样 v-mode 也有一些修饰符 对其进行限制修饰")]),t._v(" "),e("p",[t._v("过滤器")]),t._v(" "),e("p",[t._v("v-text 插入 文本 完全替换 v-html 可以解析 H5语句  就会存在安全隐患 （避免 cookies 泄露）")]),t._v(" "),e("p",[t._v("v-clock  这个属性 会在 页面加载完成的时候 直接删除 这个 属性 利用display 可以做到 让某些元素暂时 隐身的效果、")]),t._v(" "),e("p",[t._v("v-once 只让 这个元素 加载一次")]),t._v(" "),e("p",[t._v("v-pre  跳过这个节点的 编译阶段 Vue 不去解析了 慎重")]),t._v(" "),e("p",[t._v("自定义指令 v-XXX")]),t._v(" "),e("p",[t._v("Vue 自身提供了 一个对象 用来让你 自己定义指令")]),t._v(" "),e("p",[t._v("与计算属性 和监视属性相似 也可以用函数使用函数式代码")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931106.png",alt:"image-20211006144404793"}})]),t._v(" "),e("p",[t._v("以及页面中的元素 并不是 直接在页面显示的 如果设计Vue语句")]),t._v(" "),e("p",[t._v("Vue会先进行解析后 再呈现在页面 并不是像原生JS一样 先把所有元素呈现在页面上后 然后在进行一系列操作")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931731.png",alt:"image-20211006144743962"}})]),t._v(" "),e("p",[t._v("this指向window 因为指令操作的是元素  已经将绑定的元素通过参数传递给你了 没必要再调用this了")]),t._v(" "),e("h3",{attrs:{id:"vue的生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue的生命周期"}},[t._v("#")]),t._v(" Vue的生命周期")]),t._v(" "),e("p",[t._v("Vue再进一步解析也经历了多个阶段在每个阶段调用的函数不同，比如说 他在处理完后 将真实的Dom元素往页面挂载完之后调用的mounted函数总体 来说 分为")]),t._v(" "),e("p",[t._v("1.挂载流程")]),t._v(" "),e("p",[t._v("Vm实例创造前 beforecreate 无法访问vm实例数据 方法")]),t._v(" "),e("p",[t._v("Vm实例创造 created 可以访问Vm数据")]),t._v(" "),e("p",[t._v("beforemount 挂载之前 未经Vue处理的dom节点")]),t._v(" "),e("p",[t._v("mounted 经过Vue编译处理后的dom节点")]),t._v(" "),e("p",[t._v("2.更新流程")]),t._v(" "),e("p",[t._v("beforeupdata 更新之前 此时Vue拿到新数据 但是页面不更新")]),t._v(" "),e("p",[t._v("新旧虚拟Dom比较")]),t._v(" "),e("p",[t._v("updata 更新 此时页面与数据同步")]),t._v(" "),e("p",[t._v("3.销毁流程")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931729.png",alt:"image-20211006154001952"}})]),t._v(" "),e("h3",{attrs:{id:"vue组件化开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue组件化开发"}},[t._v("#")]),t._v(" Vue组件化开发")]),t._v(" "),e("p",[t._v("类似于模块化开发 把模块都开发后 实现局部功能和代码 然后把 东西一组装 啥都有了")]),t._v(" "),e("p",[t._v("分为 单组件开发 和非单组件开发  后者就是组件的套娃 一个里面套娃多个组件")]),t._v(" "),e("p",[t._v("组件的使用一般分为三部")]),t._v(" "),e("p",[t._v("1.创建组件 意思就是 通过Vue.extend 先去创建一个组件")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131931450.png",alt:"image-20211006191605793"}})]),t._v(" "),e("p",[t._v("当然 组件中的属性按照 Vm实例上的数据写就行，但是注意这里的data属性 原来由于简写 直接写成了对象形式 ，但是在这里要写成函数形式 且具有 “对象”式的返回值  将数据存储在这个对象中 其他写法相差无几")]),t._v(" "),e("p",[t._v("你可以简写为一个对像 vue为你执行 Vue.extend")]),t._v(" "),e("p",[t._v("2.注册组件")]),t._v(" "),e("p",[t._v("既然建立了一个组件那么就可能在相应的地方去使用组件，当然 既然组件同属于Vm实例 那么就应该在Vm实例中注册组件"),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131932342.png",alt:"image-20211006191833702"}})]),t._v(" "),e("p",[t._v("利用新的关键字进行注册组件 然后才能在相应的地方使用")]),t._v(" "),e("p",[t._v("注意 注册组件的最终名字才是你最后使用组件 的名字 之前创建组件的名字只是一个中专量  当然 写同名最好 可以简写")]),t._v(" "),e("p",[t._v("组件命名规则")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131932020.png",alt:"image-20211125162040076"}})]),t._v(" "),e("p",[t._v("3使用组件")]),t._v(" "),e("p",[t._v("注册完组件以后 相应的要使用组件，但是 既然组件服务于自身所属的那一小片区域 且根据组件化的定义 自身的样式 以及 格式 都应该在组件 自身身上 所以使用 template 属性取声明自身组件的样子")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131932097.png",alt:"image-20211006192106965"}})]),t._v(" "),e("p",[t._v("之后 相应页面中的 H5语句 消失 ， 那么既然要使用相应的组件 就离不开 H5最核心的语言 标签语言 利用 "),e("school"),t._v("这种组件直接调用 组件")],1),t._v(" "),e("p",[t._v("这种注册 也被称为 局部组件")]),t._v(" "),e("p",[t._v("这种非单文件组件 无法写css")]),t._v(" "),e("p",[t._v("组件的底层原理：")]),t._v(" "),e("p",[t._v("其实就是 返回了一个对象但是这这种对象和Vm实例对象又不一样 他其实是 组件构造函数的一个对象 虽然两者功能 相似 但底层还是不一样")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131932330.png",alt:"image-20211006205008143"}})]),t._v(" "),e("h3",{attrs:{id:"vue组件自定义事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue组件自定义事件"}},[t._v("#")]),t._v(" Vue组件自定义事件")]),t._v(" "),e("p",[t._v("自定义如果需要接受数据 那么回调函数一定是在本组件内进行回调然后修改相应的值")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131932268.png",alt:"image-20211015185339859"}})]),t._v(" "),e("h3",{attrs:{id:"全局事件总线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局事件总线"}},[t._v("#")]),t._v(" 全局事件总线")]),t._v(" "),e("p",[t._v("利用props这种承接父亲方法的模式 进行传输数据比较麻烦 因为每次的方法都需要父亲向下传递，我们更希望这些操作数据的方法本身就在父亲自己身上，且多个组件都能调用的到，需要像声明全局变量一样声明一个全局的，可以被所有组件共同调用的属性。\n我们都知道 每一个组件在建立的时候都会有一个vc对象被建立，且所有组件根据原型链表示，在寻找原型的过程中最终都会找到Vue对象身上，所以我们应该将这个可以被访问的属性放在这个上面，就解决了我们需要从不同的组件访问这个东西的问题")]),t._v(" "),e("p",[t._v("但是我们又需要这个属性 在本质上可以调用自定义事件的能力，所以我们更能进一步想到，在这里绑定一个Vue上去 也就是 vue上有一个vue 但是后者vue主要是为了实现某些方法而装上取得")]),t._v(" "),e("p",[t._v("我们一般称这个属性为 $bus 又称安装全局事件总线")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131932891.png",alt:"image-20211015182133927"}})]),t._v(" "),e("p",[t._v("当然这个总线虽然支持所有组件之间数据的互通 但是对于不如说 父传子 直接利用props 子传父 利用自定义事件或者 props 这些当然更快  但是对于多重组件嵌套的时候 由于多重props利用起来十分复杂 就应该使用全局事件总线进行传递")]),t._v(" "),e("h3",{attrs:{id:"消息的订阅与发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#消息的订阅与发布"}},[t._v("#")]),t._v(" 消息的订阅与发布")]),t._v(" "),e("p",[t._v("订阅消息不可少的是消息名 以及内容  名字用来找到你 然后信息携带内容  这种方法一般需要调用第三法方库去实现 但是一旦你调用了第三方库之后  Vue就不再帮你维护这个this了 所以 应该使用箭头函数去写回调函数来保证this的指向安全")]),t._v(" "),e("h3",{attrs:{id:"vue-的过度与动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-的过度与动画"}},[t._v("#")]),t._v(" Vue 的过度与动画")]),t._v(" "),e("p",[t._v("Vue的过度 与动画 基于CCS3  也需要使用关键帧定义出来 先后的顺序 只不过")]),t._v(" "),e("p",[t._v("他内部 维护了一个过度标签 你只需要 将 需要发生过的的元素放在 标签内 他就能为你 自动处理 某些动画和 过度 且 这些动画与 过度 的名字都由vue定义")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131932713.png",alt:"image-20211016190953240"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131932331.png",alt:"image-20211016193502297"}})]),t._v(" "),e("h3",{attrs:{id:"利用-vue-cli处理ajax请求跨域问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#利用-vue-cli处理ajax请求跨域问题"}},[t._v("#")]),t._v(" 利用 Vue-cli处理Ajax请求跨域问题")]),t._v(" "),e("p",[t._v("利用设置代理 进行配置跨域 请求 其实就是另开了一个服务器 利用这个代理转发了一次请求文件 同步了端口信息进一步 让跨域请求得到相应")]),t._v(" "),e("p",[t._v("组件开发的第一步一般都是把页面里的的静态组件给拆分出来 然后再进一步 的对每个组件进行细节描述")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2021/10/17/FVNsLIbuKUDPQSv.png",alt:"image-20211017175036874"}})]),t._v(" "),e("p",[t._v("这四个东西经常用来发送 ajax请求")]),t._v(" "),e("p",[t._v("Vue 自身也有一个插件库 可以用来发送Ajax请求  vue-resource 但是这个插件不经常使用 他的使用方法跟axios基本上一样 但是使用了插件以后 vm vc身上都多了$http 用来处理请求")]),t._v(" "),e("p",[t._v("由于组件对于使用者而言可能还需要一些临时添加的东西 这个时候开发者就可以在组件内添加一些插槽也就是 slot标签 就跟内存插槽一个意思 在使用的时候 就插到相应的插槽里")]),t._v(" "),e("h3",{attrs:{id:"vuex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" Vuex")]),t._v(" "),e("p",[t._v("由于多个组件如果共享数组 使用全局事件总线的话  组件树一旦多起来  就会更加复杂 你需要绑定多个$on 所以 vuex就是为了处理这个共享数据的问题")]),t._v(" "),e("p",[t._v("vuex 状态管理 相当于一个公共的仓库  多个组件都能同时访问到 vuex中存放的数据  本身并不是持续存储数据 并不像localstrage cookie可以长时间存储，将两个东西相结合就能写出来 持久化存储的效果了")]),t._v(" "),e("p",[t._v("vuex中 有state getter mutations catios modules")]),t._v(" "),e("p",[t._v("state 用于存放数组 getter相当于computed 计算属性")]),t._v(" "),e("p",[t._v("mutations 相当于methods  但是自身执行的都是同步代码  如果执行异步代码的话  可能倒是视图层和实际数据层不同")]),t._v(" "),e("p",[t._v("actions提交mutations的  区别在于 它可以执行异步代码")]),t._v(" "),e("p",[t._v("modules 属于所有属性的延申 更好的管理属性  相当于state的组件化开发 在modules中新建多个index.js export出去 然后store引入后 在不同的页面分部引入就行了  但是modules 这种模式 其实是单项数据流 并不像vue本身的双向绑定 虽然你可以通过 state拿到这个数据 但是如果 直接在组件内对 state修改是不被允许的可以通过一个取巧的方法 比如说在mutations中设置一个方法去修改 其实就是自己写了个setter方法")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131932745.png",alt:"image-20220308200054989"}})]),t._v(" "),e("p",[t._v("简便写法")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131932887.png",alt:"image-20220308195441980"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131932140.png",alt:"image-20211018091841888"}})]),t._v(" "),e("p",[t._v("核心思想就是共享 就是如果这个数据需要多个地方共享 就需要这个东西")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131932354.png",alt:"image-20211021101336939"}})]),t._v(" "),e("p",[t._v("多组件共享数据  找时间test一下")]),t._v(" "),e("p",[t._v("1.首先既然需要用到vuex 就必须安装和引入vuex 然后使用 也就是 Vue.use(vuex)")]),t._v(" "),e("p",[t._v("2.如果 共享的组件比较少 我们可以 只在 store里面声明 state 去记录共享数据  但是一旦 组件太多 务必会导致 state里面数据繁多  所以我们可以选择模块化开发 每一个模块拥有自己的state、mutation、action、 getters 让代码更清晰")]),t._v(" "),e("p",[t._v("3.然后就是用具体的计算属性进行返回 state里面的 数据 当然也有简写形式")]),t._v(" "),e("p",[t._v("3.之后就是 使用state里面的数据")]),t._v(" "),e("h3",{attrs:{id:"vue-router"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[t._v("#")]),t._v(" Vue-router")]),t._v(" "),e("p",[t._v("SPA页面的主要应用 也就是在同一域名下 不引起新页面的打开 能让他 在一个页面多次跳转到不同的展示效果 这里就借助了  vue-router  他是专门来处理的Spa的 相应的数据 都需要使用Ajax请求获取 *-/\n前端路由 就是由不同的事件触发不同的 组件效果")]),t._v(" "),e("p",[t._v("路由自身也是 vue的一个插件 也需要 npm i vue-router安装 安装完后 也需要使用 一般定会在 router文件夹下的index.js文件 就如同 vuex的设计一样 然后再 这里面 对一些需要的东西进行配置 配置完以后 就可以 正常使用了")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131932681.png",alt:"image-20211019193716049"}})]),t._v(" "),e("p",[t._v("路由组件你可以写出来很多但是路由器只有那么一个 由一个路由器给你调整多个组件的作用")]),t._v(" "),e("p",[t._v("路由是可以嵌套的 在日常SPA页面里 如果存在多个这种 结构 往往需要将 路由嵌套")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131932231.png",alt:"image-20211021111434300"}})]),t._v(" "),e("p",[t._v("第一级路由需要 /\n后面二级路由 不需要 /  但是需要再 to 后面写清楚 完整地址")]),t._v(" "),e("p",[t._v("路由是可以传参数的")]),t._v(" "),e("p",[t._v("1.比较简单的query参数 通过 地址后面？ 之后的数据进行传递参数 然后 组件当然可以通过$router.query.???? 把对应的参数取出来")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131932538.png",alt:"image-20211027185227336"}})]),t._v(" "),e("p",[t._v("这是比较麻烦的参数写法")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131932907.png",alt:"image-20211027185414837"}})]),t._v(" "),e("p",[t._v("这是相对简单的对象写法 这两种都是 常规的query传参 类型")]),t._v(" "),e("p",[t._v("2.params传参数")]),t._v(" "),e("p",[t._v("params参数  必须先在路由里面声明好 你需要传递什么参数 然后也是通过地址 ///传递 但是因为你设置了路由所以 他只会把相应的路径解算称路由 剩余的都是参数")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131933152.png",alt:"image-20211027190235021"}})]),t._v(" "),e("p",[t._v("3.在路由里面配置 props参数")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131933106.png",alt:"image-20211021153928899"}})]),t._v(" "),e("p",[t._v("路由的 link - router 标签里的 replace 属性主要决定了 浏览器本地历史里那个 返回键能不能正常使用 因为历史记录本身就是一个栈  正常就是压栈出栈操作 但是一旦你使用这个属性 它就变成了 替换")]),t._v(" "),e("p",[t._v("我们都清楚 在使用路由的时候多个组件来回切换的时候 上一个组件实际上 是被销毁了 例如一个输入框 如果我们需要在来回切换的时候保留 其中的信息我们就需要这个  缓存路由")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2021/10/22/boy7p1jIfJWwgBM.png",alt:"image-20211022100646914"}})]),t._v(" "),e("p",[t._v("其中的参数 也是最重要的 是组件名  告诉浏览器应该保存的是哪一个组件")]),t._v(" "),e("p",[t._v("路由守卫 顾名思义 就跟眼石的作用是一样的  当你不设置路由守卫的时候 所有人都能进行 路由的切换 但是 有些页面他需要特定的权限 去看 所以 就需要路由守卫 在跳转路由之前对一些固定条件做一下判断 来确保进行一次正确的路由")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131933650.png",alt:"image-20211023155057533"}})]),t._v(" "),e("p",[t._v("一般使用的 都是前置路由守卫 因为这个时候 其实 路由还没有真正的触发 而且 他里面自带两个非常详细的参数 to from 也就是 你从哪里路由 要往那里去  然后 next就是放行的 意思 你可以 拿到这两个 路径 然后 做一些简单的if判断 之后放行")]),t._v(" "),e("p",[t._v("mete{}  可以通过这个mete 更换浏览器的标题")]),t._v(" "),e("p",[t._v("！！！但是不管是 前置路由守卫 还是后置守卫 都是对于全局的守卫")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131933136.png",alt:"image-20211023155623180"}})]),t._v(" "),e("p",[t._v("既然已经有全局路由守卫 那么理所当然 就应该有独享的 路由守卫 进行某一个组件的路由控制")]),t._v(" "),e("p",[t._v("组件路由守卫 大多数时间 你都不需要对所有组件进行 路由判断")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131933250.png",alt:"image-20211023160512118"}})]),t._v(" "),e("p",[t._v("这是针对某些 特定组件自身的属性 所以不需要对多个路由进行判断了")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131933344.png",alt:"image-20211023163129962"}})]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("ES6 模块化标准")]),t._v(" "),e("p",[t._v("模块化的过程 最基本的就是导入导出")]),t._v(" "),e("h2",{attrs:{id:"axios-js以及ts的请求封装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#axios-js以及ts的请求封装"}},[t._v("#")]),t._v(" Axios JS以及TS的请求封装")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("通过对vue axios请求的封装 减少后期维护代码的工作量\n而且可以施加拦截器对axios请求进行进一步分析  拦截对错误信息也可以进行进一步提示\n基本模板\nnetwork"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" axios "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'axios'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" instance "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("baseURL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/////")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("timeout")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/////")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    instance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" config\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("instance")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("computed计算属性自身有缓存 多次同样的调用并不会多次调")]),t._v(" "),e("h2",{attrs:{id:"前端代理proxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端代理proxy"}},[t._v("#")]),t._v(" 前端代理Proxy")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("代理！**\n\n前端代理主要就是为了解决跨域问题 当然如果后端可以解决 当我没说.......  通过设置文件更改了请求的url 但是打包后可能会出现 空白页 url丢失的问题 这个时候需要对打包工具进行配置 或者进行进一步修改\n\n打包配置：修改路由模式 history-----\x3ehash 修改打包路径 避免资源找不到的问题  如果需要history模式 跟我没关系  扔给后端就完事了  让他自己重定向\n\n代理配置： 通过设置代理的环境变量 更改baseurl\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("路由！\n\nhistory模式与hash模式的区别  history会发送请求 而hash模式会携带参数进行url请求  前端自测使用history 打包要用hash\n\nSPA 指的是单页面应用 SEO优化就不好 当然性能可能会不好 因为多次路由导致来回切换 \n\n路由传值就是显示传值和隐shi传值\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Vue源码\n\nVue2双向绑定原理\n\nVue2采取的原理本身叫做数据劫持，利用的是Object.defineProperty( )方法设置一个对象中的某个属性，当这个属性被调用的时候调用的就是get()操作 从而取得这个数据 或者是对这个数据进行二次加工 比如说给一个书名加上书名号这种简单操作 ，同样如果这个属性被修改那么就要进一步调用set函数 去进行修改后的操作 比如说Vue2本身是一个双向绑定的设计 调用set的同时要引起试图的改变\n\n1.实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。\n\n2.实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。\n\n3.实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。\n\n同样 vue的数据劫持也是通过 定义的setter 和getter 实现的如果 数据发生改变 就会监视到数据的变化然后引起识图的变化\n\nVue的事件循环机制\n\n　**简单总结事件循环：**\n\n​\t\t首先要知道浏览器以及js自身的事件循环机制 以及js运行顺序\n\n　　　同步代码执行 -> 查找异步队列，推入执行栈，执行callback1[事件循环1] ->查找异步队列，推入执行栈......\n\n　　即每个异步callback，最终都会形成自己独立的一个事件循环。\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("　\nVue2的组件通信方式\n\n1. Props特点父传子 相当于父亲把数据当成参数向下传递但是儿子同样要声明并且接受这个参数\n\n2. $emit特点子传父 其实就是儿子用自己的数据调用了父亲的函数\n\n3. v-slot\n\n4. 组件的chileren和parent属性\n5. $ref直接拿属性\n\n6. 通过$attrs和 listeners\n7. 全局事件总线 eventBus\n8. Vuex stroe\n")])])]),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[t._v("vue2的生命周期都是成对出现的\n\n1.beforeCreat  在一个组件被创建出来以前对应的有一个creat \n\n2.beforeMount 挂载之前对应的有mount\n\n3.beforeupdate  数据发生变化但是还没哟u更新到数据层和 update\n\n4.beforeDestory 和destoryed\n\n但是vue3中对生命周期的钩子做出了一定的修改 现在vue3只有六个生命周期\n\n1. onBeforeMount和moMount\n2. onBeforeupdate和update\n3. onBeforeunmount和onUnmount\n\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("回流与重绘 这就牵扯到浏览器工作原理了\n\n浏览器其实本身和js差不多 在识别html语句的时候 也会生成一个dom树 然后再进一步 解析css 样式  然后根据你自己写的布局 进行生成 布局 当然在这个过程中 不可见元素是不会被计算在内的 就是display：none的元素 但是当你使用定位以后 你的图层其实是分层的 这就导致 需要层叠的去生成元素  然后根据可视窗口进行光栅化渲染\n\n当然这个过程在第一次打开页面的时候是肯定会经理的 但是在你通过js或者响应式 更改了 布局以后这个过程就是重新走一遍 这就导致了 浏览器资源的消耗\n\n所以在日常的代码中 要减少这种资源的利用 也就是减少回流和重绘\n\n1.合并多次对dom元素的操作和修改 减少次数上的浪费\n\n2.如果dom修改的东西过多 可以通过更换类名 而不是依次更改\n\n3.让动起来的东西 脱离文档流 这样就不会重新生成dom树\n\n4.css3硬件加速（GPU加速）这是css3自带的属性 可以减少一部分的回流\n\n\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("for of 和 for in 的区别\n\nfor in 遍历的是可迭代也就是可枚举类型 所以他适合用来遍历对象 而且 可能会遍历到一些原型 for of就更适合遍历数组\n\n而且在foreach 中  使用break 和return 并不会返回上层\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("箭头函数里面的this指向有问题而且不能使用argements对象来获取参数 而且也没有yield命令\n")])])]),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131936997.png",alt:"image-20220310205956227"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131936946.png",alt:"image-20220310210148969"}})]),t._v(" "),e("h2",{attrs:{id:"diff算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diff算法"}},[t._v("#")]),t._v(" diff算法")]),t._v(" "),e("p",[t._v("dom数据化也就是虚拟dom把dom，避免重复修改dom，操作dom浪费浏览器性能 但是标签一定要打上key的唯一标识，要不然并不会进行相应的操作，至于为什么dom变成的数据格式问题，这是vue底层的原理也就是dom元素解析原理，这个在vue原理方面有解释")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Promise属于微任务在Promise体内 t 而定时器属于宏任务 这么一对比 Prmise的优先级大于定时器\n")])])]),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131937681.png",alt:"image-20220325222130056"}})]),t._v(" "),e("h2",{attrs:{id:"vue解决首屏加载速度慢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue解决首屏加载速度慢"}},[t._v("#")]),t._v(" Vue解决首屏加载速度慢")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.路由懒加载 避免 在不用的时候对其他的组件进行渲染\n2.ui库按需引入，不要直接引入所有的ui组件库\n3.静态资源 利用前端进行一些简单的存储避免重复请求资源\n4.避免组件重复打包，利用webpack的配置 如果重复使用的组件进行单独打包\n5.图片进行压缩保存，避免使用特别大的图片进行使用\n")])])]),e("h2",{attrs:{id:"vue底层收集data变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue底层收集data变化"}},[t._v("#")]),t._v(" Vue底层收集data变化")]),t._v(" "),e("p",[t._v("在一个data的值发生变化的时候并不会立即执行重新渲染这个操作，而是内部维护了一个队列，将涉及的数据变更放入队列，然后统一执行，减少系统开销")]),t._v(" "),e("h2",{attrs:{id:"vue是怎么收集依赖的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue是怎么收集依赖的"}},[t._v("#")]),t._v(" Vue是怎么收集依赖的")]),t._v(" "),e("p",[t._v("初始化组件实例对象的时候，会对data里的书记进行初始化，让其转换成响应式对象，在转换的过程中会收集依赖，其实主要是在Get的时候，Get的时候，Get证明了你对这个数据有引用，一旦更改就需要通知到所有引用他的地方，而一旦触发了get就意味着你已经用了这个数据，所以在get中手机依赖是最合适的")]),t._v(" "),e("p",[t._v("而依赖Dep是一个class内部维护了一个Map进行存储每个变量对应的依赖，其实应该是weakmap于map相比weakmap会在原来对象被设置为null的时候进行内存回收，而不会想Map一样不被内存回收")]),t._v(" "),e("h2",{attrs:{id:"vue-router与location-href的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-router与location-href的区别"}},[t._v("#")]),t._v(" Vue-router与location.href的区别")]),t._v(" "),e("p",[t._v("使用router是静态跳转其实页面并没有跳转，location不仅跳转页面而且刷新页面")]),t._v(" "),e("h2",{attrs:{id:"vue3为什么要使用proxy重写数据劫持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue3为什么要使用proxy重写数据劫持"}},[t._v("#")]),t._v(" Vue3为什么要使用Proxy重写数据劫持")]),t._v(" "),e("p",[t._v("1.支持的复杂数据类型更多比如Map Set\n2.对某些对象数据新属性的添加也可以检测的到，不再需要通过Vue.set进行\n3.全方位的数组变化检测")]),t._v(" "),e("h2",{attrs:{id:"vue中key的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue中key的作用"}},[t._v("#")]),t._v(" Vue中key的作用")]),t._v(" "),e("p",[t._v("Vue内部维护的有一个 虚拟Dom对比算法 再进行更新页面的时候 会将新产生的虚拟Dom于原来的虚拟Dom进行对比 将两次不同Dom的地方进行替换 将相同的地方保持不变 进一步在生成真实Dom的时候 减少浏览器渲染负荷  但是如果一旦在 使用key不当的情况下 虚拟Dom 可以误认为 两个不同的 标签 是一个标签 进行替换操作 而不是重新生成 导致 进一步的错误 所以 在 代码中key的存在 尽量保持唯一性 而且 和标签中的 属性 最好一致且唯一")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Nianchen/LearnImg/202210131844226.png",alt:"image-20211005165958901"}})]),t._v(" "),e("p",[t._v("v-for中使用key可以在diff的时候对未更改数据进行更快的复用，也就是跟踪元素.\n·更准确:因为带 key就不是就地复用了，在sameNode函数a.key=== b.key对比中可以\n避免就地复用的情况。所以会更加准确。\n·更快速:利用key的唯一性生成map对象来获取对应节点，比遍历方式更快")]),t._v(" "),e("p",[t._v("且在v-for中如果使用index作为key其实用处不大只是为了不报错，因为数组不管如何变化下标永远都是从0开始，会让diff进行更多的检测")])])}),[],!1,null,null,null);e.default=n.exports}}]);