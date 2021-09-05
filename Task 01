*** Difference between Browser JS and Node JS ***

Browser Javascript is used to run javascript programming language only in the browsers.
Node.js is a javascript runtime environment based on V8 engine which can run javascript on any machine rather than sandboxed environment like browser.

Since browers take time to upgrade to the modern ES standards testing code with modern ES standards has restrictions in browser js.
With Node.js one can test code with modern coding improvements as the new javascript version releases.

Browser Javascript uses ES modules Standard.
Node.js uses CommonJS module system.

Browser JS is only used in frontend development.
On the other hand, Node.js can be used in both frontend as well as backend development.

Browser JS is capable to add HTML tags and play with DOM.
Node.js does not have capability to add HTML tags.





*** Summary - Ryan Seddon: So how does the browser actually render a website ***

=> Components of browser - Bindings, Rendering (Parsing, Layout, Painting), Platform, Javascript Virtual Machine

=> Rendering Flow
   (Parse HTML + Parse CSS) --> Render Tree --> Layout --> Paint
   

=> Parsing HTML & CSS
   Even though if we do errors mostly the HTML tries to correct it by itself (eg. forget to close tags, missing tags, etc.)
   
   Back then xhtml had strict parsing, but modern JS and HTML is not that strict while parsing.
   
   Parsing flow: Tokeniser --> Tree Construction --> DOM --> Script Execution  (cycle)
   
   When parse finds the script tag it stops and executes the script and then continues parsing, this can slow down parsing.
   
   Script tag is always good to place in the bottom of the tree as it will not interrupt and slows down during parsing.
   
   HTML parsing - DOM; CSS parsing - CSSOM
   
   
=> Render Tree
   Has multiple trees,
   - Render Objects
   - Render Styles
   - Render Layers
   - Line boxes
   
   Not in the render tree: head, script, title, elements hidden with none, etc.
   
=> Paint
   Takes render tree and creates layers.
   
   Produces bitmap from each layer and uploads it to the GPU as a texture and renders to the screen.
     




*** typeof Operator ***   -   The typeof operator

typeof(1) - number
typeof(1.1) - number
typeof('1.1') - string
typeof(true) - boolean
typeof(null) - object
typeof(undefined) - undefined
typeof([]) - object  // Although [] represents an array, js treats them as object, we can use Array isArray() to check whether the returned object is an array
typeof({}) - object
typeof(NaN) - number
