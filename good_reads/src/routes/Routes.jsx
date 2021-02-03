import React from 'react'
import { Route } from 'react-router-dom'
import { People } from '../pages/people/People.jsx'
import { PeopleShow } from '../pages/PeopleShow/PeopleShow'

const Routes = () => {
    return (
        <>
        <Route exact path="/">
            <People></People>
        </Route>
            <Route exact path="/people/show/:id">
                <PeopleShow/>
            </Route>
        </>
    )
}

export {Routes}
