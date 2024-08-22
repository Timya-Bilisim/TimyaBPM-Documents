# Role Management and Configuration

_Roles are divided into two main categories: **Dynamic** and **Static**. Detailed explanations on how to add and define roles for both categories are provided below:_

## Dynamic Roles

- _Dynamic roles are assigned based on processes. This assignment varies depending on conditions within the process._

➜ _Dynamic roles are added from the **Roles** section. The following fields need to be filled:_

- **Name**: The name of the role as it appears in the system.
- **ID**: Automatically assigned by the system.
- **Map**: In this field, a code structure is written according to data definitions. This means a dynamic formula is defined that determines under what conditions and to whom the role will be assigned. (See Image 2)

**Image 2**  
![alt text](/TimyaBPM-Documents/roller1.png)


```json
object ilgiliKisi = getVal("GelenEvrak", "IlgiliKisi");
if (ilgiliKisi == null)
    return System.Convert.ToInt32(ilgiliKisi);
else
    return 1;
```
■ In the formula, dynamic assignment is made using the "İlgiliKisi" information retrieved from the "GelenEvrak" table. If the "İlgiliKisi" information is not available, a default value of 1 is returned. This value represents the admin user. Otherwise, the "İlgiliKisi" value is returned.

**Image 3** shows how the "İlgiliKisi" role is selected.

**Image 3**  
![alt text](/TimyaBPM-Documents/roller3.png)

## Static Roles

- _Static roles are roles that are permanently assigned for specific tasks._

Static roles are defined by selecting them from the **Settings** section in the **Admin menu**. To add a new role, follow these steps:

1. Click the **Add New Role** button.
2. Enter the **Name** that will appear in the system for the role.
3. The **ID** field is automatically assigned by the system.
4. Click the **Save** button.

![alt text](/TimyaBPM-Documents/sr1.png)  
![alt text](/TimyaBPM-Documents/sr2.png)

- Static roles are listed in the **Users** section. When you click on any role, the necessary configurations for the selected role are made.

![alt text](/TimyaBPM-Documents/sr6.png)  
![alt text](/TimyaBPM-Documents/sr7.png)
