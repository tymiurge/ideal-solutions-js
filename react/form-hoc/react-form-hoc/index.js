import React from 'react'

const FormContext = React.createContext()

const formHoc = Origin => {

  class HOC extends React.Component {

    onFieldChange = (field, value) => {
      console.log('field = ' + field + ', value = ' + value)
    }

    onFieldMount = name => {
      console.log('property recieved = ' + name)
    }//this.setState({...this.state, [name]: undefined})
    
    render() {
      return (
        <FormContext.Provider
          value={{
            onFieldMount: this.onFieldMount,
            onFieldChange: this.onFieldChange
          }}
        >
          <Origin />
        </FormContext.Provider>
      )  
    }
  }

  return HOC
}

export default formHoc

const FormContextConsumer = FormContext.Consumer

class FieldWrapper extends React.Component {

  componentDidMount() {
    console.log('in componentDidMount')
    this.props.onFieldMount(this.props.name)
  }

  state = {
    value: undefined,
    valid: true
  }

  onChange = (...args) => {
    const value = this.props.onChange.valueExtractor(...args)
    this.setState({...this.state, value})
    this.props.onFieldChange(this.props.name, value)
  }

  onBlur = () => {

    const failed = this.props.onBlurValidation.rules.find(rule => !rule.func(this.state.value)) !== undefined
    console.log(`failed in onBlur= ${failed}`)
    //console.log(this.props.onBlurValidation.rules[failedRuleIdx].error)
    this.setState({...this.state, valid: !failed},
      () => console.log(`now valid in state = ${this.state.valid}`)
    )
  }

  _validationFieldToValueMap = () => {
    if (this.props.onBlurValidation.negative) {
      return !this.state.valid
    }
    return this.state.valid
  }

  render() {
    let config = {}
    if (this.props.onChange) {
      config = {...config, [this.props.onChange.listenTo]: this.onChange}
    }
    if (this.props.onBlurValidation) {
      config = {
        ...config, 
        [this.props.onBlurValidation.listenTo]: this.onBlur,
        [this.props.onBlurValidation.validationField]: !this.state.valid
      }
    }
    return (
      React.cloneElement(this.props.field, config)
    )
  }
}

class Field extends React.Component {
  
  
  render() {
    console.log('name ==== ' + this.props.name)
      return (<FormContextConsumer>
        {
          ({onFieldMount, onFieldChange}) => {
            return (<FieldWrapper
              {...this.props}
              field={this.props.children}
              onFieldMount={onFieldMount}
              onFieldChange={onFieldChange}
            />)
          }
        }
      </FormContextConsumer>
      )
  }
}

export { Field }