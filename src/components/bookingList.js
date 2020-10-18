import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
// import Col from 'react-bootstrap/Col'
import MdBookingTable from './MdBookingTable'
import {startGetCustomerList} from '../actions/customerAction'
// import {startGetDeleteCourse} from '../actions/facultyAction'
// import {startGetUpdateCustomer} from '../actions/customerAction'
// import Form from 'react-bootstrap/Form'

class BookingList extends React.Component{
    constructor(){
        super()
        this.state={
              name:'',
              origin:'',
              destination:'',
              pickupTime:'',
              id:''
        }
    }
    componentDidMount(){
        this.props.dispatch(startGetCustomerList())
    }
    handleBack=()=>{
        const redirect=()=>{
            this.props.history.push('/')
        }
        redirect()
    }
    // handleProperty=(id)=>{
    //     console.log('id1',this.props.id)
    //     this.props.dispatch(startGetTenantProp(id))
    //     const redirect=()=>{
    //         this.props.history.push('/property')
    //     }
    //     redirect()
    // }
    handleConfirm=(id)=>{
        console.log('id',id)
        this.setState({id})
       
        const redirect=()=>{
            this.props.history.push(`/driver/${id}`)
        }
        redirect()
       
       
    }
    // handleViewdetails=(id)=>{
    //     // console.log(id)
    //     this.props.dispatch(startGetCustomer(id))
       
    //     const redirect=()=>{
    //         this.props.history.push(`/ViewCustomer/${id}`)
    //     }
    //     redirect()
    // }
    render(){     
        // console.log('this.props.faculty',this.props.faculty)
        return(
            <div>
                <div align='left'>
                 <Button variant='contained' color='primary' onClick={this.handleBack}>Back</Button>
                </div>
                <div align='center'>
                <h2>List of Bookings</h2><br/>
                </div>
                    <MdBookingTable data={this.props.customer} handleConfirm={this.handleConfirm} />
            </div>
        )
    }
}
const mstp=(state)=>{
    return{
        customer:state.customers
        // viewCust : state.viewCust
        // id:state.id,

    }
}
export default connect(mstp)(BookingList)
