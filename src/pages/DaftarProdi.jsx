import React from "react";
import { useNavigate } from "react-router-dom";
import '../dist/css/DaftarProdi.css'
import { FaRegUserCircle } from "react-icons/fa";
import { PiChartBarFill } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

const DaftarProdi = () => {
    const prodiList = [
        "Program Studi 1",
        "Program Studi 2",
        "Program Studi 3",
        "Program Studi 4",
        "Program Studi 5",
        "Program Studi 6",
        "Program Studi 7",
        "Program Studi 8",
        "Program Studi 9"
    ];

    const iconList = [
        { icon: <PiChartBarFill size={35} />, name: "Widget 1", description: "Detail Widget 1" },
        { icon: <FaUserFriends size={35} />, name: "Daftar Dosen", description: "Detail Daftar Dosen" },
        { icon: <FaBook size={35} />, name: "Widget 2", description: "Detail Widget 1" }
    ];

    const navigate = useNavigate();

    const handleProdiClick = () => {
        navigate('/daftardosen');
    };
    
    return (
        <div className="container_daftarprodi">
            <div className="daftarprodi">
                <h1>Daftar Program Studi</h1>
            </div>
            <div className="icon-box">
                {iconList.map((item, index) => (
                    <div className="icon-item" key={index}>
                    <div className="icon">{item.icon}</div>
                    <div>
                        <p className="icon-name">{item.name}</p>
                        <p className="icon-description">{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
            <div className="componen_daftarprodi">
                {prodiList.map((prodi, index) => (
                    <div className="prodi-box" key={index} onClick={handleProdiClick}>
                        <div className="icon-container">
                            <FaRegUserCircle size={30} />
                        </div>
                        <h3>{prodi}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DaftarProdi;