import{_ as s,c as n,o as a,a as l}from"./app.f58bd366.js";const A=JSON.parse('{"title":"6.30-数字千分位分割","description":"","frontmatter":{},"headers":[{"level":2,"title":"实现方式","slug":"实现方式","link":"#实现方式","children":[{"level":3,"title":"实现一","slug":"实现一","link":"#实现一","children":[]},{"level":3,"title":"实现二","slug":"实现二","link":"#实现二","children":[]},{"level":3,"title":"实现三","slug":"实现三","link":"#实现三","children":[]}]}],"relativePath":"article/daily-study/2022/july/6.30-数字千分位分割.md"}'),p={name:"article/daily-study/2022/july/6.30-数字千分位分割.md"},o=l(`<h1 id="_6-30-数字千分位分割" tabindex="-1">6.30-数字千分位分割 <a class="header-anchor" href="#_6-30-数字千分位分割" aria-hidden="true">#</a></h1><p>1.为什么数字使用千分位分割, 有以下几个原因</p><ul><li><p>防止被浏览器表示为手机号码，影响本意</p><p>主流实现：<meta name="format-detection" content="telephone=no"></p><p>需要手机号码的地方：<a href="tel:021-81234567">81234567</a></p></li><li><p>能让语音阅读整体阅读, 比如 123456789，读 一亿两千三百四十五万六千七百八十九；而不是 一二三四五六七八九</p></li><li><p>更加符合国际通用规范</p></li></ul><h2 id="实现方式" tabindex="-1">实现方式 <a class="header-anchor" href="#实现方式" aria-hidden="true">#</a></h2><ul><li>通过 Number.prototype.toLocaleString()</li><li>通过正则</li><li>手写</li></ul><h3 id="实现一" tabindex="-1">实现一 <a class="header-anchor" href="#实现一" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">123456789</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toLocaleString</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// &#39;123,456,789&#39;</span></span>
<span class="line"></span></code></pre></div><p>这个实现方式存在问题: IE 会自动末尾添加 .00 小数</p><h3 id="实现二" tabindex="-1">实现二 <a class="header-anchor" href="#实现二" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">123456789</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">/(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">)(?=(</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{3})+</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">)/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$1,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 解释</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * (\\d) 表示匹配数字并捕获；后续通过 $1、$2……来访问</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * ((\\d{3})+$) 表示匹配三个数字多次（至少一次），并且以三个数字结尾（就是数字个数不是三的倍数的时候，先从后面找，比如 “0123&quot; 匹配的是 &quot;123&quot; 而不是 &quot;012&quot;）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * (?=p)，这里 p 就是 ((\\d{3})+$) ；(?=p) 这样的形式叫做 positive lookahead assertion 正向先行断言，表示匹配的是 p 前面的位置</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 到这里，配合前面的 (\\d)(?=(\\d{3}+$))，意思是只匹配满足后面跟着 (\\d{3}+$) 条件的数字</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 最后，&quot;$1,&quot; 就是把捕获到的数字后面加个逗号；这里 $1 就是指代第一个捕获到的，满足条件的数字</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><p>这个实现方式存在问题: 只限于整数匹配</p><h3 id="实现三" tabindex="-1">实现三 <a class="header-anchor" href="#实现三" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">formatNum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">num</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 1. 转化为字符串更好操作</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">strNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 2. 看是否有小数点以及获取到小数</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">decimals</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">strNum</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 包含小数点</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">decimal</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">strNum</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// 数组解构 =&gt; 解构出来例如123.45 =&gt; [123, 45] 45为小数 </span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">strNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">decimals</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">decimal</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 3. 看num长度</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">strNum</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">// 整数部分不够三位, 不分割</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">decimals</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">strNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">decimals</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">decimals</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 分割</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 可以进行</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">remainder</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">%</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 获取到是否3的倍数</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">decimals</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">decimals</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temp</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 获取到分数</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">remainder</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">beforeNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">strNum</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">remainder</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// 截取前面不足3位的</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      * match返回的是一个数组</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      * 如果使用g标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      * 如果未使用g标志，则仅返回第一个完整匹配及其相关的捕获组（Array）。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      * 例如: &#39;123455&#39;.match(/\\d{3}/g) =&gt; [&#39;123&#39;, &#39;455&#39;]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      * &#39;123455&#39;.match(/\\d{3}/) 没有使用g标志 [&#39;123&#39;, index: 0, input: &#39;123455&#39;, groups: undefined]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      */</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">middleNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">strNum</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">remainder</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">match</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{3}/</span><span style="color:#F78C6C;">g</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// 截取中间</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">afterNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temp</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 小数点</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">beforeNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">middleNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">afterNum</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">middleNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">strNum</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">len</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">match</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">{3}/</span><span style="color:#F78C6C;">g</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">afterNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temp</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">middleNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">afterNum</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,13),e=[o];function t(c,r,y,F,D,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
