class Snowman{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snowman.png");
       // this.Visibility=255
       
        World.add(world, this.body);
      }
      display(){
       
        console.log(this.body.speed)
        
      /*if(this.body.speed < 1.9){
        this.body.display
      }*/
      //else{
        //World.remove(world,this.body);
        push();
        //this.Visibility=this.Visibility-5
        translate(this.body.position.x, this.body.position.y);
        
       //tint (255,this.Visibility);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      
      }
      
      
      }

     /* score(){
        if(this.Visibility=0 && this.Visibility> 1.9){
          score++;
        }
   //   }
     
}*/





