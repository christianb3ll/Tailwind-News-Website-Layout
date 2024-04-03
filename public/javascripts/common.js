let togglebtn = document.getElementById("navtoggle");
togglebtn.addEventListener("click", Toggle);
closebtn.addEventListener("click", CloseMenu);

function Toggle(){
    let nav = document.getElementById("mainnav").classList;
    let overlay = document.getElementById("overlay").classList;
    let closebtn = document.getElementById("closebtn").classList;
    
    nav.toggle("hidden");
    overlay.toggle("hidden");
    closebtn.toggle("hidden");
}

function CloseMenu(){
    Toggle();
}