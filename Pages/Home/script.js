// navbar.html
document.addEventListener("DOMContentLoaded", () => {
    fetch("/Pages/Home/navbar.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("navbar-placeholder").innerHTML = data;
  
        // Mobile menu toggle script
        const menuBtn = document.getElementById("menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");
  
        if (menuBtn && mobileMenu) {
          menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
          });
        }
      });
  });
  
 //popular.html
 document.addEventListener("DOMContentLoaded", () => {
  fetch("/Pages/Home/Popular/Popular.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("popular-placeholder").innerHTML = data;

      // Mobile menu toggle script
      const menuBtn = document.getElementById("menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");

      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
        });
      }
    });
});

 //ShowCoffee.html
 document.addEventListener("DOMContentLoaded", () => {
  fetch("/Pages/Home/Popular/ShowCoffee.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("ShowCoffee-placeholder").innerHTML = data;

      // Mobile menu toggle script
      const menuBtn = document.getElementById("menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");

      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
        });
      }
    });
});

 //Social Pages.html
 document.addEventListener("DOMContentLoaded", () => {
  fetch("/Pages/SocialPages.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("Social-placeholder").innerHTML = data;

      // Mobile menu toggle script
      const menuBtn = document.getElementById("menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");

      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
        });
      }
    });
});

 //Footer.html
 document.addEventListener("DOMContentLoaded", () => {
  fetch("/Pages/Home/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;

      // Mobile menu toggle script
      const menuBtn = document.getElementById("menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");

      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
        });
      }
    });
});