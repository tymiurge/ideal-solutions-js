import React from 'react'

const Button = ({text, iconName, onClick}) => (
    <button onClick={onClick}>
        {
            iconName && 
            <i className={"fa fa-" + iconName}  aria-hidden="true"></i>
        }
        <span>{text}</span>
    </button>
)

export default Button
