updateBtn.onclick = () => {
  update("https://hf3xzw.deta.dev")
}
//se l'interval non è attivo lo avvia altrimenti lo termina
toggleIntervalBtn.onclick = () => {
  if (interval == null) {
    document.getElementById("toggleIntervalBtn").innerHTML = "Stop";
    interval = setInterval(function(){update("https://hf3xzw.deta.dev")}, 700);
  } else {
    clearInterval(interval);
    interval = null;
    document.getElementById("toggleIntervalBtn").innerHTML = "Start";
  }
}
toggle.onclick = () => {
  sensors[document.getElementById("form-select").value].toggle()
}
showData.onclick = () => {
  console.info(sensors);
}
showHistory.onclick = () => {
  console.info(history);
}
const sensors = [];
const history = new Map();
const history_max_size = 10;
let interval; //interval for automatic get requests
const chart = new Chart(document.getElementById('chart').getContext('2d'), {
  type: "line",
  data: {
    labels: [...Array(history_max_size).keys()], //xValues
    datasets: []
  }
});
