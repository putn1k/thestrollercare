const sliderConfig = {
  default: {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
  },
  blog: {
    navigation: {
      prevEl: '#blog-slider [data-to-slide="prev"]',
      nextEl: '#blog-slider [data-to-slide="next"]',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  },
  gallery: {
    navigation: {
      prevEl: '#gallery-slider [data-to-slide="prev"]',
      nextEl: '#gallery-slider [data-to-slide="next"]',
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
      },
    },
  },
  stories: {
    slidesPerView: 1.4,
    centeredSlides: true,
    centeredSlidesBounds: true,
    initialSlide: 1,
    navigation: {
      prevEl: '#stories [data-to-slide="prev"]',
      nextEl: '#stories [data-to-slide="next"]',
    },
    pagination: {
      el: '#stories .slider-pagination',
      clickable: false,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
    },
  },
};

const smoothScrollConfig = {
  speed: 900,
  speedAsDuration: true,
  updateURL: false,
};

const requestsConfig = {
  handlerURL: WP.AJAX_URL,
};

const validateConfig = {
  justValidate: {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'form-error-msg',
    errorLabelStyle: {
      marginTop: '6px',
      fontSize: '10px',
      textAlign: 'left',
    },
    errorFormClass: 'shaked',
    focusInvalidField: false,
  },
  sendClassName: 'is-form-sended',
  successClassName: 'is-form-send-success',
  errorTimeout: 1500,
  successTimeout: 3000,
  phoneMask: {
    countryCode: '+971',
    bodyMask: ' __ ___ ____',
  },
};

const observerConfig = {
  header: {
    rootMargin: '0px',
    threshold: 0,
  },
};

export {
  sliderConfig,
  smoothScrollConfig,
  requestsConfig,
  validateConfig,
  observerConfig
};
