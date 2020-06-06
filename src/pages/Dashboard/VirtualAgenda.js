import React, { Component } from "react";
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBarVirtual from "./NavBarVirtual";
import ContainerVirtual from "./ContainerVirtual";


class VirtualAgenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: false,
    }
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    let update = false;
    let { users } = prevState;
    if (nextProps.users && Object.keys(nextProps.users).length !== 0 && !users) {
      users = nextProps.users;
      update = true;
    }
    if (update) {
      return {
        users,
      };
    } return null;
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <NavBarVirtual />
        <ContainerVirtual users={users} />
      </div>
    )
  }
}

VirtualAgenda.defaultProps = {
  users: {},
  firestore: {},
  firebase: {},
  history: {},
  match: {},
};
VirtualAgenda.propTypes = {
  users: PropTypes.shape(),
  history: PropTypes.func,
  match: PropTypes.func,
  firestore: PropTypes.shape(),
  firebase: PropTypes.shape(),
};

export default compose(
  firestoreConnect((props) => [
    { collection: 'users' }
  ]),
  connect((state, props) => ({
    users: state.firestore.ordered.users ? state.firestore.ordered.users : {}
  }
  )),
)(VirtualAgenda);


