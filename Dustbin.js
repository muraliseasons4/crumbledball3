class Dustbin {
    constructor(x, y, width, height) {
      var options = {
           'isStatic': true,
          'restitution':0.9,
          'friction':1.2,
          'density':5.8,
      }
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("black");
      fill("green");
      rect(4, 4, this.width, this.height);
      pop();
    }
  };