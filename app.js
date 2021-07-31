window.addEventListener("load", (_) => {
    const tapButton = document.getElementsByClassName('bpm__tap')[0]

    // console.log(tapButton,countText)


    tapButton.addEventListener('click', (_) => collectTap())

})
let bpmDigits = []


const clearArray = () => {
    var d = new Date();
    var n = d.getTime();
    const lastIndex = bpmDigits.length - 1
    const lastBeat = bpmDigits[lastIndex]
    const resetDiff = n - lastBeat
    // console.log(resetDiff)
    if (resetDiff > 2000) {
        bpmDigits.length = 0
    }

}


const collectTap = () => {
    clearArray()

   addToArray()

    const countText = document.getElementsByClassName('bpm__count')[0]
    if (bpmDigits.length > 1) {

        // console.log(bpmDigits)


        const firstBeat = bpmDigits[0]
        const lastIndex = bpmDigits.length - 1
        const lastBeat = bpmDigits[lastIndex]

        // console.log(lastBeat - firstBeat)

        const bpm = calculateBpm(bpmDigits.length, lastBeat - firstBeat)

        countText.innerHTML = bpm
        countText.style.borderColor = "green"


    } else {
        countText.innerHTML = 0
        countText.style.borderColor = "red"
    }

}
const addToArray = () => {
    var d = new Date();
    var n = d.getTime();
    if(bpmDigits.length > 7 ){
        bpmDigits = bpmDigits.slice(1)
    }
    bpmDigits.push(n)
    console.log(bpmDigits.length)
}

const calculateBpm = (beatCount, timeDiff) => {

    const bpm = 60000 * (beatCount / timeDiff)
    return(Math.round(bpm))
}
