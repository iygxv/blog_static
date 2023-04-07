import{_ as t,c as l,o as e,a as i}from"./app.f58bd366.js";const P=JSON.parse('{"title":"9.1-学习http(一)","description":"","frontmatter":{},"headers":[{"level":2,"title":"http的发展历程","slug":"http的发展历程","link":"#http的发展历程","children":[{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"http是什么","slug":"http是什么","link":"#http是什么","children":[{"level":3,"title":"小结","slug":"小结-1","link":"#小结-1","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"article/daily-study/2022/september/9.1-学习http(一).md"}'),r={name:"article/daily-study/2022/september/9.1-学习http(一).md"},o=i('<h1 id="_9-1-学习http-一" tabindex="-1">9.1-学习http(一) <a class="header-anchor" href="#_9-1-学习http-一" aria-hidden="true">#</a></h1><h2 id="http的发展历程" tabindex="-1">http的发展历程 <a class="header-anchor" href="#http的发展历程" aria-hidden="true">#</a></h2><ul><li><p><code>1989年</code>, HTTP诞生了, 第一版是 HTTP/ 0.9，但 HTTP/0.9 并不是一个正式标准</p><ul><li>结构比较简单，为了便于服务器和客户端处理，它也采用了纯文本格式</li><li>只允许用GET动作从服务器上获取 HTML 文档，并且在响应请求之后立即关闭连接，功能非常有限</li></ul></li><li><p><code>1996年</code>,HTTP/1.0 版本正式发布, 它在多方面增强了 0.9 版, 例如</p><p><strong>HTTP/1.0 主要的变更点有:</strong></p><ul><li>增加了 HEAD、POST 等新方法</li><li>增加了响应状态码，标记可能的错误原因</li><li>引入了协议版本号概念</li><li>引入了 HTTP Header(头部)的概念，让 HTTP 处理请求和响应更加灵活</li><li>传输的数据不再仅限于文本</li></ul></li><li><p><code>1999年</code>,HTTP/1.1 发布了 RFC 文档, 从版本号我们就可以看到，HTTP/1.1 是对 HTTP/1.0 的小幅度修正。但一个重要的区别 是:它是一个正式的标准，而不是一份可有可无的参考文档。</p><p><strong>HTTP/1.1 主要的变更点有:</strong></p><ul><li>增加了 PUT、DELETE 等新的方法</li><li>增加了缓存管理和控制</li><li>明确了连接管理，允许持久连接</li><li>允许响应数据分块(chunked)，利于传输大文件</li><li>强制要求 Host 头，让互联网主机托管成为可能</li></ul></li><li><p><code>2015年, </code>发布了 HTTP/2, HTTP/2 的制定充分考虑了现今互联网的现状:宽带、移动、不安全，在高度兼容</p></li></ul><p><strong>HTTP/2 主要的变更点有:</strong></p><ul><li><p>二进制协议，不再是纯文本</p></li><li><p>可发起多个请求，废弃了 1.1 里的管道</p></li><li><p>使用专用算法压缩头部，减少数据传输量</p></li><li><p>允许服务器主动向客户端推送数据</p></li><li><p>增强了安全性，事实上要求加密通信</p></li><li><p><code>2018年</code>, HTTP/3 正式进入了标准化制订阶段</p></li></ul><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-hidden="true">#</a></h3><ul><li>HTTP 协议始于三十年前蒂姆·伯纳斯 - 李的一篇论文</li><li>HTTP/0.9 是个简单的文本协议，只能获取文本资源(<strong>1989</strong>)</li><li>HTTP/1.0 确立了大部分现在使用的技术，但它不是正式标准(<strong>1996</strong>)</li><li>HTTP/1.1 是目前互联网上使用最广泛的协议，功能也非常完善(<strong>1999</strong>)</li><li>HTTP/2 基于 Google 的 SPDY 协议，注重性能改善，但还未普及(<strong>2015</strong>)</li><li>HTTP/3 基于 Google 的 QUIC 协议，是将来的发展方向(<strong>2018</strong>)</li></ul><h2 id="http是什么" tabindex="-1">http是什么 <a class="header-anchor" href="#http是什么" aria-hidden="true">#</a></h2><p>HTTP 是<code>超文本传输协议</code>，也就是<code>HypeText Transfer Protocol</code></p><p>先看一下 HTTP 的名字:<strong>超文本传输协议</strong>，它可以拆成三个部分，分别是<strong>超文本、传输和协议</strong>。</p><p>首先，HTTP 是一个<strong>协议</strong>。(协议: 两个或多个参与者的一种行为约定和规范)</p><ul><li>HTTP 是一个用在计算机世界里的协议。它使用计算机能够理解的语言确立了一种计算机之 间交流通信的规范，以及相关的各种控制和错误处理方式</li></ul><p>接下来我们看 HTTP 字面里的第二部分:<strong>传输</strong></p><ul><li>所谓的传输(Transfer)其实很好理解，就是把一堆东西 从 A 点搬到 B 点，或者从 B 点搬到 A 点，即A&lt;===&gt;B</li><li>A 到 B 的 传输过程中可以存在任意多个中间人</li><li>A&lt;=&gt;X&lt;=&gt;Y&lt;=&gt;Z&lt;=&gt;B</li></ul><p>HTTP 字面里的第三部分:<strong>超文本</strong></p><ul><li>所谓<strong>文本</strong>(Text)，就表示 HTTP 传输的不是 TCP/UDP 这些底层协议里被切分的杂 乱无章的二进制包(datagram)，而是完整的、有意义的数据，可以被浏览器、服务器这样的上层应用程序处理</li><li>在互联网早期，文本只是简单的字符文字，但发展到现在，文本的涵义已经被大大 地扩展了，图片、音频、视频、甚至是压缩包，在 HTTP 眼里都可以算做是文本</li><li>所谓<strong>超文本</strong>，就是超越了普通文本的文本，它是文字、图片、音频和视频等的混合体，最关键的是含有超链接，能够从一个超文本跳跃到另一个超文本，形成复杂的非线性、网状的结构关系。</li><li>对于超文本，我们最熟悉的就应该是 HTML 了，它本身只是纯文字文件，但内部用很 多标签定义了对图片、音频、视频等的链接，再经过浏览器的解释，呈现在我们面前的就是 一个含有多种视听信息的页面。</li></ul><h3 id="小结-1" tabindex="-1">小结 <a class="header-anchor" href="#小结-1" aria-hidden="true">#</a></h3><p><code>http是什么?</code></p><p><strong>HTTP 是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范</strong></p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><p><a href="https://time.geekbang.org/column/intro/100029001" target="_blank" rel="noreferrer">透视HTTP协议(罗剑锋)</a></p>',21),a=[o];function n(T,s,p,d,h,c){return e(),l("div",null,a)}const u=t(r,[["render",n]]);export{P as __pageData,u as default};
