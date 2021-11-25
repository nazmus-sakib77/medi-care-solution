import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';

import useAuth from '../useAuth/useAuth';


const PrivateRouter = ({children, ...rest }) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return <Spinner animation="border" variant="primary" />
        

    }
    return (
        <Route
       {...rest}
       render={({location}) => user?.displayName ? (children) : (<Redirect
       to={{
           pathname:"/login",
           state: { from: location }
       }}
       >
  
       </Redirect>)}
     
  
      ></Route>
    )
};

export default PrivateRouter;