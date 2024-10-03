<template><div><h1 id="form-creation-steps" tabindex="-1"><a class="header-anchor" href="#form-creation-steps"><span>Form Creation Steps</span></a></h1>
<h2 id="_1-1-creating-a-new-form" tabindex="-1"><a class="header-anchor" href="#_1-1-creating-a-new-form"><span>1.1. Creating a New Form</span></a></h2>
<p><strong>Starting a New Form:</strong></p>
<ul>
<li>A new form is created by clicking on the plus sign in the form section.</li>
</ul>
<p><strong>Naming the Form:</strong></p>
<ul>
<li>Enter a name for the form (e.g., <code v-pre>frmIncomingDocument</code>). This name will be visible in the system.</li>
<li>The name that users will see is specified in the &quot;Form Display Name&quot; section.</li>
</ul>
<p><strong>Form Components and Definition Fields:</strong></p>
<ul>
<li>
<p>The areas where you can add and define form components allow you to structure the content and components of the form. After selecting the necessary component, it is placed on the form using drag-and-drop. Then, you can click on the component to fill in the content.</p>
<p><img src="/TimyaBPM-Documents/frm1.png" alt="alt text"></p>
</li>
</ul>
<h2 id="_1-2-defining-form-components" tabindex="-1"><a class="header-anchor" href="#_1-2-defining-form-components"><span>1.2. Defining Form Components</span></a></h2>
<ul>
<li>The fields shown below are filled in to complete the form content:</li>
</ul>
<p><img src="/TimyaBPM-Documents/frm2.png" alt="alt text"></p>
<ul>
<li><strong>ID:</strong> This is the name that will be visible in the system. Turkish characters and spaces should not be used.</li>
<li><strong>Title:</strong> This is the name that the user will see.</li>
<li><strong>Grid Structure:</strong> Used for design. The size of the text boxes is defined according to the grid structure:
<ul>
<li><strong>XS:</strong> For small screens</li>
<li><strong>S:</strong> For screens like tablets</li>
<li><strong>MD:</strong> For small computers</li>
<li><strong>LG:</strong> For larger monitors</li>
</ul>
</li>
<li><strong>Mandatory Field Formula:</strong>
<ul>
<li><strong>Readonly:</strong> Read-only.</li>
<li><strong>Editable:</strong> Editable.</li>
<li><strong>Required:</strong> Mandatory.</li>
<li><strong>Hidden:</strong> Hidden.</li>
</ul>
</li>
<li><strong>Maximum Character Count:</strong> The number of characters defined in the database is entered.</li>
<li><strong>Table:</strong> The created table is selected.</li>
<li><strong>Field:</strong> The field of the table is selected.</li>
</ul>
<h2 id="_1-3-form-components" tabindex="-1"><a class="header-anchor" href="#_1-3-form-components"><span>1.3.  Form Components</span></a></h2>
<p><img src="/TimyaBPM-Documents/frm3.png" alt="alt text"></p>
<h3 id="textbox" tabindex="-1"><a class="header-anchor" href="#textbox"><span>Textbox</span></a></h3>
<ul>
<li><strong>Usage:</strong> Used for textual data. For example, a textbox is used for information such as Incoming Document Number and Title.</li>
</ul>
<p><img src="/TimyaBPM-Documents/frm5.png" alt="alt text"></p>
<h3 id="select" tabindex="-1"><a class="header-anchor" href="#select"><span>Select</span></a></h3>
<ul>
<li><strong>Usage:</strong> Used to enter options in the form. Options are written one below the other in the &quot;Options&quot; section of the form components definition part and are saved by pressing the Enter key.
<img src="/TimyaBPM-Documents/frm4.png" alt="alt text"></li>
</ul>
<h3 id="text" tabindex="-1"><a class="header-anchor" href="#text"><span>Text</span></a></h3>
<ul>
<li><strong>Usage:</strong> Used only to add text to the screen in the form. No data entry is made in this area; the purpose is to provide textual information.
<img src="/TimyaBPM-Documents/text1.png" alt="alt text"></li>
</ul>
<h3 id="htmlviewer" tabindex="-1"><a class="header-anchor" href="#htmlviewer"><span>HtmlViewer</span></a></h3>
<ul>
<li><strong>Usage:</strong> Used to display HTML content in HTML format.</li>
<li><strong>How to Use:</strong> The relevant table is selected from the database, and the necessary formatting is done using HTML codes.
<img src="/TimyaBPM-Documents/html1.png" alt="alt text">
<img src="/TimyaBPM-Documents/html2.png" alt="alt text">
<img src="/TimyaBPM-Documents/html3.png" alt="alt text"></li>
</ul>
<h3 id="user-select" tabindex="-1"><a class="header-anchor" href="#user-select"><span>User Select</span></a></h3>
<ul>
<li><strong>Usage:</strong> Used to select users and include them in the process.</li>
<li><strong>How to Use:</strong> The &quot;User Select&quot; component is selected in the form and added to the form. The desired users are added by clicking on the plus sign in the start process section.</li>
</ul>
<p><img src="/TimyaBPM-Documents/userselect1.png" alt="alt text">
<img src="/TimyaBPM-Documents/userselect2.png" alt="alt text">
<img src="/TimyaBPM-Documents/userselect3.png" alt="alt text"></p>
<h3 id="date-picker" tabindex="-1"><a class="header-anchor" href="#date-picker"><span>Date Picker</span></a></h3>
<ul>
<li><strong>Usage:</strong> Used for data that requires a date to be entered in the form.</li>
</ul>
<h3 id="timepicker" tabindex="-1"><a class="header-anchor" href="#timepicker"><span>Timepicker</span></a></h3>
<ul>
<li><strong>Usage:</strong> Used for time selection.</li>
<li><strong>Note:</strong> The time must be correctly added to the database from the data definitions section. (FIGURE 1)</li>
</ul>
<p><img src="/TimyaBPM-Documents/saat1.png" alt="Figure 1"></p>
<p><img src="/TimyaBPM-Documents/saat2.png" alt="Figure 2"></p>
<p><img src="/TimyaBPM-Documents/saat3.png" alt="Figure 3"></p>
<h3 id="file" tabindex="-1"><a class="header-anchor" href="#file"><span>File</span></a></h3>
<p><strong>Adding the File Component:</strong></p>
<ul>
<li>After the file component is added to the form, the <strong>Title</strong> and <strong>Tag</strong> parts must be filled in. Especially in order to add a file, <strong>Tag</strong> must be registered. (See Example 1)</li>
</ul>
<p><strong>Selecting and Displaying Files:</strong></p>
<ul>
<li>Start the process from the <strong>Start Process</strong> section and select the file you want to add.</li>
<li>After selecting the file, the added files will be displayed in the <strong>Files</strong> section on the right side. (See Example 2)</li>
</ul>
<p><strong>Example 1</strong><br>
<img src="/TimyaBPM-Documents/dosya1.png" alt="Figure 2"></p>
<p><strong>Example 2</strong><br>
<img src="/TimyaBPM-Documents/dosyalar2.png" alt="Figure 3"></p>
<h3 id="money" tabindex="-1"><a class="header-anchor" href="#money"><span>Money</span></a></h3>
<ul>
<li>For the money component, DataValueType should be set to Money in data definitions. (See Example 1)</li>
<li>To set the money format, you can use the standard numeric format strings page provided by Microsoft. For example, in the image shown, the <strong>N6</strong> format is used. This format displays the number with six decimal places. (See Example 2)</li>
</ul>
<p><em>For more information about different formats, visit the link and choose the one that suits your needs: <a href="https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings" target="_blank" rel="noopener noreferrer">Standard Numeric Format Strings</a>.</em></p>
<p><strong>Example 1</strong><br>
<img src="/TimyaBPM-Documents/para.png" alt="Figure 2"></p>
<p><strong>Example 2</strong><br>
<img src="/TimyaBPM-Documents/para1.png" alt="Figure 3"></p>
<h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment"><span>Comment</span></a></h3>
<ul>
<li>After adding the comment component to the form, start the process from the <strong>Start Process</strong> section, and add a comment from the <strong>Comments</strong> field on the right side.</li>
</ul>
<p><img src="/TimyaBPM-Documents/yorum1.png" alt="Figure 2"></p>
<p><img src="/TimyaBPM-Documents/yorum2.png" alt="Figure 3"></p>
<h3 id="data-picker" tabindex="-1"><a class="header-anchor" href="#data-picker"><span>Data Picker</span></a></h3>
<ul>
<li>The Data Picker allows selecting data from the database. Connections and Business Objects are defined, and these concepts are explained in detail in the Connection and Business Objects sections. Examples of connections and business objects related to the Data Picker are shown (Example 1).</li>
</ul>
<p><strong>Example 1</strong><br>
<img src="/TimyaBPM-Documents/datapicker1.png" alt="Figure 3"><br>
<img src="/TimyaBPM-Documents/datapicker2.png" alt="Figure 3"></p>
<ul>
<li>Data Binding: Allows filling form components with data selected from the Data Picker.</li>
<li><strong>ColumnName: Selects the columns from the database.</strong></li>
<li><strong>Formula: Table and field areas are selected from the form component definition area on the right and specified in the formula section within curly braces.</strong></li>
</ul>
<p>In the example below,<br>
<em>UrunAdı is selected as a column, and {CikisEvrak.EvrakNo} is written in the formula. This way, the product name appears in the Document Number field.</em><br>
<em>Urun Açıklaması column is selected, and {CikisEvrak.Notlar} is written in the formula. This way, the product description appears in the Notes section (Example 2).</em></p>
<p><strong>Example 2</strong><br>
<img src="/TimyaBPM-Documents/datapicker3.png" alt="Figure 3"><br>
<img src="/TimyaBPM-Documents/datapicker4.png" alt="Figure 3"></p>
</div></template>


