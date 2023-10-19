var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var resultElement = document.getElementById('result');
var result = document.getElementById('resulte');
var boutonSupprimer = document.getElementsByClassName("boutonSupprimer");
var containerelement = document.getElementsByClassName("container");

for(let btn  of boutonSupprimer )
btn.addEventListener("click", function() {
btn.parentNode.parentNode.remove()
    alert("Action de suppression !");
});


var count = 0;

function incrementCounter() {
  count++;
  resultElement.textContent = count;
}

button1.addEventListener('click', incrementCounter);
function incrementCounte() {
    count--;
    resultElement.textContent = count; 
  }
button2.addEventListener('click', incrementCounte);


function sum() {

var result1 = result;
var result2 = result;

var sum = result1 + result2;

console.log("The sum is: " + sum);
}




// script.js

// Fonction pour basculer l'état des favoris


const fav=Array.from(document.getElementsByClassName("favorisButton"))
console.log(fav,"louay")

for(let btn of fav){
btn.addEventListener("click",function(){
  console.log("helllo")
// Vérifie si l'élément a la classe "favori"
 btn.classList.toggle('favori')
}
)
}


/*
  const fav=Array.from(document.getElementsByClassName("favorisButton"))
  console.log(fav,"louay")
  
for(let btn of fav){
  btn.addEventListener("click",function(){
    console.log("helllo")
  // Vérifie si l'élément a la classe "favori"
   btn.classList.toggle('favori')
  }
  )
}

*/



