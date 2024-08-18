# Roller

1- "To-Do List" kısmında roller eklenmelidir . Bunun için ilk adım **Veri Tanımlarında** gerekli bilgiler kaydedilmelidir.

![Şekil 2](/TimyaBPM-Documents/roller8.png)

![Şekil 2](/TimyaBPM-Documents/roller2.png)

2- İkinci adım ise,**Roller** kısmından yeni dinamik roller eklenir.  ID, alan ve harita kısmı doldurulur. Harita kısmında, veri tanımlarında kaydedilen bilgilere göre aşağıdaki gibi yazılır.

![Şekil 2](/TimyaBPM-Documents/roller1.png) 

```json
object ilgiliKisi = getVal("GelenEvrak", "IlgiliKisi");
if (ilgiliKisi == null)
    return System.Convert.ToInt32(ilgiliKisi);
else
    return 1;
```

 

Daha sonra süreç kısmındaki "To-Do List" bölümünde, roller kısmında tanımlanan kısım seçilir ve "Form List" kısmından oluşturulan form seçilir.


![Şekil 2](/TimyaBPM-Documents/roller3.png) 
