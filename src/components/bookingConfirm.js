import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
// import Col from 'react-bootstrap/Col'
import MdConfirmTable from './MdConfirmTable'
import {startGetList} from '../actions/driverAction'

class BookingConfirm extends React.Component{
    constructor(){
        super()
        this.state={
              name:'',
              pickupTime:'',
              price:''
        }
    }
    componentDidMount(){
        this.props.dispatch(startGetList())
    }
    handleBack=()=>{
        const redirect=()=>{
            this.props.history.push('/driver')
        }
        redirect()
    }
    handleReciept=(id)=>{
        console.log('id',id)
        this.setState({id})
       
        const redirect=()=>{
            this.props.history.push(`/driver/${id}`)
        }
        redirect()
       
       
    }
    render(){     
        // console.log('this.props.faculty',this.props.faculty)
        return(
            <div>
                <div align='left'>
                 <Button variant='contained' color='primary' onClick={this.handleBack}>Back</Button>
                </div>
                <div align='center'>
                <h2>Booking Confirmation List</h2><br/>
                </div>
                    <MdConfirmTable data={this.props.driver} handleConfirm={this.handleReciept} />
            </div>
        )
    }
}
const mstp=(state)=>{
    return{
        driver:state.drivers
        // viewCust : state.viewCust
        // id:state.id,

    }
}
export default connect(mstp)(BookingConfirm)
