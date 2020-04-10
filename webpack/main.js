// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "./css/main.scss"

import { tns } from "./../node_modules/tiny-slider/src/tiny-slider"

tns({
  autoplay: true,
  autoplayButtonOutput: false,
  container: '.carousel',
  controls: false,
  items: 1,
  nav: false,
  slideBy: 'page',
  speed: 400
});
