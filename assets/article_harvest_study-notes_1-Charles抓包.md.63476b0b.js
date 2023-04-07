import{_ as e,c as s,o as t,a}from"./app.f58bd366.js";const r="/assets/image-20221013164507591.6182d602.png",i="/assets/image-20221013164717442.52528d29.png",l="/assets/image-20221013164905232.0b389531.png",o="/assets/image-20221013165133382.b2512ecd.png",p="/assets/image-20221013165514698.a3ab1b01.png",c="/assets/image-20221013165610713.d6a8bebb.png",n="/assets/image-20221013165748778.ee8142ac.png",h="/assets/image-20221013165855131.5b4ef3ba.png",g="/assets/640.7f2361ef.png",d="/assets/1.57341ac7.png",m="/assets/2.31a17513.png",_="/assets/3.84845cc4.png",u="/assets/4.b9bf568a.png",x="/assets/5.c9d327bb.png",w=JSON.parse('{"title":"Charles抓包","description":"","frontmatter":{},"headers":[{"level":2,"title":"说明","slug":"说明","link":"#说明","children":[]},{"level":2,"title":"PC端配置","slug":"pc端配置","link":"#pc端配置","children":[]},{"level":2,"title":"移动端配置","slug":"移动端配置","link":"#移动端配置","children":[]},{"level":2,"title":"charles 手机安装证书问题","slug":"charles-手机安装证书问题","link":"#charles-手机安装证书问题","children":[]},{"level":2,"title":"修改一下请求和响应内容","slug":"修改一下请求和响应内容","link":"#修改一下请求和响应内容","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"relativePath":"article/harvest/study-notes/1-Charles抓包.md"}'),y={name:"article/harvest/study-notes/1-Charles抓包.md"},b=a('<h1 id="charles抓包" tabindex="-1"><strong>Charles抓包</strong> <a class="header-anchor" href="#charles抓包" aria-hidden="true">#</a></h1><h2 id="说明" tabindex="-1"><strong>说明</strong> <a class="header-anchor" href="#说明" aria-hidden="true">#</a></h2><p>Charles安装完成，默认只能抓取到http请求，如果查看https请求，会显示unkonw或其它之类的响应。所以需要先进行一些配置，才能抓取到完整的https请求信息。</p><h2 id="pc端配置" tabindex="-1"><strong>PC端配置</strong> <a class="header-anchor" href="#pc端配置" aria-hidden="true">#</a></h2><ul><li><p>安装证书</p><p>工具栏中<code>Help -&gt; SSL Proxying -&gt; install Charles Root Certificate</code></p><img src="'+r+'" alt="image-20221013164507591" style="zoom:50%;"><img src="'+i+'" alt="image-20221013164717442" style="zoom:50%;"><p>然后就安装完毕了</p></li><li><p>修改charles的SSL Proxying Settings</p><p><code>Proxy -&gt; SSL Proxying Settings</code></p><img src="'+l+'" alt="image-20221013164905232" style="zoom:50%;"><p>这里表示能访问的域名、端口</p></li><li><p>开启 macOS Proxy 或者 Windows Proxy</p><p><code>Proxy -&gt; macOS Proxy / Windows Proxy </code></p><img src="'+o+'" alt="image-20221013165133382" style="zoom:50%;"></li><li><p>这个时候就可以抓取PC端浏览器的https请求了</p></li></ul><h2 id="移动端配置" tabindex="-1"><strong>移动端配置</strong> <a class="header-anchor" href="#移动端配置" aria-hidden="true">#</a></h2><ul><li><p>开启Charles 的代理功能</p><p><code>Proxy -&gt; Proxy Settings</code></p><img src="'+p+'" alt="image-20221013165514698" style="zoom:50%;"></li><li><p>获取电脑的 IP</p><img src="'+c+'" alt="image-20221013165610713" style="zoom:50%;"></li><li><p>在手机上无线局域网配置中，选中所连的WiFi，选择手动配置代理</p><img src="'+n+'" alt="image-20221013165748778" style="zoom:50%;"></li><li><p>安装移动端证书</p><img src="'+h+'" alt="image-20221013165855131" style="zoom:50%;"><p>打开手机浏览器，输入<code>chls.pro/ssl</code>，访问该地址会下载charles证书，将此证书安装到手机上</p></li><li><p>上面步骤完成后就可以抓取手机端的https请求了</p></li></ul><h2 id="charles-手机安装证书问题" tabindex="-1"><strong>charles 手机安装证书问题</strong> <a class="header-anchor" href="#charles-手机安装证书问题" aria-hidden="true">#</a></h2><p>在浏览器中访问<code>chls.pro/ssl</code>下载证书</p><p>如果访问网址后一直下载不了, 可以换一个浏览器下载</p><h2 id="修改一下请求和响应内容" tabindex="-1"><strong>修改一下请求和响应内容</strong> <a class="header-anchor" href="#修改一下请求和响应内容" aria-hidden="true">#</a></h2><ul><li><p>右键请求，勾选 breakpoints</p><img src="'+g+'" alt="640" style="zoom:50%;"></li><li><p>然后开启断点</p></li></ul><p><img src="'+d+'" alt="1"></p><ul><li>刷新页面你会发现它断住了</li></ul><p><img src="'+m+'" alt="2"></p><p>下面三个按钮分别是取消、终止、执行修改后的请求的意思。</p><p>上面可以改 url，添加 header，还可以改请求内容和 cookie：</p><p><img src="'+_+'" alt="3"></p><p>点击 execute 之后就会发送请求。</p><p>之后响应的时候还会断住，这时候就可以用同样的方式修改响应了：</p><p><img src="'+u+'" alt="4"></p><p>比如我把 title 修改了一下，点击 execute 之后，看到的网页就是修改过后的</p><p><img src="'+x+'" alt="5"></p><p>这样我们就可以断点调试 https 请求了。</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-hidden="true">#</a></h2><p><a href="https://mp.weixin.qq.com/s/N8DvSASv852vzKRtyIFNyg" target="_blank" rel="noreferrer">用 Charles 断点调试 HTTPS 请求，原理揭秘</a></p>',26),f=[b];function P(S,C,v,k,z,T){return t(),s("div",null,f)}const A=e(y,[["render",P]]);export{w as __pageData,A as default};
