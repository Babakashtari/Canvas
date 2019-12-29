const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");

// context.fillStyle = "blue";

// rectangle or square:
// context.fillRect(15, 15, 60, 100);

// line:
// context.beginPath();
// context.moveTo(30, 30);
// context.lineTo(300, 300);
// context.strokeStyle = "green";
// context.stroke();

let opacity = 1;
let opacity_increment = 0.01;
// arc or circle:
const shine = () => {
    requestAnimationFrame(shine);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    if (opacity >= 1 || opacity <= 0) {
        opacity_increment = -opacity_increment;
    }
    opacity += opacity_increment;

    context.beginPath();
    context.arc(300, 300, 5, 0, Math.PI * 2);
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fill();
};
shine();

const star_generator = () => {
    for (let i = 0; i < 60; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        let size = Math.random() * 3;
        if (size === 0) {
            size = 2;
        }
        const opacity = Math.random();
        context.beginPath();
        context.arc(x, y, size, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fill();

        window.addEventListener("load", () => {});
    }
};
star_generator();
