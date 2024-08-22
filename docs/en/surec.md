# Process Creation Steps

## 1.1. Process Development

- _To create a new process, click the plus sign in the process section and select **"New Map"** to create a new process map. When you click on an empty area on the process map, the fields that need to be added to the process are displayed on the right side._

➜ In the **"Process General"** section, enter the name that will be visible to users in the **Name** field. The **ID** field is the name that will be stored in the system. Spaces and Turkish characters should not be used.

![alt text](/TimyaBPM-Documents/surecc1.png)

➜ In the **Properties** section, select the roles that will have access to the process in the **Accessing Roles** field (roles will be explained separately).

![alt text](/TimyaBPM-Documents/surecc2.png)

---

➜ In the **Properties** section, document numbering is done in the **Number Prefix** field. Example document number formats can be as follows:

`GLN-{yyyy}-{ID:000}{IDTABLE:GLOBALID}`

**GLN:**
- The name of the incoming document.

**{yyyy}:**
- Indicates the year of the document.

**{ID:000}:**
- Indicates the sequence number assigned to the document. Zeros are added based on the number of digits.

**{IDTABLE:GLOBALID}:**
- Indicates the database table that will assign sequential numbers.

![alt text](/TimyaBPM-Documents/sıralama.png)

---

### Process Actions

_Process actions are the core components that visualize the steps of business processes and the relationships between these steps. Various symbols are used to represent these steps, with each symbol denoting a specific phase of the business process. Detailed explanations and usage of these symbols are covered in the following sections._

#### Start Action

- Represented by circular (round) symbols. Circles in the process map indicate the actions that initiate the process. The fields displayed on the right side when clicking on this action should be defined as described below.

- **Name:** The name of the button that the user must click to start the process.

- **ID:** The name that will be stored in the system. Spaces and Turkish characters should not be used.

![alt text](/TimyaBPM-Documents/surecc3.png)

➜ The **Properties** section is defined as follows:

- **Available to Roles:** Select the roles that can start the process.
- **To Do List:** Indicates the role to which the first task will be assigned after the process starts. This can be done by dragging the role from the **Roles** section and dropping it into the **Selected Roles** section.

![alt text](/TimyaBPM-Documents/roller8.png)

- **Form List:** Select the form to be used when the process starts.

![alt text](/TimyaBPM-Documents/surecc4.png)

#### Flow and Task Action

- **Flow:** Defines the flow and connections between process steps. It is represented by an arrow symbol. When a flow action is added, a button is created for users. For example, flows defined after "start" and "user task" steps represent actions that are shown as buttons that users can click.

- **Task:** Defines the actions or tasks to be performed at a specific step. It is represented by a square symbol.

- Click the square icon next to the **Start** button. The **Flow** and **Task** sections are created as follows.

![alt text](/TimyaBPM-Documents/surecg1.png)

For the task action, click the key icon and select **Change Element**. This option allows tasks to be specified according to the needs of the process and structured according to the process requirements. For example:

- **User Task:** Indicates tasks that need to be completed by the user.
- **Service Task:** Enables document creation and running DLL libraries.

![alt text](/TimyaBPM-Documents/anahtar.png)

#### End Process Action

- To end the process, select the "End Process" action shown in the image.

![alt text](/TimyaBPM-Documents/son1.png)
![alt text](/TimyaBPM-Documents/son2.png)

---

## 1.2. Publishing the Process

- To make the process available, it must first be published. To do this, click the "Admin Menu" **Projects** option and press the **Publish** button on the relevant project. (See Image 1)

Then, click on the **Start Process** section and use the **Start** option to begin the process. (See Image 2)

*Image 1: Publishing the Process*
![alt text](/TimyaBPM-Documents/surecc5.png)

*Image 2: Starting the Process*
![alt text](/TimyaBPM-Documents/surecc6.png)
