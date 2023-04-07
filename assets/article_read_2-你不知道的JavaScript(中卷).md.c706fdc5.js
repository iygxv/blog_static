import{_ as s,c as a,o as n,a as l}from"./app.f58bd366.js";const F=JSON.parse('{"title":"你不知道的JavaScript(中卷)","description":"","frontmatter":{},"headers":[{"level":2,"title":"类型","slug":"类型","link":"#类型","children":[]},{"level":2,"title":"异步和性能","slug":"异步和性能","link":"#异步和性能","children":[]}],"relativePath":"article/read/2-你不知道的JavaScript(中卷).md"}'),p={name:"article/read/2-你不知道的JavaScript(中卷).md"},o=l(`<h1 id="你不知道的javascript-中卷" tabindex="-1">你不知道的JavaScript(中卷) <a class="header-anchor" href="#你不知道的javascript-中卷" aria-hidden="true">#</a></h1><h2 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-hidden="true">#</a></h2><ol><li>JavaScript有七种内置类型：</li></ol><ul><li><p>空值（null）</p></li><li><p>未定义（undefined）</p></li><li><p>布尔值（boolean）</p></li><li><p>数字（number）</p></li><li><p>字符串（string）</p></li><li><p>对象（object）</p></li><li><p>符号（symbol, ES6中新增）</p></li></ul><p>除对象之外，其他统称为“基本类型”。</p><p>2.function（函数）也是JavaScript的一个内置类型。然而查阅规范就会知道，它实际上是object的一个“子类型”。具体来说，函数是“可调用对象”，它有一个内部属性[[Call]]，该属性使其可以被调用。</p><p>3.很多开发人员将undefined和undeclared混为一谈，但在JavaScript中它们是两码事。undefined是值的一种。undeclared则表示变量还没有被声明过。</p><p>4.JavaScript中的“整数”就是没有小数的十进制数。所以42.0即等同于“整数”42</p><p>5.toPrecision(..)方法用来指定有效数位的显示位数</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">42.59</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toPrecision</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 43</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toPrecision</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 42.6</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toPrecision</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 42.59</span></span>
<span class="line"></span></code></pre></div><p>6.小数精度问题</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F78C6C;">0.1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.3</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span></code></pre></div><p>从数学角度来说，上面的条件判断应该为true，可结果为什么是false呢？</p><p>简单来说，二进制浮点数中的0.1和0.2并不是十分精确，它们相加的结果并非刚好等于0.3，而是一个比较接近的数字0.30000000000000004，所以条件判断结果为false。</p><p>那么应该怎样来判断0.1 + 0.2和0.3是否相等呢</p><p>最常见的方法是设置一个误差范围值，通常称为“机器精度”（machine epsilon），对JavaScript的数字来说，这个值通常是2^-52 (2.220446049250313e-16)。</p><p>从ES6开始，该值定义在Number.EPSILON中，我们可以直接拿来用，也可以为ES6之前的版本写polyfill：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">Number</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">EPSILON) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Number</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">EPSILON </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pow</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">52</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>可以使用Number.EPSILON来比较两个数字是否相等（在指定的误差范围内）：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">compare</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">n1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">n2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">abs</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n2</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Number</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">EPSILON</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.3</span></span>
<span class="line"><span style="color:#82AAFF;">compare</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div><p>7.要检测一个值是否是整数，可以使用ES6中的Number.isInteger(..)方法</p><p>ES6之前的版本polyfill Number.isInteger(..)方法：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;">(Number</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isInteger) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">Number</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isInteger</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">num</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">%</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>8.Infinity 与 Number.MAX_VALUE</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">Infinity</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 代表可能溢出最大安全数字</span></span>
<span class="line"><span style="color:#A6ACCD;">Number</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MAX_VALUE </span><span style="color:#676E95;font-style:italic;">// 代表最大安全数字</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">Infinity</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> Number</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MAX_VALUE </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#89DDFF;">Infinity</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> Number</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MAX_VALUE </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span></code></pre></div><p>9.由于基本类型值没有．length和．toString()这样的属性和方法，需要通过封装对象才能访问，此时JavaScript会自动为基本类型值包装（box或者wrap）一个封装对象</p><p>10.如果想要自行封装基本类型值，可以使用Object(..)函数（不带new关键字）</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> strObj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Object</span><span style="color:#A6ACCD;">(str)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> str </span><span style="color:#676E95;font-style:italic;">// &#39;string&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> strObj </span><span style="color:#676E95;font-style:italic;">// &#39;object&#39;</span></span>
<span class="line"></span></code></pre></div><p>11.获取封装对象的值</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">42</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Boolean</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">valueOf</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &#39;abc&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">valueOf</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 42</span></span>
<span class="line"><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">valueOf</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div><p>12.构造函数Array(..)不要求必须带new关键字。不带时，它会被自动补上。因此Array(1,2,3)和new Array(1,2,3)的效果是一样的</p><p>13.获取时间搓</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> timestamp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> timestamp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// es5中的</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> timestamp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Date</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">now</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><p>我们不建议对日期类型使用强制类型转换，应该使用Date.now()来获得当前的时间戳，使用new Date(..).getTime()来获得指定时间的时间戳。</p><p>14.~运算符</p><p><code>~x大致等同于-(x+1)</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#89DDFF;">!~</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">)</span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 0 -&gt; -(-1 + 1) =&gt; -0</span></span>
<span class="line"><span style="color:#89DDFF;">!</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div><p>15.~~运算符</p><p>用~~来截除数字值的小数部分</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 正数</span></span>
<span class="line"><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">49.6</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 49</span></span>
<span class="line"><span style="color:#89DDFF;">~~</span><span style="color:#F78C6C;">49.6</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 49</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 负数的时候</span></span>
<span class="line"><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">49.6</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// -50</span></span>
<span class="line"><span style="color:#89DDFF;">~~-</span><span style="color:#F78C6C;">49.6</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// -49</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F78C6C;">49.6</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 也可以移除小数部分</span></span>
<span class="line"></span></code></pre></div><p>16.宽松相等（loose equals）<code>==</code>和严格相等（strict equals）<code>===</code>都用来判断两个值是否“相等”, <code>==</code>允许在相等比较中进行强制类型转换，而<code>===</code>不允许</p><h2 id="异步和性能" tabindex="-1">异步和性能 <a class="header-anchor" href="#异步和性能" aria-hidden="true">#</a></h2>`,43),e=[o];function t(c,r,y,C,D,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
