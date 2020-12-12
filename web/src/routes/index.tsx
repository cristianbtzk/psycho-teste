import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Answers from '../pages/Answers';
import Questions from '../pages/Questions';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/questions" exact component={Questions} />
    <Route path="/answers" exact component={Answers} />
  </Switch>
);

export default Routes;
