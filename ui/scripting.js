let amountofletters;
var amountoftries = 0
function verifyPress()
{
    if(amountoftries != 3){
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        amountofletters = Math.floor(Math.random() * 15);
        var alphabetResult = ""
        for (let i = 1; i <= amountofletters; i++) {
                alphabetResult += alphabet[Math.floor(Math.random() * alphabet.length)];  
        }
        document.getElementById("usernameid").innerText = "Username: " + alphabetResult;
        }
        if(amountoftries == 3){
            console.log("maximum 3 tries")
            document.getElementById("failedlogin").innerText = "Maximum of 3 login failures. Try again in 24 hours."
        }
    }
function loginPress()
{
    if(amountoftries != 3){
        document.getElementById("failedlogin").innerText = "Login Failed, Did you enter the right login?"
        amountoftries = amountoftries + 1
        console.log(amountoftries)
    }
    if(amountoftries == 3){
        console.log("maximum 3 tries")
        document.getElementById("failedlogin").innerText = "Maximum of 3 login failures. Try again in 24 hours."
    }
}
function passPress()
{
    if(amountoftries != 3){
        let amountofletters2
        amountofletters2 = Math.floor(Math.random() * 15);
        const periods = ".............."
        var periodsresult = ""
        for (let i = 1; i <= amountofletters2; i++) {
            periodsresult += periods[Math.floor(Math.random() * periods.length)];
        }
        if(amountoftries == 3){
            console.log("maximum 3 tries")
            document.getElementById("failedlogin").innerText = "Maximum of 3 login failures. Try again in 24 hours."
        }
        document.getElementById("passwordid").innerText = "Password: " + periodsresult
    }
}
