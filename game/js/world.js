

// let context = document.querySelector('canvas').getContext('2d');

const KEY_A = 65;
const KEY_B = 66;
const KEY_C = 67;
const KEY_D = 68;

// console.log(context.canvas.width);  
let ground = {
    width: context.canvas.width,
    height: 10,
    x: 0,
    y: context.canvas.height - 10,
    color: 'green',

    draw: function () {
        context.fillStyle = ground.color;
        context.fillRect(ground.x, ground.y, ground.width, ground.height);
        // context.fill();
    }

}

let tree = {
    width: 30,
    height: 100,
    x: Math.floor(Math.random() * 300) + 160,
    y: context.canvas.height - 110,
    color: '#8C5A48',
    draw: function () {
        context.fillStyle = tree.color;
        context.fillRect(tree.x, tree.y, tree.width, tree.height);
    }
}

let objects_above_surface = [
    tree
]

function collision() {
    objects_above_surface.forEach(object=>{
        if(character.x+character.width >= (object.x + object.width)-30){
            character.x = object.x-character.width;
            // return true
        }else{
        //    return false;
        }
    })
}
