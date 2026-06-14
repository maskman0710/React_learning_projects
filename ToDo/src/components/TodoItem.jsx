import React, { useState } from 'react';
import { useTodo } from '../context/index';
function TodoItem({ todo }) {
    const [istodoedible,settodoedible] = useState(false)
    const [todomessage,settodomessage] = useState(todo.todo) 
    const {updateTodo,deleteTodo,toggleComplete} = useTodo

    const edittodo = ()=>{
        updateTodo (todo.id,{...todo,todo:todomessage})
        settodoedible(false)
    }
    const togglecompleted  = () =>{
        toggleComplete(todo.id)
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleComplete}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    istodoedible ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todomessage}
                onChange={(e) => settodomessage(e.target.value)}
                readOnly={!istodoedible}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (istodoedible) {
                        edittodo();
                    } else settodoedible((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {istodoedible ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
