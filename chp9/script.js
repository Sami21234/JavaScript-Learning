let button = document.getElementById("btn")

// on clicking  it will show anything as desired by us, here it will change the content
// button.addEventListener("click",()=>{
//     document.querySelector(".box").innerHTML = "<b>Now i am Evolved</b>"
// })

// 0n clicking it will pop up the alert window
// button.addEventListener("click",()=>{
//     alert("I was Clicked, It's time to Evolve!")
// })

//  this method is used by double clicking
button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML = "<b>Now i am Evolved</b>"
})

// this method is invoked only when right click

button.addEventListener("contextmenu",()=>{
    alert("Don't hack us by right clicking")
})

// This is the keyboard event method

document.addEventListener("keydown",(e)=>{
    console.log(e.key,e.keyCode);
    
})