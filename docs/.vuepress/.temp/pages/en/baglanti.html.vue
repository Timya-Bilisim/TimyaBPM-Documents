<template><div><h1 id="steps-to-establish-a-connection" tabindex="-1"><a class="header-anchor" href="#steps-to-establish-a-connection"><span>Steps to Establish a Connection</span></a></h1>
<ul>
<li><em>Connections are used to facilitate data exchange.</em></li>
</ul>
<p><img src="/TimyaBPM-Documents/baglantii1.png" alt="Figure 2"></p>
<h2 id="connection-properties" tabindex="-1"><a class="header-anchor" href="#connection-properties"><span>Connection Properties</span></a></h2>
<ul>
<li><strong>Connection Name</strong>: The name of the connection in the system.</li>
<li><strong>Connection String</strong>: Contains the information required to connect to the database. It defines the credentials used to access the data source and other settings like the server address.</li>
</ul>
<p><strong>Example of a Connection String</strong></p>
<p><strong>Example</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line">Server=myServerAddress; Database=myDataBase; User Id=myUsername; Password=myPassword;</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>■ <strong>Server=myServerAddress</strong>: Specifies the address of the server to connect to.<br>
■ <strong>Database=myDataBase</strong>: Indicates the name of the database to access.<br>
■ <strong>User Id=myUsername</strong>: The username used to log in to the database.<br>
■ <strong>Password=myPassword</strong>: The password for the user's access.</p>
<ul>
<li><strong>Login Address</strong>: The IP address or domain name of the LDAP server. This field is used when the <strong>ActiveDirectorySync</strong> connection type is selected.</li>
<li><strong>Username</strong>: The username with access to the LDAP server. This field is used when the <strong>ActiveDirectorySync</strong> connection type is selected.</li>
<li><strong>LDAP Filter</strong>: LDAP filters allow synchronization of only the necessary information based on specific criteria in the data. This field is used when the <strong>ActiveDirectorySync</strong> connection type is selected.</li>
<li><strong>Secure Socket</strong>: Options indicating whether the connection is secure. This field is used when the <strong>ActiveDirectorySync</strong> connection type is selected.
<ul>
<li><strong>None</strong>: No encryption, data is transmitted as plain text.</li>
<li><strong>Secure Sockets Layer</strong>: Data is encrypted via SSL (Secure Sockets Layer), providing a more secure connection.</li>
</ul>
</li>
<li><strong>Connection Type</strong>:
<ul>
<li><strong>Database</strong>: Connects to SQL or other databases to manage data.</li>
<li><strong>ActiveDirectorySync</strong>: Performs synchronization operations with Active Directory using the LDAP protocol.</li>
</ul>
</li>
</ul>
<h2 id="connection-type-example-usage-scenarios" tabindex="-1"><a class="header-anchor" href="#connection-type-example-usage-scenarios"><span>Connection Type: Example Usage Scenarios</span></a></h2>
<p><em>Examples below demonstrate how different connection types can be configured.</em></p>
<h4 id="database-connection" tabindex="-1"><a class="header-anchor" href="#database-connection"><span>Database Connection</span></a></h4>
<ul>
<li><strong>Connection Name</strong>: Veritabanı_Baglanti</li>
<li><strong>Connection String</strong>: <code v-pre>Server=myServerAddress; Database=myDataBase; User Id=myUsername; Password=myPassword;</code></li>
</ul>
<h4 id="active-directory-connection" tabindex="-1"><a class="header-anchor" href="#active-directory-connection"><span>Active Directory Connection</span></a></h4>
<ul>
<li><strong>Connection Name</strong>: ADL_AD</li>
<li><strong>Login Address</strong>: LDAP://452.188.1.5</li>
<li><strong>Username</strong>: bpm</li>
<li><strong>Password</strong>: ********</li>
<li><strong>Connection Type</strong>: ActiveDirectorySync</li>
<li><strong>LDAP Filter</strong>: (mail=ali@example.com)</li>
</ul>
<p><em>➜ After defining the connections, use the test button to verify that the connection is working properly.</em></p>
</div></template>


