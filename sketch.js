//Create variables here
var dogImage;
var dog;
var dogFine;
var dogHappy;
var database; 
var foodS;
var foodStock;
var score = 20;

function preload()
{
  //load images here
  dogHappy= loadImage("happydog.png");
  dogFine= loadImage("Dog.png");

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,20,50);
  dog.addImage(dogFine);
  dog.scale=0.3;
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){

  //  writeStock(foodS);
    dog.addImage(dogHappy);
    score = score - 1;

  }

  drawSprites();
  //add styles here

  textSize(20);
  fill("white")
  stroke("black")
  text("Food Stock: "+ score, 180,100);

  textSize(20);
  fill("white")
  stroke("black")
  text("Press UP ARROW key to feed dog", 140,50)

}

//function readStock(data){

 // foodS = data.val();

//}

//function writeStock(x){

 // database.ref('/').update({
 //   Food:x
 // })

//}