const inputEl = document.querySelector('#bill')
const tipsBtn = document.querySelectorAll('#selectBtn')

 //geting the amount from the bill input
 let billAmount = inputEl.value;
    let value = ""
 tipsBtn.forEach(btn =>{
    btn.addEventListener('click',(event)=>{
        removeActive();
         value = btn.textContent;
        event.target.classList.add("active");
        
    })
 })
// function to close previous selected btn
 function removeActive(){
    tipsBtn.forEach(btn=>{
        btn.classList.remove('active')
    })
 }

