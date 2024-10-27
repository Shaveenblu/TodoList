import React, {useState} from 'react'
import './App.css'
// import axios to make http request
import axios from 'axios'

function Create() {
    // use state hook were used to store the value in the input field
    const [task, setTask] = useState()
    const handleAdd = () => {
        // route
        axios.post('http://localhost:3001/add', {task: task})
        .then(result => 
          location.reload()
        )
        .catch(err => console.log(err))
    }
  return (
    <div>
        
        <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)}/>

        <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create