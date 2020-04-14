// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// Styled-components
import styled from 'styled-components';
// Pages
import AppPage from './components/page/AppPage';
import Result from './components/page/ResultPage';
import QuizPage from './components/page/QuizPage';
// import NotFoundPage from 'components/page/NotFoundPage';
// Constants

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  justify-content: center;
`;

const globalNavigationBar = (
  <Wrapper>
    <Router>
      {/* Content */}
      <Switch>
        <Route exact path='/' component={AppPage} />
        <Route path='/result' component={Result} />
        <Route path='/quiz' component={QuizPage} />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </Router>
  </Wrapper>
)

ReactDOM.render(globalNavigationBar, document.getElementById('root'));
