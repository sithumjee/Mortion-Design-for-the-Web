gsap.set(".box", {
  borderRadius: 0,
});

gsap.to(".box", {
  backgroundColor: "red",
  borderRadius: 100,
  duration: 1,
  y: -100,
  ease: "power1",
  yoyo: true,
  repeat: -1,
  stagger: {
    each: 0.5,
    from: 0,
    ease: "power1",
    repeat: -1,
    yoyo: true,
  },
});
