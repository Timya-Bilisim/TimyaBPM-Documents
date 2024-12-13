<template><div><h1 id="list-creation-steps" tabindex="-1"><a class="header-anchor" href="#list-creation-steps"><span>List Creation Steps</span></a></h1>
<ul>
<li>
<p><em>To ensure that defined business objects appear in the report, lists must be created.</em></p>
</li>
<li>
<p><em>The process of creating lists is explained in detail using an example business object, and the connections between them are demonstrated.</em></p>
</li>
</ul>
<h3 id="example-business-object" tabindex="-1"><a class="header-anchor" href="#example-business-object"><span>Example Business Object</span></a></h3>
<p><img src="/TimyaBPM-Documents/rapor.png" alt="Figure 2"></p>
<p>Here is an example of an SQL query used to list the data of a business object:</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line">select ProcessId<span class="token punctuation">,</span> m.Title MapName<span class="token punctuation">,</span> ProcessName<span class="token punctuation">,</span> p.Title<span class="token punctuation">,</span> StageCaption<span class="token punctuation">,</span> CreatedTime<span class="token punctuation">,</span> UpdatedTime<span class="token punctuation">,</span> DoubleField1<span class="token punctuation">,</span> StringField1<span class="token punctuation">,</span> StringField2 </span>
<span class="line">from Processes p </span>
<span class="line">inner join Maps m on m.Name = p.MapName </span>
<span class="line">where p.Deleted &lt;> <span class="token number">1</span> and p.Archived = <span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="defining-the-list" tabindex="-1"><a class="header-anchor" href="#defining-the-list"><span>Defining the List</span></a></h3>
<ul>
<li>
<p>Lists are created by clicking the plus sign in the <strong>Lists</strong> section on the left side.</p>
</li>
<li>
<p>In the <strong>CustomList</strong> section, fill in the following fields:</p>
</li>
<li>
<p><strong>Name:</strong> The name of the list as it appears in the system.</p>
</li>
<li>
<p><strong>Business Object:</strong> Select a previously created business object from the system.</p>
</li>
<li>
<p><strong>Role:</strong> Choose who will be able to view the report.</p>
</li>
<li>
<p><strong>Save:</strong> After filling out all fields, click the Save button.</p>
</li>
</ul>
<p><img src="/TimyaBPM-Documents/liste65.png" alt="Figure 2"></p>
<h3 id="columns" tabindex="-1"><a class="header-anchor" href="#columns"><span>Columns</span></a></h3>
<ul>
<li><em>After saving, the columns to be displayed in the report are listed below. These columns are configured based on the data retrieved from the business object. Use the <strong>Add</strong> and <strong>Remove</strong> buttons to include or exclude columns.</em></li>
</ul>
<p><img src="/TimyaBPM-Documents/liste100.png" alt="Figure 2"></p>
<p>Fields to be filled:</p>
<ul>
<li><strong>ID:</strong> A unique identifier for each column.</li>
<li><strong>Sequence:</strong> Indicates the order in which the column will appear in the report.</li>
<li><strong>Column Name:</strong> Represents the column name from the source of the data.</li>
<li><strong>Column Display Name:</strong> Defines how the column will appear to the user in the table.</li>
<li><strong>Source Column Name:</strong> Shows which source the data comes from. Should be the same as the Column Name.</li>
<li><strong>Process Number?:</strong> Select yes if it is a process number, otherwise select no.</li>
<li><strong>Data Type:</strong> Determines the type of the data.</li>
</ul>
<p><strong>Example List</strong> created based on the defined business object. (See List Example)</p>
<p><strong>List Example</strong><br>
<img src="/TimyaBPM-Documents/rapor2.png" alt="Figure 2"></p>
<p>The information that should appear in the report is as follows:</p>
<p><img src="/TimyaBPM-Documents/rapor3.png" alt="Figure 2"></p>
</div></template>


