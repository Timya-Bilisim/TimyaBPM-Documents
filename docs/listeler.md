# Listeler

> -_Tanımlanan iş nesnelerinin raporda görünmesini sağlamak için listeler oluşturulmalıdır._

> -_Listelerin nasıl oluşturulduğu, örnek bir iş nesnesi üzerinden detaylıca açıklanmış ve aralarındaki bağlantılar gösterilmiştir._


---
### Örnek İş Nesnesi


![Şekil 2](/TimyaBPM-Documents/rapor.png) 
---

İş nesnesinin verilerini listelemek için kullanılan SQL sorgusu örneği: 
```json
select ProcessId, m.Title MapName, ProcessName, p.Title, StageCaption, CreatedTime, UpdatedTime, DoubleField1, StringField1, StringField2 
from Processes p 
inner join Maps m on m.Name = p.MapName 
where p.Deleted <> 1 and p.Archived = 1
```
### Listenin Tanımlanması

> -Listeler, sol kısımda yer alan **Listeler** bölümünden artı işaretine tıklanarak oluşturulur.

> -**CustomList** kısmında aşağıdaki alanlar doldurulur:

- **Adı:** Listenin sistemde görünen ismidir.
- **İş Nesnesi:** Sistemde daha önce oluşturulmuş bir iş nesnesi seçilir.
- **Rol:** Bu alanda, raporu kimlerin görebileceği seçilir.
- **Kaydet:** Tüm alanlar doldurulduktan sonra Kaydet butonuna basılır.

![Şekil 2](/TimyaBPM-Documents/liste65.png) 
----
### Kolonlar

Kaydetme işlemi sonrası, raporda gösterilecek sütunlar aşağıda listelenir. Bu sütunlar, iş nesnesinden alınan verilere dayalı olarak yapılandırılır. Sütunların eklenmesi veya çıkarılması için **Ekle** ve **Çıkar** butonları kullanılır.

![Şekil 2](/TimyaBPM-Documents/liste100.png) 
----
Doldurlması gereken alanlar.
- **ID:** Her sütun için benzersiz bir kimlik numarası.
- **Kolon Adı (Source Column Name):** Verinin alındığı kaynağın kolon adını ifade eder.
- **Kolon Görünen İsim:** Tabloda bu kolonun kullanıcıya nasıl görüneceğini belirler.
- **Kaynak Kolon Adı (Source Column):** Verinin hangi kaynaktan alındığını gösterir.Kolon Adı ile aynıdır.
- **Sıralı mı?:** İlgili sütunun sıralanabilir olup olmadığını belirler. Evet/Hayır olarak işaretlenir.
- **Tip (Type):** Verinin tipini belirler.

Yukarıda tanımlanan iş nesnesine göre oluşturulan **Liste**. (Bkz.Liste Örnek)

---
**Liste Örnek**
![Şekil 2](/TimyaBPM-Documents/rapor2.png) 
---

---
Rapor kısmında gözükmesi gereken bilgiler aşağıdaki gibidir.

![Şekil 2](/TimyaBPM-Documents/rapor3.png) 
---