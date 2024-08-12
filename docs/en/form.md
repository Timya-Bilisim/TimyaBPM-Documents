# Form Creation Steps

## 1.1. Creating a New Form

 **Starting a New Form:**
   - A new form is created by clicking on the plus sign in the form section.

 **Naming the Form:**
   - Enter a name for the form (e.g., `frmIncomingDocument`). This name will be visible in the system.
   - The name that users will see is specified in the "Form Display Name" section.

 **Form Components and Definition Fields:**

 - The areas where you can add and define form components allow you to structure the content and components of the form. After selecting the necessary component, it is placed on the form using drag-and-drop. Then, you can click on the component to fill in the content.

   ![alt text](/TimyaBPM-Documents/frm1.png)

## 1.2.  Form Components
 ![alt text](/TimyaBPM-Documents/frm3.png)

### Textbox 

- **Usage:** Used for textual data. For example, a textbox is used for information such as Incoming Document Number and Title.

![alt text](/TimyaBPM-Documents/frm5.png)

### Select

- **Usage:** Used to enter options in the form. Options are written one below the other in the "Options" section of the form components definition part and are saved by pressing the Enter key.
 ![alt text](/TimyaBPM-Documents/frm4.png)

### Text

- **Usage:** Used only to add text to the screen in the form. No data entry is made in this area; the purpose is to provide textual information.
 ![alt text](/TimyaBPM-Documents/text1.png)

### HtmlViewer

- **Usage:** Used to display HTML content in HTML format.
- **How to Use:** The relevant table is selected from the database, and the necessary formatting is done using HTML codes.
 ![alt text](/TimyaBPM-Documents/html1.png)
![alt text](/TimyaBPM-Documents/html2.png)
![alt text](/TimyaBPM-Documents/html3.png)

### User Select

- **Usage:** Used to select users and include them in the process.
- **How to Use:** The "User Select" component is selected in the form and added to the form. The desired users are added by clicking on the plus sign in the start process section.

 ![alt text](/TimyaBPM-Documents/userselect1.png)
![alt text](/TimyaBPM-Documents/userselect2.png)
![alt text](/TimyaBPM-Documents/userselect3.png)

### Date Picker

- **Usage:** Used for data that requires a date to be entered in the form.

### Timepicker

- **Usage:** Used for time selection.
- **Note:** The time must be correctly added to the database from the data definitions section. (FIGURE 1)

![Figure 1](/TimyaBPM-Documents/saat1.png)

![Figure 2](/TimyaBPM-Documents/saat2.png)

![Figure 3](/TimyaBPM-Documents/saat3.png)

## 1.3. Defining Form Components

- The fields shown below are filled in to complete the form content:

 ![alt text](/TimyaBPM-Documents/frm2.png)

- **ID:** This is the name that will be visible in the system. Turkish characters and spaces should not be used.
- **Title:** This is the name that the user will see.
- **Grid Structure:** Used for design. The size of the text boxes is defined according to the grid structure:
  - **XS:** For small screens
  - **S:** For screens like tablets
  - **MD:** For small computers
  - **LG:** For larger monitors
- **Mandatory Field Formula:**
  - **Readonly:** Read-only.
  - **Editable:** Editable.
  - **Required:** Mandatory.
  - **Hidden:** Hidden.
- **Maximum Character Count:** The number of characters defined in the database is entered.
- **Table:** The created table is selected.
- **Field:** The field of the table is selected.
