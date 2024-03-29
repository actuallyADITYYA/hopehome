function selectAmount(button, amount) {
// Remove 'selected' class from all buttons
document.querySelectorAll('.donate-button').forEach(btn => {
    btn.classList.remove('selected');
});
// Add 'selected' class to the clicked button
button.classList.add('selected');
}

function submitDonation() {
var selectedAmount = '';
var highlightedButton = document.querySelector('.donate-button.selected');
if (highlightedButton) {
    selectedAmount = highlightedButton.textContent;
}
// Here you can perform further actions like sending the donation amount to your server
alert("User have to sign up for donating " + selectedAmount + " through Contribute page. Thank you!");
}