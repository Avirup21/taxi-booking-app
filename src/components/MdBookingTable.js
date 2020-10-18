import React from 'react'
import {MDBDataTableV5} from 'mdbreact'
import moment from 'moment'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button'

const MdBookingTable=(props)=>{
    const data={
        columns:[
            {
                label:'Sl No',
                field:'slno',
                // sort:'asc'
            },
            {
                label:'Name',
                field:'name'
            },
            {
                label:'Origin',
                field:'origin'
            },
            {
                label:'Destination',
                field:'destination'
            },
            {
                label:'Pickup Time',
                field:'pickupTime'
            },
            {
                label:'Created At',
                field:'created_at'
            },
            {
                label:'Confirm Booking',
                field:'confirm'
            }
        ],
        rows:props.data.map((ele,i)=>{
            return{
                slno:i+1,
                name:ele.name,
                origin:ele.origin,
                destination:ele.destination,
                pickupTime:ele.pickupTime,
                created_at:moment(ele.created_at).fromNow(),
                confirm:<Button  variant="contained" color="primary" onClick={function(){
                    props.handleConfirm(ele._id)
                }}>Confirm</Button>
                
            }
        })
    }
    return <MDBDataTableV5  searchTop searchBottom={false} data={data}/>
}
export default MdBookingTable