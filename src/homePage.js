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

export { homepageElements };
