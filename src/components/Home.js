import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { BsPersonFill , BsFileText } from "react-icons/bs"
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'


const imgMyimageexample = require('../images/taxi-img.jpg')
const divStyle = {
//   width: '100%',
//   height: '1000px',
  minHeight: '611px',
  maxWidth: '1415px',
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover',  
  marginRight: '-131px',
    marginLeft: '-131px',
    marginTop: '-16px',
    marginBottom:'-15px'
};


class  FadeMenu extends React.Component {

    constructor(){
        super()
        this.state = {
            anchorEl : null,
            open: false
        }
        this.setAnchorEl = this.setAnchorEl.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
handleClick(event) {
    this.setAnchorEl(event.currentTarget);
}
    setAnchorEl(value){
        this.setState({
            anchorEl: value,
            open: !this.state.open
        })
    }
    handleSignUp=()=>{
        const redirect=()=>{
            this.props.history.push('/register')
        }
        redirect()
    }
    handleSignIn=()=>{
                const redirect=()=>{
                    this.props.history.push('/login')
                }
                redirect()
            }
    handleBooking=()=>{
        const redirect=()=>{
            this.props.history.push('/bookinglist')
        }
        redirect()
    }       
        
    handleCustomer=()=>{
                const redirect=()=>{
                    this.props.history.push('/customer')
                }
                redirect()
            }
    
      handleLogout=()=>{
                window.localStorage.clear()
                console.log('Log Out Local Storage', localStorage)
                window.location.href='/'
            }
      handleClose() {
           this.setAnchorEl(null);
           }

renderMenu(){
  return(
    <div>
        <div align='right'>
        <Button variant="contained" color="secondary" onClick={this.handleBooking}>
                              Booking Details
                       </Button>
        {/* <Link to={`/bookinglist`}>Booking Details </Link> */}
        </div>
         
        {
      Object.keys(this.props.user).length!=0 ?
      (
        <div class='dashboard'align='right'  aria-labelledby="dropdownMenuButton">
           <Menu id="fade-menu" anchorEl={this.state.anchorEl} open={this.state.open} onClose={this.handleClose} > 
                <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                <MenuItem onClick={this.handleCustomer}>Customer</MenuItem>
           </Menu>
         </div>
        
      ):(
        <div class='dashboard1'align='right'  aria-labelledby="dropdownMenuButton">
            <Menu id="fade-menu" anchorEl={this.state.anchorEl} open={this.state.open} onClose={this.handleClose} > 
               <MenuItem onClick={this.handleSignUp}>Sign up</MenuItem>
                <MenuItem onClick={this.handleSignIn}>Sign in</MenuItem>
           </Menu>
    </div>
      )
      }
    </div>
   )
}
render(){
return (
<div style={divStyle} align='center'>
          <h2>Taxi Booking App</h2>
          <div align='center'>
          <Button variant='contained' color='primary' aria-owns={this.state.open ? 'fade-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
               <BsPersonFill/> {this.props.user.username}
         </Button>
      {this.renderMenu()}
          </div>
       </div>
    )
  }

}
const mstp=(state)=>{
        return{
            user:state.userAccnt
        }
    }
export default connect(mstp)(FadeMenu)

