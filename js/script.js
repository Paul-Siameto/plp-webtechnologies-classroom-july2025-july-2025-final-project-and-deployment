// Dark/Light Mode Toggle
const modeToggle = document.querySelectorAll("#modeToggle");
modeToggle.forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

// Image Slider
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
if (slides.length > 0) {
  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 3000);
}

// Contact Form Validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    // Reset messages
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
    document.getElementById("formMessage").textContent = "";

    // Name
    if (document.getElementById("name").value.trim() === "") {
      document.getElementById("nameError").textContent = "Name is required";
      valid = false;
    }

    // Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!document.getElementById("email").value.match(emailPattern)) {
      document.getElementById("emailError").textContent = "Enter a valid email";
      valid = false;
    }

    // Message
    if (document.getElementById("message").value.trim() === "") {
      document.getElementById("messageError").textContent = "Message cannot be empty";
      valid = false;
    }

    if (valid) {
      document.getElementById("formMessage").textContent = "✅ Message sent successfully!";
      document.getElementById("formMessage").style.color = "green";
      form.reset();
    } else {
      document.getElementById("formMessage").textContent = "❌ Please fix the errors above.";
      document.getElementById("formMessage").style.color = "red";
    }
  });
}
