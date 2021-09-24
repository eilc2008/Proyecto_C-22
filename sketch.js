var starImg,bgImg;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg
var fairy,fairyBody,fairyAni,fairyVoice;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starryNight.jpg");
	//carga aquí la animación del hada
	fairyAni = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");

	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice
	fairyVoice.play();

	//crea el sprite del hada, y agrega la animación para el hada
	fairy = createSprite(100,470);
	fairy.addAnimation("Hada Volando",fairyAni);
	fairy.scale = 0.4;

	star = createSprite(650,30);
	star.addImage("Estrella",starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);


	fairyBody = Bodies.rectangle(200,400,100,100,{restitution:0,isStatic:true});
	World.add(world, fairyBody);

	Engine.run(engine);
}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  fairy.x= fairyBody.position.x
  fairy.y= fairyBody.position.y

  //console.log(fairyBody.position.y);

	keyPressed();

  //escribe aquí el código para detener la estrella en la mano del hada
  if(star.y > 350 && starBody.position.y > 350){
	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	if(keyDown("LEFT_ARROW")){
		fairyBody.position.x = fairyBody.position.x -4;
	}

	if(keyDown("RIGHT_ARROW")){
		fairyBody.position.x = fairyBody.position.x +4;
	}
}
