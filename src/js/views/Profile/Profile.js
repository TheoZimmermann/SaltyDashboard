import React from 'react';
import Box from 'grommet/components/Box';
import Header from '../../components/Header/';
import { RoleAwareComponent } from 'react-router-role-authorization';
import Cookies from 'js-cookie';
class Profile extends RoleAwareComponent {

  constructor(props) {
    super(props);
    this.userRoles = [Cookies.get('role')];
    this.allowedRoles = ['user', 'utilisateur'];

  }

  render() {

    const jsx = (
      <Box>
        <Header />
        <h1>MANAGE YOUR PROJECTS</h1>
      </Box>
    );
  return this.rolesMatched() ? jsx : null;
  }
};
export default Profile;