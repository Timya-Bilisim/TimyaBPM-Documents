# Process Creation Steps

## 1.1. Creating a Process

To create a new process, click on the plus sign in the process section and start a new process with the "New Map" option. First, in the "Process General" section, give the process a name in the **Name** field. The **ID** field is the name that will be stored in the system.
![alt text](/TimyaBPM-Documents/surecc1.png) 

To number the process, go to the **Properties** section and enter the following code in the **Number Prefix** field:

`GLN-{yyyy} - {ID:000} {IDTABLE:GLOBALID}`

In the **Properties** section, select **Accessing Roles** to determine who can access the process.

![alt text](/TimyaBPM-Documents/surecc2.png) 

## 1.2. Starting the Process

To start the process, click on the round (start process) icon in the system. Enter appropriate names for the process in the **Name** and **ID** fields. Then fill out the **Properties** section as shown below:

![alt text](/TimyaBPM-Documents/surecc3.png) 

- **Available to Roles:** Select the roles that can access the process.
- **To Do List:** Select the person who will start and manage the process.
- **Form List:** Select the form that will be used when the process starts.

![alt text](/TimyaBPM-Documents/surecc4.png) 

## 1.3. Publishing the Process

Before the process can be used, it must be published. To do this, click on "Admin Menu" and select **Projects**, then click the **Publish** button on the relevant project. (Image 1)

Then, click on the "Start Process" section and start the process using the **Start** option. (Image 2)

*Image 1: Publishing the Process*
![Figure 1](/TimyaBPM-Documents/surecc5.png)  

*Image 2: Starting the Process*
![Figure 2](/TimyaBPM-Documents/surecc6.png) 

## 1.4. Developing the Process

In the process section, after clicking the "Send" button, click on the square icon next to the "Start" button to move to the next section. In the screen that appears, click on each shape and enter names.

![Figure 2](/TimyaBPM-Documents/surecg1.png) 

Then, it is necessary to add the newly added part to the system. To do this, click on the icon again, select the "Key" section, and define the user.
![Şekil 2](/TimyaBPM-Documents/surec2.png) 

### Roles

In the "To-Do List" section, roles are added. New dynamic roles are added from the "Roles" section. The ID, field, and map sections are filled in. In the map section, the information is written as shown below, according to the data saved in the definitions.

![Figure 2](/TimyaBPM-Documents/roller1.png) 
![Figure 2](/TimyaBPM-Documents/roller2.png) 

Then, in the "To-Do List" section of the process, select the role defined in the roles section, and choose the form created from the "Form List" section.

![Figure 2](/TimyaBPM-Documents/roller3.png) 

### Ending the Process

To end the process, click on the icon again, select the image shown in the picture, enter the names, and fill in the necessary fields.

![Figure 2](/TimyaBPM-Documents/son1.png) 
![Figure 2](/TimyaBPM-Documents/son2.png) 

### Reports and Lists

In the start process section, the "End" button appears. When we end the process, we need to report it. To do this, create an object called "Completed Tasks" in the job objects.

![Figure 2](/TimyaBPM-Documents/son3.png) 
![Figure 2](/TimyaBPM-Documents/rapor.png) 

Then, create a report from the "Lists" section. The information should be entered as shown in the image below.

![Figure 2](/TimyaBPM-Documents/rapor2.png) 

The information that should be visible in the report section is as follows.

![Figure 2](/TimyaBPM-Documents/rapor3.png) 
