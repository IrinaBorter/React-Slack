import React from 'react';
import { connect } from 'react-redux';

import style from './workspaces.scss';

class Workspaces extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { workspaces } = this.props;

    return (
      <div className={style.workspacesContainer}>
        {workspaces.map(workspace => {
          return (
            <div className={style.workspaceItem} title={workspace.name} key={workspace.id}>{this.getWorkspaceName(workspace)}</div>
          );
        })}
      </div>
    );
  }

  getWorkspaceName(workspace) {
    return workspace.name.split(' ').slice(0, 2).map(word => word[0]).join('-');
  }
}

const mapStateToProps = (state) => ({ workspaces: state.workspace.workspaces });

export default connect(mapStateToProps, {})(Workspaces);
