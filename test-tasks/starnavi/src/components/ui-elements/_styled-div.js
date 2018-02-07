import React from 'react'
import PropTypes from 'prop-types'

const StyledDiv = ({className, children}) => <div className={className}>{children}</div>

StyledDiv.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default StyledDiv