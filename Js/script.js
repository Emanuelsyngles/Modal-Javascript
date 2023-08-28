const openModalbutton = document.querySelector("#open-modal");
const clodModalbutton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");


[openModalbutton, clodModalbutton, fade].forEach((el) =>{
    el.addeventListener("click", () => console.log("abrir"))
})