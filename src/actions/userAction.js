
import axios from 'axios'

//Set UserAccount
export const setUserAccnt = (userAccnt) => {
    return { type: 'SET_USERACCNT', payload: userAccnt }
}

//Register Users
export const startGetUsers=(formData)=>{
    return(dispatch)=>{
        axios.post('http://localhost:3055/api/users/register',formData)
        .then((response)=>{
            const users=response.data
            console.log('user register',users)
        })
    }
}
//Login User
export const startGetLoginUser=(formData)=>{
    const token=localStorage.getItem('token')
    return(dispatch)=>{
        axios.post('http://localhost:3055/api/users/login',formData)
        .then((response)=>{
            const user=response.data
            const token1=user.token
            console.log('login user',user)
            localStorage.setItem('token',user.token)

            axios.get('http://localhost:3055/api/users/account',{
                headers: {
                    'Authorization': `${token1}`
                }
                  })
                  
                .then((response) => {
                    const userAccnt = response.data
                    console.log('userAccnt',userAccnt) 
                    dispatch(setUserAccnt(userAccnt))
                    
                })
        })
    }
}
//Get user Account
export const startGetAccount = () => {
    // console.log(formData)
    const token = localStorage.getItem('token')
    console.log('localStorage',localStorage)
    // console.log('token',token)
    return (dispatch) => {
        axios.get('http://localhost:3055/api/users/account',{
            headers: {
                'Authorization': `${token}`
            }
              })
              
            .then((response) => {
                const userAccnt = response.data
                console.log('userAccnt1',userAccnt) 
                dispatch(setUserAccnt(userAccnt))
                
            })
    }
}