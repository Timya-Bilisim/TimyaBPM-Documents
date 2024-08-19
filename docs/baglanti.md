# Bağlantılar

Bağlantılar,   veri alışverişi  sağlamak için kullanılır.  


![Şekil 2](/TimyaBPM-Documents/baglantii1.png) 
 1- **Bağlantı Özellikleri**

- **Bağlantı Adı**: Bağlantının sistemdeki adıdır.
- **Bağlantı Metni**:  Veritabanına bağlanabilmesi için gereken bilgileri içerir. Bir bağlantı metni,  veri kaynağına erişirken kullandığı kimlik bilgilerini, sunucu adresini ve diğer ayarları tanımlar.

**Bağlantı Metni Örneği**



```json
Server=myServerAddress; Database=myDataBase; User Id=myUsername; Password=myPassword;

```

Bu örnekte:
- `Server=myServerAddress`: Bağlanılacak sunucu.
- `Database=myDataBase`: Hedef veritabanı.
- `User Id=myUsername`: Kullanıcı adı.
- `Password=myPassword`: Kullanıcının erişim şifresi.

- **Login Adress**: LDAP sunucusunun IP adresi veya domain adı girilir.
- **Kullanıcı Adı**: LDAP sunucusuna erişim yetkisi olan kullanıcı adı girilir.
- **LDAP Filtre**:   LDAP filtreleri, verilerde belirli kriterleri kullanarak sadece gerekli bilgileri senkronize etmeyi sağlar.
 - **Secure Socket**: Bağlantının güvenli olup olmadığını belirten seçenekler.
   - **None**: Şifreleme yok, veriler düz metin olarak iletilir.
    - **SSL**: Veriler SSL (Secure Sockets Layer) üzerinden şifrelenir, daha güvenli bir bağlantı sağlar.
- **Bağlantı Tipi**
  - **Database**:SQL veya diğer veritabanlarına bağlanarak veri yönetimi yapar.
  - **ActiveDirectorySync**: Active Directory ile LDAP protokolü kullanarak senkronizasyon işlemleri yapar.
   

**Bağlantı Örnek Kullanım Senaryoları**

####  Veritabanı Bağlantısı
- **Bağlantı Adı**: Veritabanı_Baglanti
- **Bağlantı Metni**:`Server=myServerAddress; Database=myDataBase; User Id=myUsername; Password=myPassword;
- **Login Address**: Admin
- **Bağlantı Tipi**: Database
- **Şifre**: ********
- **Test**:Kaydedilir ve ardından teste tıklanır.

####  Active Directory Bağlantısı
- **Bağlantı Adı**: ADL_AD
- **Login Adress**: LDAP://452.188.1.5
- **Kullanıcı Adı**: bpm
- **Şifre**: ********
- **Bağlantı Tipi**: ActiveDirectorySync
- **LDAP Filtre**: (mail=ali@example.com)
- **Test**: Kaydedilir ve ardından teste tıklanır.


