const scriptURL = 'https://script.google.com/macros/s/AKfycbxlPlEQ_qdP_gLTfvTIaMkKQvb1OHYq3zcUVzm5gvSInopDd4nqAlzF8W-WuwPh0o5m/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})