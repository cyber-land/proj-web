startbtn.onclick = () => {
    sensors.length = 0
    update()
}
const content = document.getElementById('content')
const content2 = document.getElementById('content2')
const dati = document.getElementById('dati')
const dati2 = document.getElementById('dati2')
const sensors = []

const temperature = []
const umidita = []
const cleancode = []
const luce = []
function update() {
    fetch("https://hf3xzw.deta.dev/")
        .then((r) => r.json())
        .then((body) => {

            for (let index = 0; index < 4; index++) {
                const sensor = JSONToSensor(body["sensors"][index]);

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
                sensors.push(sensor)

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
            sensors.forEach(sensor => {
                if (sensor.id == "temperature-01") {
                    temperature.push(sensor.value)
                    if (temperature.length > 10) temperature.shift()
                } else if (sensor.id == "umidita-01") {
                    umidita.push(sensor.value)
                    if (umidita.length > 10) umidita.shift()
                } else if (sensor.id == "cleancode-01") {
                    cleancode.push(sensor.value)
                    if (cleancode.length > 10) cleancode.shift()
                } else if (sensor.id == "luce-01") {
                    luce.push(sensor.value)
                    if (luce.length > 10) luce.shift()
                }
            })
            myChart.update()
        })
}
