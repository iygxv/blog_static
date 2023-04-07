import{_ as l,c as e,o as t,a as i}from"./app.f58bd366.js";const T=JSON.parse('{"title":"9.11-总结本周","description":"","frontmatter":{},"headers":[{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[{"level":3,"title":"本周学了什么","slug":"本周学了什么","link":"#本周学了什么","children":[]}]},{"level":2,"title":"四层和七层网络分层模型","slug":"四层和七层网络分层模型","link":"#四层和七层网络分层模型","children":[{"level":3,"title":"两个分层模型的映射关系","slug":"两个分层模型的映射关系","link":"#两个分层模型的映射关系","children":[]}]},{"level":2,"title":"域名系统(DNS)","slug":"域名系统-dns","link":"#域名系统-dns","children":[]},{"level":2,"title":"http报文结构","slug":"http报文结构","link":"#http报文结构","children":[]},{"level":2,"title":"请求方法","slug":"请求方法","link":"#请求方法","children":[]},{"level":2,"title":"状态码","slug":"状态码","link":"#状态码","children":[{"level":3,"title":"基本了解","slug":"基本了解","link":"#基本了解","children":[]},{"level":3,"title":"比较常见的状态码","slug":"比较常见的状态码","link":"#比较常见的状态码","children":[]}]},{"level":2,"title":"http特点","slug":"http特点","link":"#http特点","children":[]},{"level":2,"title":"http优缺点","slug":"http优缺点","link":"#http优缺点","children":[]},{"level":2,"title":"http中的body","slug":"http中的body","link":"#http中的body","children":[]},{"level":2,"title":"http传输大文件方法","slug":"http传输大文件方法","link":"#http传输大文件方法","children":[]}],"relativePath":"article/daily-study/2022/september/9.11-总结本周.md"}'),o={name:"article/daily-study/2022/september/9.11-总结本周.md"},n=i('<h1 id="_9-11-总结本周" tabindex="-1">9.11-总结本周 <a class="header-anchor" href="#_9-11-总结本周" aria-hidden="true">#</a></h1><h2 id="总结" tabindex="-1"><strong>总结</strong> <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><h3 id="本周学了什么" tabindex="-1"><strong>本周学了什么</strong> <a class="header-anchor" href="#本周学了什么" aria-hidden="true">#</a></h3><ul><li><strong>四层和七层网络分层模型</strong></li><li><strong>域名系统(DNS)</strong></li><li><strong>HTTP报文结构</strong></li><li><strong>请求方法</strong></li><li><strong>状态码</strong></li><li><strong>HTTP的特点以及优缺点</strong></li><li><strong>HTTP中的body</strong></li><li><strong>HTTP传输大文件方法</strong></li></ul><h2 id="四层和七层网络分层模型" tabindex="-1"><strong>四层和七层网络分层模型</strong> <a class="header-anchor" href="#四层和七层网络分层模型" aria-hidden="true">#</a></h2><p>四层的模型是tcp/ip网络分层模型</p><ul><li>第一层(链接层)</li><li>第二层(网际层或者网络互联层)</li><li>第三层(传输层)</li><li>第四层(应用层)</li></ul><p>七层的模型是OSI(<strong>开放式系统互联通信参考模型</strong>)网络分层模型</p><ul><li>第一层:物理层，网络的物理形式，例如电缆、光纤、网卡、集线器等等</li><li>第二层:数据链路层，它基本相当于 TCP/IP 的链接层</li><li>第三层:网络层，相当于 TCP/IP 里的网际层</li><li>第四层:传输层，相当于 TCP/IP 里的传输层</li><li>第五层:会话层，维护网络中的连接状态，即保持会话和同步</li><li>第六层:表示层，把数据转换为合适、可理解的语法和语义</li><li>第七层:应用层，面向具体的应用传输数据</li></ul><h3 id="两个分层模型的映射关系" tabindex="-1"><strong>两个分层模型的映射关系</strong> <a class="header-anchor" href="#两个分层模型的映射关系" aria-hidden="true">#</a></h3><ul><li>第一层:物理层，TCP/IP 里无对应</li><li>第二层:数据链路层，对应 TCP/IP 的链接层</li><li>第三层:网络层，对应 TCP/IP 的网际层</li><li>第四层:传输层，对应 TCP/IP 的传输层</li><li>第五、六、七层:统一对应到 TCP/IP 的应用层。</li></ul><img src="https://codevity.top/assets/image-20220904220812519.7619d3a6.png" alt="image-20220904220812519" style="zoom:67%;"><h2 id="域名系统-dns" tabindex="-1"><strong>域名系统(DNS)</strong> <a class="header-anchor" href="#域名系统-dns" aria-hidden="true">#</a></h2><p>DNS 解析过程</p><ul><li>先查看<code>浏览器</code>查询是否有缓存,如果没有</li><li>然后看<code>host文件</code>查询是否有缓存, 如果没有</li><li>再看<code>操作系统</code>查询是否有缓存, 如果没有</li><li>然后再去<code>非权威域名服务器</code>查询是否有缓存, 如果没有</li><li>最后查询<code>根域名</code> -&gt; <code>顶级域名</code> -&gt;<code>权威域名服务器</code></li><li>如果都没有, 网站错误,</li><li>如果存在,加载网站</li></ul><h2 id="http报文结构" tabindex="-1"><strong>http报文结构</strong> <a class="header-anchor" href="#http报文结构" aria-hidden="true">#</a></h2><ul><li>HTTP 报文结构由<code>起始行 + 头部 + 空行 + 实体</code>组成，简单地说就是<code>header+body</code></li><li>HTTP 报文<code>可以没有 body，但必须要有 header，而且header 后也必须要有空行</code></li><li><code>请求头由请求行 + 头部字段构成，响应头由状态行 + 头部字段构成</code></li><li><code>请求行有三部分:请求方法，请求目标和版本号</code></li><li><code>状态行也有三部分:版本号，状态码和原因字符串</code></li><li><code>头部字段是 key-value 的形式，用:分隔，不区分大小写</code>，顺序任意，除了规定的标准头，也可以任意添加自定义字段，实现功能扩展</li><li><code>HTTP/1.1 里唯一要求必须提供的头字段是 Host</code>，它必须出现在请求头里，标记虚拟主机名</li></ul><h2 id="请求方法" tabindex="-1"><strong>请求方法</strong> <a class="header-anchor" href="#请求方法" aria-hidden="true">#</a></h2><p>目前 HTTP/1.1 规定了八种方法，单词<strong>都必须是大写的形式</strong></p><ul><li>GET:获取资源，可以理解为读取或者下载数据</li><li>HEAD:获取资源的元信息</li><li>POST:向资源提交数据，相当于写入或上传数据</li><li>PUT:类似 POST</li><li>DELETE:删除资源</li><li>CONNECT:建立特殊的连接隧道</li><li>OPTIONS:列出可对资源实行的方法</li><li>TRACE:追踪请求 - 响应的传输路径</li></ul><h2 id="状态码" tabindex="-1"><strong>状态码</strong> <a class="header-anchor" href="#状态码" aria-hidden="true">#</a></h2><h3 id="基本了解" tabindex="-1"><strong>基本了解</strong> <a class="header-anchor" href="#基本了解" aria-hidden="true">#</a></h3><ul><li>状态码在响应报文里表示了服务器对请求的处理结果;</li><li>状态码后的原因短语是简单的文字描述，可以自定义</li><li>状态码是十进制的三位数，分为五类，从 100 到 599</li><li>2××类状态码表示成功，常用的有 200、204、206</li><li>3××类状态码表示重定向，常用的有 301、302、304</li><li>4××类状态码表示客户端错误，常用的有 400、403、404;</li><li>5××类状态码表示服务器错误，常用的有 500、501、502、503</li></ul><h3 id="比较常见的状态码" tabindex="-1"><strong>比较常见的状态码</strong> <a class="header-anchor" href="#比较常见的状态码" aria-hidden="true">#</a></h3><p><strong>1××</strong></p><p>1××类状态码属于提示信息，是协议处理的中间状态，实际能够用到的时候很少。</p><p><strong>2××</strong></p><p>2××类状态码表示服务器收到并成功处理了客户端的请求， 这也是客户端最愿意看到的状态码。</p><ul><li><p><strong>200 OK</strong>是最常见的成功状态码，表示一切正常，服务器如客户端所期望的那样返回了处理结果，如果是非 HEAD 请求，通常在响应头后都会有 body 数据。</p></li><li><p><strong>204 No Content</strong>是另一个很常见的成功状态码，它的 含义与200 OK基本相同，但响应头后没有 body 数 据。所以对于 Web 服务器来说，正确地区分 200 和 204 是很必要的。</p></li><li><p><strong>206 Partial Content</strong>是 HTTP 分块下载或断点续传的基础，在客户端发送范围请求、要求获取资源的部分数据时出现，它与200 一样，也是服务器成功处理了请求， 但 body 里的数据不是资源的全部，而是其中的一部分。</p><p>状态码 206 通常还会伴随着头字段<strong>Content-Range</strong>， 表示响应报文里 body 数据的具体范围，供客户端确认，例如Content-Range: bytes 0-99/2000，意思是此次获取的是总计 2000 个字节的前 100 个字节。</p></li></ul><p><strong>3××</strong></p><p>3××类状态码表示客户端请求的资源发生了变动，客户端必须用新的 URI 重新发送请求获取资源，也就是通常所说的重定向，包括著名的 301、302 跳转。</p><ul><li><p><strong>301 Moved Permanently</strong>俗称永久重定向，含义是此次请求的资源已经不存在了，需要改用改用新的 URI 再次访问。</p></li><li><p>与它类似的是<strong>302 Found</strong>，曾经的描述短语是<strong>Moved Temporarily</strong>，俗称临时重定向，意思是请求的资源还在，但需要暂时用另一个 URI 来访问。</p><p>(301 和 302 都会在响应头里使用字段<strong>Location</strong>指明后续要 跳转的 URI，最终的效果很相似，浏览器都会重定向到新的 URI。两者的根本区别在于语义，一个是永久，一个 是临时，所以在场景、用法上差距很大。)</p></li><li><p><strong>304 Not Modified</strong> 是一个比较有意思的状态码，它用于 If-Modified-Since 等条件请求，表示资源未修改，用于缓存控制。它不具有通常的跳转含义，但可以理解成重定 向已到缓存的文件(即缓存重定向)。</p></li></ul><p><strong>4××</strong></p><p>4××类状态码表示客户端发送的请求报文有误，服务器无法处理，它就是真正的错误码含义了。</p><ul><li><strong>400 Bad Request</strong>是一个通用的错误码，表示请求报 文有错误，但具体是数据格式错误、缺少请求头还是 URI 超长它没有明确说，只是一个笼统的错误，客户端看到 400 只会是一头雾水不知所措。</li><li><strong>403 Forbidden</strong>实际上不是客户端的请求出错，而是 表示服务器禁止访问资源。原因可能多种多样，例如信息敏感、法律禁止等，如果服务器友好一点，可以在 body 里详细说明拒绝请求的原因。</li><li><strong>404 Not Found</strong>可能是我们最常看见也是最不愿意看到的一个状态码，它的原意是资源在本服务器上未找到，所以无法提供给客户端。</li></ul><p>4××里剩下的一些代码较明确地说明了错误的原因，都很好理解，开发中常用的有:</p><ul><li><strong>405 Method Not Allowed</strong>:不允许使用某些方法操作资 源，例如不允许 POST 只能 GET。</li><li><strong>406 Not Acceptable</strong>:资源无法满足客户端请求的条件，例如请求中文但只有英文。</li><li><strong>408 Request Timeout</strong>:请求超时，服务器等待了过长时间。</li><li><strong>409 Conflict:多个请求发生了冲突</strong>，可以理解为多线程 并发时的竞态。</li><li><strong>413 Request Entity Too Large</strong>:请求报文里的 body 太大。</li><li><strong>414 Request-URI Too Long</strong>:请求行里的 URI 太大。</li><li><strong>429 Too Many Requests</strong>:客户端发送了太多的请求， 通常是由于服务器的限连策略。</li><li><strong>431 Request Header Fields Too Large</strong>:请求头某个字 段或总体太大。</li></ul><p><strong>5××</strong></p><p>5××类状态码表示客户端请求报文正确，但服务器在处理时内部发生了错误，无法返回应有的响应数据，是服务器端的错误码。</p><p><strong>500 Internal Server Error</strong>与 400 类似，也是一个通 用的错误码，服务器究竟发生了什么错误我们是不知道的。</p><p><strong>501 Not Implemented</strong>表示客户端请求的功能还不支持。</p><p><strong>502 Bad Gateway</strong>通常是服务器作为网关或者代理时返回的错误码，表示服务器自身工作正常，访问后端服务器时发生了错误，但具体的错误原因也是不知道的。</p><p><strong>503 Service Unavailable</strong>表示服务器当前很忙，暂时 无法响应服务，我们上网时有时候遇到的网络服务正忙， 请稍后重试的提示信息就是状态码 503。</p><p>(503 是一个临时的状态，很可能过几秒钟后服务器就不 那么忙了，可以继续提供服务，所以 503 响应报文里通常 还会有一个<strong>Retry-After</strong>字段，指示客户端可以在多久 以后再次尝试发送请求。)</p><h2 id="http特点" tabindex="-1"><strong>http特点</strong> <a class="header-anchor" href="#http特点" aria-hidden="true">#</a></h2><ul><li>HTTP是灵活可扩展的，可以任意添加头字段实现任意功能;</li><li>HTTP是可靠传输协议，基于TCP/IP协议尽量保证数据的送达;</li><li>HTTP是应用层协议，比FTP、SSH等更通用功能更多，能够传输任意数据;</li><li>HTTP使用了请求-应答模式，客户端主动发起请求，服务器被动回复请求;</li><li>HTTP本质上是无状态的，每个请求都是互相独立、毫无关联的，协议不要求客户端或服务器记录请求相关的信息。</li></ul><h2 id="http优缺点" tabindex="-1"><strong>http优缺点</strong> <a class="header-anchor" href="#http优缺点" aria-hidden="true">#</a></h2><ul><li>HTTP最大的优点是简单、灵活和易于扩展</li><li>HTTP拥有成熟的软硬件环境，应用的非常广泛，是互联网的基础设施</li><li>HTTP是无状态的，可以轻松实现集群化，扩展性能，但有时也需要用Cookie技术来实现有状态</li><li>HTTP是明文传输，数据完全肉眼可见，能够方便地研究分析，但也容易被窃听</li><li>HTTP是不安全的，无法验证通信双方的身份，也不能判断报文是否被窜改</li><li>HTTP的性能不算差，但不完全适应现在的互联网，还有很大的提升空间</li></ul><p>虽然HTTP免不了这样那样的缺点，但你也不要怕，别忘了它有一个最重要的灵活可扩展的优点，所有的缺点都可以在这个基础上想办法解决。</p><h2 id="http中的body" tabindex="-1"><strong>http中的body</strong> <a class="header-anchor" href="#http中的body" aria-hidden="true">#</a></h2><ul><li>数据类型表示实体数据的内容是什么，使用的是 MIME type，<code>相关的头字段是 Accept 和 Content-Type</code></li><li>数据编码表示实体数据的压缩方式，相关的头字段是<code>Accept-Encoding</code> 和<code> Content-Encoding</code></li><li>语言类型表示实体数据的自然语言，相关的头字段是<code>Accept-Language</code> 和 <code>Content-Language</code></li><li>字符集表示实体数据的编码方式，相关的头字段是<code>Accept-Charset</code> 和<code> Content-Type</code></li><li>客户端需要在请求头里使用 Accept 等头字段与服务器进行内容协商，要求服务器返回最合适的数据</li><li>Accept 等头字段可以用,顺序列出多个可能的选项，还可以用;q=参数来精确指定权重</li></ul><h2 id="http传输大文件方法" tabindex="-1"><strong>http传输大文件方法</strong> <a class="header-anchor" href="#http传输大文件方法" aria-hidden="true">#</a></h2><ul><li>分块传输可以流式收发数据，节约内存和带宽，使用<code>响应头字段Transfer-Encoding: chunked</code>来表示，<code>分块的格式是 16 进制长度头 + 数据块</code></li><li><code>范围请求可以只获取部分数</code>据，即分块请求，<code>实现视频拖拽或者断点续传</code>，使用<code>请求头字段Range和响应头字段Content-Range</code>，<code>响应状态码必须是 206</code></li><li>也可以一次请求<code>多个范围</code>，这时候<code>响应报文的数据类型是multipart/byteranges</code>，body 里的多个部分会用 boundary 字符串分隔</li></ul>',53),r=[n];function d(s,a,c,h,g,p){return t(),e("div",null,r)}const P=l(o,[["render",d]]);export{T as __pageData,P as default};
