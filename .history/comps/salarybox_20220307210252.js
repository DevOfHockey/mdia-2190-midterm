//MUST HAVE - CREATE A TEMPLATE TAG
var template_salary = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_salary.innerHTML = `
<style>
img {
    width: 200px;
    height: 200px;
}


</style>

<div id="salarybox">
    <img class="twodollar" src="/imgs/2dollar.svg" onclick="myFunction()">
    <img class="fivedollar" src="/imgs/5dollar.svg">
    <img class="tendollar" src="/imgs/10dollar.svg">
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
        this.shadowRoot.querySelector('#salarybox > img:nth-child(1)').onclick = () => this.showAnswerone();
        this.shadowRoot.querySelector('#salarybox > img:nth-child(2)').onclick = () => this.showAnswertwo();
        this.shadowRoot.querySelector('#salarybox > img:nth-child(3)').onclick = () => this.showAnswerthree();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    showAnswerone(){
        this.shadowRoot.querySelector('#salarybox > img:nth-child(1)').src= '/imgs/correctanswer.svg';
        this.shadowRoot.querySelector('#salarybox > img:nth-child(2)').src= '5dollar.svg';
        this.shadowRoot.querySelector('#salarybox > img:nth-child(3)').src= '10dollar.svg';
    }
    showAnswertwo(){
        this.shadowRoot.querySelector('#salarybox > img:nth-child(2)').src= '/imgs/wronganswer.svg';
    }
    showAnswerthree(){
        this.shadowRoot.querySelector('#salarybox > img:nth-child(3)').src= '/imgs/wronganswer.svg';
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-salary", TheSalary)