class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color= rgb(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)));
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        if (this.body.position.y<310) {
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          fill(this.color);
          rect(0, 0, this.width, this.height);
          pop();
        }
       
      }
}