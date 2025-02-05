import React from "react";
import '../dist/css/SidebarDekan.css'
import { FaUserAlt } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { IoLogOut } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const SidebarDekan = ({children}) => {
    const menuItem=[
        {
            path:"/profil",
            name:"Profil",
            icon:<FaUserAlt />
        },
        {
            path:"/daftarprodi",
            name:"Daftar Prodi",
            icon:<HiMiniUsers />
        },
        {
            path:"/",
            name:"Keluar",
            icon:<IoLogOut />
        }
    ]
    return (
        <div className="container_sidebardekan">
            <div className="sidebardekan">
                <div className="top_section">
                    <h1 className="logo">Logo</h1>
                    <hr className="divider"/>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default SidebarDekan;