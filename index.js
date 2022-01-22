let inputTag = document.querySelector("#chip-text");
let chipsContainer = document.querySelector(".chips-container");

function handleEnter(e){
    if(e.key==="Enter"){
        if(e.target.value.trim().length === 0){
            return
        }
        let newChip = document.createElement("div")
        newChip.classList.add("chip")
        newChip.innerHTML =`${e.target.value} <span class="fas fa-times chip-del"></span>`
        chipsContainer.appendChild(newChip)
        newChip.lastChild.addEventListener("click",delChip)
        e.target.value=""
    }
}
inputTag.addEventListener('keypress',handleEnter)

let chipDelBtns = document.getElementsByClassName("chip-del");

function delChip(e){
    e.target.parentElement.remove()
}
for(btn of chipDelBtns){
    btn.addEventListener("click",delChip)
}