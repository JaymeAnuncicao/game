
KEY_DOWN = 40;
KEY_UP = 38;
KEY_LEFT = 37;
KEY_RIGHT = 39;

KEY_END = 35;
KEY_BEGIN = 36;

KEY_BACK_TAB = 8;
KEY_TAB = 9;
KEY_SH_TAB = 16;
KEY_ENTER = 13;
KEY_ESC = 27;
KEY_SPACE = 32;
KEY_DEL = 46;

KEY_A = 65;
KEY_B = 66;
KEY_C = 67;
KEY_D = 68;
KEY_E = 69;
KEY_F = 70;
KEY_G = 71;
KEY_H = 72;
KEY_I = 73;
KEY_J = 74;
KEY_K = 75;
KEY_L = 76;
KEY_M = 77;
KEY_N = 78;
KEY_O = 79;
KEY_P = 80;
KEY_Q = 81;
KEY_R = 82;
KEY_S = 83;
KEY_T = 84;
KEY_U = 85;
KEY_V = 86;
KEY_W = 87;
KEY_X = 88;
KEY_Y = 89;
KEY_Z = 90;

KEY_PF1 = 112;
KEY_PF2 = 113;
KEY_PF3 = 114;
KEY_PF4 = 115;
KEY_PF5 = 116;
KEY_PF6 = 117;
KEY_PF7 = 118;
KEY_PF8 = 119;

let WIDTH, HEIGHT, canvas, ctx, frames = 0, maxJump = 1,

    ground = {
        y: 550,
        height: 50,
        color: 'green',
        draw: function () {
            ctx.fillStyle = this.color;
            ctx.fillRect(0, this.y, WIDTH, this.height);
        }
    },
    person = {
        x: 50,
        y: 0,
        height: 50,
        width: 50,
        color: 'red',
        gravity: 1.5,
        aceleration: 0,
        jumpForce: 20,
        speed: 5,
        qntJump: 0,

        load: function () {
            this.aceleration += this.gravity;
            this.y += this.aceleration;

            if (this.y > ground.y - this.height) {
                this.y = ground.y - this.height;
                this.qntJump = 0;
            }
        },
        jump: function () {
            if (this.qntJump < maxJump)
                this.aceleration = -this.jumpForce;
            this.qntJump++;
        },
        moveRight: function () {
            this.x += this.speed;
        },
        moveLeft: function () {
            this.x -= this.speed;
        },
        draw: function () {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    },
    floors = {
        _floors: [],
        color: '#0182ca',

        insert: function () {
            this._floors.push({
                x: 200,
                width: 150,
                height: 50,
                color: this.color
            })
        },
        load: function () {

        },
        draw: function () {
            for(let i=0;i < this._floors.length;i++){
                let floor = this._floors[i];
                ctx.fillStyle = floor.color;
                ctx.fillRect(floor.x, ground.y - floor.height*2, floor.width, floor.height);
            }
        }
    }
    ;



function main() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    if (WIDTH >= 500) {
        WIDTH = 600;
        HEIGHT = 600;
    }


    canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.style.border = "1px solid #cacaca";

    ctx = canvas.getContext('2d');
    document.body.appendChild(canvas)

    document.onkeydown = function (e) {

        let move = e.keyCode;
        Movement(move);
        // traformation(move)
        // fall()
    }
    loop();

}


main();
function Load() {
    // frames++;
    person.load();
}
function loop() {
    Load()
    draw()
    window.requestAnimationFrame(loop);

}
function draw() {
    ctx.fillStyle = "#f5f5f5";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ground.draw();
    floors.draw();
    person.draw();
}
function Movement(move) {
    if (move === KEY_UP) {
        person.jump();
    }
    if (move === KEY_RIGHT) {
        person.moveRight();
    } else if (move === KEY_LEFT) {
        person.moveLeft();
    }
    if(move === KEY_X){
        floors.insert();
    }

}



