class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0
        }
        this.visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //  this.image= loadImage("block.png")
        World.add(world, this.body);
      }

      display(){

        

        if(this.body.speed <3) {
          var angle = this.body.angle
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          // imageMode(CENTER);
          // image(this.image,pos.x,pos.y,this.width, this.height);
          pop();
        }
        else{
          World.remove(world,this.body)
        //  World.remove(world, this.image);
        //  World.add(world, this.body);
        //  World.destroy(world, this.body);
          
         
          push();
        
          this.visiblity = this.visiblity - 5;
          pop();
        }


        }
}