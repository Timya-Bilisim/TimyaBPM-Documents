<template><div><h1 id="baglantı-kurma-adımları" tabindex="-1"><a class="header-anchor" href="#baglantı-kurma-adımları"><span>Bağlantı Kurma Adımları</span></a></h1>
<p>Bağlantılar,   veri alışverişi  sağlamak için kullanılır.</p>
<p><img src="/TimyaBPM-Documents/baglantii1.png" alt="Şekil 2"></p>
<h2 id="baglantı-ozellikleri" tabindex="-1"><a class="header-anchor" href="#baglantı-ozellikleri"><span>Bağlantı Özellikleri</span></a></h2>
<ul>
<li><strong>Bağlantı Adı</strong>: Bağlantının sistemdeki adıdır.</li>
<li><strong>Bağlantı Metni</strong>:  Veritabanına bağlanabilmesi için gereken bilgileri içerir. Veri kaynağına erişirken kullandığı kimlik bilgilerini, sunucu adresi gibi diğer ayarları tanımlar.</li>
</ul>
<p><strong>Bağlantı Metni Örneği</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line">Server=myServerAddress; Database=myDataBase; User Id=myUsername; Password=myPassword;</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>■ <strong>Server=myServerAddress</strong>: Bağlanılacak sunucu adresini belirtir.<br>
■ <strong>Database=myDataBase</strong>: Erişilecek veritabanının adını gösterir.<br>
■ <strong>User Id=myUsername</strong>: Veritabanına giriş için kullanılan kullanıcı adıdır.<br>
■ <strong>Password=myPassword</strong>: Kullanıcının erişim şifresidir.</p>
<ul>
<li><strong>Login Adress</strong>: LDAP sunucusunun IP adresi veya domain adı girilir.</li>
<li><strong>Kullanıcı Adı</strong>: LDAP sunucusuna erişim yetkisi olan kullanıcı adı girilir.</li>
<li><strong>LDAP Filtre</strong>:   LDAP filtreleri, verilerde belirli kriterleri kullanarak sadece gerekli bilgileri senkronize etmeyi sağlar.</li>
<li><strong>Secure Socket</strong>: Bağlantının güvenli olup olmadığını belirten seçenekler.
<ul>
<li><strong>None</strong>: Şifreleme yok, veriler düz metin olarak iletilir.</li>
<li><strong>Secure Sockets Layer</strong>: Veriler SSL (Secure Sockets Layer) üzerinden şifrelenir, daha güvenli bir bağlantı sağlar.</li>
</ul>
</li>
<li><strong>Bağlantı Tipi</strong>
<ul>
<li><strong>Database</strong>:SQL veya diğer veritabanlarına bağlanarak veri yönetimi yapar.</li>
<li><strong>ActiveDirectorySync</strong>: Active Directory ile LDAP protokolü kullanarak senkronizasyon işlemleri yapar.</li>
</ul>
</li>
</ul>
<h2 id="baglantı-tipi-ornek-kullanım-senaryoları" tabindex="-1"><a class="header-anchor" href="#baglantı-tipi-ornek-kullanım-senaryoları"><span>Bağlantı Tipi: Örnek Kullanım Senaryoları</span></a></h2>
<p><em>Aşağıda farklı bağlantı tiplerinin nasıl yapılandırılacağını gösteren örnekler verilmiştir.</em></p>
<h4 id="veritabanı-baglantısı" tabindex="-1"><a class="header-anchor" href="#veritabanı-baglantısı"><span>Veritabanı Bağlantısı</span></a></h4>
<ul>
<li><strong>Bağlantı Adı</strong>: Veritabanı_Baglanti</li>
<li><strong>Bağlantı Metni</strong>:`Server=myServerAddress; Database=myDataBase; User Id=myUsername; Password=myPassword;</li>
<li><strong>Login Address</strong>: Admin</li>
<li><strong>Bağlantı Tipi</strong>: Database</li>
<li><strong>Şifre</strong>: ********</li>
<li><strong>Test</strong>:Kaydedilir ve ardından teste tıklanır.</li>
</ul>
<h4 id="active-directory-baglantısı" tabindex="-1"><a class="header-anchor" href="#active-directory-baglantısı"><span>Active Directory Bağlantısı</span></a></h4>
<ul>
<li><strong>Bağlantı Adı</strong>: ADL_AD</li>
<li><strong>Login Adress</strong>: LDAP://452.188.1.5</li>
<li><strong>Kullanıcı Adı</strong>: bpm</li>
<li><strong>Şifre</strong>: ********</li>
<li><strong>Bağlantı Tipi</strong>: ActiveDirectorySync</li>
<li><strong>LDAP Filtre</strong>: (mail=ali@example.com)</li>
<li><strong>Test</strong>: Kaydedilir ve ardından teste tıklanır.</li>
</ul>
</div></template>


