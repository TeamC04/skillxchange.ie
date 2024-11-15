document.addEventListener("DOMContentLoaded", function() {
  // Profile edit functionality
  const editProfileBtn = document.getElementById("edit-profile-btn");
  const editProfileForm = document.getElementById("edit-profile-form");
  const profileInfo = document.getElementById("profile-info");
  const cancelBtn = document.querySelector(".cancel-btn");

  if (editProfileBtn && editProfileForm && profileInfo && cancelBtn) {
    // Toggle between profile view and edit form
    editProfileBtn.addEventListener("click", () => {
      profileInfo.classList.toggle("hidden");
      editProfileForm.classList.toggle("hidden");
    });

    // Handle form submission (save changes)
    editProfileForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get input values
      const name = document.getElementById("name-input").value;
      const email = document.getElementById("email-input").value;
      const postalCode = document.getElementById("postal-code-input").value;
      const address = document.getElementById("address-input").value;
      const skills = document.getElementById("skills-input").value;

      // Update profile view
      document.getElementById("name").textContent = name;
      document.getElementById("email").textContent = email;
      document.getElementById("postal-code").textContent = postalCode;
      document.getElementById("address").textContent = address;
      document.getElementById("skills").textContent = skills;

      // Hide edit form and show profile info
      profileInfo.classList.toggle("hidden");
      editProfileForm.classList.toggle("hidden");
    });

    // Handle cancel button click (discard changes)
    cancelBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent form submission or page refresh

      // Hide edit form and show profile info without saving changes
      profileInfo.classList.remove("hidden");
      editProfileForm.classList.add("hidden");
    });
  } else {
    console.error("Profile elements not found!");
  }

  // Toggle menu functionality
  const toggleMenuBtn = document.querySelector(".menu-btn");
  if (toggleMenuBtn) {
    toggleMenuBtn.addEventListener("click", function() {
      const navLinks = document.querySelector(".nav-links");
      if (navLinks) {
        navLinks.classList.toggle("active");
      } else {
        console.error("Navigation links not found!");
      }
    });
  } else {
    console.error("Menu button not found!");
  }

  // Skill search functionality
  const searchInput = document.getElementById("search-input");
  const skillContainers = document.querySelectorAll(".skill-container");

  if (searchInput && skillContainers.length > 0) {
    searchInput.addEventListener("input", function () {
      const query = searchInput.value.toLowerCase();
      console.log("Search query:", query);

      skillContainers.forEach((container) => {
        const location = container.getAttribute("data-location").toLowerCase();
        const skill = container.getAttribute("data-skill").toLowerCase();
        console.log("Location:", location, "Skill:", skill);

        if (location.includes(query) || skill.includes(query)) {
          container.style.display = "flex";
        } else {
          container.style.display = "none";
        }
      });
    });
  } else {
    console.error("Search input or skill containers not found!");
  }

  // Login and Register form toggle functionality
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const loginLink = document.getElementById('login-link');
  const registerLink = document.getElementById('register-link');

  if (loginForm && registerForm && loginLink && registerLink) {
    // Switch to Login Form
    loginLink.addEventListener('click', (e) => {
      e.preventDefault();
      registerForm.classList.add('hidden');
      loginForm.classList.remove('hidden');
    });

    // Switch to Register Form
    registerLink.addEventListener('click', (e) => {
      e.preventDefault();
      loginForm.classList.add('hidden');
      registerForm.classList.remove('hidden');
    });
  } else {
    console.error("Login/Register form or links not found!");
  }
});