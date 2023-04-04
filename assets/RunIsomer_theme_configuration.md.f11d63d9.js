import{_ as a,c as e,o as s,N as t}from"./chunks/framework.0799945b.js";const n="/assets/configuration-1.51efd8df.png",C=JSON.parse('{"title":"Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"RunIsomer/theme/configuration.md","lastUpdated":1671256033000}'),o={name:"RunIsomer/theme/configuration.md"},l=t(`<h1 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h1><p>Configure the website title, favicon and colours. The file is located at /_config.yml</p><h3 id="formatting" tabindex="-1">Formatting <a class="header-anchor" href="#formatting" aria-label="Permalink to &quot;Formatting&quot;">​</a></h3><p>You can format the config in three ways. You can just have it plain,</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">title: Title</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>maybe add apostrophes..</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">title: &#39;Title&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>or quotation marks.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">title: &quot;Title&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>However, if your property includes spaces or any other magical characters, it is most preferred that you use either the apostrophes or quotation marks.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">title: &#39;Example Title&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="title" tabindex="-1">Title <a class="header-anchor" href="#title" aria-label="Permalink to &quot;Title&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">title: Example Title</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>The title property will change the text in the footer.</p><p><img src="`+n+`" alt="Footer text"></p><h2 id="url" tabindex="-1">URL <a class="header-anchor" href="#url" aria-label="Permalink to &quot;URL&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">url: https://example.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>I&#39;m not so sure what the URL property does but yea just put your site URL because why not.</p><h2 id="favicon" tabindex="-1">Favicon <a class="header-anchor" href="#favicon" aria-label="Permalink to &quot;Favicon&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">favicon: /images/favicon-isomer.ico</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>The favicon property will change the favicon of the website. It supports .ico, .png and .svg files.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>In the case you provide a .png file with dimensions longer (example: 32x16) than a square, it will be resized to a square. However, when you provide a .svg, it will remain its original size.</p></div>`,22),i=[l];function p(c,r,h,d,u,g){return s(),e("div",null,i)}const f=a(o,[["render",p]]);export{C as __pageData,f as default};