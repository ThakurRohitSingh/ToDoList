import React, { useState } from 'react'

export const Todoform = ({addTodo}) => {
  const [value, setValue] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

   addTodo(value)
   setValue("")
  }
  return (
    <>
      <form className="flex justify-center p-3 mt-5"
      onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Choose a task......"
          className="border pl-4 border-gray-200  w-[300px] rounded-l-3xl text-[14px] outline-blue-700"
          onChange={(e)=> setValue(e.target.value)}
        />
        <button className="bg-gradient-to-r text-white rounded-r-3xl w-[140px] from-blue-700 to-blue-600 p-2">
          Add a task
        </button>
      </form>
    </>
  )
}
