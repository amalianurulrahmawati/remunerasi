import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import SidebarDekan from "./components/SidebarDekan";
import Login from './pages/Login';
import Akun from './pages/Akun';
import TambahAkun from "./pages/TambahAkun";
import Profil from './pages/Profil';
import EditAkun from './pages/EditAkun';
import DaftarProdi from "./pages/DaftarProdi";
import DaftarDosen from "./pages/DaftarDosen";
import DaftarDosen2 from "./pages/DaftarDosen2";
import ProfilDosen from "./pages/ProfilDosen";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

const AppContent = () => {
  const location = useLocation();

  // SidebarDekan
  const dekanRoutes = ["/daftarprodi", "/daftardosen", "/daftardosen2", "/profildosen"];

  // sidebar
  const showSidebarDekan = dekanRoutes.includes(location.pathname);

  if (location.pathname === "/") {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    );
  }

  return (
    <>
      {showSidebarDekan ? (
        <SidebarDekan>
          <Routes>
            <Route path="/daftarprodi" element={<DaftarProdi />} />
            <Route path="/daftardosen" element={<DaftarDosen />} />
            <Route path="/daftardosen2" element={<DaftarDosen2 />} />
            <Route path="/profildosen" element={<ProfilDosen />} />
          </Routes>
        </SidebarDekan>
      ) : (
        <Sidebar>
          <Routes>
            <Route path="/akun" element={<Akun />} />
            <Route path="/tambahakun" element={<TambahAkun />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/editakun/:id" element={<EditAkun />} />
          </Routes>
        </Sidebar>
      )}
    </>
  );
};

export default App;