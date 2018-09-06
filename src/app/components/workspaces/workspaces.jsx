import React from 'react';

import style from './workspaces.scss';

class Workspaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workspaces: [
        {
          id: '1',
          name: 'Workspace 1',
          active: 'true',
        },
        {
          id: '2',
          name: 'Workspace 2',
          active: 'true',
        },
        {
          id: '3',
          name: 'Workspace 3',
          active: 'true',
        },
      ],
    };
  }

  render() {
    return (
      <div className={style.workspacesContainer}>
        {this.state.workspaces.map(workspace => {
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

export default Workspaces;
