import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserTypes from '../../Common/UserTypes';
import NotAuthorizedPage from '../../Components/NotAuthorizedPage';

export const PrivateRoute = ({ component: Component, userType, ...rest }) => (
    <Route {...rest} render={props => {
        
        if(!userType) {
            userType = UserTypes.STANDARD;
        }
        var loggedUser = JSON.parse(localStorage.getItem('user'));
        if(loggedUser) {
            if(loggedUser.userType >= userType){
                return <Component {...props} />
            }
            else {
                return <NotAuthorizedPage {...props} />
            }
        }
        else {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
    }} />
)

