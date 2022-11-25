/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homepageElements": () => (/* binding */ homepageElements)
/* harmony export */ });
function createHeader(p) {
  const header = document.createElement("header");
  header.classList.add("header");

  const titleBox = document.createElement("div");
  titleBox.classList.add("titleBox");

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Cafe Roast";

  header.appendChild(titleBox);
  titleBox.appendChild(title);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const navBtnMenu = document.createElement("nav");
  navBtnMenu.classList.add("navBtnMenu");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("homeBtn", "tabLinks");
  homeBtn.setAttribute("data-target", "home")
  homeBtn.textContent = "Home";

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("menuBtn", "tabLinks");
  menuBtn.setAttribute("data-target", 'menu')
  menuBtn.textContent = "Menu";

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("contactBtn", "tabLinks");
  contactBtn.setAttribute("data-target", "contact")
  contactBtn.textContent = "Contact";

  navBtnMenu.appendChild(homeBtn);
  navBtnMenu.appendChild(menuBtn);
  navBtnMenu.appendChild(contactBtn);

  return navBtnMenu;
}

function createMain() {
  const main = document.createElement("div");
    main.setAttribute("id", "mainContainer");

  const homePageContent = document.createElement("div");
  homePageContent.classList.add("homePageContent", "tabContent");
  homePageContent.setAttribute("id", "home")

  const welcomeText = document.createElement("h1");
  welcomeText.classList.add("welcomeText");
  welcomeText.textContent = "Welcome!";
  

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurantName");
  restaurantName.textContent = "Cafe Roast";
  

  main.appendChild(homePageContent);
  homePageContent.appendChild(welcomeText);
  homePageContent.appendChild(restaurantName);

  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.textContent = `Designed and coded by Greta Rakauskaite \u00A9 2022`;

  return footer;
}

function homepageElements() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}




/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMenu": () => (/* binding */ renderMenu)
/* harmony export */ });
function populateMenu() {
    const menuPageContent = document.createElement("div");
    menuPageContent.classList.add("menuPageContent", "tabContent");
    menuPageContent.setAttribute("id", "menu")


    menuPageContent.appendChild(
        addMenuItem('Esspresso', 'A concentrated form of coffee served in small, strong shot')
    )
    menuPageContent.appendChild(
        addMenuItem('Latte', "Coffee drink, made with a shot of espresso, steamed milk, and topped with a milk microfoam layer of around 0.2 to 0.4 inches (0.5 to 1 cm)")
    )
    menuPageContent.appendChild(
        addMenuItem('Frappuccino', "A blended iced coffee drink with a choice of caramel or dark chocolate flavours")
    )
    menuPageContent.appendChild(
        addMenuItem('Cappuccino', "An espresso-based hot coffee beverage made of a shot of espresso and steamed and frothed milk")      
    )
    menuPageContent.appendChild(
        addMenuItem('Americano', "Espresso-based coffee drink made of a shot of espresso, diluted with hot water")
    )

    return menuPageContent
}


//Function creates cards given title and description

function addMenuItem (title, description){
    const menuItem = document.createElement('div')
    menuItem.classList.add('menuItem')

    const itemTitle = document.createElement('h2')
    itemTitle.textContent = title

    const itemDesc = document.createElement('p')
    itemDesc.textContent = description

    const itemImg = document.createElement('img')
    itemImg.src = `../img/${title.toLowerCase()}.jpg`;
    itemImg.alt = `A picture of ${title}`

    menuItem.appendChild(itemImg)
    menuItem.appendChild(itemTitle)
    menuItem.appendChild(itemDesc)

    return menuItem
}

function renderMenu(){
    const main = document.getElementById("mainContainer");
    main.appendChild(populateMenu())
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
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ "./src/menuPage.js");


(0,_homePage__WEBPACK_IMPORTED_MODULE_0__.homepageElements)()
;(0,_menuPage__WEBPACK_IMPORTED_MODULE_1__.renderMenu)()

const tabContents = document.querySelectorAll(".tabContent");
const tabLinks = document.querySelectorAll(".tabLinks");

function activateTab (target) {
    const contentId = target.getAttribute('data-target');
    
    // Get all elements with class="tabcontent" and hide them, and show the current tab
    tabContents.forEach(tabContent => {
        tabContent.style.display = tabContent.id === contentId ? 'block' : 'none';
    });
  
    // Get all elements with class="tablinks" and remove the class "active"
    tabLinks.forEach(tablink => {
        tablink.classList.remove('active');
    });

    // Add an "active" class to the button that opened the tab
    target.classList.add('active');
};

function tabbedWindows(evt) {
    const target = evt.currentTarget;

  activateTab(target);
};

    
document.querySelectorAll(".tabLinks").forEach(tab => {
    tab.addEventListener('click', tabbedWindows, false);
});
activateTab(tabLinks[0]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7QUNuRjVCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixvQkFBb0I7QUFDaEQsa0NBQWtDLE1BQU07O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3BEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ042QztBQUNSO0FBQ3JDLDJEQUFnQjtBQUNoQixzREFBVTs7QUFFVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QseUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWVQYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudVBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHApIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgdGl0bGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUJveC5jbGFzc0xpc3QuYWRkKFwidGl0bGVCb3hcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNhZmUgUm9hc3RcIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVCb3gpO1xuICB0aXRsZUJveC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICBjb25zdCBuYXZCdG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2QnRuTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2QnRuTWVudVwiKTtcblxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaG9tZUJ0blwiLCBcInRhYkxpbmtzXCIpO1xuICBob21lQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtdGFyZ2V0XCIsIFwiaG9tZVwiKVxuICBob21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcIm1lbnVCdG5cIiwgXCJ0YWJMaW5rc1wiKTtcbiAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhcmdldFwiLCAnbWVudScpXG4gIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEJ0blwiLCBcInRhYkxpbmtzXCIpO1xuICBjb250YWN0QnRuLnNldEF0dHJpYnV0ZShcImRhdGEtdGFyZ2V0XCIsIFwiY29udGFjdFwiKVxuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgbmF2QnRuTWVudS5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgbmF2QnRuTWVudS5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgbmF2QnRuTWVudS5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuICByZXR1cm4gbmF2QnRuTWVudTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5Db250YWluZXJcIik7XG5cbiAgY29uc3QgaG9tZVBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZVBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lUGFnZUNvbnRlbnRcIiwgXCJ0YWJDb250ZW50XCIpO1xuICBob21lUGFnZUNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpXG5cbiAgY29uc3Qgd2VsY29tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHdlbGNvbWVUZXh0LmNsYXNzTGlzdC5hZGQoXCJ3ZWxjb21lVGV4dFwiKTtcbiAgd2VsY29tZVRleHQudGV4dENvbnRlbnQgPSBcIldlbGNvbWUhXCI7XG4gIFxuXG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudE5hbWVcIik7XG4gIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gXCJDYWZlIFJvYXN0XCI7XG4gIFxuXG4gIG1haW4uYXBwZW5kQ2hpbGQoaG9tZVBhZ2VDb250ZW50KTtcbiAgaG9tZVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHdlbGNvbWVUZXh0KTtcbiAgaG9tZVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcblxuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBmb290ZXIudGV4dENvbnRlbnQgPSBgRGVzaWduZWQgYW5kIGNvZGVkIGJ5IEdyZXRhIFJha2F1c2thaXRlIFxcdTAwQTkgMjAyMmA7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gaG9tZXBhZ2VFbGVtZW50cygpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG59XG5cbmV4cG9ydCB7IGhvbWVwYWdlRWxlbWVudHMgfTtcbiIsImZ1bmN0aW9uIHBvcHVsYXRlTWVudSgpIHtcbiAgICBjb25zdCBtZW51UGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVQYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudVBhZ2VDb250ZW50XCIsIFwidGFiQ29udGVudFwiKTtcbiAgICBtZW51UGFnZUNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpXG5cblxuICAgIG1lbnVQYWdlQ29udGVudC5hcHBlbmRDaGlsZChcbiAgICAgICAgYWRkTWVudUl0ZW0oJ0Vzc3ByZXNzbycsICdBIGNvbmNlbnRyYXRlZCBmb3JtIG9mIGNvZmZlZSBzZXJ2ZWQgaW4gc21hbGwsIHN0cm9uZyBzaG90JylcbiAgICApXG4gICAgbWVudVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKFxuICAgICAgICBhZGRNZW51SXRlbSgnTGF0dGUnLCBcIkNvZmZlZSBkcmluaywgbWFkZSB3aXRoIGEgc2hvdCBvZiBlc3ByZXNzbywgc3RlYW1lZCBtaWxrLCBhbmQgdG9wcGVkIHdpdGggYSBtaWxrIG1pY3JvZm9hbSBsYXllciBvZiBhcm91bmQgMC4yIHRvIDAuNCBpbmNoZXMgKDAuNSB0byAxIGNtKVwiKVxuICAgIClcbiAgICBtZW51UGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGFkZE1lbnVJdGVtKCdGcmFwcHVjY2lubycsIFwiQSBibGVuZGVkIGljZWQgY29mZmVlIGRyaW5rIHdpdGggYSBjaG9pY2Ugb2YgY2FyYW1lbCBvciBkYXJrIGNob2NvbGF0ZSBmbGF2b3Vyc1wiKVxuICAgIClcbiAgICBtZW51UGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGFkZE1lbnVJdGVtKCdDYXBwdWNjaW5vJywgXCJBbiBlc3ByZXNzby1iYXNlZCBob3QgY29mZmVlIGJldmVyYWdlIG1hZGUgb2YgYSBzaG90IG9mIGVzcHJlc3NvIGFuZCBzdGVhbWVkIGFuZCBmcm90aGVkIG1pbGtcIikgICAgICBcbiAgICApXG4gICAgbWVudVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKFxuICAgICAgICBhZGRNZW51SXRlbSgnQW1lcmljYW5vJywgXCJFc3ByZXNzby1iYXNlZCBjb2ZmZWUgZHJpbmsgbWFkZSBvZiBhIHNob3Qgb2YgZXNwcmVzc28sIGRpbHV0ZWQgd2l0aCBob3Qgd2F0ZXJcIilcbiAgICApXG5cbiAgICByZXR1cm4gbWVudVBhZ2VDb250ZW50XG59XG5cblxuLy9GdW5jdGlvbiBjcmVhdGVzIGNhcmRzIGdpdmVuIHRpdGxlIGFuZCBkZXNjcmlwdGlvblxuXG5mdW5jdGlvbiBhZGRNZW51SXRlbSAodGl0bGUsIGRlc2NyaXB0aW9uKXtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0nKVxuXG4gICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgICBjb25zdCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGl0ZW1EZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25cblxuICAgIGNvbnN0IGl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGl0ZW1JbWcuc3JjID0gYC4uL2ltZy8ke3RpdGxlLnRvTG93ZXJDYXNlKCl9LmpwZ2A7XG4gICAgaXRlbUltZy5hbHQgPSBgQSBwaWN0dXJlIG9mICR7dGl0bGV9YFxuXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUltZylcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtVGl0bGUpXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbURlc2MpXG5cbiAgICByZXR1cm4gbWVudUl0ZW1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTWVudSgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250YWluZXJcIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwb3B1bGF0ZU1lbnUoKSlcbn1cblxuZXhwb3J0IHtyZW5kZXJNZW51fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaG9tZXBhZ2VFbGVtZW50c30gZnJvbSBcIi4vaG9tZVBhZ2VcIjtcbmltcG9ydCB7cmVuZGVyTWVudX0gZnJvbSBcIi4vbWVudVBhZ2VcIlxuaG9tZXBhZ2VFbGVtZW50cygpXG5yZW5kZXJNZW51KClcblxuY29uc3QgdGFiQ29udGVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYkNvbnRlbnRcIik7XG5jb25zdCB0YWJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiTGlua3NcIik7XG5cbmZ1bmN0aW9uIGFjdGl2YXRlVGFiICh0YXJnZXQpIHtcbiAgICBjb25zdCBjb250ZW50SWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xuICAgIFxuICAgIC8vIEdldCBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcz1cInRhYmNvbnRlbnRcIiBhbmQgaGlkZSB0aGVtLCBhbmQgc2hvdyB0aGUgY3VycmVudCB0YWJcbiAgICB0YWJDb250ZW50cy5mb3JFYWNoKHRhYkNvbnRlbnQgPT4ge1xuICAgICAgICB0YWJDb250ZW50LnN0eWxlLmRpc3BsYXkgPSB0YWJDb250ZW50LmlkID09PSBjb250ZW50SWQgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgIH0pO1xuICBcbiAgICAvLyBHZXQgYWxsIGVsZW1lbnRzIHdpdGggY2xhc3M9XCJ0YWJsaW5rc1wiIGFuZCByZW1vdmUgdGhlIGNsYXNzIFwiYWN0aXZlXCJcbiAgICB0YWJMaW5rcy5mb3JFYWNoKHRhYmxpbmsgPT4ge1xuICAgICAgICB0YWJsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIGFuIFwiYWN0aXZlXCIgY2xhc3MgdG8gdGhlIGJ1dHRvbiB0aGF0IG9wZW5lZCB0aGUgdGFiXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufTtcblxuZnVuY3Rpb24gdGFiYmVkV2luZG93cyhldnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldnQuY3VycmVudFRhcmdldDtcblxuICBhY3RpdmF0ZVRhYih0YXJnZXQpO1xufTtcblxuICAgIFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJMaW5rc1wiKS5mb3JFYWNoKHRhYiA9PiB7XG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFiYmVkV2luZG93cywgZmFsc2UpO1xufSk7XG5hY3RpdmF0ZVRhYih0YWJMaW5rc1swXSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9