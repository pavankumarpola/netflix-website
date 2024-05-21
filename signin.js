function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // var errorMessage = document.getElementById('error-message');


    if (username === "" || username == null || username.length<=10) {
       
        document.getElementById("pavan").innerHTML="Enter your email";
        
        return false;
    } 
    if(password === "" || password == null || password.length<=8)
    {
       
        document.getElementById("pola").innerHTML="Enter your password";
        document.getElementById("username").style.border="3px solid green";
        document.getElementById("pavan").innerHTML="";
        document.getElementById("pola").innerHTML="";
      
       
        return false;
    }
    alert('Username: ' + username + '\nPassword: ' + password);

    document.location.href="signinsuccess.html"; 
   
}

