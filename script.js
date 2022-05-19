let newElements = document.querySelector("#invoiceText")
console.log(newElements)

let amount = document.querySelector("#amount")
let incrementAmount = 0

function addButtonElements(h1,price,BtnId){
  newElements.innerHTML += 
  ` <div id="invoiceTextinside">
     <div id="taskText">
        <h1 id="taskTextH1">${h1}</h1>
        <p  id="taskTextP"><button id="removeBtn" onclick="removeBtn()" >remove</button></p>
      </div>
      <div  id="taskTextPrice">$${price}</div>
   </div>
  `
  incrementAmount +=  Number(price)
  amount.innerHTML = '$' + incrementAmount
  document.getElementById(BtnId).disabled = true;
}

function removeBtn(){
  document.getElementById("invoiceText").innerHTML=""
  document.getElementById("washCarBtn").disabled = false;
  document.getElementById("mowLawnBtn").disabled = false;
  document.getElementById("pullWeedsBtn").disabled = false;
  amount.innerHTML = "$0"
  incrementAmount = 0
}



