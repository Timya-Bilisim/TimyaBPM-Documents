# Yeni Database Kurulumu

Veritabanına tam erişim izni verilmiş bir kullanıcı için `appsettings.json` dosyasında aşağıdaki ayarlar yapılmalıdır:

Veritabanına tam erişim izni verilmiş bir kullanıcı için `appsettings.json` dosyasında aşağıdaki ayarlar yapılmalıdır:

```json

{
  "ConnectionStrings": {
    "DefaultConnection": "Server=<server_adı>;Database=<yok_olan_veritabanı_adı>;Trusted_Connection=True;MultipleActiveResultSets=true"
  }
}

```