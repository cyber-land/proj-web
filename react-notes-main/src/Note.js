export default class Note {
  constructor(title, body, date) {
    this.title = title
    this.body = body
    this.date = date
  }
  static makeAndCorrect(title, body, date) {
    let d = date;
    if (!date) { d = new Date(Date.now()).toISOString().substring(0, 10) }
    //if (!title) t = d
    return new Note(title, body, date)
  }
}