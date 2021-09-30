let amountofletters;
function verifyPress()
{
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    amountofletters = Math.floor(Math.random() * 15);
    var alphabetResult = ""
    for (let i = 1; i <= amountofletters; i++) {
        alphabetResult += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    document.getElementById("usernameid").innerText = "Username: " + alphabetResult;
    }
function loginPress()
{
    document.getElementById("failedlogin").innerText = "Login Failed, Did you enter the right login?"
}
function passPress()
{
   let amountofletters2
    amountofletters2 = Math.floor(Math.random() * 15);
    const periods = ".............."
    var periodsresult = ""
    for (let i = 1; i <= amountofletters2; i++) {
        periodsresult += periods[Math.floor(Math.random() * periods.length)];
    }
    
    document.getElementById("passwordid").innerText = "Password: " + periodsresult
}
// code for firing document out of a function. if (document.addEventListener("DOMContentLoaded", function() {}));

//when you put in correct name, you then have to put in password.