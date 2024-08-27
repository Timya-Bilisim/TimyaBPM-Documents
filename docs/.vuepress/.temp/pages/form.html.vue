<template><div><h1 id="form-olusturma-adımları" tabindex="-1"><a class="header-anchor" href="#form-olusturma-adımları"><span>Form Oluşturma Adımları</span></a></h1>
<h2 id="_1-1-yeni-form-olusturma" tabindex="-1"><a class="header-anchor" href="#_1-1-yeni-form-olusturma"><span>1.1. Yeni Form Oluşturma</span></a></h2>
<p><strong>Yeni Form Başlatma:</strong></p>
<ul>
<li>Form kısmında bulunan artı işaretine tıklayarak yeni bir form oluşturulur.</li>
</ul>
<p><strong>Form İsmini Belirleme:</strong></p>
<ul>
<li>Form için bir isim girilir (örneğin: <code v-pre>frmGelenEvrak</code>). Bu isim, sistemde görünecek olan isimdir.</li>
<li>Kullanıcıların göreceği isim, &quot;Form Görünen Adı&quot; bölümünde belirtilir.</li>
</ul>
<p><strong>Form Bileşenleri ve Tanımlama Alanları:</strong></p>
<ul>
<li><em>Gerekli form bileşenlerini seçip sürükle-bırak yöntemiyle form üzerine tanımlanır. Ardından, seçilen bileşene tıklayarak form içeriğini sağ bölümdeki alanlara doldurulur. Bu kısım, &quot;Form Bileşenleri Tanımlama&quot; başlığı altında detaylı olarak anlatılmıştır. (Bkz. 1.3. Form Bileşenlerini Tanımlama)</em></li>
</ul>
<p><img src="/TimyaBPM-Documents/frm1.png" alt="alt text"></p>
<h2 id="_1-2-form-bilesenlerini-tanımlama" tabindex="-1"><a class="header-anchor" href="#_1-2-form-bilesenlerini-tanımlama"><span>1.2. Form Bileşenlerini Tanımlama</span></a></h2>
<ul>
<li><em>Form içeriğini doldurmak için aşağıda gösterilen  alanlar doldurulur:</em></li>
</ul>
<p><img src="/TimyaBPM-Documents/frm2.png" alt="alt text"></p>
<ul>
<li><strong>ID:</strong> Sistemde görünecek isimdir. Türkçe karakter ve boşluk kullanılmamalıdır.</li>
<li><strong>Title:</strong> Kullanıcının göreceği isimdir.</li>
<li><strong>Grid Yapısı:</strong> Tasarım için kullanılır. Textboxların boyutunu grid yapısına göre tanımlanır:
<ul>
<li><strong>XS:</strong> Küçük ekranlarda</li>
<li><strong>S:</strong> Tabletler gibi ekranlarda</li>
<li><strong>MD:</strong> Küçük bilgisayarlarda</li>
<li><strong>LG:</strong> Daha büyük monitörlerde</li>
</ul>
</li>
<li><strong>Zorunlu Alan Formulu:</strong>
<ul>
<li><strong>Readonly:</strong> Sadece okunabilir.</li>
<li><strong>Editable:</strong> Düzenlenebilir.</li>
<li><strong>Required:</strong> Zorunlu.</li>
<li><strong>Hidden:</strong> Gizli.</li>
</ul>
</li>
<li><strong>Azami Karakter Sayısı:</strong> Veritabanında tanımlanan karakter sayısı girilir.</li>
<li><strong>Table:</strong> Oluşturulan tablo seçilir.</li>
<li><strong>Field:</strong> Tablonun alanı seçilir.</li>
</ul>
<h2 id="_1-3-form-bilesenleri" tabindex="-1"><a class="header-anchor" href="#_1-3-form-bilesenleri"><span>1.3.  Form Bileşenleri</span></a></h2>
<p><img src="/TimyaBPM-Documents/frm3.png" alt="alt text"></p>
<h3 id="textbox" tabindex="-1"><a class="header-anchor" href="#textbox"><span>Textbox</span></a></h3>
<ul>
<li><strong>Kullanım Alanı:</strong> Metinsel veriler için kullanılır. Örneğin, Gelen Evrak Numarası ve Başlık Konusu gibi bilgiler için textbox kullanılır.</li>
</ul>
<p><img src="/TimyaBPM-Documents/frm5.png" alt="alt text"></p>
<h3 id="select" tabindex="-1"><a class="header-anchor" href="#select"><span>Select</span></a></h3>
<ul>
<li><strong>Kullanım Alanı:</strong> Formda seçenekler girmek için kullanılır. Seçenekler, form bileşenlerini tanımlama kısmındaki &quot;Seçenekler&quot; bölümüne alt alta yazılır ve Enter tuşuna basılarak kaydedilir.</li>
</ul>
<p><img src="/TimyaBPM-Documents/frm4.png" alt="alt text"></p>
<h3 id="text" tabindex="-1"><a class="header-anchor" href="#text"><span>Text</span></a></h3>
<ul>
<li><strong>Kullanım Alanı:</strong> Formda  ekrana yazı eklemek için kullanılır. Bu alanda herhangi bir veri girişi yapılmaz; amaç, sadece metinsel bilgi sağlamaktır.</li>
</ul>
<p><img src="/TimyaBPM-Documents/text1.png" alt="alt text"></p>
<h3 id="htmlviewer" tabindex="-1"><a class="header-anchor" href="#htmlviewer"><span>HtmlViewer</span></a></h3>
<ul>
<li><strong>Kullanım Alanı:</strong> Verileri HTML formatında göstermek için kullanılır.</li>
<li>Veritabanında ilgili tablo seçilir ve HTML kodları ile gerekli biçimlendirmeler yapılır.</li>
<li>Örnekte kullanılan HTML kodu :</li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line">&lt;h1 style=<span class="token string">"color:red"</span>>My First Heading&lt;/h1></span>
<span class="line">&lt;p style=<span class="token string">"font-weight:bold"</span>>My first paragraph.&lt;/p></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/TimyaBPM-Documents/html1.png" alt="alt text">
<img src="/TimyaBPM-Documents/html2.png" alt="alt text">
<img src="/TimyaBPM-Documents/html3.png" alt="alt text"></p>
<h3 id="user-select" tabindex="-1"><a class="header-anchor" href="#user-select"><span>User Select</span></a></h3>
<ul>
<li><strong>Kullanım Alanı:</strong> Rolleri seçmek ve sürece dahil etmek için kullanılır.</li>
<li>Formda &quot;User Select&quot; bileşeni seçilir ve forma eklenir. Artı işaretine basılarak eklenmesi istenilen roller eklenir.</li>
</ul>
<p><img src="/TimyaBPM-Documents/userselect1.png" alt="alt text">
<img src="/TimyaBPM-Documents/userselect2.png" alt="alt text">
<img src="/TimyaBPM-Documents/userselect3.png" alt="alt text"></p>
<h3 id="date-picker" tabindex="-1"><a class="header-anchor" href="#date-picker"><span>Date Picker</span></a></h3>
<ul>
<li><strong>Kullanım Alanı:</strong> Formda tarih girilmesi gereken veriler için kullanılır.</li>
</ul>
<p><img src="/TimyaBPM-Documents/datapicker.png" alt="alt text"></p>
<h3 id="timepicker" tabindex="-1"><a class="header-anchor" href="#timepicker"><span>Timepicker</span></a></h3>
<ul>
<li><strong>Kullanım Alanı:</strong> Saat seçimi için kullanılır.</li>
<li>Veri tanımlarından  saat için <strong>DataValueType</strong> eklenmesi doğru şekilde yapılmalıdır.</li>
</ul>
<p><img src="/TimyaBPM-Documents/saat1.png" alt="Şekil 1"></p>
<p><img src="/TimyaBPM-Documents/saat2.png" alt="Şekil 2"></p>
<p><img src="/TimyaBPM-Documents/saat3.png" alt="Şekil 3"></p>
<h3 id="dosya" tabindex="-1"><a class="header-anchor" href="#dosya"><span>Dosya</span></a></h3>
<p><strong>Dosya Bileşenini Ekleme:</strong></p>
<ul>
<li>Dosya bileşeni forma eklendikten sonra, <strong>Title</strong> ve <strong>Tag</strong> tanımlamaları aynı olmalıdır. (Bkz. Örnek 1)</li>
</ul>
<p><strong>Dosya Seçimi ve Görüntüleme:</strong></p>
<ul>
<li><strong>İş Başlat</strong> kısmından süreç başlatılır  ve eklenilmek istenilen dosya seçilir.</li>
<li>Dosya seçildikten sonra, sağ taraftaki <strong>Dosyalar</strong> bölümünde eklenilen dosyalar görüntülenir.(Bkz. Örnek 2)</li>
</ul>
<p><strong>Örnek 1</strong>
<img src="/TimyaBPM-Documents/dosya1.png" alt="Şekil 2"></p>
<p><strong>Örnek 2</strong>
<img src="/TimyaBPM-Documents/dosyalar2.png" alt="Şekil 3"></p>
<h3 id="para" tabindex="-1"><a class="header-anchor" href="#para"><span>Para</span></a></h3>
<ul>
<li>Para bileşeni için veri tanımlarında DataValueType Money seçilmelidir.(Bkz. Örnek 1)</li>
<li>Para formatını ayarlamak için Microsoft'un sağladığı standard numeric format strings sayfası kullanılabilir. Örneğin, resimde gösterilen yerde <strong>N6</strong> formatı kullanılmış. Bu format, sayıyı virgülden sonra 6 basamak olacak şekilde formatlar.(Bkz. Örnek 2)</li>
</ul>
<p><em>Bağlantıya giderek farklı formatlar hakkında daha fazla bilgi edinebilir ve ihtiyacınıza uygun olanı seçebilirsiniz: <a href="https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings" target="_blank" rel="noopener noreferrer">Standard Numeric Format Strings</a>.</em></p>
<p><strong>Örnek 1</strong>
<img src="/TimyaBPM-Documents/para.png" alt="Şekil 2"></p>
<p><strong>Örnek 2</strong>
<img src="/TimyaBPM-Documents/para1.png" alt="Şekil 3"></p>
<h3 id="comments" tabindex="-1"><a class="header-anchor" href="#comments"><span>Comments</span></a></h3>
<ul>
<li>Yorum bileşeni forma eklendikten sonra, <strong>İş Başlat</strong> kısmından süreç başlatılır ve sağ kısımdaki <strong>Yorumlar</strong> alanından yorum eklenir.
.</li>
</ul>
<p><img src="/TimyaBPM-Documents/yorum1.png" alt="Şekil 2"></p>
<p><img src="/TimyaBPM-Documents/yorum2.png" alt="Şekil 3"></p>
<h3 id="data-picker" tabindex="-1"><a class="header-anchor" href="#data-picker"><span>Data Picker</span></a></h3>
<ul>
<li>Data Picker,  veri tabanından veri seçilmesini sağlar.  Bağlantılar ve İş Nesneleri tanımlanır. Bu kavramlar ayrıntılı olarak Bağlantı ve İş Nesneleri bölümlerde detaylıca açıklanmıştır.</li>
<li>Data Picker ile ilgili bağlantı ve iş nesnesi örnekleri gösterilmiştir.(Örnek 1)</li>
</ul>
<p><strong>Örnek1</strong>
<img src="/TimyaBPM-Documents/datapicker1.png" alt="Şekil 3">
<img src="/TimyaBPM-Documents/datapicker2.png" alt="Şekil 3"></p>
<ul>
<li>Data Binding: Form bileşenlerini   Data Picker’dan seçilen verilerle doldurulmasını sağlar.
Form Kısmından ;</li>
<li><strong>ColumnName:Veri tabanındaki sütunlar seçilir.</strong></li>
<li><strong>Formula:Table ve field alanları  sağ taraftaki <em>Form Bileşenlerini Tanımlama</em> alanından seçilir ve süslü parantez içinde formula kısmında belirtilir.</strong></li>
</ul>
<p>Aşağıdaki örnekte sütun olarak
<em>UrunAdı seçilmiş ve formüle {CikisEvrak.EvrakNo} yazılmıştır. Bu sayede, süreç başlatılıp veriler seçildikten sonra  ürün adı Evrak No alanında gözükür.</em>
<em>Urun Açıklaması sütunu seçilmiş ve formüle {CikisEvrak.Notlar} yazılmıştır. Bu sayede,süreç başlatılıp veriler seçildikten sonra  ürün açıklaması Notlar kısmında gözükür. (Örnek 2)</em></p>
<p><strong>Örnek2</strong>
<img src="/TimyaBPM-Documents/datapicker3.png" alt="Şekil 3">
<img src="/TimyaBPM-Documents/datapicker.png" alt="Şekil 3">
<img src="/TimyaBPM-Documents/datapicker4.png" alt="Şekil 3"></p>
</div></template>


