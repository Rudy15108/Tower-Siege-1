class Ground{

    constructor(x,y){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(x,y,900,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(247,171,56);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}