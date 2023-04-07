import{_ as s,c as n,o as e,a}from"./app.f58bd366.js";const F=JSON.parse('{"title":"vue2易忽略知识","description":"","frontmatter":{},"headers":[{"level":2,"title":"sync修饰符","slug":"sync修饰符","link":"#sync修饰符","children":[]},{"level":2,"title":"v-bind=\\"$attrs\\"  v-on=\\"$listeners\\"","slug":"v-bind-attrs-v-on-listeners","link":"#v-bind-attrs-v-on-listeners","children":[]},{"level":2,"title":"动态组件","slug":"动态组件","link":"#动态组件","children":[]}],"relativePath":"article/web/vue/vue2/1-vue2易忽略知识.md"}'),t={name:"article/web/vue/vue2/1-vue2易忽略知识.md"},l=a(`<h1 id="vue2易忽略知识" tabindex="-1">vue2易忽略知识 <a class="header-anchor" href="#vue2易忽略知识" aria-hidden="true">#</a></h1><h2 id="sync修饰符" tabindex="-1">sync修饰符 <a class="header-anchor" href="#sync修饰符" aria-hidden="true">#</a></h2><p><code>作用: 使用了sync修饰符, 就不用再父组件中接受子组件发射的事件</code></p><p>什么情况下用sync修饰符</p><ul><li>需要对一个 prop 进行<code>双向绑定</code></li></ul><p><strong>父组件</strong></p><p><code>原本应该这样写</code></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">text-document</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">v-bind:title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">doc.title</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">v-on:update:title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">doc.title = $event</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">text-document</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><code>简写</code></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">text-document</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-bind:title.sync</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">doc.title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">text-document</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>子组件</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$emit</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">update:title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> newTitle)</span></span>
<span class="line"></span></code></pre></div><p>注意带有 <code>.sync</code> 修饰符的 <code>v-bind</code> <strong>不能</strong>和表达式一起使用 (例如 <code>v-bind:title.sync=”doc.title + ‘!’”</code> 是无效的)。</p><p><strong>提示</strong></p><p>vue3已经使用<code>v-model:属性</code>代替了<code>sync修饰符</code></p><h2 id="v-bind-attrs-v-on-listeners" tabindex="-1">v-bind=&quot;$attrs&quot; v-on=&quot;$listeners&quot; <a class="header-anchor" href="#v-bind-attrs-v-on-listeners" aria-hidden="true">#</a></h2><p><code>v-bind=&quot;$attrs&quot; v-on=&quot;$listeners&quot;</code> 专门用于深层关系<code>(如: 爷 -&gt; 父- &gt; 孙)</code>传参和发射事件</p><p><strong>注意点</strong></p><ul><li>这俩个写在父组件中</li><li>父组件的props不能使用<code>(由爷到孙)</code>传过去的参数, 如要使用, 使用(<code>props, $emit</code>)逐层传递</li></ul><h2 id="动态组件" tabindex="-1">动态组件 <a class="header-anchor" href="#动态组件" aria-hidden="true">#</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">currentTabComponent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><code>currentTabComponent</code>可以包括</p><ul><li>已注册组件的名字✅</li><li>一个组件的选项对象</li></ul>`,23),o=[l];function p(c,r,i,d,y,D){return e(),n("div",null,o)}const h=s(t,[["render",p]]);export{F as __pageData,h as default};
