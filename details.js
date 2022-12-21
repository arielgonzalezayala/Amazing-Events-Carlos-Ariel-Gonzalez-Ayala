const APIURL = "https://amazing-events.onrender.com/api/events"
fetch( "https://amazing-events.onrender.com/api/events" )
    .then (res => res.json())
    .then (data => {
        const id = parseInt(new URLSearchParams(location.search).get("id"))
        let resultados = [...data["events"]]
        const datos = data.events.find(item => item._id === id)
        console.log(id);
        let detailsContainer = document.getElementById("detailsCard")
        detailsContainer.innerHTML = `
                <div class="card" id="detailsCardDiv">
                <img src="${resultados.image}" class="card-img-top" id="detailsImg" alt="${resultados.name}">
                <div class="card-body d-flex flex-column justify-content-center" id="detailsSection">
                    <p class="card-text">${resultados.name}</p>
                    <p class="card-text">Date: ${resultados.date}</p>
                    <p class="card-text">Description: ${resultados.description}</p>
                    <p class="card-text">Category: ${resultados.category}</p>
                    <p class="card-text">Capacity: ${resultados.capacity} people.</p>
                    <p class="card-text">Attendance: ${resultados.assistance} people.</p>
                    <p class="card-text">Price: $${resultados.price}</p>
                </div>
            </div>`
    })
    .catch(error => {
        detailsMain.innerHTML = `<h3 id="errorCode">ERROR: File not found. Please try again.</h3>`})