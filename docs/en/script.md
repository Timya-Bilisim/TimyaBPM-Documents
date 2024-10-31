# Script Methods and Their Usage

_Script Methods are written in C#. Below are the details and usage examples of the methods used in scripts._

_To create a script, click the plus button, then enter the script name and methods._ (See Example)

**Example**  
![alt text](/TimyaBPM-Documents/script.png)

## 1. getVal

<p>Retrieves data from the specified table, excluding the field given as the second parameter.</p>

<p><strong>Usage Example:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
var subject = getVal("OutgoingDocument", "Subject");
</pre>

<p>In this example, the <code>getVal</code> function retrieves the value of the <code>Subject</code> field in the <code>OutgoingDocument</code> table and assigns it to the <code>subject</code> variable.</p>

## 2. Warning

<p>Displays a warning message when an action button is pressed, and the process continues if the user clicks "Yes."</p>

<p><strong>Usage Example:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
Warning(subject.ToString());
</pre>

<p>In this example, calling the <code>Warning</code> function displays a warning message that includes the value of the <code>subject</code>.</p>

## 3. Error

<p>Shows an error message to the user and prevents the process from continuing.</p>

<p><strong>Usage Example:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
Error(subject.ToString());
</pre>

<p>In this example, the <code>Error</code> function displays an error message containing the <code>subject</code> value, stopping further actions.</p>

## 4. setVal

<p>Used to assign values to defined data fields.</p>

<p><strong>Usage Example:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
setVal("OutgoingDocument", "Subject", "Subject field updated by script");
</pre>

<p>In this example, the text <code>"Subject field updated by script"</code> is written to the <code>Subject</code> field in the <code>OutgoingDocument</code> table.</p>

## 5. Select

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

## 6. sendMail

<p>Sends an email to the specified address.</p>

**Method Structure:**
<pre style="background-color: black; color: white; padding: 10px;">
SendMail("recipientEmail", "subject", "body");
</pre>

**Usage Example:**
<pre style="background-color: black; color: white; padding: 10px;">
SendMail("bpm@timya.com.tr", "Sent with Timya BPM script", "body sent with Timya BPM script");
</pre>
<p>This example sends an email to <code>bpm@timya.com.tr</code>.</p>

<p>To send to multiple recipients, separate addresses with commas:</p>
<pre style="background-color: black; color: white; padding: 10px;">
SendMail("bpm@timya.com.tr, secondAddress@timya.com.tr", "Sent with Timya BPM script", "body sent with Timya BPM script");
</pre>

## 7. sendMails

<p>Sends emails to multiple recipients by passing a list of email addresses as a string.</p>

<p><strong>Method Structure:</strong></p>
<pre style="background-color: black; color: white; padding: 10px;">
SendMails(List&lt;string&gt; recipientEmails, string subject, string body);
</pre>

## 8. GlobalVariables

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
