import list from './forms-list'
import loadedForm from './loadedForm'

const reducer = (state = {}, action) => ({
    list: list(state.list, action),
    loadedForm: loadedForm(state.formData, action)
})
  
export default reducer
  