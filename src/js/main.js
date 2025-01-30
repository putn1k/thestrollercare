import {
  initSiteSettings
} from './modules/utils.js';
import {
  initSliders
} from './modules/slider.js';
import {
  validateForms
} from './modules/validate.js';

document.addEventListener( 'DOMContentLoaded', () => {
  initSiteSettings();
  window.addEventListener( 'load', () => {
    initSliders();
    validateForms();
  } );
} );