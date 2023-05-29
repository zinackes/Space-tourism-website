const header_separator = document.getElementById("header-separator");
let z = 975;
addEventListener("resize", () =>{
    let w = window.innerWidth - z;
    header_separator.style.width = w + "px";
})


addEventListener("load", () =>{
    let w = window.innerWidth - z;
    header_separator.style.width = w + "px";
})

