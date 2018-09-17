import React from 'react';
import { renderRoutes } from 'react-router-config';

import Workspaces from './workspaces/workspaces';
import style from './app.scss';

class App extends React.Component {
  render() {
    return (
      <div className={style.appContainer}>
        <Workspaces />
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

export default App;
