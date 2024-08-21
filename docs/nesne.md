# İş Nesnesi Ekleme

> - İş nesnelerinde bağlantı bilgileri saklanır. Bu bağlantıların nasıl tanımlanacağı ve iş nesnelerinin özellikleri, aşağıda belirtilen ilgili bölümlerde açıklanmıştır. Yeni bir iş nesnesi oluşturmak için, iş nesnesi bölümünden artı işaretine tıklanır.


### İş Nesnesi Özellikleri




- **ID**: Bu alan, iş nesnesinin benzersiz kimlik numarasını gösterir. Sistemde iş nesnesini tanımlamak için kullanılır.
- **Adı**: İş nesnesinin adını belirtir.Türkçe karakterler kullanılmaz.
- **Tipi**: İş nesnesinin türünü belirler. İş nesneleri üç türden biri olabilir:
  - **Query**
  - **Table**
  - **Scripted**
- **Bağlantılar**: Bağlantılarda tanımlanan alanları gösterir.
- **Sorgu Metni**:Bu alan, ilgili iş nesnesinin veritabanından veri çekecek sorgusunu içerir.  SQL sorgusu: (Bkz. Görsel 1)
```json
select userId, FullName from Users where DepartmentId=@pDepartmentId
```
■ Bu sorgu, Users tablosundan belirtilen DepartmentId'ye sahip kullanıcıların userId ve FullName bilgilerini getirecek.

**Görsel 1**
![IIS Kurulumu](/TimyaBPM-Documents/nesne43.png)


### Parametreler


SQL sorgusu parametrik olarak çalışacaksa, `@` işareti ile parametreler eklenir. Daha sonra, parametreler bölümünde bu parametreler tanımlanır.Bu işlem,  ekleme ve çıkarma işlemleriyle gerçekleştirilir.

- **Key:** Sorgu metninde kullanılan parametrenin adı ile aynı olmalıdır.
- **Type:** Parametrenin veri tipi belirlenir.


![IIS Kurulumu](/TimyaBPM-Documents/nesne42.png)

### Columns

Sorgunun hangi sütunları seçeceğini ve nasıl görüntüleneceğini belirler.Bu işlem,  ekleme ve çıkarma işlemleriyle gerçekleştirilir.
- **Key:** Veritabanındaki sütun adı.
- **Type:** Sütunun veri tipini belirtir .
- **Title:** Kullanıcıya görünen sütun başlığı.
- **Values:** Sütunların işlevselliğini  ve kullanım durumlarını tanımlar.

**Values** seçenekleri:

1. **null:** Sütunun boş (null) değer almasını ifade eder.

2. **IsValue:** Sütunun veritabanına yazılacak değerini belirtir.

3. **IsName:** Sütunun **başlık** olarak görünmesini sağlar.


![IIS Kurulumu](/TimyaBPM-Documents/nesne41.png)