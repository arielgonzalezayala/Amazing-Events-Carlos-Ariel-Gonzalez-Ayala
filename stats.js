fetch( "https://amazing-events.onrender.com/api/events" )
    .then (res => res.json())
    .then (data => {
        let resultados = [...data["events"]]
        datos = data
        console.log(datos)
        largestCapacity (resultados)
        largCapacity.innerHTML = `15K NY, ${largestCapacity (resultados)}`
        lowestPercentage(resultados)
        lowPercent.innerHTML = `Jurassic Park, ${lowestPercentage (resultados)}%`
        highestPercentage(resultados)
        highPercent.innerHTML = `${highestPercentage (resultados)}%`
        console.log(lowestPercentage(resultados));
        pastStats (resultados)
        upcomingStats (resultados)
    })
    .catch(error => {
        tableMain.innerHTML = `<h3 id="errorCode">ERROR: File not found. Please try again.</h3>`})
