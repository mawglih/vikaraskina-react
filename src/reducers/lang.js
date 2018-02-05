const initialState = {
    data: []
}
const lang =  (state = initialState, action) => {
    switch(action.type) {
        case 'LANG':
        return {}

        default: 
        return state
    }
}
export default lang;