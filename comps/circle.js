//MUST HAVE - CREATE A TEMPLATE TAG
var template_circle = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_circle.innerHTML = `
<style>
.circle {
background: #74724E;
border-radius: 50%;
border: 2px solid #000000;
box-sizing: border-box;
width: 280px;
height: 280px;
margin: 5px;

font-family: Open Sans;
font-weight: bold;
font-size: 12px;
line-height: 33px;
display: flex;
justify-content:center;
align-items: center;
text-align: center;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>

<div class="circle">
What are the Effects of Toxic Chemicals in Clothing?
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
customElements.define("the-circle", Circle)