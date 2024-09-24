// Initialize Swiper for Portfolio Carousel
const portfolioSwiper = new Swiper(".portfolio-carousel", {
  loop: true,
  spaceBetween: 200,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  breakpoints: {
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    // when window width is <= 768px
    768: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  },

  pagination: {
    el: ".portfolio-carousel .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".portfolio-carousel .swiper-button-next",
    prevEl: ".portfolio-carousel .swiper-button-prev",
  },
  lazy: true, // Lazy load images for better performance
});

// Initialize Swiper for Branding Carousel
const brandingSwiper = new Swiper(".branding-carousel", {
  loop: true,
  spaceBetween: 200,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  breakpoints: {
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    // when window width is <= 768px
    768: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  },
  pagination: {
    el: ".branding-carousel .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".branding-carousel .swiper-button-next",
    prevEl: ".branding-carousel .swiper-button-prev",
  },
  lazy: true,
});

// Initialize Swiper for Testimonials Carousel
const testimonialsSwiper = new Swiper(".testimonials-carousel", {
  loop: true,
  spaceBetween: 200,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  breakpoints: {
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    // when window width is <= 768px
    768: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  },
  pagination: {
    el: ".testimonials-carousel .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
