// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// Styled-components
import styled, { ThemeProvider } from 'styled-components';
// Pages
import AppPage from './components/page/AppPage';
// import NotFoundPage from 'components/page/NotFoundPage';
// UI components
// import Header from 'components/ui/Header';
// Constants

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const globalNavigationBar = (
  <Wrapper>
    <Router>
      {/* Header */}
      {/* <Header /> */}

      {/* Content */}
      <Switch>
          <Route exact path='/' component={AppPage} />
          {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </Router>
  </Wrapper>
)

ReactDOM.render(globalNavigationBar, document.getElementById('root'));
