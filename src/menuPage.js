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

export { renderMenu };
