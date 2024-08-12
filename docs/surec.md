# Süreç Oluşturma Adımları

## 1.1. Süreç Oluşturma

Yeni bir süreç oluşturmak için, süreç bölümünde artı işaretine tıklanır ve "New Map" seçeneği ile yeni bir süreç başlatılır. İlk olarak, "Process General" kısmında **Name** alanına sürece bir isim verilir. **ID** kısmı ise sistemde saklanacak olan isimdir.
![alt text](/TimyaBPM-Documents/surecc1.png) 

Süreç numaralandırması yapmak için **Properties** bölümüne gidilir ve **Number Prefix** kısmına aşağıdaki kodu yazılır:

`GLN-{yyyy} - {ID:000} {IDTABLE:GLOBALID}`

**Properties** kısmında **Accessing Roles** seçimini yaparak sürece kimlerin erişebileceği belirlenir.


![alt text](/TimyaBPM-Documents/surecc2.png) 



## 1.2. Süreci Başlatma

Süreci başlatmak için sistemdeki yuvarlak (süreci başlatma ) işaretine tıklanır. **Name** ve **ID** alanlarına süreç için uygun isimleri girilir. Daha sonra **Properties** kısmını aşağıdaki gibi doldurulur:

![alt text](/TimyaBPM-Documents/surecc3.png) 

- **Available to Roles:** Sürece erişebilecek rolleri seçilir.
- **To Do List:** Süreci başlatacak ve yönetecek kişiyi seçilir.
- **Form List:** Süreç başlatıldığında kullanılacak formu seçilir.


![alt text](/TimyaBPM-Documents/surecc4.png) 

## 1.3. Süreci Yayınlama

Süreci kullanıma almak için önce sureç yayınlanmalıdır. Bunun için "Admin Menü " **Projeler** seçeneğini tıklanır ve ilgili proje üzerinde **Yayınla** butonuna basılır. (Resim1)

Ardından "İş Başlatma" kısmına tıklanır ve **Başlat** seçeneğini kullanarak süreç başlatılır.(Resim2)

*Resim 1: Süreç Yayınlama*
![Şekil 1](/TimyaBPM-Documents/surecc5.png)  



*Resim 2: Süreç Başlatma*
![Şekil 2](/TimyaBPM-Documents/surecc6.png) 



## 1.4. Süreci Geliştirme

Süreç kısmında,  "Başlat" butonunun yanında çıkan kare işaretine tıklanır. Gelen ekranda çıkan her şekle tıklanarak gerekli isimler girilir.

![Şekil 2](/TimyaBPM-Documents/surecg1.png) 

Daha sonra eklenen kısmı sisteme eklenir. Bunun için  "Anahtar"  seçilerek kullanıcı tanımlanır.
![Şekil 2](/TimyaBPM-Documents/surec2.png) 

### Roller

"To-Do List" kısmında roller eklenmelidir . Bunun için  "Roller" kısmından yeni dinamik roller eklenir.  ID, alan ve harita kısmı doldurulur. Harita kısmında, veri tanımlarında kaydedilen bilgilere göre aşağıdaki gibi yazılır.

![Şekil 2](/TimyaBPM-Documents/roller1.png) 
![Şekil 2](/TimyaBPM-Documents/roller2.png) 

Daha sonra süreç kısmındaki "To-Do List" bölümünde, roller kısmında tanımlanan kısım seçilir ve "Form List" kısmından oluşturulan form seçilir.


![Şekil 2](/TimyaBPM-Documents/roller3.png) 

### Süreci Sonlandırma
Süreç işlemini sonlandırmak için tekrar işaret üzerine tıklanır ve resimde gösterilen imge seçilerek isimler girilir, gerekli alanlar doldurulur.

![Şekil 2](/TimyaBPM-Documents/son1.png) 
![Şekil 2](/TimyaBPM-Documents/son2.png) 


### Raporlar ve Listeler

İş başlat kısmında "Sonlandır" butonu çıkar. İşi sonlandırdığımızda rapor etmemiz gerekir. Bunun için iş nesnelerinde "Biten İşler" adında bir nesne açılır.

![Şekil 2](/TimyaBPM-Documents/son3.png) 
![Şekil 2](/TimyaBPM-Documents/rapor.png) 

Daha sonra "Listeler" kısmından rapor oluşturulur. Bilgiler aşağıdaki resimde gösterildiği gibi girilmelidir.

![Şekil 2](/TimyaBPM-Documents/rapor2.png) 

Rapor kısmında gözükmesi gereken bilgiler aşağıdaki gibidir.

![Şekil 2](/TimyaBPM-Documents/rapor3.png) 