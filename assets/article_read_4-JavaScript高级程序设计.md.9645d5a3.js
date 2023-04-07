import{_ as a,c as l,o as s,a as e}from"./app.f58bd366.js";const v=JSON.parse('{"title":"4-JavaScript高级程序设计","description":"","frontmatter":{},"headers":[{"level":2,"title":"第1章： 什么是JavaScript","slug":"第1章-什么是javascript","link":"#第1章-什么是javascript","children":[]},{"level":2,"title":"第2章： HTML中的JavaScript","slug":"第2章-html中的javascript","link":"#第2章-html中的javascript","children":[]},{"level":2,"title":"第3章： 语言基础","slug":"第3章-语言基础","link":"#第3章-语言基础","children":[]},{"level":2,"title":"第4章： 变量、作用域与内存","slug":"第4章-变量、作用域与内存","link":"#第4章-变量、作用域与内存","children":[]},{"level":2,"title":"第8章：对象、类与面向对象编程","slug":"第8章-对象、类与面向对象编程","link":"#第8章-对象、类与面向对象编程","children":[]},{"level":2,"title":"第18章：动画与Canvas图形","slug":"第18章-动画与canvas图形","link":"#第18章-动画与canvas图形","children":[]},{"level":2,"title":"第20章：JavaScriptAPI","slug":"第20章-javascriptapi","link":"#第20章-javascriptapi","children":[]}],"relativePath":"article/read/4-JavaScript高级程序设计.md"}'),n={name:"article/read/4-JavaScript高级程序设计.md"},t=e(`<h1 id="_4-javascript高级程序设计" tabindex="-1">4-JavaScript高级程序设计 <a class="header-anchor" href="#_4-javascript高级程序设计" aria-hidden="true">#</a></h1><h2 id="第1章-什么是javascript" tabindex="-1">第1章： 什么是JavaScript <a class="header-anchor" href="#第1章-什么是javascript" aria-hidden="true">#</a></h2><ol><li><p>JavaScript实现包含<code>核心（ECMAScript）、 文档对象模型（DOM）、 浏览器对象模型（BOM）</code></p></li><li><p>BOM主要针对浏览器窗口和子窗口（frame）</p><ul><li>弹出新浏览器窗口的能力</li><li>移动、缩放和关闭浏览器窗口的能力</li><li>navigator对象，提供关于浏览器的详尽信息</li><li>location对象，提供浏览器加载页面的详尽信息</li><li>screen对象，提供关于用户屏幕分辨率的详尽信</li><li>performance对象，提供浏览器内存占用、导航行为和时间统计的详尽信息</li><li>对cookie的支持</li><li>其他自定义对象，如XMLHttpRequest和IE的ActiveXObject</li></ul></li></ol><h2 id="第2章-html中的javascript" tabindex="-1">第2章： HTML中的JavaScript <a class="header-anchor" href="#第2章-html中的javascript" aria-hidden="true">#</a></h2><ol><li>script标签的属性</li></ol><ul><li>async：可选。表示应该<code>立即开始下载脚本</code>，但不能阻止其他页面动作(<code>异步操作</code>)，比如下载资源或等待其他脚本加载。<code>只对外部脚本文件有效</code>。</li><li>defer：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。<code>只对外部脚本文件有效</code>。</li><li>type：可选。如果这个值是module，则代码会被当成ES6模块，而且只有这时候代码中才能出现import和export关键字。</li></ul><ol start="2"><li><p>可以使用defer属性把脚本推迟到文档渲染完毕后再执行。推迟的脚本原则上按照它们被列出的次序执行。</p></li><li><p>可以使用async属性表示脚本不需要等待其他脚本，同时也不阻塞文档渲染，即异步加载。异步脚本不能保证按照它们在页面中出现的次序执行。</p></li><li><p>IE5.5发明了文档模式的概念，即可以使用doctype切换文档模式。最初的文档模式有两种：混杂模式（quirks mode）和标准模式（standards mode）。前者让IE像IE5一样（支持一些非标准的特性），后者让IE具有兼容标准的行为。</p></li></ol><h2 id="第3章-语言基础" tabindex="-1">第3章： 语言基础 <a class="header-anchor" href="#第3章-语言基础" aria-hidden="true">#</a></h2><ol><li><p>const的行为与let基本相同，唯一一个重要的区别是用它声明变量时必须同时初始化变量，且尝试修改const声明的变量会导致运行时错误。</p></li><li><p>ECMAScript 7新增了指数操作符，Math.pow()现在有了自己的操作符＊＊</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pow9</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"></span></code></pre></div></li><li><p>switch语句在比较每个条件的值时会使用全等操作符，因此不会强制转换数据类型（比如，字符串&quot;10&quot;不等于数值10）</p></li><li><p>与其他语言不同，ECMAScript不区分整数和浮点值，只有Number一种数值数据类型</p></li></ol><h2 id="第4章-变量、作用域与内存" tabindex="-1">第4章： 变量、作用域与内存 <a class="header-anchor" href="#第4章-变量、作用域与内存" aria-hidden="true">#</a></h2><ol><li>在浏览器的发展史上，垃圾回收用到过两种主要的标记策略：<code>标记清理和引用计数</code></li><li>JavaScript最常用的垃圾回收策略是标记清理（mark-and-sweep）</li></ol><h2 id="第8章-对象、类与面向对象编程" tabindex="-1">第8章：对象、类与面向对象编程 <a class="header-anchor" href="#第8章-对象、类与面向对象编程" aria-hidden="true">#</a></h2><ol><li><p>属性分两种：数据属性和访问器属性</p><p>数据属性:</p><ul><li>[[Configurable]]：表示属性是否可以通过delete删除并重新定义，是否可以修改它的特性，以及是否可以把它改为访问器属性。默认情况下，所有直接定义在对象上的属性的这个特性都是true</li><li>[[Enumerable]]：表示属性是否可以通过for-in循环返回。默认情况下，所有直接定义在对象上的属性的这个特性都是true</li><li>[[Writable]]：表示属性的值是否可以被修改。默认情况下，所有直接定义在对象上的属性的这个特性都是true</li><li>[[Value]]：包含属性实际的值。这就是前面提到的那个读取和写入属性值的位置。这个特性的默认值为undefined</li></ul><p>访问器属性</p><ul><li>访问器属性不包含数据值。相反，它们包含一个获取（getter）函数和一个设置（setter）函数，不过这两个函数不是必需的</li></ul></li><li><p>Object.assign会修改目标对象(<code>也就是修改好的目标对象ret</code>)</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vv</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> ret </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">assign</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b)</span></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#676E95;font-style:italic;">// {name: &#39;vv&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> ret </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="第18章-动画与canvas图形" tabindex="-1">第18章：动画与Canvas图形 <a class="header-anchor" href="#第18章-动画与canvas图形" aria-hidden="true">#</a></h2><ol><li>一般计算机显示器的屏幕刷新率都是60Hz，基本上意味着每秒需要重绘60次, 因此，实现平滑动画最佳的重绘间隔为1000毫秒/60，大约17毫秒</li><li>虽然使用setInterval()的定时动画比使用多个setTimeout()实现循环效率更高，但也不是没有问题。无论setInterval()还是setTimeout()都是不能保证时间精度的。作为第二个参数的延时只能保证何时会把代码添加到浏览器的任务队列，不能保证添加到队列就会立即运行。如果队列前面还有其他任务，那么就要等这些任务执行完再执行。简单来讲，这里毫秒延时并不是说何时这些代码会执行，而只是说到时候会把回调加到任务队列。如果添加到队列后，主线程还被其他任务占用，比如正在处理用户操作，那么回调就不会马上执行。</li><li>requestAnimationFrame是简单但实用的工具，可以让JavaScript跟进浏览器渲染周期，从而更加有效地实现网页视觉动效</li></ol><h2 id="第20章-javascriptapi" tabindex="-1">第20章：JavaScriptAPI <a class="header-anchor" href="#第20章-javascriptapi" aria-hidden="true">#</a></h2><ol><li>跨文档消息的核心方法是postMessage()方法</li></ol>`,17),i=[t];function p(o,r,c,d,h,C){return s(),l("div",null,i)}const A=a(n,[["render",p]]);export{v as __pageData,A as default};
