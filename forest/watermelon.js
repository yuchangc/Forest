class Watermelon{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = -rnd(6,10) / 100;
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius",1);
    this.obj.setAttribute("opacity",1);
	this.obj.setAttribute("color","#355E3B");
    
		 this.obj.setAttribute("clickable", "");
    
		 this.obj.addEventListener("click", () => {
			this.collect();
		});
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);
  }
  
  
  collect(){
    watermelons_collected++;
    this.obj.setAttribute("opacity",0)
  }
}