class dustbin
{
	constructor(x,y,width,height)
	{
		var op={
			'isStatic': true,
			'restitution':0,
			'friction':0.5,
			'density':1.2
		}
		this.dustbin=Bodies.rectangle(x,y,width,height,op)
		this.width=width
		this.height=height
		World.add(world, this.dustbin);

	}
	display()
	{
			var pos=this.dustbin.position;
			
			var angle=this.dustbin.angle

			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255)
			rotate(angle)
			rect(0,0,this.width,this.height);
			pop()
			
	}

}