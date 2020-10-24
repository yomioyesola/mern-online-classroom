import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './client/core/Home';
import Users from './client/user/Users';
import Signup from './client/user/Signup';
import Signin from './user/Signin';
import EditProfile from "./client/user/EditProfile";
import Profile from './client/user/Profile';
import PrivateRoute from './client/auth/PrivateRoute';
import Menu from "./client/core/Menu";
import NewCourse from './client/course/NewCourse';
import Course from './client/course/Course';
import EditCourse from './client/course/EditCourse';
import MyCourses from './client/course/MyCourses';
import Enrollment from './client/enrollment/Enrollment';

const MainRouter = () => {
    return (<div>
        <Menu/>
        <Switch>
            <Route exact path= "/" component= {Home} />
            <Route path= "/users" component= {Users} />
            <Route path= "/signup" component= {Signup} />
            <Route path= "/signin" component= {Signin} />
            <Route path= "/user/:userId" component= {Profile} />
            <Route path= "/course/:courseId" component= {Course} />
            <PrivateRoute path= "/user/edit/:userId" component= {EditProfile} />
            <PrivateRoute path= "/teach/courses" component= {MyCourses} />
            <PrivateRoute path= "/teach/course/new" component= {NewCourse} />
            <PrivateRoute path= "/teach/course/edit/:courseId" component= {EditCourse} />
            <PrivateRoute path= "/teach/course/:courseId" component= {Course} />
            <PrivateRoute path= "/learn/:enrollmentId" component= {Enrollment} />
        </Switch>
    </div>);
}

export default MainRouter;