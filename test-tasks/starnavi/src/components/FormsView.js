import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchForms, deleteForm } from './../reducers/forms-list'
import { chunk } from './../helpers'
import { Layout, Grid } from './ui-elements'
import Card from './Card'

const propTypes = {
    data: PropTypes.array,
    onPageMount: PropTypes.func,
    onFormDelete: PropTypes.func,
    history: PropTypes.object.isRequired
}

class FormsView extends React.Component {

    componentDidMount () {
        this.props.onPageMount()
    }

    navigateToFormDetails = id => {
        this.props.history.push(`/form/${id}`)
    }

    renderCards = data => {
        const dataByRows = chunk(data, 4)
        return dataByRows.map((row, idx) => (
            <Grid.Row key={`_row_${idx}`}>
                {
                    row.map(({id, name, description, image}, formIdx) => (
                        <Grid.Column key={`_${idx}_${formIdx}`} width={3}>
                            <Card
                                id={id}
                                name={name}
                                description={description}
                                imageUrl={image}
                                onDeleteClick={this.props.onFormDelete}
                                onViewClick={this.navigateToFormDetails}
                            />
                        </Grid.Column>
                    ))
                }
            </Grid.Row>
        ))
    }

    render () {
        return (
            <Layout fixedHeader={true}>
                <Layout.Header>
                    <a href="/">Home</a>
                </Layout.Header>
                <Layout.Content>
                    <Grid>
                        { this.renderCards(this.props.data) }
                    </Grid>
                </Layout.Content>
            </Layout>
        )
    }
}

FormsView.propTypes = propTypes

const mapStateToProps = state => ({
    data: state.list
})

const mapDispatchToProps = dispatch => {
    return {
        onPageMount: () => { dispatch(fetchForms()) },
        onFormDelete: id => { dispatch(deleteForm(id)) }
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(FormsView)
)


