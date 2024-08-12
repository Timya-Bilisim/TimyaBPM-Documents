# İş Nesnesi Ekleme

İş nesneleri, veritabanı bağlantılarını sağlar. Örneğin, form kısmına departman eklemek için aşağıdaki adımları izlenir:

- Bağlantılar  kısmında **DefaultDatabase** oluşturulmuştur.

 ![Şekil 2](/TimyaBPM-Documents/bağlantıı1.png)

   
##  Departman Ekleme

1. **Admin Menü Kısmı:**
   - Admin menü kısmından **Ayarlar** bölümüne gidilir.
   - Ardından, **Departman** kısmına gidilir.
   - **Yeni** butonuna basarak girilmesi gereken departmanlar eklenir.


 ![Şekil 2](/TimyaBPM-Documents/iş1.png)


2. **Kullanıcılar:**
   - Kullanıcılar kısmından forma eklenen kısımlar ve eklenen seçenekler görüntülenir.
   - Atanılması istenilen kullanıcı seçilir.

![Şekil 2](/TimyaBPM-Documents/iş8.png)

3. **Database Bağlantısı:**
   - Form kısmına departman eklemek için veritabanında **Departman** tablosuna gidilir.
   - Aşağıdaki kodlar, database bağlantısını eklemek için iş nesnelerinde sorgu metni kısmına  eklenir:
     ```sql
     SELECT TOP (1000) [DepartmentId], [DepartmentName]
     FROM [Departments]
     ```

 ![Şekil 2](/TimyaBPM-Documents/iş2.png)
4. **Form Kısmına Ekleme:**
   - Form kısmına gelerek **Departman** kısmı eklenir.
   - Seçenekler kısmı manuel değil, **Data Source** tıklanarak bilgiler veritabanından alınır.
  
 ![Şekil 2](/TimyaBPM-Documents/iş3.png)
  ![Şekil 2](/TimyaBPM-Documents/iş4.png)