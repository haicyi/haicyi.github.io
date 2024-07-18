// 底端按钮
window.onscroll=function(){
    if(document.body.scrollTop>20||document.documentElement.scrollTop>20){
        document.getElementById("myBtn").style.display="block";
    }
    else{
        document.getElementById("myBtn").style.display="none";
    }
};

function topFunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}
// ↑顶端按钮

class Hanzi extends HTMLElement{
    constructor(){
        super();
        const template=document.createElement('template');
        template.innerHTML='<div>${this.textContent}</div>';
        this.attachShadow({mode:'open'}).appendChild(template.content.cloneNode(true));
    }
}

customElements.define('item',Hanzi);
customElements.define('hanzi',Hanzi);
customElements.define('word',Hanzi);
customElements.define('phiou',Hanzi);
customElements.define('zi',Hanzi);
customElements.define('ci',Hanzi);