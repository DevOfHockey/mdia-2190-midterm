//MUST HAVE - CREATE A TEMPLATE TAG
var template_bubble = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_bubble.innerHTML = `
<style>

.bubble {
    display: grid;
    justify-content: right;
    grid-auto-flow: column;
    grid-column: 2 / 3;
}

.buble {
    display: grid;
    justify-content: left;
    grid-auto-flow: column;
    grid-column: 2 / 3;
}

.clothing {
    display: grid;
    justify-content: center;
    grid-auto-flow: column;
    grid-column: 2 / 3;
  }


img {
    width: 330px;
    height: 330px;
}

img.blank:hover {
    filter: drop-shadow(5px 5px 5px #67664F);
}

img.empty:hover {
    filter: drop-shadow(5px 5px 5px #67664F);
}

</style>

<div class="bubbles">
    <div class="bubble">
        <img class="blank" src="/imgs/bubble1.svg" onclick="myFunction()">
    </div>
    <div class="clothing">
        <img src="/imgs/outfits.svg" class="clothing" width="500" height="400">
    </div>
    <div class="buble">
        <img class="empty" src="/imgs/bubble3.svg" onclick="myFunction()">
    </div>
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class Bubble extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_bubble.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector('.bubble > img:nth-child(1)').onclick = () => this.showbubble2();
        this.shadowRoot.querySelector('.buble > img:nth-child(1)').onclick = () => this.showbubble4();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    showbubble2(){
        this.shadowRoot.querySelector('.bubble > img:nth-child(1)').src= '/imgs/bubble2.svg';
    }
    showbubble4(){
        this.shadowRoot.querySelector('.buble > img:nth-child(1)').src= '/imgs/bubble4.svg';
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-bubble", Bubble)