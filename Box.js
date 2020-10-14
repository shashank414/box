class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    
  }
display(){

  
  if (this.body!=null) {
    super.display();
    if(Math.abs(box22.body.position.x-this.body.position.x)< box22.width/2+this.width/2 && Math.abs(box22.body.position.y-this.body.position.y)< box22.height/2+this.height/2  ){
      World.remove(world,this.body)
      this.body=null
    }
  }
}
display2(){
  super.display();
}
};

