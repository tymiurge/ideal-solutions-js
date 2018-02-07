import React from 'react'
import StyledDiv from './../_styled-div'

const LayoutContent = props => {
    let contentClasses = "content"
    if (props.layoutOptions.fixedHeader) {
        contentClasses += " top-intend"
    }
    return <StyledDiv className={contentClasses}>{props.children}</StyledDiv>
}

export default LayoutContent
