//from-don't need initial position

gsap.from(".box1", {
  y: -200,
  duration: 3,
  ease: "linear",
  repeat: -1,
  yoyo: true,
});

gsap.fromTo(
  ".box2",
  {
    y: 200,
    opacity: 0,
  },
  {
    opacity: 1,
    y: -200,
    duration: 3,
    ease: "linear",
    repeat: -1,
    yoyo: true,
    background: "green",
    borderRadius: 0,
  }
);
