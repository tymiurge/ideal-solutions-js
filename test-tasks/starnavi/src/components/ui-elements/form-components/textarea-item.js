import React from 'react'
import PropTypes from 'prop-types'
import FormItemWrapper from './_form-item-wrapper'


const propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    onValueChange: PropTypes.func
}

const defalutProps = {
    onValueChange: () => {}
}

class TextareaItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: props.value}
    }

    onChangeHandler = newValue => {
        this.setState(
            Object.assign({}, this.state, {value: newValue}),
            this.props(newValue)
        )
    }

    render () {
        const { props } = this
        return (
            <FormItemWrapper>
                <label>{props.label}</label>
                <div className="input">
                    <textarea
                        disabled={props.disabled}
                        placeholder={props.placeholder}
                        rows="3"
                        value={props.value}
                        onChange={e => this.onChangeHandler(e.target.value)}
                    />
                </div>
            </FormItemWrapper>    
        )
    }
}


TextareaItem.propTypes = propTypes
TextareaItem.defalutProps = defalutProps

export default TextareaItem
