import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from '../Components/App'

ReactDOM.hydrate(
    <App />,
    document.getElementById('app-content')
)