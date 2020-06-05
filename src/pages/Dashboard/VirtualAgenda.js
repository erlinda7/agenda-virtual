import React from "react";
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import NavBarVirtual from "./NavBarVirtual";
import ContainerVirtual from "./ContainerVirtual";
import firebase from '../../config/firebaseConfig';

class VirtualAgenda extends React.Component {
    render() {
        console.log('props virtual', this.props);

        return (
            <div>
                <NavBarVirtual />
                <ContainerVirtual />
            </div>
        )
    }
}

export default VirtualAgenda;

