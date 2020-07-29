import React from 'react';

function FormField({ name, label, type, value, onChange }) {
    return (
        <div>
            <label>
                {label}
                <input
                    type={type}
                    name={name}
                    className="mt-1"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

export default FormField;