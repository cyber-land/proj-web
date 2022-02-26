const content = document.getElementById('content')
const content2 = document.getElementById('content2')
const dati = document.getElementById('dati')
const dati2 = document.getElementById('dati2')

fetch("https://hf3xzw.deta.dev/")
    .then((r) => r.json())
    .then((body) => {
        console.log(body)

        for (let index = 0; index < 4; index++) {
            const sensor = JSONToSensor(body["sensors"][index]);

            console.log(sensor.description)

            content.innerHTML += `
            <div class="card-content">
                <h3>${sensor.description}</h3>
                <p>
                ${sensor.id} <br>
                ${sensor.lat} <br>
                ${sensor.lng} <br>
                ${sensor.place} <br>
                ${sensor.state_code} <br>
                ${sensor.value}
                </p>    
            </div>
            `
        }
        for (let index = 4; index < 8; index++) {
            const sensor = JSONToSensor(body["sensors"][index]);

            console.log(sensor.description)

            content2.innerHTML += `
            <div class="card-content">
                <h3>${sensor.description}</h3>
                <p>
                ${sensor.id} <br>
                ${sensor.lat} <br>
                ${sensor.lng} <br>
                ${sensor.place} <br>
                ${sensor.state_code} <br>
                ${sensor.value} <br>
                </p>               
            </div>
            `
        }
    })

    startbtn.onclick= () => {

    }
