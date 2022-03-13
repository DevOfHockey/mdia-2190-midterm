//MUST HAVE - CREATE A TEMPLATE TAG
var template_circle = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_circle.innerHTML = `
<style>
.circle { 
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  text-align: center;
  background: #74722E;
  color: #000;
  border: 5px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 300px;
} 
</style>

<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;lang=en" />
  
  <div class="circle"> 
    Click Me
  </div> 
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class Circle extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_circle.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".circle").onclick = () => this.changeColor(
            this.getAttribute('bg')
            );
  
        if(this.getAttribute("text")){
          this.shadowRoot.querySelector(".circle").innerText = this.getAttribute("text");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    changeColor(color='#AEA49E') {
        this.shadowRoot.querySelector(".circle").style.cssText = `
        background-color:${color};
        `;
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("clickme-button", Circle)