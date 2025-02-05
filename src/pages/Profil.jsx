import React from "react";
import '../dist/css/Profil.css';
import adminImage from '../dist/gambar/admin.jpg';

const Profil = () => {
    return (
        <div className="container_profil">
            <h1>Profil</h1>
            <div className="form_box">
                <div className="image_container">
                    <img src={adminImage} alt="Admin" className="admin_image" />
                </div>
                <div className="form_container">
                    <form>
                        <label htmlFor="nama">Nama*</label>
                        <input type="text" placeholder="Masukan Nama" name="nama" />

                        <label htmlFor="email">Email*</label>
                        <input type="email" placeholder="Masukan Email" name="email" />

                        <label htmlFor="nip">Nip*</label>
                        <input type="text" placeholder="Masukan Nip" name="nip" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profil;