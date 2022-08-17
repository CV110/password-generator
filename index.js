const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
console.log(characters.length)
let password1 = document.getElementById("p1")
let password2 = document.getElementById("p2")

let p = document.getElementById("pc1")
let p2 = document.getElementById("pc2")

function generate() {
    p.textContent=""
    p2.textContent=""
    
    password1.textContent = ""
    password2.textContent = ""
    
    
    for(let i=0; i< 15; i++ ){
        let random = Math.floor(Math.random()*characters.length)
        
        password1.textContent += characters[random]
    }
    for(let i=0; i< 15; i++ ){
        let random = Math.floor(Math.random()*characters.length)
        
        password2.textContent += characters[random]
    }
}



const span = document.getElementById("p1");
const span2 = document.getElementById("p2");



span.onclick = function() {
  document.execCommand("copy");
}
span.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span.textContent);
    console.log(event.clipboardData.getData("text"))
  }
  p.textContent="text copied!"
  p2.textContent=""
});

span2.onclick = function() {
  document.execCommand("copy");
}
span2.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span2.textContent);
    console.log(event.clipboardData.getData("text"))
  }
  p2.textContent="text copied!"
  p.textContent=""
});



