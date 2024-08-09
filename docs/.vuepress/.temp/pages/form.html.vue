<template><div><h1 id="form-olusturma-adımları" tabindex="-1"><a class="header-anchor" href="#form-olusturma-adımları"><span>Form Oluşturma Adımları</span></a></h1>
<h2 id="_1-1-yeni-form-olusturma" tabindex="-1"><a class="header-anchor" href="#_1-1-yeni-form-olusturma"><span>1.1. Yeni Form Oluşturma</span></a></h2>
<p><strong>Yeni Form Başlatma:</strong></p>
<ul>
<li>Form kısmında bulunan artı işaretine tıklayarak yeni bir form oluşturulur.</li>
</ul>
<p><strong>Form İsmini Belirleme:</strong></p>
<ul>
<li>Form için bir isim girin (örneğin: <code v-pre>frmGelenEvrak</code>). Bu isim, sistemde görünecek olan isimdir.</li>
<li>Kullanıcıların göreceği isim, &quot;Form Görünen Adı&quot; bölümünde belirtilir.</li>
</ul>
<p><strong>Form Bileşenleri ve Tanımlama Alanları:</strong></p>
<ul>
<li>
<p>Form bileşenlerini ekleyip tanımlayabileceğiniz alanlar, formun içeriğini ve bileşenlerini yapılandırmanızı sağlar. Gerekli bileşen seçildikten sonra, sürükleyip bırak yöntemiyle form üzerine yerleştirilir. Daha sonra, bileşene tıklayarak içeriği doldurabilirsiniz.</p>
<p><img src="/TimyaBPM-Documents/frm1.png" alt="alt text"></p>
</li>
</ul>
<h2 id="_1-2-form-bilesenleri" tabindex="-1"><a class="header-anchor" href="#_1-2-form-bilesenleri"><span>1.2.  Form Bileşenleri</span></a></h2>
<p><img src="/TimyaBPM-Documents/frm5.png" alt="alt text"></p>
<h3 id="textbox" tabindex="-1"><a class="header-anchor" href="#textbox"><span>Textbox</span></a></h3>
<ul>
<li>Metinsel veriler için kullanılır. Örneğin, Gelen Evrak Numarası ve Başlık Konusu gibi bilgiler için textbox kullanılır.</li>
</ul>
<p><img src="/TimyaBPM-Documents/frm3.png" alt="alt text"></p>
<h3 id="select" tabindex="-1"><a class="header-anchor" href="#select"><span>Select</span></a></h3>
<ul>
<li>Formda seçenekler girmek için kullanılır. Seçenekler, form bileşenlerini tanımlama kısmındaki &quot;Seçenekler&quot; bölümüne alt alta yazılır ve Enter tuşuna basılarak kaydedilir.
<img src="/TimyaBPM-Documents/frm4.png" alt="alt text"></li>
</ul>
<h3 id="datep-picker" tabindex="-1"><a class="header-anchor" href="#datep-picker"><span>Datep Picker</span></a></h3>
<ul>
<li>Formda tarih girilmesi gereken veriler için kullanılır.</li>
</ul>
<h2 id="_1-3-form-bilesenlerini-tanımlama" tabindex="-1"><a class="header-anchor" href="#_1-3-form-bilesenlerini-tanımlama"><span>1.3. Form Bileşenlerini Tanımlama</span></a></h2>
<ul>
<li>Form içeriğini doldurmak için aşağıda gösterilen alanlar  alanlar doldurulur:</li>
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
</div></template>


