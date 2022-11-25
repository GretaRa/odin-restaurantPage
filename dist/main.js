/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderContact": () => (/* binding */ renderContact)
/* harmony export */ });
function populateContact() {
  const contentContractPage = document.createElement("div");
  contentContractPage.classList.add("contentContractPage", "tabContent");
  contentContractPage.setAttribute("id", "contact");

  const addressTitle = document.createElement("h2");
  addressTitle.textContent = "Address";

  const address = document.createElement("p");
  address.textContent = "boulevard avenue 73";

  const contactNumberTitle = document.createElement("h2");
  contactNumberTitle.textContent = "Phone number";

  const contactNumber = document.createElement("p");
  contactNumber.textContent = "+3158958486";

  contentContractPage.appendChild(addressTitle);
  contentContractPage.appendChild(address);
  contentContractPage.appendChild(contactNumberTitle);
  contentContractPage.appendChild(contactNumber);

  return contentContractPage;
}

function renderContact() {
  const main = document.getElementById("mainContainer");
  main.appendChild(populateContact());
}




/***/ }),

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
  menuPageContent.setAttribute("id", "menu");

  menuPageContent.appendChild(
    addMenuItem(
      "Esspresso",
      "A concentrated form of coffee served in small, strong shot"
    )
  );
  menuPageContent.appendChild(
    addMenuItem(
      "Latte",
      "Coffee drink, made with a shot of espresso, steamed milk, and topped with a milk microfoam layer of around 0.2 to 0.4 inches (0.5 to 1 cm)"
    )
  );
  menuPageContent.appendChild(
    addMenuItem(
      "Frappuccino",
      "A blended iced coffee drink with a choice of caramel or dark chocolate flavours"
    )
  );
  menuPageContent.appendChild(
    addMenuItem(
      "Cappuccino",
      "An espresso-based hot coffee beverage made of a shot of espresso and steamed and frothed milk"
    )
  );
  menuPageContent.appendChild(
    addMenuItem(
      "Americano",
      "Espresso-based coffee drink made of a shot of espresso, diluted with hot water"
    )
  );

  return menuPageContent;
}

//Function creates cards given title and description

function addMenuItem(title, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menuItem");

  const itemTitle = document.createElement("h2");
  itemTitle.textContent = title;

  const itemDesc = document.createElement("p");
  itemDesc.textContent = description;

  const itemImg = document.createElement("img");
  itemImg.src = `../img/${title.toLowerCase()}.jpg`;
  itemImg.alt = `A picture of ${title}`;

  menuItem.appendChild(itemImg);
  menuItem.appendChild(itemTitle);
  menuItem.appendChild(itemDesc);

  return menuItem;
}

function renderMenu() {
  const main = document.getElementById("mainContainer");
  main.appendChild(populateMenu());
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
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ "./src/contactPage.js");



(0,_homePage__WEBPACK_IMPORTED_MODULE_0__.homepageElements)()
;(0,_menuPage__WEBPACK_IMPORTED_MODULE_1__.renderMenu)()
;(0,_contactPage__WEBPACK_IMPORTED_MODULE_2__.renderContact)()

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7OztBQzlCekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEI7Ozs7Ozs7Ozs7Ozs7OztBQ25GNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixvQkFBb0I7QUFDOUMsZ0NBQWdDLE1BQU07O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQjs7Ozs7OztVQ25FdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQ1I7QUFDUztBQUM5QywyREFBZ0I7QUFDaEIsc0RBQVU7QUFDViw0REFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QseUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbnRhY3RQYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBwb3B1bGF0ZUNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250cmFjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50Q29udHJhY3RQYWdlLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29udHJhY3RQYWdlXCIsIFwidGFiQ29udGVudFwiKTtcbiAgY29udGVudENvbnRyYWN0UGFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RcIik7XG5cbiAgY29uc3QgYWRkcmVzc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBhZGRyZXNzVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZHJlc3NcIjtcblxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcImJvdWxldmFyZCBhdmVudWUgNzNcIjtcblxuICBjb25zdCBjb250YWN0TnVtYmVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnRhY3ROdW1iZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiUGhvbmUgbnVtYmVyXCI7XG5cbiAgY29uc3QgY29udGFjdE51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb250YWN0TnVtYmVyLnRleHRDb250ZW50ID0gXCIrMzE1ODk1ODQ4NlwiO1xuXG4gIGNvbnRlbnRDb250cmFjdFBhZ2UuYXBwZW5kQ2hpbGQoYWRkcmVzc1RpdGxlKTtcbiAgY29udGVudENvbnRyYWN0UGFnZS5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgY29udGVudENvbnRyYWN0UGFnZS5hcHBlbmRDaGlsZChjb250YWN0TnVtYmVyVGl0bGUpO1xuICBjb250ZW50Q29udHJhY3RQYWdlLmFwcGVuZENoaWxkKGNvbnRhY3ROdW1iZXIpO1xuXG4gIHJldHVybiBjb250ZW50Q29udHJhY3RQYWdlO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDb250YWN0KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGFpbmVyXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKHBvcHVsYXRlQ29udGFjdCgpKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyQ29udGFjdCB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHApIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgdGl0bGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUJveC5jbGFzc0xpc3QuYWRkKFwidGl0bGVCb3hcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNhZmUgUm9hc3RcIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVCb3gpO1xuICB0aXRsZUJveC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICBjb25zdCBuYXZCdG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2QnRuTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2QnRuTWVudVwiKTtcblxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaG9tZUJ0blwiLCBcInRhYkxpbmtzXCIpO1xuICBob21lQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtdGFyZ2V0XCIsIFwiaG9tZVwiKVxuICBob21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcIm1lbnVCdG5cIiwgXCJ0YWJMaW5rc1wiKTtcbiAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhcmdldFwiLCAnbWVudScpXG4gIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEJ0blwiLCBcInRhYkxpbmtzXCIpO1xuICBjb250YWN0QnRuLnNldEF0dHJpYnV0ZShcImRhdGEtdGFyZ2V0XCIsIFwiY29udGFjdFwiKVxuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgbmF2QnRuTWVudS5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgbmF2QnRuTWVudS5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgbmF2QnRuTWVudS5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuICByZXR1cm4gbmF2QnRuTWVudTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5Db250YWluZXJcIik7XG5cbiAgY29uc3QgaG9tZVBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZVBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lUGFnZUNvbnRlbnRcIiwgXCJ0YWJDb250ZW50XCIpO1xuICBob21lUGFnZUNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpXG5cbiAgY29uc3Qgd2VsY29tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHdlbGNvbWVUZXh0LmNsYXNzTGlzdC5hZGQoXCJ3ZWxjb21lVGV4dFwiKTtcbiAgd2VsY29tZVRleHQudGV4dENvbnRlbnQgPSBcIldlbGNvbWUhXCI7XG4gIFxuXG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudE5hbWVcIik7XG4gIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gXCJDYWZlIFJvYXN0XCI7XG4gIFxuXG4gIG1haW4uYXBwZW5kQ2hpbGQoaG9tZVBhZ2VDb250ZW50KTtcbiAgaG9tZVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHdlbGNvbWVUZXh0KTtcbiAgaG9tZVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcblxuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBmb290ZXIudGV4dENvbnRlbnQgPSBgRGVzaWduZWQgYW5kIGNvZGVkIGJ5IEdyZXRhIFJha2F1c2thaXRlIFxcdTAwQTkgMjAyMmA7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gaG9tZXBhZ2VFbGVtZW50cygpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG59XG5cbmV4cG9ydCB7IGhvbWVwYWdlRWxlbWVudHMgfTtcbiIsImZ1bmN0aW9uIHBvcHVsYXRlTWVudSgpIHtcbiAgY29uc3QgbWVudVBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudVBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51UGFnZUNvbnRlbnRcIiwgXCJ0YWJDb250ZW50XCIpO1xuICBtZW51UGFnZUNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51XCIpO1xuXG4gIG1lbnVQYWdlQ29udGVudC5hcHBlbmRDaGlsZChcbiAgICBhZGRNZW51SXRlbShcbiAgICAgIFwiRXNzcHJlc3NvXCIsXG4gICAgICBcIkEgY29uY2VudHJhdGVkIGZvcm0gb2YgY29mZmVlIHNlcnZlZCBpbiBzbWFsbCwgc3Ryb25nIHNob3RcIlxuICAgIClcbiAgKTtcbiAgbWVudVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKFxuICAgIGFkZE1lbnVJdGVtKFxuICAgICAgXCJMYXR0ZVwiLFxuICAgICAgXCJDb2ZmZWUgZHJpbmssIG1hZGUgd2l0aCBhIHNob3Qgb2YgZXNwcmVzc28sIHN0ZWFtZWQgbWlsaywgYW5kIHRvcHBlZCB3aXRoIGEgbWlsayBtaWNyb2ZvYW0gbGF5ZXIgb2YgYXJvdW5kIDAuMiB0byAwLjQgaW5jaGVzICgwLjUgdG8gMSBjbSlcIlxuICAgIClcbiAgKTtcbiAgbWVudVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKFxuICAgIGFkZE1lbnVJdGVtKFxuICAgICAgXCJGcmFwcHVjY2lub1wiLFxuICAgICAgXCJBIGJsZW5kZWQgaWNlZCBjb2ZmZWUgZHJpbmsgd2l0aCBhIGNob2ljZSBvZiBjYXJhbWVsIG9yIGRhcmsgY2hvY29sYXRlIGZsYXZvdXJzXCJcbiAgICApXG4gICk7XG4gIG1lbnVQYWdlQ29udGVudC5hcHBlbmRDaGlsZChcbiAgICBhZGRNZW51SXRlbShcbiAgICAgIFwiQ2FwcHVjY2lub1wiLFxuICAgICAgXCJBbiBlc3ByZXNzby1iYXNlZCBob3QgY29mZmVlIGJldmVyYWdlIG1hZGUgb2YgYSBzaG90IG9mIGVzcHJlc3NvIGFuZCBzdGVhbWVkIGFuZCBmcm90aGVkIG1pbGtcIlxuICAgIClcbiAgKTtcbiAgbWVudVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKFxuICAgIGFkZE1lbnVJdGVtKFxuICAgICAgXCJBbWVyaWNhbm9cIixcbiAgICAgIFwiRXNwcmVzc28tYmFzZWQgY29mZmVlIGRyaW5rIG1hZGUgb2YgYSBzaG90IG9mIGVzcHJlc3NvLCBkaWx1dGVkIHdpdGggaG90IHdhdGVyXCJcbiAgICApXG4gICk7XG5cbiAgcmV0dXJuIG1lbnVQYWdlQ29udGVudDtcbn1cblxuLy9GdW5jdGlvbiBjcmVhdGVzIGNhcmRzIGdpdmVuIHRpdGxlIGFuZCBkZXNjcmlwdGlvblxuXG5mdW5jdGlvbiBhZGRNZW51SXRlbSh0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XG5cbiAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICBjb25zdCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpdGVtRGVzYy50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpdGVtSW1nLnNyYyA9IGAuLi9pbWcvJHt0aXRsZS50b0xvd2VyQ2FzZSgpfS5qcGdgO1xuICBpdGVtSW1nLmFsdCA9IGBBIHBpY3R1cmUgb2YgJHt0aXRsZX1gO1xuXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1JbWcpO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtRGVzYyk7XG5cbiAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5mdW5jdGlvbiByZW5kZXJNZW51KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGFpbmVyXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKHBvcHVsYXRlTWVudSgpKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyTWVudSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBob21lcGFnZUVsZW1lbnRzfSBmcm9tIFwiLi9ob21lUGFnZVwiO1xuaW1wb3J0IHtyZW5kZXJNZW51fSBmcm9tIFwiLi9tZW51UGFnZVwiXG5pbXBvcnQgeyByZW5kZXJDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFBhZ2VcIjtcbmhvbWVwYWdlRWxlbWVudHMoKVxucmVuZGVyTWVudSgpXG5yZW5kZXJDb250YWN0KClcblxuY29uc3QgdGFiQ29udGVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYkNvbnRlbnRcIik7XG5jb25zdCB0YWJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiTGlua3NcIik7XG5cbmZ1bmN0aW9uIGFjdGl2YXRlVGFiICh0YXJnZXQpIHtcbiAgICBjb25zdCBjb250ZW50SWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xuICAgIFxuICAgIC8vIEdldCBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcz1cInRhYmNvbnRlbnRcIiBhbmQgaGlkZSB0aGVtLCBhbmQgc2hvdyB0aGUgY3VycmVudCB0YWJcbiAgICB0YWJDb250ZW50cy5mb3JFYWNoKHRhYkNvbnRlbnQgPT4ge1xuICAgICAgICB0YWJDb250ZW50LnN0eWxlLmRpc3BsYXkgPSB0YWJDb250ZW50LmlkID09PSBjb250ZW50SWQgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgIH0pO1xuICBcbiAgICAvLyBHZXQgYWxsIGVsZW1lbnRzIHdpdGggY2xhc3M9XCJ0YWJsaW5rc1wiIGFuZCByZW1vdmUgdGhlIGNsYXNzIFwiYWN0aXZlXCJcbiAgICB0YWJMaW5rcy5mb3JFYWNoKHRhYmxpbmsgPT4ge1xuICAgICAgICB0YWJsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIGFuIFwiYWN0aXZlXCIgY2xhc3MgdG8gdGhlIGJ1dHRvbiB0aGF0IG9wZW5lZCB0aGUgdGFiXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufTtcblxuZnVuY3Rpb24gdGFiYmVkV2luZG93cyhldnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldnQuY3VycmVudFRhcmdldDtcblxuICBhY3RpdmF0ZVRhYih0YXJnZXQpO1xufTtcblxuICAgIFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJMaW5rc1wiKS5mb3JFYWNoKHRhYiA9PiB7XG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFiYmVkV2luZG93cywgZmFsc2UpO1xufSk7XG5hY3RpdmF0ZVRhYih0YWJMaW5rc1swXSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9