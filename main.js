document.getElementById('login-btn').addEventListener('click', function(e){
  e.preventDefault();
  const mobileNumber = 12345678910;
  const pinNumber = 1234;
  const mobileNumberValue = document.getElementById('mobile-number').value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);
  const pinNumberValue = document.getElementById('pin-number').value;
  const pinNumberValueConverted = parseInt(pinNumberValue);
  const errorBox = document.getElementById('error-message');

    if(mobileNumberValueConverted !== mobileNumber && pinNumberValueConverted !== pinNumber)  {
     errorBox.innerText = "❌ Invalid Credentials";
     errorBox.classList.remove("hidden");
    
  }

  else if(mobileNumberValueConverted !== mobileNumber)  {
     errorBox.innerText = "❌ Invalid Mobile Number";
     errorBox.classList.remove("hidden");
    
  }

  
  else if ( pinNumberValueConverted !== pinNumber) {
     errorBox.innerText = "❌ Invalid Pin Number";
     errorBox.classList.remove("hidden");

  }
  
  else {
    window.location.href="home.html"

  }


      // Reset timer if already running
    clearTimeout(errorBox.hideTimer);

    // Auto-hide after 30 seconds (30000 ms)
    errorBox.hideTimer = setTimeout(() => {
      errorBox.classList.add("hidden");
    }, 3000);

})

function copyToClipboard(elementId, btn) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
      // Change to Check Icon
      btn.innerHTML = '<i class="fa-solid fa-check text-green-600"></i>';

      // Revert back after 2 seconds
      setTimeout(() => {
        btn.innerHTML = '<i class="fa-regular fa-copy"></i>';
      }, 2000);
    });
  }