import axios from 'axios'

export const setDrivers = (driverlist) => {
    return {type:'DRIVER_LIST',payload:driverlist}
}

export const startGetList = () => {
    
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.get('http://localhost:3055/api/myDriver',{
            headers: {
                'Authorization': `${token}`
              }
        })
            .then((response) => {
                const DriverList = response.data
                console.log('response of drivers',DriverList) 
                dispatch(setDrivers(DriverList))
            })
    }
}

export const startGetDriver= (formData) => {
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.post(`http://localhost:3055/api/driver`,formData,{
            headers: {
                'Authorization': ` ${token}`
              }
        })
            .then((response) => {
                const driver = response.data
                console.log('Driver ',driver) 
                // dispatch(setCustomers(customers))
            })
    }
}
