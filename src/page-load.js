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

export {
    homepageElements
}