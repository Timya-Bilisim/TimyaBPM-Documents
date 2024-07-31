<template><div><h1 id="timya-bpm-web-konfigurasyon" tabindex="-1"><a class="header-anchor" href="#timya-bpm-web-konfigurasyon"><span>Timya/BPM Web Konfigurasyon</span></a></h1>
<p><code v-pre>TimyaBPMWeb.zip</code> dosyası, IIS varsayılan kök dizinine (varsayılan olarak <code v-pre>c:\inetpup\wwwroot</code>) ya da kurulumu yapılacak başka bir yere çıkarılmalıdır. Dizinde bulunan <code v-pre>appsettings.json</code> dosyası bir metin editörü ile açılarak konfigurasyon ayarları yapılır ve kaydedilir.</p>
<p><img src="/TimyaBPM-Documents/images/web.png" alt="IIS Kurulumu"></p>
<p>Aşağıdaki bağlantı metnindeki ** görülen yerlere veritabanı sunucusu erişim bilgileri yazılmalıdır (yalnızca SQL Server ile çalışır).</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"></span>
<span class="line"><span class="token property">"ConnectionStrings"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"DefaultConnection"</span><span class="token operator">:</span> <span class="token string">"Data Source=**; User ID=**; Password=**; Initial Catalog=**; TrustServerCertificate=True"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


