# Form Creation Processes

## 1.1. Creating a New Form

**Starting a New Form:**
   - Click the plus sign in the form section to create a new form.

**Naming the Form:**
   - Enter a name for the form (e.g., `frmIncomingDocument`). This name will be visible in the system.
   - The name visible to users is specified in the "Form Display Name" section.

**Form Components and Definition Areas:**

- Areas where you can add and define form components allow you to configure the form’s content and components. After selecting the required component, drag and drop it onto the form. Then, click on the component to fill in the content.

   ![alt text](/TimyaBPM-Documents/frm1.png)

## 1.2. Form Components

   ![alt text](/TimyaBPM-Documents/frm5.png)

### Textbox 

- Used for textual data. For example, textboxes are used for information such as Incoming Document Number and Title Subject.

   ![alt text](/TimyaBPM-Documents/frm3.png)

### Select

- Used to input options in the form. Options are written one below the other in the "Options" section of the form component definition area and saved by pressing the Enter key.

   ![alt text](/TimyaBPM-Documents/frm4.png)

### Datepicker

- Used for entering date data in the form.

## 1.3. Defining Form Components

- To fill out the form content, complete the fields shown below:

   ![alt text](/TimyaBPM-Documents/frm2.png)

- **ID:** The name visible in the system. Do not use special characters or spaces.
- **Title:** The name visible to the user.
- **Grid Structure:** Used for design. Define the size of textboxes according to the grid structure:
  - **XS:** For small screens
  - **S:** For tablet screens
  - **MD:** For small computers
  - **LG:** For larger monitors
- **Field Attributes:**
  - **Readonly:** Only readable.
  - **Editable:** Can be edited.
  - **Required:** Mandatory.
  - **Hidden:** Hidden.
- **Maximum Character Count:** Enter the character count defined in the database.
- **Table:** Select the created table.
- **Field:** Select the field of the table.
