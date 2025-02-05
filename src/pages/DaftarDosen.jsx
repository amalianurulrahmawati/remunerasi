import React from "react";
import '../dist/css/DaftarDosen.css'
import { FaRegUserCircle } from "react-icons/fa";
import { PiChartBarFill } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const DaftarDosen = () => {
    const dosenList = [
        "Dosen",
        "Dosen",
        "Dosen",
        "Dosen",
        "Dosen",
        "Dosen",
        "Dosen",
        "Dosen",
        "Dosen"
    ];

    const iconList = [
        { icon: <PiChartBarFill size={35} />, name: "Widget 1", description: "Detail Widget 1" },
        { icon: <FaUserFriends size={35} />, name: "Daftar Dosen", description: "Detail Daftar Dosen" },
        { icon: <FaBook size={35} />, name: "Widget 2", description: "Detail Widget 1" }
    ];
    
    const navigate = useNavigate();

    const handleClick = (dosen) => {
        navigate("/profildosen", { state: { dosen } }); 
    };

    return (
        <div className="container_daftardosen">
            <div className="daftardosen">
                <h1>Daftar Program Studi</h1>
            </div>
            <div className="icon-box-daftardosen">
                {iconList.map((item, index) => (
                    <div className="icon-item-daftardosen" key={index}>
                    <div className="icon">{item.icon}</div>
                    <div>
                        <p className="icon-name-daftardosen">{item.name}</p>
                        <p className="icon-description-daftardosen">{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
            <div className="componen_daftardosen">
                {dosenList.map((dosen, index) => (
                    <div className="dosen-box-daftardosen" key={index}>
                        <div className="icon-container-daftardosen">
                            <FaRegUserCircle size={30} />
                        </div>
                        <div className="text-container-daftardosen">
                            <h3>{dosen}</h3>
                            <p className="detail-dosen">Detail Dosen</p>
                        </div>
                        <div className="icon-eye-container">
                            <IoEyeSharp size={25} onClick={() => handleClick(dosen)}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DaftarDosen;