import{_ as e,c as a,o as i,a as l}from"./app.f58bd366.js";const P=JSON.parse('{"title":"8.7-总结本周PromiseAPI的区别","description":"","frontmatter":{},"headers":[{"level":2,"title":"Promise.all","slug":"promise-all","link":"#promise-all","children":[]},{"level":2,"title":"Promise.allSettled","slug":"promise-allsettled","link":"#promise-allsettled","children":[]},{"level":2,"title":"Promise.any","slug":"promise-any","link":"#promise-any","children":[]},{"level":2,"title":"Promise.any","slug":"promise-any-1","link":"#promise-any-1","children":[]}],"relativePath":"article/daily-study/2022/august/8.7-总结本周PromiseAPI的区别.md"}'),r={name:"article/daily-study/2022/august/8.7-总结本周PromiseAPI的区别.md"},o=l('<h1 id="_8-7-总结本周promiseapi的区别" tabindex="-1">8.7-总结本周PromiseAPI的区别 <a class="header-anchor" href="#_8-7-总结本周promiseapi的区别" aria-hidden="true">#</a></h1><p>主要是区别<code>Promise.all</code> 、<code>Promise.allSettled</code>、<code>Promise.any&#39;</code>、<code>Promise.race</code></p><h2 id="promise-all" tabindex="-1">Promise.all <a class="header-anchor" href="#promise-all" aria-hidden="true">#</a></h2><ul><li><code>Promise.all</code>会等待所有成功之后或者第一次失败才返回结果</li></ul><h2 id="promise-allsettled" tabindex="-1">Promise.allSettled <a class="header-anchor" href="#promise-allsettled" aria-hidden="true">#</a></h2><ul><li><code>Promise.allSettled</code>无论成功还是失败, 都会被收集到数组中, 等待所有都完成</li></ul><h2 id="promise-any" tabindex="-1">Promise.any <a class="header-anchor" href="#promise-any" aria-hidden="true">#</a></h2><ul><li><code>Promise.any</code>在本质上，这个方法和<code>Promise.all()</code>是相反的</li><li>只要其中的一个 promise 成功，就返回那个已经成功的 promise</li><li>或者等待全部失败, 返回一个失败的 promise 和AggregateError类型的实例</li></ul><h2 id="promise-any-1" tabindex="-1">Promise.any <a class="header-anchor" href="#promise-any-1" aria-hidden="true">#</a></h2><ul><li><code>Promise.race</code>, 无论成功还是失败, 返回最快的一个</li></ul>',10),s=[o];function t(d,c,n,m,h,_){return i(),a("div",null,s)}const u=e(r,[["render",t]]);export{P as __pageData,u as default};
