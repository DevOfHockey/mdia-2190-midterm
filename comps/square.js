
//MUST HAVE - CREATE A TEMPLATE TAG
var template_square = document.createElement("template"); //<template> </template> RULE
//To-do - CREATE THE UI HERE!
template_square.innerHTML = `
<style>
.square {
    display: grid;
    justify-content: center;
    justify-self: center;
    align-content: center;
    grid-auto-flow: column;
    grid-column: 2 / 3;
    grid-gap: 15px;
}

img {
    width: 130px;
    height: 130px;
}

img.polyester:hover {
    filter: drop-shadow(5px 5px 5px #67664F);
}

img.nylon:hover {
    filter: drop-shadow(5px 5px 5px #67664F);
}

img.acrylic:hover {
    filter: drop-shadow(5px 5px 5px #67664F);
}

img.spandex:hover {
    filter: drop-shadow(5px 5px 5px #67664F);
}

</style>

<div class="squares">
    <div class="square">
        <img class="polyester" src="/imgs/box1.svg" onclick="myFunction()">
        <img class="nylon" src="/imgs/box2.svg">
        <img class="acrylic" src="/imgs/box3.svg">
        <img class="spandex" src="/imgs/box4.svg">
    </div>
</div>
`;
//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class Square extends HTMLElement {
    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot
        //To-do - CREATE THE STATES FOR THE UI HERE!
    }
    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_square.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector('.square > img:nth-child(1)').onclick = () => this.showbox1();
        this.shadowRoot.querySelector('.square > img:nth-child(2)').onclick = () => this.showbox2();
        this.shadowRoot.querySelector('.square > img:nth-child(3)').onclick = () => this.showbox3();
        this.shadowRoot.querySelector('.square > img:nth-child(4)').onclick = () => this.showbox4();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    showbox1(){
        this.shadowRoot.querySelector('.square > img:nth-child(1)').src= '/imgs/box5.svg';
    }
    showbox2(){
        this.shadowRoot.querySelector('.square > img:nth-child(2)').src= '/imgs/box5.svg';
    }
    showbox3(){
        this.shadowRoot.querySelector('.square > img:nth-child(3)').src= '/imgs/box5.svg';
    }
    showbox4(){
        this.shadowRoot.querySelector('.square > img:nth-child(4)').src= '/imgs/box5.svg';
    }

}
//MUST HAVE - define the tag for the custom elements
customElements.define("square-box", Square)