//MUST HAVE - CREATE A TEMPLATE TAG
var template_salary = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_salary.innerHTML = `
<style>
img {
    width: 200px;
    height: 200px;
}

img:nth-child(3) {
    display: flex;
    justify-content: center;
    width: 10px;
}

</style>

<div class="salarybox">
    <img src="/imgs/2dollar.svg">
    <img src="/imgs/5dollar.svg">
    <img src="/imgs/10dollar.svg">
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheSalary extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_salary.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-salary", TheSalary)