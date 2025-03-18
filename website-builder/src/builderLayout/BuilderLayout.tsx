import React from 'react'

interface BuilderLayoutProps {
    children: React.ReactNode
}

const BuilderLayout = ({ children }: BuilderLayoutProps) => {
    return (
        <div>{children}</div>
    )
}

export default BuilderLayout