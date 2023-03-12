var menu_icon =document.querySelector(".Menu_Icon");
var side_bar =document.querySelector(".Side_Bar");
var container =document.querySelector(".container");

menu_icon.onclick=function()
{
    side_bar.classList.toggle("small_sidebar");
    container.classList.toggle("large_container");
}

