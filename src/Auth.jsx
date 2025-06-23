import React from 'react'

const Auth = (Component) => {
    return function AuthComponent({isLoggedIn, ...props}) {
        if(!isLoggedIn) {
            return <h3>Please log in</h3>
        }
        return <Component {...props} />
    }
}

export default Auth