import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import NewCourse from './course/NewCourse'
import MyCourses from './course/MyCourses'
import Course from './course/Course'
import EditCourse from './course/EditCourse'

const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/course/:courseId" component={Course}/>
        <PrivateRoute path="/teach/course/new" component={NewCourse}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <PrivateRoute path="/seller/courses" component={MyCourses}/>
        <Route path="/user/:userId" component={Profile}/>
        <PrivateRoute path="/teach/course/edit/:courseId" component={EditCourse}/>
      </Switch>
    </div>)
}

export default MainRouter
