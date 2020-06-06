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
     // currentUser: false,
      //users: false,
      //nameUsers:false,
      //photoUsers:'',
      //control: true,
    }
  }


  // static getDerivedStateFromProps(nextProps, prevState) {
  //   let update = false;
  //   let { users, currentUser, nameUsers, photoUsers } = prevState;
  //   if (nextProps.users && Object.keys(nextProps.users).length !== 0 && !users) {
  //     let user = nextProps.users.filter((item) => item.id === currentUser.uid);
  //     if (user.length !== 0) {
  //       users = 'exists';
  //       nameUsers = user[0].name;
  //       photoUsers = user[0].photo;
  //     } else {
  //       users = 'notExists';
  //     }
  //     update = true;
  //   }
  //   if (update) {
  //     return {
  //       users,
  //       nameUsers,
  //       photoUsers,
  //     };
  //   } return null;
  // }

  render() {
    const {nameUsers, photoUsers} = this.state;
    return (
      <div>
        <NavBarVirtual />
        {/* <ContainerVirtual nameUsers={nameUsers} photoUsers={photoUsers}/> */}
        <ContainerVirtual/>
      </div>
    )
  }
}

export default VirtualAgenda;

// VirtualAgenda.defaultProps = {
//   users: {},
//   firestore: {},
//   firebase: {},
//   history: {},
//   match: {},
// };
// VirtualAgenda.propTypes = {
//   users: PropTypes.shape(),
//   history: PropTypes.func,
//   match: PropTypes.func,
//   firestore: PropTypes.shape(),
//   firebase: PropTypes.shape(),
// };

// export default compose(
//   firestoreConnect((props) => [
//     { collection: 'users' }
//   ]),
//   connect((state, props) => ({
//     users: state.firestore.ordered.users ? state.firestore.ordered.users : {}
//   }
//   )),
// )(VirtualAgenda);


