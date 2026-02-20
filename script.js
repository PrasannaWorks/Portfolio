window.addEventListener("DOMContentLoaded", function () {

  emailjs.init("k1NUv_YxBejKOoCkl");

  const form = document.getElementById("contact-form");
  const status = document.getElementById("status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      status.innerText = "Sending...";

      emailjs.sendForm("service_ws5xcci", "template_qbzqfb1", this)
        .then(() => {
          status.innerText = "Message sent successfully!";
          form.reset();
        })
        .catch((error) => {
          status.innerText = "Failed to send message.";
          console.error(error);
        });
    });
  }

  // Background animation
  const canvas = document.getElementById("bg");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      dx: (Math.random() - 0.5),
      dy: (Math.random() - 0.5)
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#00d4ff";
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(animate);
  }

  animate();
});