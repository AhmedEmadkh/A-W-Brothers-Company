// Variables
let contactInfo = document.querySelector('.contact-info');
let infoBtns = document.querySelectorAll('.info-btn');
let closeBtns = document.querySelectorAll('.close-contact-info');

// Function to open the contact info
infoBtns.forEach(button => {
  button.onclick = () => {
    contactInfo.classList.add('active');
  };
});

// Function to close the contact info
closeBtns.forEach(button => {
  button.onclick = () => {
    contactInfo.classList.remove('active');
  };
});

// Close contact info on scroll
window.onscroll = () => {
  contactInfo.classList.remove('active');
};

// Home Swiper
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Slider With jQuery
$(document).ready(function() {
  $('.category-header').on('click', function() {
    var $this = $(this);
    var $subcategories = $this.next('.subcategory-list');

    // Close all other subcategories
    $('.subcategory-list').not($subcategories).slideUp().prev('.category-header').removeClass('open');

    // Toggle the clicked subcategories
    $subcategories.slideToggle();
    $this.toggleClass('open');
  });
});

// Dark Mode
document.addEventListener('DOMContentLoaded', () => {
  const moonIcons = document.querySelectorAll('.moon-icon'); // Using class selector
  const darkModeClass = 'dark-mode';

  // Check local storage for dark mode preference
  if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add(darkModeClass);
  }

  // Toggle dark mode on icon click
  moonIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      document.body.classList.toggle(darkModeClass);

      // Save the preference in local storage
      if (document.body.classList.contains(darkModeClass)) {
        localStorage.setItem('dark-mode', 'enabled');
      } else {
        localStorage.setItem('dark-mode', 'disabled');
      }
    });
  });
});

// Animation on the navbar
let hasLoggedPastHalf = false;
function checkScrollPosition() {
  const section = document.getElementById('home');
  const sectionHeight = section.offsetHeight;
  const sectionTop = section.getBoundingClientRect().top;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const viewportHeight = window.innerHeight;

  // Calculate the midpoint of the section
  const sectionMidpoint = sectionTop + sectionHeight / 2;

  // Check if scrolled past the halfway point
  if (scrollTop + viewportHeight / 2 >= sectionMidpoint) {
    if (!hasLoggedPastHalf) {
      document.querySelector('.nav-animation').classList.remove('px-md-4');
      document.querySelector('.nav-animation').classList.remove('px-md-3');
      hasLoggedPastHalf = true;
    }
  } else {
    if (hasLoggedPastHalf) {
      document.querySelector('.nav-animation').classList.add('px-md-4');
      document.querySelector('.nav-animation').classList.add('px-md-3');
      hasLoggedPastHalf = false;
    }
  }
}
window.addEventListener('scroll', checkScrollPosition);

// Customize Navbar According To the Screen Size
document.addEventListener('DOMContentLoaded', function() {
  function updateNavbar() {
    const navbarMobile = document.getElementById('navbar-mobile');
    const navbarDesktop = document.getElementById('navbar-desktop');
    const screenWidth = window.innerWidth;

    if (screenWidth < 990) {
      navbarMobile.style.display = 'flex';
      navbarDesktop.style.display = 'none';
    } else {
      navbarMobile.style.display = 'none';
      navbarDesktop.style.display = 'flex';
    }
  }

  // Initial call to set the correct navbar
  updateNavbar();

  // Call the function on window resize
  window.addEventListener('resize', updateNavbar);
});


//Project Swipper
var boxSwiper = new Swiper('#box-container .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: '#box-container .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '#box-container .swiper-button-next',
    prevEl: '#box-container .swiper-button-prev',
  },
  scrollbar: {
    el: '#box-container .swiper-scrollbar',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});