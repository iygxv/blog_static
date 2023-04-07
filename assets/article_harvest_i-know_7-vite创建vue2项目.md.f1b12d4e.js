import{_ as s,c as e,o as a,a as l}from"./app.f58bd366.js";const n="/assets/image-20221003150455272.802fbb66.png",h=JSON.parse('{"title":"7-vite创建vue2项目","description":"","frontmatter":{},"headers":[{"level":2,"title":"初始化 Vue2 项目","slug":"初始化-vue2-项目","link":"#初始化-vue2-项目","children":[{"level":3,"title":"初始化项目","slug":"初始化项目","link":"#初始化项目","children":[]},{"level":3,"title":"安装 vite 对 vue2 支持的插件","slug":"安装-vite-对-vue2-支持的插件","link":"#安装-vite-对-vue2-支持的插件","children":[]},{"level":3,"title":"安装 vue 依赖","slug":"安装-vue-依赖","link":"#安装-vue-依赖","children":[]},{"level":3,"title":"修改项目文件依赖关系","slug":"修改项目文件依赖关系","link":"#修改项目文件依赖关系","children":[]}]},{"level":2,"title":"创建其他类型项目","slug":"创建其他类型项目","link":"#创建其他类型项目","children":[]}],"relativePath":"article/harvest/i-know/7-vite创建vue2项目.md"}'),t={name:"article/harvest/i-know/7-vite创建vue2项目.md"},p=l(`<h1 id="_7-vite创建vue2项目" tabindex="-1">7-vite创建vue2项目 <a class="header-anchor" href="#_7-vite创建vue2项目" aria-hidden="true">#</a></h1><h2 id="初始化-vue2-项目" tabindex="-1"><strong>初始化 Vue2 项目</strong> <a class="header-anchor" href="#初始化-vue2-项目" aria-hidden="true">#</a></h2><p>因为<code>Vite</code> 默认没提供 <code>Vue2</code> 项目创建的选项。</p><p>我们可以使用 <code>Vite</code> 创建一个原生项目，然后再安装 <code>Vue2</code> 的生态进行开发。</p><h3 id="初始化项目" tabindex="-1"><strong>初始化项目</strong> <a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a></h3><p>运行以下命令创建项目</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vite@latest</span></span>
<span class="line"></span></code></pre></div><p>如果是首次使用 <code>Vite</code> 的话，会询问你是否继续，这里回复 y 即可。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">Ok</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">proceed?</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">y</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>之后只需输入项目名称即可，我这里新建的项目名为：v2-form。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">Project</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vite-vue2</span></span>
<span class="line"></span></code></pre></div><p>完成以上步骤后，再选择以下要新建的是什么项目即可。</p><p>这里选择 <code>vanilla</code> 即可，随后会追问选择 <code>原生</code> 的还是 <code>ts</code> 的，根据自己需求选择即可。</p><p>我这里会选择 原生 进行开发。</p><img src="`+n+`" alt="image-20221003150455272" style="zoom:50%;"><h3 id="安装-vite-对-vue2-支持的插件" tabindex="-1">安装 vite 对 vue2 支持的插件 <a class="header-anchor" href="#安装-vite-对-vue2-支持的插件" aria-hidden="true">#</a></h3><p>要在 <code>vite</code> 里运行 <code>vue2</code> 项目，需要安装一个 <code>vite</code> 的插件：<code>vite-plugin-vue2</code></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vite-plugin-vue2</span></span>
<span class="line"></span></code></pre></div><p>要使用 <code>vite</code> 插件，需要在项目的根目录创建 <code>vite.config.js</code> 文件。</p><p>在 <code>vite.config.js</code> 里输入以下代码。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createVuePlugin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite-plugin-vue2</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">createVuePlugin</span><span style="color:#A6ACCD;">()]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>引入 <code>vite-plugin-vue2</code> 插件，并用 <code>Vite</code> 提供的插件注册方法来注册。</p><p>需要注意，<code>createVuePlugin()</code> 是跟着括号的，是要执行的！</p><h3 id="安装-vue-依赖" tabindex="-1"><strong>安装 vue 依赖</strong> <a class="header-anchor" href="#安装-vue-依赖" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue@</span><span style="color:#F78C6C;">2.7</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue-template-compiler</span></span>
<span class="line"></span></code></pre></div><h3 id="修改项目文件依赖关系" tabindex="-1"><strong>修改项目文件依赖关系</strong> <a class="header-anchor" href="#修改项目文件依赖关系" aria-hidden="true">#</a></h3><ul><li><p>创建 src 目录</p><p>在项目根目录下创建 <code>src</code> 目录。</p><p>然后把 <code>main.js</code> 移到 <code>src</code> 目录里。</p></li><li><p>修改 index.html</p><p>项目启动后，入口文件是 <code>index.html</code> ，而 <code>index.html</code> 原本引入了 <code>main.js</code> ，所以也要修改一下 <code>index.html</code> 文件的指向。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/src/main.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></li><li><p>创建 App.vue 文件</p><p>创建 <code>App.vue</code> 文件，并输入以下代码</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello Vite Vue2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></li><li><p>修改 src/main.js 这一步的代码就有点像使用 vue-cli 创建的项目里的 main.js 的操作了。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./App.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">render</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">h</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">h</span><span style="color:#A6ACCD;">(App)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div></li><li><p>启动项目</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"></span></code></pre></div></li></ul><h2 id="创建其他类型项目" tabindex="-1"><strong>创建其他类型项目</strong> <a class="header-anchor" href="#创建其他类型项目" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">my-vue-app</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--template</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue</span></span>
<span class="line"></span></code></pre></div><p>目前支持的模板预设如下：</p><table><thead><tr><th style="text-align:center;">JavaScript</th><th style="text-align:center;">TypeScript</th></tr></thead><tbody><tr><td style="text-align:center;"><a href="https://vite.new/vanilla" target="_blank" rel="noreferrer">vanilla(原生)</a></td><td style="text-align:center;"><a href="https://vite.new/vanilla-ts" target="_blank" rel="noreferrer">vanilla-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/vue" target="_blank" rel="noreferrer">vue</a></td><td style="text-align:center;"><a href="https://vite.new/vue-ts" target="_blank" rel="noreferrer">vue-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/react" target="_blank" rel="noreferrer">react</a></td><td style="text-align:center;"><a href="https://vite.new/react-ts" target="_blank" rel="noreferrer">react-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/preact" target="_blank" rel="noreferrer">preact</a></td><td style="text-align:center;"><a href="https://vite.new/preact-ts" target="_blank" rel="noreferrer">preact-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/lit" target="_blank" rel="noreferrer">lit</a></td><td style="text-align:center;"><a href="https://vite.new/lit-ts" target="_blank" rel="noreferrer">lit-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/svelte" target="_blank" rel="noreferrer">svelte</a></td><td style="text-align:center;"><a href="https://vite.new/svelte-ts" target="_blank" rel="noreferrer">svelte-ts</a></td></tr></tbody></table>`,31),o=[p];function r(c,i,d,y,D,C){return a(),e("div",null,o)}const v=s(t,[["render",r]]);export{h as __pageData,v as default};
