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

<<<<<<< HEAD
export const TodoProvider = Todocontext.Provider
=======
export const todoprovider = Todocontext.Provider
>>>>>>> a7e35a2eb8bbab93b8c1372c23714dcfb6063852
