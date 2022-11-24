function sample() {
    const content = document.getElementById("content");
    const test = document.createElement('div')
    test.classList.add('tabContent')
    test.textContent = 'test'
    test.setAttribute("id", "menu")
    content.appendChild(test)
}


export {sample}