# Script Metotları ve Kullanımları


_Script Metotları , C# dilinde yazılır. Aşağıda scriptlerde kullanılan metotların detayları ve örnek kullanımları verilmiştir._

_Script oluşturmak için artı butonuna tıklanır ve daha sonra script adı ve metodlar yazılır._ (Bkz. Örnek )

**Örnek** 
![alt text](/TimyaBPM-Documents/script.png)

## 1. getVal Metodu

<p>İlk parametrede belirtilen tablodan, ikinci parametredeki alan dışında bulunan veriyi alır.</p>

<p><strong>Kullanım Örneği:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
var konu = getVal("GidenEvrak", "Konu");
</pre>

<p>Bu örnekte, <code>GidenEvrak</code> tablosundaki <code>Konu</code> alanının değerini almak için kullanılır. <code>getVal</code> fonksiyonu, belirtilen tablo ve alan adına göre veriyi döndürür ve <code>konu</code> değişkenine atar.</p>


## 2. Warning Metodu

<p>Bir aksiyon butonuna basıldığında uyarı mesajı çıkarır ve bu uyarı mesajı görüntülendiğinde kullanıcı "Evet" butonuna basarsa süreç devam eder.</p>

<p><strong>Kullanım Örneği:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
Warning(konu.ToString());
</pre>

<p>Bu örnekte, <code>Warning</code> fonksiyonu çağrıldığında ekrana <code>konu</code> değerini içeren bir uyarı mesajı çıkar.</p>



## 3. Error Metodu
<p>Kullanıcıya hata mesajı gösterir ve sürecin devam etmesine izin vermez.</p>

<p><strong>Kullanım Örneği:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
Error(konu.ToString());
</pre>

<p>Bu örnekte, <code>Error</code> fonksiyonu çalıştığında ekranda <code>konu</code> değerini içeren bir hata mesajı görüntülenir ve işlem durdurulur.</p>

##  4. setVal Metodu
<p>Veri tanımlarında tanımlanan değerlere atama yapmak için kullanılır.</p>

<p><strong>Kullanım Örneği:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
setVal("GidenEvrak", "Konu", "Konu alanı scriptten geldi");
</pre>

<p>Bu örnekte, <code>GidenEvrak</code> tablosundaki <code>Konu</code> alanına <code>"Konu alanı scriptten geldi"</code> metni yazılır.</p>

## 5. Select Metodu

<p>
 Veritabanından veri almak için kullanılır ve sonuç olarak değer döner. Ancak, bu verilerin  kullanılabilmesi için dönüşüm işlemleri yapılması gerekir. Aşağıda  dönüşümler detaylıca açıklanmıştır.
</p>

<h3>Kullanım Örneği:</h3>
<pre style="background-color: black; color: white; padding: 10px;">
Select("SELECT * FROM Departments");
</pre>


 ### getDataTable Metodu 
<p>

   `SELECT` sorgusunun sonuçlarını <strong>DataTable</strong> formatında döndürür. Bu yöntem, verilerin <strong>tablo şeklinde organize edilmesini</strong> sağlar .
</p>
<p>
  <strong>Etiket:</strong> <code>DataTable</code>, <code>SQL</code>, <code>Veri İşleme</code>
</p>


<p><strong>Kullanım Örneği:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
DataTable dt = Select("SELECT * FROM Departments").getDataTable();
</pre>
<p>Bu örnekte, <code>Departments</code> tablosundaki tüm veriler alınarak <code>dt</code> adlı bir DataTable nesnesine atanır.</p>

 ### text Metodu
<p>
<code>SELECT</code> sorgusundan dönen veriyi <strong>metin formatında</strong> döndürür.
</p>

<p><strong>Kullanım Örneği:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
string departman = Select("SELECT TOP 1 DepartmentName FROM Departments").Text();
</pre>

<p>
  Bu örnek, <code>Departments</code> tablosundan ilk departman adını metin formatında alarak <code>departman</code> adlı string değişkenine atar.
</p>


 ###  int Metodu
<p><code>SELECT</code> sorgusundan dönen veriyi   tam sayı değeri döndürür. </p>

<p><strong>Kullanım Örneği:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
int departman = Select("SELECT COUNT(*) FROM Departments").Int();
</pre>
<p>Bu örnek, <code>Departments</code> tablosundaki toplam departman sayısını tam sayı formatında alarak <code>departman</code> adlı int değişkenine atar.</p>

 ###  listInt Metodu
<p>
   <code>SELECT</code> sorgusundan dönen veriyi <strong>tam sayılardan oluşan bir liste</strong> olarak döndürür.
</p>

<p><strong>Kullanım Örneği:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
List&lt;int&gt; departmanlar = Select("SELECT DepartmentId FROM Departments").ListInt();
</pre>

<p>
  Bu örnek, <code>Departments</code> tablosundaki tüm departman kimliklerini (<code>DepartmentId</code>) alarak <code>departmanlar</code> adlı <code>List&lt;int&gt;</code> tipindeki değişkene atar.
</p>

 ### listStr Metodu
<p>
 <code>SELECT</code> sorgusundan dönen veriyi <strong>string tipi bir liste</strong> olarak döndürür. Eğer veri bulunamazsa boş bir dizi döner (null döndürmez).
</p>

<p><strong>Kullanım Örneği:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
List&lt;string&gt; departmanlar = Select("SELECT DepartmentName FROM Departments").ListStr();
</pre>

<p>
  Bu örnek, <code>Departments</code> tablosundaki tüm departman isimlerini (<code>DepartmentName</code>) alarak <code>departmanlar</code> adlı <code>List&lt;string&gt;</code> tipindeki değişkene atar.
</p>




## 6. sendMail Metodu

Belirtilen adrese mail gönderir.

**Method Yapısı:**

<pre  style="background-color: black; color: white; padding: 10px;">
SendMail("stringToEmail", "string subject", "string body");
</pre>
**Kullanım Örneği:**
<pre  style="background-color: black; color: white; padding: 10px;">
SendMail("bpm@timya.com.tr", "timya bpm scripti ile gönderildi", "body timya bpm script ile gönderildi");
</pre>
<p>Bu örnek, <code>bpm@timya.com.tr</code> adresine bir e-posta gönderir.</p>

<p>Birden fazla kişiye gönderirken adresler virgül ile ayrılır:</p>
<pre  style="background-color: black; color: white; padding: 10px;">
SendMail("bpm@timya.com.tr, ikinciAdres@timya.com.tr", "timya bpm scripti ile gönderildi", "body timya bpm script ile gönderildi");
</pre>

## 7. sendMails Metodu
<p>Alıcıların mail adreslerini string içinde liste olarak gönderir.</p>

<p><strong>Method Yapısı:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
SendMails(List&lt;string&gt; recipientEmails, string subject, string body);
</pre>

## 8. GlobalVariables Metodu

<p>GlobalVariables, tüm süreçler tarafından erişilebilen ve ortak değişkenleri yöneten bir yapıdır.</p>


 ### setGlobalVal Metodu 
<p>
  Ortak bir değişkenin <strong> değerini kaydetmek</strong> için kullanılır ve tüm süreçlerde erişilebilir.
</p>

<p><strong>Method Yapısı:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
<code class="csharp">void setGlobalVal(string Name, object val);</code>
</pre>

<p><strong>Kullanım Örneği:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
<code class="csharp">setGlobalVal("Ortak_gonderen", "firma adı");</code>
</pre>

 ### getGlobalVal Metodu 
<p>
  Ortak bir değişkenin <strong>değerini almak </strong>için kullanılır ve tüm süreçlerde erişilebilir.
</p>

<p><strong>Method Yapısı:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
<code class="csharp">object getGlobalVal(string Name);</code>
</pre>

<p><strong>Kullanım Örneği:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
<code class="csharp">var gonderen = getGlobalVal("Ortak_gonderen");</code>
</pre>
