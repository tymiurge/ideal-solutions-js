import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
}

const defaultProps = {
    label: '',
    checked: false,
    disabled: false
}

const CheckboxItem = props => (
    <div className="item">
        <div className="checkboxField">
            <label>
                <input type="checkbox" checked={props.checked} disabled={props.disabled} /> 
                <span>{props.label}</span>
            </label>
        </div>
    </div>
)

CheckboxItem.propTypes = propTypes
CheckboxItem.defaultProps = defaultProps

export default CheckboxItem
