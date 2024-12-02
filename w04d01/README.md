# W04D01 - Intro to CSS

### To Do
* [x] Demo this week's project
* [x] Semantic Tags
* [x] Attributes
* [x] Intro to CSS
* [x] Inline styles
* [x] Style element
* [x] Selectors
* [x] DevTools
* [x] Box Model and Box Sizing
* [x] External Stylesheets
* [x] CSS Resets/Normalize
* [x] Specificity

### Semantic Tags
* added in HTML5
* give something meaning
* semantic aliases for div

* section
* article
* aside
* header
* footer


style-rule: style-value; style-rule: style-value;

### Box Model
* everything on a website is a rectangle
* content: space reserved for the actual content that we show
* padding: provides space around the content
* border: provides a solid outline for our rectangle
* margin: provides spacing between elements on the page

### Border Box
* content-box: width = content
   400  =    ???  + 25 + 10  + 2 + 5
* border-box: width (content, padding, border)
   400  = 

### Specificity
* allows us to be more or less specific when targetting elements
* just specific enough that your styles apply
* not so specific that they can't be overriden in the future

thousands = inline styles
hundreds = id's
tens = classes
ones = elements

0,1,1,1
h2.content#my-id {}

0,0,1,1
h2.content {

}

0,0,0,2
header h2 {
  color: orange;
}

0,0,0,1
h2 {
  color: blue;
}

0,0,0,1
h2 {
  color: grey;
}







