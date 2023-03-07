const reAddDivs = (index, className, container) => {
    for (let i = index; i < 5; i++) {
        let newDiv = document.createElement('div')
        newDiv.classList.add(className)
        container.appendChild(newDiv)
    }
}

const removeChildren = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}