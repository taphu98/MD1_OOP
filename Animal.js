class Animal{
    constructor(name,weight,speed,say) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.say = say;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        this.weight = weight;
    }
    getSpeed(){
        return this.speed;
    }
    setSpeed(speed){
        this.speed = speed;
    }
    getSay(){
        return this.say;
    }
    setSay(say){
        this.say = say;
    }
}
