# Bağlantı Kurma Adımları

 - _Bağlantılar, veri alışverişi  sağlamak için kullanılır._ 


![Şekil 2](/TimyaBPM-Documents/baglantii1.png) 

##  Bağlantı Özellikleri

- **Bağlantı Adı**: Bağlantının sistemdeki adıdır.
- **Bağlantı Metni**:  Veritabanına bağlanabilmesi için gereken bilgileri içerir. Veri kaynağına erişirken kullandığı kimlik bilgilerini, sunucu adresi gibi diğer ayarları tanımlar.

**Bağlantı Metni Örneği**


**Örnek**

```json
Server=myServerAddress; Database=myDataBase; User Id=myUsername; Password=myPassword;

```
  ■ **Server=myServerAddress**: Bağlanılacak sunucu adresini belirtir.  
■ **Database=myDataBase**: Erişilecek veritabanının adını gösterir.  
■ **User Id=myUsername**: Veritabanına giriş için kullanılan kullanıcı adıdır.  
■ **Password=myPassword**: Kullanıcının erişim şifresidir.


- **Login Adress**: LDAP sunucusunun IP adresi veya domain adı girilir.**ActiveDirectorySync** bağlantı tipi seçili olduğunda çalışır.
- **Kullanıcı Adı**: LDAP sunucusuna erişim yetkisi olan kullanıcı adıgirilir.**ActiveDirectorySync** bağlantı tipi seçili olduğunda çalışır.

- **LDAP Filtre**:   LDAP filtreleri, verilerde belirli kriterleri kullanarak sadece gerekli bilgileri senkronize etmeyi sağlar.**ActiveDirectorySync** bağlantı tipi seçili olduğunda çalışır.
 - **Secure Socket**: Bağlantının güvenli olup olmadığını belirten seçenekler.**ActiveDirectorySync** bağlantı tipi seçili olduğunda çalışır.
   - **None**: Şifreleme yok, veriler düz metin olarak iletilir.
    - **Secure Sockets Layer**: Veriler SSL (Secure Sockets Layer) üzerinden şifrelenir, daha güvenli bir bağlantı sağlar.
- **Bağlantı Tipi**
  - **Database**:SQL veya diğer veritabanlarına bağlanarak veri yönetimi yapar.
  - **ActiveDirectorySync**: Active Directory ile LDAP protokolü kullanarak senkronizasyon işlemleri yapar.
   

## Bağlantı Tipi: Örnek Kullanım Senaryoları

_Aşağıda farklı bağlantı tiplerinin nasıl yapılandırılacağını gösteren örnekler verilmiştir._


####  Veritabanı Bağlantısı
- **Bağlantı Adı**: Veritabanı_Baglanti
- **Bağlantı Metni**:`Server=myServerAddress; Database=myDataBase; User Id=myUsername; Password=myPassword;


####  Active Directory Bağlantısı
- **Bağlantı Adı**: ADL_AD
- **Login Adress**: LDAP://452.188.1.5
- **Kullanıcı Adı**: bpm
- **Şifre**: ********
- **Bağlantı Tipi**: ActiveDirectorySync
- **LDAP Filtre**: (mail=ali@example.com)


_➜ Bağlantılar tanımlandıktan sonra, bağlantının çalışıp çalışmadığı test butonu ile kontrol edilir._

