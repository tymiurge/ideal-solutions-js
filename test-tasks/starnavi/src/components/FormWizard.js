import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchFormData } from './../reducers/loadedForm'
import { Layout, Container } from './ui-elements'
import UserForm from './UserForm'

const propTypes = {
    formDetails: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    onPageMount: PropTypes.func.isRequired
}

class FormWizard extends React.Component {
    
    componentDidMount () {
        this.props.onPageMount(this.props.match.params.id * 1)
    }

    render () {
        const { formDetails, data } = this.props
        return (
            <Layout fixedHeader={true}>
                <Layout.Header>
                    <a href="/">Home</a>
                </Layout.Header>
                <Layout.Content>
                    <Container>
                        {
                            // to avoid displaying "not found" instead of image
                            Object.getOwnPropertyNames(formDetails).length !== 0 &&
                            <UserForm 
                                name={formDetails.name}
                                description={formDetails.description}
                                imageUrl={formDetails.image}
                                items={data}
                            />
                        }
                        
                    </Container>
                </Layout.Content>
            </Layout>
        )
    }
}

FormWizard.propTypes = propTypes

const mapStateToProps = state => {
    const { formDetails, data } = state.loadedForm
    return {
        formDetails,
        data
    }
}

const mapDispatchToProps = dispatch => ({
    onPageMount: id => { dispatch(fetchFormData(id)) }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormWizard)
