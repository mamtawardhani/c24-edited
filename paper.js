class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		
		
		this.body=Bodies.circle(x,y,r, options)
		this.r=r
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		
			var angle=this.body.angle
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipseMode(RADIUS)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}