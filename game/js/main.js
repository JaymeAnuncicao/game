
function posicao(e) {
    var el = this;
    var coordenadas = el.getBoundingClientRect();
    var res =
        console.log('posição x', coordenadas.left, 'posição y', coordenadas.top)
}
let uindow = document.getElementById('main-window').addEventListener('click', posicao);
let grondHeight = document.getElementById('ground').addEventListener('click', posicao);
let ground = {
    x: 103.5,
    y: 410
}


let personY = 410;
let transformed = false;
let UpDown = 0;
let LeftRight = 6;
let personElement = document.getElementById('person');
let person = {
    x: 103.5,
    y: personY,
    speed: LeftRight,    
}
const groun = document.getElementById('ground');

document.onkeydown = function (e) {

    let move = e.keyCode;
    Movement(move);
    traformation(move)
    fall()
}


function Movement(move) {
    if (move === 39) {
        LeftRight += 6;
        personElement.style.left = LeftRight + "px";
        if(!transformed)
            personElement.style.backgroundImage = 'url("https://media.giphy.com/media/2uI9jZtmnOWINS1wZf/giphy.gif")';
        else
            personElement.style.backgroundImage = 'url("https://media.giphy.com/media/mz6yFuWwMrQv6/giphy.gif")';
    } else if (move === 37) {
        LeftRight = LeftRight - 6;
        personElement.style.left = LeftRight + "px";
        if(!transformed)
            personElement.style.backgroundImage = 'url("https://media.giphy.com/media/ME3ep4zFbkk48/giphy.gif")';
        else
            personElement.style.backgroundImage = 'url("https://media.giphy.com/media/mz6yFuWwMrQv6/giphy.gif")';
    }
    jump(move)
}
function jump(move) {
    let groundYH = ground.y + groun.clientHeight;
    if (move === 38) {        
        personElement.style.top = person.y - 100 + "px";
        if(!transformed)
            personElement.style.backgroundImage = 'url("https://media.giphy.com/media/WNIx9kFviGW6joMdOc/giphy.gif")';
        else
            personElement.style.backgroundImage = 'url("https://media.giphy.com/media/mz6yFuWwMrQv6/giphy.gif")';
    }
    let personPositionY = personElement.style.top;
    personPositionY = personPositionY.replace(/[p,x]+/g, '');
    
}

function fall() {
    let groundXW = ground.x + groun.clientWidth;
    let groundYH = ground.y + groun.clientHeight;
    let personPositionX = personElement.style.left;
    personPositionX = personPositionX.replace(/[p,x]+/g, '');
    
    let personPositionY = personElement.style.top;
    personPositionY = personPositionY.replace(/[p,x]+/g, '');
    
    // console.log("tamanho mais a posição do bloco: "+groundXW+ "| posição: " +personPositionX);
    person.x = parseInt(personPositionX) + 103.5;

    if( person.x > groundXW || (person.x) < (ground.x-24)){
        // console.log(person.x);
         personY = groundYH;
        setTimeout(()=>{
            personElement.style.top = personY + "px";
        }, 200);
    }
    setTimeout(()=>{
        personElement.style.top = personY + "px";
    }, 300);
}

function traformation(move){
    if(move === 90 && !transformed){
        transformed = true;
        setTimeout(()=>{
            personElement.style.backgroundImage = 'url("https://media.giphy.com/media/qSLfR4OeUqQIo/giphy.gif")';
        }, 300)
        setTimeout(()=>{
            personElement.style.backgroundImage = 'url("https://media.giphy.com/media/aK0uRwsEBTUY0/giphy.gif")';
        }, 3000)
    }else if(move === 90 && transformed){
        transformed = false;
    }
}
// // KEY_DOWN = 40;
// // KEY_UP = 38;
// // KEY_LEFT = 37;
// // KEY_RIGHT = 39;

// // KEY_END = 35;
// // KEY_BEGIN = 36;

// // KEY_BACK_TAB = 8;
// // KEY_TAB = 9;
// // KEY_SH_TAB = 16;
// // KEY_ENTER = 13;
// // KEY_ESC = 27;
// // KEY_SPACE = 32;
// // KEY_DEL = 46;

// // KEY_A = 65;
// // KEY_B = 66;
// // KEY_C = 67;
// // KEY_D = 68;
// // KEY_E = 69;
// // KEY_F = 70;
// // KEY_G = 71;
// // KEY_H = 72;
// // KEY_I = 73;
// // KEY_J = 74;
// // KEY_K = 75;
// // KEY_L = 76;
// // KEY_M = 77;
// // KEY_N = 78;
// // KEY_O = 79;
// // KEY_P = 80;
// // KEY_Q = 81;
// // KEY_R = 82;
// // KEY_S = 83;
// // KEY_T = 84;
// // KEY_U = 85;
// // KEY_V = 86;
// // KEY_W = 87;
// // KEY_X = 88;
// // KEY_Y = 89;
// // KEY_Z = 90;

// // KEY_PF1 = 112;
// // KEY_PF2 = 113;
// // KEY_PF3 = 114;
// // KEY_PF4 = 115;
// // KEY_PF5 = 116;
// // KEY_PF6 = 117;
// // KEY_PF7 = 118;
// // KEY_PF8 = 119;