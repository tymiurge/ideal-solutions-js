import React from 'react'
import StyledDiv from './../_styled-div'
import FormHeader from './_form-header'
import ListItem from './list-item'
import NumberInputItem from './number-input-item'
import StringInputItem from './string-input-item'
import TextareaItem from './textarea-item'
import CheckboxItem from './checkbox-item'


const Content = props => <StyledDiv className="content">{props.children}</StyledDiv>

const Form = props => 
    <StyledDiv className="form">
        {props.children}
    </StyledDiv>

Form.Header = FormHeader
Form.Content = Content
Form.ListItem = ListItem
Form.NumberItem = NumberInputItem
Form.StringItem = StringInputItem
Form.TextareaItem = TextareaItem
Form.CheckboxItem = CheckboxItem

export default Form

