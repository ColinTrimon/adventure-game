const title = document.getElementById("title");
const Tekst1 = document.getElementById("tekst1");
const Tekst2 = document.getElementById("tekst2");
const Tekst3 = document.getElementById("tekst3");
const image = document.getElementById("image");
const link1 = document.getElementById("button1");
const link2 = document.getElementById("button2");
const link3 = document.getElementById("button3");
const link4 = document.getElementById("button4");
const cursive = document.getElementById("cursive");
const video = document.getElementById("video");
const victory = document.getElementById("victory");
const magikarp = document.getElementById("magikarp");
const mdew = document.getElementById("ambrosia");
const cheeto = document.getElementById("cheeto");
const shroom = document.getElementById("mushroom");
const horror = document.getElementById("horror");
var vis = false;
var dew = false;
var trump = false;
var mario = false;
var ocean = false;
var plane = false;

//Levels

function introduction()
{
console.log("start level");
title.innerHTML = "Livingroom";
image.src = "img/lvroom.png";
link1.innerHTML = "Grab a drink";
link1.setAttribute("onclick", "kitchen()");
Tekst1.innerHTML = "You have arrived home after a long stressful day. You want to do nothing more than to:";
link2.innerHTML = "Play some videogames";
link2.style.display = "inline-block";
link2.setAttribute("onclick", "yourroom()");
}

function kitchen()
{
  console.log("keuken");
  title.innerHTML = "kitchen";
  Tekst1.innerHTML = "There seems to be a note on your refrigerator";
  image.src = "img/kitchen.png";
  link1.innerHTML = "Go back";
  link1.setAttribute("onclick", "introduction()");
  link2.innerHTML = "Read it";
  link2.setAttribute("onclick", "kitchennote()");
}

function kitchennote()
{
  console.log("bad news");
  title.innerHTML = "Note";
  Tekst1.innerHTML = "The note reads as following:";
  cursive.innerHTML = "Hello mr.Woodbury. I have finally escaped from prison, and now it is time for my ultimate revenge! I have kidnapped your daughter and took her to my super secret base. But don't worry, I have written the coordinates because I want to see you fail! Love and kisses, your archnemesis Brutus. P.S accept my steam request you lazy [REDACTED].";
  image.src = "img/read.png";
  link1.innerHTML = "How did this all fit on a small note?"
  link1.setAttribute("onclick", "timeforadventure()");
  link2.style.display = "none";
}

function yourroom()
{
  console.log("your room");
  title.innerHTML = "Your room";
  image.src = "img/yourroom.png";
  Tekst1.innerHTML = "As you enter your room you suddenly become aware of the quietness in the house. You also notice you got a new message on Myspace from your archnemesis Brutus. You are suprised that they have access to internet in jail.";
  Tekst2.innerHTML = "Go to the kitchen and read the note on the refrigerator";
  link1.innerHTML = "Well, I guess I could go for a drink.";
  link1.setAttribute("onclick", "kitchennote()");
  link2.style.display = "none";
}

function daughterroom()
{
  console.log("Daughter room");
  title.innerHTML = "Her room";
  image.src = "img/room.jpg";
  Tekst1.innerHTML = "It looks as if she never came home."
  Tekst2.innerHTML = "You panically search the house, but you find nothing that hints what might have happened to her. You decide to grab something to drink in hope of calming down and to think clearly. As you walk to the kitchen you notice a note left on your refrigerator.";
  link1.innerHTML = "read it";
  link1.setAttribute("onclick", "kitchennote()");
}


function timeforadventure()
{
  console.log("Select path");
  title.innerHTML = "Despair";
  image.src = "img/thinking.jpg";
  Tekst1.innerHTML = "You must save your daughter, but how?";
  cursive.style.display = "none";
  link1.innerHTML = "Travel by airplane";
  link1.setAttribute("onclick", "airport()");
  link2.innerHTML = "That would be dangerous, take a submarine";
  link2.setAttribute("onclick", "harbour()");
  link2.style.display = "inline-block";
  link3.style.display = "inline-block";
  link3.innerHTML = "Buy a new daughter on the darkweb";
  link3.setAttribute("onclick", "confirmpurchase()");
}

//AIRPLANE PATH
function airport()
{
 console.log("airplane path");
 title.innerHTML = "Airport";
 image.src = "img/airport.jpg";
 Tekst1.innerHTML = "You have arrived at the airport.";
 Tekst2.style.display = "none";
 link1.innerHTML = "Go to the top secret gate";
 link1.setAttribute("onclick", "airplane()");
 link2.style.display = "none";
 link3.style.display = "none";
}

function airplane()
{
  console.log("Flying");
  title.innerHTML = "The sky";
  document.body.style.backgroundImage = "url('img/wp.jpg')";
  link1.innerHTML = "Continue";
  image.style.display = "none";
  link1.setAttribute("onclick", "zeusattacks()");
  Tekst1.innerHTML = "you are flying peacefully until...";
  Tekst1.style.display = "inline-block";
  plane = true;
}

function zeusattacks()
{
  console.log("Attacked by Zeus");
  title.innerHTML = "BOOM";
  Tekst1.innerHTML = "OH SHI-";
  document.body.style.backgroundImage = "url('img/trollzeus.jpg')";
  link1.innerHTML = "Bullseye!";
  link1.setAttribute("onclick", "crash()");
}

function crash()
{
  console.log("Crashed");
  title.innerHTML = "Crashed";
  Tekst1.innerHTML = "Zeus destroyed your airplane, but fortunately you managed to land safely. Fortunately you landed right on the island where you needed to be."
  link1.innerHTML = "Continue";
  link1.setAttribute("onclick", "jungle()");
  document.body.style.backgroundImage = "url('img/airplane.jpg')";
}

function jungle()
{
  console.log("In the jungle");
  title.innerHTML = "Jungle";
  Tekst1.innerHTML = "You need to pee, fortunately there is a bush over there."
  link1.innerHTML = "Hiss...";
  link2.innerHTML = "Pee on the road";
  link1.setAttribute("onclick", "snake()");
  link2.setAttribute("onclick", "backdoor()");
}

function snake()
{
  console.log("Snek attack");
  title.innerHTML = "Bitten";
  Tekst1.innerHTML = "You have been bitten by the Goluboj snake! This snake carries the most fatal disease known to mankind. Fortunately it is not to diffucult to cure, you just need to find all the ingredients to brew a cure. You must find a fish, mushroom, cheeto crust and ambrosia. Without it you will certainly die, so hurry up!";
  image.src = "img/snek.jpg";
  image.style.display = "inline-block";
  document.body.style.backgroundImage = "url('img/jungle.jpg')";
  link1.innerHTML = "let\'s go!";
  link1.setAttribute("onclick", "startplace()");
}

function cure(){
  console.log("Looking for cure");
  title.innerHTML = "Succes!";
  Tekst1.innerHTML = "You have found all the ingredients and succesfuly cured yourself! Now you can continue with your journey!";
  link1.innerHTML = "Continue";
  link1.setAttribute("onclick", "entrance()");
  Tekst1.style.display = "block";
  link2.style.display = "none";
  link3.style.display = "none";
  link4.style.display = "none";
}

//SUBMARINE PATH
function harbour()
{
  console.log("ocean path");
  title.innerHTML = "Harbour";
  image.src = "img/ysubmarine.jpg";
  Tekst1.innerHTML = "Ship ahoy";
  Tekst2.style.display = "none";
  link1.innerHTML = "next";
  link1.setAttribute("onclick", "Cthulhu()");
  link2.style.display = "none";
  link3.style.display = "none";
}

function Cthulhu()
{
  console.log("Game with Cthulhu");
  title.innerHTML = "He who sleeps below the sea";
  image.src = "img/cthulhu.png";
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "red";
  Tekst1.innerHTML = "Oh crap baskets, it's Cthulhu.";
  horror.innerHTML = "What are you doing in my lake? Ah, trying to save your daughter eh? I tell you what: Guess the number between 1-10 I have in my head and I'll help you, guess wrong and I will destroy your ship.";
  link1.innerHTML = "Bring it on!";
  link1.setAttribute("onclick", "between()");
  link1.style.display = "inline-block";
  ocean = true;
}

function fail()
{
  console.log("Lost game with Cthulhu");
  title.innerHTML = "Fail";
  Tekst1.style.display = "none";
  document.body.style.backgroundColor = "";
  document.body.style.backgroundImage = "url('img/fail.png')";
  horror.innerHTML = "WRONG. Now prepare to be smashed like the insect you are mortal!";
  Tekst3.innerHTML = "Cthulhu destroys your submarine and leaves you to drown. Just as you start losing conciousness you see a shadowy figure swimming towards you.";
  link1.innerHTML = "glup glup";
  link1.setAttribute("onclick", "stranded()");
}

function stranded()
{
  console.log("stranded");
  document.body.style.backgroundImage = "url('img/beach.png')";
  title.innerHTML = "stranded";
  Tekst1.innerHTML = "you wake up with a terrible headache, but that pain is quickly replaced with confusion. How did you survive? You should have drowned at such a depth. Just as you start to think about your next move someone interrupts your thoughts.";
  image.style.display = "none";
  horror.style.display = "none";
  Tekst3.style.display = "none";
  Tekst1.style.display = "inline-block";
  link1.innerHTML = "Who\'s there?";
  link1.setAttribute("onclick", "kappa()");
}

function kappa()
{
  console.log("Meet Koopa the Kappa");
  image.style.display = "block";
  image.src = "img/kappa.jpg";
  title.innerHTML = "New friend";
  Tekst1.innerHTML = "Hello there, I overheard your conversation with Cthulhu and saved you when you were drowning. Brutus\' secret lair is located somewhere on this island, fortunately your note was waterproof. I'll call a friend so we can bring you and your daughter back to civillisation once this is all over.";
  link1.innerHTML = "Thanks!";
  link1.setAttribute("onclick", "forest()");
}

function forest()
{
  console.log("The forest");
  title.innerHTML = "Forest";
  Tekst1.innerHTML = "You hear a female voice seductively calling you";
  link1.innerHTML = "Check it";
  document.body.style.backgroundImage = "url('img/forest1.jpg')";
  image.style.display = "none";
  link1.setAttribute("onclick", "eaten()");
  link2.innerHTML = "In a creepy forest? Nope";
  link2.setAttribute("onclick", "entrance()");
  link2.style.display = "inline-block";
}

//PATHS COLLIDE
function entrance()
{
  console.log("Colliding paths");
  document.body.style.backgroundImage = "url('img/mountain.png')";
  video.style.display = "none";
  image.src = "img/door.jpg";
  image.style.display = "inline-block";
  title.innerHTML = "entrance";
  Tekst1.innerHTML = "you have arrived at the entrance of the secret base. Brutus\' men are guarding the entrance. What will you do Alec?";
  link1.innerHTML = "LEEEEEROY JENKINS (attack multiple armed men)";
  link1.setAttribute("onclick", "bieber()");
  link2.innerHTML = "grab a box and sneak in";
  link2.setAttribute("onclick", "hallway()");
  link2.style.display = "inline-block";
  Tekst1.style.display = "block";
  Tekst2.style.display = "none";
}

function hallway()
{
  console.log("Secret base");
  title.innerHTML = "Entrance";
  Tekst1.innerHTML = "You are now in the secret base of Brutus.";
  document.body.style.backgroundImage = "url('img/hallway.jpg')";
  link1.setAttribute("onclick", "brutus()");
  link1.innerHTML = "Go to Brutus";
  image.style.display = "none";
  link2.style.display = "none";
}

function brutus(){
  console.log("Final boss");
  title.innerHTML = "End boss";
  image.src = "img/eindbaas.png";
  image.style.display = "inline-block";
  Tekst1.innerHTML = "Ahahah, so we meet again Alec! It is I, Brutus! I have finally escaped from prison to exact my revenge! I bla bla bla bla...";
  link1.innerHTML = "Shoot him while he is to busy with rambling";
  link1.setAttribute("onclick", "before()");
}

function before(){ //stuurt je naar de ending afhankelijk van of je met vliegtuig of schip bent gegaan
  if (plane == true) {
    planewin();
  } if (ocean == true) {
    oceanwin();
  }
}

//looking for medicine

function startplace()
{
 console.log("Looking for medicine");
 title.innerHTML = "";
 tekst1.style.display = "none";
 image.style.display = "none";
 link2.style.display = "inline-block";
 link3.style.display = "inline-block";
 link4.style.display = "inline-block";
 link1.innerHTML =  "&\#8593;";
 link2.innerHTML = "&\#8592;";
 link3.innerHTML = "&\#8594;";
 link4.innerHTML = "&\#8595;";
 link1.setAttribute("onclick", "lake()");
 link2.setAttribute("onclick", "mushroom()");
 link3.setAttribute("onclick", "dtrump()");
 link4.setAttribute("onclick", "mountaindew()");
}

function lake()
{
  console.log("Magikarp");
  title.innerHTML = "lake";
  document.body.style.backgroundImage = "url('img/lake.jpg')";
  magikarp.src = "img/magikarp.png";
  magikarp.style.display = "inline-block";
  magikarp.setAttribute("onclick", "magikarptrue()");
  if (vis == true) {
    magikarp.style.display = "none";
  }
}

function mountaindew(){
 console.log("Ambrosia");
 title.innerHTML = "mountains";
 document.body.style.backgroundImage = "url('img/mountain.png')";
 mdew.src = "img/ambrosia.png";
 mdew.style.display = "inline-block";
 mdew.setAttribute("onclick", "dewtrue()");
 if (dew == true) {
   mdew.style.display = "none";
 }
}

function mushroom(){
  console.log("Mushroom");
  title.innerHTML = "forest";
  document.body.style.backgroundImage = "url('img/forest.jpg')";
  shroom.style.display = "inline-block";
  shroom.src = "img/mushroom.png";
  shroom.setAttribute("onclick", "mariotrue()");
  if (mario == true){
    shroom.style.display = "none";
  }
}

function dtrump(){
  console.log("Cheeto");
  title.innerHTML = "Trump";
  document.body.style.backgroundImage = "url('img/trump.jpg')";
  cheeto.src = "img/cheeto.jpg";
  cheeto.style.display = "inline-block";
  cheeto.setAttribute("onclick", "trumptrue()");
  if (trump == true){
    cheeto.style.display = "none";
  }
}

//Endings

function planewin(){
  console.log("Victory by plane");
  title.innerHTML = "mission accomplished";
  document.body.style.background = "url('img/ending.png')";
  Tekst1.innerHTML = "You have saved your daughter! Fortunately she was unharmed, in fact it seems she made good friends with \"uncle Brutus\". You cuff Brutus, but as you wait for the rescue team to arrive it becomes more obvious that Brutus is will not last long enough to see justice. Either way, your daughter is safe and that is all that matters.";
  victory.innerHTML = "Congratulations! You've won! Thanks for playing!";
  image.style.display = "none";
  link1.style.display = "none";
}

function oceanwin(){
  console.log("Victory by ocean");
  title.innerHTML = "mission accomplished";
  document.body.style.background = "url('img/ending.png')";
  Tekst1.innerHTML = "You have saved your daughter! Fortunately she was unharmed, in fact it seems she made good friends with \"uncle Brutus\". You cuff Brutus and take him with you so he can be brought to a hospital, and then be brought to justice. Your friend from before helps you return to society.";
  victory.innerHTML = "Congratulations! You've won! Thanks for playing!";
  image.style.display = "none";
  link1.style.display = "none";
}

function win()
{
  console.log("Beat Cthulhu at his favourite game");
  title.innerHTML = "Win!";
  image.src = "img/cthulhuwin.png";
  horror.style.display = "none";
  document.body.style.backgroundColor = "";
  document.body.style.backgroundImage = "url('img/ending.png')";
  Tekst1.innerHTML = "You have guessed correctly, Cthulhu has agreed to save your daughter! He teleports with you to the secret base and infects everyone with utter insanity. He kills Brutus and eats his soul as breakfast, and brings you and your daughter to safety.";
  link1.innerHTML = "continue";
  link1.setAttribute("onclick", "cthulhuending()");
}

function cthulhuending()
{
  console.log("Win by Cthulhu");
  title.innerHTML = "Secret ending";
  Tekst1.innerHTML = "Not only is your daughter safe now, but you have made a good friend on your journey. You invite Cthulhu over for dinner, this is the start of a beautiful friendship.";
  victory.innerHTML = "You have won, congratulations! This is the secret ending. Thanks for playing!";
  victory.style.display = "inline-block";
  link1.style.display = "none";
}

//Game overs

function eaten()
{
  console.log("Death by shadowman");
  image.src = "img/eaten.jpg";
  title.innerHTML = "Oh oh";
  Tekst1.innerHTML = "That is definitely not a hot girl, but a shadowman. These creatures where once noble souls but have been degraded by evil magic. They are infamous for their insatiable hunger and love for human flesh. You can scare them off with white magic, but you always said white magic is for sissies. How did that turn out for you?";
  Tekst2.innerHTML = "The creature stares at you for a while, and then suddenly charges at you. You can barely react before it lunges its teeth in your neck. You feel a cold shockwave going through your body before you lose all conciousness...";
  link1.innerHTML = "Try again";
  Tekst2.style.display = "inline-block";
  link1.setAttribute("onclick", "forest()");
  image.style.display = "inline-block";
  link2.style.display = "none";
}

function bieber()
{
 console.log("death by bodyguards");
 title.innerHTML = "This is you:";
 video.style.display = "inline-block";
 link1.innerHTML = "Try again";
 link1.setAttribute("onclick", "entrance()");
 Tekst1.style.display = "none";
 link2.style.display = "none";
 image.style.display = "none";
}

function arrested()
{
  console.log("death by bubba");
  title.innerHTML = "Game Over";
  image.src = "img/jail.png";
  Tekst1.innerHTML = "The \"girl\" you bought was actually an undercover agent, you have been sentenced to life in prison. You have no idea what happened to your daughter but atleast your inmate Bubba is a nice guy.";
  cursive.style.display = "none";
  link1.setAttribute("onclick", "timeforadventure()");
  link1.innerHTML = "Try again";
  link2.style.display = "none";
  link3.style.display = "none";
  Tekst2.style.display = "none";
}

//if statements
function dingen(){
if (vis == true && mario == true && trump == true && dew == true) {
 cure();
}
}

function magikarptrue(){
  vis = true;
  lake();
  dingen();
}

function mariotrue(){
  mario = true;
  mushroom();
  dingen();
}

function dewtrue(){
  dew = true;
  mountaindew();
  dingen();
}

function trumptrue(){
  trump = true;
  dtrump();
  dingen();
}

function between() //game with Cthulhu
{
  RNG();
}

function RNG()
{
  var number = Math.floor(Math.random() * 10) + 1 ;
  var numberGamer = prompt("enter a number between 1 and 10");

  if(number == numberGamer){
    win();
  } else {
    fail();
  }
}

function confirmpurchase() //Confirm purchase of new daughter on the deepweb
{
  if (confirm("Are you sure?") == true) {
    arrested();
  }
}
