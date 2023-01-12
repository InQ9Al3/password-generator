const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = ""
let password2 = ""

let password1El = document.getElementById("password1-label")
let password2El = document.getElementById("password2-label")

function btnClicked() {
    function getRandomValue() {
        let randomValue = Math.floor(Math.random()*characters.length)
        return randomValue
    }
    function getPassword1() {
        for (let i = 0; i < 15; i++) {
            password1 += characters[getRandomValue()]
        }
        return password1
    }
    
    function getPassword2() {
        for (let i = 0; i < 15; i++) {
            password2 += characters[getRandomValue()]
        }
        return password2
    }
    password1El.textContent = getPassword1()
    password2El.textContent = getPassword2()
    console.console(password1, password2)
}






