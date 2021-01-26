const botDeveloperBTN = document.querySelector(".Bot_Developer");
const managerBTN = document.querySelector(".Manager");
const webDeveloperBTN = document.querySelector(".Web_Developer");
const designerBTN = document.querySelector(".Designer");
const botDevelopModal = document.querySelector(".botDevelopModal");
const designerModal = document.querySelector(".designerModal");
const managerModal = document.querySelector(".managerModal");
const webDevelopModal = document.querySelector(".webDevelopModal");
const jobModal = document.querySelector(".Jobmodal")

let BotDeveloper_showModal = false;
let Designer_showModal = false;
let WebDeveloper_showModal = false;
let Manager_showModal = false;

function showBotDeveloperModal(){
    if(BotDeveloper_showModal == false){
        jobModal.classList.remove('hide');
        botDevelopModal.classList.remove('hide');
        designerModal.classList.add('hide');
        managerModal.classList.add('hide');
        webDevelopModal.classList.add('hide');
        BotDeveloper_showModal = true;
        Designer_showModal = false;
        WebDeveloper_showModal = false;
        Manager_showModal = false;
    } else {
        BotDeveloper_showModal = false;
        jobModal.classList.add('hide');
    }
}

function showDesignerModal(){
    if(Designer_showModal == false){
        jobModal.classList.remove('hide');
        designerModal.classList.remove('hide');
        botDevelopModal.classList.add('hide');
        managerModal.classList.add('hide');
        webDevelopModal.classList.add('hide');
        Designer_showModal = true;
        BotDeveloper_showModal = false;
        WebDeveloper_showModal = false;
        Manager_showModal = false;
    } else {
        Designer_showModal = false;
        jobModal.classList.add('hide');
    }
}

function showManagerModal(){
    if(Manager_showModal == false){
        jobModal.classList.remove('hide');
        managerModal.classList.remove('hide');
        botDevelopModal.classList.add('hide');
        designerModal.classList.add('hide');
        webDevelopModal.classList.add('hide');
        Manager_showModal = true;
        BotDeveloper_showModal = false;
        Designer_showModal = false;
        WebDeveloper_showModal = false;
    } else {
        Manager_showModal = false;
        jobModal.classList.add('hide');
    }
}

function showWebDeveloperModal(){
    if(WebDeveloper_showModal == false){
        jobModal.classList.remove('hide');
        webDevelopModal.classList.remove('hide');
        botDevelopModal.classList.add('hide');
        managerModal.classList.add('hide');
        designerModal.classList.add('hide');
        WebDeveloper_showModal = true;
        BotDeveloper_showModal = false;
        Designer_showModal = false;
        Manager_showModal = false;
    } else {
        WebDeveloper_showModal = false;
        jobModal.classList.add('hide');
    }
}


botDeveloperBTN.addEventListener("click",showBotDeveloperModal);
designerBTN.addEventListener("click",showDesignerModal);
managerBTN.addEventListener("click",showManagerModal);
webDeveloperBTN.addEventListener("click",showWebDeveloperModal);
