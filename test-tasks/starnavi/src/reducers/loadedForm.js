import * as api from './../api'

const FORM_LOADED = 'form/data/loaded'
const FORM_UNLOADED = 'form/data/unloaded'

// Reducers

const mainDetails = (state = {}, action) => {
    switch (action.type) {
        case FORM_LOADED:
            return action.formDetails
        case FORM_UNLOADED:
            return {}
        default:
            return state
    }
}

const data = (state = [], action) => {
    switch (action.type) {
        case FORM_LOADED:
            return action.data
        case FORM_UNLOADED:
            return []
        default:
            return state
    }
}

const loadedForm = (state = {}, action) => ({
    formDetails: mainDetails(state.formDetails, action),
    data: data(state.data, action)
})

export default loadedForm

// Actions

/**
 * changing lists format in order to make it 'readable' by FormWizard:
 *  - changing `values` property to `value`
 *  - making the `value` to hold array of {text: value} objects
 * @param {*} data
 */
const _normilizeFormData = data =>
    data.map(model => {
        if (model.type === 'list') {
            const value = model.values.map(item => ({text: item}))
            return Object.assign({}, model, {value})
        }
        return model
    })

export const fetchFormData = id => dispatch => {
    api.getFormDetails(id).then(formDetails => {
        api.fetchFormData(id).then(data => {
            dispatch({
                type: FORM_LOADED,
                formDetails,
                data: _normilizeFormData(data)
            })    
        })
    })
}
