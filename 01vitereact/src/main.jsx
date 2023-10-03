import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){

    const username = "chai aur code"
    return(
        <div>
           this is {username}
        </div>
    )
}

const ReactElement = React.createElement(
    "a",
    {href: "https://google.com"},
    "visit teh google"
) 

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <MyApp />
  
)
