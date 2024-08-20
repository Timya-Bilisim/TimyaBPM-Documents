# Roller Yönetimi ve Yapılandırılması

 Roller, iki ana kategoriye ayrılır: **Dinamik** ve **Statik**. Her iki kategori için rollerin nasıl ekleneceği ve tanımlanacağı detaylı olarak açıklanmıştır:


## Dinamik Roller


> - Dinamik roller, süreçlere  bağlı olarak atanır ve bu nedenle esneklik sağlar. Bu atama, süreç içindeki  koşullara bağlı olarak değişir.

➜ _Veri tanımlarında dinamik olarak atanacak rol için gerekli olan bilginin nerede tutulacağını belirlenmesi gerekmektedir.Bu,rolün dinamik olarak atanmasını sağlar.Örneğin, Görsel 1'de "ilgiliKisi" adlı veri tanımı gösterilmiştir._



**Görsel1** 
![alt text](/TimyaBPM-Documents/roller2.png) 

Veri tanımı yapıldıktan sonra, dinamik rolün tanımlanması gerekir.


➜ _Dinamik roller **Roller** bölümünden eklenir. Aşağıdaki alanların doldurulması gerekmektedir:_


- **Adı**: Rolün sistemde gözüken adıdır.
- **ID**: Sistem tarafından otomatik olarak atanır.
- **Harita**: Bu alanda, veri tanımlarına uygun bir kod yapısı yazılır. Yani, rolün hangi koşullara göre ve kime atanacağını belirleyen dinamik bir formül tanımlanır. (Bkz. Görsel 2)



**Görsel 2**
![alt text](/TimyaBPM-Documents/roller1.png)

```json
object ilgiliKisi = getVal("GelenEvrak", "IlgiliKisi");
if (ilgiliKisi == null)
    return System.Convert.ToInt32(ilgiliKisi);
else
    return 1;
```
■ Formülde, "GelenEvrak" tablosundan "İlgiliKisi" bilgisi alınarak dinamik bir atama yapılır. Eğer "İlgiliKisi" bilgisi mevcut değilse, varsayılan olarak 1 değeri döndürülür. Aksi takdirde, "İlgiliKisi" değeri döndürülür.



➜ _Tanımlanan rol, iş sürecinde belirli adımlarda otomatik olarak atanır._




Görsel 3'te, "gelenEvrakSureci" adlı bir süreçte "ilgiliKisi" rolü seçilmiştir. Bu, dinamik olarak tanımlanan "ilgiliKisi" rolünün, sürecin belirli bir adımında otomatik olarak atanmasını sağlar.

**Görsel3** 
![alt text](/TimyaBPM-Documents/roller3.png)


##  Statik Roller

> - Statik roller, belirli  görevler için sabit olarak atanmış rollerdir.

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