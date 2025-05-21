+++
title = "Testing testing testing"
description = ""
date = "2025-03-02"
categories = [
    "Testing",
    "Suffering",
]
menu = "main"
draft = "true"
+++


## Sandbox for testing css styles

I am trying to get the appearance of my blog entries to look good. I am using *css classes* for this purpose.
With the hugo-book theme, I am beginning to have some success!

### A floating figure example
<p>
<div> 

 <div style="float: inline-start; margin: 0.1em; border: 0px solid #ccc; padding: 0.0em; ">
    {{< img src="images/portraits/GretschelFrontPage.png" width="100px" height="auto" alt="157 years old!" >}}
 </div>
  
<div style="float: inline-end; margin: 0.1em; width=200px border: 0px solid #ccc; padding: 0.0em;">
     {{< img src="images/portraits/GretschelFrontPage.png" width="200px" height="auto" alt="Wow!" >}}

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

### Printing code just by indenting properly

It appears to me that just by indenting text as if it were code, the text will be displayed as code! Let's try that out:

    var panel = ram_design;
    if (backup + system) {
        file.readPoint = network_native;
        sidebar_engine_device(cell_tftp_raster,
                dual_login_paper.adf_vci.application_reader_design(
                graphicsNvramCdma, lpi_footer_snmp, integer_model));
    }

### Using a shortcode for floating figures

{{< imgDiv class="img-div" >}}
 
TYPO3 uses a template engine to generate the necessary HTML markup for a website. The template engine provides data from the backend, such as content or menu structures, which can then be formatted with HTML.  TYPO3's template engine of choice is called Fluid. Fluid's syntax is inspired by the syntax of HTML or XML documents, so it should already be familiar for users that already know HTML. Letztes Wochenende waren wir zur Hauptprobe, und wir waren begeistert: Von der Musik, von der Freude der Beteiligten und von der Botschaft, die davon ausgeht.
Wir würden uns freuen, wenn Ihr kommt. Meldet Euch bei uns vor dem Ticket-Kauf: Als Mitsänger haben wir Rabattgutscheine (15%), die wir Euch gern geben.
Seid dabei am 22. März um 19 Uhr in der Uber-Arena, Nähe Ostbahnhof.

Ich sende euch ein Dokument von George Adams aus dem Jahr 1942, einen langen Brief an seine Kollegin Olive Whicher, in dem er seine „wissenschaftliche Autobiografie“ nachzeichnet und dabei meisterhaft beschreibt, wie die moderne Wissenschaft und Mathematik mit Hilfe der Geisteswissenschaft neu interpretiert werden kann.
{{< /imgDiv >}}

[go]: https://golang.org/
[gohtmltemplate]: https://golang.org/pkg/html/template/