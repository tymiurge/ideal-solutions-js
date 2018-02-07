import * as api from './../api'
const LIST_RECEIVED = 'list/received'
const FORM_DELETED = 'list/delete/form'

const list = (state = [], action) => {
    switch (action.type) {
        case LIST_RECEIVED:
            return action.list
        case FORM_DELETED:
            return state.filter(form => form.id !== action.formId)
        default:
            return state
    }
}

export default list

// ACTIONS 

export const fetchForms = () => dispatch => {
    api.fetchFormsList().then(list => {
        dispatch({
            type: LIST_RECEIVED,
            list
        })
    })
}

export const deleteForm = formId => ({
    type: FORM_DELETED,
    formId
})