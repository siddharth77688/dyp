
function validform(){
    //get values from user
    var un = document.getElementById("un").value;
    var pw = document.getElementById("pw").value;
    
    if (un === "external2024" && pw=== "dypp0996") {
        window.location.href='home-page.html';
    } else {
        alert("Invalid Username or Password. Please try again.");
    }
    document.getElementById("login-form").reset();
}
function confpass(){
    //get values from user
    var namee = document.getElementById("name").value;
    var mail = document.getElementById("email").value;
    var npassword = document.getElementById("password").value;
    var cpassword = document.getElementById("confirm-password").value;
    if(npassword === cpassword)
    {
        window.location.href="log-in-2.html";
        
    }
    else {
        alert("Entered data is Invalid . Please try again.");
    }
   
    
    document.getElementById("form").reset();
    return cpassword;
}
function disp(){
    alert('Our Team is giving external oral exam . Please try again later.');
}

      
