<template><div><h1 id="markdown-cheat-sheet" tabindex="-1"><a class="header-anchor" href="#markdown-cheat-sheet"><span>Markdown Cheat Sheet</span></a></h1>
<p>Thanks for visiting <a href="https://www.markdownguide.org" target="_blank" rel="noopener noreferrer">The Markdown Guide</a>!</p>
<p>This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for <a href="https://www.markdownguide.org/basic-syntax/" target="_blank" rel="noopener noreferrer">basic syntax</a> and <a href="https://www.markdownguide.org/extended-syntax/" target="_blank" rel="noopener noreferrer">extended syntax</a>.</p>
<h2 id="basic-syntax" tabindex="-1"><a class="header-anchor" href="#basic-syntax"><span>Basic Syntax</span></a></h2>
<p>These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.</p>
<h3 id="heading" tabindex="-1"><a class="header-anchor" href="#heading"><span>Heading</span></a></h3>
<h1 id="h1" tabindex="-1"><a class="header-anchor" href="#h1"><span>H1</span></a></h1>
<h2 id="h2" tabindex="-1"><a class="header-anchor" href="#h2"><span>H2</span></a></h2>
<h3 id="h3" tabindex="-1"><a class="header-anchor" href="#h3"><span>H3</span></a></h3>
<h3 id="bold" tabindex="-1"><a class="header-anchor" href="#bold"><span>Bold</span></a></h3>
<p><strong>bold text</strong></p>
<h3 id="italic" tabindex="-1"><a class="header-anchor" href="#italic"><span>Italic</span></a></h3>
<p><em>italicized text</em></p>
<h3 id="blockquote" tabindex="-1"><a class="header-anchor" href="#blockquote"><span>Blockquote</span></a></h3>
<blockquote>
<p>blockquote</p>
</blockquote>
<h3 id="ordered-list" tabindex="-1"><a class="header-anchor" href="#ordered-list"><span>Ordered List</span></a></h3>
<ol>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ol>
<h3 id="unordered-list" tabindex="-1"><a class="header-anchor" href="#unordered-list"><span>Unordered List</span></a></h3>
<ul>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ul>
<h3 id="code" tabindex="-1"><a class="header-anchor" href="#code"><span>Code</span></a></h3>
<p><code v-pre>code</code></p>
<h3 id="horizontal-rule" tabindex="-1"><a class="header-anchor" href="#horizontal-rule"><span>Horizontal Rule</span></a></h3>
<hr>
<h3 id="link" tabindex="-1"><a class="header-anchor" href="#link"><span>Link</span></a></h3>
<p><a href="https://www.markdownguide.org" target="_blank" rel="noopener noreferrer">Markdown Guide</a></p>
<h3 id="image" tabindex="-1"><a class="header-anchor" href="#image"><span>Image</span></a></h3>
<p><img src="https://www.markdownguide.org/assets/images/tux.png" alt="alt text"></p>
<h2 id="extended-syntax" tabindex="-1"><a class="header-anchor" href="#extended-syntax"><span>Extended Syntax</span></a></h2>
<p>These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.</p>
<h3 id="table" tabindex="-1"><a class="header-anchor" href="#table"><span>Table</span></a></h3>
<table>
<thead>
<tr>
<th>Syntax</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Header</td>
<td>Title</td>
</tr>
<tr>
<td>Paragraph</td>
<td>Text</td>
</tr>
</tbody>
</table>
<h3 id="fenced-code-block" tabindex="-1"><a class="header-anchor" href="#fenced-code-block"><span>Fenced Code Block</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">{</span>
<span class="line">  "firstName": "John",</span>
<span class="line">  "lastName": "Smith",</span>
<span class="line">  "age": 25</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote"><span>Footnote</span></a></h3>
<p>Here's a sentence with a footnote. [^1]</p>
<p>[^1]: This is the footnote.</p>
<h3 id="heading-id" tabindex="-1"><a class="header-anchor" href="#heading-id"><span>Heading ID</span></a></h3>
<h3 id="my-great-heading-custom-id" tabindex="-1"><a class="header-anchor" href="#my-great-heading-custom-id"><span>My Great Heading {#custom-id}</span></a></h3>
<h3 id="definition-list" tabindex="-1"><a class="header-anchor" href="#definition-list"><span>Definition List</span></a></h3>
<p>term
: definition</p>
<h3 id="strikethrough" tabindex="-1"><a class="header-anchor" href="#strikethrough"><span>Strikethrough</span></a></h3>
<p><s>The world is flat.</s></p>
<h3 id="task-list" tabindex="-1"><a class="header-anchor" href="#task-list"><span>Task List</span></a></h3>
<ul>
<li>[x] Write the press release</li>
<li>[ ] Update the website</li>
<li>[ ] Contact the media</li>
</ul>
<h3 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji"><span>Emoji</span></a></h3>
<p>That is so funny! 😂</p>
<p>(See also <a href="https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji" target="_blank" rel="noopener noreferrer">Copying and Pasting Emoji</a>)</p>
<h3 id="highlight" tabindex="-1"><a class="header-anchor" href="#highlight"><span>Highlight</span></a></h3>
<p>I need to highlight these ==very important words==.</p>
<h3 id="subscript" tabindex="-1"><a class="header-anchor" href="#subscript"><span>Subscript</span></a></h3>
<p>H~2~O</p>
<h3 id="superscript" tabindex="-1"><a class="header-anchor" href="#superscript"><span>Superscript</span></a></h3>
<p>X^2^</p>
</div></template>


