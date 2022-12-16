crearCheckbox(data["events"])


//Declaro una variable con un spread operator para crear un array auxiliario que sirva a la hora de filtrar resultados
let resultados = [...data["events"]]


//Event Listener para los checkbox
checkboxContainer.addEventListener("change", handleChangeBox)

function handleChangeBox(e) {
    handleMerge(resultados)
}


//Event Listener para el search input
searchBar.addEventListener("input", handleChange)

//Debo arreglar un bug en el cual debo presionar backspace una vez extra al borrar todos los caracteres del input search
function handleChange(e) {
    handleMerge(resultados)
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


renderCards(resultados)
