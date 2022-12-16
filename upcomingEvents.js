const upcomingEvents = []
for (let j = 0; j < data["events"].length; j++) {
    let event = data["events"][j]
    if (event["date"].includes("2022")) {
        upcomingEvents.push(event)
    }
}

crearCheckbox(upcomingEvents)
renderCards(upcomingEvents)


//Event Listener para los checkbox
checkboxContainer.addEventListener("change", handleChangeBox)

function handleChangeBox(e) {
    handleMerge(upcomingEvents)
}


//Event Listener para el search input
searchBar.addEventListener("input", handleChange)

//Debo arreglar un bug en el cual debo presionar backspace una vez extra al borrar todos los caracteres del input search
function handleChange(e) {
    handleMerge(upcomingEvents)
} 