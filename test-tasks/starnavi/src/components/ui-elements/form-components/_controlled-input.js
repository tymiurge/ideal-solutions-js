import React from 'react'
import FormItemWrapper from './_form-item-wrapper'
import PropTypes from 'prop-types'

const propTypes = {
    numbersOnly: PropTypes.bool.isRequired,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    onValueChange: PropTypes.func
}

const defaultProps = {
    disabled: false,
    placeholder: '',
    value: '',
    onValueChange: () => {}
}

class ControlledInput extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            value: this.props.value
        }
    }

    inputChangeHandler = newValue => {
        if (this.props.numbersOnly) {
            const isInt = newValue === '' || Number.isInteger(newValue * 1)
            if (!isInt) return
        }
        this.setState(
            Object.assign({}, this.state, {value: newValue}),
            this.props.onValueChange(newValue)
        )
    }

    render () {
        return (
            <FormItemWrapper>
                <label>{this.props.label}</label>
                <div className="input">
                    <input 
                        type="text" 
                        disabled={this.props.disabled} 
                        value={this.state.value}
                        onChange={(e) => this.inputChangeHandler(e.target.value)}
                    />
                </div>    
            </FormItemWrapper>
        )
    }
}

ControlledInput.propTypes = propTypes
ControlledInput.defaultProps = defaultProps

export default ControlledInput
