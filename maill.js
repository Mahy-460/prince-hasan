const firebaseConfig = {
    apiKey: "AIzaSyDbyZifglXNRmcDl92NoJih1j1rOHSl-Ic",
    authDomain: "prince-hasan-web.firebaseapp.com",
    databaseURL: "https://prince-hasan-web-default-rtdb.firebaseio.com",
    projectId: "prince-hasan-web",
    storageBucket: "prince-hasan-web.appspot.com",
    messagingSenderId: "201511708682",
    appId: "1:201511708682:web:0e36f73df4742427c397f3",
    measurementId: "G-P30639YF05"
  };

//initializ firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref('contactForm')

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getElementVal('name');
  var number = getElementVal('number');
  var Transaction = getElementVal('Transaction');
  var emailid = getElementVal('emailid');

  //var package = getElementVal('package');


  saveMessages(name, number, Transaction, emailid,);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();

};

const saveMessages = (name,number,Transaction,emailid) => {
  var newContactForm =  contactFormDB.push();

  newContactForm.set({
    name: name,
    number : number,
    Transaction : Transaction,
    emailid : emailid,
  //package : package,
  });
};



const getElementVal = (id) => {
  return document.getElementById(id).value;
}