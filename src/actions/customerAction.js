import axios from 'axios'

//Set courses
export const setCustomerList = (customer) => {
    return { type: 'CUSTOMER_LIST', payload: customer }
}
// export const setCourseList = (id) => {
//     return {type:'COURSE_LIST',payload:id}
// }

export const setDeleteCourses = (id) => {
    return {type:'DELETE_COURSES',payload:id}
}

// Get list of customer booking
export const startGetCustomerList = () => {
    
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.get('http://localhost:3055/api/list',{
            headers: {
                'Authorization': `${token}`
              }
        })
            .then((response) => {
                const customerlist = response.data
                console.log('response of customer list',customerlist) 
                dispatch(setCustomerList(customerlist))
            })
    }
}

export const startGetCustomer= (formData) => {
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.post(`http://localhost:3055/api/customers`,formData,{
            headers: {
                'Authorization': ` ${token}`
              }
        })
            .then((response) => {
                const customer = response.data
                console.log('Customer Booking',customer) 
                // dispatch(setCustomers(customers))
            })
    }
}

//Get courses
// export const startGetTenants = () => {
    
//     const token = localStorage.getItem("token")
//     console.log(token)
//     return (dispatch) => {
//         axios.get('http://localhost:3055/api/mytenant',{
//             headers: {
//                 'Authorization': `${token}`
//               }
//         })
//             .then((response) => {
//                 const TenantList = response.data
//                 console.log('response of tenants',TenantList) 
//                 dispatch(setTenants(TenantList))
//             })
//     }
// }
//Delete a course
export const startGetDeleteCourse = (id) => {
    console.log('id',id)
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.delete(`http://localhost:3065/api/faculty/${id}`,{
            headers: {
                'Authorization': `${token}`
              }
        })
            .then((response) => {
                const CourseD = response.data
                console.log('delete a course',CourseD) 
                dispatch(setDeleteCourses(CourseD))
            })
    }
}