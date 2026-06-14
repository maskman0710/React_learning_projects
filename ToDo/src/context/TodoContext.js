import {createContext,useContext} from 'react';

export const Todocontext = createContext({
    todos : [{
        id : 1,
        todo : "todo msg",
        completed : false
    }],
    addTodo : (todo) => {},
    updateTodo : (id , todo) => {},
    deletetodo : (id) => {},
    togglecomplete : (id) => {}
})

export const Usetodo = () =>{
    return useContext(Todocontext)
}

export const TodoProvider = Todocontext.Provider
