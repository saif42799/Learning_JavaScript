// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser
//       and provides you with an API to interact with it. 
//       Web browser constructs the DOM when it loads an HTML document, 
//       and structures all the elements in a tree-like representation. 
//       JavaScript can access the DOM to dynamically 
//       change the context, structure, and style of web page.


// document = select element by ID
document.getElementById("");

// displays the HTML document  
console.log(document);

// dir = directory, list all properties of this object 
document.title = "My Website"; // <- ex.changeing properties 
document.body.style.backgroundColor = "hsl(0, 0%, 15%)"; // <- another ex
console.dir(document);


// html ex.
const username = "Bro Code";
// conditional change the content of the HTML document
const welcomeMSG = document.getElementById("welcome-msg");
// update the text content of the document 
welcomeMSG.textContent += username === "" ? `Guest` : username;
