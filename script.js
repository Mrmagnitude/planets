/* creates local storage for prefered themes  and a  theme switch variable */
const page=document.querySelector("body");
const theme_switcher=document.querySelector(".themes");
const storageKey= "theme_prefrence";

/* read system prefered themes and save output as theme_prefrence */
function defaults(){
    if (localStorage.theme_prefrence){
        return localStorage.theme_prefrence
    }
    else return window.matchMedia('(prefers-color-scheme: dark)').matches?"dark" :"light"
};
/* save system prefered theme to local storage */
localStorage.setItem("theme_prefrence",defaults());

/* set a theme value function  to change the preferred theme*/
function themeValue () {
    if (localStorage.getItem("theme_prefrence") === "dark"){
        localStorage.setItem("theme_prefrence","light")
        return "light"
    }
    else 
        localStorage.setItem("theme_prefrence","dark")
        return "dark"
}
/* a function too change the current theme to the desired themes */
const change=()=>page.setAttribute('data-theme',themeValue())

/* event lisinner fo the theme button */
theme_switcher.addEventListener("click",change);

document.addEventListener("DOMContentLoaded", function() {
    page.setAttribute('data-theme',localStorage.getItem("theme_prefrence"))
});
