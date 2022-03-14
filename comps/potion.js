//MUST HAVE - CREATE A TEMPLATE TAG
var template_potion = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_potion.innerHTML = `
<style>

.potion {
    display: grid;
    justify-content: center;
    justify-self: center;
    align-content: center;
    grid-auto-flow: column;
    grid-column: 2 / 3;
}

img {
    width: 150px;
    height: 150px;
    display: grid;
}

img.p-one:hover {
    filter: drop-shadow(5px 5px 5px #67664F);
}

img.p-two:hover {
    filter: drop-shadow(5px 5px 5px #67664F);
}

img.p-three:hover {
    filter: drop-shadow(5px 5px 5px #67664F);
}

</style>
<div class="potions">
    <div class="potion">
    <img class="p-one" src="/imgs/potion.svg" onclick="myFunction()">
    <img class="p-two" src="/imgs/potion2.svg">
    <img class="p-three" src="/imgs/potion3.svg">
    </div>
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
        this.shadowRoot.querySelector('.potion > img:nth-child(1)').onclick = () => this.showone();
        this.shadowRoot.querySelector('.potion > img:nth-child(2)').onclick = () => this.showtwo();
        this.shadowRoot.querySelector('.potion > img:nth-child(3)').onclick = () => this.showthree();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    showone(){
        this.shadowRoot.querySelector('.potion > img:nth-child(1)').src= '/imgs/Potion-no.svg';
    }
    showtwo(){
        this.shadowRoot.querySelector('.potion > img:nth-child(2)').src= '/imgs/Potion-no.svg';
    }
    showthree(){
        this.shadowRoot.querySelector('.potion > img:nth-child(3)').src= '/imgs/Potion-yes.svg';
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-potion", Potion)
