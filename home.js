
const transactionData = [];
const validPin = 1234 ;
const mobileNumber = 12345678910 ;

// Logout button
document.getElementById('log-out').addEventListener('click', function(e){
  e.preventDefault(); 
    window.location.href="index.html"
})

// Reusable Function to get input value

function getInputValueNumber(id) {
 const inputValueNumber =  parseInt(document.getElementById(id).value)
 return inputValueNumber
}

function getInputValue(id) {
 const inputValue = document.getElementById(id).value
 return inputValue
}


function getInputTextNumber(id) {
 const inputTextNumber = parseInt(document.getElementById(id).innerText)
 return inputTextNumber
}

// Set input text function

function setInputText(balance) {
  document.getElementById('available-balance').innerText = balance;
}


// Add Money Form


document.getElementById('add-money-btn').addEventListener('click', function(e) {
   e.preventDefault()


 const accountNumber = getInputValueNumber('account-number')
 const addAmount = getInputValueNumber('add-amount')
 const addPin = getInputValueNumber('add-pin')
 const availableBalance = getInputTextNumber('available-balance')

  if(addAmount <=0 ) {
      showAlert('invalid amount', "error")
      return
   }

  if(accountNumber !== mobileNumber ) {
      showAlert('Please provide valid account number', "error")
      return
   }
   
   if( addPin !== validPin) {
      showAlert('Please provide valid pin number', "error")
      return
   }
   
const newAvailableBalance =  addAmount + availableBalance;
   setInputText(newAvailableBalance);
   
   showAlert(`${addAmount} taka added successfully!`, "success");

const newDate = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()

const data = {
     name:'Add Money',
     date: newDate ,
     amount: addAmount
   }
   
   transactionData.unshift(data)
} )


// Cash Out Form

document.getElementById('cash-out-btn').addEventListener('click', function(e) {
   e.preventDefault()
 
const agentNumber = getInputValueNumber('agent-number')
const cashAmount = getInputValueNumber('cash-amount')
const cashPin = getInputValueNumber('cash-pin')
const availableBalance = getInputTextNumber('available-balance')
   

  if(cashAmount <= 0 ) {
      alert('invalid amount', "error")
      return
   }
   if (agentNumber !== mobileNumber) {
      showAlert('Please provide valid account number', "error")
      return
   }
   
   if (cashPin != validPin) {
      showAlert('Please provide valid pin number', "error")
      return
   }
   
   if (cashAmount > availableBalance) {
      showAlert('Insufficient balance! Cash out not possible.', "error");
   return;
}
   
  
const newAvailableBalance = availableBalance - cashAmount ;

   setInputText(newAvailableBalance);

   showAlert(`Cash Out ${cashAmount} taka successfully!`, "success");

const newDate = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()

const data = {
     name: 'Cash Out',
     date: newDate ,
     amount: cashAmount 
   }
   
   transactionData.unshift(data)
  
})



// Transfer Money Form

document.getElementById('transfer-btn').addEventListener('click', function(e) {
   e.preventDefault()

const userNumber = getInputValueNumber('user-number')
const transferAmount = getInputValueNumber('transfer-amount')
const transferPin = getInputValueNumber('transfer-pin')
const availableBalance = getInputTextNumber('available-balance')
   
   if(transferAmount <= 0 ) {
      showAlert('invalid amount', "error")
      return
   }

   if (userNumber !== mobileNumber) {
      showAlert('Please provide valid account number', "error")
      return
   }
   
   if (transferPin != validPin) {
      showAlert('Please provide valid pin number', "error")
      return
   }
   
   if (transferAmount > availableBalance) {
   showAlert('Insufficient balance! Cash out not possible.', "error");
   return;
}
 const newAvailableBalance = availableBalance - transferAmount ;

   setInputText(newAvailableBalance) ;

    showAlert(` ${transferAmount} taka transfer successfully!`, "success");

const newDate = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()

const data = {
     name: 'Transfer Money',
     date: newDate ,
     amount: transferAmount
   }
   
   transactionData.unshift(data)
  
})




// Get Bonus Form 


document.getElementById('bonus-btn').addEventListener('click', function(e) {
   e.preventDefault()
   
const cupons = { SUMMER: 500, WINTER: 1000 };
const inputCupon = getInputValue('bonus-cupon');

if (cupons.hasOwnProperty(inputCupon)) {
  const bonusAmount = cupons[inputCupon];
  const availableBalance = getInputTextNumber('available-balance');
  const newAvailableBalance =  bonusAmount + availableBalance;
  setInputText(newAvailableBalance)
  
   showAlert(` ${bonusAmount} taka bonus added successfully!`, "success");

const newDate = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()

  
const data = {
     name: 'Get Bonus',
     date: newDate,
     amount: bonusAmount
   }
   
   transactionData.unshift(data)

} else {
  showAlert('Please enter a valid coupon', "error");
}


} )





//  Pay Bill Form


document.getElementById('pay-btn').addEventListener('click', function(e) {
   e.preventDefault()

const payNumber = getInputValueNumber('pay-number')
const payAmount = getInputValueNumber('pay-amount')
const payPin = getInputValueNumber('pay-pin')
const payName = getInputValue('pay-name')
const availableBalance = getInputTextNumber('available-balance')

  if(payAmount <=0 ) {
      showAlert('invalid amount', "error")
      return
   }
  if(payNumber !== mobileNumber) {
      showAlert('Please provide valid account number', "error")
      return
   }
   
   if( payPin !== validPin) {
      showAlert('Please provide valid pin number', "error")
      return
   }
   
   
   if (payAmount > availableBalance) {
     showAlert('Insufficient balance! Payment not possible.', "error");
     return;
   }
   
const newAvailableBalance = availableBalance - payAmount ;
   setInputText(newAvailableBalance) 
   
    showAlert(` ${payAmount} taka ${payName} payment successfully!`, "success");
  
const newDate = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
   
const data = {
     name: payName ,
     date:  newDate,
     amount: payAmount
   }
   
   transactionData.unshift(data)
} )


// Transaction Form 

document.getElementById('transactions-card').addEventListener('click', function() {
  const transactionContainer = document.getElementById('transactions-container')
  
  transactionContainer.innerText = "";
  
  for(const data of transactionData) {
   const div = document.createElement('div');
   div.innerHTML = `
       <div class="bg-white rounded-xl p-3 flex justify-between items-center mb-3">
      <div class="flex items-center ">
        <div class="p-3 rounded-full bg-[#f4f5f7]">
        <img class="mx-auto" src="./assests/wallet1.png" alt="" />  
        </div>
        
        <div class="ml-3">
          <h1>${data.name}</h1>
          <p> ${data.amount} taka </p>
          <p>${data.date}</p>
        </div>
      </div>
     
     <i class="fa-solid fa-ellipsis-vertical" ></i>
      
    </div>

   `
   transactionContainer.appendChild(div)
  }
} )


// Display Function

function displayFunction(formId, cardId) {

const forms = document.getElementsByClassName('form');
const cards = document.getElementsByClassName('cards')
  for (const form of forms) {
    form.style.display = 'none'
  }
  
  document.getElementById(formId).style.display = 'block'
  
  for(const card of cards) {
    card.classList.remove('active')
  }
  
  document.getElementById(cardId).classList.add('active')

  
  // Show login info card only for forms that require account number & PIN
  const pinRequiredForms = ["add-form", "cash-form", "transfer-form", "pay-form"];
  const loginInfoCard = document.getElementById("login-info-card");
  if (pinRequiredForms.includes(formId)) {
    loginInfoCard.classList.remove("hidden");
  }
  
  else {
    loginInfoCard.classList.add("hidden");
  }
}

document.getElementById('add-card').addEventListener('click', function() {  displayFunction('add-form', 'add-card') })

document.getElementById('cash-card').addEventListener('click', function() { displayFunction('cash-form', 'cash-card') })

document.getElementById('transfer-card').addEventListener('click', function() { displayFunction('transfer-form', 'transfer-card') })

document.getElementById('bonus-card').addEventListener('click', function() { displayFunction('bonus-form', 'bonus-card') })

document.getElementById('pay-card').addEventListener('click', function() { displayFunction('pay-form', 'pay-card') })

document.getElementById('transactions-card').addEventListener('click', function() { displayFunction('transactions-form', 'transactions-card') })


// Alert Function

function showAlert(message, type = "error") {
const container = document.getElementById("alert-container"); 
const alertBox = document.createElement("div");
  alertBox.className = `
    px-4 mb-3 py-2 rounded-lg shadow-md text-white font-medium animate-slideIn text-center
    ${type === "success" ? "bg-green-500" : "bg-red-500"}
  `;
  alertBox.innerText = message;
  
  container.appendChild(alertBox);
  
  setTimeout(() => {
    alertBox.classList.add("opacity-0", "transition", "duration-500");
    setTimeout(() => alertBox.remove(), 500);
  }, 3000);
}


function copyToClipboard(elementId, btn) {
  const text = document.getElementById(elementId).textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.innerHTML = '<i class="fa-solid fa-check text-green-600"></i>';
    setTimeout(() => {
      btn.innerHTML = '<i class="fa-regular fa-copy"></i>';
    }, 2000);
  });
}
