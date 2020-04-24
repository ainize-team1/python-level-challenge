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
import AnswerPage from './components/page/AnswerPage';
// import NotFoundPage from 'components/page/NotFoundPage';
import ContextProvider from './components/context/ContextProvider';
// Constants
import '../public/style.css';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;

const globalNavigationBar = (
  <ContextProvider>
    <Wrapper>
      <Router>
        {/* Content */}
        <Switch>
          <Route exact path='/' component={AppPage} />
          <Route path='/quiz' component={QuizPage} />
          <Route path='/answer' component={AnswerPage} />
          <Route path='/result' component={Result} />
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
      </Router>
    </Wrapper>
  </ContextProvider>
)

ReactDOM.render(globalNavigationBar, document.getElementById('root'));
