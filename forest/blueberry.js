class Blueberry{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = -rnd(6,10) / 200;
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius",0.5);
    this.obj.setAttribute("opacity",1);
	this.obj.setAttribute("color","blue");
    
		 this.obj.setAttribute("clickable", "");
    
		 this.obj.addEventListener("click", () => {
			this.collect();
		});
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);
  }
  fall(){
    if(this.y > 0.5){
      this.y += this.dy;
      this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z}); 
    }else {
		this.obj.setAttribute("opacity",0)
	}
  }
  
  collect(){
    blueberries_collected++;
    this.obj.setAttribute("opacity",0)
  }
}