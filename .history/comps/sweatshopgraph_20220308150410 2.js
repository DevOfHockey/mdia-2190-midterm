//1- CREATE A TEMPLATE TAG
var template_graph = document.createElement("template"); //<template> </template> RULE

//2- CREATE UI HERE (optional)!
template_graph.innerHTML = `
<style>
div {
    width: 100px;
    height: 40px;
    background: #AEA49B;
    font-family: Sans-serif;
    color: white;
    text-align: center;
}
</style>

<div id="countries">
    <div class="China">China</div><br>
    <div class="Vietnam">Vietnam</div><br>
    <div class="Bangladesh">Bangladesh</div><br>
    <div class="India">India</div><br>
    <div class="Cambodia">Cambodia</div><br>
</div>

`;

//3- CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheGraph extends HTMLElement {

    //4- CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //5- CREATE THE STATES FOR THE UI HERE!
    }

    //6- FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_graph.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector('.China').onclick = () => this.showChinagraph();
    }

    //7- CREATE THE FUNCTIONALITIES HERE!
    showChinagraph(){
        this.shadowRoot.querySelector('.China').style.cssText= `
            transition: width 1s;
            transition-timing-function: linear;
            width: 300px;
            background: #74724E;
        `;
    }

}

//8- define the tag for the custom elements
customElements.define("the-graph", TheGraph)