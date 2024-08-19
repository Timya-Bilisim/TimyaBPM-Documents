# Süreç Oluşturma Adımları

## 1.1. Süreç Geliştirme

Yeni bir süreç geliştirmek için, süreç bölümünde artı işaretine tıklanır ve **"New Map"** seçeneği ile yeni bir süreç haritası oluşturulur. Süreç haritası üzerinde boş bir alana tıklandığında, süreç özelliklerinin değiştirileceği kısım sağ tarafta görünür.



 **"Process General"** kısmında **Name** alanına sürecin kullanıcılara gözükecek isim verilir. **ID** kısmı ise sistemde saklanacak olan isimdir. Bu alanda boşluk ve Türkçe karakterler kullanılmaz.


![alt text](/TimyaBPM-Documents/surecc1.png) 

**Properties** kısmında, **Accessing Roles** bölümünde, sürece erişebilecek roller seçilir (roller ayrıca açıklanacaktır).

![alt text](/TimyaBPM-Documents/surecc2.png) 


Süreç numaralandırması yapmak için **Properties** bölümün **Number Prefix** kısmına aşağıdaki kod yazılır:



`GLN-{yyyy} - {ID:000} {IDTABLE:GLOBALID}`

1. **Yıl Bilgisi:** `GLN-{yyyy}`

   
2. **Sıra Numarası:** `{ID:000}`
   - Belgeye verilen sıra numarasını belirtir.
   
3. **Tablo Numarası:** `{IDTABLE:GLOBALID}`
   - Numaralandırmanın yapılacağı tabloyu gösterir. `GLOBALID` ifadesinin önüne tablo adı eklenir.  Aynı ve farklı tablolara göre numaralandırma farklı olacaktır: 

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



### Süreç Aksiyonları


#### Başlat
Süreç haritasındaki   yuvarlak şekiller süreç başlatma aksiyonlarını ifade eder işaretine tıklanır. **Name** kısmı kullanıcının süreci başlatmak için tıklayacağı butonun ismidir . **ID** kısmı ise sistemde saklanacak olan isimdir.  
![alt text](/TimyaBPM-Documents/surecc3.png) 


**Properties** kısmı aşağıdaki gibi doldurulur:

- **Available to Roles:** Sürece başlatabilecek rolleri seçilir.
- **To Do List:** Süreç başladıktan iş atamasının ilk atanacağı rolü belirtir.Mouse ile **Roller** kısmından çekilip **Seçilen Roller** kısmına bıraklır.

 ![alt text](/TimyaBPM-Documents/roller8.png) 

- **Form List:** Süreç başlatıldığında kullanılacak formu seçilir.


![alt text](/TimyaBPM-Documents/surecc4.png) 


#### Flow ve Aksiyon
 **Başlat** butonunun yanında çıkan kare işaretine tıklanır. **Flow** ve **Aksiyon** kısımları aşağıdaki gibi oluştulur.

![Şekil 2](/TimyaBPM-Documents/surecg1.png) 

 Aksiyon event için **Change Element** seçilir.
![Şekil 2](/TimyaBPM-Documents/anahtar.png) 



 #### Süreci Sonlandırma
Süreci sonlandırmak için resimde gösterilen süreç sonlandrıma event'i  seçilir.

![Şekil 2](/TimyaBPM-Documents/son1.png) 
![Şekil 2](/TimyaBPM-Documents/son2.png) 


## 1.2. Süreci Yayınlama

Süreci kullanıma almak için önce sureç yayınlanmalıdır. Bunun için "Admin Menü " **Projeler** seçeneğini tıklanır ve ilgili proje üzerinde **Yayınla** butonuna basılır. (Resim1)

Ardından **İş Başlatma** kısmına tıklanır ve **Başlat** seçeneğini kullanarak süreç başlatılır.(Resim2)

*Resim 1: Süreç Yayınlama*
![Şekil 1](/TimyaBPM-Documents/surecc5.png)  



*Resim 2: Süreç Başlatma*
![Şekil 2](/TimyaBPM-Documents/surecc6.png) 






