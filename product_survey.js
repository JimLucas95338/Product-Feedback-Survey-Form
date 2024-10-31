function submitFeedback() {
    // Get form values
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const submitButton = document.getElementById('submitBtn');

    // Display the feedback information on the webpage
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // Make the feedback display section visible
    document.getElementById('userInfo').style.display = 'block';

    // Show thank you message
    alert('Thank you for your valuable feedback');
}

// Add click event listener
document.getElementById('submitBtn').onclick = submitFeedback;

// Allow Enter key to submit feedback form
document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback();
   }
 });