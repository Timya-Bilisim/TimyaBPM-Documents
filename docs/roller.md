# Roller Yönetimi ve Yapılandırılması

Roller, iki temel türde yönetilebilir ve yapılandırılabilir: **dinamik** ve **statik**. Aşağıda her iki tür rolün nasıl ekleneceği ve tanımlanacağına dair detaylı bilgiler bulunmaktadır.

## Dinamik Roller


Dinamik roller **Roller** kısmından eklenir. Bu aşamada, aşağıdaki kısımlar doldurulmalıdır:

- **Adı**: Rolün sistemde gözüken adıdır.
- **Harita**: Veri tanımlarına göre uygun kod yapısı yazılır.
- **ID**: Sistem tarafından otomatik olarak atanır.

**Harita** kısmında, veri tanımlarına göre aşağıdaki gibi kod yazılabilir:


![XX](/TimyaBPM-Documents/roller1.png)

```json
object ilgiliKisi = getVal("GelenEvrak", "IlgiliKisi");
if (ilgiliKisi == null)
    return System.Convert.ToInt32(ilgiliKisi);
else
    return 1;
```

##  Statik Roller



Statik roller, **Admin menüsü** üzerinden **Ayarlar** kısmından seçilerek tanımlanır. Yeni bir rol eklemek için şu adımlar izlenir:

1. **Yeni Rol Ekle** butonuna tıklanır.
2. Rolün sistemde gözükecek **Adı** girilir.
3. **ID** kısmı sistem tarafından otomatik olarak atanır.
4. **Kaydet** butonuna basılır.


![alt text](/TimyaBPM-Documents/sr1.png) 
![alt text](/TimyaBPM-Documents/sr2.png) 