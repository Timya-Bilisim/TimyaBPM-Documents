<template><div><h1 id="surec-olusturma-adımları" tabindex="-1"><a class="header-anchor" href="#surec-olusturma-adımları"><span>Süreç Oluşturma Adımları</span></a></h1>
<h2 id="_1-1-surec-gelistirme" tabindex="-1"><a class="header-anchor" href="#_1-1-surec-gelistirme"><span>1.1. Süreç Geliştirme</span></a></h2>
<p>Yeni bir süreç geliştirmek için, süreç bölümünde artı işaretine tıklanır ve <strong>&quot;New Map&quot;</strong> seçeneği ile yeni bir süreç haritası oluşturulur. Süreç haritası üzerinde boş bir alana tıklandığında, süreç özelliklerinin değiştirileceği kısım sağ tarafta görünür.</p>
<p><strong>&quot;Process General&quot;</strong> kısmında <strong>Name</strong> alanına sürecin kullanıcılara gözükecek isim verilir. <strong>ID</strong> kısmı ise sistemde saklanacak olan isimdir. Bu alanda boşluk ve Türkçe karakterler kullanılmaz.</p>
<p><img src="/TimyaBPM-Documents/surecc1.png" alt="alt text"></p>
<p><strong>Properties</strong> kısmında, <strong>Accessing Roles</strong> bölümünde, sürece erişebilecek roller seçilir (roller ayrıca açıklanacaktır).</p>
<p><img src="/TimyaBPM-Documents/surecc2.png" alt="alt text"></p>
<p>Süreç numaralandırması yapmak için <strong>Properties</strong> bölümün <strong>Number Prefix</strong> kısmına aşağıdaki kod yazılır:</p>
<p><code v-pre>GLN-{yyyy} - {ID:000} {IDTABLE:GLOBALID}</code></p>
<ol>
<li>
<p><strong>Yıl Bilgisi:</strong> <code v-pre>GLN-{yyyy}</code></p>
</li>
<li>
<p><strong>Sıra Numarası:</strong> <code v-pre>{ID:000}</code></p>
<ul>
<li>Belgeye verilen sıra numarasını belirtir.</li>
</ul>
</li>
<li>
<p><strong>Tablo Numarası:</strong> <code v-pre>{IDTABLE:GLOBALID}</code></p>
<ul>
<li>Numaralandırmanın yapılacağı tabloyu gösterir. <code v-pre>GLOBALID</code> ifadesinin önüne tablo adı eklenir.  Aynı ve farklı tablolara göre numaralandırma farklı olacaktır:</li>
</ul>
</li>
</ol>
<h4 id="farklı-tablolara-gore-numaralandırma" tabindex="-1"><a class="header-anchor" href="#farklı-tablolara-gore-numaralandırma"><span>Farklı Tablolara Göre Numaralandırma</span></a></h4>
<ul>
<li>
<p><strong>Format:</strong> <code v-pre>GLN-{yyyy} - {ID:000} {IDTABLE:GELENGLOBALID}</code></p>
<ul>
<li>GLN-2024-001</li>
<li>GLN-2024-002</li>
<li>GLN-2024-003</li>
</ul>
</li>
<li>
<p><strong>Format:</strong> <code v-pre>GDN-{yyyy} - {ID:000} {IDTABLE:GIDENGLOBALID}</code></p>
<ul>
<li>GDN-2024-001</li>
<li>GDN-2024-002</li>
</ul>
</li>
</ul>
<h4 id="aynı-tablolara-gore-numaralandırma" tabindex="-1"><a class="header-anchor" href="#aynı-tablolara-gore-numaralandırma"><span>Aynı Tablolara Göre Numaralandırma</span></a></h4>
<ul>
<li>
<p><strong>Format:</strong> <code v-pre>GLN-{yyyy} - {ID:000} {IDTABLE:GLOBALID}</code></p>
<ul>
<li>GLN-2024-001</li>
<li>GLN-2024-003</li>
<li>GLN-2024-004</li>
</ul>
</li>
<li>
<p><strong>Format:</strong> <code v-pre>GDN-{yyyy} - {ID:000} {IDTABLE:GLOBALID}</code></p>
<ul>
<li>GDN-2024-002</li>
<li>GDN-2024-005</li>
</ul>
</li>
</ul>
<p><img src="/TimyaBPM-Documents/sıralama.png" alt="alt text"></p>
<h3 id="surec-aksiyonları" tabindex="-1"><a class="header-anchor" href="#surec-aksiyonları"><span>Süreç Aksiyonları</span></a></h3>
<h4 id="baslat" tabindex="-1"><a class="header-anchor" href="#baslat"><span>Başlat</span></a></h4>
<p>Süreç haritasındaki   yuvarlak şekiller süreç başlatma aksiyonlarını ifade eder işaretine tıklanır. <strong>Name</strong> kısmı kullanıcının süreci başlatmak için tıklayacağı butonun ismidir . <strong>ID</strong> kısmı ise sistemde saklanacak olan isimdir.<br>
<img src="/TimyaBPM-Documents/surecc3.png" alt="alt text"></p>
<p><strong>Properties</strong> kısmı aşağıdaki gibi doldurulur:</p>
<ul>
<li><strong>Available to Roles:</strong> Sürece başlatabilecek rolleri seçilir.</li>
<li><strong>To Do List:</strong> Süreç başladıktan iş atamasının ilk atanacağı rolü belirtir.Mouse ile <strong>Roller</strong> kısmından çekilip <strong>Seçilen Roller</strong> kısmına bıraklır.</li>
</ul>
<p><img src="/TimyaBPM-Documents/roller8.png" alt="alt text"></p>
<ul>
<li><strong>Form List:</strong> Süreç başlatıldığında kullanılacak formu seçilir.</li>
</ul>
<p><img src="/TimyaBPM-Documents/surecc4.png" alt="alt text"></p>
<h4 id="flow-ve-aksiyon" tabindex="-1"><a class="header-anchor" href="#flow-ve-aksiyon"><span>Flow ve Aksiyon</span></a></h4>
<p><strong>Başlat</strong> butonunun yanında çıkan kare işaretine tıklanır. <strong>Flow</strong> ve <strong>Aksiyon</strong> kısımları aşağıdaki gibi oluştulur.</p>
<p><img src="/TimyaBPM-Documents/surecg1.png" alt="Şekil 2"></p>
<p>Aksiyon event için <strong>Change Element</strong> seçilir.
<img src="/TimyaBPM-Documents/anahtar.png" alt="Şekil 2"></p>
<h4 id="sureci-sonlandırma" tabindex="-1"><a class="header-anchor" href="#sureci-sonlandırma"><span>Süreci Sonlandırma</span></a></h4>
<p>Süreci sonlandırmak için resimde gösterilen süreç sonlandrıma event'i  seçilir.</p>
<p><img src="/TimyaBPM-Documents/son1.png" alt="Şekil 2">
<img src="/TimyaBPM-Documents/son2.png" alt="Şekil 2"></p>
<h2 id="_1-2-sureci-yayınlama" tabindex="-1"><a class="header-anchor" href="#_1-2-sureci-yayınlama"><span>1.2. Süreci Yayınlama</span></a></h2>
<p>Süreci kullanıma almak için önce sureç yayınlanmalıdır. Bunun için &quot;Admin Menü &quot; <strong>Projeler</strong> seçeneğini tıklanır ve ilgili proje üzerinde <strong>Yayınla</strong> butonuna basılır. (Resim1)</p>
<p>Ardından <strong>İş Başlatma</strong> kısmına tıklanır ve <strong>Başlat</strong> seçeneğini kullanarak süreç başlatılır.(Resim2)</p>
<p><em>Resim 1: Süreç Yayınlama</em>
<img src="/TimyaBPM-Documents/surecc5.png" alt="Şekil 1"></p>
<p><em>Resim 2: Süreç Başlatma</em>
<img src="/TimyaBPM-Documents/surecc6.png" alt="Şekil 2"></p>
</div></template>


