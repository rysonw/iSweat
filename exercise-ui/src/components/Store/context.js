import React from 'react'


const context={
    exercise:[]
}

function Store(){
    const ThemeContext=React.createContext(context)
    return ThemeContext
}



export default Store;