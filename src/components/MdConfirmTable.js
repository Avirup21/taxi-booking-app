import React from 'react'
import {MDBDataTableV5} from 'mdbreact'
import moment from 'moment'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button'

const MdConfirmTable=(props)=>{
    const data={
        columns:[
            {
                label:'Sl No',
                field:'slno',
                // sort:'asc'
            },
            {
                label:'Customer Id',
                field:'customerId'
            },
            {
                label:'Driver Name',
                field:'name'
            },
            {
                label:'Pickup Time',
                field:'pickupTime'
            },
            {
                label:'Price',
                field:'price'
            },
            
        ],
        rows:props.data.map((ele,i)=>{
            return{
                slno:i+1,
                customerId:ele.customerId,
                name:ele.name,
                pickupTime:ele.pickupTime,
                price:ele.price,
    
                
            }
        })
    }
    return <MDBDataTableV5  searchTop searchBottom={false} data={data}/>
}
export default MdConfirmTable