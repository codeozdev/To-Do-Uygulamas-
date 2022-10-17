const inputEl = document.querySelector(".main__input")
const addBtn = document.querySelector(".main__add")
const delBtn = document.querySelector(".main__clear")
const jsContainer = document.querySelector(".js-container")

addBtn.addEventListener("click", () => {
    const paragraf = document.createElement("p")
    paragraf.classList.add("paragraf-style")
    paragraf.innerText = inputEl.value
    inputEl.value = ""
    jsContainer.appendChild(paragraf)


    paragraf.addEventListener("click", () => {
        paragraf.style.textDecoration = "line-through"
    })

    paragraf.addEventListener("dblclick", () => {
        jsContainer.removeChild(paragraf)
    })

    delBtn.addEventListener("click", () => {
        paragraf.remove()
    })
})