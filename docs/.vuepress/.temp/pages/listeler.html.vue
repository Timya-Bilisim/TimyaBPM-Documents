<template><div><h1 id="listeler" tabindex="-1"><a class="header-anchor" href="#listeler"><span>Listeler</span></a></h1>
<p>İş başlat kısmında &quot;Sonlandır&quot; butonu çıkar. İşi sonlandırdığımızda rapor etmemiz gerekir. Bunun için iş nesnelerinde &quot;Biten İşler&quot; adında bir nesne açılır.</p>
<p><img src="/TimyaBPM-Documents/son3.png" alt="Şekil 2">
<img src="/TimyaBPM-Documents/rapor.png" alt="Şekil 2"></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line">select ProcessId<span class="token punctuation">,</span> m.Title MapName<span class="token punctuation">,</span> ProcessName<span class="token punctuation">,</span> p.Title<span class="token punctuation">,</span> StageCaption<span class="token punctuation">,</span> CreatedTime<span class="token punctuation">,</span> UpdatedTime<span class="token punctuation">,</span> DoubleField1<span class="token punctuation">,</span> StringField1<span class="token punctuation">,</span> StringField2 </span>
<span class="line">from Processes p </span>
<span class="line">inner join Maps m on m.Name = p.MapName </span>
<span class="line">where p.Deleted &lt;> <span class="token number">1</span> and p.Archived = <span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Daha sonra <strong>Listeler</strong> kısmından rapor oluşturulur. Bilgiler aşağıdaki resimde gösterildiği gibi girilmelidir.</p>
<p><img src="/TimyaBPM-Documents/rapor2.png" alt="Şekil 2"></p>
<p>Rapor kısmında gözükmesi gereken bilgiler aşağıdaki gibidir.</p>
<p><img src="/TimyaBPM-Documents/rapor3.png" alt="Şekil 2"></p>
</div></template>


