
# Süreç Oluşturma Adımları


## 1.Süreç Geliştirme

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
## 2.Süreç Aksiyonları
_Süreç aksiyonları, iş süreçlerinin adımlarını ve bu adımlar arasındaki ilişkileri görselleştiren temel bileşenlerdir. Bu adımları temsil etmek için çeşitli semboller kullanılır. Her sembol, iş sürecinin belirli bir aşamasını  ifade eder. Bu sembollerin kapsamlı açıklamaları ve kullanımları, aşağıdaki bölümlerde detaylı olarak ele alınmıştır._

### 2.1. Start Event 

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


### 2.2. Squence Flow 
- **Flow:** Süreç adımları arasındaki akışı ve bağlantıları tanımlar. Ok sembolü ile temsil edilir. Flow aksiyonu eklendiğinde, kullanıcılar için bir buton oluşturulur.

### 2.3. Task 

- **Task:** Belirli bir adımda gerçekleştirilecek işlemleri veya görevleri tanımlar.Kare
sembolü ile temsil edilir.

 - **Başlat** butonunun yanındaki kare işaretine tıklanır. **Flow** ve **Task** kısımları aşağıdaki gibi oluşturulur.



![alt text](/TimyaBPM-Documents/surecg1.png) 

Task aksiyonu için anahtar işaretine tıklanarak **Change Element** seçilir. Bu seçenek, sürecin ihtiyaçlarına uygun görevlerin  belirlenmesini sağlar ve sürecin gereksinimlerine göre yapılandırılır. Örneğin:

-  **User Task:** Kullanıcının   tamamlaması gereken görevleri ifade eder.
-   **Service Task:** Dökuman oluşturma ve DLL kütüphanelerini çalıştırmasını sağlar.



![alt text](/TimyaBPM-Documents/anahtar.png) 



### 2.4. End Event 
 - Süreci sonlandırmak için  görselde gösterilen "Süreç Sonlandırma" aksiyonu  seçilir.

![alt text](/TimyaBPM-Documents/son1.png) 
![alt text](/TimyaBPM-Documents/son2.png) 


### 2.5. Timer Event

- **Boundary Event**  **Task** üzerine sürükleyip bırakın. Daha sonra **Change Type** butonuna tıklayın ve **Timer Boundary Event** seçeneğini seçin.

<div style="display: flex; justify-content: space-around;">
  <img src="/TimyaBPM-Documents/timer.png" alt="Timer Event" width="400" style="margin-right: 20px;"/>
  <img src="/TimyaBPM-Documents/timer2.png" alt="Timer Boundary Event" width="400"/>
</div>





 - **Timer Boundary Event**'ın üzerine tıklayın.Sağ taraftaki **Timer** bölümünde, **Type** olarak **Cycle**'ı seçin.**Value**  kısmında yapılan tanımlama, ISO 8601 yinelenen aralık formatı olarak belirtilen bir döngü olmalıdır .
 Örneğin;
   - **`R5/PT10S`**: Her 10 saniyede bir, toplamda 5 kez tekrarlanır.
   - **`R5/PT5M`**: Her 5 dakikada bir, toplamda 5 kez tekrarlanır.
   - **`R10/PT1H`**: Her 1 saatte bir, toplamda 10 kez tekrarlanır.
   - **`R/P2D`**: Her 2 günde bir tekrarlanır, süresizdir.

   👉 **ISO 8601 hakkında daha fazla bilgi için:** [Camunda Timer Events - Time Cycle](https://docs.camunda.org/manual/latest/reference/bpmn20/events/timer-events/#time-cycle)sayfasını ziyaret edebilirsiniz.


![alt text](/TimyaBPM-Documents/timer3.png) 

---

## 3. Süreci Yayınlama


 - Süreci kullanıma almak için ilk olarak süreç yayınlanmalıdır. Bunun için "Admin Menü " **Projeler** seçeneğini tıklanır ve ilgili proje üzerinde **Yayınla** butonuna basılır. (Bkz. Görsel 1)

Ardından **İş Başlatma** kısmına tıklanır ve **Başlat** seçeneğini kullanarak süreç başlatılır.(Bkz. Görsel 2)

*Görsel 1: Süreç Yayınlama*
![alt text](/TimyaBPM-Documents/surecc5.png)  



*Görsel 2: Süreç Başlatma*
![alt text](/TimyaBPM-Documents/surecc6.png) 






