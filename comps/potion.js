//MUST HAVE - CREATE A TEMPLATE TAG
var template_potion = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_potion.innerHTML = `
<style>
.potion {
    width: 25px;
    height: 30px;
    margin-left: 23px;
    background: #E7E2DC;
    border: 1px solid #000000;
    box-sizing: border-box;
    font-size: 12px;
    justify-content: center;
    justify-self: center;
    align-items: center;
}

.potions {
    display: grid;
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
    justify-content: center;
    justify-self: center;
    align-items: center;
    text-align: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

<style id='mystyle'>
    .bkg {
      position:fixed;
      left:0;
      top:0;
      z-index:-1;
      width:100vw;
      height:100vh;
    }

    .bkg img {
      width:100%;
      height:100%;
      object-fit:cover;
    }
</style>

<div class="potion"></div>
<div class="potions">25 g</div>

<div class='bkg'>
    <img src="./imgs/potion.svg' />
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

        this.shadowRoot.querySelector(".bkg").onclick = () => this.changeBG();

        if(this.getAttribute("text")){
          this.shadowRoot.querySelector(".potions").innerText = this.getAttribute("text");
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    changeColor(color='#333') {
        this.shadowRoot.querySelector(".potions").style.cssText = `
        background-color:${color};
        `;

    changeBG(bkg='./imgs/potion.svg'){
        this.shadowRoot.querySelector('.bkg > img').src = `bkg`;
          }
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-potion", Potion)