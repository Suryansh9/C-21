var box1,box2,box3,box4;
var play;
var rand;
var music;


function preload(){
    music = loadSound("music.mp3");
}
function setup(){
createCanvas(500,300);
box1 = createSprite(70,280,100,14);
box1.shapeColor = "cyan";
box2 = createSprite(190,280,100,14);
box2.shapeColor = "yellow";
box3 = createSprite(310,280,100,14);
box3.shapeColor = "white";
box4 = createSprite(430,280,100,14);
box4.shapeColor = "lightgreen";

play = createSprite(Math.round(random(50,450)),25,20,20);
play.shapeColor = "white";
play.velocityX = 5;
play.velocityY = 5;
}
function draw(){
    background("black");
    rand = Math.round(random(1,4));
    music.loop();
    if(play.isTouching(box1)){
        play.shapeColor  = "cyan";
    }

    if(play.isTouching(box2)){
        play.shapeColor  = "yellow";
    }

    if(play.isTouching(box3)){
        play.shapeColor  = "white";
    }

    if(play.isTouching(box4)){
        play.shapeColor  = "lightgreen";
    }
    if(play.isTouching(box1) && rand === 1){
        play.velocityX = 0;
        play.velocityY = 0;
        
        }

    if(play.isTouching(box2) && rand === 2){
            play.velocityX = 0;
            play.velocityY = 0;
            
            }
            if(play.isTouching(box3) && rand === 3){
                play.velocityX = 0;
                play.velocityY = 0;
                
                }
                if(play.isTouching(box4) && rand === 4){
                    play.velocityX = 0;
                    play.velocityY = 0;
                    
                    }
                    console.log(rand);
    
    drawSprites();
    edges = createEdgeSprites();
    play.bounceOff(edges);
    play.bounceOff(box1);
    play.bounceOff(box2);
    play.bounceOff(box3);
    play.bounceOff(box4);




}
function mouseClicked(){
    play.velocityX = -5;
    play.velocityY = -5;
}
