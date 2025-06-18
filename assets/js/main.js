/* =====================================================
   Resume section tabs and tab contents
===================================================== */

const resumeTabs = document.querySelector(".resume-tabs");
const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll(".resume-tab-content");

var resumeTabNav = function(resumeTabClick){
    resumeTabContents.forEach((resumeTabContent) => {
    resumeTabContent.style.display = "none";
    resumeTabContent.classList.remove("active");
});

resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
    resumePortfolioTabBtn.classList.remove("active");
});

    resumeTabContents[resumeTabClick].style.display = "flex";


   setTimeout(()=> {
      resumeTabContents[resumeTabClick].classList.add("active");
   },100);
    


    resumePortfolioTabBtns[resumeTabClick].classList.add("active");

}

resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
    resumePortfolioTabBtn.addEventListener("click", () => {
        resumeTabNav(i);
    });
});
/* =====================================================
   Service modal open/close function
===================================================== */

const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-modal");

serviceCardWithModals.forEach((serviceCardWithModal) => {
    const serviceCard = serviceCardWithModal.querySelector(".service-card");
    const serviceBackDrop = serviceCardWithModal.querySelector(".service-modal-backdrop");
    const serviceModal = serviceCardWithModal.querySelector(".service-modal");
    const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");

    serviceCard.addEventListener("click", () => {
        serviceBackDrop.style.display = "flex";
        setTimeout(()=>{
serviceBackDrop.classList.add("active");
        },100);
        setTimeout(()=>{
        serviceModal.classList.add("active");
    },300);
    });
    modalCloseBtn.addEventListener("click", () => {
    setTimeout(() => {
        serviceBackDrop.style.display = "none";
    }, 500);

    setTimeout(() => {
        serviceBackDrop.classList.remove("active");
        serviceModal.classList.remove("active");
    }, 100);
});
});
/* =====================================================
   Portfolio modals, tabs and cards
===================================================== */


// Filter portfolio cards according to portfolio tabs.


// Filter portfolio cards according to portfolio tabs.
document.addEventListener("DOMContentLoaded", () => {
    const portfolioTabs = document.querySelector(".portfolio-tabs");
    const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn");
    const cardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

    portfolioTabBtns.forEach((tabBtn) => {
        tabBtn.addEventListener("click", () => {
            const filter = tabBtn.getAttribute("data-filter");

            cardsWithModals.forEach((cardWithModal) => {
                if(filter === "all" || cardWithModal.classList.contains(filter)){
                    
                    cardWithModal.classList.remove("hidden");
                    setTimeout(() => {
                     cardWithModal.style.opacity = "1";
                     cardWithModal.style.transition = ".5s ease";
                     }, 1);
                } else {
                    
                    cardWithModal.classList.add("hidden");
                    setTimeout(() => {
    cardWithModal.style.opacity = "0";
    cardWithModal.style.transition = ".5s ease";
}, 1);
                }
            });


            // Add active class to the clicked tab button.
portfolioTabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
tabBtn.classList.add("active");
        });
    });
});
// Open/Close Portfolio modals.
// Open/Close Portfolio modals.
const portfolioCardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

portfolioCardsWithModals.forEach((portfolioCardWithModal) => {
    const portfolioCard = portfolioCardWithModal.querySelector(".portfolio-card");
    const portfolioBackdrop = portfolioCardWithModal.querySelector(".portfolio-modal-backdrop");
    const portfolioModal = portfolioCardWithModal.querySelector(".portfolio-modal");
    const modalCloseBtn = portfolioCardWithModal.querySelector(".modal-close-btn");

    portfolioCard.addEventListener("click", () => {
    portfolioBackdrop.style.display = "flex";

    setTimeout(() => {
        portfolioBackdrop.classList.add("active");
    }, 300);

    setTimeout(() => {
        portfolioModal.classList.add("active");
    }, 300);
});
modalCloseBtn.addEventListener("click", () => {
    setTimeout(() => {
        portfolioBackdrop.style.display = "none";
    }, 500);

    setTimeout(() => {
        portfolioBackdrop.classList.remove("active");
        portfolioModal.classList.remove("active");
    }, 100);
}); 
});
/* =====================================================
   Testimonial Swiper
===================================================== */

/* =====================================================
   Send/Receive emails from contact form - EmailJS
===================================================== */

// Send/Receive emails from contact form = EmailJS
// ===============================================*/
(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "3IMHKWe_zixEZoYcD",
  });
})();

let sueContactForm = document.getElementById("sue-contact-form");
let sueContactFromAlert = document.querySelector(".contact-form-alert");

sueContactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // these IDs from the previous steps
  emailjs.sendForm('service_ragz8nq', 'template_cxb8p9l', '#sue-contact-form')
    .then(() => {
      // console.log('SUCCESS!');
      sueContactFromAlert.innerHTML = "<span>Your message sent successfully!</span> <i class='ri-checkbox-circle-fill'></i>";
      sueContactForm.reset();

      setTimeout(() => {
        sueContactFromAlert.innerHTML = "";
      }, 5000);

    }, (error) => {
      // console.log('FAILED...', error);
      sueContactFromAlert.innerHTML = "<span>Message not sent</span> <i class='ri-error-warning-fill'></i>";
      sueContactFromAlert.title = error;
    });
});

/* =====================================================
   Shrink the height of the header on scroll
===================================================== */

/* =====================================================
   Bottom navigation menu
===================================================== */

// Each bottom navigation menu items active on page scroll.

window.addEventListener("scroll", () => {
  const navMenuSections = document.querySelectorAll(".nav-menu-section");
  const scrollY = window.pageYOffset;

  navMenuSections.forEach((navMenuSection) => {
    let sectionHeight = navMenuSection.offsetHeight;
    let sectionTop = navMenuSection.offsetTop - 50;
    let id = navMenuSection.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".bottom-nav li a[href*=" + id + "]").classList.add("current");
    } else {
      document.querySelector(".bottom-nav li a[href*=" + id + "]").classList.remove("current");
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const bottomNav = document.querySelector(".bottom-nav");
  
  bottomNav.classList.toggle("active", window.scrollY < 10);
});

// Javascript to show bottom navigation menu on home(page load).

// Javascript to show/hide bottom navigation menu on home(scroll).

// Hide bottom navigation menu on click menu-hide-btn.

// Show bottom navigation menu on click menu-show-btn.

/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */

/* =====================================================
   Customized cursor on mousemove
===================================================== */

// Cursor effects on hover website elements.

/* =====================================================
   Website dark/light theme
===================================================== */
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  // Change theme icon and theme on click theme button.
  themeBtn.classList.toggle("active-sun-icon");
  document.body.classList.toggle("light-theme");

  // Save theme icon and theme on click theme button.
  const getCurrentIcon = () => themeBtn.classList.contains("active-sun-icon") ? "sun" : "moon";
  const getCurrentTheme = () => document.body.classList.contains("light-theme") ? "light" : "dark";

  localStorage.setItem("sue-saved-icon", getCurrentIcon());
  localStorage.setItem("sue-saved-theme", getCurrentTheme());
});

// Get saved theme icon and theme on document Loaded.
const savedIcon = localStorage.getItem("sue-saved-icon");
const savedTheme = localStorage.getItem("sue-saved-theme");

document.addEventListener("DOMContentLoaded", () => {
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("active-sun-icon");
  document.body.classList[savedTheme === "light" ? "add" : "remove"]("light-theme");
});
// Change theme and save current theme on click the theme button.

// Get saved theme icon and theme on document loaded.

/* =====================================================
   ScrollReveal JS animations
===================================================== */

// Common reveal options to create reveal animations.
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
});

// Target elements and specify options to create reveal animations.
ScrollReveal().reveal('.avatar-img', { delay: 100, origin: 'top' });
ScrollReveal().reveal('.avatar-info, .section-title', { delay: 300, origin: 'top' });
ScrollReveal().reveal('.home-social, .home-scroll-btn', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.about-img', { delay: 700, origin: 'top' });
ScrollReveal().reveal('.about-info', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.pro-card, .about-buttons .sue-main-btn, .resume-tabs .tab-btn,.portfolio-tabs .tab-btn', { delay: 500, origin: 'right', interval: 200 });
ScrollReveal().reveal('#resume .section-content', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal(' .service-card,.portfolio-card,.contact-item,.contact-social-links li', { delay: 300, origin: 'bottom',interval:300 });
ScrollReveal().reveal('.contact-form-container',{delay: 700,origin:'right'})
ScrollReveal().reveal('.contact-info h3',{delay: 100,origin:'bottom',interval:300});
// Common reveal options to create reveal animations.

// Target elements and specify options to create reveal animations.