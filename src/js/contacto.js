document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm"); // coincide con HTML
  const successMessage = document.getElementById("successMessage"); // coincide con HTML

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Por favor ingresa un email valido.");
      return;
    }

    // Si todo está OK:
    successMessage.style.display = "block"; // muestra el mensaje
    form.reset();
  });
});
