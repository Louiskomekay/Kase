import React from 'react'

const FormInput = ({ label, name, type, defaultValue }) => {
    return (
        <div className='form-control'>
            {/* Form Label */}
            <label className="label">
                <span>{label}</span>
            </label>
            {/* Form Input */}
            <input
                type={type}
                name={name}
                className='form-input'
                defaultValue={defaultValue}
            />
        </div>
    )
}

export default FormInput