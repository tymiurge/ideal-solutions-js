const URL = 'http://demo4452328.mockable.io/forms'

export const fetchFormsList = () => fetch(URL)
    .then(response => response.json())
    .then(json => json.data)

export const fetchFormData = id => fetch(`${URL}/${id}`)
    .then(response => response.json())
    .then(json => json.data)

export const getFormDetails = id => fetch(URL)
    .then(response => response.json())
    .then(json => {
        const d = json.data.find(formDetails => formDetails.id === id)
        return d
    })
