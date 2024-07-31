# Timya/BPM Web Konfigurasyon



`TimyaBPMWeb.zip` dosyası, IIS varsayılan kök dizinine (varsayılan olarak `c:\inetpup\wwwroot`) ya da kurulumu yapılacak başka bir yere çıkarılmalıdır. Dizinde bulunan `appsettings.json` dosyası bir metin editörü ile açılarak konfigurasyon ayarları yapılır ve kaydedilir.

![IIS Kurulumu](/images/web.png)

Aşağıdaki bağlantı metnindeki ** görülen yerlere veritabanı sunucusu erişim bilgileri yazılmalıdır (yalnızca SQL Server ile çalışır).

```json

"ConnectionStrings": {
    "DefaultConnection": "Data Source=**; User ID=**; Password=**; Initial Catalog=**; TrustServerCertificate=True"
}

```