(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{271:function(v,_,p){v.exports=p.p+"assets/img/image-20210820133728174.82cee6f7.png"},272:function(v,_,p){v.exports=p.p+"assets/img/UPcJwNrZz9hREbd.bd63ec8f.png"},273:function(v,_,p){v.exports=p.p+"assets/img/image-20210908095904664.14aa4ffe.png"},274:function(v,_,p){v.exports=p.p+"assets/img/LT59BPsh1bcrznR.b112b7e5.png"},275:function(v,_,p){v.exports=p.p+"assets/img/image-20210909193902821.6de55406.png"},276:function(v,_,p){v.exports=p.p+"assets/img/image-20210909194305714.ee4d8cb4.png"},277:function(v,_,p){v.exports=p.p+"assets/img/image-20210910152623549.a3da0b7b.png"},278:function(v,_,p){v.exports=p.p+"assets/img/KkZOFGP9t7UMCVr.d0849ac6.png"},279:function(v,_,p){v.exports=p.p+"assets/img/sgqeoOWyrTGjSRK.c49edb2d.png"},303:function(v,_,p){"use strict";p.r(_);var s=p(13),t=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("从输入URL到页面展示 都法神了什么")]),v._v(" "),_("p",[_("img",{attrs:{src:p(271),alt:"image-20210820133728174"}})]),v._v(" "),_("p",[_("img",{attrs:{src:p(272),alt:"image-20210907110700156"}})]),v._v(" "),_("p",[v._v("由于避免单进程 一个进程的出错 导致 网页无法正常打开 如今的浏览器 虽然依旧采用单继承语言 但同时打开了 多个进程 用来 分别处理不同的事情")]),v._v(" "),_("p",[v._v("但是这样虽然解决了 网页崩溃问题 但同时也带来了更高的内存消耗")]),v._v(" "),_("p",[v._v("从输入地址到页面显示究竟经过了什么")]),v._v(" "),_("p",[_("img",{attrs:{src:p(273),alt:"image-20210908095904664"}})]),v._v(" "),_("p",[v._v("首先用户在地址栏输入  然后浏览器会判断 他是关键字还是url连接")]),v._v(" "),_("p",[v._v("处理完链接后  开始url请求")]),v._v(" "),_("p",[v._v("这个请求一般是先访问本地的 如果本地存在这个网页资源 那么就可以直接渲染 那就是 为啥一个网站二次打开的速度 比第一次快的原理")]),v._v(" "),_("p",[v._v("既然有请求那么 相对应的也有响应， 如果响应的消息显示 现在这个网页 不是你想要访问的网页 就会发生二次的重定向 然后再发起新的HTTP或者HTTPS请求，⼀切⼜重头开始了。")]),v._v(" "),_("p",[v._v("响应头中最重要的信息 一般是 你访问网页的类型  Content-Type 比如返回的是一个下载还是 页面")]),v._v(" "),_("p",[v._v("如果相应正常 那么就会正常的进入渲染进程")]),v._v(" "),_("p",[v._v("一般同一站点 的渲染 由相同的进程进行渲染  即  相同协议和相同根目录的网站 一般用相同的进程去渲染")]),v._v(" "),_("p",[v._v("渲染进程准备好之后，还不能⽴即进⼊⽂档解析状态，因为此时的⽂档数据还在⽹络进程中，并没有提交给")]),v._v(" "),_("p",[v._v("渲染进程，所以下⼀步就进⼊了提交⽂档阶段。")]),v._v(" "),_("p",[v._v("提交文档 是浏览器进程向渲染进程 发出的  渲染进程接受到以后  开始与网络数据建立连接  等待数据 传输完成后")]),v._v(" "),_("p",[v._v("渲染进程回复给浏览器进程一个完成的信号 然后浏览器 更新一部分 信息 比如 地址栏 图标 前后退状态等等")]),v._v(" "),_("p",[v._v("然后才是真正的进入了渲染阶段")]),v._v(" "),_("p",[v._v("浏览器的渲染 是很复杂的一个阶段")]),v._v(" "),_("p",[v._v("因为一个页面 不仅有h5语言 还有css 还有js等多种语言")]),v._v(" "),_("p",[v._v("这整个过程  其实本质是一个 线性流水线的过程 由多个子阶段组成")]),v._v(" "),_("p",[v._v("每个阶段 都有一定输入的内容  也有处理过程 当然也有最终的输出内容。")]),v._v(" "),_("p",[_("strong",[v._v("构建DOM树、样式计算、布局阶段、分 层、绘制、分块、光栅化和合成")])]),v._v(" "),_("p",[v._v("按照时间顺序这几个阶段 依次进行")]),v._v(" "),_("p",[v._v("1.构建Dom树")]),v._v(" "),_("p",[v._v("因为浏览器无法直接识别H5语言  需要将 H5转化为Dom树 供浏览器使用   生成了dom树之后 每个元素的样式我们现在还没有引入")]),v._v(" "),_("p",[v._v("2.构建样式")]),v._v(" "),_("p",[v._v("css三种不同的引进方式  link 内嵌 style")]),v._v(" "),_("p",[v._v("但是我们写的css并不是标准值 需要浏览器先将 css标准化")]),v._v(" "),_("p",[v._v("然后进行计算样式  元素会 依次继承父类锁拥有的css属性")]),v._v(" "),_("p",[v._v("当把所有的样式都转换为标准值后，开始计算可见dom元素的位置信息")]),v._v(" "),_("p",[v._v("3.布局阶段")]),v._v(" "),_("p",[v._v("布局树 其实和dom树很相像 但是布局树里面都是 可见元素  不可见元素都不会在布局树中出现")]),v._v(" "),_("p",[v._v("4.分层")]),v._v(" "),_("p",[v._v("对于有一些地方的元素绘制 就如同  Ps中的图层一样，明确定位属性的元素、定义透明属性的元素、使⽤CSS滤镜的元素等，都拥有层叠上下⽂ 属性。")]),v._v(" "),_("p",[v._v("如果这一块级元素 有被隐藏的元素 那么他也会进一步分层")]),v._v(" "),_("p",[v._v("5 光栅化和合成")]),v._v(" "),_("p",[v._v("将图层划分为一小个一小个小快 然后 随着可视窗口的变化 而即使绘制")]),v._v(" "),_("p",[_("img",{attrs:{src:p(274),alt:"image-20210908164007287"}})]),v._v(" "),_("p",[v._v("有了上⾯介绍渲染流⽔线的基础，我们再来看看三个和渲染流⽔线相关的概念⸺重排 重绘 合成")]),v._v(" "),_("p",[v._v("重排 故名思意  你通过js或者 css对 元素的几何属性进行修改 会导致整个布局发生变换  也就发生了重拍")]),v._v(" "),_("p",[v._v("重绘 就是改变了一些 颜色等等 不影响基础布局的属性")]),v._v(" "),_("p",[v._v("那如果你更改⼀个既不要布局也不要绘制的属性，会发⽣什么变化呢？渲染引擎将跳过布局和绘制，只执⾏")]),v._v(" "),_("p",[v._v("后续的合成操作，我们把这个过程叫做"),_("strong",[v._v("合成")])]),v._v(" "),_("p",[v._v("JS中的变量提升")]),v._v(" "),_("p",[v._v("JS的运行机制是先编译 所以在编译阶段 所有的变量和函数都会被声明   所以即使你再声明之前调用了函数或者变量")]),v._v(" "),_("p",[v._v("他也不会报错 但是如果这个函数和变量本身就不存在的话 还是会报错")]),v._v(" "),_("p",[v._v("这就提到了JS中另一个概念叫做全局执行上下文 和 函数执行上下文   在这个变量提升的过程 其实就是建立了代码的全局上下文 将所有变量和函数压入这个全局上下文中， 然后在未来调用某个函数的时候 在 全局上下文中创造出来函数上下文 用来 单独运行函数")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://i.loli.net/2021/09/09/h1CkcBDp7XEIWoQ.png",alt:"image-20210909101947291"}})]),v._v(" "),_("p",[v._v("一旦函数运行完毕 就会释放当前函数执行上下文 也就是出栈")]),v._v(" "),_("p",[v._v("但是如果代码核心部分 一直处于迭代状态就有可能导致 栈溢出")]),v._v(" "),_("p",[v._v("'")]),v._v(" "),_("p",[v._v("每个执行上下文对应的都有一个this 指向自身 但是如果 只是全局定义的函数 this会指向window")]),v._v(" "),_("p",[_("img",{attrs:{src:p(275),alt:"image-20210909193902821"}})]),v._v(" "),_("p",[v._v("可以通过call方法改变this指向")]),v._v(" "),_("p",[_("img",{attrs:{src:p(276),alt:"image-20210909194305714"}})]),v._v(" "),_("p",[v._v("JS本身是一门动态 弱数据类型的语言  声明变量前不需要 提前声明变量的类型")]),v._v(" "),_("p",[_("img",{attrs:{src:p(277),alt:"image-20210910152623549"}})]),v._v(" "),_("p",[v._v("除了最后一个 Object对象 其他的都是原始数据类型 只有 最后一个是引用数据类型")]),v._v(" "),_("p",[v._v("Object 内部 相当于一个 key-value 类型的集合")]),v._v(" "),_("p",[v._v("JS的内存原理：")]),v._v(" "),_("p",[v._v("栈区用来存储 函数 运行上下文的 还有一些简单的数据类型")]),v._v(" "),_("p",[v._v("引用数据类型全部都在堆空间里 栈中对他的引用 都是记录的地址")]),v._v(" "),_("p",[v._v("JS的垃圾回收原理")]),v._v(" "),_("p",[v._v("浏览器是如何运行js代码的")]),v._v(" "),_("p",[v._v("首先js代码 先转换成")]),v._v(" "),_("p",[v._v("token 然后解析成 AST树  例如H5文件转成DOM树")]),v._v(" "),_("p",[v._v("通过AST树生成字节码 后 转成 机器码供计算机执行")]),v._v(" "),_("p",[v._v("但是比如说 多次执行的代码 会定量的保存  一部分字节码  后期多次调用的时候直接调用这个字节码进行运行 就要比重新开始要快很多")]),v._v(" "),_("p",[_("strong",[v._v("浏览器⻚⾯是由消息队列和事件循环系统来驱 动的。")])]),v._v(" "),_("p",[v._v("日常浏览网页的时候 会有一系列操作 导致网站进行某些改变 ， 所以 我们有一个循环的进程用来 处理这些操作")]),v._v(" "),_("p",[v._v("同时 通过一个消息队列 用来储存 所有的操作 这样就可以保证 操作进行的先后没有 问题 但是对于一些优先级较高的操作 比如改变某些 dom元素的属性 我们又为每个宏任务也就是大任务背景下 添加了一个微小的任务列表 用来储存哪些优先级比较高的任务  这样就不会导致优先级的问题了")]),v._v(" "),_("p",[v._v("set-timeout是如何实现的？")]),v._v(" "),_("p",[v._v("在上文中 我们了解到了 js引擎中的 消息队列  同样为了针对这种延时任务 引擎中内置了 另一个消息队列 单独的用来储存这些 需要回调的函数  每次执行之后就会在消息队列中重新添加  但是这种延时函数也有最低要求 比如说0ms 执行5次以上浏览器会认为 他阻塞了 会将0ms---》4ms 进行执行")]),v._v(" "),_("p",[v._v("同样 即使这样已经解决了顺序的问题 但是如果一个任务的执行时间太长 同样也会影响其他任务的执行")]),v._v(" "),_("p",[v._v("同时 因为设置延时的问题 用js写动画 不太提倡， 你可以利用css 或者浏览器的渲染去写动画")]),v._v(" "),_("p",[v._v("JS如何渲染dom树 构建")]),v._v(" "),_("p",[v._v("Dom树 的构建是由一个解析器完成的 意思就是 将原来的HTML文件 进行分解  分解成最小的token 然后进行解析成dom元素")]),v._v(" "),_("p",[v._v("当然 这些token 与 H5自身语言相近 比如 "),_("code",[v._v("<div>")]),v._v("这些 就被成为 Strattag 也就是开始标签  相对应的 每个标签也")]),v._v(" "),_("p",[v._v("由相应的 endtag  而这两个标签中间的内容 就是对应的文本内容")]),v._v(" "),_("p",[v._v("而浏览器自身 维护了一个 栈区 区进行 一个个token 的解读  然后将新元素压栈 解读完后 将这个栈顶弹出")]),v._v(" "),_("p",[v._v("如果在解析 H5 文件的时候遇到了JS文件 就会暂停dom的生成以及渲染")]),v._v(" "),_("p",[v._v("由于 浏览器引擎和 网络之间 有一个类似于管道的东西在传输 信息 你可以理解为 网络交给浏览器多少 他就渲染多少")]),v._v(" "),_("p",[v._v("但是 为了提高页面渲染速率 浏览器引擎一般都会 提前下载好页面中需要的 js文件 来保证运行速度")]),v._v(" "),_("p",[v._v("渐进式+Web页面")]),v._v(" "),_("p",[v._v("Web操作 和本地操作的区别遭遇过去依赖浏览器以及网络 没有离线操作以及一级入口")]),v._v(" "),_("p",[_("img",{attrs:{src:"C:%5CUsers%5CLenovo%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210923152501164.png",alt:"image-20210923152501164"}})]),v._v(" "),_("p",[v._v("Server worker的存在 是为了 避免一部分JS占用时间过长  让这一部分 代码运行在核心渲染引擎之外 由于此时还没有 构建Dom 树等操作 导致 无法进行dom元素操作 只能操作一些不涉及dom元素的JS 代码")]),v._v(" "),_("p",[v._v("整个线程 存在于浏览器的生命周期 可以同时服务多个页面")]),v._v(" "),_("p",[_("img",{attrs:{src:p(278),alt:"image-20210923153022564"}})]),v._v(" "),_("p",[v._v("安全")]),v._v(" "),_("p",[_("img",{attrs:{src:p(279),alt:"image-20210923153041982"}})])])}),[],!1,null,null,null);_.default=t.exports}}]);