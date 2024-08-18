"use strict";(self.webpackChunktimya=self.webpackChunktimya||[]).push([[944],{817:(n,e,i)=>{i.r(e),i.d(e,{comp:()=>r,data:()=>t});var l=i(641);const a=[(0,l.Fv)('<h1 id="roller" tabindex="-1"><a class="header-anchor" href="#roller"><span>Roller</span></a></h1><p>1- &quot;To-Do List&quot; kısmında roller eklenmelidir . Bunun için ilk adım <strong>Veri Tanımlarında</strong> gerekli bilgiler kaydedilmelidir.</p><p><img src="/TimyaBPM-Documents/roller8.png" alt="Şekil 2"></p><p><img src="/TimyaBPM-Documents/roller2.png" alt="Şekil 2"></p><p>2- İkinci adım ise,<strong>Roller</strong> kısmından yeni dinamik roller eklenir. ID, alan ve harita kısmı doldurulur. Harita kısmında, veri tanımlarında kaydedilen bilgilere göre aşağıdaki gibi yazılır.</p><p><img src="/TimyaBPM-Documents/roller1.png" alt="Şekil 2"></p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line">object ilgiliKisi = getVal(<span class="token string">&quot;GelenEvrak&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;IlgiliKisi&quot;</span>);</span>\n<span class="line">if (ilgiliKisi == <span class="token null keyword">null</span>)</span>\n<span class="line">    return System.Convert.ToInt32(ilgiliKisi);</span>\n<span class="line">else</span>\n<span class="line">    return <span class="token number">1</span>;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Daha sonra süreç kısmındaki &quot;To-Do List&quot; bölümünde, roller kısmında tanımlanan kısım seçilir ve &quot;Form List&quot; kısmından oluşturulan form seçilir.</p><p><img src="/TimyaBPM-Documents/roller3.png" alt="Şekil 2"></p>',9)],s={},r=(0,i(262).A)(s,[["render",function(n,e){return(0,l.uX)(),(0,l.CE)("div",null,a)}]]),t=JSON.parse('{"path":"/roller.html","title":"Roller","lang":"tr","frontmatter":{},"headers":[],"git":{"updatedTime":1723995196000,"contributors":[{"name":"NURŞAH YILDIZ","email":"nursah.yildiz@timyabilisim.com.tr","commits":1}]},"filePathRelative":"roller.md"}')}}]);