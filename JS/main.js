//Variables
let contactInfo = document.querySelector('.contact-info');
let infoBtn = document.querySelector('#info-btn');
let CloseBtn = document.querySelector('#close-contact-info');


//Open the contact info

infoBtn.onclick = ()=>{
    contactInfo.classList.add('active');
}

//Close the contact info

CloseBtn.onclick = ()=>{
    contactInfo.classList.remove('active');
}

window.onscroll = ()=>{
    contactInfo.classList.remove('active');
}

// Swiper
var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Slider With Jquery
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


// LightGallery JS
lightGallery(document.querySelector('.projects .box-container'));


// Dark Mode
document.addEventListener('DOMContentLoaded', () => {
    const moonIcon = document.getElementById('moon-icon');
    const darkModeClass = 'dark-mode';
  
    // Check local storage for dark mode preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
      document.body.classList.add(darkModeClass);
    }
  
    // Toggle dark mode on icon click
    moonIcon.addEventListener('click', () => {
      document.body.classList.toggle(darkModeClass);
      
      // Save the preference in local storage
      if (document.body.classList.contains(darkModeClass)) {
        localStorage.setItem('dark-mode', 'enabled');
      } else {
        localStorage.setItem('dark-mode', 'disabled');
      }
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
            document.querySelector('.nav-animation').classList.remove('px-4')
            document.querySelector('.nav-animation').classList.remove('py-3')
            hasLoggedPastHalf = true;
        }
    } else {
        if (hasLoggedPastHalf) {
            document.querySelector('.nav-animation').classList.add('px-4')
            document.querySelector('.nav-animation').classList.add('py-3')
            hasLoggedPastHalf = false;
        }
    }
}
window.addEventListener('scroll', checkScrollPosition);
  

  
