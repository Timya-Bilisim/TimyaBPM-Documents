# Listeler

İş başlat kısmında "Sonlandır" butonu çıkar. İşi sonlandırdığımızda rapor etmemiz gerekir. Bunun için iş nesnelerinde "Biten İşler" adında bir nesne açılır.

![Şekil 2](/TimyaBPM-Documents/son3.png) 
![Şekil 2](/TimyaBPM-Documents/rapor.png) 

```json
select ProcessId, m.Title MapName, ProcessName, p.Title, StageCaption, CreatedTime, UpdatedTime, DoubleField1, StringField1, StringField2 
from Processes p 
inner join Maps m on m.Name = p.MapName 
where p.Deleted <> 1 and p.Archived = 1
```

Daha sonra **Listeler** kısmından rapor oluşturulur. Bilgiler aşağıdaki resimde gösterildiği gibi girilmelidir.

![Şekil 2](/TimyaBPM-Documents/rapor2.png) 

Rapor kısmında gözükmesi gereken bilgiler aşağıdaki gibidir.

![Şekil 2](/TimyaBPM-Documents/rapor3.png) 
