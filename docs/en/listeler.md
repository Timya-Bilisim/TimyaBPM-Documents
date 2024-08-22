# List Creation Steps

- _To ensure that defined business objects appear in the report, lists must be created._

- _The process of creating lists is explained in detail using an example business object, and the connections between them are demonstrated._

### Example Business Object

![Figure 2](/TimyaBPM-Documents/rapor.png)

Here is an example of an SQL query used to list the data of a business object:

```json
select ProcessId, m.Title MapName, ProcessName, p.Title, StageCaption, CreatedTime, UpdatedTime, DoubleField1, StringField1, StringField2 
from Processes p 
inner join Maps m on m.Name = p.MapName 
where p.Deleted <> 1 and p.Archived = 1
```
### Defining the List

- Lists are created by clicking the plus sign in the **Lists** section on the left side.

- In the **CustomList** section, fill in the following fields:

- **Name:** The name of the list as it appears in the system.
- **Business Object:** Select a previously created business object from the system.
- **Role:** Choose who will be able to view the report.
- **Save:** After filling out all fields, click the Save button.

![Figure 2](/TimyaBPM-Documents/liste65.png)

### Columns

- _After saving, the columns to be displayed in the report are listed below. These columns are configured based on the data retrieved from the business object. Use the **Add** and **Remove** buttons to include or exclude columns._

![Figure 2](/TimyaBPM-Documents/liste100.png)

Fields to be filled:

- **ID:** A unique identifier for each column.
- **Sequence:** Indicates the order in which the column will appear in the report.
- **Column Name:** Represents the column name from the source of the data.
- **Column Display Name:** Defines how the column will appear to the user in the table.
- **Source Column Name:** Shows which source the data comes from. Should be the same as the Column Name.
- **Process Number?:** Select yes if it is a process number, otherwise select no.
- **Data Type:** Determines the type of the data.

**Example List** created based on the defined business object. (See List Example)

**List Example**  
![Figure 2](/TimyaBPM-Documents/rapor2.png)

The information that should appear in the report is as follows:

![Figure 2](/TimyaBPM-Documents/rapor3.png)
