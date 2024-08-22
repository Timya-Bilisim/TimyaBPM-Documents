<template><div><h1 id="listeler" tabindex="-1"><a class="header-anchor" href="#listeler"><span>Listeler</span></a></h1>
<ul>
<li>
<p><em>Tanımlanan iş nesnelerinin raporda görünmesini sağlamak için listeler oluşturulmalıdır.</em></p>
</li>
<li>
<p><em>Listelerin nasıl oluşturulduğu, örnek bir iş nesnesi üzerinden detaylıca açıklanmış ve aralarındaki bağlantılar gösterilmiştir.</em></p>
</li>
</ul>
<h3 id="ornek-is-nesnesi" tabindex="-1"><a class="header-anchor" href="#ornek-is-nesnesi"><span>Örnek İş Nesnesi</span></a></h3>
<p><img src="/TimyaBPM-Documents/rapor.png" alt="Şekil 2"></p>
<p>İş nesnesinin verilerini listelemek için kullanılan SQL sorgusu örneği:</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line">select ProcessId<span class="token punctuation">,</span> m.Title MapName<span class="token punctuation">,</span> ProcessName<span class="token punctuation">,</span> p.Title<span class="token punctuation">,</span> StageCaption<span class="token punctuation">,</span> CreatedTime<span class="token punctuation">,</span> UpdatedTime<span class="token punctuation">,</span> DoubleField1<span class="token punctuation">,</span> StringField1<span class="token punctuation">,</span> StringField2 </span>
<span class="line">from Processes p </span>
<span class="line">inner join Maps m on m.Name = p.MapName </span>
<span class="line">where p.Deleted &lt;> <span class="token number">1</span> and p.Archived = <span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="listenin-tanımlanması" tabindex="-1"><a class="header-anchor" href="#listenin-tanımlanması"><span>Listenin Tanımlanması</span></a></h3>
<ul>
<li>
<p>Listeler, sol kısımda yer alan <strong>Listeler</strong> bölümünden artı işaretine tıklanarak oluşturulur.</p>
</li>
<li>
<p><strong>CustomList</strong> kısmında aşağıdaki alanlar doldurulur:</p>
</li>
<li>
<p><strong>Adı:</strong> Listenin sistemde görünen ismidir.</p>
</li>
<li>
<p><strong>İş Nesnesi:</strong> Sistemde daha önce oluşturulmuş bir iş nesnesi seçilir.</p>
</li>
<li>
<p><strong>Rol:</strong> Bu alanda, raporu kimlerin görebileceği seçilir.</p>
</li>
<li>
<p><strong>Kaydet:</strong> Tüm alanlar doldurulduktan sonra Kaydet butonuna basılır.</p>
</li>
</ul>
<p><img src="/TimyaBPM-Documents/liste65.png" alt="Şekil 2"></p>
<h3 id="kolonlar" tabindex="-1"><a class="header-anchor" href="#kolonlar"><span>Kolonlar</span></a></h3>
<ul>
<li><em>Kaydetme işlemi sonrası, raporda gösterilecek sütunlar aşağıda listelenir. Bu sütunlar, iş nesnesinden alınan verilere dayalı olarak yapılandırılır. Sütunların eklenmesi veya çıkarılması için <strong>Ekle</strong> ve <strong>Çıkar</strong> butonları kullanılır.</em></li>
</ul>
<p><img src="/TimyaBPM-Documents/liste100.png" alt="Şekil 2"></p>
<p>Doldurlması gereken alanlar:</p>
<ul>
<li><strong>ID :</strong> Her sütun için benzersiz bir kimlik numarası.</li>
<li><strong>Squence :</strong> Belirtilen kolonun raporda hangi sırada gözükeceğini belirtir.</li>
<li><strong>Kolon Adı :</strong> Verinin alındığı kaynağın kolon adını ifade eder.</li>
<li><strong>Kolon Görünen İsim :</strong> Tabloda kolonun kullanıcıya nasıl görüneceği belirlenir.</li>
<li><strong>Kaynak Kolon Adı :</strong> Verinin hangi kaynaktan alındığını gösterir.Kolon Adı ile aynı olmalır.</li>
<li><strong>Süreç numarası mı ? :</strong> Süreç numarası ise evet değil ise hayır seçilir.</li>
<li><strong>Veri Tipi :</strong> Verinin tipini belirler.</li>
</ul>
<p>Yukarıda tanımlanan iş nesnesine göre oluşturulan <strong>Liste</strong>. (Bkz.Liste Örnek)</p>
<p><strong>Liste Örnek</strong>
<img src="/TimyaBPM-Documents/rapor2.png" alt="Şekil 2"></p>
<p>Rapor kısmında gözükmesi gereken bilgiler aşağıdaki gibidir.</p>
<p><img src="/TimyaBPM-Documents/rapor3.png" alt="Şekil 2"></p>
</div></template>


