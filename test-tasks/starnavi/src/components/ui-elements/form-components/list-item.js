import React from 'react' 
import PropTypes from 'prop-types'
import FormItemWrapper from './_form-item-wrapper'

const propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.array.isRequired
}

const ListItem = props => (
    <FormItemWrapper>
        <label>{props.label}</label>
        <ul className="list">
            { 
                props.value.map((item, idx) => (
                    <li className="list-item" key={`_${item.text}_${idx}`}>{item.text}</li>
                ))
            }
        </ul>
    </FormItemWrapper>
)

ListItem.propTypes = propTypes

export default ListItem
