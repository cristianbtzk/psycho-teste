import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Answers from '../pages/Answers';
import Questions from '../pages/Questions';
import SignIn from '../pages/SignIn';
import Ranking from '../pages/Ranking';
import RankingTest from '../pages/RankingTest';
import Menu from '../pages/Menu';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/menu" isPrivate exact component={Menu} />
    <Route path="/questions" isPrivate exact component={Questions} />
    <Route path="/answers" isPrivate exact component={Answers} />
    <Route path="/ranking" isPrivate exact component={Ranking} />
    <Route path="/ranking-test" isPrivate exact component={RankingTest} />
  </Switch>
);

export default Routes;
