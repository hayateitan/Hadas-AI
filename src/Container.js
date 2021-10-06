import React from 'react'
import NavAicon from './navAicon/NavAicon'
const Container = ({ children }) => {
    return (
        <div>
            <NavAicon></NavAicon>
            {children}
        </div>
    )
}

export default Container
