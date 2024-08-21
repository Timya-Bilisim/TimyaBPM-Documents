<template><div><h1 id="is-nesnesi-ekleme" tabindex="-1"><a class="header-anchor" href="#is-nesnesi-ekleme"><span>İş Nesnesi Ekleme</span></a></h1>
<blockquote>
<ul>
<li>İş nesnelerinde bağlantı bilgileri saklanır. Bu bağlantıların nasıl tanımlanacağı ve iş nesnelerinin özellikleri, aşağıda belirtilen ilgili bölümlerde açıklanmıştır. Yeni bir iş nesnesi oluşturmak için, iş nesnesi bölümünden artı işaretine tıklanır.</li>
</ul>
</blockquote>
<h3 id="is-nesnesi-ozellikleri" tabindex="-1"><a class="header-anchor" href="#is-nesnesi-ozellikleri"><span>İş Nesnesi Özellikleri</span></a></h3>
<ul>
<li><strong>ID</strong>: Bu alan, iş nesnesinin benzersiz kimlik numarasını gösterir. Sistemde iş nesnesini tanımlamak için kullanılır.</li>
<li><strong>Adı</strong>: İş nesnesinin adını belirtir.Türkçe karakterler kullanılmaz.</li>
<li><strong>Tipi</strong>: İş nesnesinin türünü belirler. İş nesneleri üç türden biri olabilir:
<ul>
<li><strong>Query</strong></li>
<li><strong>Table</strong></li>
<li><strong>Scripted</strong></li>
</ul>
</li>
<li><strong>Bağlantılar</strong>: Bağlantılarda tanımlanan alanları gösterir.</li>
<li><strong>Sorgu Metni</strong>:Bu alan, ilgili iş nesnesinin veritabanından veri çekecek sorgusunu içerir.  SQL sorgusu: (Bkz. Görsel 1)</li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line">select userId<span class="token punctuation">,</span> FullName from Users where DepartmentId=@pDepartmentId</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>■ Bu sorgu, Users tablosundan belirtilen DepartmentId'ye sahip kullanıcıların userId ve FullName bilgilerini getirecek.</p>
<p><strong>Görsel 1</strong>
<img src="/TimyaBPM-Documents/nesne43.png" alt="IIS Kurulumu"></p>
<h3 id="parametreler" tabindex="-1"><a class="header-anchor" href="#parametreler"><span>Parametreler</span></a></h3>
<p>SQL sorgusu parametrik olarak çalışacaksa, <code v-pre>@</code> işareti ile parametreler eklenir. Daha sonra, parametreler bölümünde bu parametreler tanımlanır.Bu işlem,  ekleme ve çıkarma işlemleriyle gerçekleştirilir.</p>
<ul>
<li><strong>Key:</strong> Sorgu metninde kullanılan parametrenin adı ile aynı olmalıdır.</li>
<li><strong>Type:</strong> Parametrenin veri tipi belirlenir.</li>
</ul>
<p><img src="/TimyaBPM-Documents/nesne42.png" alt="IIS Kurulumu"></p>
<h3 id="columns" tabindex="-1"><a class="header-anchor" href="#columns"><span>Columns</span></a></h3>
<p>Sorgunun hangi sütunları seçeceğini ve nasıl görüntüleneceğini belirler.Bu işlem,  ekleme ve çıkarma işlemleriyle gerçekleştirilir.</p>
<ul>
<li><strong>Key:</strong> Veritabanındaki sütun adı.</li>
<li><strong>Type:</strong> Sütunun veri tipini belirtir .</li>
<li><strong>Title:</strong> Kullanıcıya görünen sütun başlığı.</li>
<li><strong>Values:</strong> Sütunların işlevselliğini  ve kullanım durumlarını tanımlar.</li>
</ul>
<p><strong>Values</strong> seçenekleri:</p>
<ol>
<li>
<p><strong>null:</strong> Sütunun boş (null) değer almasını ifade eder.</p>
</li>
<li>
<p><strong>IsValue:</strong> Sütunun veritabanına yazılacak değerini belirtir.</p>
</li>
<li>
<p><strong>IsName:</strong> Sütunun <strong>başlık</strong> olarak görünmesini sağlar.</p>
</li>
</ol>
<p><img src="/TimyaBPM-Documents/nesne41.png" alt="IIS Kurulumu"></p>
</div></template>


