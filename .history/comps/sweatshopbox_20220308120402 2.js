//1- CREATE A TEMPLATE TAG
var template_sweatshop = document.createElement("template"); //<template> </template> RULE

//2- CREATE UI HERE (optional)!
template_sweatshop.innerHTML = `
<style>
    .chimneyshort {
        background-color: #AEA49B;
        width: 50px;
        height: 100px;
        position: relative;
        left: 65%;
    }

    .chimneylong {
        background-color: #AEA49B;
        width: 50px;
        height: 70px;
        position: relative;
        left: 65%;
    }

    .sweatshop {
        background-color: #AEA49B;
        width: 400px;
        height: 200px;
    }
</style>

<div id ="sweatshopmain">
    <div class=chimneylong></div>
    <div class=chimneyshort></div>
    <div class=sweatshop></div>
</div>
`;

//3- CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheSweatshop extends HTMLElement {

    //4- CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //5- CREATE THE STATES FOR THE UI HERE!
    }

    //6- FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_sweatshop.content.cloneNode(true)); //use the template to make a clone
    }

    //7- CREATE THE FUNCTIONALITIES HERE!

}

//8- define the tag for the custom elements
customElements.define("the-sweatshop", TheSweatshop)