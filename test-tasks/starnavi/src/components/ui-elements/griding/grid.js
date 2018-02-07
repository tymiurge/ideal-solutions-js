import React from 'react'
import PropTypes from 'prop-types'
import StyledDiv from './../_styled-div'


const Grid = props => <div>{props.children}</div>

const GridColumn = props => <StyledDiv className={'column column-' + props.width}>{props.children}</StyledDiv>
GridColumn.propTypes = {
    width: PropTypes.number.isRequired
}

const GridRow = props => <StyledDiv className='row'>{props.children}</StyledDiv>

Grid.Column = GridColumn
Grid.Row = GridRow

export default Grid
