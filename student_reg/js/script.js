// To produce error message for 2+ checkboxes
const checkbox = document.getElementsByClassName("ckb");
const errMsg = document.getElementById("ckb-error-msg");

function checkboxCtl(val) {
  let totalChecked = 0;
  for (i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      totalChecked += 1
    }
  }
  
  if (totalChecked > 2) {
   checkbox[val].checked = false
   errMsg.innerHTML = "Maximum of 2 subjects can be selected"
  } else {
    return false;
  }
}

// To check required fields are filled and valid
(() => {
  'use strict'

  // Fetch all forms that are required for submission
  const forms = document.querySelectorAll('.needs-validation')  

  // Loop over them and prevent submission if not all required fields are filled
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
