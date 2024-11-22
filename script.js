let darkmode = document.querySelector(".fa-moon");
function dm(){
    if(darkmode.classList.contains('fa-moon'))
    {
        darkmode.classList.replace('fa-moon','fa-sun')
        document.body.style.background="black"
        document.body.style.color="white";
    }else{
        darkmode.classList.replace('fa-sun','fa-moon')
        document.body.style.background="white"
        document.body.style.color="black";
    }
}
// menu 
var menuIcon = document.querySelector(".fa-bars");
let navlist = document.querySelector(".nav-list")
function menu(){
    if(menuIcon.classList.contains('fa-bars')){
        menuIcon.classList.replace('fa-bars','fa-xmark')
        navlist.style.display = "block";
    }
    else{
        menuIcon.classList.replace('fa-xmark','fa-bars')
        navlist.style.display = "none";
    }
}
