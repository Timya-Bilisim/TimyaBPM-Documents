<template><div><h1 id="process-creation-steps" tabindex="-1"><a class="header-anchor" href="#process-creation-steps"><span>Process Creation Steps</span></a></h1>
<h2 id="_1-1-creating-a-process" tabindex="-1"><a class="header-anchor" href="#_1-1-creating-a-process"><span>1.1. Creating a Process</span></a></h2>
<p>To create a new process, click on the plus sign in the process section and start a new process with the &quot;New Map&quot; option. First, in the &quot;Process General&quot; section, give the process a name in the <strong>Name</strong> field. The <strong>ID</strong> field is the name that will be stored in the system.
<img src="/TimyaBPM-Documents/surecc1.png" alt="alt text"></p>
<p>To number the process, go to the <strong>Properties</strong> section and enter the following code in the <strong>Number Prefix</strong> field:</p>
<p><code v-pre>GLN-{yyyy} - {ID:000} {IDTABLE:GLOBALID}</code></p>
<p>In the <strong>Properties</strong> section, select <strong>Accessing Roles</strong> to determine who can access the process.</p>
<p><img src="/TimyaBPM-Documents/surecc2.png" alt="alt text"></p>
<h2 id="_1-2-starting-the-process" tabindex="-1"><a class="header-anchor" href="#_1-2-starting-the-process"><span>1.2. Starting the Process</span></a></h2>
<p>To start the process, click on the round (start process) icon in the system. Enter appropriate names for the process in the <strong>Name</strong> and <strong>ID</strong> fields. Then fill out the <strong>Properties</strong> section as shown below:</p>
<p><img src="/TimyaBPM-Documents/surecc3.png" alt="alt text"></p>
<ul>
<li><strong>Available to Roles:</strong> Select the roles that can access the process.</li>
<li><strong>To Do List:</strong> Select the person who will start and manage the process.</li>
<li><strong>Form List:</strong> Select the form that will be used when the process starts.</li>
</ul>
<p><img src="/TimyaBPM-Documents/surecc4.png" alt="alt text"></p>
<h2 id="_1-3-publishing-the-process" tabindex="-1"><a class="header-anchor" href="#_1-3-publishing-the-process"><span>1.3. Publishing the Process</span></a></h2>
<p>Before the process can be used, it must be published. To do this, click on &quot;Admin Menu&quot; and select <strong>Projects</strong>, then click the <strong>Publish</strong> button on the relevant project. (Image 1)</p>
<p>Then, click on the &quot;Start Process&quot; section and start the process using the <strong>Start</strong> option. (Image 2)</p>
<p><em>Image 1: Publishing the Process</em>
<img src="/TimyaBPM-Documents/surecc5.png" alt="Figure 1"></p>
<p><em>Image 2: Starting the Process</em>
<img src="/TimyaBPM-Documents/surecc6.png" alt="Figure 2"></p>
<h2 id="_1-4-developing-the-process" tabindex="-1"><a class="header-anchor" href="#_1-4-developing-the-process"><span>1.4. Developing the Process</span></a></h2>
<p>In the process section, after clicking the &quot;Send&quot; button, click on the square icon next to the &quot;Start&quot; button to move to the next section. In the screen that appears, click on each shape and enter names.</p>
<p><img src="/TimyaBPM-Documents/surecg1.png" alt="Figure 2"></p>
<p>Then, it is necessary to add the newly added part to the system. To do this, click on the icon again, select the &quot;Key&quot; section, and define the user.
<img src="/TimyaBPM-Documents/surec2.png" alt="Şekil 2"></p>
<h3 id="roles" tabindex="-1"><a class="header-anchor" href="#roles"><span>Roles</span></a></h3>
<p>In the &quot;To-Do List&quot; section, roles are added. New dynamic roles are added from the &quot;Roles&quot; section. The ID, field, and map sections are filled in. In the map section, the information is written as shown below, according to the data saved in the definitions.</p>
<p><img src="/TimyaBPM-Documents/roller1.png" alt="Figure 2">
<img src="/TimyaBPM-Documents/roller2.png" alt="Figure 2"></p>
<p>Then, in the &quot;To-Do List&quot; section of the process, select the role defined in the roles section, and choose the form created from the &quot;Form List&quot; section.</p>
<p><img src="/TimyaBPM-Documents/roller3.png" alt="Figure 2"></p>
<h3 id="ending-the-process" tabindex="-1"><a class="header-anchor" href="#ending-the-process"><span>Ending the Process</span></a></h3>
<p>To end the process, click on the icon again, select the image shown in the picture, enter the names, and fill in the necessary fields.</p>
<p><img src="/TimyaBPM-Documents/son1.png" alt="Figure 2">
<img src="/TimyaBPM-Documents/son2.png" alt="Figure 2"></p>
<h3 id="reports-and-lists" tabindex="-1"><a class="header-anchor" href="#reports-and-lists"><span>Reports and Lists</span></a></h3>
<p>In the start process section, the &quot;End&quot; button appears. When we end the process, we need to report it. To do this, create an object called &quot;Completed Tasks&quot; in the job objects.</p>
<p><img src="/TimyaBPM-Documents/son3.png" alt="Figure 2">
<img src="/TimyaBPM-Documents/rapor.png" alt="Figure 2"></p>
<p>Then, create a report from the &quot;Lists&quot; section. The information should be entered as shown in the image below.</p>
<p><img src="/TimyaBPM-Documents/rapor2.png" alt="Figure 2"></p>
<p>The information that should be visible in the report section is as follows.</p>
<p><img src="/TimyaBPM-Documents/rapor3.png" alt="Figure 2"></p>
</div></template>


