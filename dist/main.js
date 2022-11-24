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
        addMenuItem('Esspresso', 'A single shot of espresso')
    )
    menuPageContent.appendChild(
        addMenuItem('Latte', "Coffee with milk foam")
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
    itemImg.src = '/img/${title.toLowerCase()}.png'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7QUNuRjVCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG9CQUFvQjtBQUM5QyxrQ0FBa0MsTUFBTTs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDMUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQ1I7QUFDckMsMkRBQWdCO0FBQ2hCLHNEQUFVOztBQUVWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCx5QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVIZWFkZXIocCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCB0aXRsZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlQm94LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZUJveFwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ2FmZSBSb2FzdFwiO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZUJveCk7XG4gIHRpdGxlQm94LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gIGNvbnN0IG5hdkJ0bk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBuYXZCdG5NZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZCdG5NZW51XCIpO1xuXG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJob21lQnRuXCIsIFwidGFiTGlua3NcIik7XG4gIGhvbWVCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS10YXJnZXRcIiwgXCJob21lXCIpXG4gIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwibWVudUJ0blwiLCBcInRhYkxpbmtzXCIpO1xuICBtZW51QnRuLnNldEF0dHJpYnV0ZShcImRhdGEtdGFyZ2V0XCIsICdtZW51JylcbiAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0QnRuXCIsIFwidGFiTGlua3NcIik7XG4gIGNvbnRhY3RCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS10YXJnZXRcIiwgXCJjb250YWN0XCIpXG4gIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICBuYXZCdG5NZW51LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICBuYXZCdG5NZW51LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICBuYXZCdG5NZW51LmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG4gIHJldHVybiBuYXZCdG5NZW51O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbkNvbnRhaW5lclwiKTtcblxuICBjb25zdCBob21lUGFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lUGFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhvbWVQYWdlQ29udGVudFwiLCBcInRhYkNvbnRlbnRcIik7XG4gIGhvbWVQYWdlQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIilcblxuICBjb25zdCB3ZWxjb21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgd2VsY29tZVRleHQuY2xhc3NMaXN0LmFkZChcIndlbGNvbWVUZXh0XCIpO1xuICB3ZWxjb21lVGV4dC50ZXh0Q29udGVudCA9IFwiV2VsY29tZSFcIjtcbiAgXG5cbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50TmFtZVwiKTtcbiAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIkNhZmUgUm9hc3RcIjtcbiAgXG5cbiAgbWFpbi5hcHBlbmRDaGlsZChob21lUGFnZUNvbnRlbnQpO1xuICBob21lUGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQod2VsY29tZVRleHQpO1xuICBob21lUGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci50ZXh0Q29udGVudCA9IGBEZXNpZ25lZCBhbmQgY29kZWQgYnkgR3JldGEgUmFrYXVza2FpdGUgXFx1MDBBOSAyMDIyYDtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBob21lcGFnZUVsZW1lbnRzKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbn1cblxuZXhwb3J0IHsgaG9tZXBhZ2VFbGVtZW50cyB9O1xuIiwiZnVuY3Rpb24gcG9wdWxhdGVNZW51KCkge1xuICAgIGNvbnN0IG1lbnVQYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudVBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51UGFnZUNvbnRlbnRcIiwgXCJ0YWJDb250ZW50XCIpO1xuICAgIG1lbnVQYWdlQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIilcblxuXG4gICAgbWVudVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKFxuICAgICAgICBhZGRNZW51SXRlbSgnRXNzcHJlc3NvJywgJ0Egc2luZ2xlIHNob3Qgb2YgZXNwcmVzc28nKVxuICAgIClcbiAgICBtZW51UGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGFkZE1lbnVJdGVtKCdMYXR0ZScsIFwiQ29mZmVlIHdpdGggbWlsayBmb2FtXCIpXG4gICAgKVxuICAgIHJldHVybiBtZW51UGFnZUNvbnRlbnRcbn1cblxuXG4vL0Z1bmN0aW9uIGNyZWF0ZXMgY2FyZHMgZ2l2ZW4gdGl0bGUgYW5kIGRlc2NyaXB0aW9uXG5cbmZ1bmN0aW9uIGFkZE1lbnVJdGVtICh0aXRsZSwgZGVzY3JpcHRpb24pe1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbScpXG5cbiAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVcblxuICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaXRlbURlc2MudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvblxuXG4gICAgY29uc3QgaXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaXRlbUltZy5zcmMgPSAnL2ltZy8ke3RpdGxlLnRvTG93ZXJDYXNlKCl9LnBuZydcbiAgICBpdGVtSW1nLmFsdCA9IGBBIHBpY3R1cmUgb2YgJHt0aXRsZX1gXG5cbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtSW1nKVxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSlcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtRGVzYylcblxuICAgIHJldHVybiBtZW51SXRlbVxufVxuXG5mdW5jdGlvbiByZW5kZXJNZW51KCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRhaW5lclwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHBvcHVsYXRlTWVudSgpKVxufVxuXG5leHBvcnQge3JlbmRlck1lbnV9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBob21lcGFnZUVsZW1lbnRzfSBmcm9tIFwiLi9ob21lUGFnZVwiO1xuaW1wb3J0IHtyZW5kZXJNZW51fSBmcm9tIFwiLi9tZW51UGFnZVwiXG5ob21lcGFnZUVsZW1lbnRzKClcbnJlbmRlck1lbnUoKVxuXG5jb25zdCB0YWJDb250ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiQ29udGVudFwiKTtcbmNvbnN0IHRhYkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJMaW5rc1wiKTtcblxuZnVuY3Rpb24gYWN0aXZhdGVUYWIgKHRhcmdldCkge1xuICAgIGNvbnN0IGNvbnRlbnRJZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgXG4gICAgLy8gR2V0IGFsbCBlbGVtZW50cyB3aXRoIGNsYXNzPVwidGFiY29udGVudFwiIGFuZCBoaWRlIHRoZW0sIGFuZCBzaG93IHRoZSBjdXJyZW50IHRhYlxuICAgIHRhYkNvbnRlbnRzLmZvckVhY2godGFiQ29udGVudCA9PiB7XG4gICAgICAgIHRhYkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IHRhYkNvbnRlbnQuaWQgPT09IGNvbnRlbnRJZCA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgfSk7XG4gIFxuICAgIC8vIEdldCBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcz1cInRhYmxpbmtzXCIgYW5kIHJlbW92ZSB0aGUgY2xhc3MgXCJhY3RpdmVcIlxuICAgIHRhYkxpbmtzLmZvckVhY2godGFibGluayA9PiB7XG4gICAgICAgIHRhYmxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgYW4gXCJhY3RpdmVcIiBjbGFzcyB0byB0aGUgYnV0dG9uIHRoYXQgb3BlbmVkIHRoZSB0YWJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59O1xuXG5mdW5jdGlvbiB0YWJiZWRXaW5kb3dzKGV2dCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2dC5jdXJyZW50VGFyZ2V0O1xuXG4gIGFjdGl2YXRlVGFiKHRhcmdldCk7XG59O1xuXG4gICAgXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYkxpbmtzXCIpLmZvckVhY2godGFiID0+IHtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWJiZWRXaW5kb3dzLCBmYWxzZSk7XG59KTtcbmFjdGl2YXRlVGFiKHRhYkxpbmtzWzBdKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=