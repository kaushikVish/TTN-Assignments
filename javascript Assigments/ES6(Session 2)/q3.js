class Car{
    constructor(brand){
        this.name=brand;
    }
    carName(){
        return "Car name is "+this.name;
    }
}

class Model extends Car{
    constructor(brand,model){
        super(brand);
        this.model=model;
    }
    carMode(){
        return this.carName() + " and its model is " + this.model;
    }
}

class Intro extends Model{
    constructor(brand,model){
        super(brand,model);
    }
    carDetails(){
        return "here are your car details => " + this.carMode()
    }
    static wishing(x){
        return x;
    }
}

let myCar=new Intro("Ford","Mustang");
console.log(Intro.wishing("Hello Vishal Kaushik , "));
console.log(myCar.carDetails());
