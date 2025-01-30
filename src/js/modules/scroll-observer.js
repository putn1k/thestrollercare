import {
  observerConfig,
} from './configs.js';

const headerNode = document.querySelector( '.site-header' );
const headerContentNode = document.querySelector( '.site-header__content' );
const bannerNode = document.querySelector( '.site-header__banner' );

const showScrolTop = () => {
  headerContentNode.classList.add( 'is-fixed' );
  headerNode.classList.add( 'is-fixed-within' );

};

const hideScrolTop = () => {
  headerContentNode.classList.remove( 'is-fixed' );
  headerNode.classList.remove( 'is-fixed-within' );
};

const initItemObserver = ( targetNode, observeNode, isTrueFn, isFalseFn, config ) => {
  if ( !targetNode || !observeNode ) return;
  const callback = ( entries ) => {
    entries.forEach( ( entry ) => {
      ( !entry.isIntersecting ) ? isTrueFn(): isFalseFn();
    } );
  };
  new IntersectionObserver( callback, config ).observe( observeNode );
};

export const initScrollObserver = () => {
  initItemObserver( headerContentNode, bannerNode, showScrolTop, hideScrolTop, observerConfig.header );
};
