
function createHeader(p) {
    const header = document.createElement('header')
    header.classList.add('header')

    const title = document.createElement('h1')
    title.classList.add('title')
    title.textContent = 'Cafe Roast'

    header.appendChild(title)
    header.appendChild(createNav())

    return header
}

function createNav() {
    const navBtnMenu = document.createElement('nav')
    navBtnMenu.classList.add('navBtnMenu')
    

    const homeBtn = document.createElement('button')
    homeBtn.classList.add('homeBtn')
    homeBtn.textContent = 'Home';
    
    const menuBtn = document.createElement('button')
    menuBtn.classList.add('menuBtn')
    menuBtn.textContent = 'Menu';
    

    const contactBtn = document.createElement('button')
    contactBtn.classList.add('contactBtn')
    contactBtn.textContent = 'Contact'
    

    navBtnMenu.appendChild(homeBtn)
    navBtnMenu.appendChild(menuBtn)
    navBtnMenu.appendChild(contactBtn)

    return navBtnMenu
}

function createMain() {
    const main = document.createElement('div')
    main.classList.add('greetingContainer')

    const welcomeText = document.createElement('h1')
    welcomeText.classList.add('welcomeText')
    welcomeText.textContent = 'Welcome!'
    main.appendChild(welcomeText)

    const restaurantName = document.createElement('h1')
    restaurantName.classList.add('restaurantName')
    restaurantName.textContent = 'Cafe Roast'
    main.appendChild(restaurantName)

    return main
}

function createFooter() {
    const footer = document.createElement('footer')
    footer.textContent = `Designed and coded by Greta Rakauskaite \u00A9 2022`

    return footer
}

function homepageElements() {
    const content = document.getElementById('content')
    content.appendChild(createHeader())
    content.appendChild(createMain())
    content.appendChild(createFooter())
}

export {
    homepageElements
}