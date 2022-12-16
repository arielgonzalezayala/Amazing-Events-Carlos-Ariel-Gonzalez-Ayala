//parseInt convierte el id de string a numero
const id = parseInt(new URLSearchParams(location.search).get("id"))

/* let resultados = [...data["events"]] */
const detail = data.events.find(item => item._id === id)
console.log(typeof id);

let detailsContainer = document.getElementById("detailsCard")

detailsContainer.innerHTML = `
        <div class="card" id="detailsCardDiv">
        <img src="${detail.image}" class="card-img-top" id="detailsImg" alt="${detail.name}">
        <div class="card-body d-flex flex-column justify-content-center" id="detailsSection">
            <p class="card-text">${detail.name}</p>
            <p class="card-text">Date: ${detail.date}</p>
            <p class="card-text">Description: ${detail.description}</p>
            <p class="card-text">Category: ${detail.category}</p>
            <p class="card-text">Capacity: ${detail.capacity} people.</p>
            <p class="card-text">Attendance: ${detail.assistance} people.</p>
            <p class="card-text">Price: $${detail.price}</p>
        </div>
    </div>`