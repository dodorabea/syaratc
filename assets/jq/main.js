(function ($) {
  "use strict";
  /*====Dom is loaded==== */
  var $loader = document.querySelector("#preloader-background");

  window.onload = function () {
    setTimeout(function () {
      $loader.remove();
    });
  };
  /*====AOS==== */
  AOS.init({
    duration: 900,
    easing: "ease-in-cubic",
    disable: "mobile",
  });
  /*====Back to top==== */
  var amountScrolled = 200;
  var amountScrolledNav = 25;

  $(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
      $("button.back-to-top").addClass("show");
    } else {
      $("button.back-to-top").removeClass("show");
    }
  });

  $("button.back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
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
    autoplay: true,
    loop: true,
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
    speed: 18000,
    direction: "horizontal",
    loop: true,
    autoplay: {
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
    autoplay: true,
    loop: true,
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
    autoplay: true,
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
    speed: 18000,
    direction: "horizontal",
    loop: true,
    autoplay: {
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
  //////
  var swiper6 = new Swiper(".mySwiper.sub-slider", {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 2.5,
      },
      880: {
        slidesPerView: 3,
      },
      1025: {
        slidesPerView: 4,
      },
      1366: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next.sub",
      prevEl: ".swiper-button-prev.sub",
    },
  });
  var swiper7 = new Swiper(".mySwiper2.cars-main-slider", {
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next.cars-main",
      prevEl: ".swiper-button-prev.cars-main",
    },
    thumbs: {
      swiper: swiper6,
    },
  });
  //////
  var swiper8 = new Swiper(".mySwiper.swiperOffers", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //////////////
  $(document).ready(function () {
    // Check if select2 is defined and if the element exists
    if ($.fn.select2 && $(".single-select").length) {
      $(".single-select").select2({
        allowClear: true,
      });
    } 
  });

  ///////////
 // Attach event listeners to all file input elements
 document.querySelectorAll(".uploadBtn").forEach((uploadBtn) => {
  uploadBtn.addEventListener("change", function () {
    const fileName = this.value.replace("C:\\fakepath\\", ""); // Get the file name
    const uploadFileInput = this.closest(".input-group").querySelector(".uploadFile"); // Find the corresponding text input
    uploadFileInput.value = fileName; // Set the file name in the text input
  });
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
  const menuTitle =
    children.querySelector("i").parentNode.childNodes[0].textContent;
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
