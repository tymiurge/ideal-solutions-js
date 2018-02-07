import React from 'react'
import PropTypes from 'prop-types'
import LayoutContent from './content'
import LayoutHeader from './header'


const propTypes = {
    fixedHeader: PropTypes.bool,
    children: PropTypes.node
}

const defaultProps = {
    fixedHeader: false
}

const Layout = props => {
    const {fixedHeader} = props
    const layoutOptions = {
        fixedHeader     
    }
    return (
        <React.Fragment>
            {
                React.Children.map(props.children, child => React.cloneElement(child, {layoutOptions}))
            }
        </React.Fragment>    
    )
}

Layout.Header = LayoutHeader
Layout.Content = LayoutContent

Layout.propTypes = propTypes
Layout.defaultProps = defaultProps

export default Layout
