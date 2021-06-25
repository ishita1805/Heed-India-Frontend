import React, { Suspense } from 'react'
import {
    Route
} from "react-router-dom";
import Admin from '../containers/admin/Admin/Admin'

const ProtectedRoute = ({Component,path,...props}) => {
    return (
        <Route 
        path={path} 
        exact
        render={
            (props) => localStorage.getItem("pass")?<Suspense fallback={<></>}><Component path={path} {...props}/></Suspense>:<Admin/> 
        }/>
        
    )
}

export default ProtectedRoute