import React, { useState } from "react";
import DataTable from "react-data-table-component";
import '../dist/css/DaftarDosen2.css';
import { PiChartBarFill } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoEyeSharp } from 'react-icons/io5';
import dekanImage from '../dist/gambar/dekan.jpg';
import kaprodiImage from '../dist/gambar/kaprodi.jpg';
import { useNavigate } from "react-router-dom";

const DaftarDosen2 = () => {
    const iconList = [
        { icon: <PiChartBarFill size={35} />, name: "Widget 1", description: "Detail Widget 1" },
        { icon: <FaUserFriends size={35} />, name: "Daftar Dosen", description: "Detail Daftar Dosen" },
        { icon: <FaBook size={35} />, name: "Widget 2", description: "Detail Widget 1" }
    ];

    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const aksi = (dosen) => {
        navigate("/profildosen", { state: { dosen } }); 
    };

    const columns = [
        {
            name: 'No',
            selector: row => row.no
        },
        {
            name: 'Foto',
            cell: row => (
                <img
                    src={row.foto}
                    className="foto-img"
                />
            )
        },
        {
            name: 'Nama',
            selector: row => row.nama
        },
        {
            name: 'Email',
            selector: row => row.email
        },
        {
            name: 'Nip',
            selector: row => row.nip
        },
        {
            name: 'Peran',
            selector: row => row.peran
        },
        {
            name: 'Aksi',
            cell: row => (
                <div className="aksi-icons">
                    <IoEyeSharp
                        className="view-icon"
                        onClick={() => aksi(row.id)} 
                    />
                </div>
            ),
        }
    ];

    const data = [
        {
            id: 1,
            no: '1',
            foto: dekanImage,
            nama: 'Baskara',
            email: 'Baskara@gmail.com',
            nip: 'xxxxxxxxxxxx',
            peran: 'Dekan',
        },
        {
            id: 2,
            no: '2',
            foto: kaprodiImage,
            nama: 'Ender',
            email: 'Ender@gmail.com',
            nip: 'xxxxxxxxxxxx',
            peran: 'Kaprodi',
        }
    ];

    const filteredData = data.filter(row =>
        row.nama.toLowerCase().includes(searchText.toLowerCase()) ||
        row.email.toLowerCase().includes(searchText.toLowerCase()) ||
        row.nip.toLowerCase().includes(searchText.toLowerCase())
    );

    console.log(filteredData);

    return (
        <div className="container_daftardosen2">
            <div className="daftardosen2">
                <h1>Daftar Program Studi</h1>
            </div>
            <div className="icon-box-daftardosen2">
                {iconList.map((item, index) => (
                    <div className="icon-item-daftardosen2" key={index}>
                        <div className="icon">{item.icon}</div>
                        <div>
                            <p className="icon-name-daftardosen2">{item.name}</p>
                            <p className="icon-description-daftardosen2">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="button-and-search-daftardosen2">
                <div className="search-container-daftardosen2">
                    <CiSearch className="search-icon" />
                    <input
                        type="text"
                        className="search_input"
                        placeholder="Search"
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <DataTable
                columns={columns}
                data={filteredData}
                pagination
                highlightOnHover
                striped
            />
        </div>
    );
};

export default DaftarDosen2;
