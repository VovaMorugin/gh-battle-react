import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function isAuthed() {
    return true
}

class App extends React.Component {
    render() {
        const authed = isAuthed()

        const name = 'Vladimir'
        return (
            <div>
                <h1>
                    {
                        authed === true 
                        ? <h1>Welcome back!</h1>
                        : <h1>Login to see your dashboard</h1>
                    }


                </h1>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)