// Sidebar toggle functionality
document
  .getElementById("sidebar-toggle")
  .addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("-translate-x-full");
  });

// Close sidebar when clicking outside on mobile
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const toggle = document.getElementById("sidebar-toggle");

  if (!sidebar.contains(event.target) && !toggle.contains(event.target)) {
    if (window.innerWidth < 1024) {
      sidebar.classList.add("-translate-x-full");
    }
  }
});

// Simple interactivity for the dashboard
document.addEventListener("DOMContentLoaded", function () {
  // Add smooth animations to stat cards
  const cards = document.querySelectorAll(".bg-white");
  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.3s ease";
  });

  // Animate cards on load
  setTimeout(() => {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 100);
    });
  }, 100);

  // Add click handlers to buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (e.target.id !== "sidebar-toggle") {
        this.style.transform = "scale(0.98)";
        setTimeout(() => {
          this.style.transform = "scale(1)";
        }, 100);
      }
    });
  });

  console.log("Dashboard loaded successfully");
});
