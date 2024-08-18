<template><div><h1 id="roller" tabindex="-1"><a class="header-anchor" href="#roller"><span>Roller</span></a></h1>
<p>1- &quot;To-Do List&quot; kısmında roller eklenmelidir . Bunun için ilk adım <strong>Veri Tanımlarında</strong> gerekli bilgiler kaydedilmelidir.</p>
<p><img src="/TimyaBPM-Documents/roller8.png" alt="Şekil 2"></p>
<p><img src="/TimyaBPM-Documents/roller2.png" alt="Şekil 2"></p>
<p>2- İkinci adım ise,<strong>Roller</strong> kısmından yeni dinamik roller eklenir.  ID, alan ve harita kısmı doldurulur. Harita kısmında, veri tanımlarında kaydedilen bilgilere göre aşağıdaki gibi yazılır.</p>
<p><img src="/TimyaBPM-Documents/roller1.png" alt="Şekil 2"></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line">object ilgiliKisi = getVal(<span class="token string">"GelenEvrak"</span><span class="token punctuation">,</span> <span class="token string">"IlgiliKisi"</span>);</span>
<span class="line">if (ilgiliKisi == <span class="token null keyword">null</span>)</span>
<span class="line">    return System.Convert.ToInt32(ilgiliKisi);</span>
<span class="line">else</span>
<span class="line">    return <span class="token number">1</span>;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Daha sonra süreç kısmındaki &quot;To-Do List&quot; bölümünde, roller kısmında tanımlanan kısım seçilir ve &quot;Form List&quot; kısmından oluşturulan form seçilir.</p>
<p><img src="/TimyaBPM-Documents/roller3.png" alt="Şekil 2"></p>
</div></template>


