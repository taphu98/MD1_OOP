class Cat extends Animal{

    constructor(name, weight, speed, say) {
        super(name, weight, speed, say);
    }
    catchRat(rat){
        if(super.getSpeed()>rat.getSpeed()){
            rat.setStatus(false);
        }else {
            rat.setStatus(true);
        }
    }
    eatRat(rat) {
        if (!rat.getStatus()){
            console.log('khoi luong cua meo sau khi an thit chuot la ',super.getWeight()+rat.getWeight())
        }else {
            console.log('bat dc dau ma doi an')
        }

    }

}