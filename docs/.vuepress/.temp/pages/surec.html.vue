<template><div><h1 id="surec-olusturma-adımları" tabindex="-1"><a class="header-anchor" href="#surec-olusturma-adımları"><span>Süreç Oluşturma Adımları</span></a></h1>
<h2 id="_1-surec-gelistirme" tabindex="-1"><a class="header-anchor" href="#_1-surec-gelistirme"><span>1.Süreç Geliştirme</span></a></h2>
<ul>
<li><em>Yeni bir süreç geliştirmek için, süreç bölümünde artı işaretine tıklanır ve <strong>&quot;New Map&quot;</strong> seçeneği ile yeni bir süreç haritası oluşturulur. Süreç haritası üzerinde boş bir alana tıklandığında, süreç için eklenmesi gereken alanlar sağ tarafta görüntülenir.</em></li>
</ul>
<p>➜ <strong>&quot;Process General&quot;</strong> kısmında <strong>Name</strong> alanına sürecin kullanıcılara gözükecek ismi girilir. <strong>ID</strong> kısmı sistemde saklanacak olan isimdir. Boşluk ve Türkçe karakterler kullanılmaz.
<strong>Üç nokta</strong> kısmından kaydedilir.</p>
<p><img src="/TimyaBPM-Documents/surec1.png" alt="alt text"></p>
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
<h2 id="_2-surec-aksiyonları" tabindex="-1"><a class="header-anchor" href="#_2-surec-aksiyonları"><span>2.Süreç Aksiyonları</span></a></h2>
<p><em>Süreç aksiyonları, iş süreçlerinin adımlarını ve bu adımlar arasındaki ilişkileri görselleştiren temel bileşenlerdir. Bu adımları temsil etmek için çeşitli semboller kullanılır. Her sembol, iş sürecinin belirli bir aşamasını  ifade eder. Bu sembollerin kapsamlı açıklamaları ve kullanımları, aşağıdaki bölümlerde detaylı olarak ele alınmıştır.</em></p>
<h3 id="_2-1-start-event" tabindex="-1"><a class="header-anchor" href="#_2-1-start-event"><span>2.1. Start Event</span></a></h3>
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
<h3 id="_2-2-squence-flow" tabindex="-1"><a class="header-anchor" href="#_2-2-squence-flow"><span>2.2. Squence Flow</span></a></h3>
<ul>
<li><strong>Flow:</strong> Süreç adımları arasındaki akışı ve bağlantıları tanımlar. Ok sembolü ile temsil edilir. Flow aksiyonu eklendiğinde, kullanıcılar için bir buton oluşturulur.</li>
</ul>
<h3 id="_2-3-task" tabindex="-1"><a class="header-anchor" href="#_2-3-task"><span>2.3. Task</span></a></h3>
<ul>
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
<h3 id="_2-4-end-event" tabindex="-1"><a class="header-anchor" href="#_2-4-end-event"><span>2.4. End Event</span></a></h3>
<ul>
<li>Süreci sonlandırmak için  görselde gösterilen &quot;Süreç Sonlandırma&quot; aksiyonu  seçilir.</li>
</ul>
<p><img src="/TimyaBPM-Documents/son1.png" alt="alt text">
<img src="/TimyaBPM-Documents/son2.png" alt="alt text"></p>
<h3 id="_2-5-timer-event" tabindex="-1"><a class="header-anchor" href="#_2-5-timer-event"><span>2.5. Timer Event</span></a></h3>
<ul>
<li><strong>Boundary Event</strong>  <strong>Task</strong> üzerine sürükleyip bırakın. Daha sonra <strong>Change Type</strong> butonuna tıklayın ve <strong>Timer Boundary Event</strong> seçeneğini seçin.</li>
</ul>
<div style="display: flex; justify-content: space-around;">
  <img src="/TimyaBPM-Documents/timer.png" alt="Timer Event" width="400" style="margin-right: 20px;"/>
  <img src="/TimyaBPM-Documents/timer2.png" alt="Timer Boundary Event" width="400"/>
</div>
<ul>
<li>
<p><strong>Timer Boundary Event</strong>'ın üzerine tıklayın.Sağ taraftaki <strong>Timer</strong> bölümünde, <strong>Type</strong> olarak <strong>Cycle</strong>'ı seçin.<strong>Value</strong>  kısmında yapılan tanımlama, ISO 8601 yinelenen aralık formatı olarak belirtilen bir döngü olmalıdır .
Örneğin;</p>
<ul>
<li><strong><code v-pre>R5/PT10S</code></strong>: Her 10 saniyede bir, toplamda 5 kez tekrarlanır.</li>
<li><strong><code v-pre>R5/PT5M</code></strong>: Her 5 dakikada bir, toplamda 5 kez tekrarlanır.</li>
<li><strong><code v-pre>R10/PT1H</code></strong>: Her 1 saatte bir, toplamda 10 kez tekrarlanır.</li>
<li><strong><code v-pre>R/P2D</code></strong>: Her 2 günde bir tekrarlanır, süresizdir.</li>
</ul>
<p>👉 <strong>ISO 8601 hakkında daha fazla bilgi için:</strong> <a href="https://docs.camunda.org/manual/latest/reference/bpmn20/events/timer-events/#time-cycle" target="_blank" rel="noopener noreferrer">Camunda Timer Events - Time Cycle</a>sayfasını ziyaret edebilirsiniz.</p>
</li>
</ul>
<p><img src="/TimyaBPM-Documents/timer3.png" alt="alt text"></p>
<hr>
<h2 id="_3-sureci-yayınlama" tabindex="-1"><a class="header-anchor" href="#_3-sureci-yayınlama"><span>3. Süreci Yayınlama</span></a></h2>
<ul>
<li>Süreci kullanıma almak için ilk olarak süreç yayınlanmalıdır. Bunun için &quot;Admin Menü &quot; <strong>Projeler</strong> seçeneğini tıklanır ve ilgili proje üzerinde <strong>Yayınla</strong> butonuna basılır. (Bkz. Görsel 1)</li>
</ul>
<p>Ardından <strong>İş Başlatma</strong> kısmına tıklanır ve <strong>Başlat</strong> seçeneğini kullanarak süreç başlatılır.(Bkz. Görsel 2)</p>
<p><em>Görsel 1: Süreç Yayınlama</em>
<img src="/TimyaBPM-Documents/surecc5.png" alt="alt text"></p>
<p><em>Görsel 2: Süreç Başlatma</em>
<img src="/TimyaBPM-Documents/surecc6.png" alt="alt text"></p>
</div></template>


