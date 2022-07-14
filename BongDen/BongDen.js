class SwitchButton{
    constructor(status,lamp) {
        this.status = status;
        this.lamp = lamp;
    }
    getStatus(){
        return this.status;
    }
    setStatus(status){
        this.status = status;
    }
    getLamp(){
        return this.lamp;
    }
    setLamp(lamp){
        this.lamp = lamp;
    }


}