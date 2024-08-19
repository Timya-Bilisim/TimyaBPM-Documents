# Process Creation Steps

## 1.1. Process Development

To develop a new process, click on the plus sign in the process section and create a new process map with the **"New Map ”** option. When you click on an empty area on the process map, the section where the process properties will be changed appears on the right side.



 In the **"Process General ”** section, the name of the process that will be visible to the users is given in the **Name** field. **ID** is the name that will be stored in the system. Spaces and Turkish characters are not used in this field.


![alt text](/TimyaBPM-Documents/surecc1.png) 

In **Properties**, in **Accessing Roles**, select the roles that can access the process (roles will be explained separately).

![alt text](/TimyaBPM-Documents/surecc2.png) 


To make process numbering, type the following code in the **Number Prefix** section of **Properties**:



`GLN-{yyyy} - {ID:000} {IDTABLE:GLOBALID}`

1. **Year Information:** `GLN-{yyyy}`

   
2. **Sequence Number:** `{ID:000}`
   - Specifies the sequence number given to the document.
   
3. **Table Number:** `{{IDTABLE:GLOBALID}`
   - Indicates the table to be numbered. The table name is prepended to `GLOBALID`.  Numbering will be different for same and different tables: 

#### Numbering by Different Tables

- **Format:** `GLN-{yyyy} - {ID:000} {IDTABLE:GELENGLOBALID}`

  - GLN-2024-001
  - GLN-2024-002
  - GLN-2024-003

- **Format:** `GDN-{yyyy} - {ID:000} {IDTABLE:GIDENGLOBALID}`

  - GDN-2024-001
  - GDN-2024-002

#### Numbering According to the Same Tables

- **Format:** `GLN-{yyyy} - {ID:000} {IDTABLE:GLOBALID}`

  - GLN-2024-001
  - GLN-2024-003
  - GLN-2024-004

- **Format:** `GDN-{yyyy} - {ID:000} {IDTABLE:GLOBALID}`

  - GDN-2024-002
  - GDN-2024-005





![Numbering](/TimyaBPM-Documents/sıralama.png)

### Process Actions

#### Start

The circular shapes on the process map represent process start actions. Click the icon to define these actions. The **Name** section is where you enter the button name that users will click to start the process. The **ID** section is the name used by the system.

![Start](/TimyaBPM-Documents/surecc3.png)

**Properties** should be filled out as follows:

- **Available to Roles:** Select the roles that can start the process.
- **To Do List:** Specify the role to which the first task will be assigned after the process starts. Drag from **Roles** to **Selected Roles**.

![Roles](/TimyaBPM-Documents/roller8.png)

- **Form List:** Select the form to be used when the process is started.

![Form List](/TimyaBPM-Documents/surecc4.png)

#### Flow and Action

Click the square icon next to the **Start** button. Define **Flow** and **Action** sections as shown below.

![Flow and Action](/TimyaBPM-Documents/surecg1.png)

For the action event, select **Change Element**.

![Action Event](/TimyaBPM-Documents/anahtar.png)

#### End Process

To end the process, select the process end event as shown in the image.

![End Process 1](/TimyaBPM-Documents/son1.png)
![End Process 2](/TimyaBPM-Documents/son2.png)

## 1.2. Publishing the Process

To put the process into use, it must first be published. For this, click **Projects** under the "Admin Menu" and press the **Publish** button on the relevant project.

![Publish Process](/TimyaBPM-Documents/surecc5.png)

Then click **Start Process** and use the **Start** option to initiate the process.

![Start Process](/TimyaBPM-Documents/surecc6.png)
