<template><div><h1 id="process-creation-steps" tabindex="-1"><a class="header-anchor" href="#process-creation-steps"><span>Process Creation Steps</span></a></h1>
<h2 id="_1-process-development" tabindex="-1"><a class="header-anchor" href="#_1-process-development"><span>1. Process Development</span></a></h2>
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
<h2 id="_2-process-actions" tabindex="-1"><a class="header-anchor" href="#_2-process-actions"><span>2. Process Actions</span></a></h2>
<p><em>Process actions are fundamental components that visualize the steps of business processes and the relationships between these steps. Various symbols are used to represent these steps. Each symbol represents a specific phase of the business process. Comprehensive descriptions and uses of these symbols are detailed in the sections below.</em></p>
<h3 id="_2-1-start-event" tabindex="-1"><a class="header-anchor" href="#_2-1-start-event"><span>2.1. Start Event</span></a></h3>
<ul>
<li>
<p>Represented by round (circle) symbols. The round shapes in the process map represent the actions to start the process. Clicking on this action should define the fields that will be displayed on the right side as described below.</p>
</li>
<li>
<p><strong>Name:</strong> This is the name of the button that the user must click to start the process.</p>
</li>
<li>
<p><strong>ID:</strong> This is the name that will be stored in the system. No spaces or Turkish characters are allowed.</p>
</li>
</ul>
<p><img src="/TimyaBPM-Documents/surecc3.png" alt="alt text"></p>
<p>➜ <strong>Properties</strong> section is defined as follows:</p>
<ul>
<li><strong>Available to Roles:</strong> The roles that can initiate the process are selected.</li>
<li><strong>To Do List:</strong> Specifies the role to which the first task assignment will be made after the process starts. It is assigned by dragging from the <strong>Roles</strong> section to the <strong>Selected Roles</strong> section using the mouse.</li>
</ul>
<p><img src="/TimyaBPM-Documents/roller8.png" alt="alt text"></p>
<ul>
<li><strong>Form List:</strong> Selects the form that will be used when the process is initiated.</li>
</ul>
<p><img src="/TimyaBPM-Documents/surecc4.png" alt="alt text"></p>
<h3 id="_2-2-sequence-flow" tabindex="-1"><a class="header-anchor" href="#_2-2-sequence-flow"><span>2.2. Sequence Flow</span></a></h3>
<ul>
<li><strong>Flow:</strong> Defines the flow and connections between process steps. It is represented by an arrow symbol. When the flow action is added, a button is created for users.</li>
</ul>
<h3 id="_2-3-task" tabindex="-1"><a class="header-anchor" href="#_2-3-task"><span>2.3. Task</span></a></h3>
<ul>
<li>
<p><strong>Task:</strong> Defines the operations or tasks to be performed at a specific step. It is represented by a square symbol.</p>
</li>
<li>
<p>Click on the square symbol next to the <strong>Start</strong> button. The <strong>Flow</strong> and <strong>Task</strong> sections are created as shown below.</p>
</li>
</ul>
<p><img src="/TimyaBPM-Documents/surecg1.png" alt="alt text"></p>
<p>For the task action, click on the key symbol and select <strong>Change Element</strong>. This option allows for the identification of tasks suitable for the needs of the process and can be configured according to the process requirements. For example:</p>
<ul>
<li><strong>User Task:</strong> Represents tasks that the user must complete.</li>
<li><strong>Service Task:</strong> Allows document creation and execution of DLL libraries.</li>
</ul>
<p><img src="/TimyaBPM-Documents/anahtar.png" alt="alt text"></p>
<h3 id="_2-4-end-event" tabindex="-1"><a class="header-anchor" href="#_2-4-end-event"><span>2.4. End Event</span></a></h3>
<ul>
<li>To terminate the process, select the &quot;Process Termination&quot; action shown in the visual.</li>
</ul>
<p><img src="/TimyaBPM-Documents/son1.png" alt="alt text">
<img src="/TimyaBPM-Documents/son2.png" alt="alt text"></p>
<h3 id="_2-5-timer-event" tabindex="-1"><a class="header-anchor" href="#_2-5-timer-event"><span>2.5. Timer Event</span></a></h3>
<ul>
<li>Drag and drop the <strong>Boundary Event</strong> onto the <strong>Task</strong>. Then click the <strong>Change Type</strong> button and select the <strong>Timer Boundary Event</strong> option.</li>
</ul>
<div style="display: flex; justify-content: space-around;">
  <img src="/TimyaBPM-Documents/timer.png" alt="Timer Event" width="400" style="margin-right: 20px;"/>
  <img src="/TimyaBPM-Documents/timer2.png" alt="Timer Boundary Event" width="400"/>
</div>
<ul>
<li>
<p>Click on the <strong>Timer Boundary Event</strong>. In the <strong>Timer</strong> section on the right, select <strong>Cycle</strong> as the <strong>Type</strong>. The definition in the <strong>Value</strong> section must be a cycle specified in ISO 8601 repeating interval format.
For example:</p>
<ul>
<li><strong><code v-pre>R5/PT10S</code></strong>: Repeats every 10 seconds, for a total of 5 times.</li>
<li><strong><code v-pre>R5/PT5M</code></strong>: Repeats every 5 minutes, for a total of 5 times.</li>
<li><strong><code v-pre>R10/PT1H</code></strong>: Repeats every hour, for a total of 10 times.</li>
<li><strong><code v-pre>R/P2D</code></strong>: Repeats every 2 days, indefinitely.</li>
</ul>
<p>👉 <strong>For more information about ISO 8601:</strong> Visit the <a href="https://docs.camunda.org/manual/latest/reference/bpmn20/events/timer-events/#time-cycle" target="_blank" rel="noopener noreferrer">Camunda Timer Events - Time Cycle</a> page.</p>
</li>
</ul>
<p><img src="/TimyaBPM-Documents/timer3.png" alt="alt text"></p>
<h2 id="_3-publishing-the-process" tabindex="-1"><a class="header-anchor" href="#_3-publishing-the-process"><span>3. Publishing the Process</span></a></h2>
<ul>
<li>To make the process available, it must first be published. To do this, click the &quot;Admin Menu&quot; <strong>Projects</strong> option and press the <strong>Publish</strong> button on the relevant project. (See Image 1)</li>
</ul>
<p>Then, click on the <strong>Start Process</strong> section and use the <strong>Start</strong> option to begin the process. (See Image 2)</p>
<p><em>Image 1: Publishing the Process</em>
<img src="/TimyaBPM-Documents/surecc5.png" alt="alt text"></p>
<p><em>Image 2: Starting the Process</em>
<img src="/TimyaBPM-Documents/surecc6.png" alt="alt text"></p>
</div></template>


