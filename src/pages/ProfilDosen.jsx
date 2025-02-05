import React from "react";
import '../dist/css/ProfilDosen.css'
import { FaRegUserCircle } from "react-icons/fa";

const ProfilDosen = () => {
    const iconList = [
        { icon: <FaRegUserCircle size={70} />, name: "Detail 1", description: "Uraian Detail 1" }
    ];
    
    return (
        <div className="container_profildosen">
            <div className="profildosen">
                <h1>Daftar Dosen Prodi X</h1>
            </div>
            <div className="icon-box-profildosen">
                {iconList.map((item, index) => (
                    <div className="icon-item-profildosen" key={index}>
                    <div className="icon">{item.icon}</div>
                    <div>
                        <p className="icon-name-profildosen">{item.name}</p>
                        <p className="icon-description-profildosen">{item.description}</p>
                    </div>
                </div>
                ))}
                <div className="teks1">
                    <h3>Detail 2</h3>
                    <p>Uraian Detail 2</p>
                </div>
            </div>
            <button className="pendidikan_btn">Pendidikan</button>
            <button className="penelitian_btn">Penelitian</button>
        </div>
    );
};

export default ProfilDosen;