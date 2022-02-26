class Location {
  constructor (name, state_code, lat, lng) {
    this.name = name
    this.state_code = state_code
    this.lat = lat
    this.lng = lng
  }
}
class Sensor {
  constructor(description,id,lat,lng,place,readonly,state_code,value) {
    this.description = description
    this.id = id
    this.readonly = readonly
    this.value = value //this can be boolean or float
    this.location = new Location (place, state_code, lat, lng)
  }
  toggle() {
    fetch('https://hf3xzw.deta.dev/'+this.id+'/toggle', {
      method: 'PUT', 
    }).then(response => response.json())
    .then(result => {/*console.log('Success:', result)*/})
    .catch(error => console.error('Error:', error))
  }
  print() {
    return this.id+": "+this.value+"<br>";
  }
  static jsonToSensor(json) {
    return new Sensor(
      json.description, json.id, json.lat, json.lng,
      json.place, json.readonly, json.state_code, json.value);
  }
}
