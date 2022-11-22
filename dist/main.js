/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homepageElements": () => (/* binding */ homepageElements)
/* harmony export */ });
function homepageElements() {
    const content = document.getElementById('content')
    
    //Header creation
    const header = document.createElement('header')
    content.appendChild(header)

    const title = document.createElement('h1')
    title.classList.add('title')
    title.textContent = 'Cafe Roast'
    header.appendChild(title)

    const navBtnMenu = document.createElement('div')
    navBtnMenu.classList.add('navBtnMenu')
    header.appendChild(navBtnMenu)

    const homeBtn = document.createElement('button')
    homeBtn.classList.add('homeBtn')
    homeBtn.textContent = 'Home';
    navBtnMenu.appendChild(homeBtn)

    const menuBtn = document.createElement('button')
    menuBtn.classList.add('menuBtn')
    menuBtn.textContent = 'Menu';
    navBtnMenu.appendChild(menuBtn)

    const contactBtn = document.createElement('button')
    contactBtn.classList.add('contactBtn')
    contactBtn.textContent = 'Contact';
    navBtnMenu.appendChild(contactBtn)

    //Home page content
    const greetingContainer = document.createElement('div')
    greetingContainer.classList.add('greetingContainer')
    content.appendChild(greetingContainer)

    const welcomeText = document.createElement('h1')
    welcomeText.classList.add('welcomeText')
    welcomeText.textContent = 'Welcome!'
    greetingContainer.appendChild(welcomeText)

    const restaurantName = document.createElement('h1')
    restaurantName.classList.add('restaurantName')
    restaurantName.textContent = 'Cafe Roast'
    greetingContainer.appendChild(restaurantName)

    //footer
    const footer = document.createElement('footer')
    footer.textContent = `Designed and coded by Greta Rakauskaite \u00A9 2022`
    content.appendChild(footer)


    console.log('homepageElements imported')
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");

(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.homepageElements)()
console.log('index.js loaded');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7O1VDckRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOK0M7QUFDL0MsNERBQWdCO0FBQ2hCLCtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaG9tZXBhZ2VFbGVtZW50cygpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIFxuICAgIC8vSGVhZGVyIGNyZWF0aW9uXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcilcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdDYWZlIFJvYXN0J1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgIGNvbnN0IG5hdkJ0bk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5hdkJ0bk1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2QnRuTWVudScpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJ0bk1lbnUpXG5cbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ2hvbWVCdG4nKVxuICAgIGhvbWVCdG4udGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgbmF2QnRuTWVudS5hcHBlbmRDaGlsZChob21lQnRuKVxuXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtZW51QnRuJylcbiAgICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIG5hdkJ0bk1lbnUuYXBwZW5kQ2hpbGQobWVudUJ0bilcblxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZCgnY29udGFjdEJ0bicpXG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBuYXZCdG5NZW51LmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pXG5cbiAgICAvL0hvbWUgcGFnZSBjb250ZW50XG4gICAgY29uc3QgZ3JlZXRpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGdyZWV0aW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyZWV0aW5nQ29udGFpbmVyJylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdyZWV0aW5nQ29udGFpbmVyKVxuXG4gICAgY29uc3Qgd2VsY29tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgd2VsY29tZVRleHQuY2xhc3NMaXN0LmFkZCgnd2VsY29tZVRleHQnKVxuICAgIHdlbGNvbWVUZXh0LnRleHRDb250ZW50ID0gJ1dlbGNvbWUhJ1xuICAgIGdyZWV0aW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlbGNvbWVUZXh0KVxuXG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgcmVzdGF1cmFudE5hbWUuY2xhc3NMaXN0LmFkZCgncmVzdGF1cmFudE5hbWUnKVxuICAgIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gJ0NhZmUgUm9hc3QnXG4gICAgZ3JlZXRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpXG5cbiAgICAvL2Zvb3RlclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gYERlc2lnbmVkIGFuZCBjb2RlZCBieSBHcmV0YSBSYWthdXNrYWl0ZSBcXHUwMEE5IDIwMjJgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpXG5cblxuICAgIGNvbnNvbGUubG9nKCdob21lcGFnZUVsZW1lbnRzIGltcG9ydGVkJylcbn1cblxuZXhwb3J0IHtcbiAgICBob21lcGFnZUVsZW1lbnRzXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBob21lcGFnZUVsZW1lbnRzIH0gZnJvbSBcIi4vcGFnZS1sb2FkXCI7XG5ob21lcGFnZUVsZW1lbnRzKClcbmNvbnNvbGUubG9nKCdpbmRleC5qcyBsb2FkZWQnKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=