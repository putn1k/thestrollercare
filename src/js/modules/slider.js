import {
  initSlider
} from './utils.js';
import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '#gallery-slider .slider', sliderConfig.gallery );
  initSlider( '#blog-slider .slider', sliderConfig.blog );
};

export {
  initSliders
};
