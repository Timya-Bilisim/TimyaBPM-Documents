"use strict";(self.webpackChunktimya=self.webpackChunktimya||[]).push([[585],{621:(n,a,e)=>{e.r(a),e.d(a,{comp:()=>t,data:()=>r});var s=e(641);const l=[(0,s.Fv)('<h1 id="is-nesnesi-ekleme" tabindex="-1"><a class="header-anchor" href="#is-nesnesi-ekleme"><span>İş Nesnesi Ekleme</span></a></h1><p>İş nesneleri, veritabanı bağlantılarını sağlar. Örneğin, form kısmına departman eklemek için aşağıdaki adımları izlenir:</p><ul><li>Bağlantılar kısmında <strong>DefaultDatabase</strong> oluşturulmuştur.</li></ul><p><img src="/TimyaBPM-Documents/bağlantıı1.png" alt="Şekil 2"></p><h2 id="departman-ekleme" tabindex="-1"><a class="header-anchor" href="#departman-ekleme"><span>Departman Ekleme</span></a></h2><ol><li><strong>Admin Menü Kısmı:</strong><ul><li>Admin menü kısmından <strong>Ayarlar</strong> bölümüne gidilir.</li><li>Ardından, <strong>Departman</strong> kısmına gidilir.</li><li><strong>Yeni</strong> butonuna basarak girilmesi gereken departmanlar eklenir.</li></ul></li></ol><p><img src="/TimyaBPM-Documents/iş1.png" alt="Şekil 2"></p><ol start="2"><li><p><strong>Kullanıcılar:</strong></p><ul><li>Atanılması istenilen kullanıcı bilgileri seçilir.</li></ul></li></ol><p><img src="/TimyaBPM-Documents/iş8.png" alt="Şekil 2"></p><ol start="3"><li><strong>Database Bağlantısı:</strong><ul><li>Form kısmına departman eklemek için veritabanında <strong>Departman</strong> tablosuna gidilir.</li><li>Aşağıdaki kodlar, database bağlantısını eklemek için iş nesnelerinde sorgu metni kısmına eklenir:<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="line"><span class="token keyword">SELECT</span> <span class="token keyword">TOP</span> <span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">[</span>DepartmentId<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span>DepartmentName<span class="token punctuation">]</span></span>\n<span class="line"><span class="token keyword">FROM</span> <span class="token punctuation">[</span>Departments<span class="token punctuation">]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><p><img src="/TimyaBPM-Documents/iş2.png" alt="Şekil 2"> 4. <strong>Form Kısmına Ekleme:</strong></p><ul><li>Form kısmın da <strong>Departman</strong> kısmı eklenir.</li><li>Seçenekler kısmı manuel değil, <strong>Data Source</strong> tıklanarak bilgiler veritabanından alınır.</li></ul><p><img src="/TimyaBPM-Documents/iş3.png" alt="Şekil 2"><img src="/TimyaBPM-Documents/iş4.png" alt="Şekil 2"></p>',13)],i={},t=(0,e(262).A)(i,[["render",function(n,a){return(0,s.uX)(),(0,s.CE)("div",null,l)}]]),r=JSON.parse('{"path":"/nesne.html","title":"İş Nesnesi Ekleme","lang":"tr","frontmatter":{},"headers":[{"level":2,"title":"Departman Ekleme","slug":"departman-ekleme","link":"#departman-ekleme","children":[]}],"git":{"updatedTime":1723539195000,"contributors":[{"name":"NURŞAH YILDIZ","email":"nursah.yildiz@timyabilisim.com.tr","commits":2}]},"filePathRelative":"nesne.md"}')}}]);