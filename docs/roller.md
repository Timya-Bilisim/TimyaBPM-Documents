# Roller Yönetimi ve Yapılandırılması

 _Roller, iki ana kategoriye ayrılır: **Dinamik** ve **Statik**. Her iki kategori için rollerin nasıl ekleneceği ve tanımlanacağı detaylı olarak açıklanmıştır:_


## Dinamik Roller


 - _Dinamik roller, süreçlere  bağlı olarak atanır. Bu atama, süreç içindeki  koşullara bağlı olarak değişir._



➜ _Dinamik roller **Roller** bölümünden eklenir. Aşağıdaki alanların doldurulması gerekmektedir:_


- **Adı**: Rolün sistemde gözüken adıdır.
- **ID**: Sistem tarafından otomatik olarak atanır.
- **Harita**: Bu alanda, veri tanımlarına uygun bir kod yapısı yazılır. Yani, rolün hangi koşullara göre ve kime atanacağını belirleyen dinamik bir formül tanımlanır. (Bkz. Görsel 2)



**Görsel 2**

**Örnek**:
![alt text](/TimyaBPM-Documents/roller1.png)

```json
object ilgiliKisi = getVal("GelenEvrak", "IlgiliKisi");
if (ilgiliKisi == null)
    return System.Convert.ToInt32(ilgiliKisi);
else
    return 1;
```
■ Formülde, "GelenEvrak" tablosundan alınan "İlgiliKisi" bilgisi kullanılarak dinamik bir atama yapılır. Eğer "İlgiliKisi" bilgisi mevcut değilse, varsayılan olarak 1 değeri döndürülür. Bu değer, admin kullanıcısını temsil eder. Aksi takdirde, "İlgiliKisi" değeri döndürülür.


Görsel 3'te,  "ilgiliKisi" rolünün nasıl seçildiği gösterilmiştir.

**Görsel3** 
![alt text](/TimyaBPM-Documents/roller3.png)


##  Statik Roller

 - _Statik roller, belirli  görevler için sabit olarak atanmış rollerdir._

Statik roller, **Admin menüsü** üzerinden **Ayarlar** kısmından seçilerek tanımlanır. Yeni bir rol eklemek için şu adımlar izlenir:

1. **Yeni Rol Ekle** butonuna tıklanır.
2. Rolün sistemde gözükecek **Adı** girilir.
3. **ID** kısmı sistem tarafından otomatik olarak atanır.
4. **Kaydet** butonuna basılır.


![alt text](/TimyaBPM-Documents/sr1.png) 
![alt text](/TimyaBPM-Documents/sr2.png) 

- Statik roller, **Kullanıcılar** bölümünde listelenir. Herhangi bir role tıkladığında, seçilen  rol için gerekli tanımlamalar yapılır.



![alt text](/TimyaBPM-Documents/sr6.png) 
![alt text](/TimyaBPM-Documents/sr7.png) 