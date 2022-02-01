import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.container}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The Page you are looking for doesn't exist or an other error occured.</p>
        </div>
    )
}

export default Error404
