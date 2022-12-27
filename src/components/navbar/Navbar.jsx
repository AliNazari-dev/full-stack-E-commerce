import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='left'>
          <span className='language'>EN </span>
          <div className='searchContainer'>
            <input type='text' />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </div>
        </div>
        <div className='center'>
          <h1 className='logo'>ALEX</h1>
        </div>
        <div className='right'>
          <div className='menuItem'>Register</div>
          <div className='menuItem'>Sign In</div>
          <div className='menuItem'>
            <Badge max={100} badgeContent={4} color='primary'>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
