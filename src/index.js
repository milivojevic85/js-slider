import './scss/main.scss';

const sayHi = () => console.log('Hi');

import './scss/main.scss';
import core from './app/core/core';

class Slider {
  constructor(el, data, options) {
    this.el = el;
    this.data = data;
    this.initialize = core;
    this.previewType = 6;
  }
}

window.Slider = Slider;