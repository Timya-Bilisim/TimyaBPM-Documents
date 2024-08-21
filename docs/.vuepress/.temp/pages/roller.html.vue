<template><div><h1 id="roller-yonetimi-ve-yapılandırılması" tabindex="-1"><a class="header-anchor" href="#roller-yonetimi-ve-yapılandırılması"><span>Roller Yönetimi ve Yapılandırılması</span></a></h1>
<p>Roller, iki ana kategoriye ayrılır: <strong>Dinamik</strong> ve <strong>Statik</strong>. Her iki kategori için rollerin nasıl ekleneceği ve tanımlanacağı detaylı olarak açıklanmıştır:</p>
<h2 id="dinamik-roller" tabindex="-1"><a class="header-anchor" href="#dinamik-roller"><span>Dinamik Roller</span></a></h2>
<blockquote>
<ul>
<li>Dinamik roller, süreçlere  bağlı olarak atanır. Bu atama, süreç içindeki  koşullara bağlı olarak değişir.</li>
</ul>
</blockquote>
<p>➜ <em>Veri tanımlarında dinamik olarak atanacak rol için gerekli olan bilginin nerede tutulacağını belirlenmesi gerekmektedir.Bu,rolün dinamik olarak atanmasını sağlar.Örneğin, Görsel 1'de &quot;ilgiliKisi&quot; adlı veri tanımı gösterilmiştir.</em></p>
<p><strong>Görsel1</strong>
<img src="/TimyaBPM-Documents/roller2.png" alt="alt text"></p>
<p>Veri tanımı yapıldıktan sonra, dinamik rolün tanımlanması gerekir.</p>
<p>➜ <em>Dinamik roller <strong>Roller</strong> bölümünden eklenir. Aşağıdaki alanların doldurulması gerekmektedir:</em></p>
<ul>
<li><strong>Adı</strong>: Rolün sistemde gözüken adıdır.</li>
<li><strong>ID</strong>: Sistem tarafından otomatik olarak atanır.</li>
<li><strong>Harita</strong>: Bu alanda, veri tanımlarına uygun bir kod yapısı yazılır. Yani, rolün hangi koşullara göre ve kime atanacağını belirleyen dinamik bir formül tanımlanır. (Bkz. Görsel 2)</li>
</ul>
<p><strong>Görsel 2</strong>
<img src="/TimyaBPM-Documents/roller1.png" alt="alt text"></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line">object ilgiliKisi = getVal(<span class="token string">"GelenEvrak"</span><span class="token punctuation">,</span> <span class="token string">"IlgiliKisi"</span>);</span>
<span class="line">if (ilgiliKisi == <span class="token null keyword">null</span>)</span>
<span class="line">    return System.Convert.ToInt32(ilgiliKisi);</span>
<span class="line">else</span>
<span class="line">    return <span class="token number">1</span>;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>■ Formülde, &quot;GelenEvrak&quot; tablosundan &quot;İlgiliKisi&quot; bilgisi alınarak dinamik bir atama yapılır. Eğer &quot;İlgiliKisi&quot; bilgisi mevcut değilse, varsayılan olarak 1 değeri döndürülür. Aksi takdirde, &quot;İlgiliKisi&quot; değeri döndürülür.</p>
<p>➜ <em>Tanımlanan rol, iş sürecinde belirli adımlarda otomatik olarak atanır.</em></p>
<p>Görsel 3'te, &quot;gelenEvrakSureci&quot; adlı bir süreçte &quot;ilgiliKisi&quot; rolü seçilmiştir. Bu, dinamik olarak tanımlanan &quot;ilgiliKisi&quot; rolünün, sürecin belirli bir adımında otomatik olarak atanmasını sağlar.</p>
<p><strong>Görsel3</strong>
<img src="/TimyaBPM-Documents/roller3.png" alt="alt text"></p>
<h2 id="statik-roller" tabindex="-1"><a class="header-anchor" href="#statik-roller"><span>Statik Roller</span></a></h2>
<blockquote>
<ul>
<li>Statik roller, belirli  görevler için sabit olarak atanmış rollerdir.</li>
</ul>
</blockquote>
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


