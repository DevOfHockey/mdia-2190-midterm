//MUST HAVE - CREATE A TEMPLATE TAG
var template_bubble = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_bubble.innerHTML = `
<style>
.bubbles {
background: #AEA49B;
border-radius: 5px;;
width: 120px;
height: 90px;
margin: 5px;
font-size: 10px;
display: flex;
display: justify-content;
align-items: center;
text-align: center;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>

<div class="bubbles"

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
        if(this.getAttribute("text")){
            this.shadowRoot.querySelector(".bubbles").innerText = this.getAttribute("text");
          }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-bubble", Bubble)