//MUST HAVE - CREATE A TEMPLATE TAG
var template_info = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_info.innerHTML = `
<div id = "info_cont">
<h3>Info Title<h3>
<img id='image' src='/imgs/sweatshopsgraph.svg' />
</div>

<style>
h3 {
    font-size: 20px;
    font-weight: bold;
    color: #393B1A;
    text-align: left;
    margin-left: 30px;
}

#image {
    width: 400px;
    height: 300px;
}
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheInfo extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_info.content.cloneNode(true)); //use the template to make a clone
        //console.log(this.getAttribute("name"))
        this.shadowRoot.querySelector("#info_cont > h3").innerText = this.getAttribute("name");
        this.shadowRoot.querySelector("#info_cont > image").src = this.getAttribute("img");
    
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-info", TheInfo)