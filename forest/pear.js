class Pear{
  constructor(x,y,z){
   this.x = x;
    this.dx = rnd(-10,10) / 100 ;
    this.z = z;
    this.dz = rnd(-10,10) / 100;
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius",0.5);
    this.obj.setAttribute("opacity",1);
	this.obj.setAttribute("color","#C9CC3F");
    
		 this.obj.setAttribute("clickable", "");
    
		 this.obj.addEventListener("click", () => {
			this.collect();
		});
    this.obj.setAttribute("position",{x:this.x, y:10, z:this.z});
    scene.append(this.obj);

  }
  fall(){
    this.z += this.dz;
		if (this.z < 0 || this.z > 20) {
			this.dz = -this.dz;
			}
			
	this.x += this.dx;
		 if (this.x < -50 || this.x > 10) {
            this.dx = -this.dx;
           }
  }
  
  collect(){
    pears_collected++;
    this.obj.setAttribute("opacity",0)
  }
}