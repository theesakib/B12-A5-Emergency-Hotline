
let c = parseInt(document.getElementById("heart-inc").innerText)

function everycard(cardId){
    document.getElementById(cardId)
    .addEventListener('click',function(){
        c++
        document.getElementById("heart-inc").innerText = c
    })

}

everycard("heart1")
everycard("heart2")
everycard("heart3")
everycard("heart4")
everycard("heart5")
everycard("heart6")
everycard("heart7")
everycard("heart8")
everycard("heart9")
