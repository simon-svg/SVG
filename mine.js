const ship = document.querySelector(".ship");
const circleInTheSee = document.querySelector(".circleInTheSee");
const circleOnTheSee = document.querySelector(".onTheSeeMoon");
const stars = document.querySelectorAll(".stars");


let x = 1500;
let c = 10;
let t = 90;
const scale = "(0.015000,-0.015000)";

function move() {
    ship.setAttribute("transform", `translate(${x-=3.5}, 550) scale${scale}`);
    circleInTheSee.setAttribute("cy", `${c += 0.1}vh`);
    circleOnTheSee.setAttribute("cy", `${t -= 0.1}vh`);
}

const blood_drop = document.querySelectorAll(".blood_drop");
const blood_drop_opac = document.querySelectorAll(".blood_drop_opac");

for (let i = 0; i < blood_drop.length; i++) {
    setInterval(() => {
        let m = Math.round(Math.random() * 350);
        let h = Math.round(Math.random() * 200);
        blood_drop[i].setAttribute("x", `${m}%`)
        blood_drop[i].setAttribute("y", `${h}vh`)
    }, 1000);
    setInterval(() => {
        let m = Math.round(Math.random() * 350);
        let h = Math.round(Math.random() * 200) + 180;
        blood_drop_opac[i].setAttribute("x", `${m}%`)
        blood_drop_opac[i].setAttribute("y", `${h}vh`)
    }, 1000);
}

setInterval(() => {
    move()
    if (x <= 100) {
        x = 1500;
        c = 10;
        t = 90;
    }
}, 50);