//MUST HAVE - CREATE A TEMPLATE TAG
var template_tb = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_tb.innerHTML = `
<style id='mystyle'>
.text-box { 
  display: flex;
  justify-content: center;
  width: 20px; 
  border-radius: 10px;
  padding: 10px 20px; 
  /* top, left, bottom*/ 
  word-wrap: break-word; /* keeps words in boundry */ 
  float: left; 
  background-color: #CBAF8F; 
  color: #5E412B;
  font: 20px;
  font-weight: bold;
  font-family: 'Open Sans',serif;
  text-align: center;
  min-width: 20%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
} 

</style>
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;lang=en" />
  
  <div class="text-box"> 
    <p>Click to Learn About How Fast Fashion is Made...</p> 
  </div> 
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TextBox extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_tb.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("text-box", TextBox)