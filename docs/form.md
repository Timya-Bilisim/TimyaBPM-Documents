# Form Oluşturma Adımları

## 1.1. Yeni Form Oluşturma

 **Yeni Form Başlatma:**
   - Form kısmında bulunan artı işaretine tıklayarak yeni bir form oluşturulur.

 **Form İsmini Belirleme:**
   - Form için bir isim girilir (örneğin: `frmGelenEvrak`). Bu isim, sistemde görünecek olan isimdir.
   - Kullanıcıların göreceği isim, "Form Görünen Adı" bölümünde belirtilir.

 **Form Bileşenleri ve Tanımlama Alanları:**

- _Gerekli form bileşenlerini seçip sürükle-bırak yöntemiyle form üzerine tanımlanır. Ardından, seçilen bileşene tıklayarak form içeriğini sağ bölümdeki alanlara doldurulur. Bu kısım, "Form Bileşenleri Tanımlama" başlığı altında detaylı olarak anlatılmıştır. (Bkz. 1.3. Form Bileşenlerini Tanımlama)_

![alt text](/TimyaBPM-Documents/frm1.png)

## 1.2. Form Bileşenlerini Tanımlama

- _Form içeriğini doldurmak için aşağıda gösterilen  alanlar doldurulur:_

 ![alt text](/TimyaBPM-Documents/frm2.png)
- **ID:** Sistemde görünecek isimdir. Türkçe karakter ve boşluk kullanılmamalıdır.
- **Title:** Kullanıcının göreceği isimdir.
- **Grid Yapısı:** Tasarım için kullanılır. Textboxların boyutunu grid yapısına göre tanımlanır:
  - **XS:** Küçük ekranlarda
  - **S:** Tabletler gibi ekranlarda
  - **MD:** Küçük bilgisayarlarda
  - **LG:** Daha büyük monitörlerde
- **Zorunlu Alan Formulu:**
  - **Readonly:** Sadece okunabilir.
  - **Editable:** Düzenlenebilir.
  - **Required:** Zorunlu.
  - **Hidden:** Gizli.
- **Azami Karakter Sayısı:** Veritabanında tanımlanan karakter sayısı girilir.
- **Table:** Oluşturulan tablo seçilir.
- **Field:** Tablonun alanı seçilir.


## 1.3.  Form Bileşenleri

 ![alt text](/TimyaBPM-Documents/frm3.png)
### Textbox 

- **Kullanım Alanı:** Metinsel veriler için kullanılır. Örneğin, Gelen Evrak Numarası ve Başlık Konusu gibi bilgiler için textbox kullanılır.

![alt text](/TimyaBPM-Documents/frm5.png)

### Select

- **Kullanım Alanı:** Formda seçenekler girmek için kullanılır. Seçenekler, form bileşenlerini tanımlama kısmındaki "Seçenekler" bölümüne alt alta yazılır ve Enter tuşuna basılarak kaydedilir.

 ![alt text](/TimyaBPM-Documents/frm4.png)

### Text

- **Kullanım Alanı:** Formda  ekrana yazı eklemek için kullanılır. Bu alanda herhangi bir veri girişi yapılmaz; amaç, sadece metinsel bilgi sağlamaktır.

 ![alt text](/TimyaBPM-Documents/text1.png)

 ### HtmlViewer

- **Kullanım Alanı:** Verileri HTML formatında göstermek için kullanılır.
-  Veritabanında ilgili tablo seçilir ve HTML kodları ile gerekli biçimlendirmeler yapılır.
- Örnekte kullanılan HTML kodu :

```json
<h1 style="color:red">My First Heading</h1>
<p style="font-weight:bold">My first paragraph.</p>
```

 ![alt text](/TimyaBPM-Documents/html1.png)
![alt text](/TimyaBPM-Documents/html2.png)
![alt text](/TimyaBPM-Documents/html3.png)

### User Select

- **Kullanım Alanı:** Rolleri seçmek ve sürece dahil etmek için kullanılır.
-  Formda "User Select" bileşeni seçilir ve forma eklenir. Artı işaretine basılarak eklenmesi istenilen roller eklenir.

 ![alt text](/TimyaBPM-Documents/userselect1.png)
![alt text](/TimyaBPM-Documents/userselect2.png)
![alt text](/TimyaBPM-Documents/userselect3.png)


### Date Picker

- **Kullanım Alanı:** Formda tarih girilmesi gereken veriler için kullanılır.

 ![alt text](/TimyaBPM-Documents/datapicker.png)

### Timepicker

- **Kullanım Alanı:** Saat seçimi için kullanılır.
-  Veri tanımlarından  saat için **DataValueType** eklenmesi doğru şekilde yapılmalıdır.



![Şekil 1](/TimyaBPM-Documents/saat1.png)


![Şekil 2](/TimyaBPM-Documents/saat2.png)



![Şekil 3](/TimyaBPM-Documents/saat3.png)

### Dosya

 **Dosya Bileşenini Ekleme:**
   - Dosya bileşeni forma eklendikten sonra, **Title** ve **Tag** tanımlamaları aynı olmalıdır. (Bkz. Örnek 1)

 **Dosya Seçimi ve Görüntüleme:**
   - **İş Başlat** kısmından süreç başlatılır  ve eklenilmek istenilen dosya seçilir.
   - Dosya seçildikten sonra, sağ taraftaki **Dosyalar** bölümünde eklenilen dosyalar görüntülenir.(Bkz. Örnek 2)

**Örnek 1**
![Şekil 2](/TimyaBPM-Documents/dosya1.png)


  **Örnek 2**
![Şekil 3](/TimyaBPM-Documents/dosyalar2.png)

### Para
 - Para bileşeni için veri tanımlarında DataValueType Money seçilmelidir.(Bkz. Örnek 1)
- Para formatını ayarlamak için Microsoft'un sağladığı standard numeric format strings sayfası kullanılabilir. Örneğin, resimde gösterilen yerde **N6** formatı kullanılmış. Bu format, sayıyı virgülden sonra 6 basamak olacak şekilde formatlar.(Bkz. Örnek 2)

_Bağlantıya giderek farklı formatlar hakkında daha fazla bilgi edinebilir ve ihtiyacınıza uygun olanı seçebilirsiniz: [Standard Numeric Format Strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings)._

  **Örnek 1**
   ![Şekil 2](/TimyaBPM-Documents/para.png)


  **Örnek 2**
![Şekil 3](/TimyaBPM-Documents/para1.png)

### Comments
- Yorum bileşeni forma eklendikten sonra, **İş Başlat** kısmından süreç başlatılır ve sağ kısımdaki **Yorumlar** alanından yorum eklenir.
.
 
![Şekil 2](/TimyaBPM-Documents/yorum1.png)


    
![Şekil 3](/TimyaBPM-Documents/yorum2.png)

### Data Picker
- Data Picker,  veri tabanından veri seçilmesini sağlar.  Bağlantılar ve İş Nesneleri tanımlanır. Bu kavramlar ayrıntılı olarak Bağlantı ve İş Nesneleri bölümlerde detaylıca açıklanmıştır.  Data Picker ile ilgili bağlantı ve iş nesnesi örnekleri gösterilmiştir.(Örnek 1)


 **Örnek1**
![Şekil 3](/TimyaBPM-Documents/datapicker1.png)
![Şekil 3](/TimyaBPM-Documents/datapicker2.png)



- Data Binding: Form bileşenlerini   Data Picker’dan seçilen verilerle doldurulmasını sağlar. 
- **ColumnName:Veri tabanındaki sütunlar seçilir.**
- **Formula:Table ve field alanları  sağ taraftaki _Form Bileşenlerini Tanımlama_ alanından seçilir ve süslü parantez içinde formula kısmında belirtilir.**


Aşağıdaki örnekte sütun olarak 
_UrunAdı seçilmiş ve formüle {CikisEvrak.EvrakNo} yazılmıştır. Bu sayede, ürün adı Evrak No alanında gözükür._
 _Urun Açıklaması sütunu seçilmiş ve formüle {CikisEvrak.Notlar} yazılmıştır. Bu sayede, ürün açıklaması Notlar kısmında gözükür. (Örnek 2)_


**Örnek2**
![Şekil 3](/TimyaBPM-Documents/datapicker3.png)
![Şekil 3](/TimyaBPM-Documents/datapicker4.png)