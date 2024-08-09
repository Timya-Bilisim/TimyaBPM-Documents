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

- Metinsel veriler için kullanılır. Örneğin, Gelen Evrak Numarası ve Başlık Konusu gibi bilgiler için textbox kullanılır.

![alt text](/TimyaBPM-Documents/frm5.png)

### Select

- Formda seçenekler girmek için kullanılır. Seçenekler, form bileşenlerini tanımlama kısmındaki "Seçenekler" bölümüne alt alta yazılır ve Enter tuşuna basılarak kaydedilir.
 ![alt text](/TimyaBPM-Documents/frm4.png)

### Date Picker

- Formda tarih girilmesi gereken veriler için kullanılır.


## 1.3. Form Bileşenlerini Tanımlama

- Form içeriğini doldurmak için aşağıda gösterilen alanlar  alanlar doldurulur:

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
