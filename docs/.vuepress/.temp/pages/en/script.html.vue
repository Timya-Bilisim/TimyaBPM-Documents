<template><div><h1 id="script-methods-and-their-usage" tabindex="-1"><a class="header-anchor" href="#script-methods-and-their-usage"><span>Script Methods and Their Usage</span></a></h1>
<p><em>Script Methods are written in C#. Below are the details and usage examples of the methods used in scripts.</em></p>
<p><em>To create a script, click the plus button, then enter the script name and methods.</em> (See Example)</p>
<p><strong>Example</strong><br>
<img src="/TimyaBPM-Documents/script.png" alt="alt text"></p>
<h2 id="_1-getval" tabindex="-1"><a class="header-anchor" href="#_1-getval"><span>1. getVal</span></a></h2>
<p>Retrieves data from the specified table, excluding the field given as the second parameter.</p>
<p><strong>Usage Example:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
var subject = getVal("OutgoingDocument", "Subject");
</pre>
<p>In this example, the <code>getVal</code> function retrieves the value of the <code>Subject</code> field in the <code>OutgoingDocument</code> table and assigns it to the <code>subject</code> variable.</p>
<h2 id="_2-warning" tabindex="-1"><a class="header-anchor" href="#_2-warning"><span>2. Warning</span></a></h2>
<p>Displays a warning message when an action button is pressed, and the process continues if the user clicks "Yes."</p>
<p><strong>Usage Example:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
Warning(subject.ToString());
</pre>
<p>In this example, calling the <code>Warning</code> function displays a warning message that includes the value of the <code>subject</code>.</p>
<h2 id="_3-error" tabindex="-1"><a class="header-anchor" href="#_3-error"><span>3. Error</span></a></h2>
<p>Shows an error message to the user and prevents the process from continuing.</p>
<p><strong>Usage Example:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
Error(subject.ToString());
</pre>
<p>In this example, the <code>Error</code> function displays an error message containing the <code>subject</code> value, stopping further actions.</p>
<h2 id="_4-setval" tabindex="-1"><a class="header-anchor" href="#_4-setval"><span>4. setVal</span></a></h2>
<p>Used to assign values to defined data fields.</p>
<p><strong>Usage Example:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
setVal("OutgoingDocument", "Subject", "Subject field updated by script");
</pre>
<p>In this example, the text <code>"Subject field updated by script"</code> is written to the <code>Subject</code> field in the <code>OutgoingDocument</code> table.</p>
<h2 id="_5-select" tabindex="-1"><a class="header-anchor" href="#_5-select"><span>5. Select</span></a></h2>
<p>Retrieves data from the database, returning the value for further processing. Transformation methods for handling results are explained below.</p>
<h3>Usage Example:</h3>
<pre style="background-color: black; color: white; padding: 10px;">
Select("SELECT * FROM Departments");
</pre>
<h3>5.1. getDataTable Method</h3>
<p>Returns the <code>SELECT</code> query results in <strong>DataTable</strong> format, allowing data to be organized in table form.</p>
<p><strong>Usage Example:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
DataTable dt = Select("SELECT * FROM Departments").getDataTable();
</pre>
<p>This example retrieves all data from the <code>Departments</code> table and assigns it to a DataTable object named <code>dt</code>.</p>
<h3>5.2. text Method</h3>
<p>Returns the data from the <code>SELECT</code> query in <strong>text format</strong>.</p>
<p><strong>Usage Example:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
string department = Select("SELECT TOP 1 DepartmentName FROM Departments").Text();
</pre>
<p>This example retrieves the first department name from the <code>Departments</code> table as a string and assigns it to <code>department</code>.</p>
<h3>5.3. int Method</h3>
<p>Returns the data from the <code>SELECT</code> query as an integer.</p>
<p><strong>Usage Example:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
int departmentCount = Select("SELECT COUNT(*) FROM Departments").Int();
</pre>
<p>This example retrieves the total department count from the <code>Departments</code> table and assigns it to <code>departmentCount</code>.</p>
<h3>5.4. listInt Method</h3>
<p>Returns the data from the <code>SELECT</code> query as a <strong>list of integers</strong>.</p>
<p><strong>Usage Example:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
List&lt;int&gt; departmentIds = Select("SELECT DepartmentId FROM Departments").ListInt();
</pre>
<p>This example retrieves all department IDs from the <code>Departments</code> table and assigns them to <code>departmentIds</code>, a <code>List&lt;int&gt;</code> object.</p>
<h3>5.5. listStr Method</h3>
<p>Returns the data from the <code>SELECT</code> query as a <strong>list of strings</strong>. If no data is found, it returns an empty array instead of null.</p>
<p><strong>Usage Example:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
List&lt;string&gt; departmentNames = Select("SELECT DepartmentName FROM Departments").ListStr();
</pre>
<p>This example retrieves all department names from the <code>Departments</code> table and assigns them to <code>departmentNames</code>, a <code>List&lt;string&gt;</code> object.</p>
<h2 id="_6-sendmail" tabindex="-1"><a class="header-anchor" href="#_6-sendmail"><span>6. sendMail</span></a></h2>
<p>Sends an email to the specified address.</p>
<p><strong>Method Structure:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
SendMail("recipientEmail", "subject", "body");
</pre>
<p><strong>Usage Example:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
SendMail("bpm@timya.com.tr", "Sent with Timya BPM script", "body sent with Timya BPM script");
</pre>
<p>This example sends an email to <code>bpm@timya.com.tr</code>.</p>
<p>To send to multiple recipients, separate addresses with commas:</p>
<pre style="background-color: black; color: white; padding: 10px;">
SendMail("bpm@timya.com.tr, secondAddress@timya.com.tr", "Sent with Timya BPM script", "body sent with Timya BPM script");
</pre>
<h2 id="_7-sendmails" tabindex="-1"><a class="header-anchor" href="#_7-sendmails"><span>7. sendMails</span></a></h2>
<p>Sends emails to multiple recipients by passing a list of email addresses as a string.</p>
<p><strong>Method Structure:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
SendMails(List&lt;string&gt; recipientEmails, string subject, string body);
</pre>
<h2 id="_8-globalvariables" tabindex="-1"><a class="header-anchor" href="#_8-globalvariables"><span>8. GlobalVariables</span></a></h2>
<p>GlobalVariables manages shared variables accessible across all processes.</p>
<h3>8.1. setGlobalVal</h3>
<p>Used to <strong>store a value</strong> in a shared variable accessible across all processes.</p>
<p><strong>Method Structure:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
void setGlobalVal(string Name, object val);
</pre>
<p><strong>Usage Example:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
setGlobalVal("Common_sender", "company name");
</pre>
<h3>8.2. getGlobalVal</h3>
<p>Used to <strong>retrieve the value</strong> of a shared variable accessible across all processes.</p>
<p><strong>Method Structure:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
object getGlobalVal(string Name);
</pre>
<p><strong>Usage Example:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
var sender = getGlobalVal("Common_sender");
</pre>
</div></template>


