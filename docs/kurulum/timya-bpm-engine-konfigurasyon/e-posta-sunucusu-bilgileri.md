# E-Posta Sunucusu Bilgileri

Aşağıdaki şekilde görünen kısım email gönderim ayarlarının yapılacağı yerdir. Alanların açıklamaları aşağıda gösterilmiştir.


```json
{
"Email": {
"Active": true,
"SmtpHostAddress": "mail.email.com",
"SmtpHostPort": 587,
"From": "sample@email.com",
"Username": "sample@email.com",
"Password": "***",
"EnableSsl": false,
"TestMailAddress": ""
}
}
```

| Email -> Alan Adı   | Açıklama                                                                                     |
|---------------------|----------------------------------------------------------------------------------------------|
| Active              | true veya false değer alabilir. true ise email gönderimleri yapılır.                         |
| SmtpHostAddress     | Smtp Sunucusu Adresi                                                                         |
| SmtpHostPort        | Smtp Sunucusu Port adresi. Sayısal değer olarak belirtilir.                                  |
| From                | Mail gönderimlerinin yapılacağı mail adresi                                                  |
| Username            | Mail gönderimlerinin yapılacağı mail adresinin kullanıcı adı                                 |
| Password            | Mail gönderimlerinin yapılacağı mail adresinin şifresi                                       |
| EnableSsl           | true veya false değer alabilir. SSL var ise true olmalıdır.                                  |
| TestMailAddress     | Buraya bir mail adresi yazılırsa mailler bu adrese gönderilir. Boş bırakılırsa gitmesi gereken kullanıcılara gider. |