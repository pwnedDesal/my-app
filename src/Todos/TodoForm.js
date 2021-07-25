import { useState } from 'react'

import ButtonOutlined from '../components/ButtonOutlined'
import InputField from '../components/InputField'

const TodoForm = ({addTask}) => {

  const initTask = {
    name: '',
    status: 'pending'    
  }

  const [task, setTask]= useState({...initTask})
  const [invalid, setInvalid] = useState(false)  

  const handleChange = (e) => { // handleChange as a 2-way binding enable you to add additional logic
    const name = e.target.value
    setInvalid(name==="")
    const newTask = {
      name,
      status: 'pending'
    }
    setTask(newTask)
  }

  return (
      <div className="bg-gray-800 rounded-lg w-1/3 mr-2 p-3 text-center">
        <p className="mb-2">New Task</p>
        <InputField
            className=""
            type="text"
            label="Task Name"
            name="task"
            value={task.name}
            onChange={handleChange}
            invalid={invalid}
            invalidMessage="Please enter task name"
        />
        <ButtonOutlined className="mt-4" onClick={() => {
          const isInvalid = task.name===""
          setInvalid(isInvalid)
          if (!isInvalid) {
            addTask(task)
            setTask({...initTask})
          }
        }}>
          +Add Task
        </ButtonOutlined>
      </div>
  )

}

export default TodoForm