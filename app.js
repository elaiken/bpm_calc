
window.addEventListener("load", (_) => {
    const countText= document.getElementsByClassName('bpm__count')[0]
    const tapButton = document.getElementsByClassName('bpm__tap')[0]

    console.log(tapButton,countText)
    
    tapButton.addEventListener('click',(_) => {
        console.log("clicked")
        countText.innerHTML = 55
    })

}) 
   
