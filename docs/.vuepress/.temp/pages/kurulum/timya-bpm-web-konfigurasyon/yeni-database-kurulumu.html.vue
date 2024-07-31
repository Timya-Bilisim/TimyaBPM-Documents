<template><div><h1 id="yeni-database-kurulumu" tabindex="-1"><a class="header-anchor" href="#yeni-database-kurulumu"><span>Yeni Database Kurulumu</span></a></h1>
<p>Veritabanına tam erişim izni verilmiş bir kullanıcı için <code v-pre>appsettings.json</code> dosyasında aşağıdaki ayarlar yapılmalıdır:</p>
<p>Veritabanına tam erişim izni verilmiş bir kullanıcı için <code v-pre>appsettings.json</code> dosyasında aşağıdaki ayarlar yapılmalıdır:</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"ConnectionStrings"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"DefaultConnection"</span><span class="token operator">:</span> <span class="token string">"Server=&lt;server_adı>;Database=&lt;yok_olan_veritabanı_adı>;Trusted_Connection=True;MultipleActiveResultSets=true"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


