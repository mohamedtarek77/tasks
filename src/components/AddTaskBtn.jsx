import React from 'react'

import Link from 'next/link'


const AddTaskBtn = () => {
  return (
    
    <div>

        <button><Link href="/AddTask">Add Task</Link></button>
    </div>
  )
}

export default AddTaskBtn