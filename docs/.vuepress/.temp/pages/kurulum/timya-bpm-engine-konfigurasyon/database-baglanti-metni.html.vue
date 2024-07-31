<template><div><h1 id="database-baglantı-metni" tabindex="-1"><a class="header-anchor" href="#database-baglantı-metni"><span>Database Bağlantı Metni</span></a></h1>
<p>Aşağıda görülen bağlantı metnindeki ** görülen yerlere veritabanı sunucusu erişim bilgileri yazılır. <code v-pre>Initial Catalog=</code> kısmına veritabanı adı yazılır. (Yalnızca SQL Server ile çalışır.)</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token property">"ConnectionStrings"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token property">"DefaultConnection"</span><span class="token operator">:</span> <span class="token string">"Data Source=&lt;veri_kaynağı>; User ID=&lt;kullanıcı_adı>; Password=&lt;şifre>; Initial Catalog=&lt;başlangıç_kataloğu>; TrustServerCertificate=True"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


