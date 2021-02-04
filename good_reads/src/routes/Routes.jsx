import React from 'react'
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import { ShowBookCard } from '../components/showBookCard/ShowBookCard'
import { AllSearch } from '../pages/allSearch/AllSearch'
import { AllSpecificGenre } from '../pages/allSpecificGenre/AllSpecificGenre'
import { Genres } from '../pages/genres/Genres'
import { SpecificGenre } from '../pages/specificGenre/SpecificGenre'
import { Discussion } from "../pages/Discussion/Discussion";
import { DiscussionPost } from "../pages/Discussion/DiscussionPost";
import { Home } from "../pages/Discussion/Home";
import DiscussionArea from "../pages/Discussion/DiscussionArea";
import { Trivia } from "../pages/Trivia/Trivia";
import { People } from '../pages/people/People.jsx'
import { PeopleShow } from '../pages/PeopleShow/PeopleShow'
import {LandingPage} from "../pages/Landing_page/LandingPage"
import { Navbar } from '../components/MyBooksCard/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'

import { Group } from '../pages/allOption/Group/Group'
import {Main} from "../pages/allOption/main/Main"


const Routes = () => {
    let { path } = useRouteMatch()
    
    console.log(path)
    return (
            
        <div className = "container">
            <Navbar></Navbar>
            <Switch>
            {/* <Route exact path="/login">
                    <LandingPage/>
                </Route> */}
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
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/discussion">
                    <Discussion />
                </Route>
                <Route exact path="/discussion/post">
                    <DiscussionPost />
                </Route>
                <Route exact path="/discussion/area">
                    <DiscussionArea />
                </Route>
                <Route exact path="/trivia">
                    <Trivia />
                </Route>
                <Route exact path="/people">
                    <People></People>
                </Route>
                <Route exact path="/people/show/:id">
                    <PeopleShow/>
                </Route>
                 <Route exact path="/group">
                <Main/>
            </Route>
            <Route exact path="/group/:g/:q">
                <Group/>
            </Route>
            </Switch>
            <Footer></Footer>
        </div>
    )
}

export { Routes };
