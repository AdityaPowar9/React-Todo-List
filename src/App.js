import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  let [todolist, setTodolist] = useState([])

  let saveToDoList = (event) => {
    let toname = event.target.toname.value;

    if (!todolist.includes(toname)) {
      let finalDolist = [...todolist, toname]
      setTodolist(finalDolist)
    }
    else {
      alert("already exists")
    }

    event.preventDefault()
  }

  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems value={value}  key={index} indexNumber={index} 
      todolist={todolist}
      setTodolist={setTodolist}
      />

    )
  })
  return (
    <div className="App">
      <h1>To-do List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name='toname' /> <button>save</button>

      </form>

      <div className="outerDiv">
        <ul>
          {list}
        </ul>
      </div>
            <ToastContainer />

    </div>
  );
}

export default App;

function ToDoListItems({ value,indexNumber,todolist,setTodolist }) {
  let[status,setStatus]=useState(false)
  let deleteRow=()=>{
    let finalData= todolist.filter((v,i)=>i!=indexNumber)
    setTodolist(finalData)
     toast.info(` ${value}  deleted`);
     
  }
  let checkstatus=()=>{
      setStatus(!status)
  }
  return (
    <li className={(status)? "completetodo":""} onClick={checkstatus}>{indexNumber+1}  {value} <span onClick={deleteRow}>&times;</span></li>

  )
}