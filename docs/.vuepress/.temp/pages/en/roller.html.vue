<template><div><h1 id="role-management-and-configuration" tabindex="-1"><a class="header-anchor" href="#role-management-and-configuration"><span>Role Management and Configuration</span></a></h1>
<p><em>Roles are divided into two main categories: <strong>Dynamic</strong> and <strong>Static</strong>. Detailed explanations on how to add and define roles for both categories are provided below:</em></p>
<h2 id="dynamic-roles" tabindex="-1"><a class="header-anchor" href="#dynamic-roles"><span>Dynamic Roles</span></a></h2>
<ul>
<li><em>Dynamic roles are assigned based on processes. This assignment varies depending on conditions within the process.</em></li>
</ul>
<p>➜ <em>Dynamic roles are added from the <strong>Roles</strong> section. The following fields need to be filled:</em></p>
<ul>
<li><strong>Name</strong>: The name of the role as it appears in the system.</li>
<li><strong>ID</strong>: Automatically assigned by the system.</li>
<li><strong>Map</strong>: In this field, a code structure is written according to data definitions. This means a dynamic formula is defined that determines under what conditions and to whom the role will be assigned. (See Image 2)</li>
</ul>
<p><strong>Image 2</strong><br>
<img src="/TimyaBPM-Documents/roller1.png" alt="alt text"></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line">object ilgiliKisi = getVal(<span class="token string">"GelenEvrak"</span><span class="token punctuation">,</span> <span class="token string">"IlgiliKisi"</span>);</span>
<span class="line">if (ilgiliKisi == <span class="token null keyword">null</span>)</span>
<span class="line">    return System.Convert.ToInt32(ilgiliKisi);</span>
<span class="line">else</span>
<span class="line">    return <span class="token number">1</span>;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>■ In the formula, dynamic assignment is made using the &quot;İlgiliKisi&quot; information retrieved from the &quot;GelenEvrak&quot; table. If the &quot;İlgiliKisi&quot; information is not available, a default value of 1 is returned. This value represents the admin user. Otherwise, the &quot;İlgiliKisi&quot; value is returned.</p>
<p><strong>Image 3</strong> shows how the &quot;İlgiliKisi&quot; role is selected.</p>
<p><strong>Image 3</strong><br>
<img src="/TimyaBPM-Documents/roller3.png" alt="alt text"></p>
<h2 id="static-roles" tabindex="-1"><a class="header-anchor" href="#static-roles"><span>Static Roles</span></a></h2>
<ul>
<li><em>Static roles are roles that are permanently assigned for specific tasks.</em></li>
</ul>
<p>Static roles are defined by selecting them from the <strong>Settings</strong> section in the <strong>Admin menu</strong>. To add a new role, follow these steps:</p>
<ol>
<li>Click the <strong>Add New Role</strong> button.</li>
<li>Enter the <strong>Name</strong> that will appear in the system for the role.</li>
<li>The <strong>ID</strong> field is automatically assigned by the system.</li>
<li>Click the <strong>Save</strong> button.</li>
</ol>
<p><img src="/TimyaBPM-Documents/sr1.png" alt="alt text"><br>
<img src="/TimyaBPM-Documents/sr2.png" alt="alt text"></p>
<ul>
<li>Static roles are listed in the <strong>Users</strong> section. When you click on any role, the necessary configurations for the selected role are made.</li>
</ul>
<p><img src="/TimyaBPM-Documents/sr6.png" alt="alt text"><br>
<img src="/TimyaBPM-Documents/sr7.png" alt="alt text"></p>
</div></template>


