//1- CREATE A TEMPLATE TAG
var template_slider = document.createElement("template"); //<template> </template> RULE

//2- CREATE UI HERE (optional)!
template_slider.innerHTML = `
<style>
    img {
        justify-content:center;
        width: 800px;
        height: 500px;
    }
</style>

<div>
    <img src="/imgs/sweatshoptwo.jpeg"
</div>
`;

//3- CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class ThePhotoSlider extends HTMLElement {

    //4- CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //5- CREATE THE STATES FOR THE UI HERE!
    }

    //6- FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_slider.content.cloneNode(true)); //use the template to make a clone
    }

    //7- CREATE THE FUNCTIONALITIES HERE!

}

//8- define the tag for the custom elements
customElements.define("the-photoslider", ThePhotoSlider)