import React from 'react'
import PropTypes from 'prop-types'
import StyledDiv from './_styled-div'

const propTypes = {
    fluid: PropTypes.bool
}

const defaultProps = {
    fluid: false
}

const Container = props => 
    <StyledDiv className={props.fluid ? 'fluid-container' : 'fixed-container'}>
        {props.children}
    </StyledDiv>

Container.propTypes = propTypes
Container.defaultProps = defaultProps

export default Container
