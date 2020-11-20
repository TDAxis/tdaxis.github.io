//import bulmaSteps from '/node_modules/bulma-extensions/bulma-steps/dist/js/bulma-steps.min.js';


//bulmaSteps.attach();
// burger menu for mobile devices active tag
function toggleBurger() {
    let burgerIcon = document.getElementById('burger');
    let dropMenu = document.getElementById('nav-menu');
    burgerIcon.classList.toggle('is-active');
    dropMenu.classList.toggle('is-active');
}

// TABS code
function openTab(event, tabId){
    // Get all content with class tabcontent and hide them
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i=0; i<tabcontent.length;i++){
        tabcontent[i].style.display = 'none';
    }
    // Get all element with class tablinks and remove is-active
    tablinks = document.getElementsByClassName('tablinks');
    for (i=0; i<tablinks.length;i++){
        tablinks[i].className = tablinks[i].className.replace(' is-active', '');
    }
    //Show current tab and add is-actve to that tab
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.className += " is-active";
}


// Steps code
currentStep = 0;
stepContent = document.getElementsByClassName('step-content');
stepItem = document.getElementsByClassName('step-item');

function nextStep(){
    currentStep += 1;
    if(currentStep < stepContent.length){
        // Get all content with class step-content and hide them
        stepContent[currentStep-1].className = stepContent[currentStep].className.replace(' is-active', '');
        stepContent[currentStep].className += ' is-active';
        // Get all element with class tablinks and remove is-active
        stepItem[currentStep-1].className = stepItem[currentStep].className.replace(' is-active', '');
        stepItem[currentStep-1].className += ' is-completed'
        stepItem[currentStep].className += ' is-active'; 
        //Show current tab and add is-active to that tab   
        console.log("Click - Next " + currentStep);
    }
    else {
         currentStep = stepContent.length-1;
    }
}
function prevStep(){
    currentStep -=1;
    if(currentStep >= 0){
        // Get all content with class step-content and hide them
        stepContent[currentStep+1].className = stepContent[currentStep].className.replace(' is-active', '');
        stepContent[currentStep].className += ' is-active';
        // Get all element with class tablinks and remove is-active
        stepItem[currentStep].className = stepItem[currentStep].className.replace(' is-completed', '');
        stepItem[currentStep].className += ' is-active';
        stepItem[currentStep+1].className = stepItem[currentStep].className.replace(' is-active', ''); 
        //Show current tab and add is-active to that tab
        console.log("Click - Prev " + currentStep);
    }
    else {
        currentStep = 0;
    }
}
