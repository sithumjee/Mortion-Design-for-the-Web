let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let restart = document.querySelector(".restart");

let tween = gsap.to(".box", {
  y: -200,
  duration: 4,
  backgroundColor: "teal",
  repeat: -1,
  yoyo: true,
  ease: "power1",
});

play.addEventListener("click", () => {
  tween.play();
});

pause.addEventListener("click", () => {
  tween.pause();
});

restart.addEventListener("click", () => {
  tween.restart();
});
