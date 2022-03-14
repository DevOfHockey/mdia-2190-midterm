
//MUST HAVE - CREATE A TEMPLATE TAG
var template_questionbox = document.createElement("template"); //<template> </template> RULE
//To-do - CREATE THE UI HERE!
template_questionbox.innerHTML = `
<style>
.box {
<<<<<<< HEAD
=======
    display: grid;
    justify-content:center;
    justify-self: center;
    align-items: center;
    text-align: center;
>>>>>>> 0a2f7343e7215ecd441cfb5b8d580f8e60b81ae0
    width: 134px;
    height: 134px;
    background-color: #485470;
    margin: 5px;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
<<<<<<< HEAD
    display: flex;
    justify-content:center;
    align-items: center;
    text-align: center;
=======

>>>>>>> 0a2f7343e7215ecd441cfb5b8d580f8e60b81ae0
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>
<div class="box" onclick="changeColorFunc()">
    Polyester
</div>
`;
//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class Questionbox extends HTMLElement {
    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot
        //To-do - CREATE THE STATES FOR THE UI HERE!
    }
    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_questionbox.content.cloneNode(true)); //use the template to make a clone
        // this.shadowRoot.querySelector(".box").on = () => this.changeColor(
        //     this.getAttribute('bg')
        //     );
        this.shadowRoot.querySelector(".box").style.backgroundColor = this.getAttribute('bg');
  
        if(this.getAttribute("text")){
          this.shadowRoot.querySelector(".box").innerText = this.getAttribute("text");
        }
    }
    //To-do - CREATE THE FUNCTIONALITIES HERE!
    changeColor(color='#333') {
        this.shadowRoot.querySelector(".box").style.cssText = `
        background-color:${color};
        `;
    }

}
//MUST HAVE - define the tag for the custom elements
customElements.define("question-box", Questionbox)

