# İş Nesnesi Ekleme

 - _İş nesnelerinde bağlantı bilgileri saklanır. Bu bağlantıların nasıl tanımlanacağı ve iş nesnelerinin özellikleri, aşağıda belirtilen ilgili bölümlerde açıklanmıştır. Yeni bir iş nesnesi oluşturmak için, iş nesnesi bölümünden artı işaretine tıklanır_.


### İş Nesnesi Özellikleri




- **ID**: Bu alan, sistemdeki kimlik numarasını gösterir.
- **Adı**: İş nesnesinin adını belirtir.Türkçe karakterler kullanılmaz.
- **Tipi**: İş nesnesinin türünü belirler. İş nesneleri üç türden biri olabilir:
  - **Query**
  - **Table**
  - **Scripted**
- **Bağlantılar**: Bağlantılarda tanımlanan alanları gösterir.
- **Sorgu Metni**:Bu alan, ilgili iş nesnesinin veritabanından veri çekecek sorgusunu içerir.  SQL sorgusu: (Bkz. Görsel 1)

**Örnek** 
```json
select userId, FullName from Users where DepartmentId=@pDepartmentId
```
■ Bu sorgu, Users tablosundan belirtilen DepartmentId'ye sahip kullanıcıların userId ve FullName bilgilerini getirecek.

**Görsel 1** 
![IIS Kurulumu](/TimyaBPM-Documents/nesne43.png)


### Parametreler


_SQL sorgusu parametrik olarak çalışacaksa, `@` işareti ile parametreler eklenir. Daha sonra, parametreler bölümünde bu parametreler tanımlanır._

- **Key:** Sorgu metninde kullanılan parametrenin adı ile aynı olmalıdır.
- **Type:** Parametrenin veri tipi belirlenir.


![IIS Kurulumu](/TimyaBPM-Documents/nesne42.png)

### Columns

_Sorgunun hangi sütunları seçeceğini ve nasıl görüntüleneceğini belirler._
- **Key:** Veritabanındaki sütun adı.
- **Type:** Sütunun veri tipini belirtir .
- **Title:** Kullanıcıya görünen sütun başlığı.
- **Values:** Sütunların işlevselliğini  ve kullanım durumlarını tanımlar.

**Values** seçenekleri:


 **IsValue:** Sütunun veritabanına yazılacak değerini belirtir.

 **IsName:** Sütunun ekrana getireceği değeri belirtir.


![IIS Kurulumu](/TimyaBPM-Documents/nesne41.png)