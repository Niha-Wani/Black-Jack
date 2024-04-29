// Generating Random Number 
var firstCard= (Math.floor(Math.random()*10))+2;
var secondCard= (Math.floor(Math.random()*10))+2;
// Creating array 
var cards=[firstCard,secondCard];       
var sum= firstCard + secondCard;
var bJack= false;         // Boolean variable
var isAlive=true;         // Boolean variable
var msg="";
function start()
{
   rendergame();
}
function rendergame()
{
   document.getElementById("p2").textContent+=sum +", ";
   for(var i=0;i< cards.length;i++)
   {
   document.getElementById("p1").textContent+= cards[i] + " ";
   }
   if(sum<=20)
   {
     msg="Do you want to draw a new card? ";
   }
   else if(sum===21)
   {
     msg="Wohoo! You've got Blackjack! ";
     bJack=true;
   }
   else
   {
      msg="You're out of the game! ";
      isAlive=false;
   }
   document.getElementById("message").textContent=msg;
}

function newCard()
{
    if(isAlive===true && bJack===false)
    {
        var card = (Math.floor(Math.random()*10))+2;      //   Generating random number between 2-11
        sum+= card;
        cards.push(card);
        rendergame();        // calling start() function
    }
}
// Object
var players = {
   name: "Ahmad",
   tips: 145
}
document.getElementById("player").textContent=players.name+ ": $" +players.tips; 
