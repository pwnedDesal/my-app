import { useState } from 'react';

import TaskRow from './components/TaskRow'

import ButtonOutlined from './components/ButtonOutlined'
import InputField from './components/InputField'

const Todos = () => {

  const initTask = {
    name: '',
    status: ''    
  }

  const [tasks, setTasks] = useState([
    {name: "eat", status: "pending"},
    {name: "code", status: "pending"},
    {name: "sleep", status: "done"},    
  ])

  const [task, setTask]= useState({...initTask})

  const addTask = () => {
    const tasksCopy = [...tasks]
    tasksCopy.push(task)

    setTask(initTask)
    setTasks(tasksCopy)
  }

  const deleteTask = (task) => {

    const i = tasks.indexOf(task)

    const tasksCopy = [...tasks]
    tasksCopy.splice(i,1)

    setTasks(tasksCopy)

  }

  const markDone = (markTask) => {

    const i = tasks.indexOf(markTask)

    const tasksCopy = [...tasks]
    tasksCopy[i].status = "done"

    setTasks(tasksCopy)    

  }

  const handleChange = (e) => {
    const newTask = {
      name: e.target.value,
      status: "pending"
    }
    setTask(newTask)
  }

  const pendingTasks = tasks
    .filter(task => task.status === "pending")
    .map((task, i) => 
      <TaskRow task={task} markDone={markDone} deleteTask={deleteTask} key={i} />
  )

  const doneTasks = tasks
    .filter(task => task.status === "done")
    .map((task, i) => 
      <TaskRow task={task} markDone={markDone} deleteTask={deleteTask} key={i} />
  )

  return (
    <div>
      <p className="mt-20 text-2xl text-center">Todos App</p>
      <div className="rounded-lg w-3/4 mx-auto mt-10 flex">
        <div className="bg-gray-800 rounded-lg w-1/3 mr-2 p-3 text-center">
          <p className="mb-2">New Task</p>
          <InputField
              className=""
              type="text"
              label="Task Name"
              name="task"
              value={task.name}
              onChange={handleChange}
          />
          <ButtonOutlined className="mt-4" onClick={addTask}>
            +Add Task
          </ButtonOutlined>
        </div>
        { pendingTasks.length > 0
          ?
          <div className="bg-gray-800 rounded-lg w-1/3 mr-2 p-3">
            <table className="w-full border-collapse border border-green-800">
              <thead>
                <tr><th colSpan="2" className="border border-green-600 py-3">Pending Tasks</th></tr>
              </thead>
              <tbody>
                {pendingTasks}
              </tbody>
            </table>
          </div>
          :
          <p className="bg-gray-800 rounded-lg w-1/3 mr-2 p-3 text-center align-middle pt-14">NO PENDING TASKS</p>
        }
        { doneTasks.length > 0
          &&
          <div className="bg-gray-800 rounded-lg w-1/3 p-3">
            <table className="w-full border-collapse border border-green-800">
              <thead>
                <tr><th colSpan="2" className="border border-green-600 py-3">Done Tasks</th></tr>
              </thead>
              <tbody>
                {doneTasks}
              </tbody>
            </table>
          </div>
        } 
      </div>
    </div>
  )

}

export default Todos