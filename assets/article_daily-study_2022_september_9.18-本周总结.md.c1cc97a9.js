import{_ as e,c as i,o as l,a as t}from"./app.f58bd366.js";const u=JSON.parse('{"title":"9.18-本周总结","description":"","frontmatter":{},"headers":[{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[{"level":3,"title":"本周学了什么","slug":"本周学了什么","link":"#本周学了什么","children":[]}]},{"level":2,"title":"HTTP的连接管理","slug":"http的连接管理","link":"#http的连接管理","children":[]},{"level":2,"title":"HTTP的重定向和跳转","slug":"http的重定向和跳转","link":"#http的重定向和跳转","children":[]},{"level":2,"title":"HTTP的Cookie机制","slug":"http的cookie机制","link":"#http的cookie机制","children":[]},{"level":2,"title":"HTTP的缓存控制","slug":"http的缓存控制","link":"#http的缓存控制","children":[]},{"level":2,"title":"HTTP的代理服务","slug":"http的代理服务","link":"#http的代理服务","children":[]},{"level":2,"title":"HTTP的缓存代理","slug":"http的缓存代理","link":"#http的缓存代理","children":[]}],"relativePath":"article/daily-study/2022/september/9.18-本周总结.md"}'),o={name:"article/daily-study/2022/september/9.18-本周总结.md"},r=t('<h1 id="_9-18-本周总结" tabindex="-1">9.18-本周总结 <a class="header-anchor" href="#_9-18-本周总结" aria-hidden="true">#</a></h1><h2 id="总结" tabindex="-1"><strong>总结</strong> <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><h3 id="本周学了什么" tabindex="-1"><strong>本周学了什么</strong> <a class="header-anchor" href="#本周学了什么" aria-hidden="true">#</a></h3><ul><li><strong>HTTP的连接管理(短连接和长连接)</strong></li><li><strong>HTTP的重定向和跳转(301、302)</strong></li><li><strong>HTTP的Cookie机制</strong></li><li><strong>HTTP的缓存控制</strong></li><li><strong>HTTP的代理服务</strong></li><li><strong>HTTP的缓存代理</strong></li></ul><h2 id="http的连接管理" tabindex="-1"><strong>HTTP的连接管理</strong> <a class="header-anchor" href="#http的连接管理" aria-hidden="true">#</a></h2><ul><li>早期的 HTTP 协议使用短连接<code>(HTTP/0.9)</code>，收到响应后就立即关闭连接，效率很低<code>(HTTP/1.0提出长连接)</code></li><li><code>HTTP/1.1 默认启用长连接</code>，在一个连接上收发多个请求 响应，提高了传输效率<code>(HTTP/1.1默认长连接)</code></li><li>服务器会发送<code>Connection: keep-alive字段表示启用了长连接</code></li><li>报文头里如果有<code>Connection: close就意味着长连接即将关闭</code></li><li>过多的长连接会占用服务器资源，所以服务器会用一些策略有选择地关闭长连接</li><li>队头阻塞问题会导致性能下降，可以用<code>并发连接和域名分片</code>技术缓解 <ul><li><strong>并发连接</strong>，同时对一个域名发起多个长连接(现在可以一次并发6~8个)。</li><li><strong>域名分片</strong>, 多个域名指向同一台服务器</li></ul></li></ul><h2 id="http的重定向和跳转" tabindex="-1"><strong>HTTP的重定向和跳转</strong> <a class="header-anchor" href="#http的重定向和跳转" aria-hidden="true">#</a></h2><ul><li><p>重定向是服务器发起的跳转，要求客户端改用新的 URI 重新发送请求，通常会自动进行，用户是无感知的</p></li><li><p>301/302 是最常用的重定向状态码，分别是永久重定向和临时重定向<code>(301永久/302临时)</code></p><p>301/302 是最常用的重定向状态码，在 3××里剩下的几个还有:</p><ul><li>303 See Other:类似 302，但要求重定向后的请求改为 GET 方法，访问一个结果页面，避免 POST/PUT 重复操作</li><li>307 Temporary Redirect:类似 302，但重定向后请求里的方法和实体不允许变动，含义比 302 更明确</li><li>308 Permanent Redirect:类似 307，不允许重定向后的请求变动，但它是 301永久重定向的含义</li></ul></li><li><p>响应头字段 Location 指示了要跳转的 URI，可以用绝对或相对的形式<code>(响应头字段 Location : url)</code></p></li><li><p>重定向可以把一个 URI 指向另一个 URI，也可以把多URI 指向同一个 URI，用途很多</p></li><li><p>使用重定向时需要当心性能损耗，还要避免出现循环跳转。<code>(如果浏览器会解决循环重定向的- 页面显示重定向次数过多)</code></p></li></ul><h2 id="http的cookie机制" tabindex="-1"><strong>HTTP的Cookie机制</strong> <a class="header-anchor" href="#http的cookie机制" aria-hidden="true">#</a></h2><ul><li><p>Cookie 是服务器委托浏览器存储的一些数据，让服务器有了记忆能力<code>(HTTP是无状态的, Cookie给 HTTP 增加了记忆能力)</code></p></li><li><p>响应报文使用 Set-Cookie 字段发送key=value形式的 Cookie 值</p></li><li><p>请求报文里用 Cookie 字段发送多个 Cookie 值</p></li><li><p>为了保护 Cookie，还要给它设置有效期、作用域等属性，常用的有 Max-Age、Expires、Domain、HttpOnly 等</p><ul><li><p>Cookie 的有效期可以使用 <strong>Expires 和 Max-Age</strong> 两个属性来设置(<code>优先采用 Max-Age</code>)。</p></li><li><p><strong>HttpOnly</strong>只能通过浏览器 HTTP 协议传输，禁止其他方式访问,浏览器的 JS 引擎就会禁用 document.cookie 等一切相关的 API(防止跨站脚本(XSS)攻击)</p></li><li><p><strong>SameSite</strong>可以防范跨站请求伪造(XSRF)攻击, 设置 成SameSite=Strict可以严格限定 Cookie 不能随着跳转链接跨站发送， 而SameSite=Lax则略宽松一点，允许 GET/HEAD 等安全方法，但禁止 POST 跨站发送</p></li><li><p><strong>Secure</strong>，表示这个 Cookie <code>仅能用 HTTPS 协议加密传输</code>，明文的 HTTP 协议会禁止发送。但 Cookie 本身不是加密的，浏览器里还是以明文的形式存在</p></li></ul></li><li><p>Cookie 最基本的用途是身份识别，实现有状态的会话事务</p></li></ul><h2 id="http的缓存控制" tabindex="-1"><strong>HTTP的缓存控制</strong> <a class="header-anchor" href="#http的缓存控制" aria-hidden="true">#</a></h2><ul><li>缓存是优化系统性能的重要手段，HTTP 传输的每一个环节中都可以有缓存</li><li>服务器使用Cache-Control设置缓存策略，常用的是max-age，表示资源的有效期</li><li>浏览器收到数据就会存入缓存，如果没过期就可以直接使用，过期就要去服务器验证是否仍然可用</li><li><strong>验证资源是否失效需要使用条件请求，常用的是if-Modified-Since和If-None-Match，收到 304 就可以复用缓存里的资源</strong></li><li><strong>验证资源是否被修改的条件有两个:Last-modified和ETag，需要服务器预先在响应报文里设置，搭配条件请求使用</strong></li><li>浏览器也可以发送Cache-Control字段，使用max-age=0或no_cache刷新数据。 <ul><li>no_store:<strong>不允许缓存</strong>，用于某些变化非常频繁的数据，例如秒杀页面</li><li>no_cache:它的字面含义容易与 no_store 搞混，实际的意思并不是不允许缓存，而是<strong>可以缓存</strong>，但在使用之前必须要去服务器验证是否过期，是否有最新的版本</li><li>must-revalidate:又是一个和 no_cache 相似的词，它的意思是如果缓存不过期就可以继续使用，但过期了如果还想用就必须去服务器验证</li></ul></li></ul><h2 id="http的代理服务" tabindex="-1"><strong>HTTP的代理服务</strong> <a class="header-anchor" href="#http的代理服务" aria-hidden="true">#</a></h2><ul><li>HTTP 代理就是客户端和服务器通信链路中的一个中间环节，为两端提供代理服务</li><li>代理处于中间层，为 HTTP 处理增加了更多的灵活性，可以实现负载均衡、安全防护、 数据过滤等功能</li><li>代理服务器需要使用字段<code>Via</code>标记自己的身份，多个代理会形成一个列表</li><li>如果想要知道客户端的真实 IP 地址，可以使用字段<code>X-Forwarded-For和X-Real-IP</code></li><li>专门的代理协议可以在不改动原始报文的情况下传递客户端的真实 IP</li></ul><h2 id="http的缓存代理" tabindex="-1"><strong>HTTP的缓存代理</strong> <a class="header-anchor" href="#http的缓存代理" aria-hidden="true">#</a></h2><ul><li>计算机领域里最常用的性能优化手段是时空转换，也就是<code>时间换空间或者空间换时间</code>，HTTP 缓存属于后者</li><li>缓存代理是增加了缓存功能的代理服务，缓存源服务器的数据，分发给下游的客户端</li><li>Cache-Control字段也可以控制缓存代理，常用的有<code>private、s-maxage、no-transform</code>等，同样必须配合<code>Last-modified、ETag</code>等字段才能使用</li><li>缓存代理有时候也会带来负面影响，缓存不良数据，需要及时刷新或删除</li></ul>',16),a=[r];function n(d,c,s,h,T,p){return l(),i("div",null,a)}const P=e(o,[["render",n]]);export{u as __pageData,P as default};
