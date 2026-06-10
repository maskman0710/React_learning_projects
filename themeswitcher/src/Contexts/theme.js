import React,{useContext,createContext} from 'react';

export const ToggleButton = createContext ({

    themeMode: "light",

    darkTheme: () =>{

    },
    lightTheme: () =>{

    }
})

export const Provider = ToggleButton.Provider

export default function themes(){
    return useContext(ToggleButton)
}
