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
  const contentContactPage = document.createElement("div");
  contentContactPage.classList.add("contentContactPage", "tabContent");
  contentContactPage.setAttribute("id", "contact");

  const pageTitle = document.createElement('h1')
  pageTitle.classList.add("pageTitle");
  pageTitle.textContent = 'Contact Us'

  const pageDescription = document.createElement('p')
  pageDescription.classList.add("pageDescription");
  pageDescription.textContent = 'We would love to hear from you. Let us know if you are planning to make a reservation or would like to purchase a gift card'

  const allContactDetails = document.createElement('div')
  allContactDetails.classList.add('allContactDetails')

  // Address
  const addressContainer = document.createElement('div')
  addressContainer.classList.add('addressContainer')

  const addressTitle = document.createElement("h2");
  addressTitle.textContent = "Location";

  const address = document.createElement("p");
  address.textContent = "Boulevard avenue 73, 1874RR, Espressity";

  //Contact
  const contactContainer = document.createElement('div')
  contactContainer.classList.add('contactContainer')

  const contactNumberTitle = document.createElement("h2");
  contactNumberTitle.textContent = "Contact";

  const contactNumber = document.createElement("p");
  contactNumber.textContent = "+3158958486";

  const contactEmail = document.createElement("p");
  contactEmail.textContent = "roastcaffee@fake.com";

  //Opening hours
  const scheduleContainer = document.createElement('div')
  scheduleContainer.classList.add('scheduleContainer')

  const openHours = document.createElement('h2')
  openHours.textContent = 'Hours'

  const scheduleDay = document.createElement('p')
  scheduleDay.textContent = 'Open Daily'

  const scheduleHours = document.createElement('p')
  scheduleHours.textContent = '7AM - 6PM'

  contentContactPage.appendChild(pageTitle);
  contentContactPage.appendChild(pageDescription)

  contentContactPage.appendChild(allContactDetails)

  allContactDetails.appendChild(addressContainer)
  addressContainer.appendChild(addressTitle);
  addressContainer.appendChild(address);

  allContactDetails.appendChild(contactContainer)
  contactContainer.appendChild(contactNumberTitle);
  contactContainer.appendChild(contactNumber);
  contactContainer.appendChild(contactEmail)

  allContactDetails.appendChild(scheduleContainer)
  scheduleContainer.appendChild(openHours)
  scheduleContainer.appendChild(scheduleDay)
  scheduleContainer.appendChild(scheduleHours)


  return contentContactPage;
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
  welcomeText.classList.add("welcomeText", 'pageTitle');
  welcomeText.textContent = "Welcome!";
  
  const restaurantName = document.createElement("h2");
  restaurantName.classList.add("restaurantName");
  restaurantName.textContent = "Visit Cafe Roast";

  const restaurantDescription = document.createElement('p')
  restaurantDescription.classList.add("restaurantDescription");
  restaurantDescription.textContent = 'And discover the taste of real coffee..'
  
  const address = document.createElement("p");
  address.classList.add("address");
  address.textContent = "Boulevard avenue 73, 1874RR, Espressity";

  main.appendChild(homePageContent);
  homePageContent.appendChild(welcomeText);
  homePageContent.appendChild(restaurantName);
  homePageContent.appendChild(restaurantDescription)
  homePageContent.appendChild(address)

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

  const pageTitle = document.createElement('h1')
  pageTitle.classList.add("pageTitle");
  pageTitle.textContent = 'Our Menu'

  menuPageContent.appendChild(pageTitle)
  menuPageContent.appendChild(
    addMenuItem(
      "Esspresso",
      "A concentrated form of coffee served in small, strong shot"
    )
  );
  menuPageContent.appendChild(
    addMenuItem(
      "Latte",
      "Coffee drink, made with a shot of espresso, steamed milk, and topped with a milk microfoam layer"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRXlCOzs7Ozs7Ozs7Ozs7Ozs7QUNoRnpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU0Qjs7Ozs7Ozs7Ozs7Ozs7O0FDM0Y1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG9CQUFvQjtBQUM5QyxnQ0FBZ0MsTUFBTTs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRXNCOzs7Ozs7O1VDeEV0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONkM7QUFDUjtBQUNTO0FBQzlDLDJEQUFnQjtBQUNoQixzREFBVTtBQUNWLDREQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCx5QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnVQYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHBvcHVsYXRlQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGVudENvbnRhY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudENvbnRhY3RQYWdlLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29udGFjdFBhZ2VcIiwgXCJ0YWJDb250ZW50XCIpO1xuICBjb250ZW50Q29udGFjdFBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xuXG4gIGNvbnN0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgcGFnZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwYWdlVGl0bGVcIik7XG4gIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJ1xuXG4gIGNvbnN0IHBhZ2VEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBwYWdlRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInBhZ2VEZXNjcmlwdGlvblwiKTtcbiAgcGFnZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1dlIHdvdWxkIGxvdmUgdG8gaGVhciBmcm9tIHlvdS4gTGV0IHVzIGtub3cgaWYgeW91IGFyZSBwbGFubmluZyB0byBtYWtlIGEgcmVzZXJ2YXRpb24gb3Igd291bGQgbGlrZSB0byBwdXJjaGFzZSBhIGdpZnQgY2FyZCdcblxuICBjb25zdCBhbGxDb250YWN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGFsbENvbnRhY3REZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2FsbENvbnRhY3REZXRhaWxzJylcblxuICAvLyBBZGRyZXNzXG4gIGNvbnN0IGFkZHJlc3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBhZGRyZXNzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3NDb250YWluZXInKVxuXG4gIGNvbnN0IGFkZHJlc3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgYWRkcmVzc1RpdGxlLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiQm91bGV2YXJkIGF2ZW51ZSA3MywgMTg3NFJSLCBFc3ByZXNzaXR5XCI7XG5cbiAgLy9Db250YWN0XG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RDb250YWluZXInKVxuXG4gIGNvbnN0IGNvbnRhY3ROdW1iZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29udGFjdE51bWJlclRpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgY29uc3QgY29udGFjdE51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb250YWN0TnVtYmVyLnRleHRDb250ZW50ID0gXCIrMzE1ODk1ODQ4NlwiO1xuXG4gIGNvbnN0IGNvbnRhY3RFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb250YWN0RW1haWwudGV4dENvbnRlbnQgPSBcInJvYXN0Y2FmZmVlQGZha2UuY29tXCI7XG5cbiAgLy9PcGVuaW5nIGhvdXJzXG4gIGNvbnN0IHNjaGVkdWxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc2NoZWR1bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2NoZWR1bGVDb250YWluZXInKVxuXG4gIGNvbnN0IG9wZW5Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgb3BlbkhvdXJzLnRleHRDb250ZW50ID0gJ0hvdXJzJ1xuXG4gIGNvbnN0IHNjaGVkdWxlRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHNjaGVkdWxlRGF5LnRleHRDb250ZW50ID0gJ09wZW4gRGFpbHknXG5cbiAgY29uc3Qgc2NoZWR1bGVIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBzY2hlZHVsZUhvdXJzLnRleHRDb250ZW50ID0gJzdBTSAtIDZQTSdcblxuICBjb250ZW50Q29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcbiAgY29udGVudENvbnRhY3RQYWdlLmFwcGVuZENoaWxkKHBhZ2VEZXNjcmlwdGlvbilcblxuICBjb250ZW50Q29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQoYWxsQ29udGFjdERldGFpbHMpXG5cbiAgYWxsQ29udGFjdERldGFpbHMuYXBwZW5kQ2hpbGQoYWRkcmVzc0NvbnRhaW5lcilcbiAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzVGl0bGUpO1xuICBhZGRyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gIGFsbENvbnRhY3REZXRhaWxzLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpXG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdE51bWJlclRpdGxlKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0TnVtYmVyKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0RW1haWwpXG5cbiAgYWxsQ29udGFjdERldGFpbHMuYXBwZW5kQ2hpbGQoc2NoZWR1bGVDb250YWluZXIpXG4gIHNjaGVkdWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wZW5Ib3VycylcbiAgc2NoZWR1bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2NoZWR1bGVEYXkpXG4gIHNjaGVkdWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjaGVkdWxlSG91cnMpXG5cblxuICByZXR1cm4gY29udGVudENvbnRhY3RQYWdlO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDb250YWN0KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGFpbmVyXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKHBvcHVsYXRlQ29udGFjdCgpKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyQ29udGFjdCB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHApIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgdGl0bGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUJveC5jbGFzc0xpc3QuYWRkKFwidGl0bGVCb3hcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNhZmUgUm9hc3RcIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVCb3gpO1xuICB0aXRsZUJveC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICBjb25zdCBuYXZCdG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2QnRuTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2QnRuTWVudVwiKTtcblxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaG9tZUJ0blwiLCBcInRhYkxpbmtzXCIpO1xuICBob21lQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtdGFyZ2V0XCIsIFwiaG9tZVwiKVxuICBob21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcIm1lbnVCdG5cIiwgXCJ0YWJMaW5rc1wiKTtcbiAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhcmdldFwiLCAnbWVudScpXG4gIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEJ0blwiLCBcInRhYkxpbmtzXCIpO1xuICBjb250YWN0QnRuLnNldEF0dHJpYnV0ZShcImRhdGEtdGFyZ2V0XCIsIFwiY29udGFjdFwiKVxuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgbmF2QnRuTWVudS5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgbmF2QnRuTWVudS5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgbmF2QnRuTWVudS5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuICByZXR1cm4gbmF2QnRuTWVudTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5Db250YWluZXJcIik7XG5cbiAgY29uc3QgaG9tZVBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZVBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lUGFnZUNvbnRlbnRcIiwgXCJ0YWJDb250ZW50XCIpO1xuICBob21lUGFnZUNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpXG5cbiAgY29uc3Qgd2VsY29tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHdlbGNvbWVUZXh0LmNsYXNzTGlzdC5hZGQoXCJ3ZWxjb21lVGV4dFwiLCAncGFnZVRpdGxlJyk7XG4gIHdlbGNvbWVUZXh0LnRleHRDb250ZW50ID0gXCJXZWxjb21lIVwiO1xuICBcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50TmFtZVwiKTtcbiAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIlZpc2l0IENhZmUgUm9hc3RcIjtcblxuICBjb25zdCByZXN0YXVyYW50RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50RGVzY3JpcHRpb25cIik7XG4gIHJlc3RhdXJhbnREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdBbmQgZGlzY292ZXIgdGhlIHRhc3RlIG9mIHJlYWwgY29mZmVlLi4nXG4gIFxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImFkZHJlc3NcIik7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIkJvdWxldmFyZCBhdmVudWUgNzMsIDE4NzRSUiwgRXNwcmVzc2l0eVwiO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoaG9tZVBhZ2VDb250ZW50KTtcbiAgaG9tZVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHdlbGNvbWVUZXh0KTtcbiAgaG9tZVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcbiAgaG9tZVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHJlc3RhdXJhbnREZXNjcmlwdGlvbilcbiAgaG9tZVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGFkZHJlc3MpXG5cbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyLnRleHRDb250ZW50ID0gYERlc2lnbmVkIGFuZCBjb2RlZCBieSBHcmV0YSBSYWthdXNrYWl0ZSBcXHUwMEE5IDIwMjJgO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGhvbWVwYWdlRWxlbWVudHMoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xufVxuXG5leHBvcnQgeyBob21lcGFnZUVsZW1lbnRzIH07XG4iLCJmdW5jdGlvbiBwb3B1bGF0ZU1lbnUoKSB7XG4gIGNvbnN0IG1lbnVQYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVQYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudVBhZ2VDb250ZW50XCIsIFwidGFiQ29udGVudFwiKTtcbiAgbWVudVBhZ2VDb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcblxuICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gIHBhZ2VUaXRsZS5jbGFzc0xpc3QuYWRkKFwicGFnZVRpdGxlXCIpO1xuICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnT3VyIE1lbnUnXG5cbiAgbWVudVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHBhZ2VUaXRsZSlcbiAgbWVudVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKFxuICAgIGFkZE1lbnVJdGVtKFxuICAgICAgXCJFc3NwcmVzc29cIixcbiAgICAgIFwiQSBjb25jZW50cmF0ZWQgZm9ybSBvZiBjb2ZmZWUgc2VydmVkIGluIHNtYWxsLCBzdHJvbmcgc2hvdFwiXG4gICAgKVxuICApO1xuICBtZW51UGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoXG4gICAgYWRkTWVudUl0ZW0oXG4gICAgICBcIkxhdHRlXCIsXG4gICAgICBcIkNvZmZlZSBkcmluaywgbWFkZSB3aXRoIGEgc2hvdCBvZiBlc3ByZXNzbywgc3RlYW1lZCBtaWxrLCBhbmQgdG9wcGVkIHdpdGggYSBtaWxrIG1pY3JvZm9hbSBsYXllclwiXG4gICAgKVxuICApO1xuICBtZW51UGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoXG4gICAgYWRkTWVudUl0ZW0oXG4gICAgICBcIkZyYXBwdWNjaW5vXCIsXG4gICAgICBcIkEgYmxlbmRlZCBpY2VkIGNvZmZlZSBkcmluayB3aXRoIGEgY2hvaWNlIG9mIGNhcmFtZWwgb3IgZGFyayBjaG9jb2xhdGUgZmxhdm91cnNcIlxuICAgIClcbiAgKTtcbiAgbWVudVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKFxuICAgIGFkZE1lbnVJdGVtKFxuICAgICAgXCJDYXBwdWNjaW5vXCIsXG4gICAgICBcIkFuIGVzcHJlc3NvLWJhc2VkIGhvdCBjb2ZmZWUgYmV2ZXJhZ2UgbWFkZSBvZiBhIHNob3Qgb2YgZXNwcmVzc28gYW5kIHN0ZWFtZWQgYW5kIGZyb3RoZWQgbWlsa1wiXG4gICAgKVxuICApO1xuICBtZW51UGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoXG4gICAgYWRkTWVudUl0ZW0oXG4gICAgICBcIkFtZXJpY2Fub1wiLFxuICAgICAgXCJFc3ByZXNzby1iYXNlZCBjb2ZmZWUgZHJpbmsgbWFkZSBvZiBhIHNob3Qgb2YgZXNwcmVzc28sIGRpbHV0ZWQgd2l0aCBob3Qgd2F0ZXJcIlxuICAgIClcbiAgKTtcblxuICByZXR1cm4gbWVudVBhZ2VDb250ZW50O1xufVxuXG4vL0Z1bmN0aW9uIGNyZWF0ZXMgY2FyZHMgZ2l2ZW4gdGl0bGUgYW5kIGRlc2NyaXB0aW9uXG5cbmZ1bmN0aW9uIGFkZE1lbnVJdGVtKHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbVwiKTtcblxuICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGl0ZW1EZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgY29uc3QgaXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGl0ZW1JbWcuc3JjID0gYC4uL2ltZy8ke3RpdGxlLnRvTG93ZXJDYXNlKCl9LmpwZ2A7XG4gIGl0ZW1JbWcuYWx0ID0gYEEgcGljdHVyZSBvZiAke3RpdGxlfWA7XG5cbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUltZyk7XG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1EZXNjKTtcblxuICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250YWluZXJcIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQocG9wdWxhdGVNZW51KCkpO1xufVxuXG5leHBvcnQgeyByZW5kZXJNZW51IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGhvbWVwYWdlRWxlbWVudHN9IGZyb20gXCIuL2hvbWVQYWdlXCI7XG5pbXBvcnQge3JlbmRlck1lbnV9IGZyb20gXCIuL21lbnVQYWdlXCJcbmltcG9ydCB7IHJlbmRlckNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0UGFnZVwiO1xuaG9tZXBhZ2VFbGVtZW50cygpXG5yZW5kZXJNZW51KClcbnJlbmRlckNvbnRhY3QoKVxuXG5jb25zdCB0YWJDb250ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiQ29udGVudFwiKTtcbmNvbnN0IHRhYkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJMaW5rc1wiKTtcblxuZnVuY3Rpb24gYWN0aXZhdGVUYWIgKHRhcmdldCkge1xuICAgIGNvbnN0IGNvbnRlbnRJZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgXG4gICAgLy8gR2V0IGFsbCBlbGVtZW50cyB3aXRoIGNsYXNzPVwidGFiY29udGVudFwiIGFuZCBoaWRlIHRoZW0sIGFuZCBzaG93IHRoZSBjdXJyZW50IHRhYlxuICAgIHRhYkNvbnRlbnRzLmZvckVhY2godGFiQ29udGVudCA9PiB7XG4gICAgICAgIHRhYkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IHRhYkNvbnRlbnQuaWQgPT09IGNvbnRlbnRJZCA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgfSk7XG4gIFxuICAgIC8vIEdldCBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcz1cInRhYmxpbmtzXCIgYW5kIHJlbW92ZSB0aGUgY2xhc3MgXCJhY3RpdmVcIlxuICAgIHRhYkxpbmtzLmZvckVhY2godGFibGluayA9PiB7XG4gICAgICAgIHRhYmxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgYW4gXCJhY3RpdmVcIiBjbGFzcyB0byB0aGUgYnV0dG9uIHRoYXQgb3BlbmVkIHRoZSB0YWJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59O1xuXG5mdW5jdGlvbiB0YWJiZWRXaW5kb3dzKGV2dCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2dC5jdXJyZW50VGFyZ2V0O1xuXG4gIGFjdGl2YXRlVGFiKHRhcmdldCk7XG59O1xuXG4gICAgXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYkxpbmtzXCIpLmZvckVhY2godGFiID0+IHtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWJiZWRXaW5kb3dzLCBmYWxzZSk7XG59KTtcbmFjdGl2YXRlVGFiKHRhYkxpbmtzWzBdKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=