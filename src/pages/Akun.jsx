import React, { useState } from "react";
import DataTable from "react-data-table-component";
import '../dist/css/Akun.css'
import { CiSearch } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import dekanImage from '../dist/gambar/dekan.jpg';
import kaprodiImage from '../dist/gambar/kaprodi.jpg';

const Akun = () => {
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    // Handle perubahan teks pencarian
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    // Handle edit
    const handleEdit = (id) => {
        navigate(`/editakun/${id}`);
    };

    // Handle delete
    const handleDelete = (id) => {
        console.log("Delete user with ID:", id);
    };

    // Navigasi ke halaman tambah akun
    const handleAddData = () => {
        navigate('/tambahakun'); 
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
                    <FaEdit 
                        className="edit-icon" 
                        onClick={() => handleEdit(row.id)} 
                    />
                    <MdDelete 
                        className="delete-icon" 
                        onClick={() => handleDelete(row.id)} 
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
            aksi: '11'
        },
        {
            id:2,
            no: '2',
            foto: kaprodiImage,
            nama: 'Ender',
            email: 'Ender@gmail.com',
            nip: 'xxxxxxxxxxxx',
            peran: 'Kaprodi',
            aksi: '11'
        }
    ]

    const filteredData = data.filter(row =>
        row.nama.toLowerCase().includes(searchText.toLowerCase()) ||
        row.email.toLowerCase().includes(searchText.toLowerCase()) ||
        row.nip.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="container_akun">
            <h1>Daftar Pengguna</h1>
            <div className="button-and-search">
                <button className="tambah_data_btn" onClick={handleAddData}>Tambah Data</button>

                {/* Input Pencarian */}
                <div className="search-container">
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

            <DataTable columns={columns} data={filteredData}></DataTable>
        </div>
    );
};

export default Akun;