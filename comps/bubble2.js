//MUST HAVE - CREATE A TEMPLATE TAG
var template_bubble2 = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_bubble2.innerHTML = `
<style>

img {
    width: 250px;
    height: 250px;
}

img.empty:hover {
    filter: drop-shadow(5px 5px 5px #67664F);
}

</style>

<div class="bubles">
    <div class="buble">
        <img class="empty" src="/imgs/bubble3.svg" onclick="myFunction()">
    </div>
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class Bubble2 extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_bubble2.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector('.buble > img:nth-child(1)').onclick = () => this.showbubble4();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    showbubble4(){
        this.shadowRoot.querySelector('.buble > img:nth-child(1)').src= '/imgs/bubble4.svg';
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-bubbles", Bubble2)