let CWText = document.querySelector('.CW')
CWText.style.display = "none";

let MLText = document.querySelector('.ML')
MLText.style.display = "none";

let PWText = document.querySelector('.PW')
PWText.style.display = "none";

let amount = document.querySelector("#amount")
let incrementAmount = 0

function btnClick(hiddenText,BtnId,price){
    let Htext = document.querySelector(hiddenText)
    Htext.style.display = "grid";

    incrementAmount +=  Number(price)
    amount.innerHTML = '$' + incrementAmount

    document.getElementById(BtnId).disabled = true;
}

function removeBtn(hiddenText,BtnRmId,rmprice){
    let removeID = document.querySelector(hiddenText)
    removeID.style.display = "none";

    incrementAmount -=  Number(rmprice)
    amount.innerHTML = '$' + incrementAmount

    document.getElementById(BtnRmId).disabled = false;
  }