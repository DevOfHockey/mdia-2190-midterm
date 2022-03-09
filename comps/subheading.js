//MUST HAVE - CREATE A TEMPLATE TAG
var template_subheading = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_subheading.innerHTML = `
<div class = "subheading">
<p>Since fast fashion is mass-produced globally, sweatshops exploit and harass their workforce in order to meet the economic demand.</p>
</div>
<style>
p {
    font-size: 20px;
    font-weight: bold;
    color: #9a8f86;
}
</style>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheSubHeading extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_subheading.content.cloneNode(true)); //use the template to make a clone

        if(this.getAttribute("name"))
        this.shadowRoot.querySelector(".subheading > p").innerText = this.getAttribute("name");
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-subheading", TheSubHeading)