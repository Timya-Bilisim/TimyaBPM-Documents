<template><div><h1 id="roller-yonetimi-ve-yapılandırılması" tabindex="-1"><a class="header-anchor" href="#roller-yonetimi-ve-yapılandırılması"><span>Roller Yönetimi ve Yapılandırılması</span></a></h1>
<p><em>Roller, iki ana kategoriye ayrılır: <strong>Dinamik</strong> ve <strong>Statik</strong>. Her iki kategori için rollerin nasıl ekleneceği ve tanımlanacağı detaylı olarak açıklanmıştır:</em></p>
<h2 id="dinamik-roller" tabindex="-1"><a class="header-anchor" href="#dinamik-roller"><span>Dinamik Roller</span></a></h2>
<ul>
<li><em>Dinamik roller, süreçlere  bağlı olarak atanır. Bu atama, süreç içindeki  koşullara bağlı olarak değişir.</em></li>
</ul>
<p>➜ <em>Dinamik roller <strong>Roller</strong> bölümünden eklenir. Aşağıdaki alanların doldurulması gerekmektedir:</em></p>
<ul>
<li><strong>Adı</strong>: Rolün sistemde gözüken adıdır.</li>
<li><strong>ID</strong>: Sistem tarafından otomatik olarak atanır.</li>
<li><strong>Harita</strong>: Bu alanda, veri tanımlarına uygun bir kod yapısı yazılır. Yani, rolün hangi koşullara göre ve kime atanacağını belirleyen dinamik bir formül tanımlanır. (Bkz. Görsel 2)</li>
</ul>
<p><strong>Görsel 2</strong></p>
<p><strong>Örnek</strong>:
<img src="/TimyaBPM-Documents/roller1.png" alt="alt text"></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line">object ilgiliKisi = getVal(<span class="token string">"GelenEvrak"</span><span class="token punctuation">,</span> <span class="token string">"IlgiliKisi"</span>);</span>
<span class="line">if (ilgiliKisi == <span class="token null keyword">null</span>)</span>
<span class="line">    return System.Convert.ToInt32(ilgiliKisi);</span>
<span class="line">else</span>
<span class="line">    return <span class="token number">1</span>;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>■ Formülde, &quot;GelenEvrak&quot; tablosundan alınan &quot;İlgiliKisi&quot; bilgisi kullanılarak dinamik bir atama yapılır. Eğer &quot;İlgiliKisi&quot; bilgisi mevcut değilse, varsayılan olarak 1 değeri döndürülür. Bu değer, admin kullanıcısını temsil eder. Aksi takdirde, &quot;İlgiliKisi&quot; değeri döndürülür.</p>
<p>Görsel 3'te,  &quot;ilgiliKisi&quot; rolünün nasıl seçildiği gösterilmiştir.</p>
<p><strong>Görsel3</strong>
<img src="/TimyaBPM-Documents/roller3.png" alt="alt text"></p>
<h2 id="statik-roller" tabindex="-1"><a class="header-anchor" href="#statik-roller"><span>Statik Roller</span></a></h2>
<ul>
<li><em>Statik roller, belirli  görevler için sabit olarak atanmış rollerdir.</em></li>
</ul>
<p>Statik roller, <strong>Admin menüsü</strong> üzerinden <strong>Ayarlar</strong> kısmından seçilerek tanımlanır. Yeni bir rol eklemek için şu adımlar izlenir:</p>
<ol>
<li><strong>Yeni Rol Ekle</strong> butonuna tıklanır.</li>
<li>Rolün sistemde gözükecek <strong>Adı</strong> girilir.</li>
<li><strong>ID</strong> kısmı sistem tarafından otomatik olarak atanır.</li>
<li><strong>Kaydet</strong> butonuna basılır.</li>
</ol>
<p><img src="/TimyaBPM-Documents/sr1.png" alt="alt text">
<img src="/TimyaBPM-Documents/sr2.png" alt="alt text"></p>
<ul>
<li>Statik roller, <strong>Kullanıcılar</strong> bölümünde listelenir. Herhangi bir role tıkladığında, seçilen  rol için gerekli tanımlamalar yapılır.</li>
</ul>
<p><img src="/TimyaBPM-Documents/sr6.png" alt="alt text">
<img src="/TimyaBPM-Documents/sr7.png" alt="alt text"></p>
</div></template>


