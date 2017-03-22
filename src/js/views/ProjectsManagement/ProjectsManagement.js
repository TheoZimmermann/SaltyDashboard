import React from 'react';
import Box from 'grommet/components/Box';
import Header from '../../components/Header/';
import { RoleAwareComponent } from 'react-router-role-authorization';
import ProjectsList from '../../components/ProjectsList/';

class ProjectsManagement extends RoleAwareComponent {

  constructor(props) {
    super(props);
    this.userRoles = [JSON.parse(localStorage.getItem('user')).role];
    this.allowedRoles = ['administrator', 'Administrator', 'Admin', 'admin'];

  }

  render() {

    const jsx = (
      <Box>
        <Header />
         <ProjectsList/>
      </Box>
        );
    return this.rolesMatched() ? jsx : null;
  }
};
export default ProjectsManagement;