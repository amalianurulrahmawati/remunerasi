import React from "react";
import { useNavigate } from "react-router-dom";
import '../dist/css/TambahAkun.css'

const TambahAkun = () => {
    const navigate = useNavigate();

    const handleBatalClick = () => {
        navigate("/akun");
    };
    return (
        <div className="container_tambahakun">
            <h1>Tambah Akun</h1>
            <div className="form_box_tambahakun">
                <form>
                    <label htmlFor="nama">Nama*</label>
                    <input type="text" placeholder="Masukan Nama" name="nama"/>

                    <label htmlFor="email">Email*</label>
                    <input type="email" placeholder="Masukan Email" name="email"/>

                    <label htmlFor="nip">Nip*</label>
                    <input type="text" placeholder="Masukan Nip" name="nip"/>

                    <label htmlFor="Peran">Peran*</label>
                    <input type="text" placeholder="Masukan Peran Pengguna" name="peran"/>

                    <label htmlFor="Foto">Foto*</label>
                    <input type="file" placeholder="Select foto" name="foto"/>

                    <div className="button_group">
                        <button type="batal" className="batal" onClick={handleBatalClick}>Batal</button>
                        <button type="submit" className="simpan">Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TambahAkun;