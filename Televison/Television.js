class Television {
    constructor(chanel,volume,status) {
        this.chanel = chanel;
        this.volume = volume;
        this.status = status;
    }
    getChanel(){
        return this.chanel;
    }
    setChanel(chanel){
        this.chanel = chanel;
    }
    getVolume(){
        return this.volume;
    }
    setVolume(volume){
        this.volume = volume;
    }
    getStatus(){
        return this.status;
    }
    setStatus(status){
        this.status = status;
    }
}