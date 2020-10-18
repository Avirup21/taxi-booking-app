const driverReducer = (state = [], action) => {
    switch(action.type) {
        case 'DRIVER_LIST' : {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}
export default driverReducer