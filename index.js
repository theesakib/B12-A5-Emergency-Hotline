
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

    function addCard(title,number,alertmsg){

        if(d>0)
        {
            d = d-20;
            alert(alertmsg)
            document.getElementById("coin").innerText = d

            const container = document.getElementById("container")
            const div = document.createElement('div')
            div.className = "flex justify-between items-center p-2 m-2 rounded-xl shadow-xl"

            const time = new Date();
            const timeStr = time.toLocaleTimeString();

            div.innerHTML = `
            <div>
            <h1 class="font-semibold">${title}</h1>
            <p class="text-[#5c5c5c]">${number}</p>
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
        
    }
        
        

document.getElementById("call-btn1")
.addEventListener('click', function() {
    addCard("National Emergency Number", "999", "Calling National Emergency 999");
});

document.getElementById("call-btn2")
.addEventListener('click', function() {
    addCard("Police Helpline Number", "999", "Calling Police Helpline Number 999");
});

document.getElementById("call-btn3")
.addEventListener('click', function() {
    addCard("Fire Service Number", "999", "Calling Fire Service Number 999");
});

document.getElementById("call-btn4")
.addEventListener('click', function() {
    addCard("Ambulance Service", "1994-999999", "Calling Ambulance Service 1994-999999");
});

document.getElementById("call-btn5")
.addEventListener('click', function() {
    addCard("Women & Child Helpline", "109", "Women & Child Helpline 109");
});

document.getElementById("call-btn6")
.addEventListener('click', function() {
    addCard("Anti-Corruption Helpline", "106", "Calling Anti-Corruption Helpline 106");
});

document.getElementById("call-btn7")
.addEventListener('click', function() {
    addCard("Electricity Helpline", "16216", "Calling Electricity Helpline 16216");
});

document.getElementById("call-btn8")
.addEventListener('click', function() {
    addCard("Brac Helpline", "16445", "Calling Brac Helpline 16445");
});

document.getElementById("call-btn9")
.addEventListener('click', function() {
    addCard("Bangladesh Railway Helpline", "163", "Calling Bangladesh Railway Helpline 163");
});


    document.getElementById("clear")
    .addEventListener('click',function(){
        const clear = document.getElementById('container')
        clear.innerHTML = '';
    })


   let copy = parseInt(document.getElementById("nav-copy").innerText)

   
   function copyPart(copyBtn,copyNumber){
            document.getElementById(copyBtn)
            .addEventListener('click',function(){

    const text = document.getElementById(copyNumber).innerText
    navigator.clipboard.writeText(text)
    alert("The number has been copied: " + text)
    copy = copy + 1;
    document.getElementById("nav-copy").innerText = copy

   })

   }

   copyPart("copy-btn1","copy-number1")
   copyPart("copy-btn2","copy-number2")
   copyPart("copy-btn3","copy-number3")
   copyPart("copy-btn4","copy-number4")
   copyPart("copy-btn5","copy-number5")
   copyPart("copy-btn6","copy-number6")
   copyPart("copy-btn7","copy-number7")
   copyPart("copy-btn8","copy-number8")
   copyPart("copy-btn9","copy-number9")