//1- CREATE A TEMPLATE TAG
var template_comp = document.createElement("template"); //<template> </template> RULE

//2- CREATE UI HERE (optional)!
template_comp.innerHTML = `
<style>
.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #000;
    text-align: center;
    background: #74722E;
    color: #000;
    border: 5px solid black;
    
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>

<div class="circle">
    Click
    Me
</div>
`;

//3- CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheComp extends HTMLElement {

    //4- CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //5- CREATE THE STATES FOR THE UI HERE!
    }

    //6- FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_comp.content.cloneNode(true)); //use the template to make a clone
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

//8- define the tag for the custom elements
customElements.define("button-click", TheComp)

