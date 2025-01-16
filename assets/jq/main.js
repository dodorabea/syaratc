(function ($) {
  "use strict";
   /*====Dom is loaded==== */
   var $loader = document.querySelector('#preloader-background');
  
   window.onload = function() {
     setTimeout(function() {
       $loader.remove(); 
     }); 
   };
  //Hero section
  var heroSection = new Swiper(".mySwiper.hero-section-slider", {
    slidesPerView: 1,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 2000,
    },
    speed: 2000,
  });
  //special-car
  var swiper = new Swiper(".mySwiper.special-car-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    // autoplay: true,
    // loop: true,
    navigation: {
      nextEl: ".swiper-button-next.special-car-slider",
      prevEl: ".swiper-button-prev.special-car-slider",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
      },
    },
  });
  /////
  var swiper2 = new Swiper(".mySwiper.four-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed:18000,
		direction: 'horizontal',
    loop: true,
    autoplay: 
    {
      delay: 0,
    },
    freeMode: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2.25,
      },
    },
  });
  //////
  var swiper3 = new Swiper(".mySwiper.why-online", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });
  //////
  var swiper4 = new Swiper(".mySwiper.brand-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2.25,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
   //////
   var swiper5 = new Swiper(".mySwiper.financing", {
    slidesPerView: 1.75,
    spaceBetween: 10,
    speed:18000,
		direction: 'horizontal',
    loop: true,
    autoplay: 
    {
      delay: 0,
    },
    freeMode: true,
    breakpoints: {
      1024: {
        slidesPerView: 4.5,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2.25,
      },
    },
    
  });
})(jQuery);
/*=====Header=====*/
const menu = document.querySelector(".menu");
const menuInner = menu.querySelector(".menu__inner");
const menuArrow = menu.querySelector(".menu__arrow");
const menuTitle = menu.querySelector(".menu__title");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");

// Navbar Menu Toggle Function
function toggleMenu() {
  menu.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
}

// Show Mobile Submenu Function
function showSubMenu(children) {
  subMenu = children.querySelector(".submenu");
  subMenu.classList.add("is-active");
  subMenu.style.animation = "slideLeft 0.35s ease forwards";
  const menuTitle = children.querySelector("i").parentNode.childNodes[0]
    .textContent;
  menu.querySelector(".menu__title").textContent = menuTitle;
  menu.querySelector(".menu__header").classList.add("is-active");
}

// Hide Mobile Submenu Function
function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.35s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("is-active");
  }, 300);

  menu.querySelector(".menu__title").textContent = "";
  menu.querySelector(".menu__header").classList.remove("is-active");
}

// Toggle Mobile Submenu Function
function toggleSubMenu(e) {
  if (!menu.classList.contains("is-active")) {
    return;
  }
  if (e.target.closest(".menu__dropdown")) {
    const children = e.target.closest(".menu__dropdown");
    showSubMenu(children);
  }
}

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    if (menu.classList.contains("is-active")) {
      toggleMenu();
    }
  }
});

// Initialize All Event Listeners
burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
menuArrow.addEventListener("click", hideSubMenu);
menuTitle.addEventListener("click", hideSubMenu);
menuInner.addEventListener("click", toggleSubMenu);



