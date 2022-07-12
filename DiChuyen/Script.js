let canvas = document.getElementById('myCanvas')
let ctx = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 600

let img = new Image()
img.src = 'img/anh.png'


console.log(img)

class Hero {
    constructor(image, x, y) {
        this.image = image;
        this.x = x;
        this.y = y;


    }

    getImage() {
        return this.image;
    }

    setImage(image) {
        this.image = image;
    }

    getTop() {
        return this.y;
    }

    setTop(y) {
        this.y = y;
    }

    getLeft() {
        return this.x;
    }

    setLeft(x) {
        this.x = x;
    }

    drawImage() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(this.image, this.x, this.y,)
    }

    moveRight() {
        this.x++;
    }

    moveLeft() {
        this.x--;
    }

    moveUp() {
        this.y--;
    }

    moveDown() {
        this.y++;
    }

    move() {
        if (this.y < 0 && this.x + this.image.width < canvas.width) {
            this.moveRight();
        } else if (this.x + this.image.width >= canvas.width && this.y + this.image.height < canvas.height) {
            this.moveDown();
        } else if (this.y + this.image.height >= canvas.height && this.x > 0 ){
            this.moveLeft();
        } else if (this.x <= 0){
            this.moveUp();
        }

    }

}

let doremon = new Hero(img, 0, -1)
repeat();

function repeat() {

    doremon.drawImage()
    doremon.move()
    console.log(doremon.x);

    requestAnimationFrame(repeat)
}


// window.onload = function () {
//     doremon.drawImage();
// }
