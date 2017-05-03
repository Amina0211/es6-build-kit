'use strict';

// IMPORT YOUR MODULES HERE.
// Examples:
// import MyClassModule from './classes/MyClassModule';
// const MyClassModule = require( './classes/MyClassModule' );
// const myUtilModule = require( './my-util-module' );

function pageReady() {
  // START YOUR PAGE INITIALIZATION CODE HERE.


  // END YOUR PAGE INITIALIZATION CODE HERE.
}

let checkPage = setInterval( () => {
  if ( document.readyState === 'complete' ) {
    clearInterval( checkPage );
    pageReady();
  }
}, 100);
