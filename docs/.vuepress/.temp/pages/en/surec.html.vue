<template><div><h1 id="process-creation-steps" tabindex="-1"><a class="header-anchor" href="#process-creation-steps"><span>Process Creation Steps</span></a></h1>
<h2 id="_1-1-process-development" tabindex="-1"><a class="header-anchor" href="#_1-1-process-development"><span>1.1. Process Development</span></a></h2>
<p>To develop a new process, click on the plus sign in the process section and create a new process map with the <strong>&quot;New Map ”</strong> option. When you click on an empty area on the process map, the section where the process properties will be changed appears on the right side.</p>
<p>In the <strong>&quot;Process General ”</strong> section, the name of the process that will be visible to the users is given in the <strong>Name</strong> field. <strong>ID</strong> is the name that will be stored in the system. Spaces and Turkish characters are not used in this field.</p>
<p><img src="/TimyaBPM-Documents/surecc1.png" alt="alt text"></p>
<p>In <strong>Properties</strong>, in <strong>Accessing Roles</strong>, select the roles that can access the process (roles will be explained separately).</p>
<p><img src="/TimyaBPM-Documents/surecc2.png" alt="alt text"></p>
<p>To make process numbering, type the following code in the <strong>Number Prefix</strong> section of <strong>Properties</strong>:</p>
<p><code v-pre>GLN-{yyyy} - {ID:000} {IDTABLE:GLOBALID}</code></p>
<ol>
<li>
<p><strong>Year Information:</strong> <code v-pre>GLN-{yyyy}</code></p>
</li>
<li>
<p><strong>Sequence Number:</strong> <code v-pre>{ID:000}</code></p>
<ul>
<li>Specifies the sequence number given to the document.</li>
</ul>
</li>
<li>
<p><strong>Table Number:</strong> <code v-pre>{{IDTABLE:GLOBALID}</code></p>
<ul>
<li>Indicates the table to be numbered. The table name is prepended to <code v-pre>GLOBALID</code>.  Numbering will be different for same and different tables:</li>
</ul>
</li>
</ol>
<h4 id="numbering-by-different-tables" tabindex="-1"><a class="header-anchor" href="#numbering-by-different-tables"><span>Numbering by Different Tables</span></a></h4>
<ul>
<li>
<p><strong>Format:</strong> <code v-pre>GLN-{yyyy} - {ID:000} {IDTABLE:GELENGLOBALID}</code></p>
<ul>
<li>GLN-2024-001</li>
<li>GLN-2024-002</li>
<li>GLN-2024-003</li>
</ul>
</li>
<li>
<p><strong>Format:</strong> <code v-pre>GDN-{yyyy} - {ID:000} {IDTABLE:GIDENGLOBALID}</code></p>
<ul>
<li>GDN-2024-001</li>
<li>GDN-2024-002</li>
</ul>
</li>
</ul>
<h4 id="numbering-according-to-the-same-tables" tabindex="-1"><a class="header-anchor" href="#numbering-according-to-the-same-tables"><span>Numbering According to the Same Tables</span></a></h4>
<ul>
<li>
<p><strong>Format:</strong> <code v-pre>GLN-{yyyy} - {ID:000} {IDTABLE:GLOBALID}</code></p>
<ul>
<li>GLN-2024-001</li>
<li>GLN-2024-003</li>
<li>GLN-2024-004</li>
</ul>
</li>
<li>
<p><strong>Format:</strong> <code v-pre>GDN-{yyyy} - {ID:000} {IDTABLE:GLOBALID}</code></p>
<ul>
<li>GDN-2024-002</li>
<li>GDN-2024-005</li>
</ul>
</li>
</ul>
<p><img src="/TimyaBPM-Documents/sıralama.png" alt="Numbering"></p>
<h3 id="process-actions" tabindex="-1"><a class="header-anchor" href="#process-actions"><span>Process Actions</span></a></h3>
<h4 id="start" tabindex="-1"><a class="header-anchor" href="#start"><span>Start</span></a></h4>
<p>The circular shapes on the process map represent process start actions. Click the icon to define these actions. The <strong>Name</strong> section is where you enter the button name that users will click to start the process. The <strong>ID</strong> section is the name used by the system.</p>
<p><img src="/TimyaBPM-Documents/surecc3.png" alt="Start"></p>
<p><strong>Properties</strong> should be filled out as follows:</p>
<ul>
<li><strong>Available to Roles:</strong> Select the roles that can start the process.</li>
<li><strong>To Do List:</strong> Specify the role to which the first task will be assigned after the process starts. Drag from <strong>Roles</strong> to <strong>Selected Roles</strong>.</li>
</ul>
<p><img src="/TimyaBPM-Documents/roller8.png" alt="Roles"></p>
<ul>
<li><strong>Form List:</strong> Select the form to be used when the process is started.</li>
</ul>
<p><img src="/TimyaBPM-Documents/surecc4.png" alt="Form List"></p>
<h4 id="flow-and-action" tabindex="-1"><a class="header-anchor" href="#flow-and-action"><span>Flow and Action</span></a></h4>
<p>Click the square icon next to the <strong>Start</strong> button. Define <strong>Flow</strong> and <strong>Action</strong> sections as shown below.</p>
<p><img src="/TimyaBPM-Documents/surecg1.png" alt="Flow and Action"></p>
<p>For the action event, select <strong>Change Element</strong>.</p>
<p><img src="/TimyaBPM-Documents/anahtar.png" alt="Action Event"></p>
<h4 id="end-process" tabindex="-1"><a class="header-anchor" href="#end-process"><span>End Process</span></a></h4>
<p>To end the process, select the process end event as shown in the image.</p>
<p><img src="/TimyaBPM-Documents/son1.png" alt="End Process 1">
<img src="/TimyaBPM-Documents/son2.png" alt="End Process 2"></p>
<h2 id="_1-2-publishing-the-process" tabindex="-1"><a class="header-anchor" href="#_1-2-publishing-the-process"><span>1.2. Publishing the Process</span></a></h2>
<p>To put the process into use, it must first be published. For this, click <strong>Projects</strong> under the &quot;Admin Menu&quot; and press the <strong>Publish</strong> button on the relevant project.</p>
<p><img src="/TimyaBPM-Documents/surecc5.png" alt="Publish Process"></p>
<p>Then click <strong>Start Process</strong> and use the <strong>Start</strong> option to initiate the process.</p>
<p><img src="/TimyaBPM-Documents/surecc6.png" alt="Start Process"></p>
</div></template>


