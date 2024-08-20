"use strict";(self.webpackChunktimya=self.webpackChunktimya||[]).push([[346],{573:(n,e,a)=>{a.r(e),a.d(e,{comp:()=>r,data:()=>t});var l=a(641);const s=[(0,l.Fv)('<h1 id="listeler" tabindex="-1"><a class="header-anchor" href="#listeler"><span>Listeler</span></a></h1><blockquote><p>-<em>Tanımlanan iş nesnelerinin raporda görünmesini sağlamak için listeler oluşturulmalıdır.</em></p></blockquote><blockquote><p>-<em>Listelerin nasıl oluşturulduğu, örnek bir iş nesnesi üzerinden detaylıca açıklanmış ve aralarındaki bağlantılar gösterilmiştir.</em></p></blockquote><hr><h3 id="ornek-is-nesnesi" tabindex="-1"><a class="header-anchor" href="#ornek-is-nesnesi"><span>Örnek İş Nesnesi</span></a></h3><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="/TimyaBPM-Documents/rapor.png" alt="Şekil 2"></span></a></h2><p>İş nesnesinin verilerini listelemek için kullanılan SQL sorgusu örneği:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line">select ProcessId<span class="token punctuation">,</span> m.Title MapName<span class="token punctuation">,</span> ProcessName<span class="token punctuation">,</span> p.Title<span class="token punctuation">,</span> StageCaption<span class="token punctuation">,</span> CreatedTime<span class="token punctuation">,</span> UpdatedTime<span class="token punctuation">,</span> DoubleField1<span class="token punctuation">,</span> StringField1<span class="token punctuation">,</span> StringField2 </span>\n<span class="line">from Processes p </span>\n<span class="line">inner join Maps m on m.Name = p.MapName </span>\n<span class="line">where p.Deleted &lt;&gt; <span class="token number">1</span> and p.Archived = <span class="token number">1</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="listenin-tanımlanması" tabindex="-1"><a class="header-anchor" href="#listenin-tanımlanması"><span>Listenin Tanımlanması</span></a></h3><blockquote><p>-Listeler, sol kısımda yer alan <strong>Listeler</strong> bölümünden artı işaretine tıklanarak oluşturulur.</p></blockquote><blockquote><p>-<strong>CustomList</strong> kısmında aşağıdaki alanlar doldurulur:</p></blockquote><ul><li><strong>Adı:</strong> Listenin sistemde görünen ismidir.</li><li><strong>İş Nesnesi:</strong> Sistemde daha önce oluşturulmuş bir iş nesnesi seçilir.</li><li><strong>Rol:</strong> Bu alanda, raporu kimlerin görebileceği seçilir.</li><li><strong>Kaydet:</strong> Tüm alanlar doldurulduktan sonra Kaydet butonuna basılır.</li></ul><h2 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span><img src="/TimyaBPM-Documents/liste65.png" alt="Şekil 2"></span></a></h2><h3 id="kolonlar" tabindex="-1"><a class="header-anchor" href="#kolonlar"><span>Kolonlar</span></a></h3><p>Kaydetme işlemi sonrası, raporda gösterilecek sütunlar aşağıda listelenir. Bu sütunlar, iş nesnesinden alınan verilere dayalı olarak yapılandırılır. Sütunların eklenmesi veya çıkarılması için <strong>Ekle</strong> ve <strong>Çıkar</strong> butonları kullanılır.</p><h2 id="-2" tabindex="-1"><a class="header-anchor" href="#-2"><span><img src="/TimyaBPM-Documents/liste100.png" alt="Şekil 2"></span></a></h2><p>Doldurlması gereken alanlar.</p><ul><li><strong>ID:</strong> Her sütun için benzersiz bir kimlik numarası.</li><li><strong>Kolon Adı (Source Column Name):</strong> Verinin alındığı kaynağın kolon adını ifade eder.</li><li><strong>Kolon Görünen İsim:</strong> Tabloda bu kolonun kullanıcıya nasıl görüneceğini belirler.</li><li><strong>Kaynak Kolon Adı (Source Column):</strong> Verinin hangi kaynaktan alındığını gösterir.Kolon Adı ile aynıdır.</li><li><strong>Sıralı mı?:</strong> İlgili sütunun sıralanabilir olup olmadığını belirler. Evet/Hayır olarak işaretlenir.</li><li><strong>Tip (Type):</strong> Verinin tipini belirler.</li></ul><p>Yukarıda tanımlanan iş nesnesine göre oluşturulan <strong>Liste</strong>. (Bkz.Liste Örnek)</p><hr><h2 id="liste-ornek" tabindex="-1"><a class="header-anchor" href="#liste-ornek"><span><strong>Liste Örnek</strong><img src="/TimyaBPM-Documents/rapor2.png" alt="Şekil 2"></span></a></h2><hr><p>Rapor kısmında gözükmesi gereken bilgiler aşağıdaki gibidir.</p><h2 id="-3" tabindex="-1"><a class="header-anchor" href="#-3"><span><img src="/TimyaBPM-Documents/rapor3.png" alt="Şekil 2"></span></a></h2>',24)],i={},r=(0,a(262).A)(i,[["render",function(n,e){return(0,l.uX)(),(0,l.CE)("div",null,s)}]]),t=JSON.parse('{"path":"/listeler.html","title":"Listeler","lang":"tr","frontmatter":{},"headers":[{"level":3,"title":"Örnek İş Nesnesi","slug":"ornek-is-nesnesi","link":"#ornek-is-nesnesi","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[{"level":3,"title":"Listenin Tanımlanması","slug":"listenin-tanımlanması","link":"#listenin-tanımlanması","children":[]}]},{"level":2,"title":"","slug":"-1","link":"#-1","children":[{"level":3,"title":"Kolonlar","slug":"kolonlar","link":"#kolonlar","children":[]}]},{"level":2,"title":"","slug":"-2","link":"#-2","children":[]},{"level":2,"title":"Liste Örnek","slug":"liste-ornek","link":"#liste-ornek","children":[]},{"level":2,"title":"","slug":"-3","link":"#-3","children":[]}],"git":{"updatedTime":1724151479000,"contributors":[{"name":"NURŞAH YILDIZ","email":"nursah.yildiz@timyabilisim.com.tr","commits":2}]},"filePathRelative":"listeler.md"}')}}]);