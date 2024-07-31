<template><div><h1 id="e-posta-sunucusu-bilgileri" tabindex="-1"><a class="header-anchor" href="#e-posta-sunucusu-bilgileri"><span>E-Posta Sunucusu Bilgileri</span></a></h1>
<p>Aşağıdaki şekilde görünen kısım email gönderim ayarlarının yapılacağı yerdir. Alanların açıklamaları aşağıda gösterilmiştir.</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token property">"Email"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token property">"Active"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"SmtpHostAddress"</span><span class="token operator">:</span> <span class="token string">"mail.email.com"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"SmtpHostPort"</span><span class="token operator">:</span> <span class="token number">587</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"From"</span><span class="token operator">:</span> <span class="token string">"sample@email.com"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"Username"</span><span class="token operator">:</span> <span class="token string">"sample@email.com"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"Password"</span><span class="token operator">:</span> <span class="token string">"***"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"EnableSsl"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"TestMailAddress"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>Email -&gt; Alan Adı</th>
<th>Açıklama</th>
</tr>
</thead>
<tbody>
<tr>
<td>Active</td>
<td>true veya false değer alabilir. true ise email gönderimleri yapılır.</td>
</tr>
<tr>
<td>SmtpHostAddress</td>
<td>Smtp Sunucusu Adresi</td>
</tr>
<tr>
<td>SmtpHostPort</td>
<td>Smtp Sunucusu Port adresi. Sayısal değer olarak belirtilir.</td>
</tr>
<tr>
<td>From</td>
<td>Mail gönderimlerinin yapılacağı mail adresi</td>
</tr>
<tr>
<td>Username</td>
<td>Mail gönderimlerinin yapılacağı mail adresinin kullanıcı adı</td>
</tr>
<tr>
<td>Password</td>
<td>Mail gönderimlerinin yapılacağı mail adresinin şifresi</td>
</tr>
<tr>
<td>EnableSsl</td>
<td>true veya false değer alabilir. SSL var ise true olmalıdır.</td>
</tr>
<tr>
<td>TestMailAddress</td>
<td>Buraya bir mail adresi yazılırsa mailler bu adrese gönderilir. Boş bırakılırsa gitmesi gereken kullanıcılara gider.</td>
</tr>
</tbody>
</table>
</div></template>


