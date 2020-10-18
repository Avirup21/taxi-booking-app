import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import Container from 'react-bootstrap/Container'
import UserReg from './components/userReg'
import UserLogin from './components/userLogin'
import Customer from './components/customerBook'
import BookingList from './components/bookingList'
import DriverBook from './components/driverBook'
import BookingConfirm from './components/bookingConfirm'
// import Faculty from './components/facultyCreate'
// import ApplyNow from './components/studentCourse'
// import CourseListing from './components/courseList'
import 'bootstrap/dist/css/bootstrap.min.css'


function App(props){
  return(
    <Router>
    <Container className='p-3'>
    <div >
       <Route path='/' component={Home} exact={true}/>
       <Route path='/register' component={UserReg}/>
       <Route path='/login' component={UserLogin} />
       <Route path='/customer' component={Customer}/>
       <Route path='/bookinglist' component={BookingList}/>
       <Route path='/driver' component={DriverBook}/>
       <Route path='/confirmbooking' component={BookingConfirm}/>
       {/* <Route path='/updateprofile/:id' component={UpdateProfile} /> */}
       {/* <Route path='/coursedetails' component={CourseList}/> */}
       
    </div>

    </Container>
</Router>
)
}
// const mstp=(state)=>{
//   return {
//     user:state.userAccnt
//   }
// }
// export default connect(mstp)(App)
export default App