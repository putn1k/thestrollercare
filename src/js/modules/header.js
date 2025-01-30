import {
  isEscKey,
  lockScroll,
  unlockScroll,
} from './utils.js';

const burgerBtnNode = document.querySelector( '.site-header__burger' );
const crossBtnNode = document.querySelector( '.site-header__cross' );
const burgerMenuNode = document.querySelector( '.site-header__menu' );

const onMenuClick = ( evt ) => {
  if ( !evt.target.classList.contains( 'site-header__menu' ) ) return;

  closeModal();
};

const openModal = () => {
  if ( !burgerMenuNode ) return;

  burgerMenuNode.classList.add( 'site-header__menu--open' );
  lockScroll();

  burgerMenuNode.addEventListener( 'click', onMenuClick );
};

const closeModal = () => {
  if ( !burgerMenuNode ) return;

  unlockScroll();
  burgerMenuNode.classList.remove( 'site-header__menu--open' );

  burgerMenuNode.removeEventListener( 'click', onMenuClick );
};

const closeMenuAfterClick = () => {
  document.querySelectorAll( '.site-header__nav ul a' ).forEach( item => {
    item.addEventListener( 'click', () => {
      if ( window.matchMedia( '(max-width: 1200px)' ).matches ) {
        closeModal();
      }
    } );
  } );
};

const onEscKeydown = ( evt ) => {
  if ( !burgerMenuNode ) return;

  if ( isEscKey( evt ) && burgerMenuNode.classList.contains( 'site-header__menu--open' ) ) {
    closeModal();
  }
};

const initMobileMenu = () => {
  if ( !burgerBtnNode || !crossBtnNode ) return;

  closeMenuAfterClick();

  burgerBtnNode.addEventListener( 'click', openModal );
  crossBtnNode.addEventListener( 'click', closeModal );
  document.addEventListener( 'keydown', onEscKeydown );
};

export {
  initMobileMenu
};
