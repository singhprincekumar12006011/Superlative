import React from 'react';
import { Link } from "react-router-dom";
import './Sidebar.css';
import logo from './logo-nav.png';
import { FaHome } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { RiProductHuntLine, RiLoginBoxFill } from "react-icons/ri";
import { MdAppRegistration } from "react-icons/md";

const Sidebar = () => {
  return (
    <>

    <aside className='sb-body'>
        <div >
        <img src={logo} alt="Logo" style={{ width: "150px" }} />
        </div>
        <ul className='sb-menu'>
            <li className='a'><Link to="/"><FaHome/> Home</Link></li>
            <li className='a'><Link to="/add"> <MdProductionQuantityLimits /> Add Product</Link></li>
            <li className='a'><AiFillProduct /> Employe Details</li>
            <li className='a'><RiProductHuntLine /> Stock Details</li>
            <li className='a'><RiProductHuntLine /> Product2</li>
            <li className='a'><RiProductHuntLine /> Product3</li>
            <div className='b'>
              <li className='a'><RiLoginBoxFill /> Login</li>
              <li className='a'><MdAppRegistration /> Sign Up</li>
            </div>
        </ul>
    </aside>
    </>
  )
}


export default Sidebar;
