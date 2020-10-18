import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import {startGetDriver} from '../actions/driverAction'
import CardContent from '@material-ui/core/CardContent'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
// import {startGetProperty} from '../actions/propertyAction'
// import {startGetTenants} from '../actions/tenantAction'

const divStyle = {
   
      marginRight: '-696px',
       
    };


class DriverBook extends React.Component{
    constructor(){
        super()
        this.state={
            userId:'',
            customerId:'',
            name:'',
            price:'',
            pickupTime:''  
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
     }
     
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            customerId:this.state.customerId,
            name:this.state.name,
            price:this.state.price,
            pickupTime:this.state.pickupTime
        }
        console.log(formData)
        this.props.dispatch(startGetDriver(formData))
        this.setState({
            customerId:'',
            name:'',
            price:'',
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
        const customers= Object.keys(this.props.customer).length!=0 &&
            this.props.customer.map((ele)=>{
                return( 
                    <option value={ele._id} >{ele.name}</option>
                )
            })  
        return(
            <div>
                <div align='left'>
                 <Button variant='contained' color='primary' onClick={this.handleBack}>Back</Button>
                </div>
                  <div align='right'><h5>{this.props.userAccnt.username}</h5> </div>
                 <form align='right'>
                    <Link to={`/confirmbooking`}>Booking Details</Link>
                </form>
                <Card variant='outlined'>
                <CardContent>
                <form align='center'>
                    <h2>Confirm Booking</h2><br/>
                    <div className="row" style={{ marginTop: 20,marginRight:-90 }}>
                    <div className="col-sm-4"  >
                             <div className="form-group " align='center'>
                    <label className="required" style={divStyle}>User Name</label>
                         <select name="customerId" style={divStyle} onChange={this.handleChange}  className="form-control" >
                            <option value=''>Select</option>
                            {customers}
                         </select>
                         </div>
                         </div>
                        </div>
                      <TextField
                    id="standard-username-input"
                    label="Driver Name"
                    type="text"
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                    /><br/>
                     <TextField
                    id="standard-username-input"
                    label="Pickup Time"
                    type="text"
                    name='pickupTime'
                    value={this.state.pickupTime}
                    onChange={this.handleChange}
                    /><br/>
                    <TextField
                    id="standard-mobile-input"
                    label="Price"
                    type="number"
                    name='price'
                    value={this.state.price}
                    onChange={this.handleChange}
                    /><br/><br/>
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                              Confirm
                       </Button>
                    </form>
                </CardContent>
                </Card>
               

                    
            </div>
        )
    }
}
const mstp=(state)=>{
    return{
        customer:state.customers,
        userAccnt:state.userAccnt
        // propertiesAccnt:state.properties
    }
}
export default connect(mstp)(DriverBook)