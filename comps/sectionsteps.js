//MUST HAVE - CREATE A TEMPLATE TAG
var template_sectionsteps = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_sectionsteps.innerHTML = `
<style>
.steps{
font-family: Open Sans;
font-weight: bold;
font-size: 15px;
line-height: 33px;
display: flex;
justify-content:center;
align-items: center;
text-align: center;
color: #393B1A;
}
</style>

<div class="steps">
  <div>
      <div class="one">Step 1 - Chemicals</div>
      <div class="two">What Amount of Chemicals do we need to Produce 1 kg of Textile?</div>
  </div>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class Sectionsteps extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_sectionsteps.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("heading")){
            this.shadowRoot.querySelector(".steps .one").innerText = this.getAttribute("heading");
          }
          if(this.getAttribute("subheading")){
            this.shadowRoot.querySelector(".steps .two").innerText = this.getAttribute("subheading");
          }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("section-steps", Sectionsteps)