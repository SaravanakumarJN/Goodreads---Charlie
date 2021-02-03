import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ShowBookCard } from '../components/showBookCard/ShowBookCard'
import { AllSearch } from '../pages/allSearch/AllSearch'
import { AllSpecificGenre } from '../pages/allSpecificGenre/AllSpecificGenre'
import { Genres } from '../pages/genres/Genres'

import { SpecificGenre } from '../pages/specificGenre/SpecificGenre'

const Routes = () => {
    return (
        <Switch>
            <Route exact path = "/genres">
                <Genres></Genres>
            </Route>
            <Route exact path = "/genre/:type">
                <SpecificGenre></SpecificGenre>
            </Route>
            <Route exact path = "/shelf/show/:genreType">
                <AllSpecificGenre></AllSpecificGenre>
            </Route>
            <Route exact path = "/book/show/:bookId">
                <ShowBookCard></ShowBookCard>
            </Route>
            <Route path = "/search/:query">
                <AllSearch></AllSearch>
            </Route>
        </Switch>
    )
}

export {Routes}
