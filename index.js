const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let first_el=document.querySelector('.first-pass')
let second_el=document.querySelector('.second-pass')
const len=characters.length
const passwords=[]
function genetePassword(){
    for(var j=0; j<=1;j++){
        var password=''
        for (var i=0; i<10; i++){
            index=Math.floor(Math.random()*len)
            password+=characters[index]
        }
        passwords.push(password)

    }
    console.log(passwords)
    first_el.textContent=passwords[0]
    second_el.textContent=passwords[1]
    passwords.pop()
    passwords.pop()
}

