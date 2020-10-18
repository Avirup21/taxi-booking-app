import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import SweetAlert from 'react-bootstrap-sweetalert'
import {startGetAccount} from '../actions/userAction'
import {startGetCustomer} from '../actions/customerAction'

class Customer extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            origin:'',
            destination:'',
            pickupTime:'',
            flagS:false,
            flagE:false  
        }
    }
    componentDidMount(){
            this.props.dispatch(startGetAccount())
        }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
     }
     onRecieveInput=()=>{
        this.setState({ flagE : false , flagS : false })
        const redirect=()=>{
            this.props.history.push('/')
        }
        redirect()

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            origin:this.state.origin,
            destination:this.state.destination,
            pickupTime:this.state.pickupTime
        }
        console.log(formData)
        if( this.state.name == "" || this.state.origin == "" || this.state.destination == "" ||
        this.state.pickupTime == "" ){

            this.setState({ flagE : true })
        }
        else{

            this.setState({ flagS : true })
        }
        this.props.dispatch(startGetCustomer(formData))
        this.setState({
            name:'',
            origin:'',
            destination:'',
            pickupTime:''
        })
    }
    handleBack=()=>{
        const redirect=()=>{
            this.props.history.push('/')
        }
        redirect()
    }
    render(){
        // console.log('Customer Component',this.props.userAccnt)
        // console.log('Cust Ls',localStorage)
        return(
            <div>
                <div align='left'>
                 <Button variant='contained' color='primary' onClick={this.handleBack}>Back</Button>
                </div>
                  <div align='right'><h5>{this.props.userAccnt.username}</h5> </div>
                <Card variant='outlined'>
                <CardContent>
                <form align='center'>
                    <h2>Book a Ride</h2><br/>
                    <TextField
                    id="standard-username-input"
                    label="Name"
                    type="text"
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                    /><br/>
                     <TextField
                    id="standard-username-input"
                    label="Origin"
                    type="text"
                    name='origin'
                    value={this.state.origin}
                    onChange={this.handleChange}
                    /><br/>
                     <TextField
                    id="standard-username-input"
                    label="Destination"
                    type="text"
                    name='destination'
                    value={this.state.destination}
                    onChange={this.handleChange}
                    /><br/>
                     <TextField
                    id="standard-username-input"
                    label="Pickup Time"
                    type="text"
                    name='pickupTime'
                    value={this.state.pickupTime}
                    onChange={this.handleChange}
                    /><br/><br/>
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                              Book
                       </Button>
                       <SweetAlert 
                    success
                    title="Success Data!"
                    show={this.state.flagS}
                    onConfirm={(response) => this.onRecieveInput(response)}>
                       Successfully Booked!!!!!!!
                    
                    </SweetAlert>

                    <SweetAlert
                        error
                        title="Error Data!"
                        show={this.state.flagE}
                        onConfirm={(response) => this.onRecieveInput(response)}>
                    Please Enter all the required fields !!! 
                    </SweetAlert>
                    </form>
                </CardContent>
                </Card>
               

                    
            </div>
        )
    }
}
const mstp=(state)=>{
    return{
        userAccnt:state.userAccnt
    }
}
export default connect(mstp)(Customer)