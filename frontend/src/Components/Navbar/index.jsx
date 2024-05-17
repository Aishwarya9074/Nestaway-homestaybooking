import React from 'react';
import { Menu, Dropdown } from 'antd'; // Import Dropdown and Menu components from Ant Design
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const navigates = useNavigate();
  const hostnav = useNavigate();
  const hostsignup = useNavigate();
  const adminsignup= useNavigate();
  const adminlogins= useNavigate();
  const homeNavigate=useNavigate()



  const signClick = () => {
    navigate('/user/signup');
  };

  const logClick = () => {
    navigates('/user/login');
  };

  const hostlogins = () => {
    hostnav('/host/login');
  };

  const hostsigns = () => {
    hostsignup('/host/signup');
  };
  const adminsigns=()=>{
    adminsignup('/admin/signup')

  }
  const adminlogin=()=>{
    adminlogins('/admin/login')

  }
  const logout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('id')
    homeNavigate('/')
  }

  const userMenu = (
    <Menu className="dropdown-menu">
      <Menu.Item className="dropdown-menu-item" onClick={logClick}>
        <a>Login</a>
      </Menu.Item>
      <Menu.Item className="dropdown-menu-item" onClick={signClick}>
        <a>Signup</a>
      </Menu.Item>
      <Menu.Item className="dropdown-menu-item" onClick={logout}>
        <a href="">Logout</a>
      </Menu.Item>
    </Menu>
    
  );
  
  // JSX for the host dropdown
  const hostMenu = (
    <Menu className="dropdown-menu">
      <Menu.Item className="dropdown-menu-item" onClick={hostlogins}>
        <a href="">Login</a>
      </Menu.Item>
      <Menu.Item className="dropdown-menu-item" onClick={hostsigns}>
        <a href="">Signup</a>
      </Menu.Item>
      <Menu.Item className="dropdown-menu-item" onClick={logout}>
        <a href="">Logout</a>
      </Menu.Item>
      
    
    </Menu>
  );
  const adminMenu=(
    <Menu className="dropdown-menu">
    <Menu.Item className="dropdown-menu-item" onClick={adminlogin} >
      <a href="">Login</a>
    </Menu.Item>
    <Menu.Item className="dropdown-menu-item" onClick={adminsigns} >
      <a href="">Signup</a>
    </Menu.Item>
    <Menu.Item className="dropdown-menu-item" onClick={logout}>
        <a href="">Logout</a>
      </Menu.Item>
    </Menu>
  

  )

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo1.png" alt="" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Services</Link></li>
        {/* <li><Link to="/contact">Contact us</Link></li> */}
        <Dropdown overlay={userMenu} placement="bottomRight">
  <a style={{margin:'10px'}} className="ant-dropdown-link"><p style={{color:'black'}}>User</p></a>
</Dropdown>

<Dropdown overlay={hostMenu} placement="bottomRight">
  <a className="ant-dropdown-link"><p style={{color:'black'}}>Host</p></a>
</Dropdown>
<Dropdown overlay={adminMenu} placement="bottomRight">
  <a className="ant-dropdown-link"><p style={{color:'black'}}>Admin
  <i class="fa-solid fa-user"></i>
  </p></a>
</Dropdown>
    
    
      </ul>
    </nav>
  );
};

export default Navbar;
