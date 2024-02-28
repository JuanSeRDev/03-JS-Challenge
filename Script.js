const share = document.querySelector(".share-botton");
const shareOption = document.querySelector(".share");

share.addEventListener("click", ()=>{
    if (shareOption.style.display === "none") {
        shareOption.style.display = "flex";
    } else {
        shareOption.style.display = "none";
    }
})

const share2 = document.querySelector(".share-botton-2").addEventListener("click", ()=>{
    if (shareOption.style.display === "none") {
        shareOption.style.display = "flex";
    } else {
        shareOption.style.display = "none";
    }
})
