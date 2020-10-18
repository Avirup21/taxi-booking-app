const customerReducer = (state = [], action) => {
    switch(action.type) {
        case 'CUSTOMER_LIST' : {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}
export default customerReducer