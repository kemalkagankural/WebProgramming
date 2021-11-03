let number = localStorage.getItem('number') ? Number(localStorage.getItem('number')) : 0
let numberDOM = document.querySelector("#number")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")
numberDOM.innerHTML = number


increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)
function clickEvent() {
  if (this.id == "increase") {
    numberDOM.innerHTML = number += 1;
    localStorage.setItem('number',number)
  } else{
    numberDOM.innerHTML = number -= 1;
    localStorage.setItem('number',number)
  }
}