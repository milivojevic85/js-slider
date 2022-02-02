import { render } from '../render/render';
import { renderSlides } from '../render/render';
import { moveLeft, moveRight } from '../events/events';

export default function initialize() {
  this.render = render;
  this.renderSlides = renderSlides;
  this.render();
  this.renderSlides(this.data);
  this.moveLeft = moveLeft;
  this.moveRight = moveRight;
  this.rightArrow.addEventListener('click', this.moveRight.bind(this));
  this.leftArrow.addEventListener('click', this.moveLeft.bind(this));
}

