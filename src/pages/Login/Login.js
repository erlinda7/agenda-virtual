import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { firestoreConnect } from 'react-redux-firebase';
import { startUi } from './ui';
import {
  Card,
  CardBody,
  CardGroup,
  Row,
  Col,
  Container,
  Form,
} from 'reactstrap';
import { CardHeader } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

class LoginPhone extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    startUi('#firebaseui-auth-container');
  }

  render() {
    return (
      // eslint-disable-next-line react/style-prop-object
      <div className="bg-dark" >
        <div className="app flex-row align-items-center">
          <Container >
            <Row className=" justify-content-center align-items-center vh-100">
              <Col md="6">
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <Form>
                        <p className="text-center"><b>CHOOSE HOW TO SIGN IN</b></p>
                        <br />
                        <div id='firebaseui-auth-container'></div>
                        <div id="loader">Loading...</div>
                      </Form>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </div >
    )
  }
}

export default firestoreConnect()(LoginPhone);