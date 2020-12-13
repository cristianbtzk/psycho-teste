import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Answers from '../pages/Answers';
import Questions from '../pages/Questions';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/questions" isPrivate exact component={Questions} />
    <Route path="/answers" isPrivate exact component={Answers} />
  </Switch>
);

export default Routes;
