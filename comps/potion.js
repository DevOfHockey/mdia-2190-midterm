//MUST HAVE - CREATE A TEMPLATE TAG
var template_potion = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_potion.innerHTML = `
<style>
.potion {
width: 25px;
height: 30px;
margin-left: 22px;
background: #E7E2DC;
border: 1px solid #000000;
box-sizing: border-box;
font-size: 12px;
display: flex;
justify-content:center;
align-items: center;
}

.potions {
width: 69px;
height: 69px;
border-radius: 50%;
margin-bottom: 5px;
background: #855DD9;
border: 1px solid #000000;
box-sizing: border-box;
font-family: Open Sans;
font-weight: bold;
font-size: 12px;
line-height: 33px;
display: flex;
justify-content:center;
align-items: center;
text-align: center;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>

<div class="potion"></div>
<div class="potions">
25 g
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class Potion extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_potion.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".potions").onclick = () => this.changeColor(
            this.getAttribute('bg')
            );
  
        if(this.getAttribute("text")){
          this.shadowRoot.querySelector(".potions").innerText = this.getAttribute("text");
        }
        this.shadowRoot.querySelector(".potions").onclick = () => this.changeText();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    changeColor(color='#333') {
        this.shadowRoot.querySelector(".potions").style.cssText = `
        background-color:${color};
        `;
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-potion", Potion)