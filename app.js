let btn = document.querySelector("button")
let on = 0;
btn.addEventListener("click", ()=>{
    let div = document.querySelector("div");
    
    if (on===0) {
        div.style.backgroundColor = "yellow";
        console.log("clicked");
        on = 1 
    }  else {
        div.style.backgroundColor = "white";
        console.log("agin clicked");
        on = 0
    }
})


console.log("hello js");
