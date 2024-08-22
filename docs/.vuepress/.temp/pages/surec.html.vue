<template><div><h1 id="surec-olusturma-adımları" tabindex="-1"><a class="header-anchor" href="#surec-olusturma-adımları"><span>Süreç Oluşturma Adımları</span></a></h1>
<h2 id="_1-1-surec-gelistirme" tabindex="-1"><a class="header-anchor" href="#_1-1-surec-gelistirme"><span>1.1. Süreç Geliştirme</span></a></h2>
<ul>
<li><em>Yeni bir süreç geliştirmek için, süreç bölümünde artı işaretine tıklanır ve <strong>&quot;New Map&quot;</strong> seçeneği ile yeni bir süreç haritası oluşturulur. Süreç haritası üzerinde boş bir alana tıklandığında, süreç için eklenmesi gereken alanlar sağ tarafta görüntülenir.</em></li>
</ul>
<p>➜ <strong>&quot;Process General&quot;</strong> kısmında <strong>Name</strong> alanına sürecin kullanıcılara gözükecek ismi girilir. <strong>ID</strong> kısmı sistemde saklanacak olan isimdir. Boşluk ve Türkçe karakterler kullanılmaz.</p>
<p><img src="/TimyaBPM-Documents/surecc1.png" alt="alt text"></p>
<p>➜ <strong>Properties</strong> kısmında, <strong>Accessing Roles</strong> bölümünde, sürece erişebilecek roller seçilir (roller ayrıca açıklanacaktır).</p>
<p><img src="/TimyaBPM-Documents/surecc2.png" alt="alt text"></p>
<hr>
<p>➜ <strong>Properties</strong> kısmında, <strong>Number Prefix</strong> bölümünde,  belge numaralandırması yapılır .
Örnek belge numaralandırmaları aşağıdaki gibi olabilir:</p>
<p><code v-pre>GLN-{yyyy}-{ID:000}{IDTABLE:GLOBALID}</code></p>
<p><strong>GLN:</strong></p>
<ul>
<li>Gelen Evrak belgesinin adıdır.</li>
</ul>
<p><strong>{yyyy}:</strong></p>
<ul>
<li>Belgenin yılını belirtir.</li>
</ul>
<p><strong>{ID:000}:</strong></p>
<ul>
<li>Belgeye verilen sıra numarasını belirtir. Basamak sayısı kadar sıfır eklenir.</li>
</ul>
<p><strong>{IDTABLE:GLOBALID}:</strong></p>
<ul>
<li>Sıralı numara verecek olan database tablosunu belirtir.</li>
</ul>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="/TimyaBPM-Documents/sıralama.png" alt="alt text"></span></a></h2>
<hr>
<h3 id="surec-aksiyonları" tabindex="-1"><a class="header-anchor" href="#surec-aksiyonları"><span>Süreç Aksiyonları</span></a></h3>
<p><em>Süreç aksiyonları, iş süreçlerinin adımlarını ve bu adımlar arasındaki ilişkileri görselleştiren temel bileşenlerdir. Bu adımları temsil etmek için çeşitli semboller kullanılır. Her sembol, iş sürecinin belirli bir aşamasını  ifade eder. Bu sembollerin kapsamlı açıklamaları ve kullanımları, aşağıdaki bölümlerde detaylı olarak ele alınmıştır.</em></p>
<h4 id="baslat-aksiyonu" tabindex="-1"><a class="header-anchor" href="#baslat-aksiyonu"><span>Başlat Aksiyonu</span></a></h4>
<ul>
<li>
<p>Yuvarlak (çember) sembollerle gösterilir.Süreç haritasındaki yuvarlak şekiller, süreç başlatma aksiyonlarını ifade eder. Bu aksiyona tıklanarak sağ tarafta görüntülenecek alanlar aşağıda belirtildiği şekilde tanımlanmalıdır.</p>
</li>
<li>
<p><strong>Name:</strong> Kullanıcının süreci başlatmak için tıklaması gereken butonun adıdır.
.</p>
</li>
<li>
<p><strong>ID:</strong> Sistemde saklanacak olan isimdir.Boşluk ve Türkçe karakterler kullanılmaz.</p>
</li>
</ul>
<p><img src="/TimyaBPM-Documents/surecc3.png" alt="alt text"></p>
<p>➜ <strong>Properties</strong> bölümü aşağıdaki şekilde tanımlanır:</p>
<ul>
<li><strong>Available to Roles:</strong> Süreci başlatabilecek roller seçilir.</li>
<li><strong>To Do List:</strong> Süreç başladıktan sonra iş atamasının ilk yapılacağı rolü belirtir.Mouse ile <strong>Roller</strong> kısmından sürüklenip <strong>Seçilen Roller</strong> kısmına bırakılarak atanır.</li>
</ul>
<p><img src="/TimyaBPM-Documents/roller8.png" alt="alt text"></p>
<ul>
<li><strong>Form List:</strong> Süreç başlatıldığında kullanılacak form seçilir.</li>
</ul>
<p><img src="/TimyaBPM-Documents/surecc4.png" alt="alt text"></p>
<h4 id="flow-ve-task-aksiyonu" tabindex="-1"><a class="header-anchor" href="#flow-ve-task-aksiyonu"><span>Flow ve Task Aksiyonu</span></a></h4>
<ul>
<li>
<p><strong>Flow:</strong> Süreç adımları arasındaki akışı ve bağlantıları tanımlar. Ok sembolü ile temsil edilir. Flow aksiyonu eklendiğinde, kullanıcılar için bir buton oluşturulur. Örneğin, &quot;start&quot; ve &quot;user task&quot; adımlarından sonra tanımlanan flow'lar, kullanıcıların tıklayabileceği bir buton ile gösterilen aksiyonları ifade eder.</p>
</li>
<li>
<p><strong>Task:</strong> Belirli bir adımda gerçekleştirilecek işlemleri veya görevleri tanımlar.Kare
sembolü ile temsil edilir.</p>
</li>
<li>
<p><strong>Başlat</strong> butonunun yanındaki kare işaretine tıklanır. <strong>Flow</strong> ve <strong>Task</strong> kısımları aşağıdaki gibi oluşturulur.</p>
</li>
</ul>
<p><img src="/TimyaBPM-Documents/surecg1.png" alt="alt text"></p>
<p>Task aksiyonu için anahtar işaretine tıklanarak <strong>Change Element</strong> seçilir. Bu seçenek, sürecin ihtiyaçlarına uygun görevlerin  belirlenmesini sağlar ve sürecin gereksinimlerine göre yapılandırılır. Örneğin:</p>
<ul>
<li><strong>User Task:</strong> Kullanıcının   tamamlaması gereken görevleri ifade eder.</li>
<li><strong>Service Task:</strong> Dökuman oluşturma ve DLL kütüphanelerini çalıştırmasını sağlar.</li>
</ul>
<p><img src="/TimyaBPM-Documents/anahtar.png" alt="alt text"></p>
<h4 id="sureci-sonlandırma-aksiyonu" tabindex="-1"><a class="header-anchor" href="#sureci-sonlandırma-aksiyonu"><span>Süreci Sonlandırma Aksiyonu</span></a></h4>
<ul>
<li>Süreci sonlandırmak için  görselde gösterilen &quot;Süreç Sonlandırma&quot; aksiyonu  seçilir.</li>
</ul>
<p><img src="/TimyaBPM-Documents/son1.png" alt="alt text">
<img src="/TimyaBPM-Documents/son2.png" alt="alt text"></p>
<hr>
<h2 id="_1-2-sureci-yayınlama" tabindex="-1"><a class="header-anchor" href="#_1-2-sureci-yayınlama"><span>1.2. Süreci Yayınlama</span></a></h2>
<ul>
<li>Süreci kullanıma almak için ilk olarak süreç yayınlanmalıdır. Bunun için &quot;Admin Menü &quot; <strong>Projeler</strong> seçeneğini tıklanır ve ilgili proje üzerinde <strong>Yayınla</strong> butonuna basılır. (Bkz. Görsel 1)</li>
</ul>
<p>Ardından <strong>İş Başlatma</strong> kısmına tıklanır ve <strong>Başlat</strong> seçeneğini kullanarak süreç başlatılır.(Bkz. Görsel 2)</p>
<p><em>Görsel 1: Süreç Yayınlama</em>
<img src="/TimyaBPM-Documents/surecc5.png" alt="alt text"></p>
<p><em>Görsel 2: Süreç Başlatma</em>
<img src="/TimyaBPM-Documents/surecc6.png" alt="alt text"></p>
</div></template>


