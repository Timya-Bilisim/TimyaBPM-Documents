"use strict";(self.webpackChunktimya=self.webpackChunktimya||[]).push([[400],{812:(e,a,r)=>{r.r(a),r.d(a,{comp:()=>s,data:()=>t});var i=r(641);const l=[(0,i.Fv)('<h1 id="surec-olusturma-adımları" tabindex="-1"><a class="header-anchor" href="#surec-olusturma-adımları"><span>Süreç Oluşturma Adımları</span></a></h1><h2 id="_1-1-surec-olusturma" tabindex="-1"><a class="header-anchor" href="#_1-1-surec-olusturma"><span>1.1. Süreç Oluşturma</span></a></h2><p>Yeni bir süreç oluşturmak için, süreç bölümünde artı işaretine tıklanır ve &quot;New Map&quot; seçeneği ile yeni bir süreç başlatılır. İlk olarak, &quot;Process General&quot; kısmında <strong>Name</strong> alanına sürece bir isim verilir. <strong>ID</strong> kısmı ise sistemde saklanacak olan isimdir. <img src="/TimyaBPM-Documents/surecc1.png" alt="alt text"></p><p>Süreç numaralandırması yapmak için <strong>Properties</strong> bölümüne gidilir ve <strong>Number Prefix</strong> kısmına aşağıdaki kodu yazılır:</p><p><code>GLN-{yyyy} - {ID:000} {IDTABLE:GLOBALID}</code></p><p><strong>Properties</strong> kısmında <strong>Accessing Roles</strong> seçimini yaparak sürece kimlerin erişebileceği belirlenir.</p><p><img src="/TimyaBPM-Documents/surecc2.png" alt="alt text"></p><h2 id="_1-2-sureci-baslatma" tabindex="-1"><a class="header-anchor" href="#_1-2-sureci-baslatma"><span>1.2. Süreci Başlatma</span></a></h2><p>Süreci başlatmak için sistemdeki yuvarlak (süreci başlatma ) işaretine tıklanır. <strong>Name</strong> ve <strong>ID</strong> alanlarına süreç için uygun isimleri girilir. Daha sonra <strong>Properties</strong> kısmını aşağıdaki gibi doldurulur:</p><p><img src="/TimyaBPM-Documents/surecc3.png" alt="alt text"></p><ul><li><strong>Available to Roles:</strong> Sürece erişebilecek rolleri seçilir.</li><li><strong>To Do List:</strong> Süreci başlatacak ve yönetecek kişiyi seçilir.</li><li><strong>Form List:</strong> Süreç başlatıldığında kullanılacak formu seçilir.</li></ul><p><img src="/TimyaBPM-Documents/surecc4.png" alt="alt text"></p><h2 id="_1-3-sureci-yayınlama" tabindex="-1"><a class="header-anchor" href="#_1-3-sureci-yayınlama"><span>1.3. Süreci Yayınlama</span></a></h2><p>Süreci kullanıma almak için önce sureç yayınlanmalıdır. Bunun için &quot;Admin Menü &quot; <strong>Projeler</strong> seçeneğini tıklanır ve ilgili proje üzerinde <strong>Yayınla</strong> butonuna basılır. (Resim1)</p><p>Ardından &quot;İş Başlatma&quot; kısmına tıklanır ve <strong>Başlat</strong> seçeneğini kullanarak süreç başlatılır.(Resim2)</p><p><em>Resim 1: Süreç Yayınlama</em><img src="/TimyaBPM-Documents/surecc5.png" alt="Şekil 1"></p><p><em>Resim 2: Süreç Başlatma</em><img src="/TimyaBPM-Documents/surecc6.png" alt="Şekil 2"></p><h2 id="_1-4-sureci-gelistirme" tabindex="-1"><a class="header-anchor" href="#_1-4-sureci-gelistirme"><span>1.4. Süreci Geliştirme</span></a></h2><p>Süreç kısmında, &quot;Başlat&quot; butonunun yanında çıkan kare işaretine tıklanır. Gelen ekranda çıkan her şekle tıklanarak gerekli isimler girilir.</p><p><img src="/TimyaBPM-Documents/surecg1.png" alt="Şekil 2"></p><p>Daha sonra eklenen kısmı sisteme eklenir. Bunun için &quot;Anahtar&quot; seçilerek kullanıcı tanımlanır. <img src="/TimyaBPM-Documents/surec2.png" alt="Şekil 2"></p><h3 id="roller" tabindex="-1"><a class="header-anchor" href="#roller"><span>Roller</span></a></h3><p>&quot;To-Do List&quot; kısmında roller eklenmelidir . Bunun için &quot;Roller&quot; kısmından yeni dinamik roller eklenir. ID, alan ve harita kısmı doldurulur. Harita kısmında, veri tanımlarında kaydedilen bilgilere göre aşağıdaki gibi yazılır.</p><p><img src="/TimyaBPM-Documents/roller1.png" alt="Şekil 2"><img src="/TimyaBPM-Documents/roller2.png" alt="Şekil 2"></p><p>Daha sonra süreç kısmındaki &quot;To-Do List&quot; bölümünde, roller kısmında tanımlanan kısım seçilir ve &quot;Form List&quot; kısmından oluşturulan form seçilir.</p><p><img src="/TimyaBPM-Documents/roller3.png" alt="Şekil 2"></p><h3 id="sureci-sonlandırma" tabindex="-1"><a class="header-anchor" href="#sureci-sonlandırma"><span>Süreci Sonlandırma</span></a></h3><p>Süreç işlemini sonlandırmak için tekrar işaret üzerine tıklanır ve resimde gösterilen imge seçilerek isimler girilir, gerekli alanlar doldurulur.</p><p><img src="/TimyaBPM-Documents/son1.png" alt="Şekil 2"><img src="/TimyaBPM-Documents/son2.png" alt="Şekil 2"></p><h3 id="raporlar-ve-listeler" tabindex="-1"><a class="header-anchor" href="#raporlar-ve-listeler"><span>Raporlar ve Listeler</span></a></h3><p>İş başlat kısmında &quot;Sonlandır&quot; butonu çıkar. İşi sonlandırdığımızda rapor etmemiz gerekir. Bunun için iş nesnelerinde &quot;Biten İşler&quot; adında bir nesne açılır.</p><p><img src="/TimyaBPM-Documents/son3.png" alt="Şekil 2"><img src="/TimyaBPM-Documents/rapor.png" alt="Şekil 2"></p><p>Daha sonra &quot;Listeler&quot; kısmından rapor oluşturulur. Bilgiler aşağıdaki resimde gösterildiği gibi girilmelidir.</p><p><img src="/TimyaBPM-Documents/rapor2.png" alt="Şekil 2"></p><p>Rapor kısmında gözükmesi gereken bilgiler aşağıdaki gibidir.</p><p><img src="/TimyaBPM-Documents/rapor3.png" alt="Şekil 2"></p>',36)],n={},s=(0,r(262).A)(n,[["render",function(e,a){return(0,i.uX)(),(0,i.CE)("div",null,l)}]]),t=JSON.parse('{"path":"/surec.html","title":"Süreç Oluşturma Adımları","lang":"tr","frontmatter":{},"headers":[{"level":2,"title":"1.1. Süreç Oluşturma","slug":"_1-1-surec-olusturma","link":"#_1-1-surec-olusturma","children":[]},{"level":2,"title":"1.2. Süreci Başlatma","slug":"_1-2-sureci-baslatma","link":"#_1-2-sureci-baslatma","children":[]},{"level":2,"title":"1.3. Süreci Yayınlama","slug":"_1-3-sureci-yayınlama","link":"#_1-3-sureci-yayınlama","children":[]},{"level":2,"title":"1.4. Süreci Geliştirme","slug":"_1-4-sureci-gelistirme","link":"#_1-4-sureci-gelistirme","children":[{"level":3,"title":"Roller","slug":"roller","link":"#roller","children":[]},{"level":3,"title":"Süreci Sonlandırma","slug":"sureci-sonlandırma","link":"#sureci-sonlandırma","children":[]},{"level":3,"title":"Raporlar ve Listeler","slug":"raporlar-ve-listeler","link":"#raporlar-ve-listeler","children":[]}]}],"git":{"updatedTime":1723467718000,"contributors":[{"name":"NURŞAH YILDIZ","email":"nursah.yildiz@timyabilisim.com.tr","commits":2}]},"filePathRelative":"surec.md"}')}}]);