import React from 'react'
import StyledBox from './../_styled-div'

const FormItemWrapper = props => (
    <StyledBox className='item'>
        <StyledBox className='field'>
            {props.children}
        </StyledBox>
    </StyledBox>
)

export default FormItemWrapper
