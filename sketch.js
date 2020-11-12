const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particle;
var divisionHeight=300;
var gameState="play";
var score=0;
var count=0;
plinkos=[]
divisions=[]
function setup() {
  createCanvas(1350,660);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(680,660,1400,20)
//{
for (var k=0;k<=width;k=k+80){
  divisions.push(new Division(k, height-divisionHeight/2, 19, divisionHeight) )
}
for(var j=10;j<=width;j=j+50){
  plinkos.push(new  Plinko(j,50,10))
}
for(var j=10;j<=width;j=j+50){
  plinkos.push(new  Plinko(j,100,10))
  }
  for(var j=10;j<=width;j=j+50){
  plinkos.push(new  Plinko(j,150,10))
}
for(var j=10;j<=width;j=j+50){
  plinkos.push(new  Plinko(j,200,10))
}
for(var j=10;j<=width;j=j+50){
  plinkos.push(new  Plinko(j,250,10))
}
for(var j=10;j<=width;j=j+50){
  plinkos.push(new  Plinko(j,300,10))
  }
  Engine.run(engine); 

}
//}
function draw() {
  background(0);  
  Engine.update(engine);
 

  for (var k = 0; k < divisions.length; k = k +1 ){
    divisions[k].display();
  }
  for(var j=0;j<plinkos.length;j=j+1){
    plinkos[j].display()
  }
  
console.log(count)

ground.display()

textSize(30)
text("1",30,400)
text("2",110,400)
text("3",190,400)
text("4",270,400)
text("5",350,400)
text("6",430,400)
text("7",510,400)
text("8",590,400)
text("9",670,400)
text("10",740,400)
text("11",820,400)
text("12",900,400)
text("13",980,400)
text("14",1060,400)
text("15",1140,400)
text("16",1220,400)
text("SCORE  :  "+ score,1080,90)
text("500",20,600)
text("500",100,600)
text("500",180,600)
text("500",260,600)
text("200",340,600)
text("200",420,600)
text("200",500,600)
text("200",580,600)
text("400",650,600)
text("400",740,600)
text("400",820,600)
text("400",900,600)
text("100",980,600)
text("100",1060,600)
text("100",1140,600)
text("100",1220,600)
textSize(20)
fill("yellow")
text("You have only five chances to drop a coin.The maximum score which can be earned is 2500.If you get this score then you are lucky",20,30)
if(particle!=null)
{
   particle.display();
    
    if (particle.body.position.y>400)
    {
          if (particle.body.position.x < 300) 
          {
              score=score+500;      
              particle=null;
              if ( count>= 5) gameState ="end";                          
          }
          else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
          {
                score = score + 200;
                particle=null;
                if ( count>= 5) gameState ="end";

          }
          else if (particle.body.position.x < 950 && particle.body.position.x > 601 )
          {
                score = score + 400;
                particle=null;
                if (count>= 5)  gameState ="end";

          }
          else if (particle.body.position.x < 1350 && particle.body.position.x > 950 )
          {
                score = score + 100;
                particle=null;
                if (count>= 5)  gameState ="end";

          }
        }
      }
      if(gameState==="end"&&score===2500){
        strokeWeight(10)
        stroke("blue")
        fill("green")
        textSize(150)
        text("YOU ARE LUCKY",10,300)
      }
      if(gameState==="end"&&score<2500){
        strokeWeight(10)
        stroke("blue")
        fill("green")
        textSize(150)
        text("GAMEOVER",100,300)
      }
    }   
    function mouseClicked(){
    
      if(gameState!="end")
      {
          count++;
         particle=new Particle(mouseX, 10, 10); 
      }   
    }
    