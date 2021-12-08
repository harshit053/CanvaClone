import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// Scroll Buttons : Not Working!!
let currentScrollPosition = 0;
let scrollAmount = 320;

const designsTypeContainer = document.querySelector(".designs-type-container");
const hScroll = document.querySelector(".scroll-menu");
const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-left");

btnScrollLeft.style.opacity = 0;

let maxScroll = -designsTypeContainer.offsetWidth + hScroll.offsetWidth;

// eslint-disable-next-line
function scrollHorizontally(val) {
  currentScrollPosition += (val * scrollAmount);

  if(currentScrollPosition >= 0) {
    currentScrollPosition = 0;
    btnScrollLeft.style.opacity = 0;
  } else {
    btnScrollLeft.style.opacity = 1;
  }

  if(currentScrollPosition <= maxScroll) {
    currentScrollPosition = maxScroll;
    btnScrollRight.style.opacity = 0;
  } else {
    btnScrollRight.style.opacity = 1;
  }

  designsTypeContainer.style.left = currentScrollPosition + "px";
}