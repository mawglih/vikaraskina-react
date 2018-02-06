const initialState = {
    data: []
}
const lang =  (state = initialState, action) => {
    switch(action.type) {
        case 'LANG':
        return {
            ...state,
            data: [...state.data, {
                text: action.text
            }]
        }

        default: 
        return state
    }
}
export default lang;