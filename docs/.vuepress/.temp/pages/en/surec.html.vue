<template><div><h1 id="process-creation-steps" tabindex="-1"><a class="header-anchor" href="#process-creation-steps"><span>Process Creation Steps</span></a></h1>
<h2 id="_1-1-process-development" tabindex="-1"><a class="header-anchor" href="#_1-1-process-development"><span>1.1. Process Development</span></a></h2>
<ul>
<li><em>To create a new process, click the plus sign in the process section and select <strong>&quot;New Map&quot;</strong> to create a new process map. When you click on an empty area on the process map, the fields that need to be added to the process are displayed on the right side.</em></li>
</ul>
<p>➜ In the <strong>&quot;Process General&quot;</strong> section, enter the name that will be visible to users in the <strong>Name</strong> field. The <strong>ID</strong> field is the name that will be stored in the system. Spaces and Turkish characters should not be used.</p>
<p><img src="/TimyaBPM-Documents/surec1.png" alt="alt text"></p>
<p>➜ In the <strong>Properties</strong> section, select the roles that will have access to the process in the <strong>Accessing Roles</strong> field (roles will be explained separately).</p>
<p><img src="/TimyaBPM-Documents/surecc2.png" alt="alt text"></p>
<hr>
<p>➜ In the <strong>Properties</strong> section, document numbering is done in the <strong>Number Prefix</strong> field. Example document number formats can be as follows:</p>
<p><code v-pre>GLN-{yyyy}-{ID:000}{IDTABLE:GLOBALID}</code></p>
<p><strong>GLN:</strong></p>
<ul>
<li>The name of the incoming document.</li>
</ul>
<p><strong>{yyyy}:</strong></p>
<ul>
<li>Indicates the year of the document.</li>
</ul>
<p><strong>{ID:000}:</strong></p>
<ul>
<li>Indicates the sequence number assigned to the document. Zeros are added based on the number of digits.</li>
</ul>
<p><strong>{IDTABLE:GLOBALID}:</strong></p>
<ul>
<li>Indicates the database table that will assign sequential numbers.</li>
</ul>
<p><img src="/TimyaBPM-Documents/sıralama.png" alt="alt text"></p>
<hr>
<h3 id="process-actions" tabindex="-1"><a class="header-anchor" href="#process-actions"><span>Process Actions</span></a></h3>
<p><em>Process actions are the core components that visualize the steps of business processes and the relationships between these steps. Various symbols are used to represent these steps, with each symbol denoting a specific phase of the business process. Detailed explanations and usage of these symbols are covered in the following sections.</em></p>
<h4 id="start-action" tabindex="-1"><a class="header-anchor" href="#start-action"><span>Start Action</span></a></h4>
<ul>
<li>
<p>Represented by circular (round) symbols. Circles in the process map indicate the actions that initiate the process. The fields displayed on the right side when clicking on this action should be defined as described below.</p>
</li>
<li>
<p><strong>Name:</strong> The name of the button that the user must click to start the process.</p>
</li>
<li>
<p><strong>ID:</strong> The name that will be stored in the system. Spaces and Turkish characters should not be used.</p>
</li>
</ul>
<p><img src="/TimyaBPM-Documents/surecc3.png" alt="alt text"></p>
<p>➜ The <strong>Properties</strong> section is defined as follows:</p>
<ul>
<li><strong>Available to Roles:</strong> Select the roles that can start the process.</li>
<li><strong>To Do List:</strong> Indicates the role to which the first task will be assigned after the process starts. This can be done by dragging the role from the <strong>Roles</strong> section and dropping it into the <strong>Selected Roles</strong> section.</li>
</ul>
<p><img src="/TimyaBPM-Documents/roller8.png" alt="alt text"></p>
<ul>
<li><strong>Form List:</strong> Select the form to be used when the process starts.</li>
</ul>
<p><img src="/TimyaBPM-Documents/surecc4.png" alt="alt text"></p>
<h4 id="flow-and-task-action" tabindex="-1"><a class="header-anchor" href="#flow-and-task-action"><span>Flow and Task Action</span></a></h4>
<ul>
<li>
<p><strong>Flow:</strong> Defines the flow and connections between process steps. It is represented by an arrow symbol. When a flow action is added, a button is created for users. For example, flows defined after &quot;start&quot; and &quot;user task&quot; steps represent actions that are shown as buttons that users can click.</p>
</li>
<li>
<p><strong>Task:</strong> Defines the actions or tasks to be performed at a specific step. It is represented by a square symbol.</p>
</li>
<li>
<p>Click the square icon next to the <strong>Start</strong> button. The <strong>Flow</strong> and <strong>Task</strong> sections are created as follows.</p>
</li>
</ul>
<p><img src="/TimyaBPM-Documents/surecg1.png" alt="alt text"></p>
<p>For the task action, click the key icon and select <strong>Change Element</strong>. This option allows tasks to be specified according to the needs of the process and structured according to the process requirements. For example:</p>
<ul>
<li><strong>User Task:</strong> Indicates tasks that need to be completed by the user.</li>
<li><strong>Service Task:</strong> Enables document creation and running DLL libraries.</li>
</ul>
<p><img src="/TimyaBPM-Documents/anahtar.png" alt="alt text"></p>
<h4 id="end-process-action" tabindex="-1"><a class="header-anchor" href="#end-process-action"><span>End Process Action</span></a></h4>
<ul>
<li>To end the process, select the &quot;End Process&quot; action shown in the image.</li>
</ul>
<p><img src="/TimyaBPM-Documents/son1.png" alt="alt text">
<img src="/TimyaBPM-Documents/son2.png" alt="alt text"></p>
<hr>
<h2 id="_1-2-publishing-the-process" tabindex="-1"><a class="header-anchor" href="#_1-2-publishing-the-process"><span>1.2. Publishing the Process</span></a></h2>
<ul>
<li>To make the process available, it must first be published. To do this, click the &quot;Admin Menu&quot; <strong>Projects</strong> option and press the <strong>Publish</strong> button on the relevant project. (See Image 1)</li>
</ul>
<p>Then, click on the <strong>Start Process</strong> section and use the <strong>Start</strong> option to begin the process. (See Image 2)</p>
<p><em>Image 1: Publishing the Process</em>
<img src="/TimyaBPM-Documents/surecc5.png" alt="alt text"></p>
<p><em>Image 2: Starting the Process</em>
<img src="/TimyaBPM-Documents/surecc6.png" alt="alt text"></p>
</div></template>


