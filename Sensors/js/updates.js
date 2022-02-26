/**
 * retrieve json from {url} and convert it in a list of Sensor(s)
 * call the update functions
 * @param url
 */
function update(url) {
  fetch(url).then(r => r.json())
  .then(body => {
    sensors.length = 0 //clear the array
    body['sensors'].forEach(sensor => sensors.push(Sensor.jsonToSensor(sensor)))
    updateHistory();
    if (history.size != chart.data.datasets.length) {
      createChart()
      createSelect()
      drawMap();
      document.getElementById("toggle-components").classList.remove("d-hide");
    }
    chart.update()
    updateHTML();
  })
}
function updateHistory() {
  sensors.forEach(sensor => {
    if (typeof sensor.value === 'number') {
      if (history.has(sensor.id)) {
        const array = history.get(sensor.id);
        if (array.length >= history_max_size)
          array.shift()
        array.push(sensor.value);
        history.set(sensor.id, array)
      } else {
        history.set(sensor.id, [sensor.value]);
      }
    }
  })
}
function createChart() {
  function random_rgba() {
    const o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s)+', 1.0)';
  }
  history.forEach((value, key) => {
    //ritorna true se un dataset ha la {label} uguale alla {key}
    if (!chart.data.datasets.includes(chart.data.datasets.find(el=>el.label===key))) {
      chart.data.datasets.push({
        label: key, 
        data: value, 
        backgroundColor: random_rgba(), 
        borderColor: random_rgba(), 
        tension: 0.4 
      });
    }
  })
}
function createSelect() {
  sensors.forEach((sensor, index) => {
    option = document.createElement( 'option' );
    option.text = sensor.id;
    option.value = index;
    document.getElementById('form-select').add(option);
  })
}
function updateHTML() {
  let result = '';
  sensors.forEach(element => result+= (element.print()))
  document.getElementById("json-container").innerHTML = result;
}
