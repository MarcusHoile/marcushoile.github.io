// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "./css/main.scss"

import { tns } from "./../node_modules/tiny-slider/src/tiny-slider"

tns({
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 5000,
  container: '.carousel',
  controls: false,
  items: 1,
  loop: true,
  nav: false,
  preventScrollOnTouch: true,
  slideBy: 'page',
  speed: 500,
  touch: false
});
