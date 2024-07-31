# Database Bağlantı Metni

Aşağıda görülen bağlantı metnindeki ** görülen yerlere veritabanı sunucusu erişim bilgileri yazılır. `Initial Catalog=` kısmına veritabanı adı yazılır. (Yalnızca SQL Server ile çalışır.)


```json
{
"ConnectionStrings": {
"DefaultConnection": "Data Source=<veri_kaynağı>; User ID=<kullanıcı_adı>; Password=<şifre>; Initial Catalog=<başlangıç_kataloğu>; TrustServerCertificate=True"
}
}
```