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

export {renderMenu}