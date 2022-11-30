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
  itemImg.src = `../dist/img/${title.toLowerCase()}.jpg`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRXlCOzs7Ozs7Ozs7Ozs7Ozs7QUNoRnpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU0Qjs7Ozs7Ozs7Ozs7Ozs7O0FDM0Y1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLG9CQUFvQjtBQUNuRCxnQ0FBZ0MsTUFBTTs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRXNCOzs7Ozs7O1VDeEV0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONkM7QUFDUjtBQUNTO0FBQzlDLDJEQUFnQjtBQUNoQixzREFBVTtBQUNWLDREQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCx5QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnVQYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHBvcHVsYXRlQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGVudENvbnRhY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudENvbnRhY3RQYWdlLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29udGFjdFBhZ2VcIiwgXCJ0YWJDb250ZW50XCIpO1xuICBjb250ZW50Q29udGFjdFBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xuXG4gIGNvbnN0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgcGFnZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwYWdlVGl0bGVcIik7XG4gIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJ1xuXG4gIGNvbnN0IHBhZ2VEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBwYWdlRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInBhZ2VEZXNjcmlwdGlvblwiKTtcbiAgcGFnZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1dlIHdvdWxkIGxvdmUgdG8gaGVhciBmcm9tIHlvdS4gTGV0IHVzIGtub3cgaWYgeW91IGFyZSBwbGFubmluZyB0byBtYWtlIGEgcmVzZXJ2YXRpb24gb3Igd291bGQgbGlrZSB0byBwdXJjaGFzZSBhIGdpZnQgY2FyZCdcblxuICBjb25zdCBhbGxDb250YWN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGFsbENvbnRhY3REZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2FsbENvbnRhY3REZXRhaWxzJylcblxuICAvLyBBZGRyZXNzXG4gIGNvbnN0IGFkZHJlc3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBhZGRyZXNzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3NDb250YWluZXInKVxuXG4gIGNvbnN0IGFkZHJlc3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgYWRkcmVzc1RpdGxlLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiQm91bGV2YXJkIGF2ZW51ZSA3MywgMTg3NFJSLCBFc3ByZXNzaXR5XCI7XG5cbiAgLy9Db250YWN0XG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RDb250YWluZXInKVxuXG4gIGNvbnN0IGNvbnRhY3ROdW1iZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29udGFjdE51bWJlclRpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgY29uc3QgY29udGFjdE51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb250YWN0TnVtYmVyLnRleHRDb250ZW50ID0gXCIrMzE1ODk1ODQ4NlwiO1xuXG4gIGNvbnN0IGNvbnRhY3RFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb250YWN0RW1haWwudGV4dENvbnRlbnQgPSBcInJvYXN0Y2FmZmVlQGZha2UuY29tXCI7XG5cbiAgLy9PcGVuaW5nIGhvdXJzXG4gIGNvbnN0IHNjaGVkdWxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc2NoZWR1bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2NoZWR1bGVDb250YWluZXInKVxuXG4gIGNvbnN0IG9wZW5Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgb3BlbkhvdXJzLnRleHRDb250ZW50ID0gJ0hvdXJzJ1xuXG4gIGNvbnN0IHNjaGVkdWxlRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHNjaGVkdWxlRGF5LnRleHRDb250ZW50ID0gJ09wZW4gRGFpbHknXG5cbiAgY29uc3Qgc2NoZWR1bGVIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBzY2hlZHVsZUhvdXJzLnRleHRDb250ZW50ID0gJzdBTSAtIDZQTSdcblxuICBjb250ZW50Q29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcbiAgY29udGVudENvbnRhY3RQYWdlLmFwcGVuZENoaWxkKHBhZ2VEZXNjcmlwdGlvbilcblxuICBjb250ZW50Q29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQoYWxsQ29udGFjdERldGFpbHMpXG5cbiAgYWxsQ29udGFjdERldGFpbHMuYXBwZW5kQ2hpbGQoYWRkcmVzc0NvbnRhaW5lcilcbiAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzVGl0bGUpO1xuICBhZGRyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gIGFsbENvbnRhY3REZXRhaWxzLmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpXG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdE51bWJlclRpdGxlKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0TnVtYmVyKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0RW1haWwpXG5cbiAgYWxsQ29udGFjdERldGFpbHMuYXBwZW5kQ2hpbGQoc2NoZWR1bGVDb250YWluZXIpXG4gIHNjaGVkdWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wZW5Ib3VycylcbiAgc2NoZWR1bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2NoZWR1bGVEYXkpXG4gIHNjaGVkdWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjaGVkdWxlSG91cnMpXG5cblxuICByZXR1cm4gY29udGVudENvbnRhY3RQYWdlO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDb250YWN0KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGFpbmVyXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKHBvcHVsYXRlQ29udGFjdCgpKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyQ29udGFjdCB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHApIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgdGl0bGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUJveC5jbGFzc0xpc3QuYWRkKFwidGl0bGVCb3hcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNhZmUgUm9hc3RcIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVCb3gpO1xuICB0aXRsZUJveC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICBjb25zdCBuYXZCdG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2QnRuTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2QnRuTWVudVwiKTtcblxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaG9tZUJ0blwiLCBcInRhYkxpbmtzXCIpO1xuICBob21lQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtdGFyZ2V0XCIsIFwiaG9tZVwiKVxuICBob21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcIm1lbnVCdG5cIiwgXCJ0YWJMaW5rc1wiKTtcbiAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhcmdldFwiLCAnbWVudScpXG4gIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEJ0blwiLCBcInRhYkxpbmtzXCIpO1xuICBjb250YWN0QnRuLnNldEF0dHJpYnV0ZShcImRhdGEtdGFyZ2V0XCIsIFwiY29udGFjdFwiKVxuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgbmF2QnRuTWVudS5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgbmF2QnRuTWVudS5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgbmF2QnRuTWVudS5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuICByZXR1cm4gbmF2QnRuTWVudTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5Db250YWluZXJcIik7XG5cbiAgY29uc3QgaG9tZVBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZVBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lUGFnZUNvbnRlbnRcIiwgXCJ0YWJDb250ZW50XCIpO1xuICBob21lUGFnZUNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpXG5cbiAgY29uc3Qgd2VsY29tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHdlbGNvbWVUZXh0LmNsYXNzTGlzdC5hZGQoXCJ3ZWxjb21lVGV4dFwiLCAncGFnZVRpdGxlJyk7XG4gIHdlbGNvbWVUZXh0LnRleHRDb250ZW50ID0gXCJXZWxjb21lIVwiO1xuICBcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50TmFtZVwiKTtcbiAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIlZpc2l0IENhZmUgUm9hc3RcIjtcblxuICBjb25zdCByZXN0YXVyYW50RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50RGVzY3JpcHRpb25cIik7XG4gIHJlc3RhdXJhbnREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdBbmQgZGlzY292ZXIgdGhlIHRhc3RlIG9mIHJlYWwgY29mZmVlLi4nXG4gIFxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImFkZHJlc3NcIik7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIkJvdWxldmFyZCBhdmVudWUgNzMsIDE4NzRSUiwgRXNwcmVzc2l0eVwiO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoaG9tZVBhZ2VDb250ZW50KTtcbiAgaG9tZVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHdlbGNvbWVUZXh0KTtcbiAgaG9tZVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcbiAgaG9tZVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHJlc3RhdXJhbnREZXNjcmlwdGlvbilcbiAgaG9tZVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGFkZHJlc3MpXG5cbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyLnRleHRDb250ZW50ID0gYERlc2lnbmVkIGFuZCBjb2RlZCBieSBHcmV0YSBSYWthdXNrYWl0ZSBcXHUwMEE5IDIwMjJgO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGhvbWVwYWdlRWxlbWVudHMoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xufVxuXG5leHBvcnQgeyBob21lcGFnZUVsZW1lbnRzIH07XG4iLCJmdW5jdGlvbiBwb3B1bGF0ZU1lbnUoKSB7XG4gIGNvbnN0IG1lbnVQYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVQYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudVBhZ2VDb250ZW50XCIsIFwidGFiQ29udGVudFwiKTtcbiAgbWVudVBhZ2VDb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKTtcblxuICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gIHBhZ2VUaXRsZS5jbGFzc0xpc3QuYWRkKFwicGFnZVRpdGxlXCIpO1xuICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnT3VyIE1lbnUnXG5cbiAgbWVudVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHBhZ2VUaXRsZSlcbiAgbWVudVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKFxuICAgIGFkZE1lbnVJdGVtKFxuICAgICAgXCJFc3NwcmVzc29cIixcbiAgICAgIFwiQSBjb25jZW50cmF0ZWQgZm9ybSBvZiBjb2ZmZWUgc2VydmVkIGluIHNtYWxsLCBzdHJvbmcgc2hvdFwiXG4gICAgKVxuICApO1xuICBtZW51UGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoXG4gICAgYWRkTWVudUl0ZW0oXG4gICAgICBcIkxhdHRlXCIsXG4gICAgICBcIkNvZmZlZSBkcmluaywgbWFkZSB3aXRoIGEgc2hvdCBvZiBlc3ByZXNzbywgc3RlYW1lZCBtaWxrLCBhbmQgdG9wcGVkIHdpdGggYSBtaWxrIG1pY3JvZm9hbSBsYXllclwiXG4gICAgKVxuICApO1xuICBtZW51UGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoXG4gICAgYWRkTWVudUl0ZW0oXG4gICAgICBcIkZyYXBwdWNjaW5vXCIsXG4gICAgICBcIkEgYmxlbmRlZCBpY2VkIGNvZmZlZSBkcmluayB3aXRoIGEgY2hvaWNlIG9mIGNhcmFtZWwgb3IgZGFyayBjaG9jb2xhdGUgZmxhdm91cnNcIlxuICAgIClcbiAgKTtcbiAgbWVudVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKFxuICAgIGFkZE1lbnVJdGVtKFxuICAgICAgXCJDYXBwdWNjaW5vXCIsXG4gICAgICBcIkFuIGVzcHJlc3NvLWJhc2VkIGhvdCBjb2ZmZWUgYmV2ZXJhZ2UgbWFkZSBvZiBhIHNob3Qgb2YgZXNwcmVzc28gYW5kIHN0ZWFtZWQgYW5kIGZyb3RoZWQgbWlsa1wiXG4gICAgKVxuICApO1xuICBtZW51UGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoXG4gICAgYWRkTWVudUl0ZW0oXG4gICAgICBcIkFtZXJpY2Fub1wiLFxuICAgICAgXCJFc3ByZXNzby1iYXNlZCBjb2ZmZWUgZHJpbmsgbWFkZSBvZiBhIHNob3Qgb2YgZXNwcmVzc28sIGRpbHV0ZWQgd2l0aCBob3Qgd2F0ZXJcIlxuICAgIClcbiAgKTtcblxuICByZXR1cm4gbWVudVBhZ2VDb250ZW50O1xufVxuXG4vL0Z1bmN0aW9uIGNyZWF0ZXMgY2FyZHMgZ2l2ZW4gdGl0bGUgYW5kIGRlc2NyaXB0aW9uXG5cbmZ1bmN0aW9uIGFkZE1lbnVJdGVtKHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbVwiKTtcblxuICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGl0ZW1EZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgY29uc3QgaXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGl0ZW1JbWcuc3JjID0gYC4uL2Rpc3QvaW1nLyR7dGl0bGUudG9Mb3dlckNhc2UoKX0uanBnYDtcbiAgaXRlbUltZy5hbHQgPSBgQSBwaWN0dXJlIG9mICR7dGl0bGV9YDtcblxuICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtSW1nKTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbURlc2MpO1xuXG4gIHJldHVybiBtZW51SXRlbTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRhaW5lclwiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChwb3B1bGF0ZU1lbnUoKSk7XG59XG5cbmV4cG9ydCB7IHJlbmRlck1lbnUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaG9tZXBhZ2VFbGVtZW50c30gZnJvbSBcIi4vaG9tZVBhZ2VcIjtcbmltcG9ydCB7cmVuZGVyTWVudX0gZnJvbSBcIi4vbWVudVBhZ2VcIlxuaW1wb3J0IHsgcmVuZGVyQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RQYWdlXCI7XG5ob21lcGFnZUVsZW1lbnRzKClcbnJlbmRlck1lbnUoKVxucmVuZGVyQ29udGFjdCgpXG5cbmNvbnN0IHRhYkNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJDb250ZW50XCIpO1xuY29uc3QgdGFiTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYkxpbmtzXCIpO1xuXG5mdW5jdGlvbiBhY3RpdmF0ZVRhYiAodGFyZ2V0KSB7XG4gICAgY29uc3QgY29udGVudElkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcbiAgICBcbiAgICAvLyBHZXQgYWxsIGVsZW1lbnRzIHdpdGggY2xhc3M9XCJ0YWJjb250ZW50XCIgYW5kIGhpZGUgdGhlbSwgYW5kIHNob3cgdGhlIGN1cnJlbnQgdGFiXG4gICAgdGFiQ29udGVudHMuZm9yRWFjaCh0YWJDb250ZW50ID0+IHtcbiAgICAgICAgdGFiQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gdGFiQ29udGVudC5pZCA9PT0gY29udGVudElkID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICB9KTtcbiAgXG4gICAgLy8gR2V0IGFsbCBlbGVtZW50cyB3aXRoIGNsYXNzPVwidGFibGlua3NcIiBhbmQgcmVtb3ZlIHRoZSBjbGFzcyBcImFjdGl2ZVwiXG4gICAgdGFiTGlua3MuZm9yRWFjaCh0YWJsaW5rID0+IHtcbiAgICAgICAgdGFibGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8vIEFkZCBhbiBcImFjdGl2ZVwiIGNsYXNzIHRvIHRoZSBidXR0b24gdGhhdCBvcGVuZWQgdGhlIHRhYlxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn07XG5cbmZ1bmN0aW9uIHRhYmJlZFdpbmRvd3MoZXZ0KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZ0LmN1cnJlbnRUYXJnZXQ7XG5cbiAgYWN0aXZhdGVUYWIodGFyZ2V0KTtcbn07XG5cbiAgICBcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiTGlua3NcIikuZm9yRWFjaCh0YWIgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhYmJlZFdpbmRvd3MsIGZhbHNlKTtcbn0pO1xuYWN0aXZhdGVUYWIodGFiTGlua3NbMF0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==