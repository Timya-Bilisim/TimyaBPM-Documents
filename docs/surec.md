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



