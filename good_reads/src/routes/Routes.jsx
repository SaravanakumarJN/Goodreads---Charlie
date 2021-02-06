import React from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import { ShowBookCard } from "../components/showBookCard/ShowBookCard";
import { AllSearch } from "../pages/allSearch/AllSearch";
import { AllSpecificGenre } from "../pages/allSpecificGenre/AllSpecificGenre";
import { Genres } from "../pages/genres/Genres";
import { SpecificGenre } from "../pages/specificGenre/SpecificGenre";
import { Discussion } from "../pages/Discussion/Discussion";
import { DiscussionPost } from "../pages/Discussion/DiscussionPost";
// import { Home } from "../pages/Discussion/Home";
import { Home } from "../pages/Home/Home";
import DiscussionArea from "../pages/Discussion/DiscussionArea";
import { Trivia } from "../pages/Trivia/Trivia";
import { People } from "../pages/people/People.jsx";
import { PeopleShow } from "../pages/PeopleShow/PeopleShow";
import { Navbar } from "../components/Navbar/Navbar";
import { MyBooks } from "../pages/MyBooks/MyBooks";
import { LandingPage } from "../pages/Landing_page/LandingPage";
import { Footer } from "../components/Footer/Footer";
import { Group } from "../pages/allOption/Group/Group";
import { Main } from "../pages/allOption/main/Main";
import { Chat } from "../pages/messaging/chat/Chat";
import { Quotes } from "../pages/Quotes/Quotes";
import { MyQuotes } from "../pages/Quotes/MyQuotes";
import { AddQuotes } from "../pages/Quotes/AddQuotes";
import {PrivateRoutes} from './PrivateRoutes'

const Routes = () => {
  let { path } = useRouteMatch();

  console.log(path);
  return (
    <div className="container">
      <Switch>
        <Route exact path="/login">
          <LandingPage />
        </Route>
        <PrivateRoutes exact path="/genres">
          <Navbar></Navbar>
          <Genres></Genres>
        </PrivateRoutes>
        <PrivateRoutes exact path="/genre/:type">
          <Navbar></Navbar>
          <SpecificGenre></SpecificGenre>
        </PrivateRoutes>
        <PrivateRoutes exact path="/shelf/show/:genreType">
          <Navbar></Navbar>
          <AllSpecificGenre></AllSpecificGenre>
        </PrivateRoutes>
        <PrivateRoutes exact path="/book/show/:bookId">
          <Navbar></Navbar>
          <ShowBookCard></ShowBookCard>
        </PrivateRoutes>
        <PrivateRoutes path="/search/:query">
          <Navbar></Navbar>
          <AllSearch></AllSearch>
        </PrivateRoutes>
        <PrivateRoutes exact path="/">
          <Navbar></Navbar>
          <Home />
        </PrivateRoutes>
        <PrivateRoutes exact path="/mybooks">
          <Navbar></Navbar>
          <MyBooks />
        </PrivateRoutes>
        <PrivateRoutes exact path="/discussion">
          <Navbar></Navbar>
          <Discussion />
        </PrivateRoutes>
        <PrivateRoutes exact path="/discussion/post">
          <Navbar></Navbar>
          <DiscussionPost />
        </PrivateRoutes>
        <PrivateRoutes exact path="/discussion/area">
          <Navbar></Navbar>
          <DiscussionArea />
        </PrivateRoutes>
        <PrivateRoutes exact path="/trivia">
          <Navbar></Navbar>
          <Trivia />
        </PrivateRoutes>
        <PrivateRoutes exact path="/quotes">
          <Navbar></Navbar>
          <Quotes />
        </PrivateRoutes>
        <PrivateRoutes exact path="/myQuotes">
          <Navbar></Navbar>
          <MyQuotes />
        </PrivateRoutes>
        <PrivateRoutes exact path="/addQuotes">
          <Navbar></Navbar>
          <AddQuotes />
        </PrivateRoutes>
        <PrivateRoutes exact path="/people">
          <Navbar></Navbar>
          <People></People>
        </PrivateRoutes>
        <PrivateRoutes exact path="/people/show/:id">
          <Navbar></Navbar>
          <PeopleShow />
        </PrivateRoutes>
        <PrivateRoutes exact path="/group">
          <Navbar></Navbar>
          <Main />
        </PrivateRoutes>
        <PrivateRoutes exact path="/group/:g/:q">
          <Navbar></Navbar>
          <Group />
        </PrivateRoutes>
        <PrivateRoutes exact path="/chat">
          <Navbar></Navbar>
          <Chat />
        </PrivateRoutes>

        <Routes>
          <p style={{ textAlign: "center" }}>
            <h1>Sorry, you’ve reached the end of the sidewalk.</h1>
            <br />
            <br />
            Yes we’ll walk with a walk that is measured and slow, And we’ll go
            <br />
            where the chalk-white arrows go, For the children, they mark, and
            <br />
            the children, they know The place where the sidewalk ends.
            <br />
            <br />- Silverstein, Where the Sidewalk Ends
          </p>
        </Routes>
      </Switch>
      <Footer></Footer>
    </div>
  );
};

export { Routes };
