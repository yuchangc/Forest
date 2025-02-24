let rnd = (l,u) => Math.random() * (u-l) + l
let scene, score, time, camera, apples = [], blueberries = [], watermelons = [];
let apples_collected = 0, blueberries_collected = 0, watermelons_collected = 0;
window.onload = function(){
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  score = document.querySelector("#score");
  time = document.querySelector("#time");
  
   for(let i = 0; i < 50; i++){
    let x = rnd(25,70);
    let y = rnd(10, 50);
    let z = rnd(-100,-60);
    apples.push(new Apple(x,y,z));
    }
  for(let i = 0; i < 50; i++){
    let x = rnd(40,60);
    let y = rnd(20, 40);
    let z = rnd(0,20);
    blueberries.push(new Blueberry(x,y,z));

  }
  
  for(let i = 0; i < 50; i++){
    let x = rnd(-50,10);
    let y = rnd(2, 20);
    let z = rnd(-100,-60);
    watermelons.push(new Watermelon(x,y,z));

  }
  
  
	
	loop();
}



function loop(){
	for(let apple of apples){
    apple.fall();
  }
  
  for(let blueberry of blueberries){
    blueberry.fall();
  }
   time.setAttribute("value",`Watermelon: ${watermelons_collected}/40   Apple: ${apples_collected}/30` );
	score.setAttribute("value",` Blueberry: ${blueberries_collected}/10` );
  setTimeout(loop,10);

}
  
 
 
  


