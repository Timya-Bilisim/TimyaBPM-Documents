# Form Oluşturma Adımları

## 1.1. Yeni Form Oluşturma

 **Yeni Form Başlatma:**
   - Form kısmında bulunan artı işaretine tıklayarak yeni bir form oluşturulur.

 **Form İsmini Belirleme:**
   - Form için bir isim girin (örneğin: `frmGelenEvrak`). Bu isim, sistemde görünecek olan isimdir.
   - Kullanıcıların göreceği isim, "Form Görünen Adı" bölümünde belirtilir.

 **Form Bileşenleri ve Tanımlama Alanları:**

 - Form bileşenlerini ekleyip tanımlayabileceğiniz alanlar, formun içeriğini ve bileşenlerini yapılandırmanızı sağlar. Gerekli bileşen seçildikten sonra, sürükleyip bırak yöntemiyle form üzerine yerleştirilir. Daha sonra, bileşene tıklayarak içeriği doldurabilirsiniz.


   ![alt text](/TimyaBPM-Documents/frm1.png)
## 1.2.  Form Bileşenleri
 ![alt text](/TimyaBPM-Documents/frm3.png)
### Textbox 

-**Kullanım Alanı:** Metinsel veriler için kullanılır. Örneğin, Gelen Evrak Numarası ve Başlık Konusu gibi bilgiler için textbox kullanılır.

![alt text](/TimyaBPM-Documents/frm5.png)

### Select

- **Kullanım Alanı:**Formda seçenekler girmek için kullanılır. Seçenekler, form bileşenlerini tanımlama kısmındaki "Seçenekler" bölümüne alt alta yazılır ve Enter tuşuna basılarak kaydedilir.
 ![alt text](/TimyaBPM-Documents/frm4.png)

### Text

- **Kullanım Alanı:** Formda sadece ekrana yazı eklemek için kullanılır. Bu alanda herhangi bir veri girişi yapılmaz; amaç, metinsel bilgi sağlamaktır.
 ![alt text](/TimyaBPM-Documents/text1.png)

 ### HtmlViewer

- **Kullanım Alanı:** HTML olan verileri HTML formatında göstermek için kullanılır.
- **Nasıl Kullanılır:** Veritabanında ilgili tablo seçilir ve HTML kodları ile gerekli biçimlendirmeler yapılır.
 ![alt text](/TimyaBPM-Documents/html1.png)
![alt text](/TimyaBPM-Documents/html2.png)
![alt text](/TimyaBPM-Documents/html3.png)
### User Select

- **Kullanım Alanı:** Kullanıcıları seçmek ve sürece dahil etmek için kullanılır.
- **Nasıl Kullanılır:** Formda "User Select" bileşeni seçilir ve forma eklenir. İş başlat kısmında artı işaretine basılarak eklenmesi istenilen kullanıcılar eklenir.

 ![alt text](/TimyaBPM-Documents/userselect1.png)
![alt text](/TimyaBPM-Documents/userselect2.png)
![alt text](/TimyaBPM-Documents/userselect3.png)


### Date Picker

- **Kullanım Alanı:**Formda tarih girilmesi gereken veriler için kullanılır.

 ![alt text](/TimyaBPM-Documents/datapicker.png)

### Timepicker

- **Kullanım Alanı:** Saat seçimi için kullanılır.
- **Not:** Veri tanımlarından veritabanına saat eklenmesi doğru şekilde yapılmalıdır.(RESİM1)



![Şekil 1](/TimyaBPM-Documents/saat1.png)


![Şekil 2](/TimyaBPM-Documents/saat2.png)



![Şekil 3](/TimyaBPM-Documents/saat3.png)


## 1.3. Form Bileşenlerini Tanımlama

- Form içeriğini doldurmak için aşağıda gösterilen  alanlar doldurulur:

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
