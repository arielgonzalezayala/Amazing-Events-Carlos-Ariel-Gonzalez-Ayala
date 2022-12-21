const cardsContainer = document.getElementById("cardsContainer")
const checkboxContainer = document.getElementById("checkboxContainer")
const searchBar = document.getElementById("searchBar")
const largCapacity = document.getElementById("largestCapacity")
const lowPercent = document.getElementById("lowestPercentage")
const highPercent = document.getElementById("highestPercentage")
const tableCategories = document.getElementById("tableCategories")
const tableFutureCategories = document.getElementById("tableFutureCategories")
const tableError = document.getElementById("tableError")
const detailsMain = document.getElementById("detailsMain")


function getCategories(events) {
    let nuevoArray = []
    events.forEach((event) => {
        nuevoArray.push(event.category)
    });
    return [...new Set(nuevoArray)]
}

function pastStats (events) {
    let tabla = ""
    events.forEach(element => {
        if(element.date.includes("2021")) {
            tabla += 
            `<tr>
            <td> ${element.category}</td>
            <td> $${element.assistance * element.price} </td>
            <td> ${element.assistance / 100}%</td>`
        }
    })
    tableCategories.innerHTML = tabla
}

function upcomingStats (events) {
    let tabla = ""
    events.forEach(element => {
        if(element.date.includes("2022")) {
            tabla += `
            <tr>
            <td> ${element.category}</td>
            <td> $${element.estimate * element.price} </td>
            <td> ${element.estimate / 100}%</td>`
        }
    })
    tableFutureCategories.innerHTML = tabla
}
function largestCapacity (data) {
    let eventsCapacity = data.map(element => (element.capacity))
    return Math.max(...eventsCapacity)
}

function lowestPercentage (data) {
    let lowestAssistance = data.map(element => (element.assistance) || (element.estimate))
    let capacity = data.map (element => (element.capacity))
    return ((Math.min(...lowestAssistance) / parseFloat(capacity)) * 100)
}

function highestPercentage (data) {
    let highestAssistance = data.map(element => (element.assistance) || (element.estimate))
    let capacity = data.map (element => (element.capacity))
    return ((Math.max(...highestAssistance) / parseFloat(...capacity)) * 100)
}



function filterByYear(objects, year) {
    let events = objects.filter(function(object) {
        if ( object.date.slice(0, 4) == year) {
            return object
        }
    })
    return events
}

function crearCheckbox(events) {
    let categories = getCategories(events)
    categories.forEach((element) => {
        let checkboxDiv = document.createElement("div")
        checkboxDiv.classList.add("form-check")
        checkboxDiv.classList.add("form-check-inline")
        let checkboxInput = document.createElement("input")
        checkboxInput.setAttribute("type", "checkbox")
        checkboxInput.setAttribute("id", element)
        checkboxInput.setAttribute("value", false)
        checkboxInput.classList.add("form-check-input")
        checkboxDiv.appendChild(checkboxInput)
        let checkboxLabel = document.createElement("label")
        checkboxLabel.setAttribute("for", element)
        checkboxLabel.textContent = element
        checkboxLabel.classList.add("form-check-label")
        checkboxDiv.appendChild(checkboxLabel)
        checkboxContainer.appendChild(checkboxDiv)
    })
}

/* function renderPastTable (fn, events) {
    tableCategories.innerHTML = ""
    fn;
    events.forEach((event) => {
    let td = document.createElement("td")
    td.textContent = ${event.name}
    tableCategories.appendChild(td)
    })
} */

function renderCards(events) {
    cardsContainer.innerHTML = ""
    //en caso de no existir ninguna card en la página, se muestra este mensaje
    if (events.length === 0) {
        cardsContainer.innerHTML = `<p id="noEvents" >There are no events to display</p>`
    }
    events.forEach((event) => {
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
        button.setAttribute("href", `./details.html?id=${event._id}`)
        button.classList.add("btn")
        button.classList.add("btn-primary")
        button.textContent = "Details"
        cardBody.appendChild(button)
        card.appendChild(cardBody)
        cardsContainer.appendChild(card)
    })
}

function handleMerge(array) {
    // filtro basado en checkboxes
    let checkboxes = checkboxContainer.querySelectorAll(".form-check-input")
    console.log(checkboxes);
    const checkboxArr = [...checkboxes]
    const checked = checkboxArr.filter((checkbox) => checkbox.checked)
    const checkValores = checked.map(element => element.id)
    console.log(checked);
    console.log(checkValores);
    const checkboxFilter = []
    for (let i = 0; i < array.length; i++) {
        let resultado = array[i]
        if (checkValores.length === 0 || checkValores.includes(resultado.category)) {
            checkboxFilter.push(resultado)
        }
    }
    // filtro basado en búsqueda
    let value = searchBar.value.toLowerCase()
    console.log(value)
    const searchFilter = []
    for (let i = 0; i < checkboxFilter.length; i++){
        let event = checkboxFilter[i]
        if (!value || event.name.toLowerCase().includes(value) ) {
            searchFilter.push(event)
        }
    }
    renderCards(searchFilter)
} 

//En ciertos casos, se me presentó un bug donde, al ingresar el texto en el search bar y luego borrarlo, las cards no
//se renderizan hasta presionar backspace una vez más. Este bug no siempre se hace presente y parece estar relacionado
//con la memoria del navegador