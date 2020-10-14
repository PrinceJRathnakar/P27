class Ball{
  constructor(x,y)
  {
      var options={
          restitution:1.0,
          friction:0.8,
          density:1.0,
          isStatic:true
      }
      this.radius=40;
      this.body=Bodies.circle(x,y,40,options);
      World.add(world,this.body);

  }
  display()
  {
      var pos=this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle)
      strokeWeight(2)
      fill("pink")
      circle(0,0,this.radius);
      pop();
  }
}
