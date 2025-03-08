+++
title = "Testing testing testing"
description = ""
date = "2025-03-02"
categories = [
    "Testing",
    "Suffering",
]
menu = "main"
+++


## Sandbox for testing css styles

I am trying to get the appearance of my blog entries to look good. I am using *css classes* for this purpose.
With the hugo-book theme, I am beginning to have some success!

### A floating figure example
<p>
<div> 

<div style="float: inline-start; margin: 1em; max-width: 150px; border: 0px solid #ccc; padding: 0.0em;">
  <figure>
    <img src="/images/GretschelFrontPage.png"  alt="My Image">
      <figcaption style="text-align: center; font-size: 0.8em;">157 years old!</figcaption>
  </figure>
</div>

<div style="float: inline-end; margin: 1em; max-width: 150px; border: 0px solid #ccc; padding: 0.0em;">
  <figure>
    <img src="/images/GretschelFrontPage.png"  alt="My Image">
    <figcaption style="text-align: center; font-size: 0.8em;">157 years old!</figcaption>
  </figure>
</div>

Hugo uses the excellent [Go][] [html/template][gohtmltemplate] library for
its template engine. It is an extremely lightweight engine that provides a very
small amount of logic. In our experience that it is just the right amount of
logic to be able to create a good static website. 
If you have used other
template systems from different languages or frameworks you will find a lot of
similarities in Go templates. Hugo uses the excellent [Go][] [html/template][gohtmltemplate] library for
its template engine. It is an extremely lightweight engine that provides a very
small amount of logic. In our experience that it is just the right amount of
logic to be able to create a good static website. 

Hugo uses the excellent [Go][] [html/template][gohtmltemplate] library for
its template engine. It is an extremely lightweight engine that provides a very
small amount of logic. In our experience that it is just the right amount of
logic to be able to create a good static website. 
</div>
</p>

### A blockquote example
<div>
<blockquote class="styled-blockquote">
Desargues stammte aus einer angesehenen Familie von Juristen in Paris und in Lyon, wo die Familie mehrere Häuser und ein Landgut besaß. Sein Vater war königlicher Notar und hatte hohe Ämter in Lyon. Desargues war das dritte von sechs Kindern.
</blockquote>
</div>

### Formatted code example
<pre class="mylatex"><code class="language-java"> 
	public String toString()	{
		if (this == INFINITE_COMPLEX) return "Infinity";
		return Double.toString(re)+" + "+Double.toString(im)+" i";
	}
   </code></pre>

<div class="pre">
<p> How is this looking?</p>
</div>


[go]: https://golang.org/
[gohtmltemplate]: https://golang.org/pkg/html/template/