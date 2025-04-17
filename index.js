const inputEl = document.querySelector('#bill')
const tipsBtn = document.querySelectorAll('#selectBtn')
const customInput = document.querySelector('#custom')
const peopleInput = document.querySelector('#people')


const resetBtn = document.querySelector('#reset_button') 
const errorInput = document.querySelector('.input_div-text')

const amountDisplay = document.querySelector('#tip_amount');
const  totalDisplay = document.querySelector('#total_amount');



let billValue = 0;
let tip = 0;
let peopleValue = 1;
let isclicked = false;


 //managing button click event
 
 tipsBtn.forEach(btn =>{
    btn.addEventListener('click',(event)=>{
        tip = 0;
        removeActive();
         value = btn.textContent;
         
        event.target.classList.add("active");
        resetBtn.classList.remove('active'); //add active class to reset button
         // Check if the button is clicked
         tip = Number(btn.value);
         customInput.value
        isclicked = true;
        calculateTip()
        console.log(tip);
        
    })
 })
 
// function to close previous selected btn
function removeActive(){
   tipsBtn.forEach(btn=>{
       btn.classList.remove('active')
   })
}

 // managing Bill input event
inputEl.addEventListener('input',()=>{
         if (inputEl.value.length > 5) {
            inputEl.value = inputEl.value.slice(0, 5);
      }
//managing error state for input element
      if(inputEl.value < 0){
         errorInput.classList.add('error_state')
      }else{
         errorInput.classList.remove('error_state')
      }
      resetBtn.classList.remove('active')
            billValue = Number(inputEl.value);
            calculateTip();
   })



//handling input event for peapleValue
peopleInput.addEventListener('input',()=>{
      if(peopleInput.value.length > 2){
         peopleInput.value = peopleInput.value.slice(0,2)
      }
      if(peopleInput.value === ''){
         peopleInput.value = 1;
      }
      resetBtn.classList.remove('active'); //add active class to reset button
      peopleValue = Number(peopleInput.value);
      calculateTip();
})


 // managing custom input event
 customInput.addEventListener('input',()=>{
          tipsBtn.forEach((btn) => btn.classList.remove('active'));
          resetBtn.classList.remove('active');
      // Allow only numbers and restrict to 2 digits
         customInput.value = customInput.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
         if (customInput.value.length > 2) {
            customInput.value = customInput.value.slice(0, 2); // Limit to 2 characters
         }
         tip =  Number(customInput.value) ;
         calculateTip();
         console.log(tip);
 })


 //calculating tips

 function calculateTip(){

 
   const perPersonBill = billValue / peopleValue;
   const tipAmount = (perPersonBill * tip) / 100;
   const totalAmount = perPersonBill + tipAmount;


   amountDisplay.innerText = `$${tipAmount.toFixed(2)}`;
   totalDisplay.innerText = `$${totalAmount.toFixed(2)}`;
   
 }

 resetBtn.addEventListener('click',()=>{
    resetButton()
 })

 //handling Reset button
 

 function resetButton(){
      inputEl.value = '';
      customInput.value = '';
      peopleInput.value = '';
      billValue = 0;
      tip = 0;
      peopleValue = 1;
      isclicked = false;
      tipsBtn.forEach(btn => btn.classList.remove('active')); //remove active class from all buttons
      resetBtn.classList.add('active'); //remove active class from reset button
      amountDisplay.innerText = `$0.00`;
      totalDisplay.innerText = `$0.00`;


      //reset all status
 }
 console.log(tip)

