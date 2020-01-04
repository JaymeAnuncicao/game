
const KEY_DOWN = 40;
const KEY_UP = 38;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;


let context = document.querySelector('canvas').getContext('2d');

context.canvas.height = 480;
context.canvas.width = 820;


let character = {
    x: 144,
    y: 0,
    color: '#E8996F',
    width: 50,
    height: 50,
    x_velocity: 0,
    y_velocity: 0,
    isJumping: true,
    draw: function () {
        context.fillStyle = character.color;
        context.fillRect(character.x, character.y, character.width, character.height);
    }
}

let character_controller = {
    right: false,
    left: false,
    up: false,
    listener: function (e) {
        let key_state = (e.type === 'keydown') ? true : false;

        switch (e.keyCode) {
            case KEY_RIGHT:
                character_controller.right = key_state;
                break;
            case KEY_LEFT:
                character_controller.left = key_state;
                break;
            case KEY_UP:
                character_controller.up = key_state;
                break;
        }
    }
}

let loop = function() {
    // console.log(character_controller.right);
    if (character_controller.up && character.isJumping == false) {
        character.y_velocity -= 20;
        character.isJumping = true;
    }

    if (character_controller.right) {
        character.x_velocity += 0.5;
    }

    if (character_controller.left) {
        character.x_velocity -= 0.5;
    }


    character.y_velocity += 1.5;
    character.x += character.x_velocity;
    character.y += character.y_velocity;

    character.x_velocity *= 0.9;
    character.y_velocity *= 0.9;


    if (character.y > 470 - 16 - 32) {

        character.isJumping = false;
        character.y = 470 - 16 - 32;
        character.y_velocity = 0;

    }
    collision();
    // console.log(collision());
    context.fillStyle = "#ddd";
    context.fillRect(0, 0, 820, 480);
    context.beginPath();
    tree.draw();
    character.draw();
    ground.draw();
    

    window.requestAnimationFrame(loop);
};

window.addEventListener("keydown", character_controller.listener)
window.addEventListener("keyup", character_controller.listener);
window.requestAnimationFrame(loop);


