fetch( "https://amazing-events.onrender.com/api/events" )
    .then(res => res.json())
    .then(data => {
        let resultados = [...data["events"]]
        resultados = filterByYear(resultados, 2021)
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