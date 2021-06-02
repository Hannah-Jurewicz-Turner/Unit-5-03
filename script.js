// In this code, whatever the user types into the input box gets displayed as an alert when the button is clicked
document.getElementById('report').addEventListener('click',reportResults)

function reportResults () {
  alert(document.getElementById('input').value)
}