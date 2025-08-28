
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



let d = parseInt(document.getElementById("coin").innerText)

    document.getElementById("call-btn")
    .addEventListener('click',function(){
        
        if(d>0)
        {
            d = d-20;
            alert("Calling National Emergency 999")
            document.getElementById("coin").innerText = d

            const container = document.getElementById("container")
            const div = document.createElement('div')
            div.className = "flex justify-between items-center p-2 m-2 rounded-xl shadow-xl"

            const time = new Date();
            const timeStr = time.toLocaleTimeString();

            div.innerHTML = `
            <div>
            <h1 class="font-semibold">National Emergency</h1>
            <p class="text-[#5c5c5c]">999</p>
            </div>
            <div>
            <p class=" text-sm">${timeStr}</p>
            </div>
                `;

                container.appendChild(div);
        }
        else
        {
            alert("❌You don't have enough coins to make a call.You need a minimum of 20 coins to make a call.❌")
            return
        }
        
    })