import React from 'react';

function FormField({ name, label, type, value, onChange }) {
    const CustomTag = type === "textarea" ? "textarea" : "input";
    return (
        <div>
            <label>
                {label}
                <CustomTag
                    type={type}
                    name={name}
                    className="mt-1 input"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

export default FormField;