function getPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?<>:{}[]-";

    var passwordLength = document.getElementById("passwordLength").value;

    if (passwordLength > 17 || passwordLength == "") {
        alert("Please enter valid password length");
    } else if (passwordLength < 8) {
        alert("Please enter valid password length");
    } else {
        var password = "";
        

        for (var i = 0; i < Math.floor(passwordLength); i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);

            password += chars.substring(randomNumber, randomNumber + 1);
        }

        document.getElementById("password").value = password;


    }


}


function copyFunction(){
    var copyText = document.getElementById("copy");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function copyFunction() { 
    /* Get the text field */
    var copyText = document.getElementById("password"); 
    
    /* Select the text field */
    copyText.select(); 
    
    /* Copy the text inside the text field */
    document.execCommand("copy"); 
    
    /* Alert the copied text */
    alert("Password Copied: " + copyText.value); 
  } 