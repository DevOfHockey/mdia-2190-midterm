//MUST HAVE - CREATE A TEMPLATE TAG
var template_circle = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_circle.innerHTML = `
<style>

img {
    width: 400px;
    height: 400px;
}

img.question:hover {
    filter: drop-shadow(5px 5px 5px #67664F);
}

</style>

<div class="circles">
    <div class="circle">
        <img class="question" src="/imgs/circle1.svg" onclick="myFunction()">
    </div>
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
        this.shadowRoot.querySelector('.circle > img:nth-child(1)').onclick = () => this.showcircle();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    showcircle(){
        this.shadowRoot.querySelector('.circle > img:nth-child(1)').src= '/imgs/circle2.svg';
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-circle", Circle)