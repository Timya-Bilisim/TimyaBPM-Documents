# Process Creation Steps

## 1.1. Creating a Process

To create a new process, click on the plus sign in the processes section and start a new process by selecting "New Map." First, in the "Process General" section, enter a name for the process in the **Name** field. The **ID** field will be the name used for the process within the system.

![Process Creation](/TimyaBPM-Documents/surecc1.png)

To set up numbering for the process, go to the **Properties** section and enter the following code in the **Number Prefix** field:

`GLN-{yyyy} - {ID:000} {IDTABLE:GLOBALID}`

In the **Properties** section, select **Accessing Roles** to determine who can access the process.

![Accessing Roles](/TimyaBPM-Documents/surecc2.png)

## 1.2. Starting the Process

To start the process, click on the round "Start Process" icon in the system. Enter appropriate names in the **Name** and **ID** fields. Then, complete the **Properties** section as follows:

![Starting Process](/TimyaBPM-Documents/surecc3.png)

- **Available to Roles:** Select the roles that can access the process.
- **To Do List:** Choose the person who will start and manage the process.
- **Form List:** Select the form to be used when the process is started.

![Form List](/TimyaBPM-Documents/surecc4.png)

## 1.3. Publishing the Process

To make the process available, it must be published first. For this, go to "Admin Menu," select **Projects**, and click the **Publish** button on the relevant project. (Image 1)

Then, click on the "Start Process" section and use the **Start** option to initiate the process. (Image 2)

*Image 1: Process Publishing*
![Image 1](/TimyaBPM-Documents/surecc5.png)

*Image 2: Process Starting*
![Image 2](/TimyaBPM-Documents/surecc6.png)
