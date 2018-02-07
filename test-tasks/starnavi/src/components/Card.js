import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './ui-elements'

const propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onViewClick: PropTypes.func.isRequired
}

class Card extends React.Component {
    render () {
        const { name, description, imageUrl } = this.props
        return (
            <div className="card">
                <img src={imageUrl} alt="not found" />
                <div className="header">{name}</div>
                <div className="desc">{description}</div>
                <div className="toolbar">
                    <Button
                        text='View' iconName='info-circle'
                        onClick={()=>{ this.props.onViewClick(this.props.id) }}
                    />
                    <Button
                        text='Delete' iconName='times-circle-o'
                        onClick={()=>{ this.props.onDeleteClick(this.props.id) }}
                    />
                </div>
            </div>
        )
    }
}

Card.propTypes = propTypes

export default Card
