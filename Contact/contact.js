const firebaseConfig = {
    apiKey: "AIzaSyDrZIedCoUKR3Aoxl_M0jbyWPEt-apaqzo",
    authDomain: "men-sshoes.firebaseapp.com",
    databaseURL: "https://men-sshoes-default-rtdb.firebaseio.com",
    projectId: "men-sshoes",
    storageBucket: "men-sshoes.firebasestorage.app",
    messagingSenderId: "250811959443",
    appId: "1:250811959443:web:2b666308d315a7e6de6566"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
function submitData(){
try{
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var subject = document.getElementById("subject").value
    var message = document.getElementById("message").value

console.log(name,email,subject,message);


var contactData = {
    name:name,
    email:email,
    subject:subject,
    message:message
};


firebase.database().ref('data').push(contactData)

}


catch(error){
    console.log(error);
    
}
}
