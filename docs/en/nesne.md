
# Adding a Business Object

- _Business objects store connection information. How these connections are defined and the properties of business objects are explained in the relevant sections below. To create a new business object, click the plus sign in the business object section._

### Business Object Properties

- **ID**: This field shows the identification number in the system.
- **Name**: Specifies the name of the business object. Turkish characters should not be used.
- **Type**: Defines the type of the business object. Business objects can be one of three types:
  - **Query**
  - **Table**
  - **Scripted**
- **Connections**: Displays the fields defined in the connections.
- **Query Text**: This field contains the query that will retrieve data from the database for the related business object. SQL query: (See Image 1)

**Example**
```json
select userId, FullName from Users where DepartmentId=@pDepartmentId
```



■ This query will fetch the userId and FullName information of users with the specified DepartmentId from the Users table.

**Image 1**  
![IIS Setup](/TimyaBPM-Documents/nesne43.png)

### Parameters

_If the SQL query will run parametrically, parameters are added using the `@` symbol. These parameters are then defined in the parameters section._

- **Key:** Must be the same as the parameter name used in the query text.
- **Type:** Specifies the data type of the parameter.

![IIS Setup](/TimyaBPM-Documents/nesne42.png)

### Columns

_Defines which columns the query will select and how they will be displayed._
- **Key:** The column name in the database.
- **Type:** Specifies the data type of the column.
- **Title:** The column header displayed to the user.
- **Values:** Defines the functionality and usage scenarios of the columns.

**Values** options:

- **IsValue:** Specifies the value that will be written to the database for the column.
- **IsName:** Specifies the value that will be displayed on the screen for the column.

![IIS Setup](/TimyaBPM-Documents/nesne41.png)
