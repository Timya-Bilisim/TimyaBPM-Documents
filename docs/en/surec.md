# Process Creation Steps

## 1. Process Development

- _To create a new process, click the plus sign in the process section and select **"New Map"** to create a new process map. When you click on an empty area on the process map, the fields that need to be added to the process are displayed on the right side._

➜ In the **"Process General"** section, enter the name that will be visible to users in the **Name** field. The **ID** field is the name that will be stored in the system. Spaces and Turkish characters should not be used.

![alt text](/TimyaBPM-Documents/surec1.png)

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

## 2. Process Actions
_Process actions are fundamental components that visualize the steps of business processes and the relationships between these steps. Various symbols are used to represent these steps. Each symbol represents a specific phase of the business process. Comprehensive descriptions and uses of these symbols are detailed in the sections below._

### 2.1. Start Event

- Represented by round (circle) symbols. The round shapes in the process map represent the actions to start the process. Clicking on this action should define the fields that will be displayed on the right side as described below.

- **Name:** This is the name of the button that the user must click to start the process.

- **ID:** This is the name that will be stored in the system. No spaces or Turkish characters are allowed.

![alt text](/TimyaBPM-Documents/surecc3.png)

➜ **Properties** section is defined as follows:

- **Available to Roles:** The roles that can initiate the process are selected.
- **To Do List:** Specifies the role to which the first task assignment will be made after the process starts. It is assigned by dragging from the **Roles** section to the **Selected Roles** section using the mouse.

![alt text](/TimyaBPM-Documents/roller8.png)

- **Form List:** Selects the form that will be used when the process is initiated.

![alt text](/TimyaBPM-Documents/surecc4.png)

### 2.2. Sequence Flow

- **Flow:** Defines the flow and connections between process steps. It is represented by an arrow symbol. When the flow action is added, a button is created for users.

### 2.3. Task

- **Task:** Defines the operations or tasks to be performed at a specific step. It is represented by a square symbol.

- Click on the square symbol next to the **Start** button. The **Flow** and **Task** sections are created as shown below.

![alt text](/TimyaBPM-Documents/surecg1.png)

For the task action, click on the key symbol and select **Change Element**. This option allows for the identification of tasks suitable for the needs of the process and can be configured according to the process requirements. For example:

- **User Task:** Represents tasks that the user must complete.
- **Service Task:** Allows document creation and execution of DLL libraries.

![alt text](/TimyaBPM-Documents/anahtar.png)

### 2.4. End Event

- To terminate the process, select the "Process Termination" action shown in the visual.

![alt text](/TimyaBPM-Documents/son1.png)
![alt text](/TimyaBPM-Documents/son2.png)

### 2.5. Timer Event

- Drag and drop the **Boundary Event** onto the **Task**. Then click the **Change Type** button and select the **Timer Boundary Event** option.

<div style="display: flex; justify-content: space-around;">
  <img src="/TimyaBPM-Documents/timer.png" alt="Timer Event" width="400" style="margin-right: 20px;"/>
  <img src="/TimyaBPM-Documents/timer2.png" alt="Timer Boundary Event" width="400"/>
</div>

- Click on the **Timer Boundary Event**. In the **Timer** section on the right, select **Cycle** as the **Type**. The definition in the **Value** section must be a cycle specified in ISO 8601 repeating interval format. 
For example:
  - **`R5/PT10S`**: Repeats every 10 seconds, for a total of 5 times.
  - **`R5/PT5M`**: Repeats every 5 minutes, for a total of 5 times.
  - **`R10/PT1H`**: Repeats every hour, for a total of 10 times.
  - **`R/P2D`**: Repeats every 2 days, indefinitely.

   👉 **For more information about ISO 8601:** Visit the [Camunda Timer Events - Time Cycle](https://docs.camunda.org/manual/latest/reference/bpmn20/events/timer-events/#time-cycle) page.

![alt text](/TimyaBPM-Documents/timer3.png)


## 3. Publishing the Process

- To make the process available, it must first be published. To do this, click the "Admin Menu" **Projects** option and press the **Publish** button on the relevant project. (See Image 1)

Then, click on the **Start Process** section and use the **Start** option to begin the process. (See Image 2)

*Image 1: Publishing the Process*
![alt text](/TimyaBPM-Documents/surecc5.png)

*Image 2: Starting the Process*
![alt text](/TimyaBPM-Documents/surecc6.png)
