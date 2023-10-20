document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
      }
  });
});

window.onscroll = function() {
  stickynavbar();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickynavbar() {
  if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
  } else {
      navbar.classList.remove("sticky");
  }
}

const menuIcon = document.getElementById("menu-icon");
const menuDropdown = document.querySelector(".menu-dropdown");

menuIcon.addEventListener("click", function() {
  menuDropdown.classList.toggle("show");
  menuIcon.classList.toggle("show");
});

// Di dalam scripts.js atau dalam tag <script> yang sesuai
document.querySelector('form').addEventListener('submit', function () {
  // Ganti "thanks.html" dengan URL halaman yang ingin Anda arahkan
  this.action = 'thanks.html';
});

