const ship = document.querySelector(".ship");
const circleInTheSee = document.querySelector(".circleInTheSee");
const circleOnTheSee = document.querySelector(".onTheSeeMoon");
const stars = document.querySelectorAll(".stars");


let x = 1000;
let c = 100;
let t = 650;
const scale = "(0.015000,-0.015000)";


function move() {
    ship.setAttribute("transform", `translate(${x--}, 400) scale${scale}`);
    circleInTheSee.setAttribute("cy", c += 0.3);
    circleOnTheSee.setAttribute("cy", t -= 0.3);
}

const blood_drop = document.querySelectorAll(".blood_drop");
const blood_drop_opac = document.querySelectorAll(".blood_drop_opac");

for (let i = 0; i < blood_drop.length; i++) {
    setInterval(() => {
        let m = Math.round(Math.random() * 5500);
        let h = Math.round(Math.random() * 1500);
        blood_drop[i].setAttribute("x", m)
        blood_drop[i].setAttribute("y", h)
    }, 100);
    setInterval(() => {
        let m = Math.round(Math.random() * 5500);
        let h = Math.round(Math.random() * 1500) + 1500;
        blood_drop_opac[i].setAttribute("x", m)
        blood_drop_opac[i].setAttribute("y", h)
    }, 100);
}

setInterval(() => {
    move()
    if (x == 100) {
        x = 1000;
        c = 100;
        t = 650;
    }
}, 50);