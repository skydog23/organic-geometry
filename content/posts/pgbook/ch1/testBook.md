+++
title = "Everything comes in pairs"
description = ""
date = "2025-03-11"
categories = [
    "Book",
    "Testing",
]
menu = "pgbook"
type = "posts"
+++


We saw in the previous tutorial that projective geometry arose out of 
perspective painting by the addition of new elements, first noticed by Renaissance painters,
where parallel lines and planes meet.

The addition of these new elements in projective geometry (PG) 
had unexpected and far-reaching consequences.
To simplify the discussion, we focus now on 2D projective geometry, the projective plane $P(\mathbb{R}^2)$.
It arises from the euclidean plane $\mathbf{E}^2$ by adding an ideal line along with all its points,
the *ideal* points of the projective plane.

### Duality

The innocent-looking addition of these ideal elements brings far-reaching consequences for projective geometry.
Consider the following two statements in plane geometry.

<div class="two-column-container">
  <div class="column">
    Every two distinct points have a unique joining line. 
 </div>
  <div class="column">
    Every two distinct lines have a unique intersection point. 
  </div>
</div>

<script src="/js/ganja/duality.js"></script>
<div class="two-column-container">
  <div class="column">
    <div id="ganja-script"  width:95%; height:95%; background:#ffffcc">
    </div>
    <script> document.getElementById("ganja-script").appendChild(graphics) </script>
 </div>
  <div class="column">
    <div id="ganja-script-2"  width:95%; height:95%; background:#ffffcc">
    </div>
     <script> document.getElementById("ganja-script-2").appendChild(dgraphics) </script>
</div>
</div>

Notice that the second statement is not true in euclidean geometry since the two lines can be parallel. 
But with the addition of ideal points, it **is** always true in projective geometry.

### Dictionary of duality

Dualizing means to use a *dictionary of duality* to replace dual terms with their dual partners.  Some of the pairs in the dictionary are nouns (point/line) while others are verbs (join/intersect). Any term not in the dictionary remains unchanged by dualizing.

| Term      | Dual Term |
| ----------- | ----------- |
| line      | point       |
| join   | intersect        |
| lies on   | passes through        |
| rotate around   | move along        |


Notice that the dual pairs are symmetric; for each pair, you can switch the left and right terms without changing the meaning.
So it's not like an ordinary dictionary where one of the partner terms belongs to, say, English language and the other is German language.  There is only the one language of projective geometry, and within this language there are pairs of dual partners.

### Example 

The dual of
<blockquote class="styled-blockquote">
<p>A point moving along a line and joined to a point not lying on the line.</p>
</blockquote>
is
<blockquote class="styled-blockquote">
<p>A line rotating around a point and intersected with a line not passing through the point.</p>
</blockquote>

From this follows the **Principle of duality**: 

<CENTER>
<SPAN STYLE="border:1px solid black; background:#ffffcc; padding:10px">
<b>A statement in projective geometry is true $\iff$ its dual statement is true.</b>
</SPAN>
</CENTER>



`


