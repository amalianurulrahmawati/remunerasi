import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../dist/css/EditAkun.css'

const EditAkun = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleBatalClick = () => {
        navigate("/akun");
    };
    return (
        <div className="container_editakun">
            <h1>Edit Akun {id}</h1>
            <div className="form_box_editakun">
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

export default EditAkun;