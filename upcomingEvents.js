const cardsContainer = document.getElementById("cardsContainer")

const upcomingEvents = []
for (let j = 0; j < data["events"].length; j++) {
    let event = data["events"][j]
    if (event["date"].includes("2022")) {
        upcomingEvents.push(event)
    }
}

for (let i = 0; i < upcomingEvents.length; i++) {
    // crear evento
    let event = upcomingEvents[i]
    // crear la card
    let card = document.createElement("div")
    card.classList.add("card")
    // crear la imagen
    let img = document.createElement("img")
    img.setAttribute("alt", event.name)
    img.setAttribute("src", event.image)
    img.classList.add("card-img-top")
    card.appendChild(img)
    // crear la card body
    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    // crear titulo
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add("card-title")
    cardTitle.textContent = event.name
    cardBody.appendChild(cardTitle)
    //crear descripcion
    let cardDescription = document.createElement("p")
    cardDescription.classList.add("card-text")
    cardDescription.textContent = event.description
    cardBody.appendChild(cardDescription)
    // crear precio
    let price = document.createElement("p")
    price.classList.add("card-text")
    price.textContent = `Price: $${event.price}`
    cardBody.appendChild(price)
    //crear boton
    let button = document.createElement("a")
    button.setAttribute("href", "./details.html")
    button.classList.add("btn")
    button.classList.add("btn-primary")
    button.textContent = "Details"
    cardBody.appendChild(button)
    card.appendChild(cardBody)
    cardsContainer.appendChild(card)
}