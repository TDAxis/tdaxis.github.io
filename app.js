
// burger menu for mobile devices active tag
function toggleBurger() {
    let burgerIcon = document.getElementById('burger');
    let dropMenu = document.getElementById('nav-menu');
    burgerIcon.classList.toggle('is-active');
    dropMenu.classList.toggle('is-active');
    console.log("click");
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
