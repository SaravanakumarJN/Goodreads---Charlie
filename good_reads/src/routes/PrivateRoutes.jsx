import React from 'react'
import {useSelector} from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoutes = ({path, children, redirectPath = "/login", exact = true}) => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"))

    if(isLogin === true){
        return(
            <Route path = {path} exact = {exact}>
                {children}
            </Route>
        )
    }

    return (
        <Redirect to = {redirectPath}></Redirect>
    )
}

export {PrivateRoutes}
