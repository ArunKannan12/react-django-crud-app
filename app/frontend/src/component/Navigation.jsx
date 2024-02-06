import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import {GiGraduateCap } from 'react-icons/gi'
import  {Link} from 'react-router-dom'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter,
  } from 'cdbreact';

const Navigation = () => {
  return (
    <div>
        <Navbar bg="dark" variant='dark' expand="lg">
        
          <Navbar.Brand href="#home">
            <GiGraduateCap color='gray' size={50} style={{marginLeft:'50px'}}/>
           <span style={{marginLeft:'10px'}}>Student Management Application</span>
          </Navbar.Brand>
        
      </Navbar>
      <div style={{height:'100vh',display:'flex',float:'left'}}>
      <CDBSidebar textColor='#333' backgroundColor='#f0f0f0' >
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Navigation</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <Link exact="true" to="/" >
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </Link>
            <Link exact="true" to="/students" >
              <CDBSidebarMenuItem icon="list">Students List</CDBSidebarMenuItem>
            </Link>
            <Link exact="true" to='/managestudents' >
              <CDBSidebarMenuItem icon="user">Manage Students</CDBSidebarMenuItem>
            </Link>
            
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
      </div>
    </div>
  )
}

export default Navigation