import React from 'react'

const Message = ({ message, className }) => {
    return (
        <div className="mx-auto container py-6 text-3xl">
            <h1 className={`font-bold ${className}`}>{message}</h1>
        </div>
    )
}

export default Message
