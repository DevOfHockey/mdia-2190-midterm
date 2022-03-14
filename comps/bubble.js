//MUST HAVE - CREATE A TEMPLATE TAG
var template_bubble = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_bubble.innerHTML = `
<style>

img {
    width: 250px;
    height: 250px;
}

img.blank:hover {
    filter: drop-shadow(5px 5px 5px #67664F);
}

</style>

<div class="bubbles">
    <div class="bubble">
        <img class="blank" src="/imgs/bubble1.svg" onclick="myFunction()">
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
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    showbubble2(){
        this.shadowRoot.querySelector('.bubble > img:nth-child(1)').src= '/imgs/bubble2.svg';
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-bubble", Bubble)