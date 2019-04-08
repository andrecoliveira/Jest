import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../App.css'

class Login extends Component {    
    
    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
        username: PropTypes.string.isRequired
    }

    render() {
        const { isLoggedIn, username } = this.props
        return (
            <div className="App">
            <header className="App-header">
                {
                    isLoggedIn 
                    ? <p>Olá {username}, esse é o nosso Dashboard.</p>
                    : <p>Sign in to continue.</p>
                }
            </header>
            </div>
        )
    }
}

export default Login
