import { Checkbox } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import React from 'react';

export const Todo = ({ task, toggleComplete,deleteTodo,editTodo }) => {
  return (
    <div className="border text-[14px] border-gray-200 p-1 rounded-xl shadow-sm flex gap-2 justify-between items-center">
      <Checkbox
        sx={{ color: 'blue', '& .MuiSvgIcon-root': { color: 'blue' } }}
        size="small"
        onClick={() => toggleComplete(task.id)}
        checked={task.completed}
      />
      <div className={`text-left w-full ${task.completed ? 'text-decoration-line: line-through' : ''}`}>
        {task.task}
      </div>
      <EditNoteIcon className="text-blue-500 mr-4" style={{ fontSize: 30 }}
      onClick={() => editTodo(task.id)}
      />
      <DeleteSweepIcon className="text-blue-500 mr-4" style={{ fontSize: 30 }} 
      onClick={() => deleteTodo(task.id)}
      />
    </div>
  );
};
