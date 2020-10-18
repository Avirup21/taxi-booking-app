import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
import {startGetUsers} from '../actions/userAction'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import {connect} from 'react-redux'


class UserReg extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:'',
            passwordVisible:false
        }
    }
    handleClickShowPassword=()=>{
       this.setState((prevState)=>{
           return{
            passwordVisible:!prevState.passwordVisible    
           }
       })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password,
        }
        console.log(formData)
        this.props.dispatch(startGetUsers(formData))
        this.setState({
            username:'',
            email:'',
            password:''
        })
        const redirect=()=>{
            this.props.history.push('/')
        }
        redirect()
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleBack=()=>{
        const redirect=()=>{
            this.props.history.push('/')
        }
        redirect()
    }
    render(){
        return(
            <div class='register page'>
                 {/* <form align='right'>
                    <Link to={`/login`}>Sign in</Link>
                </form> */}
                <div align='left'>
                 <Button variant='contained' color='primary' onClick={this.handleBack}>Back</Button>
                </div><br/>
                <Card variant="outlined" >
                <CardContent>
                <form align='center'>
                 <h2>Register</h2>
                    <TextField
                    id="standard-username-input"
                    label="Username"
                    type="text"
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                    /><br/>
                     <TextField
                    id="standard-email-input"
                    label="Email"
                    type="email"
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    /><br/><br/>
                    {/* <Form.Control type="text"  name='username' value={this.state.username} placeholder="Enter your username" onChange={this.handleChange} /> */}
                     <InputLabel htmlFor="standard-adornment-password">
                     Password    
                     </InputLabel><br/>
                    <Input  id="standard-adornment-password"
                    type={this.state.passwordVisible?'text':'password'}
                    autoComplete="current-password"
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            >
                            {this.state.passwordVisible ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                    /><br/><br/>
                        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                              Register
                       </Button>
                </form>
                </CardContent>
                </Card>
            </div>
        )
    }
}
// const mstp=(state)=>{
//     return{
//         user:state.userAccnt
//     }
// }
// export default connect(mstp)(UserReg)
export default connect() (UserReg)