import React from 'react' 
import PropTypes from 'prop-types'

const propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string
}

const FormHeader = ({name, description, imageUrl}) => (
    <div className="header">
        <div>
            <div>{name}</div>
            <div className="description">
                {description}
            </div>
        </div>
        <div className="thumb">
            <img src={imageUrl} alt="not found" />
        </div>
    </div>
)

FormHeader.propTypes = propTypes

export default FormHeader
