import React from "react";
import { Route, Switch } from "react-router-dom";
import { Discussion } from "../pages/Discussion/Discussion";
import { DiscussionPost } from "../pages/Discussion/DiscussionPost";
import { Home } from "../pages/Discussion/Home";
import DiscussionArea from "../pages/Discussion/DiscussionArea";
import { Trivia } from "../pages/Trivia/Trivia";
const Routes = () => {
  return (
    <>
      <Switch>
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
      </Switch>
    </>
  );
};

export { Routes };
