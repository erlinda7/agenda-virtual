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
      currentUser: false,
      users: false,
      control: true,
    }
  }

  componentDidMount() {
    const currentUser = this.props.firebase.auth().currentUser;
    this.setState({
      currentUser,
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let update = false;
    let { users, currentUser } = prevState;
    if (nextProps.users && Object.keys(nextProps.users).length !== 0 && !users) {
      let user = nextProps.users.filter((item) => item.id === currentUser.uid);
      if (user.length !== 0) {
        //console.log('trueeeee');
        users = 'exists';
      } else {
        users = 'notExists';

      }
      // users = user[0];
      update = true;
    }
    if (update) {
      return {
        users,
      };
    } return null;
  }

  componentDidUpdate = async () => {
    const { users, currentUser } = this.state;
    const { firestore } = this.props;
    const name = currentUser.displayName;
    const email = currentUser.email;
    const telephone = currentUser.phoneNumber;
    const uid = currentUser.uid;
    const providerId = currentUser.providerData[0].providerId;
    console.log('current', currentUser);
    console.log('provider', currentUser.providerData[0].providerId);

    if (users === 'notExists') {
      console.log('user db', this.state.users);
      if (providerId === 'phone') {
        await firestore.set(
          { collection: 'users', doc: uid },
          {
            name:'',
            email:'',
            telephone,
            uid,
            adress:'',
            photo:"https://firebasestorage.googleapis.com/v0/b/agendavirtual-f818c.appspot.com/o/photoDefault%2Fphoto_.jpg?alt=media&token=7521d6fb-f361-4b1f-b221-313d5e310aaa",
          }
        )
      }
      if (providerId === 'google.com') {
        await firestore.set(
          { collection: 'users', doc: uid },
          {
            name,
            email,
            telephone:'',
            uid,
            adress:'',
            photo:"https://firebasestorage.googleapis.com/v0/b/agendavirtual-f818c.appspot.com/o/photoDefault%2Fphoto_.jpg?alt=media&token=7521d6fb-f361-4b1f-b221-313d5e310aaa",
          }
        )
      }
    }

  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <NavBarVirtual />
        <ContainerVirtual />
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


