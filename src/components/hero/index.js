import React from 'react'

export default function index({children,hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}

index.defaultProps = {
    hero: "defaultHero"
}
