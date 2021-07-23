const TaskRow = ({ task, markDone, deleteTask }) => {

    const {name, status } = task

    return (
      <tr>
        <td className="w-1/2 border border-green-600 text-center">
          {name}
        </td>
        <td className="border border-green-600 text-center">
          { status === "pending" &&
            <button className="mt-2 mr-2" onClick={() => markDone(task)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          }
          <button className="mt-2 mr-2" onClick={() => deleteTask(task)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </td>
      </tr>
    )

}

export default TaskRow