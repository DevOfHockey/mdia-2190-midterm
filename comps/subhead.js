//MUST HAVE - CREATE A TEMPLATE TAG
var template_subhead = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_subhead.innerHTML = `
<style>
.subhead {
font-family: Open Sans;
font-weight: bold;
font-size: 15px;
line-height: 33px;
text-align: center;
color: #988F87;
}
</style>

<div class="subhead">
Go on a journey with us to learn more about what goes into fast fashion and its effects on the world and it’s people.
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class Subhead extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_subhead.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("subheader")){
            this.shadowRoot.querySelector(".subhead").innerText = this.getAttribute("subheader");
          }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("sub-heading", Subhead)