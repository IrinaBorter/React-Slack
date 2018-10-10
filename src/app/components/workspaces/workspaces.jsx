import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadWorkspacesStarted } from '../../store/actions/workspace';

import style from './workspaces.scss';

class Workspaces extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memberId: 1,
    };
  }

  componentDidMount() {
    const { memberId } = this.state;

    this.props.loadWorkspacesStarted(memberId);
  }

  render() {
    const { workspaces } = this.props;

    return (
      <div className={style.workspacesContainer}>
        {workspaces.map(workspace => {
          return (
            <Link to={`/workspaces/${workspace.id}`} key={workspace.id}>
              <div className={style.workspaceItem} title={workspace.name}>{this.getWorkspaceName(workspace)}</div>
            </Link>
          );
        })}
      </div>
    );
  }

  getWorkspaceName(workspace) {
    return workspace.name.split(' ').slice(0, 2).map(word => word[0]).join('-');
  }
}

const mapStateToProps = (state) => ({ workspaces: state.getIn(['workspace', 'workspaces']) });
const mapActionsToProps = { loadWorkspacesStarted };

export default connect(mapStateToProps, mapActionsToProps)(Workspaces);
