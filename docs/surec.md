
# Süreç Oluşturma Adımları


## 1.1. Süreç Geliştirme

 - _Yeni bir süreç geliştirmek için, süreç bölümünde artı işaretine tıklanır ve **"New Map"** seçeneği ile yeni bir süreç haritası oluşturulur. Süreç haritası üzerinde boş bir alana tıklandığında, süreç için eklenmesi gereken alanlar sağ tarafta görüntülenir._



➜ **"Process General"** kısmında **Name** alanına sürecin kullanıcılara gözükecek ismi girilir. **ID** kısmı sistemde saklanacak olan isimdir. Boşluk ve Türkçe karakterler kullanılmaz.
**Üç nokta** kısmından kaydedilir.

![alt text](/TimyaBPM-Documents/surec1.png) 

➜ **Properties** kısmında, **Accessing Roles** bölümünde, sürece erişebilecek roller seçilir (roller ayrıca açıklanacaktır).

![alt text](/TimyaBPM-Documents/surecc2.png) 

---
➜ **Properties** kısmında, **Number Prefix** bölümünde,  belge numaralandırması yapılır .
Örnek belge numaralandırmaları aşağıdaki gibi olabilir:

`GLN-{yyyy}-{ID:000}{IDTABLE:GLOBALID}`

 **GLN:**
- Gelen Evrak belgesinin adıdır.

**{yyyy}:** 
- Belgenin yılını belirtir.

**{ID:000}:** 
- Belgeye verilen sıra numarasını belirtir. Basamak sayısı kadar sıfır eklenir.

**{IDTABLE:GLOBALID}:** 
- Sıralı numara verecek olan database tablosunu belirtir.

![alt text](/TimyaBPM-Documents/sıralama.png) 
---

---
### Süreç Aksiyonları
_Süreç aksiyonları, iş süreçlerinin adımlarını ve bu adımlar arasındaki ilişkileri görselleştiren temel bileşenlerdir. Bu adımları temsil etmek için çeşitli semboller kullanılır. Her sembol, iş sürecinin belirli bir aşamasını  ifade eder. Bu sembollerin kapsamlı açıklamaları ve kullanımları, aşağıdaki bölümlerde detaylı olarak ele alınmıştır._

#### Başlat Aksiyonu

 - Yuvarlak (çember) sembollerle gösterilir.Süreç haritasındaki yuvarlak şekiller, süreç başlatma aksiyonlarını ifade eder. Bu aksiyona tıklanarak sağ tarafta görüntülenecek alanlar aşağıda belirtildiği şekilde tanımlanmalıdır.

- **Name:** Kullanıcının süreci başlatmak için tıklaması gereken butonun adıdır.
.
- **ID:** Sistemde saklanacak olan isimdir.Boşluk ve Türkçe karakterler kullanılmaz.

![alt text](/TimyaBPM-Documents/surecc3.png) 


➜ **Properties** bölümü aşağıdaki şekilde tanımlanır:


- **Available to Roles:** Süreci başlatabilecek roller seçilir.
- **To Do List:** Süreç başladıktan sonra iş atamasının ilk yapılacağı rolü belirtir.Mouse ile **Roller** kısmından sürüklenip **Seçilen Roller** kısmına bırakılarak atanır.

 ![alt text](/TimyaBPM-Documents/roller8.png) 

- **Form List:** Süreç başlatıldığında kullanılacak form seçilir.


![alt text](/TimyaBPM-Documents/surecc4.png) 


#### Flow ve Task Aksiyonu 

- **Flow:** Süreç adımları arasındaki akışı ve bağlantıları tanımlar. Ok sembolü ile temsil edilir. Flow aksiyonu eklendiğinde, kullanıcılar için bir buton oluşturulur. Örneğin, "start" ve "user task" adımlarından sonra tanımlanan flow'lar, kullanıcıların tıklayabileceği bir buton ile gösterilen aksiyonları ifade eder.

- **Task:** Belirli bir adımda gerçekleştirilecek işlemleri veya görevleri tanımlar.Kare
sembolü ile temsil edilir.

 - **Başlat** butonunun yanındaki kare işaretine tıklanır. **Flow** ve **Task** kısımları aşağıdaki gibi oluşturulur.



![alt text](/TimyaBPM-Documents/surecg1.png) 

Task aksiyonu için anahtar işaretine tıklanarak **Change Element** seçilir. Bu seçenek, sürecin ihtiyaçlarına uygun görevlerin  belirlenmesini sağlar ve sürecin gereksinimlerine göre yapılandırılır. Örneğin:

- **User Task:** Kullanıcının   tamamlaması gereken görevleri ifade eder.
- **Service Task:** Dökuman oluşturma ve DLL kütüphanelerini çalıştırmasını sağlar.



![alt text](/TimyaBPM-Documents/anahtar.png) 



 #### Süreci Sonlandırma Aksiyonu 
 - Süreci sonlandırmak için  görselde gösterilen "Süreç Sonlandırma" aksiyonu  seçilir.

![alt text](/TimyaBPM-Documents/son1.png) 
![alt text](/TimyaBPM-Documents/son2.png) 

---

## 1.2. Süreci Yayınlama


 - Süreci kullanıma almak için ilk olarak süreç yayınlanmalıdır. Bunun için "Admin Menü " **Projeler** seçeneğini tıklanır ve ilgili proje üzerinde **Yayınla** butonuna basılır. (Bkz. Görsel 1)

Ardından **İş Başlatma** kısmına tıklanır ve **Başlat** seçeneğini kullanarak süreç başlatılır.(Bkz. Görsel 2)

*Görsel 1: Süreç Yayınlama*
![alt text](/TimyaBPM-Documents/surecc5.png)  



*Görsel 2: Süreç Başlatma*
![alt text](/TimyaBPM-Documents/surecc6.png) 






