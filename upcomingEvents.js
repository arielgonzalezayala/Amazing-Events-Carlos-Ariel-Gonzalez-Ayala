fetch( "https://amazing-events.onrender.com/api/events" )
    .then(res => res.json())
    .then(data => {
        let resultados = [...data["events"]]
        resultados = filterByYear(resultados, 2022)
        console.log(resultados);
        crearCheckbox(resultados)
        renderCards(resultados)
        checkboxContainer.addEventListener("change", handleChangeBox)
        function handleChangeBox(e) {
            handleMerge(resultados)
        }
        searchBar.addEventListener("input", handleChange)
        function handleChange(e) {
            handleMerge(resultados)
        } 
    })
    .catch(error => {
        cardsContainer.innerHTML = `<h3 id="errorCode">ERROR: File not found. Please try again.</h3>`
    })

/* const upcomingEvents = []
for (let j = 0; j < data["events"].length; j++) {
    let event = data["events"][j]
    if (event["date"].includes("2022")) {
        upcomingEvents.push(event)
    }
} */

/* crearCheckbox(upcomingEvents)
renderCards(upcomingEvents)


//Event Listener para los checkbox
checkboxContainer.addEventListener("change", handleChangeBox)

function handleChangeBox(e) {
    handleMerge(upcomingEvents)
}


//Event Listener para el search input
searchBar.addEventListener("input", handleChange)

function handleChange(e) {
    handleMerge(upcomingEvents)
}  */