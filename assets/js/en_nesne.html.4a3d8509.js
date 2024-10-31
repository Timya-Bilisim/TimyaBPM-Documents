"use strict";(self.webpackChunktimya=self.webpackChunktimya||[]).push([[823],{3980:(e,s,t)=>{t.r(s),t.d(s,{comp:()=>r,data:()=>l});var n=t(641);const i=[(0,n.Fv)('<h1 id="adding-a-business-object" tabindex="-1"><a class="header-anchor" href="#adding-a-business-object"><span>Adding a Business Object</span></a></h1><ul><li><em>Business objects store connection information. How these connections are defined and the properties of business objects are explained in the relevant sections below. To create a new business object, click the plus sign in the business object section.</em></li></ul><h3 id="business-object-properties" tabindex="-1"><a class="header-anchor" href="#business-object-properties"><span>Business Object Properties</span></a></h3><ul><li><strong>ID</strong>: This field shows the identification number in the system.</li><li><strong>Name</strong>: Specifies the name of the business object. Turkish characters should not be used.</li><li><strong>Type</strong>: Defines the type of the business object. Business objects can be one of three types: <ul><li><strong>Query</strong></li><li><strong>Table</strong></li><li><strong>Scripted</strong></li></ul></li><li><strong>Connections</strong>: Displays the fields defined in the connections.</li><li><strong>Query Text</strong>: This field contains the query that will retrieve data from the database for the related business object. SQL query: (See Image 1)</li></ul><p><strong>Example</strong></p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line">select userId<span class="token punctuation">,</span> FullName from Users where DepartmentId=@pDepartmentId</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>■ This query will fetch the userId and FullName information of users with the specified DepartmentId from the Users table.</p><p><strong>Image 1</strong><br><img src="/TimyaBPM-Documents/nesne43.png" alt="IIS Setup"></p><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h3><p><em>If the SQL query will run parametrically, parameters are added using the <code>@</code> symbol. These parameters are then defined in the parameters section.</em></p><ul><li><strong>Key:</strong> Must be the same as the parameter name used in the query text.</li><li><strong>Type:</strong> Specifies the data type of the parameter.</li></ul><p><img src="/TimyaBPM-Documents/nesne42.png" alt="IIS Setup"></p><h3 id="columns" tabindex="-1"><a class="header-anchor" href="#columns"><span>Columns</span></a></h3><p><em>Defines which columns the query will select and how they will be displayed.</em></p><ul><li><strong>Key:</strong> The column name in the database.</li><li><strong>Type:</strong> Specifies the data type of the column.</li><li><strong>Title:</strong> The column header displayed to the user.</li><li><strong>Values:</strong> Defines the functionality and usage scenarios of the columns.</li></ul><p><strong>Values</strong> options:</p><ul><li><strong>IsValue:</strong> Specifies the value that will be written to the database for the column.</li><li><strong>IsName:</strong> Specifies the value that will be displayed on the screen for the column.</li></ul><p><img src="/TimyaBPM-Documents/nesne41.png" alt="IIS Setup"></p>',18)],a={},r=(0,t(6262).A)(a,[["render",function(e,s){return(0,n.uX)(),(0,n.CE)("div",null,i)}]]),l=JSON.parse('{"path":"/en/nesne.html","title":"Adding a Business Object","lang":"en","frontmatter":{},"headers":[{"level":3,"title":"Business Object Properties","slug":"business-object-properties","link":"#business-object-properties","children":[]},{"level":3,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":3,"title":"Columns","slug":"columns","link":"#columns","children":[]}],"git":{"updatedTime":1724329752000,"contributors":[{"name":"NURŞAH YILDIZ","email":"nursah.yildiz@timyabilisim.com.tr","commits":2}]},"filePathRelative":"en/nesne.md"}')}}]);