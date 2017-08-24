 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyCAL1W9mIzABACVwQo2L6-Yz0hx5BuFwfc",
     authDomain: "contact-form-e51fd.firebaseapp.com",
     databaseURL: "https://contact-form-e51fd.firebaseio.com",
     projectId: "contact-form-e51fd",
     storageBucket: "contact-form-e51fd.appspot.com",
     messagingSenderId: "932951222808"
 };
 firebase.initializeApp(config);




 // Reference messages collection
 var messagesRef = firebase.database().ref('messages');

 // Listen for form submit
 document.getElementById('contactForm').addEventListener('submit', submitForm);

 // Submit form
 function submitForm(e) {
     e.preventDefault();

     // Get values
     var name = getInputVal('name');
     var company = getInputVal('company');
     var email = getInputVal('email');
     var phone = getInputVal('phone');
     var message = getInputVal('message');

     // Save message
     saveMessage(name, company, email, phone, message);

     // Show alert: This will display the message sent message which display= none in Css.
     document.querySelector('.alert').style.display = 'block';

     // Hide alert after 3 seconds: And it goes disappears after 3 seconds
     setTimeout(function() {
         document.querySelector('.alert').style.display = 'none';
     }, 3000);

     // Clear form: this clears the from back to normal, it is important they follow these steps
     document.getElementById('contactForm').reset();
 }

 // Function to get get form values
 function getInputVal(id) {
     return document.getElementById(id).value;
 }

 // Save message to firebase
 function saveMessage(name, company, email, phone, message) {
     var newMessageRef = messagesRef.push();
     newMessageRef.set({
         name: name,
         company: company,
         email: email,
         phone: phone,
         message: message
     });
 }