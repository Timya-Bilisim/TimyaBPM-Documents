# Roller

**Roller** kısmından yeni dinamik roller eklemektir. Bu aşamada, **ID**, **alan** ve **harita** kısımları doldurulur. Harita kısmında, veri tanımlarında kaydedilen bilgilere göre aşağıdaki gibi bir kod yazılır:

![alt text](/TimyaBPM-Documents/roller1.png) 
   ```csharp
   object ilgiliKisi = getVal("GelenEvrak", "IlgiliKisi");
   if (ilgiliKisi == null)
       return System.Convert.ToInt32(ilgiliKisi);
   else
       return 1;
Daha sonra, süreç kısmındaki "To-Do List" bölümünde roller kısmında tanımlanan kısım seçilir ve "Form List" kısmından oluşturulan form seçilir.