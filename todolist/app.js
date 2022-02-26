class Todo {
  constructor(body, isDone = false) {
    this.body = body
    this.isDone = isDone
  }
}
document.getElementById('newTodo').onkeydown = function(e){
  if(e.key === 'Enter'){
    const newTodo = document.getElementById("newTodo")
  todolist.push(new Todo(newTodo.value))
  refreshList();
  }
};
function refreshList() {
  const app = document.getElementById("list")
  function CreateTodo(todo, key) {
    return (
      <li key={key.key}>
        <button className="uk-button" onClick={function(){todolist.splice(key.key, 1); refreshList()}} uk-icon="icon: check"></button>
        <button className="uk-button" onClick={function(){todolist.splice(key.key, 1); refreshList()}} uk-icon="trash"></button>
        {todo.todo.body}
      </li>
    )
  }
  function For() {
    const arr = []
    todolist.forEach((element, index) => {
      arr.push(<CreateTodo todo={element} key={index} />)
    })
    return (<ul className="uk-list uk-list-divider" id="todoList">{arr}</ul>)
  }
  ReactDOM.render(<For />, app)
}

const todolist = []
todolist.push(new Todo("vecchio oggetto"))
todolist.push(new Todo("nuovo oggetto"))
refreshList()