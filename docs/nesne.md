# İş Nesnesi Ekleme

İş nesneleri, veritabanı bağlantılarını yönetir ve bu bağlantıları kullanarak veritabanı ile etkileşim sağlar. Örneğin, bir formun departman bilgilerini eklemek için iş nesnelerinin kullanımı şu şekilde gerçekleşir: 

- Bağlantılar  kısmında **DefaultDatabase** oluşturulmuştur.

 ![Şekil 2](/TimyaBPM-Documents/bağlantıı1.png)

   
##  Departman Ekleme

1. **Admin Menü Kısmı:**
   - Admin menü kısmından **Ayarlar** bölümüne gidilir.
   - Ardından, **Departman** kısmına gidilir.
   - **Yeni** butonuna basarak girilmesi gereken departmanlar eklenir.


 ![Şekil 2](/TimyaBPM-Documents/iş1.png)


2. **Kullanıcılar:**
   
   - Atanılması istenilen kullanıcı bilgileri seçilir.

![Şekil 2](/TimyaBPM-Documents/iş8.png)

3. **Database Bağlantısı:**
   - Form kısmına departman eklemek için veritabanında **Departman** tablosuna gidilir.
   - Aşağıdaki kodlar, database bağlantısını eklemek için iş nesnelerinde sorgu metni kısmına  eklenir:
     ```sql
     SELECT TOP (1000) [DepartmentId],[DepartmentName]
     FROM [Departments]
     ```

![Şekil 2](/TimyaBPM-Documents/iş2.png)
4. **Form Kısmına Ekleme:**
   - Form kısmın da **Departman** kısmı eklenir.
   - Seçenekler kısmı manuel değil, **Data Source** tıklanarak bilgiler veritabanından alınır.
  
 ![Şekil 2](/TimyaBPM-Documents/iş3.png)
  ![Şekil 2](/TimyaBPM-Documents/iş4.png)