<template><div><h1 id="roller-yonetimi-ve-yapılandırılması" tabindex="-1"><a class="header-anchor" href="#roller-yonetimi-ve-yapılandırılması"><span>Roller Yönetimi ve Yapılandırılması</span></a></h1>
<p>Roller, iki temel türde yönetilebilir ve yapılandırılabilir: <strong>dinamik</strong> ve <strong>statik</strong>. Aşağıda her iki tür rolün nasıl ekleneceği ve tanımlanacağına dair detaylı bilgiler bulunmaktadır.</p>
<h2 id="dinamik-roller" tabindex="-1"><a class="header-anchor" href="#dinamik-roller"><span>Dinamik Roller</span></a></h2>
<p>Dinamik roller <strong>Roller</strong> kısmından eklenir. Bu aşamada, aşağıdaki kısımlar doldurulmalıdır:</p>
<ul>
<li><strong>Adı</strong>: Rolün sistemde gözüken adıdır.</li>
<li><strong>Harita</strong>: Veri tanımlarına göre uygun kod yapısı yazılır.</li>
<li><strong>ID</strong>: Sistem tarafından otomatik olarak atanır.</li>
</ul>
<p><strong>Harita</strong> kısmında, veri tanımlarına göre aşağıdaki gibi kod yazılabilir:</p>
<p><img src="/TimyaBPM-Documents/roller1.png" alt="XX"></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line">object ilgiliKisi = getVal(<span class="token string">"GelenEvrak"</span><span class="token punctuation">,</span> <span class="token string">"IlgiliKisi"</span>);</span>
<span class="line">if (ilgiliKisi == <span class="token null keyword">null</span>)</span>
<span class="line">    return System.Convert.ToInt32(ilgiliKisi);</span>
<span class="line">else</span>
<span class="line">    return <span class="token number">1</span>;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="statik-roller" tabindex="-1"><a class="header-anchor" href="#statik-roller"><span>Statik Roller</span></a></h2>
<p>Statik roller, <strong>Admin menüsü</strong> üzerinden <strong>Ayarlar</strong> kısmından seçilerek tanımlanır. Yeni bir rol eklemek için şu adımlar izlenir:</p>
<ol>
<li><strong>Yeni Rol Ekle</strong> butonuna tıklanır.</li>
<li>Rolün sistemde gözükecek <strong>Adı</strong> girilir.</li>
<li><strong>ID</strong> kısmı sistem tarafından otomatik olarak atanır.</li>
<li><strong>Kaydet</strong> butonuna basılır.</li>
</ol>
<p><img src="/TimyaBPM-Documents/sr1.png" alt="alt text">
<img src="/TimyaBPM-Documents/sr2.png" alt="alt text"></p>
</div></template>


