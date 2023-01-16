import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);

  return (
    <div className='navbarcontainer'>
      <div className='navbarwrapper'>
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
            <Link to={"/cart"}>
              <Badge max={100} badgeContent={quantity} color='primary'>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
