
window.addEventListener("load", (_) => {
    const tapButton = document.getElementsByClassName('bpm__tap')[0]
    
    // console.log(tapButton,countText)
    
    
    tapButton.addEventListener('click',(_) => collectTap())
    
}) 
var d1 = new Date();
var n1 = d1.getTime();

const bpmDigits = [n1]

const collectTap = () => {
    var d = new Date();
    var n = d.getTime();
    bpmDigits.push(n)
    // console.log(bpmDigits)
    
    const countText= document.getElementsByClassName('bpm__count')[0]

    const firstBeat = bpmDigits[0]
    const lastIndex = bpmDigits.length - 1
    const lastBeat = bpmDigits[lastIndex]

    // console.log(lastBeat - firstBeat)
    
    const bpm = calculateBpm(bpmDigits.length, lastBeat - firstBeat)
     
    countText.innerHTML = bpm
    
    
}

const calculateBpm = (beatCount, timeDiff) => {

    const bpm = 60000*(beatCount/timeDiff)
    return (Math.round(bpm))
}


