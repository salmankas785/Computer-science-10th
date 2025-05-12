// layout/script.js
document.addEventListener("DOMContentLoaded", () => {
     const links = document.querySelectorAll(".animated-link");

     links.forEach(link => {
          link.addEventListener("click", (event) => {
               event.preventDefault(); // Prevent immediate navigation
               const targetURL = event.target.href;

               document.body.classList.add("fade-out"); // Start fade-out animation

               setTimeout(() => {
                    window.location.href = targetURL; // Navigate after animation
               }, 500); // Match this duration with the CSS transition time
          });
     });
});
