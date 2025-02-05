import React, { useState } from "react";
import '../dist/css/Login.css'

const Login = () => {
    const [id, setId] = useState(""); 
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("ID:", id);  
        console.log("Password:", password);
    };

    return (
        <div className="login">
            <div className="login-container">
                <h2>Masuk Akun</h2>
                <h3>Silahkan Masukan Krendensial Akun Anda</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="id">ID</label> 
                        <input
                            type="text" 
                            id="id"  
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            required
                            placeholder="Masukkan ID Anda"  
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Masukkan Password Anda"
                        />
                    </div>
                    <button type="submit" className="login-button">Masuk</button>
                </form>
            </div>
        </div>
    );
};

export default Login;