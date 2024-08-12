"use strict";(self.webpackChunktimya=self.webpackChunktimya||[]).push([[823],{106:(n,e,t)=>{t.r(e),t.d(e,{comp:()=>o,data:()=>l});var a=t(641);const s=[(0,a.Fv)('<h1 id="adding-business-objects" tabindex="-1"><a class="header-anchor" href="#adding-business-objects"><span>Adding Business Objects</span></a></h1><p>Business objects provide database connections. For example, to add a department to a form, you can follow these steps:</p><h2 id="adding-a-department" tabindex="-1"><a class="header-anchor" href="#adding-a-department"><span>Adding a Department</span></a></h2><ol><li><p><strong>Admin Menu:</strong></p><ul><li>Go to the <strong>Settings</strong> section from the Admin menu.</li><li>Then navigate to the <strong>Department</strong> section.</li><li>Click the <strong>New</strong> button to add the required departments.</li></ul><p><img src="/TimyaBPM-Documents/iş1.png" alt="Figure 1"></p></li><li><p><strong>Database Connection:</strong></p><ul><li>To add a department to the form, go to the <strong>Department</strong> table in the database.</li><li>Add the following code to the query text section in the business objects to establish the database connection:<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="line"><span class="token keyword">SELECT</span> <span class="token keyword">TOP</span> <span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">[</span>DepartmentId<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>DepartmentName<span class="token punctuation">]</span></span>\n<span class="line"><span class="token keyword">FROM</span> <span class="token punctuation">[</span>Departments<span class="token punctuation">]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><img src="/TimyaBPM-Documents/iş2.png" alt="Figure 2"></p></li><li><p><strong>Adding to the Form:</strong></p><ul><li>Go to the form and add the <strong>Department</strong> section.</li><li>Instead of manual entry, click <strong>Data Source</strong> to fetch information from the database.</li><li>Select the added section from the business objects.</li></ul><p><img src="/TimyaBPM-Documents/iş3.png" alt="Figure 3"><img src="/TimyaBPM-Documents/iş4.png" alt="Figure 4"></p></li></ol>',4)],i={},o=(0,t(262).A)(i,[["render",function(n,e){return(0,a.uX)(),(0,a.CE)("div",null,s)}]]),l=JSON.parse('{"path":"/en/nesne.html","title":"Adding Business Objects","lang":"en","frontmatter":{},"headers":[{"level":2,"title":"Adding a Department","slug":"adding-a-department","link":"#adding-a-department","children":[]}],"git":{"updatedTime":1723467718000,"contributors":[{"name":"NURŞAH YILDIZ","email":"nursah.yildiz@timyabilisim.com.tr","commits":1}]},"filePathRelative":"en/nesne.md"}')}}]);