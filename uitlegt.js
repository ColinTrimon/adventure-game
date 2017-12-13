//Een variabel slaat een waarde op die je kan veranderen. Een stukje met een naam dat je kan veranderen
//Een variabel kan je meerdere keren gebruiken
//Mag geen var var is gebruiken
//een condition is de voorwaarde van een if else statement

var = keyword (heeft te maken met de variabel)
var nam = "Colin"; //string is een reeks karakter
var age = 19; //number
var glasses = false; //boolean

var ingredient_1 = "appel";
var ingredient_2 = "taart";
console.log(ingredient_1 + ingredient_2); //concatination

var age_1 = 24;
var age_2 = 19;

console.log (age_1 + age_2);

var number_1 = 3;
var number_2 = "3";

console.log(number_1 + number_2); //als de computer twijfel maakt die van alles een string

//== is een operator

if (age >=) {
   alert("Je mag auto rijden!");
} else {
  if (age < 16){
    alert("ga nog maar even buiten spelen");
  } else {
  alert("Je mag geen auto rijden!");
 }
}

// == kijkt of die gelijk is, en met === kijk of die van het zelfde data type is

if (number_1 === number_2){
  console.log("ze zijn gelijk aan elkaar");
} else {
  console.log("Misschien nog eventjes nakijken");
}

function strand ()
{
  title.innerHTML = "hetstrand";
  image.src = "img/beach.jpg";
  image.setAttribute("onclick" "alert('Maarten is tof')");
  link1.innerHTML = "Ga terug";
  link1.setAttribute("onclick", "huis()");
}
