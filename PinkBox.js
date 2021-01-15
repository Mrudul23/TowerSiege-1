class PinkBox extends Box{
    constructor(x,y,width,height){
        super(x,y,width,height);
    }

    display(){
       fill("pink");
       super.display(); 
    }
}