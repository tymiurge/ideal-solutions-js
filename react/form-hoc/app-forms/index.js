import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import formHoc, { Field } from './../react-form-hoc'

const CompanyForm = props => {
  return (
    <div>
      <Form>
        <Field 
          name='super name!!!!' 
          onChange={{
            listenTo: 'onChange',
            valueExtractor: (...args) => {
              return args[0].target.value
            }
          }}
          onBlurValidation={{
            listenTo: 'onBlur',
            validationField: 'error',
            negative: true,
            rules: [
              {func: value => {
                console.log(`value in func= ${value}`)
                const failed = value === undefined || value === ''
                console.log(`failed in func = ${failed}`)
                return !failed
              }
                , error: 'Value must not be empty'}
            ]
          }}
          
        >
          <Form.Input label='Name' />
        </Field>
      </Form>
      <Button style={{marginTop: '5px'}}>Submit</Button>
    </div>
  )
}



export default formHoc(CompanyForm)