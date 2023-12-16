import React from 'react'

const Submit = ({ text, className }) => {
    return (
        <button type='submit' className={className}>{text}</button>
    )
}

export default Submit