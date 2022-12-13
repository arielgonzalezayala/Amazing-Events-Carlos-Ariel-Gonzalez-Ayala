const cardsContainer = document.getElementById("cardsContainer")

for (let i = 0; i < data["events"].length; i++) {
    // llamar al evento
    let event = data["events"][i]
    // crear la card
    let card = document.createElement("div")
    card.classList.add("card")
    // crear la imagen
    let img = document.createElement("img")
    img.setAttribute("alt", event.name)
    img.setAttribute("src", event.image)
    img.classList.add("card-img-top")
    card.appendChild(img)
    // crear el body de la card
    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    // crear el titulo
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add("card-title")
    cardTitle.textContent = event.name
    cardBody.appendChild(cardTitle)
    // crear la descripcion
    let cardDescription = document.createElement("p")
    cardDescription.classList.add("card-text")
    cardDescription.textContent = event.description
    cardBody.appendChild(cardDescription)
    //crear el precio
    let price = document.createElement("p")
    price.classList.add("card-text")
    price.textContent = `Price: $${event.price}`
    cardBody.appendChild(price)
    // crear el boton
    let button = document.createElement("a")
    button.setAttribute("href", "./details.html")
    button.classList.add("btn")
    button.classList.add("btn-primary")
    button.textContent = "Details"
    cardBody.appendChild(button)
    card.appendChild(cardBody)
    cardsContainer.appendChild(card)
}