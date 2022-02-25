//MUST HAVE - CREATE A TEMPLATE TAG
var template_sectionheader = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_sectionheader.innerHTML = `
<style>
.head {
font-family: Open Sans;
font-weight: bold;
font-size: 20px;
line-height: 65px;
display: flex;
justify-content:center;
align-items: center;
text-align: center;
color: #393B1A;
}
</style>

<div class="head">
Toxic Chemicals used to Produce Fast Fashion
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class Sectionheader extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_sectionheader.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("header")){
            this.shadowRoot.querySelector(".head").innerText = this.getAttribute("header");
          }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("section-header", Sectionheader)