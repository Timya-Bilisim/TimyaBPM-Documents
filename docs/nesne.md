# İş Nesnesi Ekleme

### İş Nesnesi Özellikleri

 İş nesnelerinde bağlantı bilgileri saklanır.

![IIS Kurulumu](/TimyaBPM-Documents/nesne43.png)

- **ID**: Bu alan, iş nesnesinin benzersiz kimlik numarasını gösterir. Sistemde iş nesnesini tanımlamak için kullanılır.
- **Adı**: İş nesnesinin adını belirtir.
- **Tipi**: İş nesnesinin türünü belirler. İş nesneleri üç türden biri olabilir:
  - **Query**
  - **Table**
  - **Scripted**
- **Bağlantılar**: Bağlantılarda tanımlanan verileri gösterir.


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