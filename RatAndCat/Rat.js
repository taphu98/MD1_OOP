class Rat extends Animal{

    constructor(name, weight, speed, say,status) {
        super(name, weight, speed, say);
        this.status = status;
    }
    getStatus(){
        return this.status;
    }
    setStatus(status){
        this.status = status;
    }
}