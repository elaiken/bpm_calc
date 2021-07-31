
window.addEventListener("load", (_) => {
    const tapButton = document.getElementsByClassName('bpm__tap')[0]
    
    // console.log(tapButton,countText)
    
    
    tapButton.addEventListener('click',(_) => collectTap())
    
}) 


 
const bpmDigits = []

const collectTap = () => {
    
    
    var d = new Date();
    var n = d.getTime();
    bpmDigits.push(n)
    const countText= document.getElementsByClassName('bpm__count')[0]
    if (bpmDigits.length > 1 ) {
    
    // console.log(bpmDigits)
    

    const firstBeat = bpmDigits[0]
    const lastIndex = bpmDigits.length - 1
    const lastBeat = bpmDigits[lastIndex]

    // console.log(lastBeat - firstBeat)
    
    const bpm = calculateBpm(bpmDigits.length, lastBeat - firstBeat)
     
    countText.innerHTML = bpm
    countText.style.borderColor = "green"

    
}else{ 
    countText.innerHTML = 0
    countText.style.borderColor = "red"
}
     
    
    
}

const calculateBpm = (beatCount, timeDiff) => {

    const bpm = 60000*(beatCount/timeDiff)
    return (Math.round(bpm))
}


