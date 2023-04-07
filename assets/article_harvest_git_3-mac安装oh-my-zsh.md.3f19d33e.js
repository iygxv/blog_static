import{_ as s,c as a,o as l,a as e}from"./app.f58bd366.js";const n="/assets/image-20230204144805403.6cfce45d.png",g=JSON.parse('{"title":"mac安装oh-my-zsh","description":"","frontmatter":{},"headers":[{"level":2,"title":"说明","slug":"说明","link":"#说明","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"主题配置","slug":"主题配置","link":"#主题配置","children":[]},{"level":2,"title":"找不到nvm问题","slug":"找不到nvm问题","link":"#找不到nvm问题","children":[]}],"relativePath":"article/harvest/git/3-mac安装oh-my-zsh.md"}'),t={name:"article/harvest/git/3-mac安装oh-my-zsh.md"},o=e('<h1 id="mac安装oh-my-zsh" tabindex="-1">mac安装oh-my-zsh <a class="header-anchor" href="#mac安装oh-my-zsh" aria-hidden="true">#</a></h1><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-hidden="true">#</a></h2><p>linux与mac ox系统，shell类型默认都是bash, 在使用时候预发提示，页面美观等都不够强大，后来诞生了zsh，但zsh配置复杂，就有人在zsh基础开发出了 oh-my-zsh 下载地址: <a href="https://ohmyz.sh/#install" target="_blank" rel="noreferrer">https://ohmyz.sh/#install</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><p>官网安装方式：</p><p><img src="'+n+`" alt="image-20230204144805403"></p><p>终端执行如下命令</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre></div><p>执行过程遇到<code>443</code>问题</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">HQITI0010:.ssh shiyang.long$ sh -c &quot;$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>原因是使用了国外资源，改国内镜像安装</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -fsSL https://gitee.com/shmhlsy/oh-my-zsh-install.sh/raw/master/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="主题配置" tabindex="-1">主题配置 <a class="header-anchor" href="#主题配置" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"></span></code></pre></div><p>编辑 <code>~/.zshrc</code>中的 <code>ZSH_THEME</code>=&quot;xxx&quot;即可。默认 ：ZSH_THEME=&quot;robbyrussell&quot;</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Set name of the theme to load --- if set to &quot;random&quot;, it will</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># load a random theme each time oh-my-zsh is loaded, in which case,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># to know which specific one was loaded, run: echo $RANDOM_THEME</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes</span></span>
<span class="line"><span style="color:#A6ACCD;">ZSH_THEME</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">robbyrussell</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>更多主题查看github上的wiki：<a href="https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fohmyzsh%2Fohmyzsh%2Fwiki%2FThemes" target="_blank" rel="noreferrer">https://github.com/ohmyzsh/ohmyzsh/wiki/Themes</a></p><p>修改完成，执行配置文件生效即可</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"></span></code></pre></div><h2 id="找不到nvm问题" tabindex="-1">找不到nvm问题 <a class="header-anchor" href="#找不到nvm问题" aria-hidden="true">#</a></h2><ul><li>在终端输入<strong>open ~/.zshrc</strong></li><li>在最开头加上<strong>source ~/.bash_profile</strong></li><li>在刚才的终端输入<strong>source ~/.zshrc</strong></li></ul><p><a href="https://blog.csdn.net/sherlyxoxo/article/details/125265019" target="_blank" rel="noreferrer">zsh中nvm不见了</a></p>`,22),p=[o];function c(r,i,h,d,y,m){return l(),a("div",null,p)}const C=s(t,[["render",c]]);export{g as __pageData,C as default};
