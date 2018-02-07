import React from 'react'
import PropTypes from 'prop-types'
import { Form } from './ui-elements'


const propTypes = {
    /*
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
       type: PropTypes.oneOf(['list', 'integer', 'double', 'bool', 'string', 'text']),
       label: PropTypes.string,
       value: PropTypes.oneOfType([
           PropTypes.string,
           PropTypes.array,
           PropTypes.bool,
           PropTypes.number
       ]) 
    })).isRequired
    */
}

const itemTypeToComponentMap = {
    list: Form.ListItem,
    integer: Form.NumberItem,
    text: Form.TextareaItem,
    string: Form.StringItem,
    double: Form.StringItem,
    bool: Form.CheckboxItem
}

const UserForm = props => (
    <Form>
        <Form.Header {...props} />
        <Form.Content>
            {
                props.items.map((item, idx) => {
                    const { label, value, type } = item
                    const FormComponent = itemTypeToComponentMap[type]
                    return (
                        <FormComponent
                            key={`_${label}_${idx}`}
                            label={label}
                            value={value} 
                        />
                    )
                })
            }
        </Form.Content>
    </Form>
)

UserForm.propTypes = propTypes

export default UserForm
