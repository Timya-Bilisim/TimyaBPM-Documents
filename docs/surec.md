
# Süreç Oluşturma Adımları


## 1.1. Süreç Geliştirme

> - Yeni bir süreç geliştirmek için, süreç bölümünde artı işaretine tıklanır ve **"New Map"** seçeneği ile yeni bir süreç haritası oluşturulur. Süreç haritası üzerinde boş bir alana tıklandığında, süreç özelliklerinin değiştirileceği kısım sağ tarafta görünür.



➜ **"Process General"** kısmında **Name** alanına sürecin kullanıcılara gözükecek isim girilir. **ID** kısmı sistemde saklanacak olan isimdir. Boşluk ve Türkçe karakterler kullanılmaz.


![alt text](/TimyaBPM-Documents/surecc1.png) 

➜ **Properties** kısmında, **Accessing Roles** bölümünde, sürece erişebilecek roller seçilir (roller ayrıca açıklanacaktır).

![alt text](/TimyaBPM-Documents/surecc2.png) 

---
➜ **Properties** kısmında, **Number Prefix** bölümünde,  süreç numaralandırmasının aşağıdaki yönergelere göre yapılandırılması gerekmektedir:

`GLN-{yyyy} - {ID:000} {IDTABLE:GLOBALID}`

 **Yıl Bilgisi:** `GLN-{yyyy}`

   
 **Sıra Numarası:** `{ID:000}`
   - Belgeye verilen sıra numarasını belirtir.
   
 **Tablo Numarası:** `{IDTABLE:GLOBALID}`
   - Numaralandırmanın yapılacağı tabloyu gösterir. `GLOBALID` ifadesinin önüne tablo adı eklenir. Aynı tablolarda ve farklı tablolarda numaralandırma sistemleri aşağıdaki gibi farklılık gösterir:

#### Farklı Tablolara Göre Numaralandırma

- **Format:** `GLN-{yyyy} - {ID:000} {IDTABLE:GELENGLOBALID}`

  - GLN-2024-001
  - GLN-2024-002
  - GLN-2024-003

- **Format:** `GDN-{yyyy} - {ID:000} {IDTABLE:GIDENGLOBALID}`

  - GDN-2024-001
  - GDN-2024-002

#### Aynı Tablolara Göre Numaralandırma

- **Format:** `GLN-{yyyy} - {ID:000} {IDTABLE:GLOBALID}`

  - GLN-2024-001
  - GLN-2024-003
  - GLN-2024-004

- **Format:** `GDN-{yyyy} - {ID:000} {IDTABLE:GLOBALID}`

  - GDN-2024-002
  - GDN-2024-005

![alt text](/TimyaBPM-Documents/sıralama.png) 
---

---
### Süreç Aksiyonları


#### Başlat
> - Süreç haritasındaki yuvarlak şekiller, süreç başlatma aksiyonlarını ifade eder. Bu aksiyona tıklanarak sağ tarafta görüntülenecek alanlar aşağıda belirtildiği şekilde tanımlanmalıdır.

- **Name:** Kullanıcının süreci başlatmak için tıklayacağı butonun ismidir.
- **ID:** Sistemde saklanacak olan isimdir.Boşluk ve Türkçe karakterler kullanılmaz.

![alt text](/TimyaBPM-Documents/surecc3.png) 


➜ **Properties** bölümü aşağıdaki şekilde tanımlanır:


- **Available to Roles:** Süreci başlatabilecek roller seçilir.
- **To Do List:** Süreç başladıktan sonra iş atamasının ilk yapılacağı rolü belirtir.Mouse ile **Roller** kısmından sürüklenip **Seçilen Roller** kısmına bırakılarak atanır.

 ![alt text](/TimyaBPM-Documents/roller8.png) 

- **Form List:** Süreç başlatıldığında kullanılacak form seçilir.


![alt text](/TimyaBPM-Documents/surecc4.png) 


#### Flow ve Aksiyon
> - **Başlat** butonunun yanındaki kare işaretine tıklanır. **Flow** ve **Aksiyon** kısımları aşağıdaki gibi oluşturulur.

- **Flow:** Süreç adımları arasındaki akışı ve bağlantıları tanımlar.
- **Aksiyon:** Belirli bir adımda gerçekleştirilecek işlemleri veya görevleri tanımlar.

![alt text](/TimyaBPM-Documents/surecg1.png) 

Aksiyon eventi için **Change Element** seçilir. Bu seçenek, sürecin ihtiyaçlarına uygun görevlerin (task) belirlenmesini sağlar ve sürecin gereksinimlerine göre yapılandırılır. Örneğin:

- **User Task:** Kullanıcının manuel olarak tamamlaması gereken görevleri ifade eder.
- **Send Task:** Mesaj veya e-posta  gönderen görevleri ifade eder.



![alt text](/TimyaBPM-Documents/anahtar.png) 



 #### Süreci Sonlandırma
> - Süreci sonlandırmak için resimde gösterilen süreç sonlandrıma event'i  seçilir.

![alt text](/TimyaBPM-Documents/son1.png) 
![alt text](/TimyaBPM-Documents/son2.png) 

---

## 1.2. Süreci Yayınlama


> - Süreci kullanıma almak için önce sureç yayınlanmalıdır. Bunun için "Admin Menü " **Projeler** seçeneğini tıklanır ve ilgili proje üzerinde **Yayınla** butonuna basılır. (Bkz. Görsel 1)

Ardından **İş Başlatma** kısmına tıklanır ve **Başlat** seçeneğini kullanarak süreç başlatılır.(Bkz. Görsel 2)

*Görsel 1: Süreç Yayınlama*
![alt text](/TimyaBPM-Documents/surecc5.png)  



*Görsel 2: Süreç Başlatma*
![alt text](/TimyaBPM-Documents/surecc6.png) 






